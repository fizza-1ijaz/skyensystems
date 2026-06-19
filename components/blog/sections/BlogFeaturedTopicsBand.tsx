"use client";

import { Reveal } from "@/components/landing/Reveal";
import { FEATURED_TOPICS } from "@/components/blog/blog-ui-utils";

export function BlogFeaturedTopicsBand() {
  return (
    <section className="bg-[#0F172A] pt-16 text-[#FAFAF8] md:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto w-full max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#31C3C3]">
            Featured topics
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#FAFAF8]">
            What we write about
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-white/10 pb-10 md:grid-cols-2 md:pb-12 lg:grid-cols-4">
          {FEATURED_TOPICS.map((topic, index) => (
            <Reveal key={topic} delay={index * 0.05}>
              <div className="h-full bg-[#0F172A] px-6 py-8 md:px-8">
                <p className="font-heading text-xl font-bold tracking-tight text-[#FAFAF8] md:text-2xl">
                  {topic}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
