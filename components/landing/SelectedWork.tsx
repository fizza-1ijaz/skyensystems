"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURED_PRODUCTS, FEATURED_PRODUCTS_CARDS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const CARD_GLOW_SPRING = { type: "spring" as const, stiffness: 360, damping: 28, mass: 0.52 };
const BTN_SPRING = { type: "spring" as const, stiffness: 440, damping: 24, mass: 0.4 };

const MotionLink = motion.create(Link);

function ProductViewCta({ href }: { href: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
              boxShadow: "0 12px 32px -12px rgba(49,195,195,0.45)",
            }
      }
      whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
      transition={BTN_SPRING}
      className="group/btn relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#31C3C3]/30 bg-[#141414] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#FAFAF8] transition-colors duration-300 hover:border-[#31C3C3] motion-reduce:hover:bg-[#31C3C3] motion-reduce:hover:text-[#141414]"
    >
      <span
        className="absolute inset-0 origin-bottom scale-y-0 bg-[#31C3C3] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-y-100 motion-reduce:group-hover/btn:scale-y-0"
        aria-hidden
      />
      <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#141414]">
        View product
      </span>
    </MotionLink>
  );
}

function ViewAllProductsCta() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionLink
      href="/products"
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
      transition={BTN_SPRING}
      className="group/all relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#141414] bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#141414] shadow-[0_16px_40px_-28px_rgba(20,20,20,0.25)] transition-[border-color,box-shadow] duration-300 hover:border-[#31C3C3] hover:shadow-[0_20px_48px_-24px_rgba(49,195,195,0.4)] motion-reduce:hover:bg-[#31C3C3] motion-reduce:hover:text-[#141414]"
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-[#31C3C3] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/all:scale-x-100 motion-reduce:group-hover/all:scale-x-0"
        aria-hidden
      />
      <span className="relative z-10 transition-colors duration-300 group-hover/all:text-[#141414]">
        View all products
      </span>
    </MotionLink>
  );
}

function ProductCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PRODUCTS_CARDS)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...CARD_GLOW_SPRING, delay: reduceMotion ? 0 : index * 0.08 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 0 48px -6px rgba(49,195,195,0.55), 0 28px 64px -32px rgba(49,195,195,0.4)",
            }
      }
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#1A1A1A] p-6 transition-[border-color] duration-300 hover:border-[#31C3C3]/55 md:rounded-3xl md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(49,195,195,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#141414] transition-[border-color,transform,box-shadow] duration-300 group-hover:scale-105 group-hover:border-[#31C3C3]/45 group-hover:shadow-[0_0_28px_-4px_rgba(49,195,195,0.5)] motion-reduce:group-hover:scale-100">
        <Image
          src={project.logo}
          alt={`${project.name.split(" — ")[0]} logo`}
          fill
          className="object-contain p-2"
          sizes="80px"
        />
      </div>

      <p className="relative z-10 mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3] transition-colors duration-300 group-hover:text-[#5ee8e8]">
        {project.category}
      </p>
      <h3 className="relative z-10 mt-2 text-center font-heading text-2xl font-bold text-[#FAFAF8]">
        {project.name}
      </h3>
      <p className="relative z-10 mt-4 flex-grow text-center text-sm leading-relaxed text-[#B8B8B8] transition-colors duration-300 group-hover:text-[#E8E8E8]">
        {project.description}
      </p>

      <div className="relative z-10 mt-8 border-t border-[#2E2E2E] pt-6 text-center transition-colors duration-300 group-hover:border-[#31C3C3]/25">
        <p className="font-heading text-lg font-bold text-[#FAFAF8]">{project.metric}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8A8A8A] transition-colors duration-300 group-hover:text-[#B8D4D4]">
          {project.metricLabel}
        </p>
      </div>

      <div className="relative z-10 mt-6 w-full">
        <ProductViewCta href={project.href} />
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  return (
    <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="editorial-section-title text-balance text-[#141414]">
            {FEATURED_PRODUCTS.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {FEATURED_PRODUCTS.subheading}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {FEATURED_PRODUCTS_CARDS.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06} className="min-h-0">
              <ProductCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <ViewAllProductsCta />
        </Reveal>
      </div>
    </section>
  );
}
