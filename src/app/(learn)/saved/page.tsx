import Link from "next/link";
import { Heart } from "lucide-react";
import { getProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Shell } from "@/components/Shell";

export const dynamic = "force-dynamic";

export default async function SavedPage() {
  const profile = await getProfile();
  const saved = profile
    ? await prisma.bookmark.findMany({
        where: { profileId: profile.id },
        orderBy: { createdAt: "desc" },
        include: { grammarPoint: { include: { lesson: { include: { part: true } } } } },
      })
    : [];

  return (
    <Shell>
      <h1 className="text-[34px] leading-tight font-bold tracking-tight">Saved patterns</h1>
      <p className="mt-1 text-muted">Tap the heart on any grammar pattern to keep it here for review.</p>
      {!profile ? (
        <div className="card mt-6 p-6 text-center">
          <p className="text-muted">Sign in to save grammar patterns.</p>
          <Link href="/login?next=/saved" className="btn3d btn-dark mt-4 w-full">
            Sign in
          </Link>
        </div>
      ) : saved.length === 0 ? (
        <div className="card mt-6 grid place-items-center p-8 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-pink-soft text-pink">
            <Heart size={28} />
          </span>
          <p className="mt-3 text-muted">Nothing saved yet.</p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {saved.map(({ grammarPoint: g }, i) => (
            <li key={g.id}>
              <Link
                href={`/lessons/${g.lesson.slug}#gp-${g.order + 1}`}
                className={`block rounded-[28px] p-5 ${["bg-night text-white", "bg-lavender", "bg-peach border-2 border-peach-line"][i % 3]}`}
              >
                <p className="jp text-xs font-semibold opacity-70">
                  {g.lesson.part.title.split(" ")[0]} · {g.lesson.number}課 {g.lesson.title}
                </p>
                <p className="jp mt-2 text-2xl font-bold">{g.pattern}</p>
                <p className="mt-1 text-sm opacity-80">{g.meaning}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Shell>
  );
}
