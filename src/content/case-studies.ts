import type { CaseStudy } from "./types";

/**
 * Case studies, written as stories.
 *
 * Sources: Mesakh's 2026 CV, the 2026 portfolio deck, the original Figma files
 * (DMB Andalas, DMB Web, Whole Vestia, Traceability, OCA Inbox, Canvas Editor,
 * Channel WhatsApp), the "OCA DTP Revamp" case-study doc and usability-test
 * report, and notes from past conversations.
 *
 * Rule: every fact, flow and number below comes from those sources. Where a
 * line explains *why* a design choice was made, it reads the reason off the
 * design itself, and never adds a metric. Order here is the order on the site.
 */
export const caseStudies: CaseStudy[] = [
  /* ================================================================== */
  {
    slug: "oca-dtp-revamp",
    title: "OCA website revamp",
    org: "Telkom Indonesia (OCA)",
    years: "2025 – 2026",
    category: "B2B website, Information architecture, Research",
    platforms: "Desktop and mobile web",
    role: "UX Lead — design direction, research plan, team lead",
    team: "Product manager, 3 UI designers, a UX writer, 2 front-end engineers, a marketing PIC",
    headline: "Stop leading with product names",
    standfirst:
      "OCA's website was the first thing a B2B buyer saw, and it assumed they already knew what OCA Interaction or OCA Blast meant. We rebuilt it around the problems buyers come with — and tested whether they could find their way.",
    summary:
      "Led the redesign of OCA's marketing website so it turns B2B visitors into trials and sales leads, rebuilding five key pages around business solutions instead of product names.",
    challenge:
      "Conversion on Product, Pricing and Contact sat below 5%, bounce was high, mobile was weak, and digital revenue was small next to offline sales.",
    contribution: [
      "Framed one shared problem from UX audits, a heuristic evaluation, designer observations and analytics.",
      "Ran a How Might We workshop with Marketing, Product and Engineering and prioritised by impact and feasibility.",
      "Led journey mapping and the move from a product-centric to a solution-centric IA.",
      "Directed 3 UI designers and a UX writer through desktop and mobile design; planned and ran moderated tests in Maze.",
    ],
    outcomes: [
      { value: "100%", text: "success finding product, pricing and free trial, on desktop and mobile." },
      { value: "5 of 6", text: "sessions understood OCA as omnichannel within five seconds." },
      { value: "7 of 8", text: "task-and-device pairs at 100% completion, against a target of 80%." },
    ],
    note: "Live business results (conversion, bounce, registrations) are being tracked against targets and aren't published here yet.",
    depth: "feature",
    tone: "paper",
    sections: [
      {
        label: "Problem",
        headline: "A website that described products to people who didn't know them yet",
        blocks: [
          {
            kind: "scene",
            text: "A customer-service manager at a mid-size company lands on our homepage. The first thing she reads is a product name — OCA Interaction — that means nothing to her yet. She scrolls, looks for a price, doesn't find one quickly, and leaves. On our key pages, fewer than one visitor in twenty ever took the next step.",
          },
          {
            kind: "prose",
            body: [
              "The website was OCA's first touchpoint with new B2B buyers, but it wasn't converting them. Product, Pricing and Contact Us converted below 5%, bounce was high, and digital revenue lagged far behind what sales closed offline.",
            ],
          },
          {
            kind: "points",
            intro: "Three things kept visitors from acting:",
            items: [
              { title: "Unclear value", body: "Pages led with product names — OCA Interaction, OCA Blast, OCA AI — that meant nothing to a first-time visitor." },
              { title: "A broken journey", body: "The path from Home to Pricing or Registration was inconsistent, and the call to action was easy to misread." },
              { title: "Weak mobile", body: "Layout, navigation and performance didn't hold up on phones, where many visitors arrive first." },
            ],
          },
        ],
      },
      {
        label: "Role",
        headline: "Owning the direction, not every screen",
        blocks: [
          {
            kind: "prose",
            body: [
              "As UX Lead I owned the design direction and the research plan, and led the team from discovery to handoff. Responsibilities were set in a RACI: design was responsible for research, IA, flows, high-fidelity design, UX copy, an accessibility review against WCAG 2.2 AA, testing and handoff; the product manager was accountable; engineering owned development and launch.",
              "The craft itself was shared. Three UI designers handled desktop and mobile high-fidelity design, the UX writer owned copy and the test scenarios, and one designer owned the test report. My job was to keep the problem, the structure and the evidence straight.",
            ],
          },
        ],
      },
      {
        label: "Discover",
        headline: "Three independent sources, one diagnosis",
        blocks: [
          {
            kind: "table",
            intro:
              "We started from what we already knew, treated it as a hypothesis, and checked it against data before designing anything.",
            columns: ["Source", "What it showed"],
            rows: [
              ["UX audits and a 2023 heuristic evaluation", "Visual and component inconsistency between pages. Inefficient navigation, worst on mobile. CTAs that confused rather than guided."],
              ["Designers' observations", "The area above the fold didn't say what OCA does or why it matters. The route from Home to Pricing or Registration was inconsistent."],
              ["Analytics (2023–2024)", "Product, Pricing and Contact Us below 5% conversion with high bounce. Page speed and mobile performance below par."],
            ],
          },
          {
            kind: "prose",
            body: [
              "We also benchmarked how regional CPaaS competitors tell proof stories — blogs versus customer stories — because \"does this work for a company like mine?\" was a question our site never answered.",
            ],
          },
        ],
      },
      {
        label: "Synthesis",
        headline: "Three teams wanted three different websites",
        blocks: [
          {
            kind: "prose",
            body: [
              "Marketing needed the value proposition and a conversion funnel. Product needed a smoother path from exploring to registering. Engineering needed ideas they could build without slowing the site down. A single How Might We workshop turned those into one problem; every idea went onto an impact–feasibility matrix and only the high-impact, high-feasibility ones survived. Later, a dot-voting session with the product team picked each product's hero features.",
              "One tension shaped every later decision: SMEs want to register and try on their own, enterprises want to talk to sales. Every page needed two exits.",
            ],
          },
          {
            kind: "quote",
            text: "Getting Marketing, Product and Engineering into one session mattered more than any single screen. It gave the team one problem to solve instead of three.",
          },
        ],
      },
      {
        label: "Define",
        headline: "Map the journey, then let the navigation follow it",
        blocks: [
          {
            kind: "sequence",
            steps: ["Awareness", "Consideration", "Trial sign-up", "Paid purchase", "Sales & demo", "Activation", "Retention"],
            highlight: [0, 4],
            highlightLabel: "Where the website does the work",
            caption: "The visitor journey we mapped, with acquisition split into its three doors. For each stage we recorded actions, touchpoints, pain points, back-stage work and opportunities.",
          },
          {
            kind: "compare",
            before: { label: "2023 navigation — what OCA owns", items: ["Product", "Solution", "License", "Partnership", "Resources", "About Us"] },
            after: { label: "Revamp — what the buyer needs", items: ["Produk", "Solusi", "Pusat Informasi", "Harga", "Hubungi Kami", "Coba Gratis"] },
            caption: "Fewer, buyer-facing labels. Pricing is one click away, and both exits — talk to sales, or start a free trial — are always visible.",
          },
          {
            kind: "prose",
            body: [
              "The user flow then gave each door its own path. Trial and paid users both land on the dashboard, and a failed payment drops the buyer into a trial instead of a dead end. Sales leads are routed and tracked against an SLA, so a slow follow-up raises an alert.",
            ],
          },
        ],
      },
      {
        label: "Decisions",
        headline: "Every decision answers one of three problems",
        blocks: [
          {
            kind: "table",
            columns: ["Decision", "What changed", "Problem"],
            rows: [
              ["Lead with what it does", "Products presented by capability, in words buyers already use — \"Omnichannel CRM\" rather than internal names.", "Unclear value"],
              ["Five value pillars", "OCA's strongest features regrouped into five enterprise promises, each with the features that prove it.", "Unclear value"],
              ["One page template", "Every product page follows the same order, so visitors learn the pattern once.", "Hard journey"],
              ["Plan comparison", "Feature comparison between plans on desktop and mobile.", "Hard journey"],
              ["FAQ on every page", "Common buying questions answered before a visitor has to contact sales.", "Hard journey"],
              ["Customer stories", "Real case studies and measurable outcomes in place of a blog list and one testimonial.", "Low trust"],
            ],
          },
        ],
      },
      {
        label: "Validation",
        headline: "People found what they came for. Then they hesitated.",
        blocks: [
          {
            kind: "prose",
            body: [
              "We recruited marketing managers, customer-service managers and business owners who knew SaaS tools but had never used OCA: five people across six sessions, four on desktop and two on mobile. Each played a role — a CS manager looking for an inbox, or a team lead looking for a broadcast tool — and worked through five tasks.",
            ],
          },
          {
            kind: "table",
            columns: ["Task", "Desktop", "Mobile"],
            rows: [
              ["Find the product for replying to all channels in one app", "100%", "100%"],
              ["Contact the OCA team with a question", "66.7%", "100%"],
              ["Find the price of the CRM tool", "100%", "100%"],
              ["Find a way to try OCA for free", "100%", "100%"],
            ],
            caption: "Task success by device. Every mobile task was completed, but with far more wrong taps on the way.",
          },
          {
            kind: "points",
            heading: "What broke",
            items: [
              { title: "Contact felt risky", body: "The button was easy to see, but people weren't sure if it led to sales or support. One would rather ask a chatbot than leave details, and dropped the task." },
              { title: "Pricing on mobile", body: "Product tabs above the plan cards made people misjudge how many products exist." },
              { title: "Trial friction", body: "A required company-name field felt like a privacy cost, and nobody knew what happens after 14 days." },
            ],
          },
        ],
      },
      {
        label: "Next",
        headline: "Next: lower the risk a visitor feels before committing",
        blocks: [
          {
            kind: "table",
            columns: ["Finding", "Next iteration"],
            rows: [
              ["Contact reads as \"talk to sales\"", "Say who answers and what happens next; offer a chatbot path for quick questions."],
              ["Mobile pricing tabs confuse", "Make the product switch explicit and show that price differs per product."],
              ["Trial sign-up feels costly", "Make company name optional; say what happens after 14 days."],
              ["Extra scrolling on mobile", "Bring key answers higher on the page."],
            ],
          },
          {
            kind: "prose",
            heading: "What I took from it",
            body: [
              "Renaming products by what they do was the biggest lever for clarity, and it came from the IA work, not from visual polish. Testing desktop and mobile separately showed that the same page can pass on one and struggle on the other.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "design-hub",
    title: "Design Hub",
    org: "Telkom Indonesia (OCA)",
    years: "2022 – present",
    category: "Design leadership, DesignOps",
    platforms: "Organisation, process, design system",
    role: "UX Lead",
    team: "Up to 10 across UI, UX research and UX writing; currently four UI designers",
    headline: "One design team for five squads",
    standfirst:
      "When designers belong to squads, each squad gets attention and the product falls through the gaps. I moved OCA's design team to a shared hub and built the workflow that makes it hold together.",
    summary:
      "Reorganised OCA design from per-squad resourcing into a centralised Design Hub, with one standard workflow, a design system and design QA on every release.",
    challenge:
      "Five squads — Interaction, AI, Blast & API, Growth and Core — each had their own design rhythm. The same problems were solved differently, handoff varied by person, and no one owned consistency across products.",
    contribution: [
      "Moved design from per-squad assignment to a Design Hub with one intake and shared priorities.",
      "Standardised intake, review, handoff, documentation and design QA against staging.",
      "Own the design system, Figma guidelines and a library of UX patterns documented as journeys.",
      "Run regular UX audits, a lean research practice and the team's Jira cadence.",
    ],
    outcomes: [
      { value: "5", text: "squads working through one design workflow." },
      { value: "1", text: "design system and pattern library shared across OCA products." },
    ],
    note: "This is ongoing organisational work. Lead-time and QA metrics aren't measured consistently yet, so none are claimed here.",
    depth: "feature",
    tone: "ink",
    sections: [
      {
        label: "Context",
        headline: "Same customer, five different products",
        blocks: [
          {
            kind: "scene",
            text: "The same supervisor might send a WhatsApp broadcast in Blast in the morning, answer the replies in Interaction at noon, and tweak a chatbot in OCA AI before going home. To her it's one product called OCA. Inside the company, it was five squads, each with its own designer and its own way of doing things.",
          },
          {
            kind: "prose",
            body: [
              "OCA is a family of products — an omnichannel inbox, bulk messaging, a chatbot builder, APIs — sold to the same mid-to-large companies, BUMN and government teams, and often used by the same people. When each squad had its own designer, each product moved quickly on its own terms. But the seams showed: different patterns for the same task, different levels of documentation, and design QA that depended on who had time.",
            ],
          },
        ],
      },
      {
        label: "Model",
        headline: "From assignment to a hub",
        blocks: [
          {
            kind: "compare",
            before: { label: "Before — per-squad", items: ["A designer per squad", "Priorities set squad by squad", "Patterns re-solved per product", "Handoff and QA by individual habit"] },
            after: { label: "After — Design Hub", items: ["One team serving five squads", "One intake and shared priorities", "Patterns solved once, documented as journeys", "Same handoff and QA steps for everyone"] },
            caption: "The organisational change. Designers still work closely with squads; the hub decides how the work flows.",
          },
          {
            kind: "sequence",
            steps: ["Intake", "Review", "Handoff", "Documentation", "Design QA vs staging"],
            caption: "One workflow for every request, tracked in Jira so Product and Engineering can see where design work stands.",
          },
          {
            kind: "prose",
            body: [
              "The hub covers three disciplines — UI design, UX research and UX writing — so a request doesn't just get screens; it gets the words and the evidence too. Day to day I work with Product, Engineering, Marketing, Operations, Legal and Compliance, which means a lot of the job is translation: turning a compliance rule or a sales promise into something a designer can act on.",
            ],
          },
        ],
      },
      {
        label: "System",
        headline: "Solving a problem once",
        blocks: [
          {
            kind: "points",
            items: [
              { title: "Components vs patterns", body: "The design system holds components — the building blocks. The pattern library holds solutions to recurring problems, documented end to end: click Export → drawer → request report → notification → download." },
              { title: "Dashboard patterns", body: "Because OCA is mostly dense B2B screens, the library focuses on what every dashboard needs: user management, search, filters, bulk actions, permissions, empty and error states, export and notifications." },
              { title: "Guidelines in Figma", body: "File structure, naming and documentation rules so any designer can pick up another's file." },
              { title: "Audits with evidence", body: "UX audits use one format — evidence, finding, severity, recommendation, ideally with a screenshot — so findings can be prioritised alongside engineering work." },
            ],
          },
        ],
      },
      {
        label: "Research",
        headline: "Lean research, done honestly",
        blocks: [
          {
            kind: "prose",
            body: [
              "We don't have a research budget the size of a consumer app, so we lean on methods that fit a sprint: audits, interviews, moderated and unmoderated tests in Maze, preference and first-impression tests, analytics and competitive reviews. When the WhatsApp Services Report — a screen full of metric cards — had two competing layouts, we ran a quick preference test instead of arguing about it.",
              "Event tracking follows the same rule. We start from a question and the smallest set of events that answers it — open, submit, success, error — rather than instrumenting everything and hoping a dashboard tells us something.",
            ],
          },
        ],
      },
      {
        label: "In practice",
        headline: "What the hub looks like on a real project",
        blocks: [
          {
            kind: "prose",
            body: [
              "The website revamp is a good snapshot. Three UI designers took desktop and mobile; the UX writer wrote the copy and the usability-test scenarios; one designer owned the test report; I owned the problem framing, the IA and the research plan. Nobody was \"the Blast designer\" or \"the website designer\" — the work was split by what it needed, and everyone followed the same review, handoff and QA steps.",
            ],
          },
        ],
      },
      {
        label: "Quality",
        headline: "Design QA is where quality is decided",
        blocks: [
          {
            kind: "prose",
            body: [
              "The step most teams skip is comparing what was built with what was designed. We compare staging against the original design on every release and log the gaps as tickets. It's unglamorous, and it's the reason the system on paper matches the product people use.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "oca-interaction",
    title: "OCA Interaction",
    org: "Telkom Indonesia (OCA)",
    years: "2020 – present",
    category: "B2B SaaS, CPaaS, Omnichannel",
    platforms: "Web app",
    role: "UX Designer, then UX Lead",
    headline: "Six channels, one queue",
    standfirst:
      "Customer-service teams were answering WhatsApp, Instagram, email and live chat in separate tools. OCA Interaction puts them in one workspace with tickets, contacts and CSAT — and I've been designing it since it was a concept.",
    summary:
      "Helped build OCA's omnichannel customer-service platform from concept — conversations, ticketing, contacts, chatbot, surveys and CSAT across six channels.",
    challenge:
      "Bring six messaging channels and the work around them — assignment, SLAs, tickets, contact history, surveys, reports — into one tool that agents, supervisors and managers can all use.",
    contribution: [
      "Designed core flows for conversations, ticketing and contacts from the concept stage.",
      "Designed for agents, supervisors, CS managers and marketing managers at mid-to-large companies, BUMN and government.",
      "Ran preference tests on data-dense reports to choose layouts with evidence.",
      "Designed the AI Assistant features: reply suggestion, improve text, translation and chat summary.",
    ],
    outcomes: [
      { value: "2,000+", text: "active users." },
      { value: "Rp10B+", text: "revenue for the product." },
      { value: "9–10%", text: "of all users tried AI Assistant in its first week." },
    ],
    note: "Revenue and user numbers are product results from a whole team — product, engineering, sales and design.",
    depth: "feature",
    tone: "stone",
    sections: [
      {
        label: "Context",
        headline: "The inbox is the job",
        blocks: [
          {
            kind: "scene",
            text: "A supervisor at a large company starts her shift with WhatsApp open on one screen, Instagram DMs on another and an email inbox in a third tab. Nobody can tell her, at a glance, which conversation has been waiting too long.",
          },
          {
            kind: "converge",
            inputs: ["WhatsApp", "Instagram", "Messenger", "Telegram", "Email", "Live chat"],
            hub: "One inbox",
            outputs: ["Conversations", "Tickets", "Contacts", "Chatbot", "Surveys & CSAT"],
            caption: "What OCA Interaction brings together. The diagram is a summary of scope, not a screenshot.",
          },
          {
            kind: "prose",
            body: [
              "For a customer-service team, the inbox isn't a feature — it's where the whole working day happens. We designed for three people with very different days: the agent who needs the next conversation and its history, the supervisor watching queues and SLAs, and the CS or marketing manager who cares about volume, CSAT and what customers keep asking about. Most of them are between 25 and 50 and work for mid-to-large companies, BUMN and government agencies.",
            ],
          },
        ],
      },
      {
        label: "Building it",
        headline: "From a concept to the screen people work in all day",
        blocks: [
          {
            kind: "prose",
            body: [
              "I joined while Interaction was still a concept and designed the core flows — conversations, ticketing and contacts — that the rest of the product grew around. The inbox settled into a clear pattern: a conversation queue on the left, split by assignee, each with an SLA timer so a waiting customer is visible before they become an angry one; the chat in the middle; ticket and contact context alongside.",
              "Channels became first-class objects. A company can connect several WhatsApp numbers, and the channel sidebar lists each one separately, so every number's conversations stay distinct.",
            ],
          },
          {
            kind: "sequence",
            steps: ["Message arrives on any channel", "Lands in one queue", "Assigned to an agent", "SLA timer runs", "Resolved or turned into a ticket", "CSAT survey"],
            caption: "A simplified life of a conversation in Interaction, drawn from the product's core features.",
          },
        ],
      },
      {
        label: "Growing it",
        headline: "Keeping a growing product readable",
        blocks: [
          {
            kind: "prose",
            body: [
              "As the product matured, the work shifted from inventing flows to keeping a growing product coherent. Reports are where density becomes a problem: managers want a lot on one screen, and too much on one screen tells nobody anything. For the WhatsApp Services Report — a dense grid of metric cards — we ran a quick preference test between two layouts and let users settle it.",
              "Later work stayed in the same spirit: a WhatsApp Call Report that had to show country quotas across 180+ countries without turning into a phone book, and an exploration of Google Maps Reviews as a channel, so a business could answer reviews from the same inbox as its chats.",
            ],
          },
        ],
      },
      {
        label: "GenAI",
        headline: "Putting AI where the agent already is",
        blocks: [
          {
            kind: "prose",
            body: [
              "When we added generative AI, the decision that mattered most was placement. Agents don't want another tool; they want the next reply to be easier. So all four AI Assistant features live inside the existing conversation view:",
            ],
          },
          {
            kind: "points",
            items: [
              { title: "Reply suggestion", body: "A drafted answer the agent can use, edit or ignore." },
              { title: "Improve text", body: "Tightens what the agent already wrote, so tone stays consistent across a team." },
              { title: "AI translation", body: "For conversations that arrive in another language." },
              { title: "Chat summary", body: "A short recap of a long thread, for handovers and for supervisors stepping in." },
            ],
          },
          {
            kind: "prose",
            body: ["About 9–10% of all users used AI Assistant in its first week."],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "vestia",
    title: "Vestia",
    org: "Nuwira Integrasi Mandiri",
    client: "Vestia",
    years: "2018 – 2020",
    category: "Fintech, P2P lending",
    platforms: "iOS, Android, web, admin",
    role: "UI/UX Designer (IT consultant)",
    headline: "Getting through KYC without giving up",
    standfirst:
      "Regulated lending means a long, unavoidable verification flow. The design job was to make each step feel small enough that people actually finish it — and to make lending to a small business feel like lending to someone you understand.",
    summary:
      "Designed an OJK-regulated P2P lending platform end to end — onboarding and KYC, the lender marketplace, portfolio and wallet — across iOS, Android, web and admin.",
    challenge:
      "Meet OJK regulation and ISO 27001 requirements in onboarding — identity, documents, bank account, video verification — without losing people halfway.",
    contribution: [
      "Designed onboarding and KYC end to end: registration, OTP, PIN, step-by-step data, guided ID, selfie and NPWP capture, bank account verification and video call verification.",
      "Designed the lender side: a marketplace of SME borrower stories, a portfolio dashboard and a wallet.",
      "Covered iOS, Android, web and admin, plus the website, email templates, store assets and PrivyID e-signing.",
    ],
    outcomes: [
      { value: "80%+", text: "KYC completion on a regulation-heavy flow." },
      { value: "0 → 1,000+", text: "lenders, including 20+ company and super lenders." },
    ],
    depth: "feature",
    tone: "sand",
    sections: [
      {
        label: "Context",
        headline: "Trust is a flow, not a badge",
        blocks: [
          {
            kind: "scene",
            text: "Somewhere between taking a photo of your ID card and getting on a video call with a stranger to prove you are who you say you are, most people start wondering whether this is worth it. In regulated lending, every one of those steps is mandatory. None of them can be skipped. All of them can be made easier.",
          },
          {
            kind: "prose",
            body: [
              "Vestia connects SME borrowers with lenders under OJK regulation, built to ISO 27001 requirements. Every user has to be verified before money moves. The product lives or dies on whether people make it through — so that's where most of the design went.",
            ],
          },
        ],
      },
      {
        label: "KYC",
        headline: "Break it into steps people can finish",
        blocks: [
          {
            kind: "sequence",
            steps: ["Onboarding", "Register, OTP, PIN", "Personal data, step by step", "Guided ID, selfie & NPWP capture", "Bank account check", "Video call verification", "Agreement & done"],
            caption: "The full onboarding and KYC sequence as designed.",
          },
          {
            kind: "points",
            intro: "Four decisions did most of the work behind an 80%+ completion rate:",
            items: [
              { title: "One document per step", body: "ID card, selfie holding the ID, NPWP and other documents each get their own screen, so the user only ever faces one task." },
              { title: "A camera that guides", body: "A frame on the camera shows exactly where the document should sit, so the photo passes the first time." },
              { title: "Preview before sending", body: "Users see their photo before it's submitted and can retake it — catching blurry shots before a reviewer does." },
              { title: "Errors that say what went wrong", body: "Bank verification can fail for several reasons, and each one has its own message, so people know what to fix instead of starting over." },
            ],
          },
        ],
      },
      {
        label: "Lending",
        headline: "Lend to a business, not a number",
        blocks: [
          {
            kind: "prose",
            body: [
              "On the lender side, the marketplace presents each loan as a story card: the SME, a photo of the borrower and how much of the loan is already funded. A lender chooses a business they understand, not a row in a table. Behind it sit a portfolio dashboard and Rekening Vestia, the wallet, with a full transaction history.",
              "Vestia grew from zero to more than 1,000 lenders, including 20+ company and super lenders.",
            ],
          },
        ],
      },
      {
        label: "Ecosystem",
        headline: "Everything around the app, too",
        blocks: [
          {
            kind: "prose",
            body: [
              "A fintech launch is more than its app screens. I also designed the marketing website, the email templates, the Play Store and App Store screenshots and the logo assets, and the PrivyID digital-signature step for signing loan agreements. Across iOS, Android, web and an admin back office, the job was to make it feel like one trustworthy company everywhere a user met it.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "dmb-collection",
    title: "DMB collection app",
    org: "Nuwira Integrasi Mandiri",
    client: "DMB (Andalas)",
    years: "2020",
    category: "Banking, Offline-first",
    platforms: "Mobile app for field officers, web back office",
    role: "UI/UX Designer (IT consultant)",
    headline: "Taking a paper process into the field — offline",
    standfirst:
      "Group-lending collection ran on paper. Account officers needed something that works without a signal; the back office needed numbers it could trust at the end of the day.",
    summary:
      "Replaced paper-based field collection with a mobile app for account officers and unit managers that works offline and syncs automatically, plus a web back office for credit admins.",
    challenge:
      "Collection for Grameen-model group lending — centers, groups, regular and arrears instalments, joint liability — had to work in the field without connectivity and reconcile cleanly afterwards.",
    contribution: [
      "Designed the mobile app for Account Officers and Unit Managers: download the day's data, collect offline, upload the collection sheet when back online.",
      "Mapped seven debtor payment states and deposit-slip capture with photo proof.",
      "Designed the web back office: deposit approval, data import, reports and audit trail.",
    ],
    outcomes: [{ text: "Paper collection replaced by a digital flow with offline work and automatic sync." }],
    note: "No measured before/after figures are available for this project.",
    depth: "feature",
    tone: "paper",
    sections: [
      {
        label: "Context",
        headline: "The field doesn't have Wi-Fi",
        blocks: [
          {
            kind: "scene",
            text: "An account officer sits with a group of borrowers at their center. Some pay their instalment in full, some pay through someone else, one can't pay at all this week. Everything goes into a paper sheet, and the paper goes back to the branch — where someone has to make the numbers add up.",
          },
          {
            kind: "prose",
            body: [
              "DMB lends to groups, Grameen-style. The structure runs Branch → Unit → Center → Group → Debtor, members share liability for each other, and every visit can involve two kinds of collection: regular instalments and arrears. All of it was recorded on paper.",
            ],
          },
        ],
      },
      {
        label: "Field app",
        headline: "Design the sync, not just the screens",
        blocks: [
          {
            kind: "sequence",
            steps: ["Download the day's data", "Center → group → debtor", "Record payment & attendance", "Capture deposit slip with photo", "Upload collection sheet", "Admin confirms"],
            highlight: [1, 3],
            highlightLabel: "No connection needed",
            caption: "The collection loop across the mobile app and the web back office.",
          },
          {
            kind: "prose",
            body: [
              "The home screen is built around one button: Unduh Data — download the data. Officers pull their day before they leave, work offline in the field, and upload when they're back in range. Inside, the app follows the way officers already think: center, then group, then a card per debtor, with anyone in arrears flagged in red. Recording a visit happens in a bottom sheet — payment status, attendance and any titipan — so the officer never loses their place in the list.",
              "Deposit slips get a photo as proof, the destination account and amount, and whether the money is the officer's own collection or carried for another officer. When the admin confirms a deposit, the officer gets a notification — closing a loop that used to happen on paper.",
            ],
          },
        ],
      },
      {
        label: "States",
        headline: "Seven ways a payment can go",
        blocks: [
          {
            kind: "table",
            intro: "The hardest part wasn't layout; it was naming reality. Every debtor on a visit ends up in one of seven states:",
            columns: ["State", "Label in the app"],
            rows: [
              ["Not yet collected", "Belum setor"],
              ["Paid", "Bayar"],
              ["Not paid, with titipan", "Tidak bayar dengan titipan"],
              ["Not paid, without titipan", "Tidak bayar tanpa titipan"],
              ["Paid off", "Pelunasan"],
              ["Joint liability", "Tanggung renteng"],
              ["In arrears on another day", "Menunggak di hari lain"],
            ],
            caption: "Debtor states as defined in the app design, with the original Indonesian labels.",
          },
        ],
      },
      {
        label: "Managers",
        headline: "When the officer can't come in",
        blocks: [
          {
            kind: "prose",
            body: [
              "Unit managers see collection per unit and per officer, and can assign a replacement officer for the day. Requests to swap officers come with a structured reason — sick, leaving early, arriving late, in training — instead of a free-text message, so the record means something later.",
            ],
          },
        ],
      },
      {
        label: "Back office",
        headline: "An operating day, not a calendar day",
        blocks: [
          {
            kind: "prose",
            body: [
              "The web back office is for credit administrators and system admins. Its header always shows the Hari Operasional — the operating day — because deposits are tied to the bank's operating day rather than the calendar date.",
            ],
          },
          {
            kind: "points",
            items: [
              { title: "Operations", body: "Dashboard split into regular and arrears, deposit approval, deposit slips, reports, bank accounts and data import." },
              { title: "Master data", body: "Regions, units, centers, marketing, regular and arrears collection sheets." },
              { title: "Control", body: "Users, audit trail and area admins." },
              { title: "Imports and reports", body: "Every import keeps a history and status per file; nominative and message reports can be downloaded." },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "oca-blast",
    title: "OCA Blast",
    org: "Telkom Indonesia (OCA)",
    years: "2020 – 2025",
    category: "Bulk messaging, IA, Redesign",
    platforms: "Web app",
    role: "UX Designer, then UX Lead",
    headline: "Campaigns that stay manageable at scale",
    standfirst:
      "OCA Blast sends one-way messages in bulk — WhatsApp, email, voice. I've designed for it since my first years at OCA, and from late 2024 led a rework of its information architecture toward a v3.",
    summary:
      "Redesigned OCA's bulk-messaging product across WhatsApp, email and voice: campaign creation, scheduling, personalisation, projects, contact groups, quotas and reporting.",
    challenge:
      "As customers ran more campaigns on more channels, the product needed a structure that kept campaigns, contacts, quotas and results findable — and made sending to thousands of people feel safe.",
    contribution: [
      "Redesigned the campaign flow: creation, personalisation, scheduling and channel configuration, ending in a review step before anything is sent.",
      "Restructured the IA around projects and reporting (v2 → v3 beta, from Q4 2024).",
      "Designed across channels — WhatsApp, email and voice — plus contact groups and file management.",
    ],
    outcomes: [
      { value: "Rp7B → Rp60B+", text: "annual revenue growth for the product." },
      { value: "4.6+", text: "product rating." },
    ],
    note: "Revenue growth reflects the whole product team and sales; design is one contributor.",
    depth: "feature",
    tone: "stone",
    sections: [
      {
        label: "Context",
        headline: "Sending to ten thousand people is scary",
        blocks: [
          {
            kind: "scene",
            text: "A marketing team schedules a WhatsApp promo to every customer in its database. One wrong variable and ten thousand people receive \"Hi {first_name}\". There's no undo on a broadcast — so the interface has to make the right thing easy and the wrong thing visible before the send button.",
          },
          {
            kind: "prose",
            body: [
              "Blast is OCA's one-way messaging product: campaigns over WhatsApp, email and voice, sent to contact groups at scale. Over the years it grew to cover more channels, and the v2 structure needed rework to stay manageable.",
            ],
          },
        ],
      },
      {
        label: "Flow",
        headline: "One path from draft to report",
        blocks: [
          {
            kind: "sequence",
            steps: ["Choose channel", "Pick contact group", "Personalise", "Schedule", "Review broadcast", "Report"],
            highlight: [4, 4],
            highlightLabel: "The safety net",
            caption: "A simplified campaign flow in the v3 design, grouped under projects.",
          },
          {
            kind: "prose",
            body: [
              "The step I care about most is the one that doesn't create anything: Review Broadcast. Before a campaign goes out, the sender sees the message the way recipients will, in a WhatsApp preview, and checks the details one last time. It's where mistakes get caught, which is the whole point of a review.",
            ],
          },
        ],
      },
      {
        label: "Structure",
        headline: "Projects, quotas and the boring parts that matter",
        blocks: [
          {
            kind: "points",
            items: [
              { title: "Projects", body: "Campaigns live inside projects, so a team running many campaigns can group them by client, product or season and find them again." },
              { title: "Quotas", body: "Remaining quota is always visible, with international quota broken out separately — because sending abroad costs differently and nobody likes surprises on the bill." },
              { title: "Contact groups and files", body: "Audiences and uploaded files are managed in their own spaces rather than re-uploaded every time." },
              { title: "Reporting", body: "Every campaign has its own report, so the next campaign can learn from the last." },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "oca-ai",
    title: "OCA AI",
    org: "Telkom Indonesia (OCA)",
    years: "2020 – 2022",
    category: "AI, No-code chatbot builder",
    platforms: "Web app",
    role: "UX Designer — initiated the design direction",
    headline: "A chatbot builder for teams who don't code",
    standfirst:
      "Enterprise teams wanted chatbots, but every change meant waiting for an engineer. OCA AI turns bot design into a visual canvas. I initiated its design direction from scratch and stayed with it from concept to go-to-market.",
    summary:
      "Initiated the design of a no-code visual chatbot builder for enterprise conversational automation, from discovery to go-to-market.",
    challenge:
      "Make bot design something operations and CS teams can create and maintain themselves — without hiding the logic that makes a bot behave correctly.",
    contribution: [
      "Initiated the product's design direction from scratch.",
      "Designed the drag-and-drop canvas editor so non-technical teams can build and maintain bot flows.",
      "Designed the surrounding product — AI Plus and bot reports — and worked with product, engineering and marketing through launch.",
    ],
    outcomes: [{ text: "Launched as a new, revenue-generating product line in the OCA ecosystem." }],
    note: "Adoption figures aren't included here.",
    depth: "feature",
    tone: "ink",
    sections: [
      {
        label: "Context",
        headline: "A bot nobody can edit is a bot nobody trusts",
        blocks: [
          {
            kind: "scene",
            text: "A company's customer-service team wants their chatbot to stop answering a question about a promotion that ended yesterday. The person who can change it is an engineer on another team with a full backlog. Until then, the bot keeps promising something the company no longer offers.",
          },
          {
            kind: "prose",
            body: [
              "OCA AI started from that gap. The people who know what a bot should say — CS and operations teams — were the ones least able to change it. The goal was a builder they could use themselves, for enterprise conversational automation, without writing code.",
            ],
          },
        ],
      },
      {
        label: "Canvas",
        headline: "Make the logic visible",
        blocks: [
          {
            kind: "prose",
            body: [
              "The core of OCA AI is a canvas editor. A bot is a flow you can see: blocks connected by lines, each block a step in the conversation. Teams drag a response type onto the canvas, connect it, and open a Bot Response panel to fill in what the bot says. The response types are the vocabulary of the product — the set of things a bot can do — so making that list clear mattered as much as the canvas itself.",
              "The trade-off of no-code is always the same: hide too much and people can't understand why the bot did something; show too much and they're back to programming. A visual flow sits in the middle — the logic is on screen, but nobody has to write it.",
            ],
          },
        ],
      },
      {
        label: "Launch",
        headline: "From concept to a product line",
        blocks: [
          {
            kind: "prose",
            body: [
              "I was there from the first concept through go-to-market. Around the canvas, the product grew to include AI Plus and bot reports. OCA AI launched as its own product line in the OCA ecosystem and generates revenue — and, later, it became one of the five squads I support as UX Lead.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "central-agro-lestari",
    title: "Coconut sugar traceability",
    org: "Nuwira Integrasi Mandiri",
    client: "Central Agro Lestari",
    years: "2018 – 2020",
    category: "Supply chain, Manufacturing",
    platforms: "Admin web, desktop stations, mobile, landing page",
    role: "UI/UX Designer (IT consultant)",
    headline: "Every batch traceable to its farm",
    standfirst:
      "A coconut sugar factory in Purbalingga needed to trace each product back through packing, production, warehouse and collector to the farmer and the land. I mapped the factory before I drew a single screen.",
    summary:
      "Designed a barcode traceability system for a coconut sugar factory, from land and farmer to finished goods, across admin web, desktop stations and mobile.",
    challenge:
      "Connect a chain of people and places — farmers, collectors, warehouse, production, packing — so every product carries its history, on a factory floor where people work in shifts.",
    contribution: [
      "Mapped each station as a flowchart before any UI: purchasing, raw material in/out/rejected, production, packing.",
      "Designed scan-first desktop stations with employee-ID login, shift handover and barcode printing at intake.",
      "Designed a mobile admin app for land and farmers: blocks, tree counts, GPS and output per farmer.",
    ],
    outcomes: [{ text: "One traceable chain across admin web, landing page, desktop stations and mobile." }],
    note: "No measured outcome figures are available for this project.",
    depth: "feature",
    tone: "sand",
    sections: [
      {
        label: "Context",
        headline: "From a tree in Purbalingga to a packed product",
        blocks: [
          {
            kind: "scene",
            text: "Coconut sap is tapped by farmers, sold to collectors, weighed into a warehouse, cooked down in an oven, sieved, sorted and packed. By the end, a bag of coconut sugar has passed through many hands. The question the factory needed to answer was simple: which ones?",
          },
          {
            kind: "sequence",
            steps: ["Land", "Farmer", "Collector", "Warehouse", "Production", "Packing", "Finished goods"],
            caption: "The traceability chain. Each hand-off is a scan, so a finished product can be traced back to its source.",
          },
          {
            kind: "prose",
            body: [
              "The design files also carry organic certification marks — USDA, EU and Control Union. Certifications like these depend on exactly this kind of chain: proof of where every input came from.",
            ],
          },
        ],
      },
      {
        label: "Process first",
        headline: "Flowcharts before screens",
        blocks: [
          {
            kind: "prose",
            body: [
              "Before any UI, I drew every station as a flowchart. Purchasing: log in, scan the employee ID, scan or enter the seller, scan the product, record type and quality, repeat until done — then the system creates a product ID and prints a barcode. The raw-material warehouse splits three ways: goods come in (into a lot, or a new lot if none fits), go out, or get rejected with a reason. Once those paths were agreed, the screens almost designed themselves.",
            ],
          },
        ],
      },
      {
        label: "Stations",
        headline: "Designed for a factory floor, not a desk",
        blocks: [
          {
            kind: "points",
            items: [
              { title: "Scan to log in", body: "Workers log in by scanning their employee ID, and a sidebar shows who's active at the station — built for shift changes, not passwords." },
              { title: "Purchasing", body: "Buying from a seller and buying from a farmer are separate paths; weight, type and quality go in, and a barcode prints immediately." },
              { title: "Production", body: "Batches per product — powder, liquid and moulded — each with a target. Stages run from adding raw material to oven and evaporation, sieving and sorting, each with start and finish, a progress bar, and a way to hand over to another worker mid-process." },
              { title: "Packing and finished goods", body: "The last scans in the chain, tying each packed product back to its batch." },
            ],
          },
        ],
      },
      {
        label: "In the field",
        headline: "Where the chain begins",
        blocks: [
          {
            kind: "prose",
            body: [
              "The first link isn't in the factory at all. A mobile admin app records the land: owner, block, number of coconut trees, area, the four boundaries and GPS coordinates, with a button to grab the current location. One question changes the form — is sap tapped here? If yes, the app asks which farmers work the land, how many trees each taps and how much they produce. It also records the last chemical fertiliser and any other crops, the kind of detail an organic audit asks about.",
              "Around the system I also designed the product labels, sized in centimetres for print, the documents and a landing page.",
            ],
          },
        ],
      },
    ],
  },
];

export const featuredSlugs = ["oca-dtp-revamp", "design-hub", "oca-interaction", "vestia", "dmb-collection"];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
