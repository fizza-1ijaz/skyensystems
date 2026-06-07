"use client";

import { CAPABILITY_ARCHITECTURE } from "@/lib/services-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function CapabilitiesArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            A connected system — not isolated service lines.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-[#31C3C3]/40" aria-hidden />
          <ol className="space-y-0">
            {CAPABILITY_ARCHITECTURE.map((layer, index) => (
              <Reveal key={layer.id} delay={index * 0.06}>
                <li className="relative grid gap-4 py-8 md:grid-cols-12 md:items-start md:py-10">
                  <div className="flex items-start gap-4 md:col-span-4">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[#31C3C3] bg-[#141414] text-xs font-bold text-[#31C3C3]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-2xl font-bold md:text-3xl">{layer.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#B8B8B8] md:col-span-8 md:text-base">
                    {layer.detail}
                  </p>
                  {index < CAPABILITY_ARCHITECTURE.length - 1 ? (
                    <div className="absolute -bottom-px left-9 hidden text-[#31C3C3] md:block" aria-hidden>
                      ↓
                    </div>
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
