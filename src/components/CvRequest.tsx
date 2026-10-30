"use client";

import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/content/profile";
import { isValidEmail } from "@/lib/email";

const OPEN_EVENT = "open-cv-request";

export function CvButton({ variant = "solid", label = "Request my CV" }: { variant?: "solid" | "ghost"; label?: string }) {
  return (
    <button
      type="button"
      className={"btn" + (variant === "ghost" ? " btn--ghost" : "")}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {label}
    </button>
  );
}

type Status = "idle" | "submitting" | "success" | "error" | "unavailable" | "limited";

export function CvForm({ headingLevel = 2, onDone }: { headingLevel?: 2 | 3; onDone?: () => void }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const invalid = touched && !isValidEmail(email);
  const H = headingLevel === 2 ? "h2" : "h3";

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email) || status === "submitting") return;
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/cv-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          website: String(form.get("website") ?? ""),
          elapsed: Date.now() - startedAt.current,
        }),
      });
      if (res.ok) return setStatus("success");
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 503 || data.error === "not_configured") return setStatus("unavailable");
      if (res.status === 429) return setStatus("limited");
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="grid gap-3">
        <H className="h3">Request received</H>
        <p className="lede text-[var(--fg)]">Your request has been received. Check your inbox for my CV.</p>
        {onDone && (
          <div>
            <button type="button" className="btn btn--ghost" onClick={onDone}>
              Close
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div className="grid gap-2">
        <H className="h2 max-w-[22ch]">Want to know more about my experience?</H>
        <p className="lede">Leave your email address and I&apos;ll send you a copy of my latest CV.</p>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={`${id}-email`} className="text-[0.9375rem] font-[560]">
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Your work email address"
          className="field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={invalid}
          aria-describedby={`${id}-help${invalid ? ` ${id}-err` : ""}`}
          disabled={status === "submitting"}
        />
        {invalid && (
          <p id={`${id}-err`} className="text-[0.875rem] text-[#b4233c]">
            Enter an email address like name@company.com.
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p id={`${id}-help`} className="text-[0.8125rem] leading-[1.5] text-[var(--fg-soft)] max-w-[34rem]">
        Your email is used only to send the CV and to let me know who asked. It isn&apos;t added to a mailing list,
        stored in a database or shared.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request CV"}
        </button>
      </div>

      <div aria-live="polite" className="text-[0.9375rem]">
        {status === "error" && <p className="text-[#b4233c]">Something went wrong. Please try again.</p>}
        {status === "limited" && (
          <p className="text-[#b4233c]">Too many requests from this connection. Please try again in an hour.</p>
        )}
        {status === "unavailable" && (
          <p>
            CV delivery isn&apos;t switched on yet. Email me at{" "}
            <a className="link" href={`mailto:${profile.email}?subject=CV%20request`}>
              {profile.email}
            </a>{" "}
            and I&apos;ll send it directly.
          </p>
        )}
      </div>
    </form>
  );
}

/** One dialog for the whole site, opened by any CvButton. */
export function CvDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const open = () => {
      setKey((k) => k + 1);
      ref.current?.showModal();
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-label="Request my CV"
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="h-full overflow-y-auto p-6 sm:p-10 flex flex-col gap-8">
        <div className="flex justify-end">
          <button type="button" onClick={close} className="min-h-11 px-2 -mr-2 font-[560] cursor-pointer hover:text-[var(--accent)]">
            Close
          </button>
        </div>
        <CvForm key={key} onDone={close} />
      </div>
    </dialog>
  );
}
