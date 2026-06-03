"use client";

import { Reveal } from "@/components/landing/Reveal";
import { CONTACT_PROCESS } from "@/lib/contact-page-data";

export function ContactProcess() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            How engagements begin.
          </h2>
        </Reveal>

        <div className="mt-14 h-px w-full bg-[#DADAD8]" aria-hidden />

        <ol className="mt-0 flex flex-col">
          {CONTACT_PROCESS.map((step, index) => (
            <Reveal key={step.phase} delay={index * 0.07}>
              <li
                className="grid gap-4 border-b border-[#DADAD8] py-8 md:grid-cols-12 md:items-baseline md:py-10"
                style={{
                  marginLeft: `${index * 4}%`,
                  maxWidth: `${100 - index * 3}%`,
                }}
              >
                <span className="font-heading text-5xl font-bold text-[#6C63FF]/30 md:col-span-2 md:text-6xl">
                  {step.phase}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#141414] md:col-span-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C] md:col-span-7 md:text-base">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
