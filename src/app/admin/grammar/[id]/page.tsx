import { notFound } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Ruby } from "@/components/Ruby";
import { deleteExample, deleteGrammar, deleteQuestion, saveExample, saveGrammar, saveQuestion } from "../../actions";
import { Field, Flash, LevelSelect, PageHeader, Panel } from "../../ui";

const typeLabel = { MULTIPLE_CHOICE: "Fill the blank", ORDERING: "★ Ordering", TRANSLATION: "Translation" } as const;

export default async function AdminGrammar({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ msg?: string }> }) {
  const [{ id }, { msg }] = await Promise.all([params, searchParams]);
  const g = await prisma.grammarPoint.findUnique({
    where: { id },
    include: {
      lesson: true,
      examples: { orderBy: { order: "asc" }, include: { words: { orderBy: { order: "asc" }, include: { vocabulary: true } } } },
      questions: { orderBy: [{ type: "asc" }, { order: "asc" }] },
    },
  });
  if (!g) notFound();

  return (
    <>
      <PageHeader
        title={g.pattern}
        sub={g.meaning}
        crumbs={[
          { href: "/admin/lessons", label: "Lessons" },
          { href: `/admin/lessons/${g.lessonId}`, label: `${g.lesson.number}課 ${g.lesson.title}` },
        ]}
      />
      <Flash msg={msg} />

      <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <Panel title="Explanation" className="h-fit">
          <form action={saveGrammar} className="space-y-4">
            <input type="hidden" name="id" value={g.id} />
            <input type="hidden" name="lessonId" value={g.lessonId} />
            <div className="grid grid-cols-[1fr_120px_110px] gap-3">
              <Field label="Pattern" name="pattern" defaultValue={g.pattern} required />
              <LevelSelect value={g.level} />
              <Field label="Order" name="order" type="number" defaultValue={g.order} />
            </div>
            <Field label="Meaning" name="meaning" defaultValue={g.meaning} required />
            <Field label="How to form it" name="formation" defaultValue={g.formation} textarea rows={4} hint="One rule per line." />
            <Field label="Explanation" name="explanation" defaultValue={g.explanation} textarea rows={4} hint="Supports {漢字|かんじ} furigana." />
            <Field label="Notes" name="notes" defaultValue={g.notes.join("\n")} textarea rows={3} hint="One note per line." />
            <button className="btn3d btn-dark w-full">Save explanation</button>
          </form>
          <form action={deleteGrammar.bind(null, g.id)} className="mt-4 border-t border-line pt-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-bad">
              <Trash2 size={16} /> Delete this grammar point
            </button>
          </form>
        </Panel>

        <div className="space-y-6">
          <Panel title={`Example sentences (${g.examples.length})`}>
            <p className="mb-4 rounded-2xl bg-canvas px-4 py-3 text-xs leading-relaxed text-muted">
              Write furigana as <code className="jp">{"{雨|あめ}"}</code> and split the sentence into parts with <code>/</code> — the
              parts become the ★ ordering exercise. <b>Highlight</b> is the plain-text part that shows the pattern. <b>Words</b> are
              dictionary forms from the word bank, separated by commas.
            </p>
            <ul className="space-y-3">
              {g.examples.map((ex) => (
                <li key={ex.id} className="rounded-2xl border border-line p-4">
                  <p className="text-lg leading-[2.1]">
                    <Ruby text={ex.japanese} highlight={ex.highlight} />
                  </p>
                  <p className="text-sm text-muted">{ex.english}</p>
                  <p className="jp mt-2 flex flex-wrap gap-1">
                    {ex.words.map((w) => (
                      <span key={w.vocabularyId} className="rounded-full bg-canvas px-2 py-0.5 text-xs">
                        {w.vocabulary.word}
                      </span>
                    ))}
                  </p>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm font-semibold text-lavender-ink">Edit</summary>
                    <ExampleForm grammarPointId={g.id} ex={{ ...ex, words: ex.words.map((w) => w.vocabulary.word).join(", ") }} />
                    <form action={deleteExample.bind(null, ex.id)} className="mt-2">
                      <button className="flex items-center gap-1 text-xs font-semibold text-bad">
                        <Trash2 size={14} /> Delete sentence
                      </button>
                    </form>
                  </details>
                </li>
              ))}
            </ul>
            <details className="mt-4 rounded-2xl bg-lavender-soft p-4">
              <summary className="flex cursor-pointer items-center gap-2 font-semibold">
                <Plus size={18} /> Add a sentence
              </summary>
              <ExampleForm grammarPointId={g.id} order={g.examples.length} />
            </details>
          </Panel>

          <Panel title={`Practice questions (${g.questions.length})`}>
            <ul className="space-y-3">
              {g.questions.map((q) => (
                <li key={q.id} className="rounded-2xl border border-line p-4">
                  <span className="chip bg-canvas py-0.5 text-xs">{typeLabel[q.type]}</span>
                  <p className="mt-2 leading-[2.1]">
                    {q.type === "ORDERING" ? <span className="font-semibold">“{q.prompt}”</span> : <Ruby text={q.prompt} />}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="text-muted">Answer: </span>
                    <Ruby text={q.answer} className="font-semibold text-good" />
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm font-semibold text-lavender-ink">Edit</summary>
                    <QuestionForm grammarPointId={g.id} q={q} />
                    <form action={deleteQuestion.bind(null, q.id)} className="mt-2">
                      <button className="flex items-center gap-1 text-xs font-semibold text-bad">
                        <Trash2 size={14} /> Delete question
                      </button>
                    </form>
                  </details>
                </li>
              ))}
            </ul>
            <details className="mt-4 rounded-2xl bg-peach p-4">
              <summary className="flex cursor-pointer items-center gap-2 font-semibold">
                <Plus size={18} /> Add a question
              </summary>
              <QuestionForm grammarPointId={g.id} />
            </details>
          </Panel>
        </div>
      </div>
    </>
  );
}

function ExampleForm({ grammarPointId, ex, order }: {
  grammarPointId: string;
  ex?: { id: string; japanese: string; english: string; highlight: string; order: number; words: string };
  order?: number;
}) {
  return (
    <form action={saveExample} className="mt-3 space-y-3">
      <input type="hidden" name="grammarPointId" value={grammarPointId} />
      {ex && <input type="hidden" name="id" value={ex.id} />}
      <input type="hidden" name="order" value={ex?.order ?? order ?? 0} />
      <Field label="Japanese" name="japanese" defaultValue={ex?.japanese} textarea rows={2} required placeholder="{雨|あめ}が/{降|ふ}って/いる/ので、/{出|で}かけません。" />
      <Field label="English" name="english" defaultValue={ex?.english} required />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Highlight" name="highlight" defaultValue={ex?.highlight} placeholder="ので" />
        <Field label="Words" name="words" defaultValue={ex?.words} placeholder="雨, 降る, 出かける" />
      </div>
      <button className="btn3d btn-dark w-full py-2.5 text-sm">Save sentence</button>
    </form>
  );
}

function QuestionForm({ grammarPointId, q }: {
  grammarPointId: string;
  q?: { id: string; type: string; prompt: string; options: string[]; answer: string; explanation: string };
}) {
  return (
    <form action={saveQuestion} className="mt-3 space-y-3">
      <input type="hidden" name="grammarPointId" value={grammarPointId} />
      {q && <input type="hidden" name="id" value={q.id} />}
      <label className="block">
        <span className="label">Type</span>
        <select name="type" defaultValue={q?.type ?? "MULTIPLE_CHOICE"} className="field">
          <option value="MULTIPLE_CHOICE">Fill the blank — prompt contains （　）</option>
          <option value="TRANSLATION">Translation — prompt is Japanese, options are English</option>
          <option value="ORDERING">★ Ordering — prompt is English, options are the parts in the right order</option>
        </select>
      </label>
      <Field label="Prompt" name="prompt" defaultValue={q?.prompt} textarea rows={2} required />
      <Field label="Options" name="options" defaultValue={q?.options.join("\n")} textarea rows={4} required hint="One per line." />
      <Field label="Answer" name="answer" defaultValue={q?.answer} hint="Must match an option exactly (ignored for ordering)." />
      <Field label="Explanation" name="explanation" defaultValue={q?.explanation} textarea rows={2} />
      <button className="btn3d btn-dark w-full py-2.5 text-sm">Save question</button>
    </form>
  );
}
