/** Default Next/Image quality tiers for consistent, fast loading. */
export const SITE_IMAGE_QUALITY = {
  hero: 82,
  content: 78,
  thumb: 72,
} as const;

/** Skip re-encoding only for legacy JFIF assets. */
export function shouldBypassImageOptimization(src: string): boolean {
  return /\.jfif($|\?)/i.test(src);
}
