import { PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";

export type AboutServiceAccent = {
  iconBg: string;
  iconColor: string;
  glow: string;
  border: string;
  bar: string;
};

export const ABOUT_HERO_STATS = [
  { value: "Web", label: "Websites & Platforms" },
  { value: "App", label: "Mobile Products" },
  { value: "AI", label: "Automation Systems" },
  { value: "SEO", label: "Digital Growth" },
] as const;

export const ABOUT_STORY_PILLS = [
  "Product Strategy",
  "UI/UX Design",
  "Web Development",
  "Mobile Apps",
  "AI Automation",
  "SEO Growth",
] as const;

export const ABOUT_VALUES = [
  {
    title: "Creativity",
    description: "Fresh ideas shaped into practical digital products.",
  },
  {
    title: "Quality",
    description: "Clean design, reliable development and strong execution.",
  },
  {
    title: "Teamwork",
    description: "Strategy, design, development and growth working together.",
  },
  {
    title: "Transparency",
    description: "Clear planning, honest updates and delivery visibility.",
  },
  {
    title: "Growth",
    description: "Products built with long-term improvement in mind.",
  },
] as const;

export const ABOUT_SERVICES = [
  {
    id: "web",
    title: "Web Development",
    tag: "Websites · SaaS · Portals",
    description:
      "Business websites, landing pages, SaaS websites, dashboards, portals, and custom web applications.",
    href: "/services/web-design-development",
    accent: {
      iconBg: "from-[#E8F6F5] via-[#D4F0EF] to-[#B8E8E6]",
      iconColor: "text-[#0F766E]",
      glow: "from-[#31C3C3]/20 via-[#31C3C3]/5 to-transparent",
      border: "group-hover:border-[#31C3C3]/45",
      bar: "from-[#31C3C3] via-[#71CBD1] to-transparent",
    },
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    tag: "iOS · Android · Cross-platform",
    description:
      "Android, iOS, cross-platform, MVP, SaaS, business, and AI-powered mobile apps.",
    href: "/services/mobile-apps",
    accent: {
      iconBg: "from-[#EDE9FE] via-[#E0E7FF] to-[#C7D2FE]",
      iconColor: "text-[#4338CA]",
      glow: "from-[#6366F1]/18 via-[#818CF8]/6 to-transparent",
      border: "group-hover:border-[#6366F1]/40",
      bar: "from-[#6366F1] via-[#818CF8] to-transparent",
    },
  },
  {
    id: "ai",
    title: "AI Solutions",
    tag: "Chatbots · Automation · LLMs",
    description:
      "AI chatbots, assistants, workflow automation, LLM integrations, and AI-powered product features.",
    href: "/services/ai-solutions",
    accent: {
      iconBg: "from-[#F3E8FF] via-[#EDE9FE] to-[#DDD6FE]",
      iconColor: "text-[#7C3AED]",
      glow: "from-[#A855F7]/18 via-[#C084FC]/6 to-transparent",
      border: "group-hover:border-[#A855F7]/40",
      bar: "from-[#A855F7] via-[#C084FC] to-transparent",
    },
  },
  {
    id: "design",
    title: "UI/UX Design",
    tag: "Figma · Product UI · Handoff",
    description:
      "Modern app, website, SaaS and dashboard interfaces with Figma and developer-ready handoff.",
    href: "/services/brand-ui-ux-design",
    accent: {
      iconBg: "from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3]",
      iconColor: "text-[#E11D48]",
      glow: "from-[#FB7185]/16 via-[#FDA4AF]/5 to-transparent",
      border: "group-hover:border-[#FB7185]/40",
      bar: "from-[#F43F5E] via-[#FB7185] to-transparent",
    },
  },
  {
    id: "marketing",
    title: "SEO & Marketing",
    tag: "SEO · Content · Analytics",
    description:
      "SEO, technical SEO, content marketing, AEO, GEO, analytics, ASO and growth support.",
    href: "/services/digital-marketing",
    accent: {
      iconBg: "from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0]",
      iconColor: "text-[#059669]",
      glow: "from-[#10B981]/16 via-[#34D399]/5 to-transparent",
      border: "group-hover:border-[#10B981]/40",
      bar: "from-[#10B981] via-[#34D399] to-transparent",
    },
  },
  {
    id: "teams",
    title: "Dedicated Teams",
    tag: "Developers · Designers · QA",
    description:
      "Remote developers, designers, AI developers, backend engineers, QA support and product teams.",
    href: "/services/dedicated-teams",
    accent: {
      iconBg: "from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]",
      iconColor: "text-[#1D4ED8]",
      glow: "from-[#3B82F6]/16 via-[#60A5FA]/5 to-transparent",
      border: "group-hover:border-[#3B82F6]/40",
      bar: "from-[#3B82F6] via-[#60A5FA] to-transparent",
    },
  },
] as const;

export const ABOUT_PEOPLE_POINTS = [
  {
    title: "Product-Focused Communication",
    description: "We focus on clear goals, scope, priorities, and practical next steps.",
  },
  {
    title: "Remote Delivery Support",
    description: "We support Australian and US businesses with structured remote collaboration.",
  },
  {
    title: "Long-Term Improvement",
    description: "We support products after launch with updates, SEO, AI, analytics, and growth work.",
  },
] as const;

export const ABOUT_WORK = [
  {
    title: "Studiely",
    description:
      "AI-powered study app supported by app development, UI/UX, SEO, ASO, and growth systems.",
    image: "/images/Studiely img.jpeg",
    productId: "studiely",
  },
  {
    title: "Make My Lesson",
    description:
      "AI teaching assistant platform supported by product strategy, web development, SEO and marketing.",
    image: "/images/MML img.png",
    productId: "make-my-lesson",
  },
  {
    title: "Linguatude",
    description:
      "AI language learning platform supported by design, website development, SEO and growth marketing.",
    image: "/images/linguatude img.png",
    productId: "linguatude",
  },
] as const;

export const ABOUT_TECH_STACK = [
  { id: "react", label: "React / Next.js" },
  { id: "flutter", label: "Flutter / Apps" },
  { id: "ai", label: "AI / LLM APIs" },
  { id: "seo", label: "SEO / Analytics" },
] as const;

export const ABOUT_PRIMARY_SERVICE_HREF = PRIMARY_SERVICE_HREF;
