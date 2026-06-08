export type ProductMetric = {
  value: string;
  label: string;
};

export type ProductScene = {
  id: string;
  name: string;
  eyebrow: string;
  status: string;
  tagline: string;
  paragraphs: string[];
  platforms: string[];
  tech: string[];
  mockupLabel: string;
  mockupNote: string;
  mockup1Src?: string;
  mockup2Src?: string;
  logoSrc: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waitlistPlaceholder?: string;
  waitlistButtonLabel?: string;
  waitlistNote?: string;
  showStoreButtons?: boolean;
  appStoreHref?: string;
  playStoreHref?: string;
  metrics: readonly ProductMetric[];
};

export const PRODUCT_PROCESS_STEPS = [
  "Concept",
  "Design",
  "Engineering",
  "Deployment",
] as const;

/** Index of the product section that receives dark featured treatment. */
export const FEATURED_PRODUCT_INDEX = 1;

export const PRODUCTS: ProductScene[] = [
  {
    id: "studiely",
    name: "Studiely",
    eyebrow: "AI STUDY TOOL",
    status: "LIVE — Available on App Store and Play Store",
    tagline: "Study smarter. Not harder.",
    paragraphs: [
      "Studiely uses AI to turn your notes and textbooks into smart flashcards, adaptive quizzes, and personalised revision plans. Designed for students who want to make every study hour count.",
    ],
    platforms: ["Core Features"],
    tech: [
      "Smart Flashcard Generation: Upload your notes — Studiely AI extracts key concepts and builds flashcard decks automatically.",
      "Adaptive Quizzes: Questions adjust to your performance in real time. Harder on what you struggle with, lighter on what you know.",
      "Personalised Revision Plans: Tell Studiely your exam date. It builds a revision schedule covering everything, prioritised by difficulty.",
      "Progress Tracking: See what you've mastered and what needs more work — at a glance.",
      "Study Groups: Share decks and compete with classmates on quiz leaderboards.",
    ],
    mockupLabel: "Studiely - Mobile App",
    mockupNote: "Live previews from our latest release.",
    mockup1Src: "/studiely-mockup.jpeg",
    mockup2Src: "/studiely-mockup2.jpeg",
    logoSrc: "/logo-studiely.jpeg",
    primaryCtaLabel: "Visit Studiely",
    primaryCtaHref: "https://studiely.com",
    primaryExternal: true,
    secondaryCtaLabel: "Build something similar",
    secondaryCtaHref: "/contact-us?service=mobile-app",
    showStoreButtons: true,
    appStoreHref: "https://apps.apple.com/us/app/studiely-your-daily-study-app/id6758246110",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce",
    metrics: [
      { value: "Live", label: "Production" },
      { value: "24/7", label: "Availability" },
      { value: "AI", label: "Core engine" },
      { value: "99.9%", label: "Uptime target" },
    ],
  },
  {
    id: "make-my-lesson",
    name: "Make My Lesson",
    eyebrow: "AI LESSON PLANNER",
    status: "LIVE — Available on App Store and Play Store",
    tagline: "Great lessons. Half the planning time.",
    paragraphs: [
      "An AI-powered lesson plan generator built for teachers. Input your topic, grade level, curriculum standard, and available time — get a complete, editable lesson plan in seconds.",
    ],
    platforms: ["Core Features"],
    tech: [
      "Curriculum-Aligned Plans: Compatible with Common Core, UK National Curriculum, and other major frameworks.",
      "Full Lesson Structure: Objectives, warm-up, main activity, differentiation notes, exit ticket — complete.",
      "One-Click Editable: Every generated plan is fully editable. Your plan, your voice — just faster.",
      "Resource Suggestions: Linked worksheets, videos, and discussion prompts relevant to your topic.",
      "Lesson Bank: Save and reuse past plans. Build your own library over time.",
    ],
    mockupLabel: "Make My Lesson - AI Platform",
    mockupNote: "Live previews from our latest release.",
    mockup1Src: "/makemylesson-mockup.jpeg",
    mockup2Src: "/makemylesson-mockup2.jpeg",
    logoSrc: "/logo-makemylesson2.png",
    primaryCtaLabel: "Visit Make My Lesson",
    primaryCtaHref: "https://makemylesson.ai",
    primaryExternal: true,
    showStoreButtons: true,
    appStoreHref: "https://makemylesson.ai",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.skyensolutions.makemylesson.make_my_lesson",
    metrics: [
      { value: "Live", label: "Production" },
      { value: "<60s", label: "Plan generation" },
      { value: "Multi", label: "Curriculum support" },
      { value: "Full", label: "Lesson structure" },
    ],
  },
  {
    id: "linguatude",
    name: "Linguatude",
    eyebrow: "AI LANGUAGE LEARNING",
    status: "In Development",
    tagline: "Finally become fluent. Not just functional.",
    paragraphs: [
      "Linguatude combines AI conversation practice, spaced repetition vocabulary, and real-world context to take you from beginner to confident speaker — at your own pace.",
    ],
    platforms: ["Core Features (Planned)"],
    tech: [
      "AI Conversation Partner: Practice speaking with an AI tutor that responds naturally, corrects gently, and adjusts to your level.",
      "Spaced Repetition Vocabulary: Words surface at the scientifically optimal moment for long-term retention.",
      "Real-World Scenarios: Restaurant conversations. Business meetings. Travel situations. Practical language from day one.",
      "Pronunciation Feedback: Real-time analysis with specific, actionable improvement cues.",
      "Progress Milestones: Clear levels and achievements to keep you motivated.",
    ],
    mockupLabel: "Linguatude - Coming soon",
    mockupNote: "Be the first to access Linguatude at launch.",
    mockup1Src: "/linguatude-mockup1.jpeg",
    mockup2Src: "/linguatude-mockup2.jpeg",
    logoSrc: "/logo-linguatude.jpg",
    primaryCtaLabel: "Visit Linguatude",
    primaryCtaHref: "https://linguatude.com",
    primaryExternal: true,
    waitlistPlaceholder: "Your email address",
    waitlistButtonLabel: "Notify me",
    waitlistNote: "Be the first to access Linguatude at launch.",
    metrics: [
      { value: "AI", label: "Conversation" },
      { value: "Adaptive", label: "Difficulty" },
      { value: "Speech", label: "Analysis" },
      { value: "Progress", label: "Milestones" },
    ],
  },
];
