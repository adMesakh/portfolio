import type { Metadata } from "next";
import { principles, profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "How Mesakh works as a UX Lead, what he believes about design, and what he does outside work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="wrap py-14 lg:py-20 grid gap-8 lg:grid-cols-12 lg:gap-x-10" data-sync="intro">
        <h1 className="h1 lg:col-span-7">{profile.philosophy.headline}</h1>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="prose only-story">
            {profile.philosophy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="only-editorial lede text-[var(--fg)]">{profile.brief}</p>
        </div>
      </section>

      <section className="tone-stone" aria-labelledby="pr-h" data-sync="principles">
        <div className="wrap py-14 lg:py-20 grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <h2 id="pr-h" className="h2 lg:col-span-4">
            How I work
          </h2>
          <ul className="lg:col-span-8 grid gap-6">
            {principles.map((p) => (
              <li key={p.title} className="grid gap-2 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-[600] text-[1.125rem]">{p.title}</h3>
                <p className="prose text-[1.0625rem] only-story">{p.body}</p>
                <p className="text-[0.9375rem] text-[var(--fg-soft)] only-editorial">{p.body.split(". ")[0].replace(/\.$/, "")}.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 lg:py-20 grid gap-8 lg:grid-cols-12 lg:gap-x-10" aria-labelledby="me-h" data-sync="about">
        <h2 id="me-h" className="h2 lg:col-span-5">
          {profile.personal.headline}
        </h2>
        <div className="prose lg:col-span-6 lg:col-start-7">
          {profile.personal.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
