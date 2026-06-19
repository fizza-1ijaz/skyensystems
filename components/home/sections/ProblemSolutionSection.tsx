"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PROBLEM_SOLUTION } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const CTA_SPRING = { type: "spring" as const, stiffness: 440, damping: 24, mass: 0.4 };
const MotionLink = motion.create(Link);

function AboutUsCta() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      href={PROBLEM_SOLUTION.cta.href}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
      transition={CTA_SPRING}
      className="group/about relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#DADAD8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#141414] shadow-[0_12px_32px_-24px_rgba(20,20,20,0.2)] transition-[border-color,box-shadow] duration-300 hover:border-[#31C3C3] hover:shadow-[0_16px_40px_-20px_rgba(49,195,195,0.4)] motion-reduce:hover:bg-[#31C3C3] motion-reduce:hover:text-white"
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-[#31C3C3] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/about:scale-x-100 motion-reduce:group-hover/about:scale-x-0"
        aria-hidden
      />
      <span className="relative z-10 transition-colors duration-300 group-hover/about:text-white">
        {PROBLEM_SOLUTION.cta.label}
      </span>
    </MotionLink>
  );
}

export function ProblemSolutionSection() {
  return (
    <section className="bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="page-hero-copy">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {PROBLEM_SOLUTION.eyebrow}
            </p>
            <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
              {PROBLEM_SOLUTION.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="page-hero-copy flex flex-col justify-center">
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

            <div className="page-hero-cta-row mt-8">
              <AboutUsCta />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
