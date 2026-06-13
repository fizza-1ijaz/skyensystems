import type { CapabilityVisualId } from "@/components/landing/landing-data";

const unsplash = (id: string, w = 900, h = 560) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const localImage = (path: string) => encodeURI(path);

/** Editorial preview photos for each service/capability card. */
export const SERVICE_PREVIEW_IMAGES: Record<
  CapabilityVisualId,
  { src: string; alt: string }
> = {
  web: {
    src: localImage("/images/Web Development ( Services).jpeg"),
    alt: "Web development service image",
  },
  mobile: {
    src: localImage("/images/App development (Services).jpeg"),
    alt: "App development service image",
  },
  ai: {
    src: localImage("/images/AI Solution (Services).jpeg"),
    alt: "AI solutions service image",
  },
  design: {
    src: localImage("/images/UI UX Design ( Services).jpeg"),
    alt: "UI and UX design service image",
  },
  growth: {
    src: localImage("/images/Marketing ( Services).png"),
    alt: "Digital marketing service image",
  },
  teams: {
    src: localImage("/images/Team (Services).png"),
    alt: "Dedicated team service image",
  },
};

export function getServicePreviewImage(visual: CapabilityVisualId) {
  return SERVICE_PREVIEW_IMAGES[visual];
}
