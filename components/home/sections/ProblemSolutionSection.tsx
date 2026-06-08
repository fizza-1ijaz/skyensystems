"use client";

import { PROBLEM_SOLUTION } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";

export function ProblemSolutionSection() {
  return (
    <section className="bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {PROBLEM_SOLUTION.eyebrow}
            </p>
            <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
              {PROBLEM_SOLUTION.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center">
            <div className="border-l-4 border-[#141414] pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                The problem
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                {PROBLEM_SOLUTION.problem}
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#31C3C3] pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#31C3C3]">
                Our solution
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                {PROBLEM_SOLUTION.solution}
              </p>
            </div>

            <div className="mt-8">
              <EditorialBoxCta href={PROBLEM_SOLUTION.cta.href} variant="neutral">
                {PROBLEM_SOLUTION.cta.label}
              </EditorialBoxCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
