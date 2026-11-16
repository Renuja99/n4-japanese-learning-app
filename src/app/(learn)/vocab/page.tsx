import { prisma } from "@/lib/prisma";
import { Shell } from "@/components/Shell";
import { VocabList } from "@/components/VocabList";

export const dynamic = "force-dynamic";

export default async function VocabPage() {
  const words = await prisma.vocabulary.findMany({
    orderBy: { reading: "asc" },
    include: { _count: { select: { examples: true } } },
  });
  return (
    <Shell>
      <h1 className="text-[34px] leading-tight font-bold tracking-tight">Word bank</h1>
      <p className="mt-1 text-muted">Every word used in the example sentences, tagged by JLPT level.</p>
      <VocabList
        words={words.map((w) => ({
          id: w.id,
          word: w.word,
          reading: w.reading,
          meaning: w.meaning,
          partOfSpeech: w.partOfSpeech,
          level: w.level,
          uses: w._count.examples,
        }))}
      />
    </Shell>
  );
}
