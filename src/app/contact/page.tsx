import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { CvForm } from "@/components/CvRequest";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mesakh about UX Lead, Design Manager or Lead Product Designer roles, or request his CV.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="wrap py-14 lg:py-20 grid gap-14 lg:grid-cols-12 lg:gap-x-10">
      <section className="lg:col-span-6" data-sync="contact" aria-labelledby="c-h">
        <h1 id="c-h" className="h1">
          Let&apos;s talk
        </h1>
        <p className="lede mt-5 text-[var(--fg)]">{profile.availability}</p>
        <dl className="mt-10 grid gap-4 text-[1.0625rem]">
          <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-[var(--line)] pt-3">
            <dt className="text-[var(--fg-soft)]">Email</dt>
            <dd>
              <a className="link font-[600]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-[var(--line)] pt-3">
            <dt className="text-[var(--fg-soft)]">LinkedIn</dt>
            <dd>
              <a className="link" href="https://www.linkedin.com/in/admesakh" rel="me noopener">
                linkedin.com/in/admesakh
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-[var(--line)] pt-3">
            <dt className="text-[var(--fg-soft)]">Based in</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </section>
      <section className="lg:col-span-5 lg:col-start-8 tone-stone p-6 sm:p-8 self-start" data-sync="cv" aria-label="Request my CV">
        <CvForm />
      </section>
    </div>
  );
}
