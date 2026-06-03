"use client";

import { SERVICES_PROCESS } from "@/lib/services-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function ServicesProcess() {
  return (
    <section className="overflow-x-auto border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto min-w-[min(100%,1440px)] max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            A horizontal journey from first conversation to scale.
          </h2>
        </Reveal>

        <div className="relative mt-14 min-w-[720px]">
          <div className="absolute left-0 right-0 top-12 h-px bg-[#6C63FF]/50" aria-hidden />
          <ol className="grid grid-cols-6 gap-4">
            {SERVICES_PROCESS.map((step, index) => (
              <Reveal key={step.phase} delay={index * 0.05}>
                <li className="relative pt-16">
                  <span className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center border border-[#6C63FF] bg-[#141414] font-heading text-sm font-bold text-[#6C63FF]">
                    {step.phase}
                  </span>
                  <h3 className="font-heading text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#B8B8B8]">{step.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
