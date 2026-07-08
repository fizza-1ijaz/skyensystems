import { HeroDeferredVideo } from "@/components/landing/HeroDeferredVideo";
import { EditorialHeroContent } from "@/components/landing/EditorialHeroContent";

const HERO_POSTER_DESKTOP = "/images/hero-poster-desktop.webp";
const HERO_POSTER_MOBILE = "/images/hero-poster-mobile.webp";

export function EditorialHero() {
  return (
    <section className="relative -mt-[var(--site-nav-height)] min-h-[calc(100svh+var(--site-nav-height)-1in)] overflow-hidden bg-[#0B1220] md:h-[calc(100svh+var(--site-nav-height))] md:min-h-0">
      <div className="absolute inset-0" aria-hidden>
        <picture className="absolute inset-0 block h-full w-full">
          <source media="(min-width: 768px)" srcSet={HERO_POSTER_DESKTOP} type="image/webp" />
          <img
            src={HERO_POSTER_MOBILE}
            alt=""
            width={828}
            height={466}
            fetchPriority="high"
            decoding="sync"
            className="editorial-hero-poster h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0">
          <HeroDeferredVideo />
        </div>
        <div className="absolute inset-0 bg-[#0B1220]/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/88 via-[#0B1220]/45 to-[#0B1220]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/75 via-transparent to-[#0B1220]/35" />
      </div>

      <EditorialHeroContent />
    </section>
  );
}
