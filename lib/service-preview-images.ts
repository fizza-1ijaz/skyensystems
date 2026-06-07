import type { CapabilityVisualId } from "@/components/landing/landing-data";

const unsplash = (id: string, w = 900, h = 560) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/** Editorial preview photos for each service/capability card. */
export const SERVICE_PREVIEW_IMAGES: Record<
  CapabilityVisualId,
  { src: string; alt: string }
> = {
  web: {
    src: unsplash("photo-1498050108023-c5249f4df085"),
    alt: "Web development on laptop",
  },
  mobile: {
    src: unsplash("photo-1512941937669-90a1b58e7e9c"),
    alt: "Mobile app on smartphone",
  },
  ai: {
    src: unsplash("photo-1677442136019-21780ecad995"),
    alt: "AI and machine learning visualization",
  },
  design: {
    src: unsplash("photo-1558655146-364adaf1fcc9"),
    alt: "UI/UX design workspace",
  },
  growth: {
    src: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "Digital marketing analytics dashboard",
  },
  teams: {
    src: unsplash("photo-1522071820081-009f0129c71c"),
    alt: "Dedicated engineering team collaboration",
  },
};

export function getServicePreviewImage(visual: CapabilityVisualId) {
  return SERVICE_PREVIEW_IMAGES[visual];
}
