"use client";

import { METHODOLOGY_STEPS } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhoWeAreMethodology() {
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
            A framework for building what matters.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-[#6C63FF]/40 md:block" aria-hidden />
          <ol className="grid gap-6 md:grid-cols-4 md:gap-4">
            {METHODOLOGY_STEPS.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.07}>
                <li className="relative border border-[#3A3A3A] bg-[#0F0F0F] p-6 text-center md:pt-10">
                  <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center border border-[#6C63FF] text-sm font-bold text-[#6C63FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#B8B8B8]">{step.detail}</p>
                  {index < METHODOLOGY_STEPS.length - 1 ? (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#6C63FF] md:block" aria-hidden>
                      →
                    </span>
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
