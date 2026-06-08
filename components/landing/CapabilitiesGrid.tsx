"use client";

import { CAPABILITIES } from "@/components/landing/landing-data";
import { CapabilityPreview } from "@/components/landing/capabilities/CapabilityPreview";
import { Reveal } from "@/components/landing/Reveal";

export function CapabilitiesGrid() {
  return (
    <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-14">
          <h2 className="editorial-section-title max-w-xl text-balance text-[#141414]">
            Capabilities across the full product lifecycle.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {CAPABILITIES.map((item, index) => (
              <Reveal key={item.num} delay={index * 0.05} className="min-w-0">
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
                  </div>
                </article>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
