import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/experience", "/about", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const work = caseStudies.map((c) => ({
    url: `${siteUrl}/work/${c.slug}`,
    changeFrequency: "yearly" as const,
    priority: c.depth === "feature" ? 0.8 : 0.5,
  }));
  return [...pages, ...work];
}
