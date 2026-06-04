"use client";

import { FAQ_CLIENT_CONCERNS } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";

export function FaqClientConcerns() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="editorial-section-title max-w-2xl text-balance text-[#141414]">
            Situations we hear often — and how we respond.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FAQ_CLIENT_CONCERNS.map((item, index) => (
            <Reveal key={item.concern} delay={index * 0.06}>
              <article className="grid h-full gap-6 border border-[#E5E5E3] bg-white md:grid-cols-2">
                <div className="border-b border-[#E5E5E3] p-6 md:border-b-0 md:border-r md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6C63FF]">
                    Concern
                  </p>
                  <p className="mt-3 font-heading text-xl font-bold leading-snug text-[#141414] md:text-2xl">
                    &ldquo;{item.concern}&rdquo;
                  </p>
                </div>
                <div className="flex flex-col justify-end p-6 md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                    Our approach
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">{item.solution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
