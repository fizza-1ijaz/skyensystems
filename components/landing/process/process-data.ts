import type { ProcessStage } from "@/components/landing/process/types";

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "We define your business goals, target users, project scope, required features, timeline, budget, and success metrics before planning the build.",
    image: "/images/Discover%20icon.png",
    imageAlt: "Team collaboration during discovery workshop",
  },
  {
    id: 2,
    step: "02",
    title: "Architecture",
    description:
      "We create the technical blueprint, user flows, system structure, milestones, integrations, and delivery roadmap before development starts.",
    image: "/images/Design%20icon.png",
    imageAlt: "Technical planning and system architecture",
  },
  {
    id: 3,
    step: "03",
    title: "Design & Build",
    description:
      "Our UI/UX designers and developers work together to create clean interfaces, reliable frontend and backend systems, AI features, and product-ready functionality.",
    image: "/images/Build%20icon.png",
    imageAlt: "Software engineering and product build",
  },
  {
    id: 4,
    step: "04",
    title: "Test & Launch",
    description:
      "We test performance, mobile responsiveness, forms, user flows, integrations, SEO basics, analytics, and deployment before your website, app, or software product goes live.",
    image: "/images/launch.png",
    imageAlt: "Product analytics dashboard at launch",
  },
  {
    id: 5,
    step: "05",
    title: "Grow & Improve",
    description:
      "After launch, we support your product with updates, SEO, digital marketing, analytics, new features, automation improvements, and long-term scaling.",
    image: "/images/Scale%20icon.png",
    imageAlt: "Growing team supporting product scale",
  },
];
