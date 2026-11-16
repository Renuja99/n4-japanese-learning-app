import { notFound } from "next/navigation";
import { getLessonQuestions, getNextLesson } from "@/lib/queries";
import { getProfile } from "@/lib/auth";
import { Practice, type PracticeQuestion } from "@/components/Practice";

export const dynamic = "force-dynamic";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const pick = <T,>(arr: T[]) => (arr.length ? [arr[Math.floor(Math.random() * arr.length)]] : []);

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [lesson, next, profile] = await Promise.all([getLessonQuestions(slug), getNextLesson(slug), getProfile()]);
  if (!lesson) notFound();

  // Per grammar point: every hand-written question, one sentence-ordering and one translation.
  const questions: PracticeQuestion[] = lesson.grammarPoints.flatMap((g) => {
    const by = (t: string) => g.questions.filter((q) => q.type === t);
    return [...by("MULTIPLE_CHOICE"), ...pick(by("ORDERING")), ...pick(by("TRANSLATION"))].map((q) => ({
      id: q.id,
      type: q.type,
      prompt: q.prompt,
      options: q.type === "ORDERING" ? q.options : shuffle(q.options),
      answer: q.answer,
      explanation: q.explanation,
      pattern: g.pattern,
    }));
  });

  return (
    <Practice
      lessonId={lesson.id}
      lessonSlug={slug}
      title={lesson.title}
      questions={shuffle(questions)}
      next={next}
      signedIn={!!profile}
    />
  );
}
