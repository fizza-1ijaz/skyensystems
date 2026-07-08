/** Above-the-fold styles inlined in <head> so the LCP hero paints without waiting for Tailwind. */
export const CRITICAL_CSS = `
:root{--site-nav-height:3.5rem;--font-inter:Inter,system-ui,sans-serif;--font-space-grotesk:"Space Grotesk",system-ui,sans-serif}
html{scroll-behavior:smooth;background:#f8fafc;overflow-x:clip}
body{margin:0;min-height:100vh;background:#f4f4f2;color:#141414;font-family:var(--font-inter),Arial,Helvetica,sans-serif;overflow-x:clip}
.editorial-hero{position:relative;margin-top:calc(var(--site-nav-height)*-1);min-height:calc(100svh + var(--site-nav-height) - 1in);overflow:hidden;background:#0b1220}
.editorial-hero__media{position:absolute;inset:0}
.editorial-hero__picture{position:absolute;inset:0;display:block;width:100%;height:100%}
.editorial-hero-poster{display:block;width:100%;height:100%;object-fit:cover;max-width:none}
.editorial-hero-content{-webkit-text-size-adjust:none;text-size-adjust:none;font-size:16px;transform:none;zoom:1}
.editorial-hero-content .editorial-hero-eyebrow{font-size:11px!important;letter-spacing:.28em}
.editorial-hero-content .editorial-hero-headline{font-family:var(--font-space-grotesk),Arial,Helvetica,sans-serif;font-size:72px!important;line-height:70px!important;letter-spacing:-.04em;transform:none!important}
.editorial-hero-content .editorial-hero-body{font-size:19px!important;line-height:26px!important;letter-spacing:-.01em;text-align:center;transform:none!important}
.editorial-hero-content .editorial-hero-cta{width:160px!important;height:160px!important;min-width:160px!important;min-height:160px!important;flex-shrink:0}
.editorial-hero-content .editorial-hero-cta-label{font-size:15px!important;line-height:1.375!important}
@media (min-width:768px){
.editorial-hero{height:calc(100svh + var(--site-nav-height));min-height:0}
}
@media (max-width:767px){
.editorial-hero-content .editorial-hero-headline{font-size:clamp(2rem,9vw,2.5rem)!important;line-height:1.08!important}
.editorial-hero-content .editorial-hero-body{font-size:.9375rem!important;line-height:1.5!important}
.editorial-hero-content .editorial-hero-eyebrow{font-size:10px!important;letter-spacing:.18em;white-space:normal}
.editorial-hero-content .editorial-hero-cta{width:132px!important;height:132px!important;min-width:132px!important;min-height:132px!important}
.editorial-hero-content .editorial-hero-cta-label{font-size:13px!important;line-height:1.35!important}
}
`.trim();
