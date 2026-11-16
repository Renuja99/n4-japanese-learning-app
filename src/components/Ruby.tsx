import { parseRuby } from "@/lib/ruby";

type Props = {
  text: string;
  /** Plain-text substring(s) to emphasise, separated by ／ */
  highlight?: string;
  className?: string;
};

/** Renders {漢字|かんじ} markup as <ruby>, emphasising the grammar part of the sentence. */
export function Ruby({ text, highlight, className }: Props) {
  const segments = parseRuby(text);
  const plain = segments.map((s) => s.text).join("");

  // Character positions that belong to the highlight.
  const marked = new Array(plain.length).fill(false);
  for (const h of (highlight ?? "").split("／").filter(Boolean)) {
    const at = plain.indexOf(h);
    if (at >= 0) for (let i = at; i < at + h.length; i++) marked[i] = true;
  }

  const out: React.ReactNode[] = [];
  let pos = 0;
  segments.forEach((seg, si) => {
    const start = pos;
    pos += seg.text.length;
    if (seg.ruby) {
      const hl = marked.slice(start, pos).some(Boolean);
      out.push(
        <ruby key={si} className={hl ? "font-bold text-rust" : undefined}>
          {seg.text}
          <rt>{seg.ruby}</rt>
        </ruby>,
      );
      return;
    }
    // Split plain text into highlighted / normal runs.
    let run = "";
    let runHl = marked[start] ?? false;
    for (let i = start; i < pos; i++) {
      if (marked[i] !== runHl) {
        out.push(runHl ? <b key={`${si}-${i}`} className="text-rust">{run}</b> : run);
        run = "";
        runHl = marked[i];
      }
      run += plain[i];
    }
    if (run) out.push(runHl ? <b key={`${si}-end`} className="text-rust">{run}</b> : run);
  });

  return <span className={`jp ${className ?? ""}`}>{out}</span>;
}
