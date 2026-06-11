"use client";

import Link from "next/link";
import { SERVICES_OVERVIEW, SERVICES_OVERVIEW_CARDS } from "@/lib/homepage-data";
import { CapabilityPreview } from "@/components/landing/capabilities/CapabilityPreview";
import { Reveal } from "@/components/landing/Reveal";

export function CapabilitiesGrid() {
  return (
    <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {SERVICES_OVERVIEW.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {SERVICES_OVERVIEW.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {SERVICES_OVERVIEW.paragraph}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {SERVICES_OVERVIEW_CARDS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="min-w-0">
              <article className="group relative flex h-full min-h-[18rem] flex-col overflow-hidden border border-[#E5E5E3] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#141414] hover:shadow-[0_24px_60px_-40px_rgba(20,20,20,0.2)]">
                <div className="relative z-10 flex flex-1 items-stretch overflow-hidden px-3 pt-4 md:px-4 md:pt-5">
                  <CapabilityPreview
                    id={item.visual}
                    className="h-[9rem] w-full sm:h-[10rem] md:h-[11rem]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <div className="relative z-20 mt-auto border-t border-[#F0F0EE] bg-white px-5 py-4 md:px-6 md:py-5">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-[#141414] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#5C5C5C]">
                    {item.description}
                  </p>
                  <Link
                    href={item.cta.href}
                    className="mt-4 inline-block text-sm font-semibold text-[#31C3C3] transition-colors duration-200 hover:text-[#2AB0B0]"
                  >
                    {item.cta.label} →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
