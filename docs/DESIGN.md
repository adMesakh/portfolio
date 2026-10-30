# Design notes

## The idea

Mesakh's job is turning business operations into products — and making sure what ships matches what was designed. The site borrows one device from that world: **the review annotation**. Claims on the page carry margin notes (in a single "redline" blue) that point to the evidence, the way a design-QA pass annotates a screen. Everything else stays quiet so that one device is memorable.

## Directions considered

**A. Broadsheet** — warm cream paper, high-contrast serif display, hairline rules, dense columns, monospace metadata, a vermilion accent.
Rejected: it is the default "editorial" look generated sites already converge on (cream + serif + clay/vermilion + mono labels + hairlines). It would look like many other portfolios and says nothing specific about Mesakh.

**B. Specification sheet** — Swiss grotesk only, monochrome, dense tables, black blocks.
Credible and calm, but cold for long-form storytelling, and a portfolio built entirely of tables reads like a CV.

**Chosen: C. Annotated working document** — cool office-paper ground, navy ink instead of black, a newspaper-born grotesk for display and interface, a text serif for long reading, and cobalt annotations that connect statements to evidence. B's tabular discipline is kept for Editorial mode, where it belongs.

## Tokens

| Token | Hex | Use |
| --- | --- | --- |
| paper | `#EEF0EC` | Page ground — cool, slightly green office paper |
| stone | `#E2E6E1` | Secondary ground for alternating sections |
| mist | `#E1E7EE` | Case-study ground variant |
| ink | `#1B2340` | Text and the one dark band (navy ink, not black) |
| ink-soft | `#4A5268` | Secondary text, metadata |
| rule | `#C5CBD0` | Dividers, only where they separate real groups |
| note | `#2D4BE0` | Annotations, focus, links — the only accent |

Type:

- **Schibsted Grotesk** (variable) — display, headings, interface, Editorial mode. Designed for a news organisation, so it carries headlines without shouting.
- **Newsreader** (variable, optical sizes) — long-form body in Storytelling mode, standfirsts, quotes.

Scale: 13 / 15 / 18 / 22 / 28 / 40 / display (clamp 40–84px). Body 18–19px serif at ~1.6 line-height, max ~68 characters.

## Rules we hold to

- Left-aligned everywhere; asymmetry comes from a margin column for notes, not from decoration.
- Numbers appear only for real sequences (journey steps, workflow) and for footnotes.
- Sentence-case labels. No all-caps eyebrows, no monospace labels, no arrows appended to links, no middle-dot metadata strings.
- No product screenshots unless they are real. Diagrams are drawn from documented flows and are labelled as diagrams.
- Motion: one moment (the hero annotations draw in), plus feedback for actions (mode switch, form states). Everything respects `prefers-reduced-motion`.

## Two reading modes

Both modes render from the same content records (`src/content`).

- **Storytelling** — case studies as features: narrative headlines, standfirst, sections, diagrams, reflection.
- **Editorial** — a two-minute brief: a profile sheet, an index of work with challenge, contribution and outcome, achievements, leadership scope, skills, education.

The mode is a document-level attribute (`html[data-mode]`), set before first paint from session storage or `?mode=`, so switching never reloads or changes the URL, and the reader is returned to the same section after the switch.
