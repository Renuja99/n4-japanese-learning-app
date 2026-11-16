import { forms } from "./forms";
import { part1a } from "./part1a";
import { part1b } from "./part1b";
import { part2 } from "./part2";
import type { PartSrc } from "./types";

export const parts: PartSrc[] = [
  forms,
  {
    slug: "part-1",
    order: 1,
    title: "第1部 意味機能別の文法形式",
    titleEn: "Part 1 · Grammar forms by meaning",
    color: "lavender",
    lessons: [...part1a, ...part1b],
  },
  {
    slug: "part-2",
    order: 2,
    title: "第2部 文法形式の整理",
    titleEn: "Part 2 · Using grammar forms correctly",
    color: "pink",
    lessons: part2,
  },
];

export { vocab } from "./vocab";
