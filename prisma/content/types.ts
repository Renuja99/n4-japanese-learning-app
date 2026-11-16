/**
 * Source format for the course content (seeded into the database).
 *
 * Example `ja` strings use two small markups:
 *   {漢字|かんじ}  ruby / furigana
 *   /             chunk boundary — used to build the ★ sentence-ordering exercise
 * `hl` is the plain-text part of the sentence that carries the grammar pattern.
 * `w` lists the content words (dictionary form) — each must exist in vocab.ts.
 */
export type ExampleSrc = { ja: string; en: string; hl: string; w: string[] };

/** Fill-in-the-blank question. `q` contains （　） and `a` is the index of the right option. */
export type QuizSrc = { q: string; o: string[]; a: number; ex?: string };

export type PointSrc = {
  pattern: string;
  meaning: string;
  formation: string;
  explanation: string;
  notes?: string[];
  level?: "N5" | "N4";
  examples: ExampleSrc[];
  quiz: QuizSrc[];
};

export type LessonSrc = {
  number: number;
  title: string;
  titleEn: string;
  summary: string;
  page?: number;
  points: PointSrc[];
};

export type PartSrc = {
  slug: string;
  order: number;
  title: string;
  titleEn: string;
  color: "lavender" | "peach" | "pink" | "dark";
  lessons: LessonSrc[];
};

/** [reading, meaning, part of speech, level] */
export type VocabSrc = Record<string, [string, string, string, "N5" | "N4" | "N3"]>;
