export const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Team",
    description:
      "Embedded engineers, designers, and leads operating as an extension of your product organization — monthly engagement with defined capacity.",
  },
  {
    title: "Fixed Scope Project",
    description:
      "Discovery-defined deliverables, milestones, and investment — ideal for websites, apps, and platforms with clear boundaries.",
  },
  {
    title: "Product Development Partner",
    description:
      "End-to-end ownership from strategy through launch and iteration — one team accountable for outcomes, not ticket output.",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, modernization roadmaps, and delivery audits for teams needing senior engineering judgment without full build scope.",
  },
] as const;

export const COST_FACTORS = [
  {
    title: "Scope",
    description: "Feature depth, user roles, workflows, and the number of surfaces to design and build.",
  },
  {
    title: "Integrations",
    description: "Third-party APIs, payment systems, CRMs, legacy data sources, and authentication models.",
  },
  {
    title: "Team size",
    description: "Engineering, design, and delivery leadership required to meet quality and timeline expectations.",
  },
  {
    title: "Delivery timeline",
    description: "Parallel workstreams, accelerated schedules, and timezone coverage for faster time-to-market.",
  },
  {
    title: "Compliance requirements",
    description: "Security standards, data residency, audit trails, and industry-specific regulatory constraints.",
  },
  {
    title: "Infrastructure complexity",
    description: "Cloud architecture, DevOps, scalability targets, observability, and ongoing operational needs.",
  },
] as const;

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

export const PRICING_FAQ_ITEMS = [
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For projects over PKR 560,000 (approx. USD 2,000), we offer milestone-based payment schedules — typically 50% at project start and 50% on completion. For larger projects, a 3-stage payment plan is available. Contact us to discuss.",
  },
  {
    question: "What is included in the support period?",
    answer:
      "The support period covers bug fixes, minor content updates (text/image swaps), and technical questions about the delivered work. It does not cover new features or scope additions, which are quoted separately. Support is provided via email with a 1-business-day response time.",
  },
  {
    question: "Can I start with Starter and upgrade later?",
    answer:
      "Yes. We design all projects with future growth in mind. If you start with a Starter website and later need e-commerce, a client portal, or additional functionality, we can scope and add those as a separate project. There are no lock-ins.",
  },
  {
    question: "How does Dedicated Teams pricing work?",
    answer:
      "Dedicated Teams are billed monthly in advance. Pricing depends on the number of team members, their seniority, and the engagement model (full-time vs. part-time). Engagements require a minimum 3-month commitment. Contact us for a custom quote based on your specific team needs.",
  },
] as const;
