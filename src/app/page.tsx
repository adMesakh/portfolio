import Link from "next/link";
import { caseStudies, featuredSlugs, getCaseStudy } from "@/content/case-studies";
import { experience, leadership, otherWork, principles, profile } from "@/content/profile";
import { CvButton } from "@/components/CvRequest";
import { Blocks } from "@/components/blocks/Blocks";
import type { CaseStudy } from "@/content/types";

export default function Home() {
  return (
    <>
      <div className="only-story">
        <StoryHome />
      </div>
      <div className="only-editorial">
        <BriefHome />
      </div>
    </>
  );
}

/* ====================================================================== */
/* Storytelling                                                           */
/* ====================================================================== */

function StoryHome() {
  const featured = featuredSlugs.map((s) => getCaseStudy(s)!) as CaseStudy[];
  const [dtp, hub, interaction, vestia, dmb] = featured;
  const archive = caseStudies.filter((c) => !featuredSlugs.includes(c.slug));
  const notes = profile.hero.statement.filter((p) => p.note);

  return (
    <>
      {/* Hero ----------------------------------------------------------- */}
      <section className="hero wrap pt-14 sm:pt-20 lg:pt-28 pb-16 lg:pb-24" data-sync="intro" aria-labelledby="hero-h">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-9">
            <p className="text-[0.9375rem] text-[var(--fg-soft)] mb-6">{profile.hero.kicker}</p>
            <h1 id="hero-h" className="display">
              {profile.hero.statement.map((p, i, all) => {
                const prev = all[i - 1];
                // Punctuation right after a claim is glued to it so it never starts a line.
                const glued = prev?.note && /^[,.]/.test(p.text);
                if (!p.note) return <span key={i}>{glued ? p.text.slice(1) : p.text}</span>;
                const n = notes.indexOf(p) + 1;
                const tail = all[i + 1] && /^[,.]/.test(all[i + 1].text) ? all[i + 1].text[0] : "";
                return (
                  <span key={i}>
                    <Link href={p.href!} className="claim" data-n={n} aria-describedby={`note-${n}`}>
                      {p.text}
                    </Link>
                    <span className="whitespace-nowrap">
                      <span className="fn" aria-hidden>
                        {n}
                      </span>
                      {tail}
                    </span>
                  </span>
                );
              })}
            </h1>
          </div>
          <ol className="lg:col-span-3 lg:self-end grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pb-2" aria-label="Notes">
            {notes.map((p, i) => (
              <li key={i} id={`note-${i + 1}`} className="note" data-n={i + 1}>
                <span className="n" aria-hidden>
                  {i + 1}
                </span>
                {p.note}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-12 lg:gap-x-10 items-end">
          <p className="lede lg:col-span-6 text-[var(--fg)]">{profile.hero.lede}</p>
          <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
            <a href="#work" className="btn">
              See selected work
            </a>
            <CvButton variant="ghost" />
            <Link href="/contact" className="btn btn--ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy ---------------------------------------------------- */}
      <section className="tone-stone" aria-labelledby="phil-h" data-sync="philosophy">
        <div className="wrap py-16 lg:py-24 grid gap-8 lg:grid-cols-12 lg:gap-x-10">
          <h2 id="phil-h" className="h2 lg:col-span-5">
            {profile.philosophy.headline}
          </h2>
          <div className="prose lg:col-span-6 lg:col-start-7">
            {profile.philosophy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work ------------------------------------------------- */}
      <section id="work" aria-labelledby="work-h" data-sync="work" className="scroll-mt-20">
        <div className="wrap pt-16 lg:pt-24 pb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="work-h" className="h2">
            Selected work
          </h2>
          <Link href="/work" className="link text-[0.9375rem]">
            All projects
          </Link>
        </div>

        {/* Lead feature: the most documented project */}
        <article className="wrap pb-16 lg:pb-24" aria-labelledby="f-dtp">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10 border-t border-[var(--fg)] pt-6">
            <div className="lg:col-span-3 grid content-start gap-1 meta">
              <p className="text-[var(--fg)] font-[560]">{dtp.title}</p>
              <p>{dtp.org}</p>
              <p>{dtp.years}</p>
              <p>{dtp.role}</p>
            </div>
            <div className="lg:col-span-9">
              <h3 id="f-dtp" className="h1 max-w-[18ch]">
                <Link href={`/work/${dtp.slug}`} className="hover:text-[var(--accent)] transition-colors">
                  {dtp.headline}
                </Link>
              </h3>
              <p className="standfirst mt-5">{dtp.standfirst}</p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                {dtp.outcomes.map((o) => (
                  <div key={o.text} className="rule-top pt-3">
                    <dt className="text-[2rem] font-[600] tracking-[-0.02em] leading-none">{o.value}</dt>
                    <dd className="meta mt-2">{o.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8">
                <Link href={`/work/${dtp.slug}`} className="link font-[560]">
                  Read the case study
                </Link>
              </p>
            </div>
          </div>
        </article>

        {/* Leadership feature on the one dark band */}
        <article className="tone-ink" aria-labelledby="f-hub">
          <div className="wrap py-16 lg:py-24 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-5">
              <p className="meta mb-4">
                {hub.title}, {hub.org}, {hub.years}
              </p>
              <h3 id="f-hub" className="h1">
                <Link href={`/work/${hub.slug}`} className="hover:text-[var(--accent)] transition-colors">
                  {hub.headline}
                </Link>
              </h3>
              <p className="standfirst mt-5">{hub.standfirst}</p>
              <p className="mt-8">
                <Link href={`/work/${hub.slug}`} className="link font-[560]">
                  Read the case study
                </Link>
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <Blocks blocks={hub.sections[1].blocks.slice(0, 1)} />
            </div>
          </div>
        </article>

        {/* Product feature with its diagram */}
        <article className="wrap py-16 lg:py-24" aria-labelledby="f-int">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-4 lg:order-2">
              <p className="meta mb-4">
                {interaction.title}, {interaction.years}
              </p>
              <h3 id="f-int" className="h1">
                <Link href={`/work/${interaction.slug}`} className="hover:text-[var(--accent)] transition-colors">
                  {interaction.headline}
                </Link>
              </h3>
              <p className="standfirst mt-5 text-[1.2rem]">{interaction.standfirst}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                {interaction.outcomes.slice(0, 2).map((o) => (
                  <div key={o.text} className="rule-top pt-3">
                    <dt className="text-[1.75rem] font-[600] tracking-[-0.02em] leading-none">{o.value}</dt>
                    <dd className="meta mt-2">{o.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8">
                <Link href={`/work/${interaction.slug}`} className="link font-[560]">
                  Read the case study
                </Link>
              </p>
            </div>
            <div className="lg:col-span-8 lg:order-1">
              <Blocks blocks={interaction.sections[0].blocks.slice(0, 1)} />
            </div>
          </div>
        </article>

        {/* A pair: two client products from the consulting years */}
        <div className="tone-stone">
          <div className="wrap py-16 lg:py-24">
            <p className="meta mb-8 max-w-[40rem]">
              Before OCA, as a consultant at Nuwira Integrasi Mandiri, I designed regulated and operational products for banks and fintechs.
            </p>
            <div className="grid gap-12 md:grid-cols-2 md:gap-x-10">
              {[vestia, dmb].map((c) => (
                <article key={c.slug} className="border-t border-[var(--fg)] pt-5" aria-labelledby={`f-${c.slug}`}>
                  <p className="meta mb-3">
                    {c.client}, {c.category}
                  </p>
                  <h3 id={`f-${c.slug}`} className="h2">
                    <Link href={`/work/${c.slug}`} className="hover:text-[var(--accent)] transition-colors">
                      {c.headline}
                    </Link>
                  </h3>
                  <p className="prose mt-4 text-[1.0625rem]">{c.standfirst}</p>
                  <ul className="mt-6 grid gap-2">
                    {c.outcomes.map((o) => (
                      <li key={o.text} className="flex gap-3 items-baseline">
                        {o.value && <span className="font-[600] text-[1.125rem] whitespace-nowrap">{o.value}</span>}
                        <span className="text-[var(--fg-soft)]">{o.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <Link href={`/work/${c.slug}`} className="link font-[560]">
                      Read the case study
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Archive: compact index */}
        <div className="wrap py-16 lg:py-20 grid gap-8 lg:grid-cols-12 lg:gap-x-10">
          <h3 className="h3 lg:col-span-3">Also worked on</h3>
          <ul className="lg:col-span-9">
            {archive.map((c) => (
              <li key={c.slug} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6 py-4 border-t border-[var(--line)]">
                <Link href={`/work/${c.slug}`} className="font-[600] hover:text-[var(--accent)]">
                  {c.title}
                </Link>
                <span className="text-[var(--fg-soft)]">{c.summary}</span>
              </li>
            ))}
            {otherWork.map((w) => (
              <li key={w.title} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6 py-4 border-t border-[var(--line)]">
                <span className="font-[600]">{w.title}</span>
                <span className="text-[var(--fg-soft)]">{w.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Career --------------------------------------------------------- */}
      <section className="tone-mist" aria-labelledby="career-h" data-sync="experience">
        <div className="wrap py-16 lg:py-24 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <h2 id="career-h" className="h2">
              From designing screens to running the design function
            </h2>
            <p className="lede mt-5">
              Two years as a consultant, then six at Telkom's OCA: first as a designer on products being built from scratch, then leading the team that designs all of them.
            </p>
            <p className="mt-6">
              <Link href="/experience" className="link font-[560]">
                Full experience
              </Link>
            </p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {[...experience].flatMap((e) =>
              e.roles.map((r) => (
                <li key={e.name + r.title} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6 py-6 border-t border-[var(--fg)]/25 first:border-[var(--fg)]">
                  <p className="meta tabular-nums">
                    {r.start} to {r.end}
                  </p>
                  <div>
                    <p className="font-[600] text-[1.125rem]">{r.title}</p>
                    <p className="text-[var(--fg-soft)]">{e.name}</p>
                    <p className="mt-2 max-w-[36rem]">{r.summary}</p>
                  </div>
                </li>
              ))
            )}
          </ol>
        </div>
      </section>

      {/* Leadership ----------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24" aria-labelledby="lead-h" data-sync="leadership">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 id="lead-h" className="h2">
              {leadership.headline}
            </h2>
          </div>
          <p className="prose lg:col-span-6 lg:col-start-7">{leadership.intro}</p>
        </div>
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.areas.map((a) => (
            <div key={a.title} className="rule-top pt-4">
              <dt className="h3 text-[1.125rem]">{a.title}</dt>
              <dd className="mt-2 text-[var(--fg-soft)] leading-[1.55]">{a.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Principles ----------------------------------------------------- */}
      <section className="tone-stone" aria-labelledby="pr-h" data-sync="principles">
        <div className="wrap py-16 lg:py-24 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <h2 id="pr-h" className="h2 lg:col-span-4">
            How I work
          </h2>
          <ul className="lg:col-span-8 grid gap-8">
            {principles.map((p) => (
              <li key={p.title} className="grid gap-2 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-[600] text-[1.125rem] leading-snug">{p.title}</h3>
                <p className="prose text-[1.0625rem]">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Personal ------------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24 grid gap-8 lg:grid-cols-12 lg:gap-x-10" aria-labelledby="me-h" data-sync="about">
        <h2 id="me-h" className="h2 lg:col-span-5">
          {profile.personal.headline}
        </h2>
        <div className="prose lg:col-span-6 lg:col-start-7">
          {profile.personal.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            <Link href="/about" className="link font-[560]" style={{ fontFamily: "var(--font-sans)" }}>
              More about me
            </Link>
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

function ContactBand() {
  return (
    <section className="tone-ink" aria-labelledby="contact-h" data-sync="contact">
      <div className="wrap py-16 lg:py-24 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h2 id="contact-h" className="h1">
            Hiring for design leadership, or building something from zero?
          </h2>
          <p className="lede mt-5 text-[var(--fg-soft)]">{profile.availability}</p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 self-end grid gap-4">
          <a href={`mailto:${profile.email}`} className="text-[1.25rem] font-[600] link">
            {profile.email}
          </a>
          <a href="https://www.linkedin.com/in/admesakh" className="link" rel="me noopener">
            LinkedIn: in/admesakh
          </a>
          <div className="mt-2">
            <CvButton label="Request my CV" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================== */
/* Editorial: a two-minute brief                                          */
/* ====================================================================== */

function BriefHome() {
  const featured = featuredSlugs.map((s) => getCaseStudy(s)!) as CaseStudy[];
  const rest = caseStudies.filter((c) => !featuredSlugs.includes(c.slug));
  const current = experience[0].roles[0];

  return (
    <div className="wrap py-10 sm:py-14 grid gap-14 lg:gap-16">
      {/* Profile sheet */}
      <section data-sync="intro" aria-labelledby="b-h" className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <h1 id="b-h" className="h1">
            Mesakh
          </h1>
          <p className="text-[1.375rem] font-[560] mt-2">{profile.title}</p>
          <p className="lede mt-5 text-[var(--fg)]">{profile.brief}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CvButton />
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              Email me
            </a>
          </div>
        </div>
        <dl className="lg:col-span-5 grid grid-cols-[8.5rem_1fr] gap-x-4 text-[0.9375rem] self-start border-t border-[var(--fg)]">
          {[
            ["Now", `${current.title}, Telkom Indonesia (OCA), since ${current.start}`],
            ["Experience", `${profile.years} years in UI/UX and product design`],
            ["Industries", "CPaaS and omnichannel, B2B SaaS, fintech, banking, operations"],
            ["Team", "Leads design for 5 squads; has led up to 10 people"],
            ["Location", `${profile.location}, open to remote or relocation`],
            ["Contact", profile.email],
          ].map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="py-2.5 border-b border-[var(--line)] text-[var(--fg-soft)]">{k}</dt>
              <dd className="py-2.5 border-b border-[var(--line)]">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Achievements */}
      <section aria-labelledby="b-ach" data-sync="philosophy">
        <h2 id="b-ach" className="h3 mb-4">
          Key results
        </h2>
        <ul className="grid gap-px bg-[var(--line)] border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
          {profile.achievements.map((a) => (
            <li key={a.text} className="bg-[var(--bg)] py-4 sm:pr-5">
              <p className="text-[1.5rem] font-[620] tracking-[-0.02em] leading-tight">{a.value}</p>
              <p className="text-[0.875rem] leading-[1.45] text-[var(--fg-soft)] mt-1.5">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Work index */}
      <section aria-labelledby="b-work" data-sync="work" id="work-brief" className="scroll-mt-20">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h2 id="b-work" className="h3">
            Selected work
          </h2>
          <Link href="/work" className="link text-[0.9375rem]">
            All projects
          </Link>
        </div>
        <div className="border-t border-[var(--fg)]">
          <div className="hidden lg:grid grid-cols-[13rem_1fr_1fr_14rem] gap-6 py-2 label border-b border-[var(--line)]">
            <span>Project</span>
            <span>Challenge</span>
            <span>What I did</span>
            <span>Outcome</span>
          </div>
          {featured.map((c) => (
            <article key={c.slug} className="grid gap-3 lg:grid-cols-[13rem_1fr_1fr_14rem] lg:gap-6 py-5 border-b border-[var(--line)] text-[0.9375rem] leading-[1.5]">
              <div>
                <h3 className="font-[620] text-[1.0625rem]">
                  <Link href={`/work/${c.slug}`} className="hover:text-[var(--accent)]">
                    {c.title}
                  </Link>
                </h3>
                <p className="text-[var(--fg-soft)]">{c.client && c.client !== c.title ? c.client : c.org}</p>
                <p className="text-[var(--fg-soft)]">{c.years}</p>
              </div>
              <p>
                <span className="lg:hidden label block">Challenge</span>
                {c.challenge}
              </p>
              <p>
                <span className="lg:hidden label block">What I did</span>
                {c.contribution[0]}
              </p>
              <ul className="grid gap-1">
                <li className="lg:hidden label">Outcome</li>
                {c.outcomes.slice(0, 2).map((o) => (
                  <li key={o.text}>
                    {o.value && <strong className="font-[620]">{o.value} </strong>}
                    {o.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <p className="py-4 text-[0.9375rem] text-[var(--fg-soft)]">
            Also:{" "}
            {rest.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/work/${c.slug}`} className="link text-[var(--fg)]">
                  {c.title}
                </Link>
                {i < rest.length - 1 ? ", " : ". "}
              </span>
            ))}
            {otherWork.map((w) => w.title).join(", ")}.
          </p>
        </div>
      </section>

      {/* Experience + leadership */}
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-14">
        <section aria-labelledby="b-exp" data-sync="experience">
          <h2 id="b-exp" className="h3 mb-4">
            Experience
          </h2>
          <ol className="border-t border-[var(--fg)]">
            {experience.flatMap((e) =>
              e.roles.map((r) => (
                <li key={e.name + r.title} className="grid grid-cols-[10.5rem_1fr] gap-4 py-3 border-b border-[var(--line)] text-[0.9375rem]">
                  <span className="text-[var(--fg-soft)] tabular-nums">
                    {r.start} to {r.end}
                  </span>
                  <span>
                    <strong className="font-[600]">{r.title}</strong>, {e.name}
                  </span>
                </li>
              ))
            )}
          </ol>
        </section>
        <section aria-labelledby="b-lead" data-sync="leadership">
          <h2 id="b-lead" className="h3 mb-4">
            Leadership scope
          </h2>
          <ul className="border-t border-[var(--fg)]">
            {leadership.areas.map((a) => (
              <li key={a.title} className="grid grid-cols-[9rem_1fr] gap-4 py-3 border-b border-[var(--line)] text-[0.9375rem]">
                <span className="text-[var(--fg-soft)]">{a.title}</span>
                <span>{a.body.split(". ")[0].replace(/\.$/, "")}.</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Skills + education */}
      <section aria-labelledby="b-skills" data-sync="principles">
        <h2 id="b-skills" className="h3 mb-4">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--fg)] pt-4">
          {profile.skills.map((g) => (
            <div key={g.group}>
              <h3 className="font-[600] mb-2">{g.group}</h3>
              <ul className="text-[0.9375rem] text-[var(--fg-soft)] grid gap-1">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="b-edu" data-sync="about" className="grid gap-14 lg:grid-cols-2 lg:gap-x-14">
        <div>
          <h2 id="b-edu" className="h3 mb-4">
            Education and teaching
          </h2>
          <ul className="border-t border-[var(--fg)]">
            {profile.education.map((e) => (
              <li key={e.title} className="py-3 border-b border-[var(--line)] text-[0.9375rem]">
                <strong className="font-[600]">{e.title}</strong>
                <span className="block text-[var(--fg-soft)]">
                  {e.place}, {e.years.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div data-sync="contact">
          <h2 className="h3 mb-4">Contact</h2>
          <div className="border-t border-[var(--fg)] pt-4 grid gap-2 text-[0.9375rem]">
            <a className="link text-[1.125rem] font-[600]" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="link" href="https://www.linkedin.com/in/admesakh" rel="me noopener">
              linkedin.com/in/admesakh
            </a>
            <p className="text-[var(--fg-soft)] mt-2">{profile.availability}</p>
            <div className="mt-3">
              <CvButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
