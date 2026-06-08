import { FAQ_TEAM_LOCATION_ANSWER } from "@/lib/company-offices";

/** Compact trust strip items shown directly below the hero. */
export const TRUST_STRIP_ITEMS = [
  { label: "PSEB Registered", detail: "Government-recognized software export house" },
  { label: "20+ Projects", detail: "Delivered for US, UK, GCC & regional clients" },
  { label: "4-Hour Response", detail: "Direct access to leads and engineers" },
  { label: "Dual-Region Ops", detail: "Bahrain head office · Lahore delivery centre" },
] as const;

export const PROBLEM_SOLUTION = {
  eyebrow: "The reality",
  headline: "Most businesses are either invisible online or paying too much to fix it.",
  problem:
    "You have seen the quotes. $5,000 for a five-page website. $2,000 a month to post three times a week on Instagram. Agencies add overhead; freelancers disappear mid-project.",
  solution:
    "We removed agency overhead and kept capability. One accountable team delivers websites, apps, AI, and growth — at a fraction of typical US agency cost, with the standards of a product company.",
  cta: { label: "How we work", href: "/about/who-we-are" },
} as const;

/** @dummy — placeholder client engagements until real case studies are published. */
export const CASE_STUDIES = [
  {
    client: "Summit Legal Group",
    industry: "Professional Services",
    challenge: "Outdated website and no client intake automation.",
    outcome: "42% more qualified leads in 90 days after launch.",
    services: "Web platform · CRM integration · SEO",
  },
  {
    client: "BrightPath Academy",
    industry: "Education",
    challenge: "Fragmented LMS tools and poor mobile experience for students.",
    outcome: "3.2× increase in daily active learners within one term.",
    services: "Mobile app · LMS · UI/UX redesign",
  },
  {
    client: "NovaRetail Co.",
    industry: "E-commerce",
    challenge: "Slow storefront and disconnected inventory across channels.",
    outcome: "28% higher checkout conversion after platform rebuild.",
    services: "E-commerce · API integrations · Performance",
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    title: "PSEB Registered",
    body: "Incorporated in Bahrain (CR No. 190698-1) with a PSEB-registered regional office in Lahore — formal legal entity, regulated operations, and professional accountability.",
  },
  {
    title: "US Market Focused",
    body: "We understand American business culture, customer expectations, and market dynamics. Our work is built for US users, not adapted for them as an afterthought.",
  },
  {
    title: "Full Stack",
    body: "Website. App. Design. AI. Marketing. One team handles everything — no briefing seven different vendors and hoping they work together.",
  },
  {
    title: "Long-Term Partners",
    body: "We measure success in client relationships that last years, not projects that close and move on. Your growth is how we grow.",
  },
] as const;

export const AI_AUTOMATION_HIGHLIGHT = {
  eyebrow: "AI & Automation",
  headline: "Practical AI that ships — not slide decks.",
  description:
    "We integrate LLMs, workflow automation, and intelligent features into products your team actually uses. From customer-facing copilots to back-office automation, every build is scoped for measurable ROI.",
  capabilities: [
    "LLM integration & custom copilots",
    "Workflow automation & data pipelines",
    "AI-powered search, chat, and support",
    "Document processing & intelligent routing",
  ],
  cta: { label: "Explore AI solutions", href: "/services/ai-solutions" },
} as const;

/** @dummy — representative stack; refine with official preferred technologies list. */
export const TECHNOLOGY_STACK = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue",
      "TypeScript",
      "HTML5",
      "CSS",
      "JavaScript",
      "Material UI",
      "REST API",
    ],
  },
  { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "CI/CD"] },
  { category: "AI & Data", items: ["OpenAI", "LangChain", "Vector DBs", "Analytics"] },
  { category: "Design", items: ["Figma", "Design Systems", "Prototyping", "User Research"] },
] as const;

/** @dummy — placeholder testimonials until verified client quotes are approved. */
export const TESTIMONIALS = [
  {
    quote:
      "Skyen Systems delivered a polished platform on time — clear communication, strong engineering, and no agency fluff.",
    name: "Operations Lead",
    company: "US small business",
    outcome: "Platform launched on schedule",
  },
  {
    quote:
      "They treated our MVP like their own product. Weekly demos, honest scope conversations, and zero surprise invoices.",
    name: "Founder",
    company: "SaaS startup · placeholder",
    outcome: "MVP shipped in 8 weeks",
  },
  {
    quote:
      "Our intake workflow went from manual spreadsheets to a fully automated portal. Support tickets dropped within the first month.",
    name: "Practice Manager",
    company: "Professional services firm · placeholder",
    outcome: "35% fewer support requests",
  },
] as const;

export const HOME_FAQ_ITEMS = [
  {
    question: "Do your prices include ad spend?",
    answer:
      "No. Management fees cover our work; ad spend is paid directly by you to the platforms.",
  },
  {
    question: "Where is your team located?",
    answer: FAQ_TEAM_LOCATION_ANSWER,
  },
  {
    question: "How do payments work?",
    answer:
      "Packages are typically 50% upfront and 50% on delivery; retainers are billed monthly.",
  },
  {
    question: "How is this different from a freelancer?",
    answer:
      "You get a full multidisciplinary team with one point of contact, documented delivery, and long-term support.",
  },
  {
    question: "How much does a software project cost?",
    answer:
      "Starter websites from PKR 420,000 (~USD 1,500). Growth-tier web applications from PKR 1,120,000 (~USD 4,000). Complex platforms are quoted individually — always fixed price.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A standard business website typically ships in 3–5 weeks. Growth-tier web applications run 6–10 weeks. Mobile apps receive a specific timeline in every proposal before work begins.",
  },
] as const;
