export const WHO_WE_ARE_HERO = {
  eyebrow: "Who we are",
  headline: "We build software that creates measurable business outcomes.",
  supporting: [
    "Skyen Systems is the trading name of Qismat Ventures W.L.L. — a PSEB-registered software house with a head office in Bahrain and a primary engineering centre in Lahore.",
    "We unite strategy, design, engineering, AI, and growth under one accountable team for clients across the US, UK, GCC, and Pakistan.",
    "Clients trust us because we ship production systems — not slide decks — with transparent delivery and senior talent embedded in every engagement.",
  ],
} as const;

export const FOUNDATION_PRINCIPLES = [
  {
    num: "01",
    title: "Engineering Excellence",
    description:
      "Production-grade code, tested deployments, and architectures built to scale — not prototypes dressed as products.",
  },
  {
    num: "02",
    title: "Business First Thinking",
    description:
      "Every technical decision ties to revenue, efficiency, or risk reduction. We measure success in outcomes, not output.",
  },
  {
    num: "03",
    title: "Long-Term Partnerships",
    description:
      "We prefer multi-year product relationships over one-off builds. Your roadmap becomes our roadmap.",
  },
  {
    num: "04",
    title: "Ownership Mentality",
    description:
      "We operate as an extension of your team — accountable for delivery, communication, and results end to end.",
  },
] as const;

export const COMPANY_TIMELINE = [
  {
    year: "Founding",
    title: "One team, every discipline",
    detail:
      "Founded on the belief that excellent digital work should not require a Fortune 500 budget or seven different agencies.",
  },
  {
    year: "Bahrain",
    title: "Head office established",
    detail:
      "Qismat Ventures W.L.L. incorporated in the Kingdom of Bahrain (CR No. 190698-1), Al-Seef, Manama.",
  },
  {
    year: "Pakistan",
    title: "PSEB-registered delivery centre",
    detail:
      "Lahore engineering hub registered with Pakistan's Software Export Board — verified capability for international clients.",
  },
  {
    year: "Products",
    title: "In-house product studio",
    detail:
      "Studiely live on App Store and Play Store; Make My Lesson and Linguatude in active development.",
  },
  {
    year: "Global",
    title: "US, UK & GCC delivery",
    detail:
      "Serving clients across the United States, United Kingdom, GCC, and Pakistan with US-friendly overlap and 4-hour response standard.",
  },
] as const;

export const METHODOLOGY_STEPS = [
  { id: "understand", title: "Understand", detail: "Constraints, stakeholders, and success metrics defined together." },
  { id: "design", title: "Design", detail: "Flows, systems, and prototypes validated before engineering begins." },
  { id: "build", title: "Build", detail: "Parallel design and development with weekly visibility and demos." },
  { id: "scale", title: "Scale", detail: "Launch, instrumentation, iteration, and long-term product partnership." },
] as const;

export const LEADERSHIP_SPOTLIGHT = {
  headline: "Senior practitioners — not account managers.",
  disciplines: [
    { label: "Engineering", years: "8+ avg.", focus: "Full-stack, mobile, platform" },
    { label: "Design", years: "6+ avg.", focus: "UX research, systems, product UI" },
    { label: "AI & Data", years: "5+ avg.", focus: "LLM integration, automation, analytics" },
    { label: "Delivery", years: "7+ avg.", focus: "Roadmaps, client communication, QA" },
  ],
  statement:
    "Our Lahore centre staffs senior developers, designers, AI engineers, and marketers full-time on client work — the same team that built and operates our own products.",
} as const;

export const CULTURE_BLOCKS = [
  {
    type: "statement" as const,
    quote: "We do not outsource your project to juniors behind a sales team.",
    span: "lg:col-span-8",
  },
  {
    type: "metric" as const,
    value: "4h",
    label: "Response standard for business inquiries",
    span: "lg:col-span-4",
  },
  {
    type: "metric" as const,
    value: "20+",
    label: "Engagements delivered internationally",
    span: "lg:col-span-4",
  },
  {
    type: "statement" as const,
    quote: "Transparent weekly demos. Direct access to engineers. No agency theatre.",
    span: "lg:col-span-8",
  },
  {
    type: "credential" as const,
    title: "PSEB Registered",
    description:
      "Government-recognised software export house — verified technical capability and professional conduct standards.",
    span: "lg:col-span-6",
  },
  {
    type: "metric" as const,
    value: "3",
    label: "Live or in-development owned products",
    span: "lg:col-span-6",
  },
] as const;
