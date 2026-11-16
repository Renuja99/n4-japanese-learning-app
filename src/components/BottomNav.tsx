"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Home, UserRound } from "lucide-react";

const items = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/vocab", icon: BookOpen, label: "Words" },
  { href: "/saved", icon: Heart, label: "Saved" },
  { href: "/profile", icon: UserRound, label: "Profile" },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-3 pb-[max(env(safe-area-inset-bottom),12px)]">
      <div className="flex items-center justify-around rounded-[30px] bg-nav px-3 py-3 shadow-[0_10px_30px_rgba(44,36,38,0.35)]">
        {items.map(({ href, icon: Icon, label }) => {
          const active = href === "/" ? path === "/" || path.startsWith("/lessons") : path.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`grid h-14 w-14 place-items-center rounded-2xl transition ${
                active ? "bg-white text-nav" : "text-white/85 hover:text-white"
              }`}
            >
              <Icon size={24} strokeWidth={active ? 2.4 : 1.8} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
