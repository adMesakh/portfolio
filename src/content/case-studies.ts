import type { CaseStudy } from "./types";

/**
 * Case studies. Sources: Mesakh's 2026 CV, the 2026 portfolio deck,
 * the "OCA DTP Revamp" case-study doc and usability-test report, and notes
 * from past conversations. Numbers appear only where a source states them.
 * Order here is the order on the site.
 */
export const caseStudies: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
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
            kind: "prose",
            body: [
              "The website was OCA's first touchpoint with new B2B buyers, but it wasn't converting them. Product, Pricing and Contact Us converted below 5%, bounce was high, and digital revenue lagged far behind offline sales.",
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
              "The craft itself was shared. Three UI designers handled desktop and mobile high-fidelity design, the UX writer owned copy and test scenarios, and one designer owned the test report. My job was to keep the problem, the structure and the evidence straight.",
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
        ],
      },
      {
        label: "Synthesis",
        headline: "Three teams wanted three different websites",
        blocks: [
          {
            kind: "prose",
            body: [
              "Marketing needed the value proposition and a conversion funnel. Product needed a smoother path from exploring to registering. Engineering needed ideas they could build without slowing the site down. A single How Might We workshop turned those into one problem; every idea went onto an impact–feasibility matrix and only the high-impact, high-feasibility ones survived.",
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

  /* ------------------------------------------------------------------ */
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
      "Run regular UX audits and the team's Jira cadence.",
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
        headline: "Embedded designers, fragmented product",
        blocks: [
          {
            kind: "prose",
            body: [
              "OCA is a family of products — an omnichannel inbox, bulk messaging, a chatbot builder, APIs — sold to the same companies and often used by the same people. When each squad had its own designer, each product moved quickly on its own terms. But customers experience OCA as one thing, and the seams showed: different patterns for the same task, different levels of documentation, and design QA that depended on who had time.",
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
              { title: "Guidelines in Figma", body: "File structure, naming and documentation rules so any designer can pick up another's file." },
              { title: "Audits with evidence", body: "UX audits use one format — evidence, finding, severity, recommendation — so findings can be prioritised alongside engineering work." },
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

  /* ------------------------------------------------------------------ */
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
      "Bring six messaging channels and the work around them — assignment, tickets, contact history, surveys — into one tool that agents, supervisors and managers can all use.",
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
            kind: "converge",
            inputs: ["WhatsApp", "Instagram", "Messenger", "Telegram", "Email", "Live chat"],
            hub: "One inbox",
            outputs: ["Conversations", "Tickets", "Contacts", "Chatbot", "Surveys & CSAT"],
            caption: "What OCA Interaction brings together. The diagram is a summary of scope, not a screenshot.",
          },
          {
            kind: "prose",
            body: [
              "For a customer-service team, the inbox isn't a feature — it's where the whole working day happens. The people using it range from agents who need the next conversation and its history, to supervisors watching queues and SLAs, to managers who care about CSAT and volume.",
            ],
          },
        ],
      },
      {
        label: "Building it",
        headline: "From concept to a product companies run on",
        blocks: [
          {
            kind: "prose",
            body: [
              "I joined while the product was still a concept and designed the core flows — conversations, ticketing and contacts — that the rest of the product grew around. As it matured, the work shifted from inventing flows to keeping a growing product coherent as reports and new features were added.",
              "Data-dense screens got their own discipline. For the WhatsApp Services Report, a screen full of metric cards, we ran a quick preference test between two layouts instead of arguing about it.",
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
              "When we added generative AI, the decision that mattered most was placement. Reply suggestion, improve text, translation and chat summary all live inside the existing conversation view, so help appears in context rather than in a separate tool. About 9–10% of all users used AI Assistant in its first week.",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
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
      "Regulated lending means a long, unavoidable verification flow. The design job was to make each step feel small enough that lenders actually finish it.",
    summary:
      "Designed an OJK-regulated P2P lending platform end to end — onboarding and KYC, the lender marketplace, portfolio and wallet — across iOS, Android, web and admin.",
    challenge:
      "Meet OJK regulation and ISO 27001 requirements in onboarding — identity, documents, bank account, video verification — without losing lenders halfway.",
    contribution: [
      "Designed onboarding and KYC end to end: registration, OTP, PIN, step-by-step data, guided ID and selfie capture, account verification, video call verification.",
      "Designed the lender side: a marketplace built on SME borrower stories, a portfolio dashboard and a wallet.",
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
            kind: "prose",
            body: [
              "Vestia connects SME borrowers with lenders under OJK regulation, built to ISO 27001 requirements. Every lender has to be verified before they can fund a loan, and none of the verification steps are optional. The product succeeds or fails on whether people make it through.",
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
            steps: ["Register", "OTP", "PIN", "Personal data, step by step", "Guided ID, selfie & NPWP capture", "Bank account check", "Video verification"],
            caption: "The onboarding and KYC sequence. Long forms became short steps; document capture got an on-screen guide so photos pass the first time.",
          },
          {
            kind: "prose",
            body: [
              "The decisions were mostly about pacing: ask for one kind of information at a time, guide the camera so ID photos pass the first time, and keep the lender aware of where they are in the process. KYC completion reached over 80%.",
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
              "On the lender side, the marketplace presents each loan through the SME's story, alongside funding progress, so lenders choose a business they understand. A portfolio dashboard and wallet complete the loop. Vestia grew from zero to more than 1,000 lenders, including 20+ company and super lenders.",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dmb-collection",
    title: "DMB collection app",
    org: "Nuwira Integrasi Mandiri",
    client: "DMB (Andalas)",
    years: "2020",
    category: "Banking, Offline-first",
    platforms: "Mobile app for field staff, web back office",
    role: "UI/UX Designer (IT consultant)",
    headline: "Taking a paper process into the field — offline",
    standfirst:
      "Group-lending collection ran on paper. Account officers needed something that works without a signal; the back office needed numbers it could trust.",
    summary:
      "Replaced paper-based field collection with a mobile app for account officers and unit managers that works offline and syncs automatically, plus a web back office for credit admins.",
    challenge:
      "Collection for Grameen-model group lending — centers, groups, regular and arrears instalments, joint liability — had to work in the field without connectivity and reconcile cleanly afterwards.",
    contribution: [
      "Designed the mobile app for Account Officers and Unit Managers: download data, collect offline, upload when back online.",
      "Mapped debtor payment states and deposit-slip capture with photo proof.",
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
            kind: "prose",
            body: [
              "Debtors in group lending sit in centers and groups, pay regular and arrears instalments, and share liability. Account officers visit them, collect, and bring the money and the paper record back. Every step was recorded on paper.",
            ],
          },
        ],
      },
      {
        label: "Flow",
        headline: "Design the sync, not just the screens",
        blocks: [
          {
            kind: "sequence",
            steps: ["Download the day's data", "Collect offline", "Capture deposit slip with photo", "Upload when online", "Back-office approval", "Reports & audit trail"],
            highlight: [1, 2],
            highlightLabel: "No connection needed",
            caption: "The collection loop across the mobile app and the web back office.",
          },
          {
            kind: "prose",
            body: [
              "Offline-first changes what the interface has to say. The app needs to be clear about what has been saved on the device, what has been sent, and what still needs attention — so officers trust it enough to leave the paper behind.",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
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
      "OCA Blast sends one-way messages in bulk. I've designed for it since my first years at OCA, and from late 2024 led a rework of its UI and information architecture toward a v3.",
    summary:
      "Redesigned OCA's bulk-messaging product: campaign creation, scheduling, personalisation, projects, reporting and channel configuration.",
    challenge:
      "As customers ran more campaigns, the product needed a structure that kept campaigns, reports and channel settings findable.",
    contribution: [
      "Redesigned the campaign flow: creation, scheduling, personalisation and channel configuration.",
      "Restructured the IA around projects and reporting (v2 → v3 beta, from Q4 2024).",
    ],
    outcomes: [
      { value: "Rp7B → Rp60B+", text: "annual revenue growth for the product." },
      { value: "4.6+", text: "product rating." },
    ],
    note: "Revenue growth reflects the whole product team and sales; design is one contributor.",
    depth: "short",
    tone: "stone",
    sections: [
      {
        label: "Flow",
        headline: "One path from draft to report",
        blocks: [
          {
            kind: "sequence",
            steps: ["Create", "Personalise", "Schedule", "Configure channel", "Report"],
            caption: "The campaign flow, grouped under projects in the v3 information architecture.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
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
      "OCA AI lets enterprise teams design conversational automation visually. I initiated its design direction from scratch and stayed with it from concept to go-to-market.",
    summary:
      "Initiated the design of a no-code visual chatbot builder for enterprise conversational automation, from concept to go-to-market.",
    challenge:
      "Make bot design something operations and CS teams can create and maintain themselves, without waiting for engineers.",
    contribution: [
      "Initiated the product's design direction from scratch.",
      "Shaped the visual builder so non-technical teams can build and maintain bot flows.",
      "Worked with product, engineering and marketing through launch.",
    ],
    outcomes: [{ text: "Launched as a new product line in the OCA ecosystem." }],
    note: "Adoption figures aren't included here.",
    depth: "short",
    tone: "ink",
    sections: [],
  },

  /* ------------------------------------------------------------------ */
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
      "A coconut sugar factory in Purbalingga needed to trace each product back through production, warehouse and collector to the farmer and the land.",
    summary:
      "Designed a barcode traceability system for a coconut sugar factory, from land and farmer to finished goods, across admin web, desktop stations and mobile.",
    challenge:
      "Connect a chain of people and places — farmers, collectors, warehouse, production, packing — so every product carries its history.",
    contribution: [
      "Mapped each station as a flowchart before any UI: purchasing, raw material in/out/rejected, production, packing.",
      "Designed scan-first desktop stations with employee-ID login, shift handover and barcode printing at intake.",
      "Designed a mobile admin app for land and farmers: blocks, tree counts, GPS and output per farmer.",
    ],
    outcomes: [{ text: "One traceable chain across admin web, landing page, desktop and mobile." }],
    depth: "short",
    tone: "sand",
    sections: [
      {
        label: "Chain",
        headline: "A barcode at every hand-off",
        blocks: [
          {
            kind: "sequence",
            steps: ["Land", "Farmer", "Collector", "Warehouse", "Production", "Packing", "Finished goods"],
            caption: "The traceability chain. Each hand-off is a scan, so a finished product can be traced back to its source.",
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
