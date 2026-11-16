import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({ title, sub, crumbs, action }: { title: string; sub?: string; crumbs?: { href: string; label: string }[]; action?: React.ReactNode }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {crumbs && (
          <nav className="mb-2 flex flex-wrap items-center gap-1 text-sm text-muted">
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1">
                <Link href={c.href} className="hover:text-ink">{c.label}</Link>
                <ChevronRight size={14} />
              </span>
            ))}
          </nav>
        )}
        <h1 className="jp text-3xl font-bold tracking-tight">{title}</h1>
        {sub && <p className="mt-1 text-muted">{sub}</p>}
      </div>
      {action}
    </header>
  );
}

export function Flash({ msg }: { msg?: string }) {
  if (!msg) return null;
  const bad = /^Not saved|can't|already|add these/.test(msg);
  return (
    <p className={`mb-5 rounded-2xl px-4 py-3 text-sm font-semibold ${bad ? "bg-peach text-rust" : "bg-good-soft text-good"}`}>{msg}</p>
  );
}

export function Panel({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`card p-5 sm:p-6 ${className ?? ""}`}>
      {title && <h2 className="mb-4 text-lg font-bold">{title}</h2>}
      {children}
    </section>
  );
}

export function Field({ label, name, defaultValue, type = "text", textarea, rows = 3, required, placeholder, hint }: {
  label: string; name: string; defaultValue?: string | number | null; type?: string; textarea?: boolean; rows?: number; required?: boolean; placeholder?: string; hint?: string;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {textarea ? (
        <textarea name={name} defaultValue={defaultValue ?? ""} rows={rows} required={required} placeholder={placeholder} className="field jp" />
      ) : (
        <input name={name} type={type} defaultValue={defaultValue ?? ""} required={required} placeholder={placeholder} className="field jp" />
      )}
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

export function LevelSelect({ value }: { value?: string }) {
  return (
    <label className="block">
      <span className="label">JLPT level</span>
      <select name="level" defaultValue={value ?? "N4"} className="field">
        <option>N5</option>
        <option>N4</option>
        <option>N3</option>
      </select>
    </label>
  );
}
