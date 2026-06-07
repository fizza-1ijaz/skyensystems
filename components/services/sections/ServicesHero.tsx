"use client";

import {
  SERVICES_CAPABILITY_MATRIX,
  SERVICES_HERO_STATS,
} from "@/lib/services-page-data";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";

function SystemDiagram() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full" aria-hidden fill="none">
      <rect x="8" y="8" width="344" height="264" stroke="#D4D4D4" strokeWidth="1" />
      <line x1="8" y1="48" x2="352" y2="48" stroke="#E5E5E3" />
      <text x="24" y="32" fill="#8A8A8A" fontSize="9" fontFamily="system-ui" letterSpacing="0.12em">
        DELIVERY SYSTEM
      </text>
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={24 + col * 108}
            y={64 + row * 68}
            width="92"
            height="52"
            stroke={row === 1 && col === 1 ? "#31C3C3" : "#D4D4D4"}
            fill={row === 1 && col === 1 ? "rgb(108 99 255 / 0.08)" : "#FAFAF8"}
          />
        )),
      )}
      <path d="M128 90 L232 90 M180 116 L180 200" stroke="#31C3C3" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="180" cy="156" r="8" fill="#31C3C3" />
    </svg>
  );
}

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-[13ch] font-heading text-[clamp(2.5rem,6.5vw,4.75rem)] font-bold leading-[0.94] tracking-[-0.04em] text-[#141414]">
              We solve complex
              <br />
              business &amp;
              <br />
              <span className="text-[#31C3C3]">technical</span>
              <br />
              problems.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C5C5C] md:text-lg">
              Skyen Systems is a PSEB-registered software house — strategy, design, engineering,
              AI, and growth under one accountable team for US, UK, and GCC clients.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-8">
            <EditorialBoxCta href="/contact-us" variant="neutral">
              Discuss your challenge
            </EditorialBoxCta>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="border border-[#E5E5E3] bg-white p-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                Capability matrix
              </p>
              <ul className="grid grid-cols-2 gap-px bg-[#E5E5E3]">
                {SERVICES_CAPABILITY_MATRIX.map((item) => (
                  <li key={item} className="bg-[#FAFAF8] px-3 py-2.5 text-xs font-medium text-[#141414]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-px bg-[#E5E5E3]">
              {SERVICES_HERO_STATS.map((stat) => (
                <div key={stat.label} className="bg-white px-4 py-4">
                  <p className="font-heading text-2xl font-bold text-[#141414]">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#8A8A8A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16} className="h-48 border border-[#E5E5E3] bg-white p-3 md:h-56">
            <SystemDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
