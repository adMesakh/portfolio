# Mesakh — portfolio

Personal portfolio of Mesakh, UX Lead & Product Designer. Next.js (App Router), TypeScript, Tailwind CSS v4.

Two reading modes share one content source:

- **Storytelling** (default) — full case studies with narrative, diagrams and reflection.
- **Editorial** — a two-minute brief for recruiters: profile sheet, work index, results, skills.

The mode is stored in session storage and can be linked with `?mode=editorial`. Switching keeps you on the same page and section.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node 20+.

## Project structure

```
src/
  content/          All copy and data — edit here, not in components
    profile.ts      Bio, hero, philosophy, achievements, skills, experience, other work
    case-studies.ts Case studies (brief fields for Editorial, sections for Storytelling)
    types.ts        Content model
  app/              Routes: /, /work, /work/[slug], /experience, /about, /contact
    api/cv-request  CV request endpoint
  components/       Header, mode toggle, CV request, content blocks (tables, diagrams)
  lib/              Site config, email validation, fonts
docs/DESIGN.md      Art direction, tokens and rules
private/            Git-ignored. Local CV file for testing only
```

### Adding or editing a case study

Add an object to `src/content/case-studies.ts`. Fill the brief fields (`summary`, `challenge`, `contribution`, `outcomes`) — they power Editorial mode and the work index — and `sections` for the long read. Section blocks can be `prose`, `points`, `table`, `sequence` (step diagram), `converge` (many-to-one diagram), `compare` (before/after) and `quote`. Set `depth: "short"` for compact records. Only include figures you can back up; use `note` to say what isn't measured.

Add the slug to `featuredSlugs` to show it on the homepage, and to the employer's `work` list in `profile.ts`.

## CV request

`POST /api/cv-request` validates the email (client and server), ignores honeypot hits and instant submissions, rate-limits per IP (5/hour) and dedupes per email (10 minutes), then sends the CV as an attachment through [Resend](https://resend.com) and notifies you.

Nothing is stored. Rate limiting is in memory per server instance, which is enough to stop casual abuse; for stronger guarantees add Vercel KV / Upstash.

If configuration is missing, the endpoint returns `503 not_configured` and the form tells the visitor to email you directly. It never pretends to have sent anything.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL, sitemap, Open Graph. e.g. `https://portfolio-seven-rosy-n0lxz8d004.vercel.app` |
| `RESEND_API_KEY` | For CV email | Resend API key |
| `CV_REQUEST_FROM_EMAIL` | For CV email | Sender on a domain verified in Resend, e.g. `Mesakh <cv@yourdomain.com>` |
| `CV_NOTIFICATION_EMAIL` | Optional | Your inbox for request notifications; also used as reply-to |
| `CV_FILE_URL` | For CV email | Private URL the server fetches the PDF from (e.g. a Vercel Blob URL). Never exposed to visitors |
| `CV_FILE_NAME` | Optional | Attachment name, default `Mesakh-CV.pdf` |

Resend can only send to arbitrary recipients from a **verified domain**. With the test sender (`onboarding@resend.dev`) it only delivers to your own Resend account email.

**Where to keep the CV.** Don't put it in `public/`. Either upload it to private storage and set `CV_FILE_URL`, or — only if this repository is private — place it at `private/cv.pdf` and remove `private/*` from `.gitignore`. The file is bundled into the API function only.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository. Framework preset: Next.js (detected). No build settings to change.
3. Add the environment variables above under **Settings → Environment Variables**, then redeploy.
4. Optional: add a custom domain and update `NEXT_PUBLIC_SITE_URL`.

## Quality checks done

- Builds with no type errors; all 13 pages render without console errors.
- No horizontal overflow at 1440, 1280, 768, 390 and 360px in both modes.
- Lighthouse (local production build, simulated mobile): Accessibility, Best Practices and SEO 100 on all tested pages; Performance 86–95.
- Keyboard: skip link, visible focus, dialog closes with Esc, toggle uses `aria-pressed`, mode changes are announced.
- `prefers-reduced-motion` turns off the hero annotation and mode-switch animations.

## Fonts

Schibsted Grotesk and Newsreader, self-hosted (SIL Open Font License 1.1, via Fontsource).
