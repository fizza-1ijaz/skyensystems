"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Globe,
  Megaphone,
  Palette,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { ABOUT_SERVICES } from "@/lib/about-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";

const SERVICE_ICONS: Record<(typeof ABOUT_SERVICES)[number]["id"], LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  ai: Bot,
  design: Palette,
  marketing: Megaphone,
  teams: Users,
};

export function AboutWhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] py-16 md:py-[4.375rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-size:36px_36px] [background-image:linear-gradient(to_right,rgba(20,20,20,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.04)_1px,transparent_1px)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#31C3C3]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-[#6366F1]/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto w-full max-w-3xl text-center">
          <p className={eyebrowClass}>What We Do</p>
          <h2 className="editorial-section-title mx-auto mt-3 w-full max-w-none text-balance text-[#141414]">
            Digital Services That Connect Product Strategy, Technology and Growth.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ABOUT_SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id];
            const { accent } = service;

            return (
              <Reveal key={service.id} delay={0.05 * index}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                  className="h-full"
                >
                  <Link
                    href={service.href}
                    className={`group relative flex h-full min-h-[17.5rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#DADAD8] bg-white p-6 shadow-[0_16px_40px_-28px_rgba(20,20,20,0.35)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_28px_56px_-24px_rgba(20,20,20,0.22)] ${accent.border}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
                      aria-hidden
                    />

                    <div
                      className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-80 ${accent.bar}`}
                      aria-hidden
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br shadow-[0_12px_28px_-16px_rgba(20,20,20,0.45)] transition-transform duration-300 group-hover:scale-105 ${accent.iconBg}`}
                      >
                        <Icon className={`h-6 w-6 ${accent.iconColor}`} strokeWidth={2.1} />
                      </div>

                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DADAD8] bg-[#FAFAF8] text-[#141414] transition-all duration-300 group-hover:border-[#31C3C3]/35 group-hover:bg-[#31C3C3] group-hover:text-white">
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>

                    <div className="relative mt-6 flex flex-1 flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A] transition-colors duration-300 group-hover:text-[#31C3C3]">
                        {service.tag}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold tracking-[-0.02em] text-[#141414] transition-colors duration-300 group-hover:text-[#0F172A] md:text-[1.35rem]">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-[0.9375rem] md:leading-[1.68]">
                        {service.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 border-t border-dashed border-[#E5E5E3] pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#31C3C3] opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <span>Explore Service</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
