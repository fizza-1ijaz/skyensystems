"use client";

import { Reveal } from "@/components/landing/Reveal";
import { CONTACT_ENGAGEMENTS } from "@/lib/contact-page-data";

export function ContactEngagements() {
  return (
    <section className="bg-[#0F172A] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="editorial-section-title max-w-2xl text-balance text-[#141414]">
            Engagements we take on.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {CONTACT_ENGAGEMENTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="min-h-0">
              <article className="group relative min-h-[10rem] bg-[#0F172A] p-8 transition-colors duration-300 md:min-h-[11rem] md:p-10">
                <div
                  className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[#31C3C3]/50"
                  aria-hidden
                />
                <h3 className="font-heading text-xl font-bold tracking-tight text-[#FAFAF8] transition-colors duration-300 group-hover:text-[#31C3C3] md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/75">
                  {item.tagline}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
