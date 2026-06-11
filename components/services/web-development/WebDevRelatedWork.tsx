"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import { WEB_DEV_RELATED_WORK } from "@/lib/web-development-service-data";

const CARD_SPRING = { type: "spring" as const, stiffness: 360, damping: 28, mass: 0.52 };

function RelatedWorkCard({
  card,
  index,
}: {
  card: (typeof WEB_DEV_RELATED_WORK.cards)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...CARD_SPRING, delay: reduceMotion ? 0 : index * 0.08 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              boxShadow:
                "0 0 40px -8px rgba(49,195,195,0.45), 0 24px 56px -32px rgba(49,195,195,0.3)",
            }
      }
      className="group flex h-full flex-col border border-[#E5E5E3] bg-white p-6 transition-[border-color] duration-300 hover:border-[#31C3C3]/45 md:p-8"
    >
      <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-xl border border-[#E5E5E3] bg-[#FAFAF8]">
        <Image
          src={card.logo}
          alt=""
          fill
          className="object-contain p-2"
          sizes="64px"
        />
      </div>

      <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-[#141414] md:text-2xl">
        {card.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
        {card.description}
      </p>

      <Link
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex text-sm font-semibold text-[#31C3C3] transition-colors hover:text-[#2AB0B0]"
      >
        View product →
      </Link>
    </motion.article>
  );
}

export function WebDevRelatedWork() {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {WEB_DEV_RELATED_WORK.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {WEB_DEV_RELATED_WORK.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {WEB_DEV_RELATED_WORK.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {WEB_DEV_RELATED_WORK.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="min-h-0">
              <RelatedWorkCard card={card} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
