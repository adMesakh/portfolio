"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-[2px] border-b border-[var(--line)]">
      <div className="wrap flex items-center gap-4 sm:gap-8 h-14">
        <Link href="/" className="font-[620] text-[1.0625rem] tracking-[-0.01em] mr-auto">
          Mesakh
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-[0.9375rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={isActive(n.href) ? "font-[600]" : "text-[var(--fg-soft)] hover:text-[var(--fg)] transition-colors"}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <span aria-hidden className="hidden md:block h-5 w-px bg-[var(--line)]" />

        <ModeToggle />

        <button
          type="button"
          className="md:hidden min-h-11 min-w-11 -mr-2 px-2 text-[0.9375rem] font-[560] cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-nav" hidden={!open} className="md:hidden border-t border-[var(--line)]">
        <nav aria-label="Main" className="wrap py-3">
          <ul className="grid text-[1.125rem] font-[560]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block py-2.5" aria-current={isActive(n.href) ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
