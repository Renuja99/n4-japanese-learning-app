/** Helpers for the {漢字|かんじ} ruby markup and "/" chunk markers used in example sentences. */

export type RubySegment = { text: string; ruby?: string };

const RUBY = /\{([^|{}]+)\|([^{}]+)\}/g;

/** Split a marked-up string into plain and ruby segments (chunk markers removed). */
export function parseRuby(src: string): RubySegment[] {
  const s = src.replaceAll("/", "");
  const out: RubySegment[] = [];
  let last = 0;
  for (const m of s.matchAll(RUBY)) {
    if (m.index! > last) out.push({ text: s.slice(last, m.index) });
    out.push({ text: m[1], ruby: m[2] });
    last = m.index! + m[0].length;
  }
  if (last < s.length) out.push({ text: s.slice(last) });
  return out;
}

/** Plain kanji text, no readings: {雨|あめ}が → 雨が */
export function toPlain(src: string): string {
  return src.replaceAll("/", "").replace(RUBY, "$1");
}

/** All-kana reading: {雨|あめ}が → あめが */
export function toKana(src: string): string {
  return src.replaceAll("/", "").replace(RUBY, "$2");
}

/** Chunks for the ordering exercise, each still carrying ruby markup. */
export function toChunks(src: string): string[] {
  return src.split("/").map((c) => c.trim()).filter(Boolean);
}
