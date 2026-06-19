"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/landing/Reveal";
import { OptimizedPhoto } from "@/components/ui/OptimizedPhoto";
import { SITE_IMAGE_QUALITY } from "@/lib/site-image";

export type ServiceRelatedWorkData = {
  label: string;
  heading: string;
  paragraph: string;
  cards: readonly {
    title: string;
    description: string;
    logo: string;
    backgroundImage: string;
    href: string;
  }[];
};

const CARD_SPRING = { type: "spring" as const, stiffness: 360, damping: 28, mass: 0.52 };

function RelatedWorkCard({
  card,
  index,
}: {
  card: ServiceRelatedWorkData["cards"][number];
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
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 0 48px -6px rgba(49,195,195,0.55), 0 28px 64px -32px rgba(49,195,195,0.4)",
            }
      }
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#141414] p-6 text-center transition-[border-color] duration-300 hover:border-[#31C3C3]/55 md:rounded-3xl md:p-8"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <OptimizedPhoto
          src={card.backgroundImage}
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={SITE_IMAGE_QUALITY.content}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414]/94 via-[#0f172a]/75 to-[#0f172a]/75" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(49,195,195,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#141414] transition-[border-color,transform,box-shadow] duration-300 group-hover:scale-105 group-hover:border-[#31C3C3]/45 group-hover:shadow-[0_0_28px_-4px_rgba(49,195,195,0.5)] motion-reduce:group-hover:scale-100">
        <Image src={card.logo} alt="" fill className="object-contain p-2" sizes="80px" quality={SITE_IMAGE_QUALITY.thumb} loading="lazy" />
      </div>

      <h3 className="relative z-10 mt-6 w-full font-heading text-xl font-bold leading-snug text-[#FAFAF8] md:text-2xl">
        {card.title}
      </h3>
      <p className="relative z-10 mt-4 w-full flex-1 text-sm leading-relaxed text-[#B8B8B8] transition-colors duration-300 group-hover:text-[#E8E8E8] md:text-base">
        {card.description}
      </p>

      <div className="relative z-10 mt-6 flex w-full justify-center">
        <Link
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-semibold text-[#31C3C3] transition-colors hover:text-[#5ee8e8]"
        >
          View product →
        </Link>
      </div>
    </motion.article>
  );
}

export function ServiceRelatedWorkSection({ data }: { data: ServiceRelatedWorkData }) {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {data.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {data.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {data.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {data.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="min-h-0">
              <RelatedWorkCard card={card} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
