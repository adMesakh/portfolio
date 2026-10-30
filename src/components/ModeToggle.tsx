"use client";

import { useEffect, useState } from "react";

export type Mode = "storytelling" | "editorial";
const KEY = "reading-mode";

/** Runs before first paint (inlined in <head>) so the right edit shows immediately. */
export const modeBootScript = `(function(){try{var q=new URLSearchParams(location.search).get('mode');var m=(q==='editorial'||q==='storytelling')?q:sessionStorage.getItem('${KEY}');if(q==='editorial'||q==='storytelling')sessionStorage.setItem('${KEY}',q);if(m==='editorial')document.documentElement.setAttribute('data-mode','editorial');}catch(e){}})();`;

function currentMode(): Mode {
  return document.documentElement.getAttribute("data-mode") === "editorial" ? "editorial" : "storytelling";
}

function isVisible(el: Element) {
  return (el as HTMLElement).offsetParent !== null || el.getClientRects().length > 0;
}

/**
 * Switches the whole document between modes without navigation.
 * Keeps the reader in the same section: both edits mark matching
 * sections with the same data-sync value.
 */
export function setMode(next: Mode) {
  const root = document.documentElement;
  if (currentMode() === next) return;

  // Find the section the reader is in now.
  const visible = Array.from(document.querySelectorAll("[data-sync]")).filter(isVisible);
  let anchor: string | null = null;
  for (const el of visible) {
    if (el.getBoundingClientRect().top <= 120) anchor = el.getAttribute("data-sync");
  }
  const atTop = window.scrollY < 40;

  if (next === "editorial") root.setAttribute("data-mode", "editorial");
  else root.removeAttribute("data-mode");
  try {
    sessionStorage.setItem(KEY, next);
  } catch {}

  // Drop any ?mode= from the address so it doesn't fight the toggle.
  const url = new URL(window.location.href);
  if (url.searchParams.has("mode")) {
    url.searchParams.delete("mode");
    window.history.replaceState(window.history.state, "", url.toString());
  }

  root.classList.remove("mode-switching");
  void root.offsetWidth;
  root.classList.add("mode-switching");
  window.setTimeout(() => root.classList.remove("mode-switching"), 320);

  if (!atTop && anchor) {
    const target = Array.from(document.querySelectorAll(`[data-sync="${anchor}"]`)).find(isVisible);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: Math.max(0, y), behavior: "instant" as ScrollBehavior });
    }
  }

  window.dispatchEvent(new CustomEvent("readingmodechange", { detail: next }));
}

export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const [mode, setLocal] = useState<Mode>("storytelling");
  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    setLocal(currentMode());
    const on = (e: Event) => setLocal((e as CustomEvent<Mode>).detail);
    window.addEventListener("readingmodechange", on);
    return () => window.removeEventListener("readingmodechange", on);
  }, []);

  const choose = (m: Mode) => {
    setMode(m);
    setLocal(m);
    setAnnounce(m === "editorial" ? "Editorial mode: a two-minute summary." : "Storytelling mode: the full story.");
  };

  const options: { id: Mode; label: string; hint: string }[] = [
    { id: "storytelling", label: "Storytelling", hint: "Full read" },
    { id: "editorial", label: "Editorial", hint: "2-min read" },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className={compact ? "sr-only" : "label hidden xl:inline"} id="mode-label">
        Reading mode
      </span>
      <div role="group" aria-labelledby="mode-label" className="inline-flex border border-[var(--fg)] rounded-[2px] p-[2px]">
        {options.map((o) => {
          const on = mode === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => choose(o.id)}
              className={
                "px-2.5 sm:px-3 py-1.5 text-left rounded-[1px] transition-colors cursor-pointer " +
                (on ? "bg-[var(--fg)] text-[var(--bg)]" : "hover:text-[var(--accent)]")
              }
            >
              <span className="block text-[0.8125rem] sm:text-[0.875rem] font-[580] leading-tight">{o.label}</span>
              <span className={"hidden sm:block text-[0.6875rem] leading-tight " + (on ? "opacity-80" : "text-[var(--fg-soft)]")}>
                {o.hint}
              </span>
            </button>
          );
        })}
      </div>
      <span className="sr-only" aria-live="polite">
        {announce}
      </span>
    </div>
  );
}

/** Inline link that switches mode, e.g. "Read the full story". */
export function ModeLink({ to, children, className }: { to: Mode; children: React.ReactNode; className?: string }) {
  return (
    <button type="button" onClick={() => setMode(to)} className={(className ?? "link") + " cursor-pointer"}>
      {children}
    </button>
  );
}
