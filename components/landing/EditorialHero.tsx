import { HeroDeferredVideo } from "@/components/landing/HeroDeferredVideo";
import { EditorialHeroCta } from "@/components/landing/EditorialHeroCta";
import "@/components/landing/reveal.css";

const HERO_POSTER_DESKTOP = "/images/hero-poster-desktop.webp";
const HERO_POSTER_MOBILE = "/images/hero-poster-mobile.webp";

export function EditorialHero() {
  return (
    <section className="editorial-hero">
      <div className="editorial-hero__media" aria-hidden>
        <picture className="editorial-hero__picture">
          <source media="(min-width: 768px)" srcSet={HERO_POSTER_DESKTOP} type="image/webp" />
          <img
            src={HERO_POSTER_MOBILE}
            alt=""
            width={828}
            height={466}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="editorial-hero-poster"
          />
        </picture>
        <div className="absolute inset-0">
          <HeroDeferredVideo />
        </div>
        <div className="absolute inset-0 bg-[#0B1220]/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/88 via-[#0B1220]/45 to-[#0B1220]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/75 via-transparent to-[#0B1220]/35" />
      </div>

      <div className="editorial-hero-content pointer-events-none relative z-10 flex min-h-[calc(100svh+var(--site-nav-height)-1in)] flex-col md:absolute md:inset-0 md:min-h-0">
        <div className="pointer-events-auto w-full shrink-0 pt-[calc(var(--site-nav-height)+0.5in)] text-center md:absolute md:inset-x-0 md:top-[calc(var(--site-nav-height)+1in)] md:z-20 md:pt-0">
          <p className="editorial-hero-eyebrow font-semibold uppercase text-white/65">
            Software house · Bahrain & Pakistan
          </p>
        </div>

        <div className="pointer-events-auto relative flex flex-1 flex-col items-center gap-10 px-6 pb-12 sm:px-8 md:h-full md:w-full md:justify-start md:gap-0 md:px-12 md:pb-20 md:pt-52">
          <div className="-mt-[2in] flex w-full flex-col items-center gap-10 md:mt-0 md:w-full">
            <div className="w-full min-h-[24vh] shrink-0 md:hidden" aria-hidden />

            <div className="flex w-full justify-center md:px-6">
              <div className="w-full max-w-4xl shrink-0 px-4 text-center sm:px-6 md:px-0">
                <h1 className="editorial-hero-headline text-left font-heading font-bold text-white">
                  Custom Software Development &amp;
                  <br />
                  <span className="text-[#31C3C3]">AI Solutions</span> for Australian Businesses
                </h1>

                <p className="editorial-hero-body mx-auto mt-10 w-full max-w-lg !text-center text-white/82 md:mt-6 md:max-w-2xl">
                  Skyen Systems helps Australian and US businesses build custom websites, mobile
                  apps, AI automation systems, SaaS platforms, UI/UX designs, and digital growth
                  solutions with one accountable remote team.
                </p>
              </div>
            </div>

            <EditorialHeroCta />
          </div>
        </div>
      </div>
    </section>
  );
}
