"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRUST_STRIP_ITEMS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const TRUST_STRIP_SPRING = { type: "spring" as const, stiffness: 380, damping: 26, mass: 0.45 };

function TrustStripCard({ item }: { item: (typeof TRUST_STRIP_ITEMS)[number] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex h-full flex-col justify-center bg-white px-5 py-4 md:px-6 md:py-5"
      initial={false}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              zIndex: 10,
              boxShadow: "0 18px 44px -14px rgba(49,195,195,0.35)",
            }
      }
      whileTap={reduceMotion ? undefined : { y: -2, scale: 0.98 }}
      transition={TRUST_STRIP_SPRING}
    >
      <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#141414] md:text-base">
        {item.label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B] md:text-sm">{item.detail}</p>
    </motion.div>
  );
}

export function TrustCredibilityStrip() {
  return (
    <section
      className="border-y border-[#E5E5E3] bg-white py-6 md:py-8"
      aria-label="Trust and credibility"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04} className="min-h-0">
              <TrustStripCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
