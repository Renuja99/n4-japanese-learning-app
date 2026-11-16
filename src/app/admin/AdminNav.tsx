"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookText, LayoutDashboard, Languages, Users } from "lucide-react";

const items = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/lessons", label: "Lessons", icon: BookText },
  { href: "/admin/vocab", label: "Word bank", icon: Languages },
  { href: "/admin/users", label: "Learners", icon: Users },
];

export function AdminNav() {
  const path = usePathname();
  return (
    <nav className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:px-3">
      {items.map(({ href, label, icon: Icon }) => {
        const active = href === "/admin" ? path === href : path.startsWith(href) || (href === "/admin/lessons" && path.startsWith("/admin/grammar"));
        return (
          <Link
            key={href}
            href={href}
            className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
              active ? "bg-white text-ink" : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={18} /> {label}
          </Link>
        );
      })}
    </nav>
  );
}
