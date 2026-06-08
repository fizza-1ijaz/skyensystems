"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const CARD_SPRING = { type: "spring" as const, stiffness: 360, damping: 28, mass: 0.52 };

function extractOutcomeMetric(outcome: string) {
  const match = outcome.match(/^([\d.]+%?×?|\d+\.?\d*×)/);
  return match ? match[1] : null;
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof CASE_STUDIES)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const metric = extractOutcomeMetric(study.outcome);
  const services = study.services.split(" · ");

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...CARD_SPRING, delay: reduceMotion ? 0 : index * 0.1 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 0 48px -6px rgba(49,195,195,0.5), 0 28px 64px -32px rgba(49,195,195,0.35)",
            }
      }
      className="group relative flex h-full flex-col overflow-hidden border border-[#2E2E2E] bg-[#1A1A1A] p-6 md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(49,195,195,0.16) 0%, transparent 62%)",
        }}
      />

      <span
        className="pointer-events-none absolute -right-2 -top-4 font-heading text-[5.5rem] font-bold leading-none text-[#FAFAF8]/[0.04] transition-colors duration-300 group-hover:text-[#31C3C3]/10 md:text-[6.5rem]"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 flex flex-grow flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="inline-flex items-center rounded-full border border-[#31C3C3]/30 bg-[#31C3C3]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
            {study.industry}
          </p>
        </div>

        <h3 className="mt-5 font-heading text-xl font-bold text-[#FAFAF8] md:text-2xl">
          {study.client}
        </h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
              Challenge
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#B8B8B8]">{study.challenge}</p>
          </div>

          <div className="rounded-xl border border-[#31C3C3]/25 bg-[#31C3C3]/[0.07] p-4 transition-[border-color,background-color] duration-300 group-hover:border-[#31C3C3]/45 group-hover:bg-[#31C3C3]/[0.12]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#31C3C3]">
              Outcome
            </p>
            {metric ? (
              <p className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#FAFAF8] md:text-4xl">
                {metric}
              </p>
            ) : null}
            <p
              className={`text-sm font-medium leading-relaxed text-[#E8E8E8] ${metric ? "mt-1" : "mt-2"}`}
            >
              {metric ? study.outcome.replace(metric, "").trim() : study.outcome}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#2E2E2E] pt-5 transition-colors duration-300 group-hover:border-[#31C3C3]/20">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-[#2E2E2E] bg-[#141414] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9A9A9A] transition-colors duration-300 group-hover:border-[#31C3C3]/30 group-hover:text-[#B8D4D4]"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(49,195,195,0.08), transparent 42%), radial-gradient(circle at 85% 80%, rgba(20,20,20,0.04), transparent 38%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            Case studies
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-[#141414]">
            Client outcomes across industries.
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            Representative engagements showing how we translate business problems into
            measurable digital results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {CASE_STUDIES.map((study, index) => (
            <Reveal key={study.client} delay={index * 0.06} className="min-h-0">
              <CaseStudyCard study={study} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
