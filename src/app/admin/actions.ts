"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const str = (f: FormData, k: string) => String(f.get(k) ?? "").trim();
const lines = (s: string) => s.split("\n").map((l) => l.trim()).filter(Boolean);
const level = z.enum(["N5", "N4", "N3"]);

function done(path: string, msg?: string): never {
  revalidatePath("/", "layout");
  redirect(msg ? `${path}?msg=${encodeURIComponent(msg)}` : path);
}

/* ── Lessons ─────────────────────────────────────────────────────────── */
export async function saveLesson(form: FormData) {
  await requireAdmin();
  const id = str(form, "id");
  const data = {
    partId: str(form, "partId"),
    number: z.coerce.number().int().parse(form.get("number")),
    order: z.coerce.number().int().parse(form.get("order")),
    title: str(form, "title"),
    titleEn: str(form, "titleEn"),
    summary: str(form, "summary"),
    bookPage: form.get("bookPage") ? z.coerce.number().int().parse(form.get("bookPage")) : null,
    published: form.get("published") === "on",
  };
  if (id) {
    await prisma.lesson.update({ where: { id }, data });
    done(`/admin/lessons/${id}`, "Lesson saved");
  }
  const part = await prisma.part.findUniqueOrThrow({ where: { id: data.partId } });
  const created = await prisma.lesson.create({ data: { ...data, slug: `${part.slug}-${data.number}-${Date.now().toString(36)}` } });
  done(`/admin/lessons/${created.id}`, "Lesson created");
}

export async function togglePublished(id: string) {
  await requireAdmin();
  const l = await prisma.lesson.findUniqueOrThrow({ where: { id } });
  await prisma.lesson.update({ where: { id }, data: { published: !l.published } });
  done("/admin/lessons");
}

export async function deleteLesson(id: string) {
  await requireAdmin();
  await prisma.lesson.delete({ where: { id } });
  done("/admin/lessons", "Lesson deleted");
}

/* ── Grammar points ──────────────────────────────────────────────────── */
export async function saveGrammar(form: FormData) {
  await requireAdmin();
  const id = str(form, "id");
  const lessonId = str(form, "lessonId");
  const data = {
    pattern: str(form, "pattern"),
    meaning: str(form, "meaning"),
    formation: str(form, "formation"),
    explanation: str(form, "explanation"),
    notes: lines(str(form, "notes")),
    level: level.parse(form.get("level")),
    order: z.coerce.number().int().parse(form.get("order") ?? 0),
  };
  if (id) {
    await prisma.grammarPoint.update({ where: { id }, data });
    done(`/admin/grammar/${id}`, "Grammar point saved");
  }
  const lesson = await prisma.lesson.findUniqueOrThrow({ where: { id: lessonId } });
  const gp = await prisma.grammarPoint.create({
    data: { ...data, lessonId, slug: `${lesson.slug}-${Date.now().toString(36)}` },
  });
  done(`/admin/grammar/${gp.id}`, "Grammar point created");
}

export async function deleteGrammar(id: string) {
  await requireAdmin();
  const gp = await prisma.grammarPoint.delete({ where: { id } });
  done(`/admin/lessons/${gp.lessonId}`, "Grammar point deleted");
}

/* ── Examples ────────────────────────────────────────────────────────── */
export async function saveExample(form: FormData) {
  await requireAdmin();
  const id = str(form, "id");
  const grammarPointId = str(form, "grammarPointId");
  const wordList = str(form, "words").split(/[,、\s]+/).filter(Boolean);
  const vocab = await prisma.vocabulary.findMany({ where: { word: { in: wordList } } });
  const unknown = wordList.filter((w) => !vocab.some((v) => v.word === w));
  const data = {
    japanese: str(form, "japanese"),
    english: str(form, "english"),
    highlight: str(form, "highlight"),
    order: z.coerce.number().int().parse(form.get("order") ?? 0),
  };
  const words = wordList
    .map((w) => vocab.find((v) => v.word === w))
    .filter((v, i, a): v is NonNullable<typeof v> => !!v && a.indexOf(v) === i)
    .map((v, i) => ({ vocabularyId: v.id, order: i }));

  if (id) {
    await prisma.$transaction([
      prisma.exampleWord.deleteMany({ where: { exampleId: id } }),
      prisma.example.update({ where: { id }, data: { ...data, words: { create: words } } }),
    ]);
  } else {
    await prisma.example.create({ data: { ...data, grammarPointId, words: { create: words } } });
  }
  done(
    `/admin/grammar/${grammarPointId}`,
    unknown.length ? `Saved — add these to the word bank first: ${unknown.join(", ")}` : "Example saved",
  );
}

export async function deleteExample(id: string) {
  await requireAdmin();
  const ex = await prisma.example.delete({ where: { id } });
  done(`/admin/grammar/${ex.grammarPointId}`, "Example deleted");
}

/* ── Questions ───────────────────────────────────────────────────────── */
export async function saveQuestion(form: FormData) {
  await requireAdmin();
  const id = str(form, "id");
  const grammarPointId = str(form, "grammarPointId");
  const type = z.enum(["MULTIPLE_CHOICE", "ORDERING", "TRANSLATION"]).parse(form.get("type"));
  const options = lines(str(form, "options"));
  let answer = str(form, "answer");
  if (type === "ORDERING") answer = options.join("");
  if (type !== "ORDERING" && !options.includes(answer)) {
    done(`/admin/grammar/${grammarPointId}`, "Not saved: the answer must match one of the options exactly");
  }
  const data = { type, prompt: str(form, "prompt"), options, answer, explanation: str(form, "explanation") };
  if (id) await prisma.question.update({ where: { id }, data });
  else await prisma.question.create({ data: { ...data, grammarPointId } });
  done(`/admin/grammar/${grammarPointId}`, "Question saved");
}

export async function deleteQuestion(id: string) {
  await requireAdmin();
  const q = await prisma.question.delete({ where: { id } });
  done(`/admin/grammar/${q.grammarPointId}`, "Question deleted");
}

/* ── Vocabulary ──────────────────────────────────────────────────────── */
export async function saveVocab(form: FormData) {
  await requireAdmin();
  const id = str(form, "id");
  const data = {
    word: str(form, "word"),
    reading: str(form, "reading"),
    meaning: str(form, "meaning"),
    partOfSpeech: str(form, "partOfSpeech"),
    level: level.parse(form.get("level")),
  };
  try {
    if (id) await prisma.vocabulary.update({ where: { id }, data });
    else await prisma.vocabulary.create({ data });
  } catch {
    done("/admin/vocab", `"${data.word}" (${data.reading}) is already in the word bank`);
  }
  done("/admin/vocab", "Word saved");
}

export async function deleteVocab(id: string) {
  await requireAdmin();
  await prisma.vocabulary.delete({ where: { id } });
  done("/admin/vocab", "Word deleted");
}

/* ── Users ───────────────────────────────────────────────────────────── */
export async function setRole(id: string, role: "ADMIN" | "LEARNER") {
  const me = await requireAdmin();
  if (me.id === id && role === "LEARNER") done("/admin/users", "You can't remove your own admin role");
  await prisma.profile.update({ where: { id }, data: { role } });
  done("/admin/users", "Role updated");
}
