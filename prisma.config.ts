import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// The Prisma CLI (migrate, seed, studio) uses DIRECT_URL — Supabase's direct
// connection on port 5432. The app at runtime uses DATABASE_URL (the pooler).
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DIRECT_URL"),
  },
});
