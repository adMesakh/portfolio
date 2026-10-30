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

export function ModeToggle() {
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

  const options: { id: Mode; label: string }[] = [
    { id: "storytelling", label: "Storytelling" },
    { id: "editorial", label: "Editorial" },
  ];

  return (
    <div className="flex items-center">
      <span className="sr-only" id="mode-label">
        Reading mode: Storytelling is the full read, Editorial is a two minute summary
      </span>
      <div role="group" aria-labelledby="mode-label" className="flex items-center gap-1 text-[0.9375rem]">
        {options.map((o, i) => {
          const on = mode === o.id;
          return (
            <span key={o.id} className="flex items-center gap-1">
              {i > 0 && (
                <span aria-hidden className="text-[var(--line)] select-none">
                  /
                </span>
              )}
              <button
                type="button"
                aria-pressed={on}
                onClick={() => choose(o.id)}
                title={o.id === "editorial" ? "Two minute summary" : "The full story"}
                className={
                  "min-h-11 px-1.5 cursor-pointer transition-colors underline-offset-[6px] decoration-[1.5px] " +
                  (on ? "text-[var(--fg)] font-[600] underline decoration-[var(--accent)]" : "text-[var(--fg-soft)] hover:text-[var(--fg)]")
                }
              >
                {o.label}
              </button>
            </span>
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
