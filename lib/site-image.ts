/** Default Next/Image quality tiers for consistent, fast loading. */
export const SITE_IMAGE_QUALITY = {
  hero: 82,
  content: 78,
  thumb: 72,
} as const;

/** Pre-sized WebP assets in /public — skip re-encoding through the image optimizer. */
export function shouldBypassImageOptimization(src: string): boolean {
  return /\.jfif($|\?)/i.test(src) || src.includes("/images/optimized/");
}
