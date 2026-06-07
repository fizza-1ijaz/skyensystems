import type { ProcessStage } from "@/components/landing/process/types";

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "Scope, constraints, and success metrics defined in a structured workshop — so every build starts with clarity, not assumptions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=520&h=640&q=80",
    imageAlt: "Team collaboration during discovery workshop",
  },
  {
    id: 2,
    step: "02",
    title: "Architecture",
    description:
      "Technical blueprint, milestones, and delivery model agreed before a single line of code — reducing rework and surprise scope.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=520&h=640&q=80",
    imageAlt: "Technical planning and system architecture",
  },
  {
    id: 3,
    step: "03",
    title: "Build",
    description:
      "Design and engineering in parallel with weekly visibility and demos — you see progress, not just status updates.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=520&h=640&q=80",
    imageAlt: "Software engineering and product build",
  },
  {
    id: 4,
    step: "04",
    title: "Launch",
    description:
      "QA, deployment, analytics, and handover with documentation — production-ready delivery with nothing left undocumented.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=520&h=640&q=80",
    imageAlt: "Product analytics dashboard at launch",
  },
  {
    id: 5,
    step: "05",
    title: "Scale",
    description:
      "Retainers, feature roadmaps, and growth support as your product matures — the same team that shipped v1 supports what comes next.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=520&h=640&q=80",
    imageAlt: "Growing team supporting product scale",
  },
];
