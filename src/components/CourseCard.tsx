import Link from "next/link";
import { Layers, NotebookPen, Puzzle } from "lucide-react";

const themes = {
  dark: { box: "bg-night text-white", sub: "text-white/70", chip: "bg-white text-ink", icon: "bg-white text-ink" },
  lavender: { box: "bg-lavender text-ink", sub: "text-ink/70", chip: "bg-white text-ink", icon: "bg-white text-ink" },
  pink: { box: "bg-pink text-ink", sub: "text-ink/70", chip: "bg-white text-ink", icon: "bg-white text-ink" },
  peach: { box: "bg-peach text-ink border-2 border-peach-line", sub: "text-ink/70", chip: "bg-white text-ink", icon: "bg-white text-rust" },
} as const;

const icons = { forms: Puzzle, "part-1": NotebookPen, "part-2": Layers } as const;

export function CourseCard(props: {
  href: string;
  slug: string;
  color: keyof typeof themes;
  label: string;
  title: string;
  done: number;
  total: number;
  sentences: number;
}) {
  const t = themes[props.color] ?? themes.dark;
  const Icon = icons[props.slug as keyof typeof icons] ?? NotebookPen;
  return (
    <Link href={props.href} className={`relative block overflow-hidden rounded-[28px] p-5 ${t.box}`}>
      <svg className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 opacity-25" viewBox="0 0 100 100" fill="none">
        <path d="M10 90 C 30 20, 90 70, 60 20 S 20 30, 95 60" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      </svg>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-full ${t.icon}`}>
            <Icon size={20} />
          </span>
          <span className={`text-sm font-semibold ${t.sub}`}>{props.label}</span>
        </div>
        <span className={`chip py-1.5 text-xs ${t.chip}`}>
          {props.done}/{props.total}
        </span>
      </div>
      <h3 className="jp mt-5 text-[22px] leading-snug font-semibold">{props.title}</h3>
      <div className={`mt-3 flex items-center gap-5 text-xs font-medium ${t.sub}`}>
        <span>{props.sentences} sentences</span>
        <span>{props.total - props.done} lessons left</span>
      </div>
    </Link>
  );
}
