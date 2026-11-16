import "dotenv/config";
import { defineConfig } from "prisma/config";

// The Prisma CLI (migrate, seed, studio) uses DIRECT_URL — Supabase's direct
// connection on port 5432. The app at runtime uses DATABASE_URL (the pooler).
// `prisma generate` (run on install/build) doesn't connect to the database, so
// the URL is optional here: builds work even before env vars are configured.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? "",
  },
});
