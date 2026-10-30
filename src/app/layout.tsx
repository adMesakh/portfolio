import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { grotesk, serif, serifItalic } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { CvBand } from "@/components/CvRequest";
import { modeBootScript } from "@/components/ModeToggle";
import { siteDescription, siteName, siteUrl, footerNav } from "@/lib/site";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | Mesakh" },
  description: siteDescription,
  applicationName: "Mesakh",
  authors: [{ name: "Mesakh", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mesakh",
    title: siteName,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#eef0ec",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mesakh",
  jobTitle: "UX Lead",
  worksFor: { "@type": "Organization", name: "Telkom Indonesia" },
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/admesakh"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable} ${serif.variable} ${serifItalic.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeBootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <CvBand />
        <footer className="border-t border-[var(--line)] mt-0">
          <div className="wrap py-10 grid gap-6 sm:grid-cols-[1fr_auto] text-[0.9375rem]">
            <div className="grid gap-1">
              <p className="font-[600]">Mesakh</p>
              <p className="text-[var(--fg-soft)]">{profile.title}, {profile.location}</p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link className="link" href={n.href}>
                    {n.label}
                  </Link>
                </li>
              ))}
              {profile.links.map((l) => (
                <li key={l.href}>
                  <a className="link" href={l.href} rel={l.href.startsWith("http") ? "me noopener" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
