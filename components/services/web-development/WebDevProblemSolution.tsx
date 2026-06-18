"use client";

import { Reveal } from "@/components/landing/Reveal";
import { WEB_DEV_PROBLEM_SOLUTION } from "@/lib/web-development-service-data";

function PointList({
  points,
  dotClassName = "bg-[#31C3C3]",
}: {
  points: readonly string[];
  dotClassName?: string;
}) {
  return (
    <ul className="mt-5 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotClassName}`} aria-hidden />
          {point}
        </li>
      ))}
    </ul>
  );
}

export function WebDevProblemSolution() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {WEB_DEV_PROBLEM_SOLUTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {WEB_DEV_PROBLEM_SOLUTION.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <article className="h-full border border-[#E5E5E3] bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                {WEB_DEV_PROBLEM_SOLUTION.problemHeading}
              </p>
              <PointList points={WEB_DEV_PROBLEM_SOLUTION.problemPoints} dotClassName="bg-red-500" />
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="h-full border border-[#31C3C3]/30 bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#31C3C3]">
                {WEB_DEV_PROBLEM_SOLUTION.solutionHeading}
              </p>
              <PointList points={WEB_DEV_PROBLEM_SOLUTION.solutionPoints} />
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-4xl">
          <div className="border-l-4 border-[#31C3C3] bg-white px-6 py-5 md:px-8 md:py-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              Direct answer
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {WEB_DEV_PROBLEM_SOLUTION.directAnswer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
