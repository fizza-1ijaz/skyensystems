"use client";

import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

const BLOG_HERO_IMAGE = "/images/Blog ( Top img).png";

type BlogHeroProps = {
  subheadline?: string;
};

export function BlogHero({ subheadline }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-10 pt-10 md:pb-14 md:pt-14">
      <BlogBlueprintBackdrop parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[60fr_40fr] lg:gap-11">
          <div className="min-w-0">
            <Reveal>
              <h1 className="max-w-[18ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414] lg:max-w-none">
                Insights on software, AI, and digital transformation.
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg lg:max-w-none">
                {subheadline ??
                  "Perspectives from our engineering and product teams — on building software, applying AI responsibly, and delivering digital transformation with clarity and discipline."}
              </p>
            </Reveal>
            <div className="mt-12 h-px w-full bg-[#DADAD8] md:mt-14" aria-hidden />
          </div>

          <Reveal delay={0.08} className="min-w-0">
            <div
              className="relative min-h-[16rem] overflow-hidden rounded-[2rem] bg-[#141414] shadow-[0_18px_55px_rgba(10,24,42,0.08)] md:min-h-[20rem] md:rounded-[2.125rem] lg:min-h-[22rem]"
              style={{
                backgroundImage: `url("${encodeURI(BLOG_HERO_IMAGE)}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Skyen Systems blog"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
