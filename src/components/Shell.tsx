import { BottomNav } from "./BottomNav";

/** Phone-width column used by every learner screen; on desktop it floats like a device. */
export function Shell({ children, nav = true }: { children: React.ReactNode; nav?: boolean }) {
  return (
    <div className="mx-auto min-h-dvh max-w-md bg-canvas sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:rounded-[44px] sm:shadow-[0_30px_80px_rgba(180,80,120,0.18)]">
      <main className={`px-5 pt-6 ${nav ? "pb-36" : "pb-10"}`}>{children}</main>
      {nav && <BottomNav />}
    </div>
  );
}

export function IconButton({ children, label, href }: { children: React.ReactNode; label: string; href?: string }) {
  const cls = "relative grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white text-ink";
  return href ? (
    <a href={href} aria-label={label} className={cls}>
      {children}
    </a>
  ) : (
    <span aria-label={label} className={cls}>
      {children}
    </span>
  );
}
