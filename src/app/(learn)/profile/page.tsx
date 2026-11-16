import Link from "next/link";
import { BarChart3, LayoutDashboard, LogOut } from "lucide-react";
import { getProfile } from "@/lib/auth";
import { setDailyGoal, signOut } from "@/app/actions";
import { Shell } from "@/components/Shell";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const profile = await getProfile();
  if (!profile) {
    return (
      <Shell>
        <h1 className="text-[34px] font-bold tracking-tight">Profile</h1>
        <div className="card mt-6 p-6">
          <p className="text-muted">Sign in to keep your XP, streak, saved patterns and lesson progress across devices.</p>
          <Link href="/login" className="btn3d btn-dark mt-5 w-full">
            Sign in or create an account
          </Link>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <div className="flex flex-col items-center text-center">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-pink text-4xl font-bold text-white ring-8 ring-white">
          {(profile.displayName ?? profile.email).slice(0, 1).toUpperCase()}
        </span>
        <h1 className="mt-4 text-2xl font-bold">{profile.displayName}</h1>
        <p className="text-sm text-muted">{profile.email}</p>
        {profile.role === "ADMIN" && <span className="chip mt-2 bg-ink py-1 text-xs text-white">Admin</span>}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-[28px] bg-lavender p-5">
          <p className="text-3xl font-bold">{profile.xp}</p>
          <p className="text-sm font-medium opacity-70">total XP</p>
        </div>
        <div className="rounded-[28px] border-2 border-peach-line bg-peach p-5">
          <p className="text-3xl font-bold">{profile.streak}</p>
          <p className="text-sm font-medium opacity-70">day streak</p>
        </div>
      </div>

      <form action={setDailyGoal} className="card mt-4 p-5">
        <p className="label">Daily goal</p>
        <div className="grid grid-cols-4 gap-2">
          {[20, 30, 50, 80].map((g) => (
            <button
              key={g}
              name="goal"
              value={g}
              className={`rounded-2xl py-3 text-sm font-bold ${profile.dailyGoal === g ? "bg-ink text-white" : "bg-canvas"}`}
            >
              {g} XP
            </button>
          ))}
        </div>
      </form>

      <div className="mt-4 space-y-3">
        <Link href="/progress" className="card flex items-center gap-3 p-4 font-semibold">
          <BarChart3 size={20} /> Your progress
        </Link>
        {profile.role === "ADMIN" && (
          <Link href="/admin" className="card flex items-center gap-3 p-4 font-semibold">
            <LayoutDashboard size={20} /> Admin dashboard
          </Link>
        )}
        <form action={signOut}>
          <button className="card flex w-full items-center gap-3 p-4 font-semibold text-bad">
            <LogOut size={20} /> Sign out
          </button>
        </form>
      </div>
    </Shell>
  );
}
