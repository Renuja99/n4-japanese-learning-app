import Link from "next/link";
import { ArrowLeft, Bell, Check, Flame, Star, TrendingUp } from "lucide-react";
import { requireProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Shell } from "@/components/Shell";

export const dynamic = "force-dynamic";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default async function ProgressPage() {
  const profile = await requireProfile();
  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const week = Array.from({ length: 7 }, (_, i) => new Date(today.getTime() - (6 - i) * 86_400_000));

  const [activity, completed, totalLessons] = await Promise.all([
    prisma.dailyActivity.findMany({ where: { profileId: profile.id, day: { gte: week[0] } } }),
    prisma.lessonProgress.findMany({
      where: { profileId: profile.id },
      orderBy: { completedAt: "desc" },
      include: { lesson: { include: { part: true } } },
    }),
    prisma.lesson.count({ where: { published: true } }),
  ]);
  const byDay = new Map(activity.map((a) => [a.day.getTime(), a]));
  const xp = week.map((d) => byDay.get(d.getTime())?.xp ?? 0);
  const max = Math.max(profile.dailyGoal, ...xp);
  const avg = Math.round(xp.reduce((a, b) => a + b, 0) / 7);
  const todayXp = xp[6];
  const accuracy = completed.length ? Math.round(completed.reduce((a, c) => a + c.bestScore, 0) / completed.length) : 0;

  return (
    <Shell>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Back" className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
          <ArrowLeft size={20} />
        </Link>
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
          <Bell size={20} />
          {todayXp < profile.dailyGoal && <span className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-bad" />}
        </span>
      </div>
      <h1 className="mt-5 text-[34px] font-bold tracking-tight">Your Progress</h1>

      <div className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5">
        <span className="chip bg-lavender">Daily goal {Math.min(todayXp, profile.dailyGoal)}/{profile.dailyGoal}</span>
        <span className="chip bg-ink text-white">
          {completed.length}/{totalLessons} lessons
        </span>
        <span className="chip bg-peach">Accuracy {accuracy}%</span>
      </div>

      <section className="mt-5 rounded-[28px] border-2 border-peach-line bg-peach p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">XP earned this week</h2>
            <p className="text-xs text-muted">avg {avg} XP per day</p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
            <TrendingUp size={20} />
          </span>
        </div>
        <div className="mt-5 flex h-48 items-end justify-between gap-2" role="img" aria-label={`XP per day: ${xp.join(", ")}`}>
          {week.map((d, i) => {
            const h = Math.max(14, Math.round((xp[i] / max) * 150));
            const isToday = i === 6;
            return (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-[11px] font-semibold text-rust">{xp[i] || ""}</span>
                <div
                  className={`w-full max-w-11 rounded-full ${isToday ? "bg-rust" : "striped bg-transparent"}`}
                  style={{ height: `${h}px` }}
                />
                <span className={`text-xs ${isToday ? "font-bold text-rust" : "text-muted"}`}>{DAYS[d.getUTCDay()]}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Tile icon={<Flame size={18} className="text-rust" />} value={profile.streak} label="day streak" />
        <Tile icon={<Star size={18} className="text-pink" />} value={profile.xp} label="total XP" />
        <Tile icon={<Check size={18} className="text-good" />} value={completed.length} label="lessons" />
      </div>

      <h2 className="mt-7 mb-3 text-xl font-semibold">Completed lessons</h2>
      {completed.length === 0 ? (
        <p className="card p-5 text-sm text-muted">Finish a practice session and it will show up here.</p>
      ) : (
        <ul className="space-y-3">
          {completed.map((c) => (
            <li key={c.lessonId}>
              <Link href={`/lessons/${c.lesson.slug}`} className="card flex items-center gap-4 p-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lavender-soft text-lg font-bold">
                  {c.lesson.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="jp truncate font-semibold">{c.lesson.title}</p>
                  <p className="text-xs text-muted">
                    {c.lesson.part.title.split(" ")[0]} · {c.attempts} attempt{c.attempts > 1 ? "s" : ""}
                  </p>
                </div>
                <span className="chip bg-canvas py-1 text-sm">{c.bestScore}%</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Shell>
  );
}

function Tile({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="card p-4">
      {icon}
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}
