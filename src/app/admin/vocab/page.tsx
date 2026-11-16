import { Plus, Search, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { LevelBadge } from "@/components/LevelBadge";
import { deleteVocab, saveVocab } from "../actions";
import { Field, Flash, LevelSelect, PageHeader, Panel } from "../ui";

export default async function AdminVocab({ searchParams }: { searchParams: Promise<{ q?: string; msg?: string; level?: string }> }) {
  const { q = "", msg, level } = await searchParams;
  const where = {
    ...(level ? { level: level as "N5" | "N4" | "N3" } : {}),
    ...(q
      ? { OR: [{ word: { contains: q } }, { reading: { contains: q } }, { meaning: { contains: q, mode: "insensitive" as const } }] }
      : {}),
  };
  const [words, total] = await Promise.all([
    prisma.vocabulary.findMany({ where, orderBy: { reading: "asc" }, take: 200, include: { _count: { select: { examples: true } } } }),
    prisma.vocabulary.count({ where }),
  ]);

  return (
    <>
      <PageHeader title="Word bank" sub={`${total} words${total > 200 ? " (showing the first 200)" : ""}`} />
      <Flash msg={msg} />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <Panel>
          <form className="mb-4 flex flex-wrap gap-2">
            <label className="flex flex-1 items-center gap-2 rounded-2xl border-2 border-line px-4">
              <Search size={18} className="text-muted" />
              <input name="q" defaultValue={q} placeholder="Search" className="w-full py-2.5 outline-none" />
            </label>
            <select name="level" defaultValue={level ?? ""} className="field w-auto">
              <option value="">All levels</option>
              <option>N5</option>
              <option>N4</option>
              <option>N3</option>
            </select>
            <button className="btn3d btn-dark py-2.5">Filter</button>
          </form>
          <ul className="divide-y divide-line">
            {words.map((w) => (
              <li key={w.id} className="py-3">
                <details>
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="w-28 shrink-0">
                      <span className="jp block text-lg font-semibold">{w.word}</span>
                      <span className="jp block text-xs text-muted">{w.reading}</span>
                    </span>
                    <span className="min-w-0 flex-1 text-sm">
                      {w.meaning}
                      <span className="block text-xs text-muted">{w.partOfSpeech} · {w._count.examples} sentences</span>
                    </span>
                    <LevelBadge level={w.level} />
                  </summary>
                  <form action={saveVocab} className="mt-3 grid gap-3 rounded-2xl bg-canvas p-4 sm:grid-cols-2">
                    <input type="hidden" name="id" value={w.id} />
                    <Field label="Word" name="word" defaultValue={w.word} required />
                    <Field label="Reading" name="reading" defaultValue={w.reading} required />
                    <Field label="Meaning" name="meaning" defaultValue={w.meaning} required />
                    <Field label="Part of speech" name="partOfSpeech" defaultValue={w.partOfSpeech} />
                    <LevelSelect value={w.level} />
                    <div className="flex items-end gap-2">
                      <button className="btn3d btn-dark flex-1 py-2.5 text-sm">Save</button>
                    </div>
                  </form>
                  <form action={deleteVocab.bind(null, w.id)} className="mt-2 px-1">
                    <button className="flex items-center gap-1 text-xs font-semibold text-bad">
                      <Trash2 size={14} /> Delete word (removes it from {w._count.examples} sentences)
                    </button>
                  </form>
                </details>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Add a word" className="h-fit xl:sticky xl:top-6">
          <form action={saveVocab} className="space-y-4">
            <Field label="Word (dictionary form)" name="word" required />
            <Field label="Reading" name="reading" required />
            <Field label="Meaning" name="meaning" required />
            <Field label="Part of speech" name="partOfSpeech" placeholder="verb (I)" />
            <LevelSelect />
            <button className="btn3d btn-lav w-full">
              <Plus size={18} /> Add word
            </button>
          </form>
        </Panel>
      </div>
    </>
  );
}
