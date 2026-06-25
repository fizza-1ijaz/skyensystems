import type { CapabilityVisualId } from "@/components/landing/landing-data";

/** Editorial preview photos for each service/capability card. */
export const SERVICE_PREVIEW_IMAGES: Record<
  CapabilityVisualId,
  { src: string; alt: string }
> = {
  web: {
    src: "/images/optimized/web-development.webp",
    alt: "Web development service image",
  },
  mobile: {
    src: "/images/optimized/app-development.webp",
    alt: "App development service image",
  },
  ai: {
    src: "/images/optimized/ai-solutions.webp",
    alt: "AI solutions service image",
  },
  design: {
    src: "/images/optimized/ui-ux-design.webp",
    alt: "UI and UX design service image",
  },
  growth: {
    src: "/images/optimized/digital-marketing.webp",
    alt: "Digital marketing service image",
  },
  teams: {
    src: "/images/optimized/dedicated-teams.webp",
    alt: "Dedicated team service image",
  },
};

export function getServicePreviewImage(visual: CapabilityVisualId) {
  return SERVICE_PREVIEW_IMAGES[visual];
}
