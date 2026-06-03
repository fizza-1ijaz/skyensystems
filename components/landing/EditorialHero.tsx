"use client";

import Link from "next/link";
import {
  Building2,
  Clock,
  Globe2,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { HERO_PROOF_POINTS } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

const PROOF_ICONS = [ShieldCheck, Rocket, Layers, Clock, Globe2, Building2] as const;

export function EditorialHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2]">
      {/* Embedded photography — architectural, not full-bleed hero */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[72%] w-[min(52%,640px)] opacity-[0.22]"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bgs/man.jfif')",
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 88%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#F4F4F2] via-[#F4F4F2]/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14 lg:grid-cols-12 lg:gap-6 lg:pb-28">
        {/* Left — editorial headline */}
        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B6B6B]">
              Software house · Bahrain & Pakistan
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="max-w-[14ch] font-heading text-[clamp(2.75rem,7.5vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
              We engineer
              <br />
              digital
              <br />
              <span className="text-[#6C63FF]">products</span>
              <br />
              that hold up.
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="mt-10 max-w-md">
            <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
              Skyen Systems is a PSEB-registered software company building websites, apps, and AI
              systems for businesses that need one accountable team — not seven vendors.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 border-b-2 border-[#141414] pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:border-[#6C63FF] hover:text-[#6C63FF]"
            >
              Begin a project
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        {/* Right — chamfered capability panel */}
        <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
          <Reveal delay={0.1} className="w-full max-w-lg lg:max-w-none">
            <div
              className="relative border border-[#D8D8D6] bg-[#FAFAF8] p-6 shadow-[24px_48px_80px_-48px_rgba(20,20,20,0.35)] md:p-8"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px, 28px 0)",
              }}
            >
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#E5E5E3] pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
                  Capability index
                </p>
                <span className="font-heading text-3xl font-bold text-[#6C63FF]">
                  06
                </span>
              </div>
              <ul className="space-y-5">
                {HERO_PROOF_POINTS.map((point, index) => {
                  const Icon = PROOF_ICONS[index] ?? ShieldCheck;
                  return (
                    <li key={point.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#E0E0DE] bg-white text-[#6C63FF]">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#141414]">{point.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[#5C5C5C]">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="h-px w-full bg-[#DADAD8]" aria-hidden />
    </section>
  );
}
