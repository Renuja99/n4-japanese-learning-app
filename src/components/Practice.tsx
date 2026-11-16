"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Check, Clock, Heart, RotateCcw, Star, Target, X } from "lucide-react";
import { completeLesson, type CompleteResult } from "@/app/actions";
import { toPlain } from "@/lib/ruby";
import { Ruby } from "./Ruby";

export type PracticeQuestion = {
  id: string;
  type: "MULTIPLE_CHOICE" | "ORDERING" | "TRANSLATION";
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  pattern: string;
};

type Props = {
  lessonId: string;
  lessonSlug: string;
  title: string;
  questions: PracticeQuestion[];
  next: { slug: string; title: string } | null;
  signedIn: boolean;
};

const HEARTS = 5;
const instructions = {
  MULTIPLE_CHOICE: "Choose the right word for the blank",
  ORDERING: "Put the parts in the right order",
  TRANSLATION: "What does this sentence mean?",
};

function scramble(n: number, seed: string) {
  const idx = Array.from({ length: n }, (_, i) => i);
  let h = [...seed].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  for (let i = n - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  // Never show the chunks already in the right order.
  if (n > 1 && idx.every((v, i) => v === i)) idx.push(idx.shift()!);
  return idx;
}

export function Practice({ lessonId, lessonSlug, title, questions, next, signedIn }: Props) {
  const [queue, setQueue] = useState(questions);
  const [pos, setPos] = useState(0);
  const [hearts, setHearts] = useState(HEARTS);
  const [choice, setChoice] = useState<string | null>(null);
  const [order, setOrder] = useState<number[]>([]);
  const [checked, setChecked] = useState<null | boolean>(null);
  const [solved, setSolved] = useState(new Set<string>());
  const [missed, setMissed] = useState(new Set<string>());
  const [result, setResult] = useState<CompleteResult | null>(null);
  const [pending, start] = useTransition();
  const startedAt = useRef(Date.now());

  const q = queue[pos];
  const finished = pos >= queue.length;
  const failed = hearts <= 0 && checked === null;
  const progress = Math.min(1, solved.size / questions.length);
  const bank = useMemo(() => (q?.type === "ORDERING" ? scramble(q.options.length, q.id + pos) : []), [q, pos]);

  const userAnswer =
    q?.type === "ORDERING" ? order.map((i) => q.options[i]).join("") : choice;
  const ready = q?.type === "ORDERING" ? order.length === q.options.length : choice !== null;

  function check() {
    if (!q || !ready) return;
    const ok = userAnswer === q.answer;
    setChecked(ok);
    if (ok) {
      setSolved((s) => new Set(s).add(q.id));
    } else {
      setHearts((h) => h - 1);
      setMissed((s) => new Set(s).add(q.id));
      setQueue((qs) => [...qs, q]); // try it again at the end
    }
  }

  function advance() {
    setChecked(null);
    setChoice(null);
    setOrder([]);
    setPos((p) => p + 1);
  }

  const correctFirst = questions.filter((x) => !missed.has(x.id)).length;

  useEffect(() => {
    if (!finished || failed || result) return;
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    start(async () => {
      const r = await completeLesson({
        lessonId,
        correct: correctFirst,
        total: questions.length,
        minutes: Math.max(1, Math.round((Date.now() - startedAt.current) / 60000)),
        today,
      });
      setResult(r);
    });
  }, [finished, failed, result, lessonId, correctFirst, questions.length]);

  // ── Out of hearts ──
  if (failed) {
    return (
      <Screen>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-bad-soft text-bad">
            <Heart size={56} fill="currentColor" />
          </div>
          <h1 className="mt-6 text-3xl font-bold">Out of hearts</h1>
          <p className="mt-2 text-muted">Review the example sentences, then try again — mistakes are how it sticks.</p>
        </div>
        <div className="grid gap-3">
          <button onClick={() => location.reload()} className="btn3d btn-dark w-full">
            <RotateCcw size={18} /> Try again
          </button>
          <Link href={`/lessons/${lessonSlug}`} className="btn3d btn-white w-full">
            Review the lesson
          </Link>
        </div>
      </Screen>
    );
  }

  // ── Results ──
  if (finished) {
    const accuracy = Math.round((correctFirst / questions.length) * 100);
    const mins = Math.max(1, Math.round((Date.now() - startedAt.current) / 60000));
    return (
      <Screen>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="relative grid h-32 w-32 animate-pop place-items-center rounded-full bg-lavender ring-[14px] ring-lavender-soft">
            <Star size={60} className="text-ink" fill="#fff" strokeWidth={1.6} />
          </div>
          <h1 className="mt-8 text-[32px] leading-tight font-bold">Lesson complete!</h1>
          <p className="jp mt-1 text-muted">{title}</p>
          <div className="mt-8 grid w-full grid-cols-3 gap-3">
            <Stat color="bg-peach border-2 border-peach-line" icon={<Star size={18} />} label="XP" value={`+${result?.xp ?? "…"}`} />
            <Stat color="bg-lavender-soft" icon={<Target size={18} />} label="Accuracy" value={`${accuracy}%`} />
            <Stat color="bg-pink-soft" icon={<Clock size={18} />} label="Time" value={`${mins}m`} />
          </div>
          {result && !result.saved && (
            <p className="mt-6 rounded-2xl bg-white px-4 py-3 text-sm">
              <Link href={`/login?next=/lessons/${lessonSlug}/practice`} className="font-bold text-lavender-ink underline">
                Sign in
              </Link>{" "}
              to save your XP, streak and progress.
            </p>
          )}
          {result?.saved && result.streak ? (
            <p className="mt-6 text-sm font-semibold text-rust">🔥 {result.streak}-day streak</p>
          ) : null}
        </div>
        <div className="grid gap-3">
          {next ? (
            <Link href={`/lessons/${next.slug}`} className="btn3d btn-dark w-full" aria-disabled={pending}>
              Next lesson · <span className="jp">{next.title}</span>
            </Link>
          ) : null}
          <Link href="/" className="btn3d btn-white w-full">
            Back to home
          </Link>
        </div>
      </Screen>
    );
  }

  // ── Question ──
  const chunk = (i: number) => <Ruby text={q.options[i]} />;
  return (
    <Screen>
      <div className="flex items-center gap-3">
        <Link href={`/lessons/${lessonSlug}`} aria-label="Quit" className="text-muted">
          <X size={26} />
        </Link>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-lavender transition-all duration-500" style={{ width: `${progress * 100}%` }}>
            <div className="mx-2 mt-1 h-1 rounded-full bg-white/50" />
          </div>
        </div>
        <span className="flex items-center gap-1 font-bold text-bad">
          <Heart size={22} fill="currentColor" /> {hearts}
        </span>
      </div>

      <div key={pos} className="mt-8 flex-1 animate-pop">
        <p className="text-sm font-bold tracking-wide text-lavender-ink uppercase">{instructions[q.type]}</p>
        {missed.has(q.id) && checked === null && (
          <span className="chip mt-2 bg-peach py-1 text-xs text-rust">Previous mistake</span>
        )}

        {q.type === "MULTIPLE_CHOICE" && (
          <>
            <p className="mt-4 text-[22px] leading-[2.2] font-medium">
              <Ruby text={q.prompt} />
            </p>
            <div className="mt-6 grid gap-3">
              {q.options.map((o) => (
                <Option key={o} selected={choice === o} state={stateFor(o)} onClick={() => checked === null && setChoice(o)}>
                  <Ruby text={o} />
                </Option>
              ))}
            </div>
          </>
        )}

        {q.type === "TRANSLATION" && (
          <>
            <div className="mt-4 rounded-3xl border-2 border-line bg-white p-5 text-[21px] leading-[2.2]">
              <Ruby text={q.prompt} />
            </div>
            <div className="mt-6 grid gap-3">
              {q.options.map((o) => (
                <Option key={o} selected={choice === o} state={stateFor(o)} onClick={() => checked === null && setChoice(o)}>
                  <span className="text-[15px]">{o}</span>
                </Option>
              ))}
            </div>
          </>
        )}

        {q.type === "ORDERING" && (
          <>
            <p className="mt-4 text-[20px] leading-snug font-semibold">“{q.prompt}”</p>
            <div className="mt-6 flex min-h-[112px] flex-wrap content-start gap-2 border-y-2 border-line py-3">
              {order.map((i, k) => (
                <button
                  key={k}
                  onClick={() => checked === null && setOrder(order.filter((_, j) => j !== k))}
                  className="btn3d btn-white px-3 py-2 text-[17px] font-medium"
                >
                  {chunk(i)}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {bank.map((i) => {
                const used = order.includes(i);
                return (
                  <button
                    key={i}
                    disabled={used || checked !== null}
                    onClick={() => setOrder([...order, i])}
                    className={`btn3d px-3 py-2 text-[17px] font-medium ${used ? "bg-line text-transparent shadow-none [&_rt]:text-transparent" : "btn-white"}`}
                  >
                    {chunk(i)}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {checked === null ? (
        <button onClick={check} disabled={!ready} className="btn3d btn-dark mt-6 w-full text-base">
          Check
        </button>
      ) : (
        <div
          className={`fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md animate-up rounded-t-[32px] p-6 pb-[max(env(safe-area-inset-bottom),24px)] ${
            checked ? "bg-good-soft" : "bg-bad-soft"
          }`}
          role="status"
        >
          <div className={`flex items-center gap-2 text-xl font-bold ${checked ? "text-good" : "text-bad"}`}>
            <span className={`grid h-9 w-9 place-items-center rounded-full bg-white`}>
              {checked ? <Check size={22} strokeWidth={3} /> : <X size={22} strokeWidth={3} />}
            </span>
            {checked ? "Nicely done!" : "Not quite"}
          </div>
          {!checked && (
            <p className="mt-3 text-[15px]">
              <span className="font-semibold text-bad">Correct answer: </span>
              {q.type === "TRANSLATION" ? q.answer : <span className="jp">{toPlain(q.type === "ORDERING" ? q.options.join("") : q.answer)}</span>}
            </p>
          )}
          {q.explanation && (
            <p className="mt-2 text-sm text-ink/80">
              <Ruby text={q.explanation} />
            </p>
          )}
          <button onClick={advance} className={`btn3d mt-5 w-full ${checked ? "btn-good" : "btn-bad"}`}>
            {hearts <= 0 ? "See results" : "Continue"}
          </button>
        </div>
      )}
    </Screen>
  );

  function stateFor(o: string): "idle" | "right" | "wrong" {
    if (checked === null) return "idle";
    if (o === q.answer) return "right";
    if (o === choice) return "wrong";
    return "idle";
  }
}

function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-canvas px-5 pt-6 pb-8 sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:rounded-[44px]">
      {children}
    </div>
  );
}

function Option({
  children,
  selected,
  state,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  state: "idle" | "right" | "wrong";
  onClick: () => void;
}) {
  const look =
    state === "right"
      ? "border-good bg-good-soft [--shadow:#2c9d5b]"
      : state === "wrong"
        ? "border-bad bg-bad-soft [--shadow:#dc4a4f]"
        : selected
          ? "border-lavender bg-lavender-soft [--shadow:#9195e6]"
          : "border-line bg-white [--shadow:var(--color-line)]";
  return (
    <button onClick={onClick} className={`btn3d justify-start border-2 text-left text-[18px] font-medium ${look}`}>
      {children}
    </button>
  );
}

function Stat({ color, icon, label, value }: { color: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className={`rounded-3xl p-4 ${color}`}>
      <div className="flex items-center justify-center gap-1 text-xs font-bold tracking-wide uppercase opacity-70">
        {icon} {label}
      </div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
