"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import { ABOUT_TECH_STACK } from "@/lib/about-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";

function TechFocusCard({
  item,
  index,
}: {
  item: (typeof ABOUT_TECH_STACK)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal delay={0.05 * index}>
      <motion.div
        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="group relative h-[5.75rem] rounded-full border border-[#DADAD8] bg-white shadow-[0_12px_32px_-20px_rgba(20,20,20,0.12)] transition-shadow duration-300 hover:border-[#C8C8C6] hover:shadow-[0_22px_44px_-18px_rgba(20,20,20,0.16)]"
      >
        <div className="flex h-full items-center justify-center px-5">
          <span className="text-center font-heading text-sm font-bold tracking-[-0.02em] text-[#141414] transition-transform duration-300 group-hover:scale-105 md:text-base">
            {item.label}
          </span>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function AboutTechFocusSection() {
  return (
    <section className="py-16 md:py-[4.375rem]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="max-w-3xl">
          <p className={eyebrowClass}>Technology Focus</p>
          <h2 className="editorial-section-title mt-3 text-[#141414]">
            We work across modern product, web, app, AI and growth systems.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_TECH_STACK.map((item, index) => (
            <TechFocusCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
