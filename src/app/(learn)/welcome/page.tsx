import { dismissWelcome } from "@/app/actions";
import { BookIllustration } from "@/components/Illustration";
import { Shell } from "@/components/Shell";

export default function WelcomePage() {
  return (
    <Shell nav={false}>
      <div className="flex min-h-[calc(100dvh-5rem)] flex-col">
        <div className="flex flex-1 items-center justify-center">
          <BookIllustration className="w-full max-w-[340px] animate-float" />
        </div>
        <div className="card animate-pop p-7 text-center">
          <h1 className="text-[32px] leading-[1.1] font-bold tracking-tight">The only N4 grammar app you&apos;ll need</h1>
          <p className="mt-3 text-[15px] text-muted">
            Every grammar pattern, explained with example sentences, furigana and word-by-word meanings — then practised in
            bite-sized lessons.
          </p>
          <form action={dismissWelcome} className="mt-6">
            <button className="btn3d btn-dark w-full text-base">Let&apos;s start</button>
          </form>
          <a href="/login" className="mt-4 inline-block text-sm font-semibold text-muted underline-offset-4 hover:underline">
            I already have an account
          </a>
        </div>
      </div>
    </Shell>
  );
}
