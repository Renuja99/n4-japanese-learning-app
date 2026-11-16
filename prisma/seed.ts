import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { parts, vocab } from "./content";
import { toChunks } from "../src/lib/ruby";

// Seeding needs a direct (non-pooled) connection on Supabase.
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL! }),
});

/** Small deterministic PRNG so re-seeding produces the same distractors. */
function rng(seed: number) {
  return () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
}

async function main() {
  console.log("Seeding vocabulary…");
  const vocabIds = new Map<string, string>();
  for (const [word, [reading, meaning, pos, level]] of Object.entries(vocab)) {
    const v = await prisma.vocabulary.upsert({
      where: { word_reading: { word, reading } },
      update: { meaning, partOfSpeech: pos, level },
      create: { word, reading, meaning, partOfSpeech: pos, level },
    });
    vocabIds.set(word, v.id);
  }

  for (const part of parts) {
    console.log(`Seeding ${part.titleEn}…`);
    const dbPart = await prisma.part.upsert({
      where: { slug: part.slug },
      update: { order: part.order, title: part.title, titleEn: part.titleEn, color: part.color },
      create: { slug: part.slug, order: part.order, title: part.title, titleEn: part.titleEn, color: part.color },
    });

    // English sentences from the whole part, used as distractors for translation questions.
    const allEnglish = part.lessons.flatMap((l) => l.points.flatMap((p) => p.examples.map((e) => e.en)));
    const rand = rng(part.order * 7919 + 17);

    for (const [li, lesson] of part.lessons.entries()) {
      const slug = `${part.slug}-${lesson.number}`;
      const lessonData = {
        partId: dbPart.id,
        number: lesson.number,
        order: li,
        title: lesson.title,
        titleEn: lesson.titleEn,
        summary: lesson.summary,
        bookPage: lesson.page ?? null,
      };
      const dbLesson = await prisma.lesson.upsert({
        where: { slug },
        update: lessonData,
        create: { slug, ...lessonData },
      });

      for (const [pi, point] of lesson.points.entries()) {
        const gpSlug = `${slug}-${pi + 1}`;
        const gpData = {
          lessonId: dbLesson.id,
          order: pi,
          pattern: point.pattern,
          meaning: point.meaning,
          formation: point.formation,
          explanation: point.explanation,
          notes: point.notes ?? [],
          level: point.level ?? "N4",
        };
        const gp = await prisma.grammarPoint.upsert({
          where: { slug: gpSlug },
          update: gpData,
          create: { slug: gpSlug, ...gpData },
        });

        // Examples and questions carry no learner data, so rebuild them each time.
        await prisma.example.deleteMany({ where: { grammarPointId: gp.id } });
        await prisma.question.deleteMany({ where: { grammarPointId: gp.id } });

        for (const [ei, ex] of point.examples.entries()) {
          await prisma.example.create({
            data: {
              grammarPointId: gp.id,
              order: ei,
              japanese: ex.ja,
              english: ex.en,
              highlight: ex.hl,
              words: {
                create: [...new Set(ex.w)].map((w, i) => ({ vocabularyId: vocabIds.get(w)!, order: i })),
              },
            },
          });
        }

        const questions = [
          ...point.quiz.map((q, i) => ({
            type: "MULTIPLE_CHOICE" as const,
            prompt: q.q,
            options: q.o,
            answer: q.o[q.a],
            explanation: q.ex ?? "",
            order: i,
          })),
          ...point.examples
            .filter((ex) => toChunks(ex.ja).length >= 3)
            .map((ex, i) => ({
              type: "ORDERING" as const,
              prompt: ex.en,
              options: toChunks(ex.ja),
              answer: toChunks(ex.ja).join(""),
              explanation: `Pattern: ${point.pattern}`,
              order: 10 + i,
            })),
          ...point.examples.slice(0, 2).map((ex, i) => {
            const pool = allEnglish.filter((e) => e !== ex.en);
            const distractors = new Set<string>();
            while (distractors.size < 3) distractors.add(pool[Math.floor(rand() * pool.length)]);
            return {
              type: "TRANSLATION" as const,
              prompt: ex.ja,
              options: [ex.en, ...distractors],
              answer: ex.en,
              explanation: `Look for 「${ex.hl}」 — ${point.meaning}.`,
              order: 20 + i,
            };
          }),
        ];
        await prisma.question.createMany({ data: questions.map((q) => ({ ...q, grammarPointId: gp.id })) });
      }
    }
  }

  const counts = await Promise.all([
    prisma.lesson.count(),
    prisma.grammarPoint.count(),
    prisma.example.count(),
    prisma.question.count(),
    prisma.vocabulary.count(),
  ]);
  console.log(`Done: ${counts[0]} lessons, ${counts[1]} grammar points, ${counts[2]} sentences, ${counts[3]} questions, ${counts[4]} words.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
