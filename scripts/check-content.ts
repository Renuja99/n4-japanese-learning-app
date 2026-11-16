/* Validates the course content: ruby markup, highlights, quizzes and vocabulary coverage. */
import { parts, vocab } from "../prisma/content";
import { toPlain, toChunks } from "../src/lib/ruby";

const problems: string[] = [];
const missing = new Map<string, string>();
let points = 0, examples = 0, quizzes = 0;
const used = new Set<string>();

for (const part of parts) {
  for (const lesson of part.lessons) {
    for (const p of lesson.points) {
      points++;
      const where = `${part.slug} L${lesson.number} ${p.pattern}`;
      for (const ex of p.examples) {
        examples++;
        const bad = ex.ja.replace(/\{[^|{}]+\|[^{}]+\}/g, "");
        if (/[{}|]/.test(bad)) problems.push(`${where}: bad ruby in ${ex.ja}`);
        const plain = toPlain(ex.ja);
        for (const h of ex.hl.split("／")) if (!plain.includes(h)) problems.push(`${where}: highlight "${h}" not in "${plain}"`);
        if (toChunks(ex.ja).length < 2) problems.push(`${where}: fewer than 3 chunks in ${ex.ja}`);
        for (const w of ex.w) {
          used.add(w);
          if (!vocab[w]) missing.set(w, plain);
        }
      }
      for (const q of p.quiz) {
        quizzes++;
        if (!q.q.includes("（　）")) problems.push(`${where}: quiz without blank: ${q.q}`);
        if (q.a < 0 || q.a >= q.o.length) problems.push(`${where}: bad answer index`);
        if (new Set(q.o).size !== q.o.length) problems.push(`${where}: duplicate options`);
        const bad = q.q.replace(/\{[^|{}]+\|[^{}]+\}/g, "");
        if (/[{}|]/.test(bad)) problems.push(`${where}: bad ruby in quiz ${q.q}`);
      }
    }
  }
}

const lessons = parts.reduce((n, p) => n + p.lessons.length, 0);
console.log(`${parts.length} parts · ${lessons} lessons · ${points} grammar points · ${examples} sentences · ${quizzes} quiz items`);
console.log(`${used.size} vocabulary words used · ${Object.keys(vocab).length} in dictionary`);
if (missing.size) {
  console.log(`\nMissing vocab (${missing.size}):`);
  for (const [w, s] of missing) console.log(`  ${w}\t${s}`);
}
if (problems.length) console.log(`\nProblems (${problems.length}):\n  ` + problems.join("\n  "));
if (missing.size || problems.length) process.exit(1);
console.log("All content checks passed.");
