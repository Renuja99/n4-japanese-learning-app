import Link from "next/link";
import { BarChart3, Check, Flame, Search, Sparkles, Star } from "lucide-react";
import { getProfile } from "@/lib/auth";
import { getCourse } from "@/lib/queries";
import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/CourseCard";
import { IconButton, Shell } from "@/components/Shell";

export const dynamic = "force-dynamic";

const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];

export default async function HomePage({ searchParams }: { searchParams: Promise<{ part?: string }> }) {
  const { part: partFilter } = await searchParams;
  const profile = await getProfile();
  const { parts, done } = await getCourse(profile?.id);
  const sentenceCounts = await Promise.all(
    parts.map((p) => prisma.example.count({ where: { grammarPoint: { lesson: { partId: p.id } } } })),
  );

  const allLessons = parts.flatMap((p) => p.lessons.map((l) => ({ ...l, part: p })));
  const next = allLessons.find((l) => !done.has(l.id)) ?? allLessons[0];
  const visible = partFilter ? parts.filter((p) => p.slug === partFilter) : parts;
  const name = profile?.displayName ?? "there";

  return (
    <Shell>
      {/* Header */}
      <header className="flex items-center justify-between">
        <Link
          href="/profile"
          className="grid h-12 w-12 place-items-center rounded-full bg-pink text-lg font-bold text-white ring-4 ring-white"
          aria-label="Profile"
        >
          {name.slice(0, 1).toUpperCase()}
        </Link>
        <div className="flex gap-2">
          <IconButton label="Progress" href="/progress">
            <BarChart3 size={20} />
          </IconButton>
          <IconButton label="Streak" href="/progress">
            <Flame size={20} />
            {(profile?.streak ?? 0) > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-bad px-1 text-[10px] font-bold text-white">
                {profile!.streak}
              </span>
            )}
          </IconButton>
        </div>
      </header>

      <h1 className="mt-6 text-[34px] leading-[1.12] font-semibold tracking-tight">
        Grow your Japanese
        <br />
        with focus.
      </h1>

      {/* Stats strip */}
      <div className="mt-4 flex gap-2 text-sm font-semibold">
        <span className="chip bg-white">
          <Flame size={16} className="text-rust" /> {profile?.streak ?? 0} day streak
        </span>
        <span className="chip bg-white">
          <Star size={16} className="text-pink" /> {profile?.xp ?? 0} XP
        </span>
        <span className="chip bg-white">
          <Check size={16} className="text-good" /> {done.size}
        </span>
      </div>

      {/* Continue + search */}
      <div className="mt-5 flex gap-3">
        <Link href={`/lessons/${next.slug}`} className="btn3d btn-lav flex-1 justify-start truncate text-[15px] font-semibold">
          <Sparkles size={18} />
          <span className="truncate">
            Continue · <span className="jp">{next.title}</span>
          </span>
        </Link>
        <Link href="/vocab" aria-label="Search words" className="grid w-14 place-items-center rounded-2xl border border-line bg-white">
          <Search size={20} />
        </Link>
      </div>

      {/* Category chips */}
      <h2 className="mt-7 text-xl font-semibold">Course category</h2>
      <div className="no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5">
        <Link href="/" className={`chip ${!partFilter ? "bg-ink text-white" : "border border-line bg-white"}`}>
          All
        </Link>
        {parts.map((p) => (
          <Link
            key={p.slug}
            href={`/?part=${p.slug}`}
            className={`chip ${partFilter === p.slug ? "bg-ink text-white" : "border border-line bg-white"}`}
          >
            <span className="jp">{p.title.split(" ")[0]}</span>
            <span className="text-xs opacity-60">{p.lessons.length}</span>
          </Link>
        ))}
      </div>

      {/* Parts with lesson paths */}
      {visible.map((p) => {
        const pi = parts.indexOf(p);
        const doneCount = p.lessons.filter((l) => done.has(l.id)).length;
        return (
          <section key={p.id} className="mt-6">
            <CourseCard
              href={`/?part=${p.slug}`}
              slug={p.slug}
              color={pi === 0 ? "dark" : (p.color as "lavender" | "pink")}
              label={p.titleEn.split("·")[0].trim()}
              title={p.title.replace(/^第.部\s*/, "")}
              done={doneCount}
              total={p.lessons.length}
              sentences={sentenceCounts[pi]}
            />

            <ol className="relative mt-6 flex flex-col items-center gap-5">
              {p.lessons.map((l, i) => {
                const isDone = done.has(l.id);
                const isNext = l.id === next.id;
                const offset = OFFSETS[i % OFFSETS.length];
                return (
                  <li key={l.id} style={{ transform: `translateX(${offset}px)` }} className="flex flex-col items-center">
                    {isNext && (
                      <span className="mb-2 animate-float rounded-xl border-2 border-line bg-white px-3 py-1 text-xs font-extrabold tracking-wide text-lavender-ink">
                        START
                      </span>
                    )}
                    <Link
                      href={`/lessons/${l.slug}`}
                      aria-label={`${l.number}課 ${l.title}`}
                      className={`grid h-[74px] w-[74px] place-items-center rounded-full text-xl font-bold transition active:translate-y-1 ${
                        isDone
                          ? "bg-ink text-white shadow-[0_6px_0_#000]"
                          : isNext
                            ? "bg-lavender text-ink shadow-[0_6px_0_#9195e6] ring-8 ring-lavender-soft"
                            : "border-2 border-line bg-white text-ink shadow-[0_6px_0_var(--color-line)]"
                      }`}
                    >
                      {isDone ? <Check size={30} strokeWidth={3} /> : l.number}
                    </Link>
                    <span className="jp mt-2 max-w-[130px] text-center text-[13px] leading-tight font-semibold">{l.title}</span>
                    <span className="max-w-[140px] text-center text-[11px] leading-tight text-muted">{l.titleEn}</span>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </Shell>
  );
}
