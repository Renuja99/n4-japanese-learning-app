"use client";

import { useActionState, useState } from "react";
import { authenticate, type AuthState } from "@/app/actions";

export function LoginForm({ next }: { next?: string }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [state, action, pending] = useActionState<AuthState, FormData>(authenticate, {});
  return (
    <form action={action} className="card mt-6 p-6">
      <div className="mb-5 grid grid-cols-2 rounded-2xl bg-canvas p-1 text-sm font-bold">
        {(["signin", "signup"] as const).map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMode(m)}
            className={`rounded-xl py-2.5 ${mode === m ? "bg-white shadow-sm" : "text-muted"}`}
          >
            {m === "signin" ? "Sign in" : "Create account"}
          </button>
        ))}
      </div>
      <input type="hidden" name="mode" value={mode} />
      <input type="hidden" name="next" value={next ?? "/"} />
      <label className="label" htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      <label className="label mt-4" htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        minLength={6}
        autoComplete={mode === "signin" ? "current-password" : "new-password"}
        className="field"
      />
      {state.error && <p className="mt-3 rounded-xl bg-bad-soft px-3 py-2 text-sm text-bad">{state.error}</p>}
      {state.message && <p className="mt-3 rounded-xl bg-good-soft px-3 py-2 text-sm text-good">{state.message}</p>}
      <button disabled={pending} className="btn3d btn-dark mt-6 w-full">
        {pending ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
      </button>
    </form>
  );
}
