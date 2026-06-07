"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TRUST_STATS } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

const TESTIMONIAL = {
  quote:
    "Skyen Systems delivered a polished platform on time — clear communication, strong engineering, and no agency fluff.",
  role: "Client · US small business",
};

const PRODUCT_PROOF = [
  {
    label: "Studiely — Live on App Store & Play Store",
    href: "/products/studiely",
  },
  { label: "Make My Lesson — Live on App Store & Play Store" },
  { label: "Linguatude — In development" },
] as const;

const BUBBLY_SPRING = { type: "spring" as const, stiffness: 820, damping: 24, mass: 0.32 };

const bubblyClassName =
  "block cursor-pointer text-left transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#31C3C3]/50 focus-visible:ring-offset-2";

const MotionLink = motion.create(Link);

function BubblyPressable({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    transition: BUBBLY_SPRING,
    className: `${bubblyClassName} ${className}`,
    whileTap: reduceMotion ? undefined : { y: -6, scale: 1.04 },
    whileHover: reduceMotion ? undefined : { y: -2, scale: 1.015 },
  };

  if (href) {
    return <MotionLink href={href} {...motionProps}>{children}</MotionLink>;
  }

  return (
    <motion.button type="button" {...motionProps}>
      {children}
    </motion.button>
  );
}

export function TrustSection() {
  return (
    <section className="border-y border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="grid grid-cols-1 gap-px bg-[#E5E5E3] min-[400px]:grid-cols-2 sm:grid-cols-4 lg:col-span-7">
            {TRUST_STATS.map((stat) => (
              <BubblyPressable
                key={stat.label}
                className="min-w-0 bg-white p-4 min-[400px]:p-5 sm:p-6 md:p-8 hover:shadow-[0_16px_40px_-28px_rgba(49,195,195,0.35)]"
              >
                <p className="font-heading text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase leading-snug tracking-[0.12em] text-[#6B6B6B] sm:text-xs sm:tracking-[0.14em]">
                  {stat.label}
                </p>
              </BubblyPressable>
            ))}
          </Reveal>

          <Reveal
            delay={0.08}
            className="flex flex-col border border-[#E5E5E3] bg-[#FAFAF8] lg:col-span-5"
          >
            <BubblyPressable className="p-8 hover:shadow-[0_16px_40px_-28px_rgba(49,195,195,0.28)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                Registration
              </p>
              <p className="mt-4 font-heading text-2xl font-bold text-[#141414]">
                PSEB-registered software export house
              </p>
            </BubblyPressable>

            <BubblyPressable className="border-t border-[#E5E5E3] px-8 py-6 hover:shadow-[0_16px_40px_-28px_rgba(49,195,195,0.28)]">
              <p className="break-words text-sm leading-relaxed text-[#5C5C5C]">
                Qismat Ventures W.L.L. · CR 190698-1 · Bahrain head office · Lahore delivery
                centre
              </p>
            </BubblyPressable>

            <ul className="border-t border-[#E5E5E3]">
              {PRODUCT_PROOF.map((product) => (
                <li key={product.label}>
                  <BubblyPressable
                    href={"href" in product ? product.href : undefined}
                    className="w-full px-8 py-3 hover:bg-white/60 hover:shadow-[0_12px_32px_-24px_rgba(49,195,195,0.3)]"
                  >
                    <span className="break-words text-xs uppercase tracking-[0.12em] text-[#8A8A8A]">
                      {product.label}
                    </span>
                  </BubblyPressable>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.12}
            className="border-l-4 border-[#31C3C3] bg-[#141414] p-8 text-[#FAFAF8] lg:col-span-12"
          >
            <p className="font-heading text-2xl font-medium leading-snug md:text-3xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#9A9A9A]">
              {TESTIMONIAL.role}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
