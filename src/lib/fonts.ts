import localFont from "next/font/local";

// Self-hosted variable fonts (from Fontsource), latin subset.
// Only the upright cuts are preloaded; italics load on demand.
export const grotesk = localFont({
  src: "../fonts/schibsted-grotesk-latin-wght-normal.woff2",
  weight: "400 900",
  variable: "--font-grotesk",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const serif = localFont({
  src: "../fonts/newsreader-latin-opsz-normal.woff2",
  weight: "200 800",
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const serifItalic = localFont({
  src: "../fonts/newsreader-latin-opsz-italic.woff2",
  weight: "200 800",
  style: "italic",
  variable: "--font-newsreader-italic",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});
