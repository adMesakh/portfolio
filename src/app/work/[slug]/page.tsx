import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { Blocks } from "@/components/blocks/Blocks";
import { ModeLink } from "@/components/ModeToggle";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CvButton } from "@/components/CvRequest";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: `${c.title}: ${c.headline}`,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title: `${c.title} — Mesakh`, description: c.summary, url: `/work/${c.slug}`, type: "article" },
  };
}

const toneClass = { paper: "tone-paper", ink: "tone-ink", stone: "tone-stone", sand: "tone-mist" } as const;

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const i = caseStudies.indexOf(c);
  const next = caseStudies[(i + 1) % caseStudies.length];

  const meta: [string, string | undefined][] = [
    ["Role", c.role],
    ["Where", c.client ? `${c.client}, via ${c.org}` : c.org],
    ["When", c.years],
    ["Platforms", c.platforms],
    ["Team", c.team],
  ];

  return (
    <article>
      <ReadingProgress />

      {/* Header — shared by both modes, set in the study's own tone */}
      <header className={toneClass[c.tone]} data-sync="intro">
        <div className="wrap pt-8 pb-14 lg:pb-20">
          <nav aria-label="Breadcrumb" className="text-[0.9375rem] mb-10 lg:mb-16">
            <Link href="/work" className="link">
              Work
            </Link>
            <span className="text-[var(--fg-soft)]"> / {c.title}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-8">
              <p className="text-[1.0625rem] font-[560] mb-4">{c.title}</p>
              <h1 className="h1">
                <span className="only-story">{c.headline}</span>
                <span className="only-editorial">{c.summary}</span>
              </h1>
              <p className="standfirst mt-6 only-story">{c.standfirst}</p>
            </div>
            <dl className="lg:col-span-4 self-end grid gap-3 text-[0.9375rem]">
              {meta
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 border-t border-[var(--line)] pt-2">
                    <dt className="text-[var(--fg-soft)]">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </header>

      {/* Outcomes strip — both modes */}
      <section aria-label="Outcomes" className="border-b border-[var(--line)]" data-sync="outcomes">
        <div className="wrap py-8">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.outcomes.map((o) => (
              <div key={o.text}>
                {o.value && <dt className="text-[1.875rem] font-[620] tracking-[-0.02em] leading-none mb-2">{o.value}</dt>}
                <dd className={o.value ? "meta" : "text-[1.0625rem] font-[560] max-w-[24rem]"}>{o.text}</dd>
              </div>
            ))}
          </dl>
          {c.note && <p className="meta mt-6 max-w-[44rem] italic">{c.note}</p>}
        </div>
      </section>

      {/* Storytelling: the full case study ------------------------------ */}
      <div className="only-story">
        {c.depth === "short" ? (
          <section className="wrap py-14 lg:py-20 grid gap-10 lg:grid-cols-12 lg:gap-x-10" data-sync="body">
            <div className="lg:col-span-4">
              <h2 className="h2">The short version</h2>
              <p className="meta mt-3 max-w-[22rem]">
                A smaller record. I&apos;ve kept it to what I can show and verify.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-12">
              <div className="prose">
                <p>{c.challenge}</p>
              </div>
              <div>
                <h3 className="h3 mb-4">What I did</h3>
                <ul className="prose grid gap-2 list-disc pl-5 marker:text-[var(--accent)]">
                  {c.contribution.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              {c.sections.map((s) => (
                <div key={s.label}>
                  <h3 className="h3 mb-5">{s.headline}</h3>
                  <Blocks blocks={s.blocks} />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="wrap py-14 lg:py-20 grid gap-10 lg:grid-cols-12 lg:gap-x-10" data-sync="body">
            <nav aria-label="In this case study" className="hidden lg:block lg:col-span-3">
              <ol className="sticky top-24 grid gap-2 text-[0.9375rem]">
                {c.sections.map((s, n) => (
                  <li key={s.label}>
                    <a href={`#s-${n}`} className="grid grid-cols-[1.75rem_1fr] text-[var(--fg-soft)] hover:text-[var(--accent)]">
                      <span className="tabular-nums">{n + 1}</span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="lg:col-span-9 grid gap-16 lg:gap-24">
              {c.sections.map((s, n) => (
                <section key={s.label} id={`s-${n}`} className="scroll-mt-24" aria-labelledby={`s-${n}-h`}>
                  <p className="label mb-2">{s.label}</p>
                  <h2 id={`s-${n}-h`} className="h2 max-w-[24ch] mb-8">
                    {s.headline}
                  </h2>
                  <Blocks blocks={s.blocks} />
                </section>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Editorial: the brief ----------------------------------------- */}
      <div className="only-editorial">
        <section className="wrap py-12 grid gap-10 lg:grid-cols-12 lg:gap-x-10" data-sync="body">
          <div className="lg:col-span-5">
            <h2 className="h3 mb-3">Challenge</h2>
            <p className="text-[1.0625rem] leading-[1.55]">{c.challenge}</p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="h3 mb-3">What I did</h2>
            <ul className="grid gap-2 border-t border-[var(--fg)]">
              {c.contribution.map((t) => (
                <li key={t} className="py-2.5 border-b border-[var(--line)] text-[0.9875rem] leading-[1.5]">
                  {t}
                </li>
              ))}
            </ul>
            {c.sections.length > 0 && (
              <p className="mt-6">
                <ModeLink to="storytelling" className="link font-[560]">
                  Read the full story
                </ModeLink>
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Next ----------------------------------------------------------- */}
      <nav aria-label="Next case study" className="border-t border-[var(--fg)]">
        <div className="wrap py-12 lg:py-16 grid gap-6 lg:grid-cols-12 lg:gap-x-10 items-end">
          <div className="lg:col-span-8">
            <p className="meta mb-2">Next case study</p>
            <Link href={`/work/${next.slug}`} className="h2 hover:text-[var(--accent)] transition-colors">
              {next.title}: {next.headline}
            </Link>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <CvButton variant="ghost" />
          </div>
        </div>
      </nav>
    </article>
  );
}
