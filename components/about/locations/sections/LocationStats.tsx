"use client";

import { LOCATION_STATS } from "@/lib/locations-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function LocationStats() {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:grid-cols-4">
          {LOCATION_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="flex min-h-[10rem] flex-col justify-end bg-[#FAFAF8] p-6 md:min-h-[12rem] md:p-8">
                <p className="font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold leading-none text-[#141414]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-[#5C5C5C]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
