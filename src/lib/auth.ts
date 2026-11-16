import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { createSupabaseServerClient } from "./supabase/server";

export type SessionUser = { id: string; email: string };

/**
 * Local development only: set DEV_AUTH_BYPASS_EMAIL to act as a signed-in user
 * without a Supabase project. Ignored in production builds.
 */
function devBypass(): SessionUser | null {
  const email = process.env.DEV_AUTH_BYPASS_EMAIL;
  if (!email || process.env.NODE_ENV === "production") return null;
  return { id: `dev-${email}`, email };
}

export const getUser = cache(async (): Promise<SessionUser | null> => {
  const dev = devBypass();
  if (dev) return dev;
  try {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user?.email) return null;
    return { id: data.user.id, email: data.user.email };
  } catch {
    return null;
  }
});

function adminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/** The signed-in user's profile row (created on first visit). */
export const getProfile = cache(async () => {
  const user = await getUser();
  if (!user) return null;
  const isListedAdmin = adminEmails().includes(user.email.toLowerCase());
  return prisma.profile.upsert({
    where: { id: user.id },
    update: isListedAdmin ? { role: "ADMIN" } : {},
    create: {
      id: user.id,
      email: user.email,
      displayName: user.email.split("@")[0],
      role: isListedAdmin ? "ADMIN" : "LEARNER",
    },
  });
});

export async function requireProfile() {
  const profile = await getProfile();
  if (!profile) redirect("/login");
  return profile;
}

export async function requireAdmin() {
  const profile = await getProfile();
  if (!profile) redirect("/login?next=/admin");
  if (profile.role !== "ADMIN") redirect("/");
  return profile;
}
