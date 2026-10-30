import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { experience, otherWork } from "@/content/profile";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies by Mesakh: OCA's website revamp, the Design Hub, OCA Interaction, Vestia, DMB and more.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <div className="wrap py-14 lg:py-20">
      <header className="grid gap-6 lg:grid-cols-12 lg:gap-x-10 mb-14" data-sync="intro">
        <h1 className="h1 lg:col-span-6">Work</h1>
        <p className="lede lg:col-span-5 lg:col-start-8 self-end">
          <span className="only-story">
            Case studies grouped by where the work happened. The longer ones walk through the problem, the decisions and what changed; the shorter ones keep to what I can verify.
          </span>
          <span className="only-editorial">Every project, one line each. Open any for the challenge, my contribution and the outcome.</span>
        </p>
      </header>

      {experience.map((e) => (
        <section key={e.name} className="mb-16" aria-labelledby={`g-${e.start}`} data-sync={`g-${e.start}`}>
          <div className="grid gap-2 lg:grid-cols-12 lg:gap-x-10 border-t border-[var(--fg)] pt-4 mb-2">
            <h2 id={`g-${e.start}`} className="h3 lg:col-span-4">
              {e.name}
            </h2>
            <p className="meta lg:col-span-8 max-w-[44rem]">
              {e.start} – {e.end}. {e.context}
            </p>
          </div>
          <ul>
            {e.work.map((slug) => {
              const c = caseStudies.find((x) => x.slug === slug)!;
              return (
                <li key={slug} className="border-b border-[var(--line)]">
                  <Link href={`/work/${slug}`} className="group grid gap-2 lg:grid-cols-12 lg:gap-x-10 py-6">
                    <span className="lg:col-span-4">
                      <span className="block font-[620] text-[1.25rem] group-hover:text-[var(--accent)] transition-colors">{c.title}</span>
                      <span className="meta">{c.category}</span>
                    </span>
                    <span className="lg:col-span-5">
                      <span className="only-story block text-[1.25rem] font-[560] tracking-[-0.01em] leading-snug">{c.headline}</span>
                      <span className="only-editorial block text-[0.9875rem] leading-[1.5]">{c.summary}</span>
                    </span>
                    <span className="lg:col-span-3 meta lg:text-right">
                      {c.outcomes[0].value ? `${c.outcomes[0].value} ${c.outcomes[0].text}` : c.years}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section aria-labelledby="other-h" data-sync="other">
        <div className="border-t border-[var(--fg)] pt-4 mb-2">
          <h2 id="other-h" className="h3">
            Smaller projects
          </h2>
        </div>
        <ul>
          {otherWork.map((w) => (
            <li key={w.title} className="grid gap-1 lg:grid-cols-12 lg:gap-x-10 py-4 border-b border-[var(--line)]">
              <span className="lg:col-span-4 font-[600]">{w.title}</span>
              <span className="lg:col-span-3 meta">{w.category}</span>
              <span className="lg:col-span-5 text-[var(--fg-soft)]">{w.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
