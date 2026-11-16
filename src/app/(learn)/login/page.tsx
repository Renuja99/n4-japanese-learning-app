import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Shell } from "@/components/Shell";
import { LoginForm } from "@/components/LoginForm";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return (
    <Shell nav={false}>
      <Link href="/" aria-label="Back" className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
        <ArrowLeft size={20} />
      </Link>
      <h1 className="mt-6 text-[34px] leading-tight font-bold tracking-tight">
        Welcome back
        <span className="jp block text-pink">おかえり！</span>
      </h1>
      <p className="mt-2 text-muted">Sign in to save your XP, streak and progress.</p>
      <LoginForm next={next} />
    </Shell>
  );
}
