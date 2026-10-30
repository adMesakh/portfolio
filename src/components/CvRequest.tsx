"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/content/profile";
import { isValidEmail } from "@/lib/email";

type Status = "idle" | "submitting" | "success" | "error" | "unavailable" | "limited";

/**
 * The CV request form.
 * - "stack": heading above fields (Contact page).
 * - "band": heading on the left, fields on the right (the band before the footer).
 */
export function CvForm({ variant = "stack", headingLevel = 2 }: { variant?: "stack" | "band"; headingLevel?: 2 | 3 }) {
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
  const band = variant === "band";

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

  const heading = (
    <div className="grid gap-2">
      <H className={band ? "h2 max-w-[18ch]" : "h2 max-w-[22ch]"}>Want to know more about my experience?</H>
      <p className="lede">Leave your email address and I&apos;ll send you a copy of my latest CV.</p>
    </div>
  );

  if (status === "success") {
    return (
      <div role="status" className={band ? "grid gap-8 lg:grid-cols-12 lg:gap-x-10 items-end" : "grid gap-3"}>
        <div className={band ? "lg:col-span-6" : ""}>
          <H className="h2">Request received</H>
        </div>
        <p className={"lede text-[var(--fg)] " + (band ? "lg:col-span-5 lg:col-start-8" : "")}>
          Your request has been received. Check your inbox for my CV.
        </p>
      </div>
    );
  }

  const fields = (
    <form onSubmit={submit} noValidate className="grid gap-3">
      <label htmlFor={`${id}-email`} className="text-[0.9375rem] font-[560]">
        Email address
      </label>
      <div className={band ? "flex flex-col sm:flex-row gap-3" : "grid gap-3"}>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Your work email address"
          className="field flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          aria-invalid={invalid}
          aria-describedby={`${id}-help${invalid ? ` ${id}-err` : ""}`}
          disabled={status === "submitting"}
        />
        <button type="submit" className="btn justify-center whitespace-nowrap" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request CV"}
        </button>
      </div>
      {invalid && (
        <p id={`${id}-err`} className="text-[0.875rem] text-[#b4233c]">
          Enter an email address like name@company.com.
        </p>
      )}

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

  if (band) {
    return (
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10 items-end">
        <div className="lg:col-span-6">{heading}</div>
        <div className="lg:col-span-5 lg:col-start-8">{fields}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {heading}
      {fields}
    </div>
  );
}

/** The CV request band, shown right before the footer on every page except Contact. */
export function CvBand() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <section id="cv" aria-label="Request my CV" className="tone-stone border-t border-[var(--line)] scroll-mt-16">
      <div className="wrap py-14 lg:py-20">
        <CvForm variant="band" />
      </div>
    </section>
  );
}
