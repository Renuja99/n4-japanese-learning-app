"use client";

import { createContext, useContext, useState } from "react";
import { ChevronDown, Eye, EyeOff, Languages } from "lucide-react";
import { Ruby } from "./Ruby";
import { LevelBadge } from "./LevelBadge";

type Word = { word: string; reading: string; meaning: string; partOfSpeech: string; level: string };
export type StudyExample = { id: string; japanese: string; english: string; highlight: string; words: Word[] };

const Ctx = createContext({ furigana: true, english: true });

/** Furigana / translation switches shared by every example on the page. */
export function StudyToggles({ children }: { children: React.ReactNode }) {
  const [furigana, setFurigana] = useState(true);
  const [english, setEnglish] = useState(true);
  const toggle = (on: boolean, set: (v: boolean) => void, label: string, Icon: typeof Eye) => (
    <button
      onClick={() => set(!on)}
      aria-pressed={on}
      className={`chip text-xs ${on ? "bg-ink text-white" : "border border-line bg-white text-muted"}`}
    >
      <Icon size={14} /> {label}
    </button>
  );
  return (
    <Ctx.Provider value={{ furigana, english }}>
      <div className="sticky top-0 z-20 -mx-5 flex gap-2 bg-canvas/90 px-5 py-3 backdrop-blur">
        {toggle(furigana, setFurigana, "Furigana", furigana ? Eye : EyeOff)}
        {toggle(english, setEnglish, "English", Languages)}
      </div>
      {children}
    </Ctx.Provider>
  );
}

export function ExampleCard({ ex, index }: { ex: StudyExample; index: number }) {
  const { furigana, english } = useContext(Ctx);
  const [open, setOpen] = useState(false);
  const [reveal, setReveal] = useState(false);
  const showEnglish = english || reveal;

  return (
    <div className="rounded-3xl border border-line bg-white p-4">
      <div className="flex gap-3">
        <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lavender-soft text-xs font-bold text-lavender-ink">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className={`text-[19px] leading-[2.1] ${furigana ? "" : "hide-rt"}`}>
            <Ruby text={ex.japanese} highlight={ex.highlight} />
          </p>
          {showEnglish ? (
            <p className="mt-1 text-[15px] text-muted">{ex.english}</p>
          ) : (
            <button onClick={() => setReveal(true)} className="mt-1 text-sm font-semibold text-lavender-ink">
              Tap to show meaning
            </button>
          )}
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-3 flex w-full items-center justify-between rounded-2xl bg-canvas px-4 py-2.5 text-sm font-semibold"
        aria-expanded={open}
      >
        <span>
          Words in this sentence <span className="text-muted">· {ex.words.length}</span>
        </span>
        <ChevronDown size={18} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="mt-2 grid animate-pop gap-2">
          {ex.words.map((w) => (
            <li key={w.word + w.reading} className="flex items-center gap-3 rounded-2xl border border-line px-3 py-2">
              <div className="w-24 shrink-0">
                <div className="jp text-[17px] font-semibold">{w.word}</div>
                <div className="jp text-xs text-muted">{w.reading}</div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm leading-snug">{w.meaning}</div>
                <div className="text-[11px] text-muted">{w.partOfSpeech}</div>
              </div>
              <LevelBadge level={w.level} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
