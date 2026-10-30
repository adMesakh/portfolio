/**
 * Content model for the portfolio.
 *
 * Every page renders from these types in two reading modes:
 * - Storytelling reads `sections` (long form).
 * - Editorial reads `brief` fields (summary, challenge, contribution, outcomes).
 * Nothing is duplicated between modes; each mode is an edit of the same record.
 */

export type Link = { label: string; href: string };

export type Outcome = {
  /** Short figure, set large. Leave out when there is no verified number. */
  value?: string;
  text: string;
};

export type Block =
  /** An opening scene in large serif, used once at the top of a story. */
  | { kind: "scene"; text: string }
  | { kind: "prose"; heading?: string; body: string[] }
  | { kind: "points"; heading?: string; intro?: string; items: { title: string; body: string }[] }
  | {
      kind: "table";
      heading?: string;
      intro?: string;
      columns: string[];
      rows: string[][];
      caption?: string;
    }
  | {
      kind: "sequence";
      heading?: string;
      steps: string[];
      /** Inclusive index range to emphasise. */
      highlight?: [number, number];
      highlightLabel?: string;
      caption: string;
    }
  | {
      kind: "converge";
      heading?: string;
      inputs: string[];
      hub: string;
      outputs: string[];
      caption: string;
    }
  | {
      kind: "compare";
      heading?: string;
      before: { label: string; items: string[] };
      after: { label: string; items: string[] };
      caption: string;
    }
  | { kind: "quote"; text: string; note?: string }
  | { kind: "figure"; image: Figure; wide?: boolean }
  | { kind: "gallery"; images: Figure[]; caption?: string };

/**
 * An image in a case study.
 * - "artifact": a real project artifact (FigJam board, screenshot of the live site).
 * - "recreation": an interface redrawn from the original Figma design with sample data;
 *   always labelled as such on the page.
 * - "illustration": a drawing made for this site to explain an idea; contains no real UI or brands.
 */
export type Figure = {
  src: string;
  alt: string;
  caption?: string;
  kind: "artifact" | "recreation" | "illustration";
};

export type Section = {
  /** Short label used in the case-study contents rail. */
  label: string;
  /** Narrative headline for the section. */
  headline: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Employer or client context. */
  org: string;
  client?: string;
  years: string;
  category: string;
  platforms: string;
  role: string;
  team?: string;
  /** Storytelling headline (the "standfirst" sits under it). */
  headline: string;
  standfirst: string;
  /** Editorial mode: one sentence. */
  summary: string;
  challenge: string;
  contribution: string[];
  outcomes: Outcome[];
  /** Honest note on attribution, evidence or what is still unmeasured. */
  note?: string;
  /** "feature" gets a full case study; "short" is a compact record. */
  depth: "feature" | "short";
  /** Visual identity per study, from the shared palette. */
  tone: "paper" | "ink" | "stone" | "sand";
  sections: Section[];
};

export type Role = {
  title: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
};

export type Employer = {
  name: string;
  context: string;
  location: string;
  start: string;
  end: string;
  roles: Role[];
  work: string[]; // case-study slugs
};

export type Principle = { title: string; body: string };
