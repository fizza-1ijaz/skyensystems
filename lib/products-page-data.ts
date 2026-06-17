export type ProductMetric = {
  value: string;
  label: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductScene = {
  id: string;
  name: string;
  eyebrow: string;
  status: string;
  tagline: string;
  description: string;
  featuresLabel: string;
  features: readonly ProductFeature[];
  mockupLabel: string;
  mockupNote: string;
  previewLabels: readonly string[];
  mockup1Src?: string;
  mockup2Src?: string;
  logoSrc: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waitlistNote?: string;
  showStoreButtons?: boolean;
  appStoreHref?: string;
  playStoreHref?: string;
  metrics: readonly ProductMetric[];
};

export const PRODUCTS_HERO = {
  label: "Products",
  heading: "Digital Products Built, Launched and Improved by Skyen Systems",
  paragraph:
    "Skyen Systems designs and engineers in-house software products across AI learning, education, productivity and language technology. These products use the same strategy, design, engineering, AI integration and growth standards we bring to client projects.",
  primaryCta: { label: "Explore Products", href: "#product-studiely" },
  secondaryCta: { label: "Build Something Similar", href: "/contact-us#inquiry" },
} as const;

export const PRODUCTS_HERO_PROOF_CARDS = [
  {
    title: "AI Products",
    description: "Smart tools and AI-assisted workflows.",
  },
  {
    title: "Mobile Apps",
    description: "App store ready product experiences.",
  },
  {
    title: "Web Platforms",
    description: "Product websites, dashboards and portals.",
  },
  {
    title: "Growth Systems",
    description: "SEO, ASO, analytics and product improvement.",
  },
] as const;

export const PRODUCT_PROCESS_STEPS = [
  "Concept",
  "Design",
  "Engineering",
  "Deployment",
] as const;

export const PRODUCTS_QUOTE = {
  quote: "These are not demo projects — they are real products built by our in-house team.",
  supportingText:
    "Our products show how Skyen Systems thinks, designs, develops, launches and improves digital platforms over time.",
} as const;

export const PRODUCTS_FINAL_CTA = {
  label: "Custom Product Solutions",
  heading: "Looking for a Custom Product Solution?",
  paragraph:
    "Discuss bespoke software, mobile apps, AI platforms, SaaS products and product engineering with our team. We apply the same product standards behind our own products to every client engagement.",
  cta: { label: "Start a Project", href: "/contact-us#inquiry" },
} as const;

/** Index of the product section that receives dark featured treatment. */
export const FEATURED_PRODUCT_INDEX = 1;

export const PRODUCTS: ProductScene[] = [
  {
    id: "studiely",
    name: "Studiely",
    eyebrow: "AI Study Tool",
    status: "LIVE — Available on App Store and Play Store",
    tagline: "Study smarter. Not harder.",
    description:
      "Studiely uses AI to turn notes and textbooks into smart flashcards, adaptive quizzes and personalised revision plans. It is designed for students who want to make every study hour more focused, organised and productive.",
    featuresLabel: "Core Features",
    features: [
      {
        title: "Smart Flashcard Generation",
        description: "Upload notes and let AI build useful flashcard decks automatically.",
      },
      {
        title: "Adaptive Quizzes",
        description: "Practice questions adjust around weak and strong topics.",
      },
      {
        title: "Personalised Revision Plans",
        description:
          "Study schedules are built around exam dates, subject difficulty and revision goals.",
      },
      {
        title: "Progress Tracking",
        description: "Students can see mastered topics, weaker areas and revision progress.",
      },
    ],
    mockupLabel: "Studiely Mobile App",
    mockupNote: "Preview area for latest release screenshots.",
    previewLabels: [
      "Study Planner",
      "Exam Focus",
      "Flashcards",
      "Quiz Practice",
      "Revision Plan",
      "Progress",
    ],
    mockup1Src: "/studiely-mockup.jpeg",
    mockup2Src: "/studiely-mockup2.jpeg",
    logoSrc: "/logo-studiely.jpeg",
    primaryCtaLabel: "Visit Studiely",
    primaryCtaHref: "https://studiely.com/",
    primaryExternal: true,
    secondaryCtaLabel: "Build Something Similar",
    secondaryCtaHref: "/contact-us#inquiry",
    showStoreButtons: true,
    appStoreHref: "https://apps.apple.com/us/app/studiely-your-daily-study-app/id6758246110",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce",
    metrics: [
      { value: "Live", label: "Product" },
      { value: "AI", label: "Core Engine" },
      { value: "App", label: "iOS & Android" },
      { value: "Growth", label: "SEO & ASO" },
    ],
  },
  {
    id: "make-my-lesson",
    name: "Make My Lesson",
    eyebrow: "AI Lesson Planner",
    status: "LIVE — Available on App Store and Play Store",
    tagline: "Great lessons. Half the planning time.",
    description:
      "Make My Lesson is an AI-powered lesson planning platform for teachers and educators. It helps generate structured lesson plans, worksheets, quizzes, assessments and classroom resources faster.",
    featuresLabel: "Core Features",
    features: [
      {
        title: "Curriculum-Aligned Plans",
        description: "Generate lesson plans based on topic, grade, standard and duration.",
      },
      {
        title: "Full Lesson Structure",
        description: "Objectives, activities, notes, assessments and exit tasks in one clear flow.",
      },
      {
        title: "Editable Content",
        description: "Generated plans can be edited and adjusted by the educator.",
      },
      {
        title: "Teaching Resources",
        description: "Worksheets, quizzes and activity ideas support classroom planning.",
      },
    ],
    mockupLabel: "Make My Lesson Platform",
    mockupNote: "Preview area for lesson planner screens.",
    previewLabels: ["Lesson Plan", "Quiz Maker", "Objectives", "Activities", "Worksheet", "Assessment"],
    mockup1Src: "/makemylesson-mockup.jpeg",
    mockup2Src: "/makemylesson-mockup2.jpeg",
    logoSrc: "/logo-makemylesson2.png",
    primaryCtaLabel: "Visit Make My Lesson",
    primaryCtaHref: "https://www.makemylesson.ai/",
    primaryExternal: true,
    secondaryCtaLabel: "Build Education Product",
    secondaryCtaHref: "/contact-us#inquiry",
    showStoreButtons: true,
    appStoreHref: "https://www.makemylesson.ai/",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.skyensolutions.makemylesson.make_my_lesson",
    metrics: [
      { value: "Live", label: "Product" },
      { value: "<60s", label: "Plan Flow" },
      { value: "AI", label: "Content System" },
      { value: "Full", label: "Lesson Structure" },
    ],
  },
  {
    id: "linguatude",
    name: "Linguatude",
    eyebrow: "AI Language Learning",
    status: "In Development",
    tagline: "Finally become fluent. Not just functional.",
    description:
      "Linguatude combines AI conversation practice, vocabulary learning and real-world language scenarios to help learners build confidence at their own pace.",
    featuresLabel: "Core Features Planned",
    features: [
      {
        title: "AI Conversation Partner",
        description:
          "Practice with an AI tutor that responds naturally and adjusts to the learner's level.",
      },
      {
        title: "Spaced Repetition Vocabulary",
        description: "Words return at useful moments to improve long-term retention.",
      },
      {
        title: "Real-World Scenarios",
        description: "Practice travel, business, restaurant and daily conversations.",
      },
      {
        title: "Progress Milestones",
        description: "Clear achievement levels support motivation and consistency.",
      },
    ],
    mockupLabel: "Linguatude Coming Soon",
    mockupNote: "Preview area for product concept screens.",
    previewLabels: ["AI Tutor", "Fluency Path", "Conversation", "Vocabulary", "Scenarios", "Milestones"],
    mockup1Src: "/linguatude-mockup1.jpeg",
    mockup2Src: "/linguatude-mockup2.jpeg",
    logoSrc: "/logo-linguatude.jpg",
    primaryCtaLabel: "Visit Linguatude",
    primaryCtaHref: "https://linguatude.com/",
    primaryExternal: true,
    secondaryCtaLabel: "Discuss AI Product",
    secondaryCtaHref: "/contact-us#inquiry",
    metrics: [
      { value: "AI", label: "Conversation" },
      { value: "Adaptive", label: "Difficulty" },
      { value: "Speech", label: "Practice" },
      { value: "Progress", label: "Milestones" },
    ],
  },
];
