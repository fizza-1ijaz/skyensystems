import type { CapabilityVisualId } from "@/components/landing/landing-data";

export const SERVICES_OVERVIEW = {
  label: "Our Services",
  heading: "Digital Product Services for Australian Businesses",
  paragraph:
    "From strategy and UI/UX design to web development, mobile app development, AI automation, SEO, and long-term support, Skyen Systems provides the digital services Australian businesses need to build, launch, and grow online.",
} as const;

export const SERVICES_OVERVIEW_CARDS = [
  {
    visual: "web" as CapabilityVisualId,
    title: "Web Development for Australian Businesses",
    description:
      "We build fast, secure, and SEO-ready websites, landing pages, business portals, dashboards, SaaS platforms, and custom web applications for Australian companies and startups.",
    cta: { label: "Explore Web Development", href: "/services/web-design-development" },
  },
  {
    visual: "mobile" as CapabilityVisualId,
    title: "Mobile App Development for Australian Startups",
    description:
      "We design and develop Android, iOS, and cross-platform mobile apps with clean UI/UX, secure backend systems, APIs, analytics, and launch support for Australian and US businesses.",
    cta: { label: "Build Your Mobile App", href: "/services/mobile-apps" },
  },
  {
    visual: "ai" as CapabilityVisualId,
    title: "AI Automation Services for Australian Companies",
    description:
      "We build AI chatbots, AI assistants, workflow automation tools, content systems, LLM integrations, and smart business automation solutions for Australian businesses that want to save time, reduce manual work, and improve customer experience.",
    cta: { label: "Explore AI Solutions", href: "/services/ai-solutions" },
  },
  {
    visual: "design" as CapabilityVisualId,
    title: "UI/UX Design for Apps & Websites",
    description:
      "We create modern website layouts, mobile app screens, dashboards, wireframes, prototypes, and design systems that improve usability, build trust, and increase conversions.",
    cta: { label: "View UI/UX Design", href: "/services/brand-ui-ux-design" },
  },
  {
    visual: "growth" as CapabilityVisualId,
    title: "SEO & Digital Marketing for Growth",
    description:
      "We help Australian and US businesses grow with SEO, content strategy, paid ads, analytics, conversion tracking, app store optimization, and performance marketing campaigns.",
    cta: { label: "Grow Your Business", href: "/services/digital-marketing" },
  },
  {
    visual: "teams" as CapabilityVisualId,
    title: "Dedicated Teams",
    description:
      "Hire a reliable remote team of developers, designers, AI engineers, and digital marketing specialists for ongoing product development, maintenance, technical support, and long-term scaling.",
    cta: { label: "Hire a Dedicated Team", href: "/services/dedicated-teams" },
  },
] as const;

export const FEATURED_PRODUCTS = {
  heading: "Digital Products, Websites & Growth Systems We've Built",
  subheading:
    "Skyen Systems builds and grows digital products from the ground up, including apps, websites, AI platforms, SEO content, landing pages, and marketing systems. Our own products show the same strategy, design, development, and growth standards we bring to Australian and US businesses.",
} as const;

export const FEATURED_PRODUCTS_CARDS = [
  {
    name: "Studiely — AI Study App for Students",
    category: "EdTech · Live",
    description:
      "Studiely is an AI-powered study app that helps students plan daily learning, prepare for exams, generate notes, practice quizzes, and improve study consistency.",
    metric: "App Store & Play Store",
    metricLabel: "Distribution",
    logo: "/logo-studiely.jpeg",
    href: "https://studiely.com",
    backgroundImage: "/images/Studiely img.jpeg",
  },
  {
    name: "Make My Lesson — AI Teaching Assistant",
    category: "EdTech · Live",
    description:
      "Make My Lesson helps teachers and professors create lesson plans, worksheets, quizzes, tests, assessments, presentations, and classroom activities faster with AI-powered teaching tools.",
    metric: "App Store & Play Store",
    metricLabel: "Distribution",
    logo: "/logo-makemylesson.png",
    href: "https://makemylesson.ai",
    backgroundImage: "/images/MML img.png",
  },
  {
    name: "Linguatude — AI Language Learning Platform",
    category: "Language · In development",
    description:
      "Linguatude supports learners with English test preparation, speaking practice, writing support, vocabulary improvement, and AI-powered language learning tools.",
    metric: "Multi-region",
    metricLabel: "Client reach",
    logo: "/logo-linguatude.jpg",
    href: "https://linguatude.com",
    backgroundImage: "/images/linguatude img.png",
  },
] as const;

export const PROCESS_SECTION = {
  label: "Our Process",
  heading: "Our Software, App & AI Development Process",
  subheading:
    "We use a clear development process to plan, design, build, launch, and improve websites, mobile apps, AI automation systems, SaaS platforms, and digital products for Australian and US businesses.",
} as const;

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
  cta: { label: "About us", href: "/about" },
} as const;

export const INDUSTRIES_SECTION = {
  label: "Industries We Serve",
  heading: "Industries We Help Build, Launch and Grow",
  paragraph:
    "Skyen Systems helps Australian and US businesses across education, SaaS, professional services, healthcare, e-commerce, real estate, agencies, and startups build websites, mobile apps, AI automation systems, software platforms, UI/UX designs, SEO strategies, and digital marketing systems. Our team supports every stage of digital growth, from product planning and development to launch, optimization, and long-term scaling.",
} as const;

export const INDUSTRIES_CARDS = [
  {
    title: "Education & EdTech",
    tagline:
      "AI study apps, LMS platforms, test preparation tools, and teacher-focused digital learning products.",
    description:
      "Skyen Systems builds EdTech websites, AI study apps, learning management systems, quiz platforms, teacher assistant tools, test preparation products, and student-facing mobile apps for education businesses that need scalable learning technology.",
    cta: { label: "Build an EdTech Product", href: "/contact-us" },
  },
  {
    title: "Professional Services",
    tagline:
      "Websites, client portals, booking systems, CRM workflows, and lead generation tools for service businesses.",
    description:
      "Skyen Systems creates credibility-focused websites, service pages, client portals, booking systems, CRM-connected workflows, landing pages, and lead generation systems for consultants, legal firms, accounting firms, agencies, and professional service providers.",
    cta: { label: "Grow Your Service Business", href: "/contact-us" },
  },
  {
    title: "SaaS & Startups",
    tagline: "MVPs, SaaS platforms, dashboards, subscription systems, and scalable software products.",
    description:
      "Skyen Systems helps startups and SaaS companies plan, design, build, launch, and improve MVPs, SaaS platforms, admin dashboards, subscription systems, AI product features, analytics tools, and cloud-based software products.",
    cta: { label: "Launch Your MVP", href: "/contact-us" },
  },
  {
    title: "Healthcare & Wellness",
    tagline:
      "Healthcare websites, appointment systems, patient portals, dashboards, and secure digital experiences.",
    description:
      "Skyen Systems develops healthcare websites, appointment booking systems, patient portals, service platforms, admin dashboards, and user-friendly digital experiences for clinics, wellness brands, health service providers, and medical businesses.",
    cta: { label: "Build a Health Platform", href: "/contact-us" },
  },
  {
    title: "E-commerce & Retail",
    tagline:
      "Online stores, product pages, checkout flows, SEO, analytics, and conversion-focused marketing systems.",
    description:
      "Skyen Systems builds e-commerce websites, product pages, landing pages, checkout flows, analytics setups, SEO structures, paid marketing funnels, and conversion-focused digital systems for online stores and retail businesses.",
    cta: { label: "Build Your Online Store", href: "/contact-us" },
  },
  {
    title: "Real Estate & Property",
    tagline:
      "Property websites, listing platforms, lead funnels, CRM integrations, and digital marketing systems.",
    description:
      "Skyen Systems creates real estate websites, property listing platforms, landing pages, lead generation funnels, booking flows, CRM integrations, and SEO-focused marketing systems for property agencies, real estate businesses, and developers.",
    cta: { label: "Grow Your Property Brand", href: "/contact-us" },
  },
  {
    title: "Agencies & Marketing Teams",
    tagline:
      "White-label development, UI/UX support, landing pages, SEO execution, and dedicated remote teams.",
    description:
      "Skyen Systems supports agencies and marketing teams with white-label web development, mobile app development, UI/UX design, landing pages, SEO execution, automation systems, and dedicated remote teams for ongoing client delivery.",
    cta: { label: "Partner With Skyen", href: "/contact-us" },
  },
  {
    title: "Australian & US Businesses",
    tagline:
      "Remote software, web, app, AI, SEO, and digital growth support for businesses across Australia and the USA.",
    description:
      "Skyen Systems provides remote software development, web development, mobile app development, AI automation, UI/UX design, SEO, digital marketing, and long-term product support for Australian and US businesses that need one reliable digital team.",
    cta: { label: "Start Your Project", href: "/contact-us" },
  },
] as const;

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

export const WHY_CHOOSE_SECTION = {
  label: "Why Choose Us",
  heading: "Why Australian & US Businesses Choose Skyen Systems",
  paragraph:
    "Skyen Systems brings strategy, UI/UX design, software development, AI automation, SEO, and digital marketing into one connected team. We help Australian and US businesses build reliable websites, mobile apps, software platforms, and growth systems without the confusion of managing multiple vendors.",
  cta: { label: "Build With Skyen Systems", href: "/contact-us" },
} as const;

export const WHY_CHOOSE_ITEMS = [
  {
    title: "One Accountable Team",
    body: "Work with one team for strategy, design, web development, mobile app development, AI automation, SEO, digital marketing, launch, and long-term support.",
  },
  {
    title: "Product-First Thinking",
    body: "We do not just build screens and code. We focus on business goals, user experience, conversion, scalability, and long-term product success.",
  },
  {
    title: "AI-Ready Development",
    body: "Skyen Systems builds practical AI solutions including AI chatbots, AI assistants, workflow automation tools, LLM integrations, and smart business systems.",
  },
  {
    title: "SEO & Growth Mindset",
    body: "Our websites and platforms are planned with search visibility, content structure, technical SEO, conversion tracking, and digital growth in mind.",
  },
  {
    title: "Global Remote Delivery",
    body: "With Bahrain presence, Pakistan delivery strength, and remote collaboration, we support Australian and US businesses with clear communication and reliable execution.",
  },
  {
    title: "Long-Term Support",
    body: "After launch, we support your product with updates, maintenance, SEO improvements, marketing campaigns, analytics, new features, and performance optimization.",
  },
] as const;

export const AI_AUTOMATION_HIGHLIGHT = {
  eyebrow: "AI & Automation",
  headline: "Practical AI that ships — not slide decks.",
  description:
    "We integrate LLMs, workflow automation, and intelligent features into products your team actually uses. From customer-facing copilots to back-office automation, every build is scoped for measurable ROI.",
  capabilities: [
    {
      title: "LLM integration & custom copilots",
      image: "/images/LLM.png",
    },
    {
      title: "Workflow automation & data pipelines",
      image: "/images/Pipeline.png",
    },
    {
      title: "AI-powered search, chat, and support",
      image: "/images/AIchatbot.png",
    },
    {
      title: "Document processing & intelligent routing",
      image: "/images/Docprocessing.png",
    },
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

export const LANDING_CTA = {
  heading: "Let's Build the Digital Product Your Business Needs to",
  headingAccent: "Grow.",
  paragraph:
    "From websites and mobile apps to AI automation, SaaS platforms, UI/UX design, SEO, and digital marketing, Skyen Systems helps Australian and US businesses move from idea to launch with one accountable team.",
  servicePills: [
    "Web Development",
    "Mobile Apps",
    "AI Automation",
    "UI/UX Design",
    "SEO & Digital Marketing",
  ],
  stats: [
    { value: "20+", label: "Projects Delivered" },
    { value: "4h", label: "Response Standard" },
    { value: "AUS + USA", label: "Client Support" },
  ],
  form: {
    title: "Start with a clear project brief.",
    badge: "Free review",
    subtitle:
      "Share the basics. Our team will review your project and guide you with the next steps.",
    submitLabel: "Book a discovery call",
    footer:
      "Response within 4 business hours. No pressure — just a practical project direction.",
    services: [
      "Web Development",
      "Mobile Apps",
      "AI Automation",
      "UI/UX Design",
      "SEO & Digital Marketing",
      "SaaS Platform",
      "Other",
    ],
    targetMarkets: ["Australia", "United States", "Australia & United States", "Other"],
  },
} as const;

export const HOME_FAQ_SECTION = {
  label: "FAQ",
  heading: "Questions About Skyen Systems, Answered Clearly",
} as const;

export const HOME_FAQ_ITEMS = [
  {
    question: "What does Skyen Systems do?",
    answer:
      "Skyen Systems is a digital product and software development company that helps businesses plan, design, develop, launch and grow websites, mobile apps, AI solutions, SaaS platforms, UI/UX experiences, SEO systems and dedicated software development teams.",
  },
  {
    question: "Who does Skyen Systems work with?",
    answer:
      "Skyen Systems works with startups, growing businesses, agencies and companies in Australia, the USA and other global markets that need web development, mobile app development, AI automation, UI/UX design, digital marketing or dedicated development support.",
  },
  {
    question: "Can Skyen Systems build a complete digital product?",
    answer:
      "Yes. Skyen Systems can support the full digital product journey, including product strategy, UI/UX design, web development, mobile app development, backend development, AI integration, testing, launch support, SEO, ASO and long-term growth.",
  },
  {
    question: "Does Skyen Systems provide web development services?",
    answer:
      "Yes. Skyen Systems provides web development services for business websites, landing pages, SaaS websites, dashboards, portals, admin panels and custom web applications designed for performance, search visibility and business growth.",
  },
  {
    question: "Does Skyen Systems develop mobile apps?",
    answer:
      "Yes. Skyen Systems develops Android apps, iOS apps, cross-platform mobile apps, MVP apps, SaaS mobile products, AI-powered apps, EdTech apps and business mobile applications for different industries and use cases.",
  },
  {
    question: "Can Skyen Systems build AI solutions for businesses?",
    answer:
      "Yes. Skyen Systems builds AI assistants, AI chatbots, workflow automation systems, AI content tools, smart recommendations, LLM integrations and AI-powered features for websites, mobile apps, SaaS platforms and business workflows.",
  },
  {
    question: "Can Skyen Systems help with SEO and digital growth?",
    answer:
      "Yes. Skyen Systems supports SEO, technical SEO, content planning, AEO, GEO, ASO, analytics setup, conversion tracking and digital marketing strategies to help businesses improve online visibility, search performance and growth.",
  },
  {
    question: "How can I start a project with Skyen Systems?",
    answer:
      "You can start by sharing your project idea, business goals, required features, timeline and budget through the contact page. Skyen Systems will review your requirements and recommend the right roadmap, scope, technology direction and next step.",
  },
] as const;
