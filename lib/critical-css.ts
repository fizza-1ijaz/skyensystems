/** Minimal above-the-fold styles inlined in <head> so LCP paints before the main CSS bundle. */
export const CRITICAL_CSS = `
:root{--site-nav-height:3.5rem}
body{margin:0;background:#f4f4f2;color:#141414;font-family:var(--font-inter),Arial,Helvetica,sans-serif}
.editorial-hero-poster{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;max-width:none}
`.trim();
