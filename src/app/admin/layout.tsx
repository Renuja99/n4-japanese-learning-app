import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { AdminNav } from "./AdminNav";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const me = await requireAdmin();
  return (
    <div className="min-h-dvh bg-canvas lg:flex">
      <aside className="sticky top-0 z-30 bg-nav text-white lg:h-dvh lg:w-64 lg:shrink-0">
        <div className="flex items-center justify-between px-5 py-4 lg:block lg:py-7">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="jp grid h-10 w-10 place-items-center rounded-xl bg-pink text-lg font-bold">文</span>
            <span className="font-bold leading-tight">
              Bunpo N4
              <span className="block text-xs font-medium text-white/60">Admin dashboard</span>
            </span>
          </Link>
          <Link href="/" className="chip bg-white/10 py-1.5 text-xs lg:mt-6 lg:hidden">
            View app
          </Link>
        </div>
        <AdminNav />
        <div className="absolute bottom-6 hidden px-5 text-xs text-white/60 lg:block">
          Signed in as
          <span className="block truncate font-semibold text-white">{me.email}</span>
          <Link href="/" className="mt-3 inline-block underline">
            ← Back to the app
          </Link>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 lg:py-10">{children}</main>
    </div>
  );
}
