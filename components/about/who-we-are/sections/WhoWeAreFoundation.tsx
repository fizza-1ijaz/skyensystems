"use client";

import { FOUNDATION_PRINCIPLES } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhoWeAreFoundation() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Principles that govern how we build.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0 border-t border-[#E5E5E3]">
          {FOUNDATION_PRINCIPLES.map((item, index) => (
            <Reveal key={item.num} delay={index * 0.05}>
              <article className="grid gap-4 border-b border-[#E5E5E3] py-10 md:grid-cols-12 md:items-start md:gap-8 md:py-12">
                <p className="font-heading text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none text-[#EFEFED] md:col-span-3">
                  {item.num}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-heading text-2xl font-bold text-[#141414] md:text-3xl">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#5C5C5C] md:col-span-5 md:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
