"use client";

import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

type BlogHeroProps = {
  subheadline?: string;
};

export function BlogHero({ subheadline }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-10 pt-10 md:pb-14 md:pt-14">
      <BlogBlueprintBackdrop parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h1 className="max-w-[18ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
            Insights on software, AI, and digital transformation.
          </h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg">
            {subheadline ??
              "Perspectives from our engineering and product teams — on building software, applying AI responsibly, and delivering digital transformation with clarity and discipline."}
          </p>
        </Reveal>
        <div className="mt-12 h-px w-full bg-[#DADAD8] md:mt-14" aria-hidden />
      </div>
    </section>
  );
}
