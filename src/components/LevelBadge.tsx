const styles: Record<string, string> = {
  N5: "bg-lavender-soft text-lavender-ink",
  N4: "bg-peach text-rust",
  N3: "bg-pink-soft text-[#b13a69]",
};

export function LevelBadge({ level }: { level: string }) {
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${styles[level] ?? ""}`}>{level}</span>;
}
