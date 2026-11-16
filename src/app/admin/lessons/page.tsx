import Link from "next/link";
import { Eye, EyeOff, Plus } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { saveLesson, togglePublished } from "../actions";
import { Field, Flash, PageHeader, Panel } from "../ui";

export default async function AdminLessons({ searchParams }: { searchParams: Promise<{ msg?: string }> }) {
  const { msg } = await searchParams;
  const parts = await prisma.part.findMany({
    orderBy: { order: "asc" },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        include: { _count: { select: { grammarPoints: true, progress: true } }, grammarPoints: { select: { _count: { select: { examples: true, questions: true } } } } },
      },
    },
  });

  return (
    <>
      <PageHeader title="Lessons" sub="Every lesson in the book, grouped by section." />
      <Flash msg={msg} />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          {parts.map((p) => (
            <Panel key={p.id} title={`${p.title} — ${p.titleEn}`}>
              <div className="-mx-2 overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="text-xs tracking-wide text-muted uppercase">
                    <tr>
                      <th className="px-2 py-2">#</th>
                      <th className="px-2 py-2">Lesson</th>
                      <th className="px-2 py-2 text-center">Points</th>
                      <th className="px-2 py-2 text-center">Sentences</th>
                      <th className="px-2 py-2 text-center">Questions</th>
                      <th className="px-2 py-2 text-center">Done by</th>
                      <th className="px-2 py-2" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {p.lessons.map((l) => (
                      <tr key={l.id} className={l.published ? "" : "opacity-50"}>
                        <td className="px-2 py-3 font-bold">{l.number}</td>
                        <td className="px-2 py-3">
                          <Link href={`/admin/lessons/${l.id}`} className="jp font-semibold hover:underline">
                            {l.title}
                          </Link>
                          <span className="block text-xs text-muted">{l.titleEn}</span>
                        </td>
                        <td className="px-2 py-3 text-center">{l._count.grammarPoints}</td>
                        <td className="px-2 py-3 text-center">{l.grammarPoints.reduce((a, g) => a + g._count.examples, 0)}</td>
                        <td className="px-2 py-3 text-center">{l.grammarPoints.reduce((a, g) => a + g._count.questions, 0)}</td>
                        <td className="px-2 py-3 text-center">{l._count.progress}</td>
                        <td className="px-2 py-3 text-right">
                          <form action={togglePublished.bind(null, l.id)}>
                            <button title={l.published ? "Unpublish" : "Publish"} className="rounded-xl p-2 hover:bg-canvas">
                              {l.published ? <Eye size={18} /> : <EyeOff size={18} />}
                            </button>
                          </form>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>
          ))}
        </div>

        <Panel title="New lesson" className="h-fit xl:sticky xl:top-6">
          <form action={saveLesson} className="space-y-4">
            <label className="block">
              <span className="label">Section</span>
              <select name="partId" className="field jp">
                {parts.map((p) => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <Field label="No." name="number" type="number" required />
              <Field label="Order" name="order" type="number" defaultValue={99} required />
              <Field label="Page" name="bookPage" type="number" />
            </div>
            <Field label="Title (Japanese)" name="title" required />
            <Field label="Title (English)" name="titleEn" required />
            <Field label="Summary" name="summary" textarea rows={2} />
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" name="published" defaultChecked className="h-4 w-4" /> Published
            </label>
            <button className="btn3d btn-dark w-full">
              <Plus size={18} /> Create lesson
            </button>
          </form>
        </Panel>
      </div>
    </>
  );
}
