/**
 * Minimal polyfills for Next.js supported browsers (Chrome/Edge/Firefox 111+, Safari 16.4+).
 * Replaces next/dist/build/polyfills/polyfill-module.js baseline polyfills that are native
 * in our browser target. URL.canParse is kept for Safari 16.4.
 */
if (!("canParse" in URL)) {
  URL.canParse = function canParse(url, base) {
    try {
      return !!new URL(url, base);
    } catch {
      return false;
    }
  };
}
