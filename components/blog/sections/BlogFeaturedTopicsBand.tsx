"use client";

import { Reveal } from "@/components/landing/Reveal";
import { FEATURED_TOPICS } from "@/components/blog/blog-ui-utils";

export function BlogFeaturedTopicsBand() {
  return (
    <section className="bg-[#0F172A] py-16 text-[#FAFAF8] md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6C63FF]">
            Featured topics
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            What we write about
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
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
