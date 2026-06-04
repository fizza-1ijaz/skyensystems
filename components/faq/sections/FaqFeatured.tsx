"use client";

import { FAQ_FEATURED } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";

export function FaqFeatured() {
  return (
    <section id="featured" className="scroll-mt-20 border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="editorial-section-title max-w-2xl text-balance text-[#141414]">
            The questions that shape every engagement.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-px bg-[#E5E5E3]">
          {FAQ_FEATURED.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.06}>
              <article
                className={`grid gap-6 bg-[#FAFAF8] p-8 md:grid-cols-12 md:gap-10 md:p-10 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-5">
                  <span className="font-heading text-5xl font-bold text-[#EFEFED]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-[#141414] sm:text-2xl md:text-3xl">
                    {item.q}
                  </h3>
                </div>
                <div className="flex items-center md:col-span-7">
                  <div className="text-base leading-relaxed text-[#5C5C5C] md:text-lg [&_a]:font-medium [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#141414]">
                    {item.a}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
