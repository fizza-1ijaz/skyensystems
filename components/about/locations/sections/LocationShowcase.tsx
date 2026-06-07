"use client";

import { LOCATION_SHOWCASE } from "@/lib/locations-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function LocationShowcase() {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Each node in our global model.
          </h2>
        </Reveal>
      </div>

      {LOCATION_SHOWCASE.map((loc, index) => {
        const visualRight = index % 2 === 1;
        const bg = loc.dark ? "bg-[#141414] text-[#FAFAF8]" : "bg-white text-[#141414]";
        const border = loc.dark ? "border-[#2E2E2E]" : "border-[#E5E5E3]";
        const muted = loc.dark ? "text-[#B8B8B8]" : "text-[#5C5C5C]";
        const faint = loc.dark ? "text-[#9A9A9A]" : "text-[#8A8A8A]";

        return (
          <div key={loc.city} className={`border-t ${border} ${bg}`}>
            <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-14 md:grid-cols-12 md:items-start md:gap-12 md:px-10 md:py-20">
              <Reveal className={`md:col-span-5 ${visualRight ? "md:order-2" : ""}`} delay={0.04}>
                <div
                  className={`min-h-[200px] border p-6 ${loc.dark ? "border-[#3A3A3A] bg-[#0A0A0A]" : "border-[#E5E5E3] bg-[#FAFAF8]"}`}
                >
                  <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${faint}`}>Ecosystem role</p>
                  <p className="mt-4 font-heading text-xl font-bold">{loc.role}</p>
                  <ul className={`mt-6 space-y-2 text-sm ${muted}`}>
                    {loc.capabilities.map((cap) => (
                      <li key={cap} className="flex gap-2">
                        <span className="text-[#31C3C3]">—</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className={`md:col-span-7 ${visualRight ? "md:order-1" : ""}`} delay={0.08}>
                <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${faint}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{loc.city}</h3>
                <p className={`mt-6 max-w-xl text-sm leading-relaxed md:text-base ${muted}`}>{loc.expertise}</p>
                <p className={`mt-6 border-t pt-4 text-xs uppercase tracking-[0.1em] ${faint} ${loc.dark ? "border-[#3A3A3A]" : "border-[#F0F0EE]"}`}>
                  {loc.contact}
                </p>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
