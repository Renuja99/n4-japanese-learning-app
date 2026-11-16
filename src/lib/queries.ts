import "server-only";
import { prisma } from "./prisma";

export async function getCourse(profileId?: string) {
  const [parts, progress] = await Promise.all([
    prisma.part.findMany({
      orderBy: { order: "asc" },
      include: {
        lessons: {
          where: { published: true },
          orderBy: { order: "asc" },
          include: { grammarPoints: { orderBy: { order: "asc" }, select: { pattern: true } } },
        },
      },
    }),
    profileId ? prisma.lessonProgress.findMany({ where: { profileId } }) : Promise.resolve([]),
  ]);
  const done = new Map(progress.map((p) => [p.lessonId, p.bestScore]));
  return { parts, done };
}

export async function getLesson(slug: string) {
  return prisma.lesson.findUnique({
    where: { slug },
    include: {
      part: true,
      grammarPoints: {
        orderBy: { order: "asc" },
        include: {
          examples: {
            orderBy: { order: "asc" },
            include: { words: { orderBy: { order: "asc" }, include: { vocabulary: true } } },
          },
        },
      },
    },
  });
}

export async function getLessonQuestions(slug: string) {
  return prisma.lesson.findUnique({
    where: { slug },
    include: {
      grammarPoints: {
        orderBy: { order: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
  });
}

/** Neighbouring lessons in course order, for "next lesson" links. */
export async function getNextLesson(slug: string) {
  const all = await prisma.lesson.findMany({
    where: { published: true },
    orderBy: [{ part: { order: "asc" } }, { order: "asc" }],
    select: { slug: true, title: true, titleEn: true },
  });
  const i = all.findIndex((l) => l.slug === slug);
  return i >= 0 ? all[i + 1] ?? null : null;
}

export function localDay(date = new Date()) {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}
