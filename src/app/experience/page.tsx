import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { experience, profile } from "@/content/profile";
import { CvButton } from "@/components/CvRequest";

export const metadata: Metadata = {
  title: "Experience",
  description: "Mesakh's career: UX Lead and UX Designer at Telkom Indonesia (OCA), and UI/UX consultant at Nuwira Integrasi Mandiri.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="wrap py-14 lg:py-20">
      <header className="grid gap-6 lg:grid-cols-12 lg:gap-x-10 mb-14" data-sync="intro">
        <h1 className="h1 lg:col-span-7">
          <span className="only-story">Eight years, two companies, one direction: closer to the whole product</span>
          <span className="only-editorial">Experience</span>
        </h1>
        <div className="lg:col-span-4 lg:col-start-9 self-end grid gap-4">
          <p className="lede">{profile.years} years in UI/UX and product design across CPaaS, SaaS, fintech and banking.</p>
          <div>
            <CvButton variant="ghost" />
          </div>
        </div>
      </header>

      <ol className="grid gap-16">
        {experience.map((e) => (
          <li key={e.name} data-sync={`e-${e.start}`} className="grid gap-8 lg:grid-cols-12 lg:gap-x-10 border-t border-[var(--fg)] pt-6">
            <div className="lg:col-span-4">
              <h2 className="h2">{e.name}</h2>
              <p className="meta mt-2 tabular-nums">
                {e.start} to {e.end}, {e.location}
              </p>
              <p className="mt-4 text-[var(--fg-soft)] max-w-[28rem] only-story">{e.context}</p>
            </div>
            <div className="lg:col-span-8 grid gap-10">
              {e.roles.map((r) => (
                <div key={r.title}>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="h3">{r.title}</h3>
                    <span className="meta tabular-nums">
                      {r.start} to {r.end}
                    </span>
                  </div>
                  <p className="mt-2 text-[1.0625rem]">{r.summary}</p>
                  <ul className="mt-4 grid gap-2 only-story">
                    {r.points.map((p) => (
                      <li key={p} className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2.5 before:h-px before:bg-[var(--accent)] leading-[1.55]">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <p className="meta mb-2">Case studies from this period</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {e.work.map((slug) => {
                    const c = caseStudies.find((x) => x.slug === slug)!;
                    return (
                      <li key={slug}>
                        <Link className="link font-[560]" href={`/work/${slug}`}>
                          {c.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        ))}
        <li data-sync="education" className="grid gap-8 lg:grid-cols-12 lg:gap-x-10 border-t border-[var(--fg)] pt-6">
          <h2 className="h2 lg:col-span-4">Education and teaching</h2>
          <ul className="lg:col-span-8 grid gap-4">
            {profile.education.map((ed) => (
              <li key={ed.title}>
                <p className="font-[600]">{ed.title}</p>
                <p className="meta">
                  {ed.place}, {ed.years.toLowerCase()}
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  );
}
