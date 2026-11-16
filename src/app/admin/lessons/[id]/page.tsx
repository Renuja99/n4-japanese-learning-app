import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Plus, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { deleteLesson, saveGrammar, saveLesson } from "../../actions";
import { Field, Flash, LevelSelect, PageHeader, Panel } from "../../ui";

export default async function AdminLesson({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ msg?: string }> }) {
  const [{ id }, { msg }] = await Promise.all([params, searchParams]);
  const lesson = await prisma.lesson.findUnique({
    where: { id },
    include: {
      part: true,
      grammarPoints: { orderBy: { order: "asc" }, include: { _count: { select: { examples: true, questions: true } } } },
    },
  });
  if (!lesson) notFound();
  const parts = await prisma.part.findMany({ orderBy: { order: "asc" } });

  return (
    <>
      <PageHeader
        title={`${lesson.number}課 ${lesson.title}`}
        sub={lesson.titleEn}
        crumbs={[{ href: "/admin/lessons", label: "Lessons" }]}
        action={
          <Link href={`/lessons/${lesson.slug}`} className="btn3d btn-white py-2.5 text-sm">
            <ExternalLink size={16} /> View in app
          </Link>
        }
      />
      <Flash msg={msg} />
      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Lesson details">
          <form action={saveLesson} className="space-y-4">
            <input type="hidden" name="id" value={lesson.id} />
            <label className="block">
              <span className="label">Section</span>
              <select name="partId" defaultValue={lesson.partId} className="field jp">
                {parts.map((p) => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <Field label="No." name="number" type="number" defaultValue={lesson.number} required />
              <Field label="Order" name="order" type="number" defaultValue={lesson.order} required />
              <Field label="Book page" name="bookPage" type="number" defaultValue={lesson.bookPage} />
            </div>
            <Field label="Title (Japanese)" name="title" defaultValue={lesson.title} required />
            <Field label="Title (English)" name="titleEn" defaultValue={lesson.titleEn} required />
            <Field label="Summary" name="summary" defaultValue={lesson.summary} textarea rows={2} />
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" name="published" defaultChecked={lesson.published} className="h-4 w-4" /> Published
            </label>
            <button className="btn3d btn-dark w-full">Save lesson</button>
          </form>
          <form action={deleteLesson.bind(null, lesson.id)} className="mt-4 border-t border-line pt-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-bad">
              <Trash2 size={16} /> Delete lesson and all its content
            </button>
          </form>
        </Panel>

        <div className="space-y-6">
          <Panel title="Grammar points">
            <ul className="space-y-2">
              {lesson.grammarPoints.map((g) => (
                <li key={g.id}>
                  <Link href={`/admin/grammar/${g.id}`} className="flex items-center justify-between gap-3 rounded-2xl border border-line p-4 hover:border-lavender">
                    <span className="min-w-0">
                      <span className="jp block truncate text-lg font-bold">{g.pattern}</span>
                      <span className="block truncate text-sm text-muted">{g.meaning}</span>
                    </span>
                    <span className="shrink-0 text-right text-xs text-muted">
                      {g._count.examples} sentences
                      <br />
                      {g._count.questions} questions
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Add a grammar point">
            <form action={saveGrammar} className="space-y-4">
              <input type="hidden" name="lessonId" value={lesson.id} />
              <input type="hidden" name="order" value={lesson.grammarPoints.length} />
              <Field label="Pattern" name="pattern" required placeholder="～てしまいます" />
              <Field label="Meaning" name="meaning" required />
              <LevelSelect />
              <button className="btn3d btn-lav w-full">
                <Plus size={18} /> Add grammar point
              </button>
            </form>
          </Panel>
        </div>
      </div>
    </>
  );
}
