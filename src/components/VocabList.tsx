"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { LevelBadge } from "./LevelBadge";

type Word = { id: string; word: string; reading: string; meaning: string; partOfSpeech: string; level: string; uses: number };

export function VocabList({ words }: { words: Word[] }) {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<string>("All");
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return words.filter(
      (w) =>
        (level === "All" || w.level === level) &&
        (!s || w.word.includes(s) || w.reading.includes(s) || w.meaning.toLowerCase().includes(s)),
    );
  }, [q, level, words]);

  return (
    <>
      <label className="mt-5 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5">
        <Search size={18} className="text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search kanji, kana or English"
          className="w-full bg-transparent outline-none"
        />
      </label>
      <div className="mt-3 flex gap-2">
        {["All", "N5", "N4", "N3"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`chip ${level === l ? "bg-ink text-white" : "border border-line bg-white"}`}
          >
            {l}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">{shown.length} words</p>
      <ul className="mt-2 space-y-2">
        {shown.map((w) => (
          <li key={w.id} className="card flex items-center gap-4 px-4 py-3">
            <div className="w-28 shrink-0">
              <div className="jp text-xl font-semibold">{w.word}</div>
              <div className="jp text-xs text-muted">{w.reading}</div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-snug">{w.meaning}</p>
              <p className="text-[11px] text-muted">
                {w.partOfSpeech} · in {w.uses} sentence{w.uses === 1 ? "" : "s"}
              </p>
            </div>
            <LevelBadge level={w.level} />
          </li>
        ))}
      </ul>
    </>
  );
}
