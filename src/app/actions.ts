"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getProfile } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/* ── Welcome ─────────────────────────────────────────────────────────── */
export async function dismissWelcome() {
  (await cookies()).set("seen_welcome", "1", { maxAge: 60 * 60 * 24 * 365, path: "/" });
  redirect("/");
}

/* ── Auth ────────────────────────────────────────────────────────────── */
const credentials = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  mode: z.enum(["signin", "signup"]),
  next: z.string().optional(),
});

export type AuthState = { error?: string; message?: string };

export async function authenticate(_: AuthState, form: FormData): Promise<AuthState> {
  const parsed = credentials.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const { email, password, mode, next } = parsed.data;
  const supabase = await createSupabaseServerClient();

  if (mode === "signup") {
    const origin = (await headers()).get("origin") ?? "";
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${origin}/auth/callback?next=/` },
    });
    if (error) return { error: error.message };
    if (!data.session) return { message: "Check your inbox to confirm your email, then sign in." };
  } else {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
  }
  (await cookies()).set("seen_welcome", "1", { maxAge: 60 * 60 * 24 * 365, path: "/" });
  redirect(next && next.startsWith("/") ? next : "/");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/welcome");
}

/* ── Learning ────────────────────────────────────────────────────────── */
const result = z.object({
  lessonId: z.string(),
  correct: z.number().int().min(0),
  total: z.number().int().min(1),
  minutes: z.number().int().min(0).max(240),
  /** The learner's local calendar date, YYYY-MM-DD, so streaks follow their time zone. */
  today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export type CompleteResult = { saved: boolean; xp: number; streak?: number };

export async function completeLesson(input: z.infer<typeof result>): Promise<CompleteResult> {
  const { lessonId, correct, total, minutes, today } = result.parse(input);
  const score = Math.round((correct / total) * 100);
  const xp = 10 + correct * 2 + (score === 100 ? 5 : 0);

  const profile = await getProfile();
  if (!profile) return { saved: false, xp };

  const day = new Date(`${today}T00:00:00.000Z`);
  const yesterday = new Date(day.getTime() - 86_400_000);
  const last = profile.lastActiveOn?.getTime();
  const streak = last === day.getTime() ? profile.streak : last === yesterday.getTime() ? profile.streak + 1 : 1;

  await prisma.$transaction([
    prisma.profile.update({
      where: { id: profile.id },
      data: { xp: { increment: xp }, streak, lastActiveOn: day },
    }),
    prisma.dailyActivity.upsert({
      where: { profileId_day: { profileId: profile.id, day } },
      update: { xp: { increment: xp }, minutes: { increment: minutes } },
      create: { profileId: profile.id, day, xp, minutes },
    }),
    prisma.lessonProgress.upsert({
      where: { profileId_lessonId: { profileId: profile.id, lessonId } },
      update: { attempts: { increment: 1 }, completedAt: new Date() },
      create: { profileId: profile.id, lessonId, bestScore: score, attempts: 1 },
    }),
  ]);
  await prisma.lessonProgress.updateMany({
    where: { profileId: profile.id, lessonId, bestScore: { lt: score } },
    data: { bestScore: score },
  });
  revalidatePath("/", "layout");
  return { saved: true, xp, streak };
}

export async function toggleBookmark(grammarPointId: string, path: string) {
  const profile = await getProfile();
  if (!profile) redirect(`/login?next=${encodeURIComponent(path)}`);
  const key = { profileId_grammarPointId: { profileId: profile.id, grammarPointId } };
  const existing = await prisma.bookmark.findUnique({ where: key });
  if (existing) await prisma.bookmark.delete({ where: key });
  else await prisma.bookmark.create({ data: { profileId: profile.id, grammarPointId } });
  revalidatePath(path);
  revalidatePath("/saved");
}

export async function setDailyGoal(form: FormData) {
  const profile = await getProfile();
  if (!profile) redirect("/login");
  const goal = z.coerce.number().int().min(10).max(200).parse(form.get("goal"));
  await prisma.profile.update({ where: { id: profile.id }, data: { dailyGoal: goal } });
  revalidatePath("/profile");
}
