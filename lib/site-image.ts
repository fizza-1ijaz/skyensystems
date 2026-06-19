/** Default Next/Image quality tiers for consistent, fast loading. */
export const SITE_IMAGE_QUALITY = {
  hero: 82,
  content: 78,
  thumb: 72,
} as const;

/** Only bypass the optimizer for formats Next cannot reliably transform. */
export function shouldBypassImageOptimization(src: string): boolean {
  return /\.jfif($|\?)/i.test(src);
}
