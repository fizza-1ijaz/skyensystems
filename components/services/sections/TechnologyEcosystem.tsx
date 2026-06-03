"use client";

import { TECHNOLOGY_LANDSCAPE } from "@/lib/services-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function TechnologyEcosystem() {
  return (
    <section className="border-y border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            The stack landscape we operate in daily.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGY_LANDSCAPE.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <div className="flex h-full min-h-[12rem] flex-col bg-[#FAFAF8] p-6 md:p-8">
                <p className="border-b border-[#E5E5E3] pb-3 font-heading text-xl font-bold text-[#141414]">
                  {group.category}
                </p>
                <ul className="mt-5 flex flex-1 flex-col justify-end space-y-2">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-4 border-t border-[#EFEFEF] pt-2 text-sm"
                    >
                      <span className="font-medium text-[#141414]">{item}</span>
                      <span className="font-mono text-[10px] text-[#8A8A8A]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
