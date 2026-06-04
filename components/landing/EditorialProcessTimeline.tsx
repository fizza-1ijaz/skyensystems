"use client";

import { Reveal } from "@/components/landing/Reveal";

export type EditorialProcessStep = {
  phase: string;
  title: string;
  detail: string;
};

type EditorialProcessTimelineProps = {
  steps: readonly EditorialProcessStep[];
};

export function EditorialProcessTimeline({ steps }: EditorialProcessTimelineProps) {
  return (
    <>
      <ol className="relative mt-14 flex flex-col gap-0 md:hidden">
        {steps.map((step, index) => (
          <Reveal key={step.phase} delay={index * 0.05}>
            <li className="relative border-l border-[#6C63FF]/40 py-6 pl-8">
              <span className="absolute -left-6 top-6 flex h-12 w-12 items-center justify-center border border-[#6C63FF] bg-[#141414] font-heading text-sm font-bold text-[#6C63FF]">
                {step.phase}
              </span>
              <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#B8B8B8]">{step.detail}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="relative mt-14 hidden md:block">
        <div className="absolute left-0 right-0 top-12 h-px bg-[#6C63FF]/50" aria-hidden />
        <ol className="grid grid-cols-6 gap-4">
          {steps.map((step, index) => (
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
    </>
  );
}
