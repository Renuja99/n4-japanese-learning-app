import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookMarked, Heart, Play } from "lucide-react";
import { getLesson } from "@/lib/queries";
import { getProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { toggleBookmark } from "@/app/actions";
import { Shell } from "@/components/Shell";
import { Ruby } from "@/components/Ruby";
import { ExampleCard, StudyToggles } from "@/components/StudyExamples";

export const dynamic = "force-dynamic";

const headerTheme: Record<string, string> = {
  forms: "bg-night text-white",
  "part-1": "bg-lavender",
  "part-2": "bg-pink",
};

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = await getLesson(slug);
  if (!lesson) notFound();
  const profile = await getProfile();
  const saved = profile
    ? new Set(
        (
          await prisma.bookmark.findMany({
            where: { profileId: profile.id, grammarPointId: { in: lesson.grammarPoints.map((g) => g.id) } },
          })
        ).map((b) => b.grammarPointId),
      )
    : new Set<string>();
  const path = `/lessons/${slug}`;

  return (
    <Shell>
      <div className="flex items-center justify-between">
        <Link href={`/?part=${lesson.part.slug}`} aria-label="Back" className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
          <ArrowLeft size={20} />
        </Link>
        <span className="chip border border-line bg-white text-xs">
          <BookMarked size={14} /> Book p.{lesson.bookPage ?? "–"}
        </span>
      </div>

      <section className={`mt-5 rounded-[28px] p-6 ${headerTheme[lesson.part.slug] ?? "bg-lavender"}`}>
        <p className="jp text-sm font-semibold opacity-75">
          {lesson.part.title.split(" ")[0]} · {lesson.number}課
        </p>
        <h1 className="jp mt-1 text-[30px] leading-tight font-bold">{lesson.title}</h1>
        <p className="mt-1 text-[15px] font-medium opacity-80">{lesson.titleEn}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.grammarPoints.map((g, i) => (
            <a key={g.id} href={`#gp-${i + 1}`} className="jp chip bg-white/90 py-1.5 text-xs text-ink">
              {g.pattern}
            </a>
          ))}
        </div>
      </section>

      <StudyToggles>
        {lesson.grammarPoints.map((g, gi) => (
          <article key={g.id} id={`gp-${gi + 1}`} className="mt-4 scroll-mt-16">
            <div className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="chip bg-lavender-soft py-1 text-xs text-lavender-ink">
                  Pattern {gi + 1}/{lesson.grammarPoints.length} · {g.level}
                </span>
                <form action={toggleBookmark.bind(null, g.id, path)}>
                  <button
                    aria-label={saved.has(g.id) ? "Remove from saved" : "Save pattern"}
                    className={`grid h-10 w-10 place-items-center rounded-full ${saved.has(g.id) ? "bg-pink-soft text-pink" : "bg-canvas text-muted"}`}
                  >
                    <Heart size={18} fill={saved.has(g.id) ? "currentColor" : "none"} />
                  </button>
                </form>
              </div>
              <h2 className="jp mt-3 text-[26px] leading-snug font-bold">{g.pattern}</h2>
              <p className="mt-1 text-[16px] font-medium">{g.meaning}</p>

              {g.formation && (
                <div className="mt-4 rounded-2xl border-2 border-peach-line bg-peach p-4">
                  <p className="label !text-rust">How to form it</p>
                  <p className="jp text-[15px] leading-7 whitespace-pre-line">{g.formation}</p>
                </div>
              )}

              <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                <Ruby text={g.explanation} />
              </p>
              {g.notes.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {g.notes.map((n) => (
                    <li key={n} className="flex gap-2 rounded-2xl bg-canvas px-3 py-2.5 text-sm">
                      <span aria-hidden>☛</span>
                      <span className="jp">{n}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <h3 className="mt-5 mb-3 px-1 text-lg font-semibold">Example sentences</h3>
            <div className="space-y-3">
              {g.examples.map((ex, i) => (
                <ExampleCard
                  key={ex.id}
                  index={i}
                  ex={{
                    id: ex.id,
                    japanese: ex.japanese,
                    english: ex.english,
                    highlight: ex.highlight,
                    words: ex.words.map((w) => ({
                      word: w.vocabulary.word,
                      reading: w.vocabulary.reading,
                      meaning: w.vocabulary.meaning,
                      partOfSpeech: w.vocabulary.partOfSpeech,
                      level: w.vocabulary.level,
                    })),
                  }}
                />
              ))}
            </div>
          </article>
        ))}
      </StudyToggles>

      <div className="h-16" />
      <div className="fixed inset-x-0 bottom-[108px] z-30 mx-auto max-w-md px-5">
        <Link href={`${path}/practice`} className="btn3d btn-dark w-full text-base">
          <Play size={18} fill="currentColor" /> Practise this lesson
        </Link>
      </div>
    </Shell>
  );
}
