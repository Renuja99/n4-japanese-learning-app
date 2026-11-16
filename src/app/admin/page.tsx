import Link from "next/link";
import { BookText, CheckCircle2, Languages, ListChecks, MessageSquareText, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PageHeader, Panel } from "./ui";

export default async function AdminHome() {
  const weekAgo = new Date(Date.now() - 7 * 86_400_000);
  const [lessons, points, examples, questions, words, learners, completions, recent, top] = await Promise.all([
    prisma.lesson.count(),
    prisma.grammarPoint.count(),
    prisma.example.count(),
    prisma.question.count(),
    prisma.vocabulary.count(),
    prisma.profile.count(),
    prisma.lessonProgress.count({ where: { completedAt: { gte: weekAgo } } }),
    prisma.lessonProgress.findMany({
      take: 8,
      orderBy: { completedAt: "desc" },
      include: { profile: true, lesson: true },
    }),
    prisma.lessonProgress.groupBy({ by: ["lessonId"], _count: true, _avg: { bestScore: true }, orderBy: { _count: { lessonId: "desc" } }, take: 6 }),
  ]);
  const topLessons = await prisma.lesson.findMany({ where: { id: { in: top.map((t) => t.lessonId) } } });

  const tiles = [
    { label: "Lessons", value: lessons, icon: BookText, cls: "bg-night text-white" },
    { label: "Grammar points", value: points, icon: ListChecks, cls: "bg-lavender" },
    { label: "Sentences", value: examples, icon: MessageSquareText, cls: "bg-peach border-2 border-peach-line" },
    { label: "Questions", value: questions, icon: CheckCircle2, cls: "bg-pink" },
    { label: "Words", value: words, icon: Languages, cls: "bg-white" },
    { label: "Learners", value: learners, icon: Users, cls: "bg-white" },
  ];

  return (
    <>
      <PageHeader title="Overview" sub={`${completions} lesson completions in the last 7 days`} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {tiles.map(({ label, value, icon: Icon, cls }) => (
          <div key={label} className={`rounded-[24px] p-5 ${cls}`}>
            <Icon size={20} className="opacity-70" />
            <p className="mt-3 text-3xl font-bold">{value}</p>
            <p className="text-sm font-medium opacity-70">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Most practised lessons">
          {top.length === 0 ? (
            <p className="text-sm text-muted">No practice sessions yet.</p>
          ) : (
            <ul className="divide-y divide-line">
              {top.map((t) => {
                const l = topLessons.find((x) => x.id === t.lessonId);
                return (
                  <li key={t.lessonId} className="flex items-center justify-between py-3">
                    <Link href={`/admin/lessons/${t.lessonId}`} className="jp font-semibold hover:underline">
                      {l?.number}課 {l?.title}
                    </Link>
                    <span className="text-sm text-muted">
                      {t._count} learners · avg {Math.round(t._avg.bestScore ?? 0)}%
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Panel>
        <Panel title="Recent activity">
          {recent.length === 0 ? (
            <p className="text-sm text-muted">No activity yet.</p>
          ) : (
            <ul className="divide-y divide-line">
              {recent.map((r) => (
                <li key={r.profileId + r.lessonId} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <span className="min-w-0 truncate">
                    <b>{r.profile.displayName}</b> finished <span className="jp">{r.lesson.title}</span>
                  </span>
                  <span className="shrink-0 text-muted">{r.bestScore}%</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </>
  );
}
