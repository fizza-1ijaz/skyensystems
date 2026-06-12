import { PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";

export const ABOUT_HERO_STATS = [
  { value: "Web", label: "Websites & platforms" },
  { value: "App", label: "Mobile products" },
  { value: "AI", label: "Automation systems" },
  { value: "SEO", label: "Digital growth" },
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
    icon: "🌐",
    title: "Web Development",
    description:
      "Business websites, landing pages, SaaS websites, dashboards, portals, and custom web applications.",
    href: "/services/web-design-development",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Android, iOS, cross-platform, MVP, SaaS, business, and AI-powered mobile apps.",
    href: "/services/mobile-apps",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "AI chatbots, assistants, workflow automation, LLM integrations, and AI-powered product features.",
    href: "/services/ai-solutions",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Modern app, website, SaaS and dashboard interfaces with Figma and developer-ready handoff.",
    href: "/services/brand-ui-ux-design",
  },
  {
    icon: "📈",
    title: "SEO & Marketing",
    description:
      "SEO, technical SEO, content marketing, AEO, GEO, analytics, ASO and growth support.",
    href: "/services/digital-marketing",
  },
  {
    icon: "👥",
    title: "Dedicated Teams",
    description:
      "Remote developers, designers, AI developers, backend engineers, QA support and product teams.",
    href: "/services/dedicated-teams",
  },
] as const;

export const ABOUT_PEOPLE_POINTS = [
  {
    title: "Product-focused communication",
    description: "We focus on clear goals, scope, priorities, and practical next steps.",
  },
  {
    title: "Remote delivery support",
    description: "We support Australian and US businesses with structured remote collaboration.",
  },
  {
    title: "Long-term improvement",
    description: "We support products after launch with updates, SEO, AI, analytics, and growth work.",
  },
] as const;

export const ABOUT_WORK = [
  {
    title: "Studiely",
    description:
      "AI-powered study app supported by app development, UI/UX, SEO, ASO, and growth systems.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Make My Lesson",
    description:
      "AI teaching assistant platform supported by product strategy, web development, SEO and marketing.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Linguatude",
    description:
      "AI language learning platform supported by design, website development, SEO and growth marketing.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
  },
] as const;

export const ABOUT_TECH_STACK = [
  "React / Next.js",
  "Flutter / Apps",
  "AI / LLM APIs",
  "SEO / Analytics",
] as const;

export const ABOUT_PRIMARY_SERVICE_HREF = PRIMARY_SERVICE_HREF;
