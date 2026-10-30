import type { Employer, Principle } from "./types";

export const profile = {
  name: "Mesakh",
  title: "UX Lead & Product Designer",
  location: "Jakarta, Indonesia",
  availability: "Open to UX Lead, Design Manager and Lead Product Designer roles, remote or with relocation.",
  email: "admesakh@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/admesakh" },
    { label: "Email", href: "mailto:admesakh@gmail.com" },
  ],
  years: "8+",

  /** Storytelling hero. */
  hero: {
    kicker: "UX Lead and product designer in Jakarta",
    /** The statement is split so claims can carry review-style margin notes. */
    statement: [
      { text: "I design the software businesses run on: " },
      { text: "customer service inboxes", note: "OCA Interaction. Omnichannel inbox, 2,000+ active users.", href: "/work/oca-interaction" },
      { text: ", " },
      { text: "lending apps", note: "Vestia. OJK regulated P2P lending, 0 to 1,000+ lenders.", href: "/work/vestia" },
      { text: ", " },
      { text: "field collection tools", note: "DMB. Offline first collection for group lending.", href: "/work/dmb-collection" },
      { text: ". I\u00A0also build " },
      { text: "the design teams that ship\u00A0it", note: "Design Hub. One design team serving five squads at OCA.", href: "/work/design-hub" },
      { text: "." },
    ] as { text: string; note?: string; href?: string }[],
    lede:
      "Eight years across CPaaS, SaaS, fintech and banking. Most of it spent taking products from a first sketch to something thousands of people open at work every morning. Today I lead design for five product squads at Telkom Indonesia's OCA.",
  },

  /** Editorial-mode introduction: two sentences, no adjectives. */
  brief:
    "UX Lead with 8+ years in B2B SaaS, CPaaS, fintech and banking. Leads the design function (UI, research, UX writing, design QA and the design system) across five product squads at Telkom Indonesia's OCA.",

  /** The professional philosophy, as a short essay. */
  philosophy: {
    headline: "A design is finished when it works in production, not when it looks right in Figma.",
    body: [
      "Most of what I have designed is used under pressure: a support agent juggling chats from WhatsApp, Instagram and email in one queue, an account officer collecting instalments in the field without a reliable connection, a credit admin reconciling deposits at the end of the day. Those people don't need delight. They need the next step to be obvious and the data to be right.",
      "That shapes how I work. I start from the operation: who does what, in what order, with what constraint. Only then do I draw screens. I treat engineers as the first users of a design, because a flow that can't be built on time doesn't help anyone. And I try to tie each decision to a number someone already cares about, so design is part of the business conversation rather than a service request at the end of it.",
    ],
  },

  achievements: [
    { value: "2,000+", text: "active users on OCA Interaction, an omnichannel platform I helped build from concept; the product has passed Rp10B in revenue." },
    { value: "Rp7B → Rp60B+", text: "growth in OCA Blast's annual revenue, a product I've designed for. A team result, with design as one contributor." },
    { value: "80%+", text: "KYC completion on Vestia, an OJK regulated P2P lending product that grew from zero to 1,000+ lenders." },
    { value: "5 squads", text: "supported by one centralised design team, after moving OCA from per squad designers to a Design Hub." },
    { value: "100%", text: "task success for finding product, pricing and free trial in usability tests of the OCA website revamp, on desktop and mobile." },
  ],

  skills: [
    { group: "Product design", items: ["0→1 product design", "Information architecture", "Interaction design", "Dense B2B dashboards", "Mobile, offline first flows"] },
    { group: "Research", items: ["UX audits & heuristic evaluation", "Moderated & unmoderated testing (Maze)", "Preference and first impression tests", "Analytics & event tracking", "Journey mapping"] },
    { group: "Leadership & ops", items: ["Team leadership (up to 10)", "Design Hub operating model", "Design system & UX patterns", "Design QA against staging", "Workflow in Jira & Figma"] },
    { group: "Tools", items: ["Figma, FigJam", "Maze", "Jira", "Notion", "HTML prototyping, Git"] },
  ],

  education: [
    { title: "Information Systems (S1)", place: "Universitas Dian Nuswantoro", years: "In progress" },
    { title: "Guest lecturer on UI/UX, AI in design, accessibility and research validity", place: "Universitas Teknologi Yogyakarta", years: "Invited talks" },
  ],

  personal: {
    headline: "Outside work, I play piano and take photographs.",
    body: [
      "Piano is the one place where I practise slowly on purpose: the same few bars, again, until they hold. It's not far from how I like to run a design review: find the step where people stumble and work on that, rather than redrawing everything.",
      "I also shoot street, portrait and travel photography, which is mostly an exercise in deciding what to leave out of the frame.",
    ],
  },
};

export const principles: Principle[] = [
  {
    title: "Start from the operation",
    body: "Before any screen I map who does what, in what order, under what constraint. A station flowchart for a factory, payment states for a collection app, a journey map for a website. Most UI problems are workflow problems that showed up late.",
  },
  {
    title: "Evidence before polish",
    body: "Lean research is enough when it's honest: an audit, five moderated sessions, a preference test, the analytics you already have. I'd rather ship a tested flow than a perfect untested one.",
  },
  {
    title: "Patterns, not just components",
    body: "A button is a component. \"Export a report\" is a pattern: click, drawer, request, notification, download. Documenting the journey, not the widget, is what keeps five squads consistent.",
  },
  {
    title: "Design QA is part of design",
    body: "Comparing staging against the original design is unglamorous and it is where quality is actually decided. My team does it on every release.",
  },
  {
    title: "Measure the minimum",
    body: "Event tracking starts from a question and the smallest set of events that answers it (open, submit, success, error), not from instrumenting everything.",
  },
];

export const leadership = {
  headline: "Leading design across five squads with one team",
  intro:
    "When I became UX Lead in 2022, designers were assigned per squad. Each squad got attention, but the product didn't: the same problem was solved three different ways, handoff depended on who you asked, and nobody owned the gaps between products. The work since then has been building the system around the designers, not just the designs.",
  areas: [
    {
      title: "Operating model",
      body: "Moved from per squad resourcing to a centralised Design Hub serving Interaction, AI, Blast & API, Growth and Core. One intake, shared priorities, and designers who see across products.",
    },
    {
      title: "Workflow",
      body: "Standardised the path every request takes (intake, review, handoff, documentation, design QA) and wired it into the team's Jira cadence so status is visible to Product and Engineering.",
    },
    {
      title: "Design system & patterns",
      body: "Own the design system, Figma guidelines and a library of UX patterns documented as end to end journeys, so a new feature starts from a solved problem.",
    },
    {
      title: "Quality",
      body: "Design QA against staging on every release, and regular UX audits with evidence, severity and recommendation for each finding.",
    },
    {
      title: "People",
      body: "Have led a multidisciplinary team of up to 10 across UI, UX research and UX writing; the UI team is currently four designers. Collaborate daily with Product, Engineering, Marketing, Operations, Legal and Compliance.",
    },
  ],
};

export const experience: Employer[] = [
  {
    name: "Telkom Indonesia (OCA)",
    context: "OCA is Telkom's CPaaS ecosystem: omnichannel customer service, bulk messaging, chatbot automation and messaging APIs for mid to large businesses, BUMN and government.",
    location: "Jakarta",
    start: "Dec 2020",
    end: "Present",
    roles: [
      {
        title: "UX Lead",
        start: "May 2022",
        end: "Present",
        summary: "Lead the design function for OCA across five squads: Interaction, AI, Blast & API, Growth and Core.",
        points: [
          "Moved design from per squad resourcing to a centralised Design Hub with one standard workflow.",
          "Own the design system, UX patterns, Figma guidelines and documentation.",
          "Run design QA against staging and regular UX audits.",
          "Led the OCA website (DTP) revamp: research, IA, design and usability testing.",
          "Have led up to 10 people across UI, research and UX writing; the UI team is currently four designers.",
        ],
      },
      {
        title: "UX Designer",
        start: "Dec 2020",
        end: "May 2022",
        summary: "Product designer on OCA's core products as they were being built.",
        points: [
          "Helped build OCA Interaction, the omnichannel inbox, from concept.",
          "Worked on OCA Blast's one way messaging experience and the OCA landing page.",
          "Initiated the design direction for OCA AI, a no code chatbot builder, from concept to market launch.",
        ],
      },
    ],
    work: ["oca-dtp-revamp", "design-hub", "oca-interaction", "oca-blast", "oca-ai"],
  },
  {
    name: "Nuwira Integrasi Mandiri",
    context: "IT consultancy building enterprise and operational systems for banks, fintechs and manufacturers.",
    location: "Indonesia",
    start: "2018",
    end: "2020",
    roles: [
      {
        title: "IT Consultant, UI/UX Designer",
        start: "2018",
        end: "2020",
        summary: "Owned design from requirements to developer handoff on client projects.",
        points: [
          "Requirements, user flows, wireframes, prototypes, specifications, handoff and design QA.",
          "Designed Vestia (P2P lending), DMB's collection app, a BPR field collection app, a field service app and a barcode traceability system.",
        ],
      },
    ],
    work: ["vestia", "dmb-collection", "central-agro-lestari"],
  },
];

/** Smaller projects shown as an index rather than a case study. */
export const otherWork = [
  { title: "BPR Field Collection App", category: "Banking, offline first", note: "Offline to online sync for field officers. The client reported 100% satisfaction." },
  { title: "Field Service App", category: "Operations", note: "Field service workflow redesign; complaints dropped to nearly zero." },
  { title: "AI Assistant in OCA Interaction", category: "GenAI, agent productivity", note: "Reply suggestion, improve text, translation and chat summary. Used by about 9 to 10% of all users in its first week." },
  { title: "OCA reports", category: "Dense dashboards", note: "WhatsApp Services Report (A/B preference test), WhatsApp Call Report with country quotas for 180+ countries." },
  { title: "Legion AI audit", category: "UX audit, AI tools", note: "Audit of a prompt based prototype builder: model picker, limits, provider setup, error and retry states." },
];
