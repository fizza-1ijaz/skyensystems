import type { CapabilityVisualId } from "@/components/landing/landing-data";

export const SERVICES_HERO_STATS = [
  { value: "20+", label: "Shipped engagements" },
  { value: "4h", label: "Response standard" },
  { value: "3", label: "Live / in-dev products" },
  { value: "2", label: "Global offices" },
] as const;

export const SERVICES_CAPABILITY_MATRIX = [
  "Web platforms",
  "Mobile products",
  "AI systems",
  "Experience design",
  "Growth & data",
  "Dedicated teams",
] as const;

export const WHAT_WE_BUILD = [
  {
    label: "Enterprise Platforms",
    description: "Multi-role portals, SaaS cores, and workflow systems built for scale and governance.",
    metric: "Full-stack",
  },
  {
    label: "Mobile Products",
    description: "Consumer and B2B apps engineered for retention, performance, and store readiness.",
    metric: "iOS · Android",
  },
  {
    label: "AI Systems",
    description: "Copilots, automation, and LLM integrations tied to real operational outcomes.",
    metric: "Production AI",
  },
  {
    label: "Internal Tools",
    description: "Dashboards and ops software that replace spreadsheets and manual handoffs.",
    metric: "Efficiency",
  },
  {
    label: "Customer Portals",
    description: "Self-service experiences that reduce support load and improve trust.",
    metric: "Conversion",
  },
  {
    label: "Data Platforms",
    description: "Pipelines, reporting layers, and analytics foundations for decision-makers.",
    metric: "Insight",
  },
] as const;

export const CAPABILITY_ARCHITECTURE = [
  { id: "strategy", title: "Strategy", detail: "Scope, success metrics, and technical feasibility aligned to business goals." },
  { id: "design", title: "Design", detail: "Research-led UX, interface systems, and prototypes validated before build." },
  { id: "engineering", title: "Engineering", detail: "Web, mobile, and platform code — tested, documented, and deployment-ready." },
  { id: "ai", title: "AI", detail: "Intelligent workflows, agents, and model integration where value is measurable." },
  { id: "data", title: "Data", detail: "Analytics, instrumentation, and data layers that inform product decisions." },
  { id: "optimization", title: "Optimization", detail: "Performance, SEO, growth loops, and iteration after launch." },
] as const;

export type DetailedService = {
  num: string;
  title: string;
  headline: string;
  description: string;
  deliverables: readonly string[];
  technologies: string;
  outcomes: readonly string[];
  visual: CapabilityVisualId;
  slug: string;
  dark?: boolean;
};

export const DETAILED_SERVICES: DetailedService[] = [
  {
    num: "01",
    title: "Web Development",
    headline: "Websites and web applications that work commercially — not just visually.",
    description:
      "Your site is always on. We build marketing properties, SaaS platforms, and portals where speed, SEO structure, and conversion paths are engineered from day one.",
    deliverables: [
      "Marketing sites & landing systems",
      "Web applications & SaaS products",
      "E-commerce & checkout flows",
      "Client portals & dashboards",
      "API integrations",
    ],
    technologies: "Next.js · React · TypeScript · Node.js · PostgreSQL · Tailwind · Stripe · Shopify",
    outcomes: ["Sub-2s perceived load", "SEO-ready architecture", "Conversion-first UX"],
    visual: "web",
    slug: "/services/web-design-development",
  },
  {
    num: "02",
    title: "App Development",
    headline: "Mobile products users keep — not delete in thirty seconds.",
    description:
      "We prototype flows before code, ship performant native and cross-platform apps, and support store launch with the same team that built Studiely.",
    deliverables: [
      "iOS & Android applications",
      "Cross-platform MVPs",
      "Store launch & optimisation",
      "Push & engagement systems",
      "Offline-capable experiences",
    ],
    technologies: "React Native · Swift · Kotlin · Expo · Flutter · Firebase · REST APIs",
    outcomes: ["Native-feel performance", "Retention-focused UX", "Store-ready releases"],
    visual: "mobile",
    slug: "/services/mobile-apps",
    dark: true,
  },
  {
    num: "03",
    title: "UI/UX Design",
    headline: "Design that changes behaviour — then makes it beautiful.",
    description:
      "Research, journey mapping, and clickable prototypes precede pixels. We deliver design systems your engineering team can actually implement.",
    deliverables: [
      "UX research & journey maps",
      "Wireframes to high-fidelity UI",
      "Design systems & libraries",
      "Usability testing",
      "Brand visual language",
    ],
    technologies: "Figma · Prototyping · Maze · Hotjar · Design tokens",
    outcomes: ["Higher qualified leads", "Reduced support friction", "Faster dev handoff"],
    visual: "design",
    slug: "/services/brand-ui-ux-design",
  },
  {
    num: "04",
    title: "AI Solutions",
    headline: "Practical AI embedded in operations — not demo theatre.",
    description:
      "We identify where models create real leverage, then build assistants, automations, and integrations with guardrails your team can trust.",
    deliverables: [
      "Customer-facing copilots",
      "Internal knowledge assistants",
      "Workflow automation",
      "LLM product integration",
      "RAG & vector pipelines",
    ],
    technologies: "OpenAI · Claude · LangChain · Python · FastAPI · Vector DBs",
    outcomes: ["Measurable time saved", "Controlled model behaviour", "Production monitoring"],
    visual: "ai",
    slug: "/services/ai-solutions",
    dark: true,
  },
  {
    num: "05",
    title: "Digital Marketing",
    headline: "Growth systems tied to pipeline — not vanity dashboards.",
    description:
      "Technical SEO, paid media, and content operate as one system aligned with your product and sales motion.",
    deliverables: [
      "Technical & content SEO",
      "Google & Meta campaigns",
      "Analytics & attribution",
      "Landing page optimisation",
      "Content strategy",
    ],
    technologies: "GA4 · GTM · Search Console · Google Ads · Meta Ads · LinkedIn",
    outcomes: ["Tracked conversions", "Lower CAC over time", "Search visibility"],
    visual: "growth",
    slug: "/services/digital-marketing",
  },
  {
    num: "06",
    title: "Dedicated Teams",
    headline: "Senior talent embedded in your roadmap — without hiring overhead.",
    description:
      "Full-time engineers and designers on your timezone, with transparent delivery rhythm and month-to-month flexibility.",
    deliverables: [
      "Dedicated developers",
      "Design & QA support",
      "Delivery management",
      "US timezone overlap",
      "Flexible scaling",
    ],
    technologies: "Your stack · Our delivery framework · Slack · Weekly demos",
    outcomes: ["Predictable velocity", "Direct engineer access", "Scale without re-hiring"],
    visual: "teams",
    slug: "/services/dedicated-teams",
    dark: true,
  },
];

export const TECHNOLOGY_LANDSCAPE = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST · GraphQL"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Swift", "Kotlin", "Expo", "Flutter", "Firebase"],
  },
  {
    category: "Cloud",
    items: ["Vercel", "AWS", "Docker", "CI/CD", "Edge delivery"],
  },
  {
    category: "AI",
    items: ["OpenAI", "Claude", "LangChain", "Vector DBs", "Agent workflows"],
  },
  {
    category: "Data",
    items: ["GA4", "GTM", "ETL pipelines", "Dashboards", "Event tracking"],
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Teams",
    subtitle: "Operating model · Embedded",
    description:
      "A full-time squad — developers, design, and delivery leadership — working exclusively on your product roadmap with US-friendly overlap.",
    fit: "Best for ongoing product evolution and scale-up velocity.",
  },
  {
    title: "Staff Augmentation",
    subtitle: "Operating model · Extension",
    description:
      "Senior engineers and designers slot into your existing rituals, tools, and management while we handle recruitment and bench strength.",
    fit: "Best when you need capacity inside your current org structure.",
  },
  {
    title: "Project Delivery",
    subtitle: "Operating model · Fixed scope",
    description:
      "Defined outcomes, milestones, and handover — from discovery through launch — with a single accountable partner.",
    fit: "Best for launches, redesigns, and bounded initiatives.",
  },
] as const;

export const SERVICES_PROCESS = [
  { phase: "01", title: "Discovery", detail: "Constraints, stakeholders, and success metrics defined together." },
  { phase: "02", title: "Planning", detail: "Architecture, timeline, and delivery model locked before build." },
  { phase: "03", title: "Design", detail: "Flows, prototypes, and systems validated with real users." },
  { phase: "04", title: "Build", detail: "Parallel design and engineering with weekly visibility." },
  { phase: "05", title: "Launch", detail: "QA, deployment, analytics, and operational handover." },
  { phase: "06", title: "Scale", detail: "Iteration, growth, and long-term product partnership." },
] as const;

export const PROOF_BLOCKS = [
  {
    type: "metric" as const,
    value: "20+",
    label: "Projects delivered across US, UK, GCC & Pakistan",
    span: "lg:col-span-4",
  },
  {
    type: "case" as const,
    title: "Studiely",
    description: "In-house EdTech platform — live on App Store and Play Store.",
    span: "lg:col-span-4",
  },
  {
    type: "quote" as const,
    quote: "Clear communication, strong engineering, and no agency fluff.",
    role: "Client · US small business",
    span: "lg:col-span-4",
  },
  {
    type: "credential" as const,
    title: "PSEB Registered",
    description: "Government-recognized software export house with verified Lahore delivery centre.",
    span: "lg:col-span-6",
  },
  {
    type: "metric" as const,
    value: "4h",
    label: "Guaranteed response to every business inquiry",
    span: "lg:col-span-3",
  },
  {
    type: "case" as const,
    title: "Make My Lesson",
    description: "AI lesson planning product live for educators on iOS and Android.",
    span: "lg:col-span-3",
  },
];

export const PRIMARY_SERVICE_HREF = DETAILED_SERVICES[0].slug;

export const SERVICE_NAV_LINKS = DETAILED_SERVICES.map((service) => ({
  label: service.title,
  href: service.slug,
}));

export function getServiceSlug(service: DetailedService): string {
  return service.slug.replace(/^\/services\//, "");
}

export function getServiceBySlug(slug: string): DetailedService | undefined {
  return DETAILED_SERVICES.find((service) => getServiceSlug(service) === slug);
}

export const SERVICE_PAGE_META: Record<string, { title: string; description: string }> = {
  "web-design-development": {
    title: "Web Development Services | Skyen Systems",
    description:
      "Marketing sites, SaaS platforms, and web applications built for speed, SEO, and conversion by Skyen Systems.",
  },
  "mobile-apps": {
    title: "Mobile App Development | Skyen Systems",
    description:
      "iOS and Android product development with retention-focused UX, scalable architecture, and store launch support.",
  },
  "brand-ui-ux-design": {
    title: "UI/UX Design Services | Skyen Systems",
    description:
      "Research-led UX, interface systems, and prototypes that improve behaviour before aesthetics.",
  },
  "ai-solutions": {
    title: "AI Solutions | Skyen Systems",
    description:
      "Practical copilots, automation, and LLM integrations with guardrails your team can trust in production.",
  },
  "digital-marketing": {
    title: "Digital Marketing Services | Skyen Systems",
    description:
      "Technical SEO, paid media, and analytics aligned with product goals — not vanity dashboards.",
  },
  "dedicated-teams": {
    title: "Dedicated Teams | Skyen Systems",
    description:
      "Embedded engineers and designers with US timezone overlap, transparent delivery, and flexible scaling.",
  },
};

