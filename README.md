# Bunpo N4 — JLPT N4 grammar study app

A mobile-first, Duolingo-style web app covering every lesson of *新完全マスター文法 N4*:

| Section | Lessons | Grammar points |
|---|---|---|
| 形の練習 Practising grammatical forms | 9 | 9 |
| 第1部 Grammar forms by meaning | 25 | 61 |
| 第2部 Using grammar forms correctly | 15 | 32 |

**306 example sentences** (original, written for this app) with furigana, English, the grammar part highlighted, and a word-by-word breakdown of **461 vocabulary items** tagged N5/N4/N3. **707 practice questions**: 204 hand-written fill-in-the-blank items, plus ★ sentence-ordering and translation exercises generated from the examples.

**Stack:** Next.js 16 (App Router, `proxy.ts`) · React 19 · TypeScript · Tailwind CSS 4 · Prisma 7 (`@prisma/adapter-pg`) · Supabase (Postgres + Auth)

## Features

**Learners:** lesson path · study screen (pattern, how to form it, explanation, notes, example sentences with furigana and English toggles, word breakdowns) · practice sessions (hearts, instant feedback, wrong answers come back at the end) · XP, daily streak and daily goal · weekly progress chart · word bank with search and level filter · saved patterns · email sign-in.

**Admins (`/admin`):** overview stats and activity · create, edit, publish and delete lessons · edit grammar points, example sentences (with live furigana preview) and questions · manage the word bank · manage learner roles.

## Setup

### 1. Create a Supabase project
- **Project Settings → Database → Connection string**: copy the *Transaction pooler* URL (port 6543) and the *Session/direct* URL (port 5432).
- **Project Settings → API**: copy the project URL and the `anon` key.
- **Authentication → URL Configuration**: set the Site URL (e.g. `http://localhost:3000`) and add `http://localhost:3000/auth/callback` (and your production URL) as redirect URLs.

### 2. Configure and install
```bash
cp .env.example .env      # fill in the values, and put your email in ADMIN_EMAILS
npm install               # also runs prisma generate
```

### 3. Create the tables and load the course
```bash
npm run db:migrate        # prisma migrate deploy
npm run db:seed           # loads all lessons, sentences, questions and words
npm run dev
```
Open http://localhost:3000 on your phone or in your browser's mobile view. Sign up with the email you put in `ADMIN_EMAILS` to get the **Admin dashboard** link on the Profile screen.

Re-running `npm run db:seed` is safe: lessons and grammar points are updated in place (learner progress and saved patterns are kept); sentences and questions are rebuilt from `prisma/content/`.

## Editing content
- **In the browser:** `/admin`. Sentence markup: `{漢字|かんじ}` for furigana and `/` between parts (the parts become the ordering exercise).
- **In code:** `prisma/content/*.ts`, then `npm run content:check` (validates markup, highlights, answers and that every word is in `vocab.ts`) and `npm run db:seed`.

## Deploying (Vercel)
Add the same environment variables in the Vercel project, deploy, and add `https://your-domain/auth/callback` to Supabase's redirect URLs. Run `npm run db:migrate && npm run db:seed` once against the production database.

## Project map
```
prisma/schema.prisma          data model
prisma/migrations/            SQL migration (also enables RLS so the tables aren't exposed via Supabase's public API)
prisma/content/               course content: forms.ts, part1a.ts, part1b.ts, part2.ts, vocab.ts
prisma/seed.ts                loads the content
src/proxy.ts                  Supabase session refresh + first-visit welcome screen
src/app/(learn)/              learner screens
src/app/admin/                admin dashboard + server actions
src/components/Practice.tsx   the quiz engine
src/lib/                      prisma client, auth helpers, queries, furigana parser
```

## A note on content
The lesson structure and grammar points follow the book's table of contents. Explanations, example sentences and questions are original, so the app doesn't copy the publisher's text. Use it alongside your copy of the book (each lesson shows its page number).
