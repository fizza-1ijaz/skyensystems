/** Shared motion tokens — keeps scroll/enter animation values out of JSX. */
export const FEATURED_BLOGS_MOTION = {
  enter: {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
    y: 36,
    stagger: 0.12,
  },
  hover: {
    lift: -6,
    cardScale: 1.015,
    imageScale: 1.08,
    imageScaleCompact: 1.06,
    imageEase: [0.22, 1, 0.36, 1] as const,
    imageDuration: 0.7,
    spring: { type: "spring" as const, stiffness: 420, damping: 28, mass: 0.55 },
  },
  parallax: {
    spring: { stiffness: 90, damping: 28, mass: 0.45 },
  },
} as const;
