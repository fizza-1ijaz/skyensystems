export const PRICING_HERO = {
  label: "Pricing",
  heading: "Starting Prices for Websites, Apps, AI and Dedicated Teams",
  paragraph:
    "Skyen Systems provides transparent starting price ranges for digital product development. Final pricing depends on your project scope, features, design needs, backend complexity, AI requirements, timeline and support model.",
  primaryCta: { label: "Request a Custom Quote", href: "/contact-us#inquiry" },
  secondaryCta: { label: "View Starting Prices", href: "#service-pricing" },
} as const;

export const HERO_PRICING_SUMMARY = {
  heading: "Clear pricing starts with clear scope.",
  items: [
    {
      title: "Starting from $500",
      description: "For focused UI/UX design and smaller digital tasks.",
    },
    {
      title: "Starting from $750",
      description: "For business websites and landing page projects.",
    },
    {
      title: "Starting from $1,200/month",
      description: "For dedicated team or long-term support needs.",
    },
  ],
} as const;

export const SERVICE_PRICING_SECTION = {
  label: "Service Pricing",
  heading: "Choose the Service You Need",
  paragraph:
    "These starting prices help with early planning. Final quotes are confirmed after reviewing project scope, features, timeline and support needs.",
} as const;

export const CURRENCY_CONVERTER_SECTION = {
  label: "USD to PKR",
  heading: "Estimate Local Investment in Pakistani Rupees",
  paragraph:
    "For Pakistan-based clients, use this calculator to convert USD starting prices into indicative PKR amounts. Final amounts are confirmed at engagement and invoice stage.",
} as const;

export type ServicePricingCard = {
  title: string;
  description: string;
  price: string;
  priceNote: string;
  included: readonly string[];
  cta: string;
  ctaLabel: string;
};

export const SERVICE_PRICING_CARDS: readonly ServicePricingCard[] = [
  {
    title: "Website Development",
    description:
      "Business websites, landing pages, SaaS websites, dashboards, portals and custom web applications.",
    price: "Starting from $750",
    priceNote: "custom quote after scope",
    included: [
      "Website planning",
      "Responsive development",
      "SEO-ready structure",
      "Launch support",
    ],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, cross-platform, MVP, SaaS, business and AI-powered mobile apps.",
    price: "Starting from $3,000",
    priceNote: "depends on features",
    included: ["App strategy", "UI/UX design", "Frontend + backend", "Launch roadmap"],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
  {
    title: "AI Solutions & Automation",
    description:
      "AI chatbots, assistants, LLM integrations, workflow automation and AI-powered tools.",
    price: "Starting from $1,500",
    priceNote: "depends on AI flow",
    included: [
      "AI workflow planning",
      "API integration",
      "Automation logic",
      "Testing & refinement",
    ],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
  {
    title: "UI/UX Design",
    description:
      "App UI, website UI, SaaS dashboards, product design, Figma systems and prototypes.",
    price: "Starting from $500",
    priceNote: "based on screens",
    included: ["User flow planning", "Figma screens", "Prototypes", "Developer handoff"],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "SEO, technical SEO, content marketing, AEO, GEO, analytics, ASO and digital growth.",
    price: "Starting from $600/month",
    priceNote: "monthly support",
    included: ["SEO audit", "Keyword strategy", "Content planning", "Analytics setup"],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
  {
    title: "Dedicated Software Team",
    description:
      "Remote developers, app developers, web developers, AI talent, UI/UX designers and QA support.",
    price: "Starting from $1,200/month",
    priceNote: "monthly team support",
    included: ["Role planning", "Team setup", "Remote delivery", "Long-term support"],
    cta: "/contact-us#inquiry",
    ctaLabel: "Get Quote",
  },
] as const;

export const PACKAGE_DIRECTION_SECTION = {
  label: "Package Direction",
  heading: "Simple Package Levels for Early Planning",
  paragraph:
    "These starting ranges help clients understand the difference between a small build, growth project and custom product roadmap.",
} as const;

export type PackageDirectionCard = {
  badge: string;
  title: string;
  price: string;
  description: string;
  included: readonly string[];
  featured?: boolean;
};

export const PACKAGE_DIRECTION_PACKAGES: readonly PackageDirectionCard[] = [
  {
    badge: "Launch",
    title: "Launch Package",
    price: "$750+",
    description: "For small websites, landing pages, MVP discovery or focused design work.",
    included: ["Clear scope", "Essential pages or screens", "Basic launch support"],
  },
  {
    badge: "Most Flexible",
    title: "Growth Package",
    price: "$1,500+",
    description: "For websites, apps, UI/UX redesigns, SEO growth and automation needs.",
    included: ["Strategy + design", "Development support", "SEO or analytics setup"],
    featured: true,
  },
  {
    badge: "Scale",
    title: "Scale Package",
    price: "$4,000+",
    description: "For SaaS platforms, mobile apps, AI products or dedicated software teams.",
    included: ["Custom roadmap", "Backend or AI features", "Long-term delivery support"],
  },
] as const;

export const ENGAGEMENT_MODELS_SECTION = {
  label: "Engagement Models",
  heading: "Flexible Ways to Work With Skyen Systems",
} as const;

export const ENGAGEMENT_MODELS = [
  {
    title: "Fixed Scope Project",
    description:
      "Best for websites, redesigns, landing pages, MVPs and defined project work.",
  },
  {
    title: "Monthly Growth Support",
    description:
      "Best for SEO, content, app updates, website improvements, analytics and marketing.",
  },
  {
    title: "Dedicated Team",
    description:
      "Best for long-term development, product roadmaps, SaaS, AI products and scaling teams.",
  },
  {
    title: "Product Partner",
    description:
      "Best for businesses that need strategy, design, development and growth together.",
  },
] as const;

export const PRICING_FACTORS_SECTION = {
  label: "Pricing Factors",
  heading: "What Affects Project Pricing?",
  paragraph:
    "Pricing depends on what you want to build, how complex it is, and how much support is needed before and after launch.",
} as const;

export const PRICING_FACTORS = [
  "Project size",
  "Number of pages or screens",
  "UI/UX design level",
  "Backend complexity",
  "AI features",
  "Third-party integrations",
  "Timeline urgency",
  "Post-launch support",
] as const;

export const PRICING_NOTE_SECTION = {
  label: "Important Pricing Note",
  heading: "Final Pricing Depends on Scope",
  paragraph:
    "All prices shown are starting ranges. Final pricing depends on project scope, number of pages or screens, design complexity, backend requirements, AI features, integrations, timeline and post-launch support needs.",
} as const;

export const PRICING_FAQ_SECTION = {
  label: "Pricing FAQ",
  heading: "Questions Before You Request a Quote",
} as const;

export const PRICING_FAQ_ITEMS = [
  {
    question: "Are these fixed prices?",
    answer:
      "No. These are starting prices for early planning. Final pricing is confirmed after Skyen Systems reviews your scope, required features, design needs, backend requirements and timeline.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Yes. Many clients start with a small website, MVP, UI/UX phase, SEO audit or discovery project before moving into full development or monthly support.",
  },
  {
    question: "Do you offer monthly support?",
    answer:
      "Yes. Skyen Systems can provide monthly support for SEO, digital marketing, app updates, website improvements, AI automation, analytics and dedicated software teams.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "Our team reviews your request, understands the project scope, identifies the right service model, and responds with the next recommended step, such as a discovery call, project scope or proposal.",
  },
] as const;

export const PRICING_FINAL_CTA = {
  label: "Need a Clear Price?",
  heading: "Request a Custom Quote for Your Project",
  paragraph:
    "Share your project details and Skyen Systems will help you understand the best pricing model, scope, timeline and next step.",
  cta: { label: "Request a Custom Quote", href: "/contact-us#inquiry" },
} as const;

export const PRICING_TRUST_ITEMS = [
  {
    label: "Enterprise Delivery",
    body: "Structured delivery, milestone visibility, and engineering practices built for organizations that cannot afford surprises.",
  },
  {
    label: "AI & Software Engineering",
    body: "Product-grade development across web, mobile, AI systems, and platform architecture — one accountable team.",
  },
  {
    label: "Bahrain Headquarters",
    body: "Qismat Ventures W.L.L. — legal entity, client contracts, and executive accountability from Manama.",
  },
  {
    label: "Pakistan Delivery Centre",
    body: "PSEB-registered Lahore office — engineering execution, QA, and product delivery at scale.",
  },
] as const;

export const INVESTMENT_RANGES = [
  {
    label: "Starter Projects",
    range: "$3k–10k",
    note: "Websites, brand launches, and focused digital foundations.",
  },
  {
    label: "Business Platforms",
    range: "$10k–30k",
    note: "Web apps, integrations, and multi-surface product builds.",
  },
  {
    label: "Enterprise Systems",
    range: "$30k+",
    note: "Custom platforms, AI systems, and long-term delivery partnerships.",
  },
] as const;
