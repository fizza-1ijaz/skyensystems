export const HERO_PROOF_POINTS = [
  {
    title: "PSEB-registered delivery",
    description: "Government-recognized software house with verified export infrastructure in Lahore.",
  },
  {
    title: "20+ shipped engagements",
    description: "Websites, apps, and platforms delivered for US, UK, GCC, and regional clients.",
  },
  {
    title: "Product-grade engineering",
    description: "The same team that builds Studiely, Make My Lesson, and Linguatude builds yours.",
  },
  {
    title: "4-hour response standard",
    description: "Direct access to leads and engineers — not a ticket queue.",
  },
  {
    title: "Dual-region operations",
    description: "Head office in Bahrain. Development centre in Pakistan. US market focus.",
  },
  {
    title: "End-to-end ownership",
    description: "Strategy, design, engineering, launch, and growth under one roof.",
  },
] as const;

export type CapabilityVisualId = "web" | "mobile" | "ai" | "design" | "growth" | "teams";

export const CAPABILITIES = [
  {
    num: "01",
    title: "Web Platforms",
    visual: "web" as CapabilityVisualId,
    description: "High-performance marketing sites, portals, and custom web applications.",
    span: "lg:col-span-7",
    minH: "",
    visualBleed: "lg:-mr-2",
  },
  {
    num: "02",
    title: "Mobile Products",
    visual: "mobile" as CapabilityVisualId,
    description: "Native and cross-platform apps built for retention and scale.",
    span: "lg:col-span-5",
    minH: "min-h-[18rem] lg:min-h-[20rem]",
    visualBleed: "lg:-ml-4",
  },
  {
    num: "03",
    title: "AI Systems",
    visual: "ai" as CapabilityVisualId,
    description: "Practical automation, copilots, and intelligent workflows — not demos.",
    span: "lg:col-span-4",
    minH: "min-h-[16rem]",
    visualBleed: "",
  },
  {
    num: "04",
    title: "Experience Design",
    visual: "design" as CapabilityVisualId,
    description: "Research-led UI/UX that converts visitors into qualified leads.",
    span: "lg:col-span-4",
    minH: "min-h-[16rem]",
    visualBleed: "",
  },
  {
    num: "05",
    title: "Growth & Marketing",
    visual: "growth" as CapabilityVisualId,
    description: "SEO, paid media, and content systems aligned with product goals.",
    span: "lg:col-span-4",
    minH: "min-h-[16rem]",
    visualBleed: "",
  },
  {
    num: "06",
    title: "Dedicated Teams",
    visual: "teams" as CapabilityVisualId,
    description: "Extended engineering squads embedded in your roadmap and timezone.",
    span: "lg:col-span-8",
    colStart: "lg:col-start-3",
    minH: "min-h-[14rem] lg:min-h-[16rem]",
    visualBleed: "lg:-mb-4",
  },
] as const;

export const SELECTED_WORK = [
  {
    name: "Studiely",
    category: "EdTech · Live",
    metric: "App Store & Play Store",
    metricLabel: "Distribution",
    description:
      "AI-powered study platform — flashcards, adaptive quizzes, and revision flows built in-house.",
    logo: "/logo-studiely.jpeg",
    href: "https://studiely.com",
  },
  {
    name: "Make My Lesson",
    category: "EdTech · Live",
    metric: "App Store & Play Store",
    metricLabel: "Distribution",
    description:
      "Curriculum-aligned lesson planning for educators — saving hours every week.",
    logo: "/logo-makemylesson.png",
    href: "https://makemylesson.ai",
  },
  {
    name: "Linguatude",
    category: "Language · In development",
    metric: "Multi-region",
    metricLabel: "Client reach",
    description:
      "Conversation practice and spaced repetition designed for real fluency outcomes.",
    logo: "/logo-linguatude.jpg",
    href: "https://linguatude.com",
  },
] as const;

export const ENGAGEMENT_PHASES = [
  {
    phase: "01",
    title: "Discovery",
    detail: "Scope, constraints, and success metrics defined in a structured workshop.",
  },
  {
    phase: "02",
    title: "Architecture",
    detail: "Technical blueprint, milestones, and delivery model agreed before build.",
  },
  {
    phase: "03",
    title: "Build",
    detail: "Design and engineering in parallel with weekly visibility and demos.",
  },
  {
    phase: "04",
    title: "Launch",
    detail: "QA, deployment, analytics, and handover with documentation.",
  },
  {
    phase: "05",
    title: "Scale",
    detail: "Retainers, feature roadmaps, and growth support as your product matures.",
  },
] as const;

export { PROCESS_STAGES as PROCESS_ROADMAP_STEPS } from "@/components/landing/process/process-data";

export const INDUSTRIES = [
  {
    label: "Education",
    tagline: "LMS tools, platforms, and student-facing products.",
    description:
      "Platforms, LMS tools, and student-facing products — built for engagement, accessibility, and outcomes schools can measure.",
  },
  {
    label: "Professional Services",
    tagline: "Credibility-led sites and client portals.",
    description:
      "Credibility-led websites, client portals, and intake flows that position your firm as the obvious choice.",
  },
  {
    label: "SaaS & Startups",
    tagline: "MVPs through scale-up engineering.",
    description:
      "From MVP validation to scale-up engineering — architecture, design, and delivery tuned for speed without rework.",
  },
  {
    label: "Healthcare",
    tagline: "Compliant interfaces and workflow tools.",
    description:
      "Compliant interfaces, appointment systems, and workflow tools that respect privacy and reduce operational friction.",
  },
  {
    label: "E-commerce",
    tagline: "Storefronts and integrations built to convert.",
    description:
      "Conversion-focused storefronts, catalog integrations, and checkout experiences optimized for mobile buyers.",
  },
  {
    label: "GCC & US SMBs",
    tagline: "Cross-border delivery with local market nuance.",
    description:
      "Cross-border delivery with US market nuance, GCC business culture, and one team accountable from brief to launch.",
  },
] as const;

export const TRUST_STATS = [
  { value: "20+", label: "Projects delivered" },
  { value: "4h", label: "Response guarantee" },
  { value: "3", label: "Live / in-dev products" },
  { value: "2", label: "International offices" },
] as const;
