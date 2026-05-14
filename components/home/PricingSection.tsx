"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/** Wavy hub→node connector in viewBox 1200×700. */
function wavyConnectorPath(
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  segments = 38,
  waves = 4,
  amplitude = 13,
) {
  const dx = ex - sx;
  const dy = ey - sy;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len;
  const py = dx / len;
  const parts: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = sx + dx * t;
    const y = sy + dy * t;
    const envelope = Math.sin(t * Math.PI);
    const wobble = Math.sin(t * Math.PI * 2 * waves) * amplitude * envelope;
    const x2 = x + px * wobble;
    const y2 = y + py * wobble;
    parts.push(i === 0 ? `M ${x2.toFixed(1)} ${y2.toFixed(1)}` : `L ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return parts.join(" ");
}

/** Horizontal wave seam between colored header and white body (viewBox 1200×28). */
function CardHeaderWavePath() {
  return "M0,12 C100,24 200,0 300,12 S500,24 600,12 S800,0 900,12 S1100,24 1200,12 L1200,28 L0,28 Z";
}

const pillars = [
  {
    name: "PSEB Registered",
    description:
      "Skyen Systems is incorporated in Bahrain (CR No. 190698-1) with a PSEB-registered office in Lahore, Pakistan — offering regulated operations, professional accountability, and the reliability missing from anonymous freelancers or unregistered agencies.",
  },
  {
    name: "US Market Focused",
    description:
      "We understand American business culture, customer expectations, and market dynamics. Our work is built for US users, not adapted for them as an afterthought.",
  },
  {
    name: "Full Stack",
    description:
      "Website. App. Design. AI. Marketing. One team handles everything. No briefing seven different vendors and hoping they work together.",
  },
  {
    name: "Long-Term Partners",
    description:
      "We measure success in client relationships that last years, not projects that close and move on. Your growth is how we grow.",
  },
];

export function PricingSection() {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const nodes = [
    {
      name: "PSEB Registered",
      xPct: 26,
      yPct: 25,
      waves: 3.8 as const,
      amplitude: 12 as const,
      fill: "rgba(255, 228, 240, 0.94)",
      fillActive: "rgba(255, 210, 230, 0.98)",
      stroke: "rgba(236, 140, 175, 0.65)",
      strokeActive: "rgba(214, 95, 138, 0.85)",
      text: "#5c2140",
      lineIdle: "rgba(220, 150, 175, 0.42)",
      lineActive: "rgba(200, 85, 130, 0.88)",
    },
    {
      name: "US Market Focused",
      xPct: 81.2,
      yPct: 18,
      waves: 4.2 as const,
      amplitude: 14 as const,
      fill: "rgba(237, 228, 255, 0.94)",
      fillActive: "rgba(224, 210, 255, 0.98)",
      stroke: "rgba(150, 130, 220, 0.6)",
      strokeActive: "rgba(120, 95, 200, 0.82)",
      text: "#3a2a5c",
      lineIdle: "rgba(160, 140, 210, 0.4)",
      lineActive: "rgba(110, 80, 190, 0.88)",
    },
    {
      name: "Full Stack",
      xPct: 26,
      yPct: 72,
      waves: 3.5 as const,
      amplitude: 13 as const,
      fill: "rgba(214, 240, 255, 0.94)",
      fillActive: "rgba(190, 230, 255, 0.98)",
      stroke: "rgba(100, 170, 220, 0.6)",
      strokeActive: "rgba(55, 145, 205, 0.82)",
      text: "#0c3a55",
      lineIdle: "rgba(110, 175, 215, 0.4)",
      lineActive: "rgba(45, 140, 200, 0.88)",
    },
    {
      name: "Long-Term Partners",
      xPct: 74,
      yPct: 72,
      waves: 4 as const,
      amplitude: 11 as const,
      fill: "rgba(255, 234, 214, 0.94)",
      fillActive: "rgba(255, 218, 190, 0.98)",
      stroke: "rgba(235, 155, 105, 0.65)",
      strokeActive: "rgba(220, 120, 65, 0.85)",
      text: "#6b3010",
      lineIdle: "rgba(220, 160, 120, 0.42)",
      lineActive: "rgba(210, 100, 45, 0.88)",
    },
  ] as const;

  return (
    <section id="pricing" className="px-6 pb-10 pt-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
            The agency that works like part of your team.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Built for outcomes, accountability, and long-term growth.
          </p>
        </motion.div>

        <div
          className="relative hidden min-h-[760px] overflow-visible rounded-[2.2rem] border border-[#dce7ff] bg-[#f7f9fc] pb-8 md:block"
          style={{ transform: "translateY(-15px)" }}
          onPointerLeave={() => setActivePillar(null)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(241,247,255,0.9))]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-[#dce9ff88] blur-3xl" />
            <div className="absolute right-10 top-12 h-64 w-64 rounded-full bg-[#e0d9ff85] blur-3xl" />
          </div>

          <svg className="absolute inset-0 z-10 h-full w-full -translate-y-2.5" viewBox="0 0 1200 700" fill="none">
            {nodes.map((line) => {
              const ex = (line.xPct / 100) * 1200;
              const ey = (line.yPct / 100) * 700;
              const d = wavyConnectorPath(600, 350, ex, ey, 38, line.waves, line.amplitude);
              return (
                <g key={line.name}>
                  <motion.path
                    initial={false}
                    d={d}
                    stroke="transparent"
                    strokeWidth={32}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pointerEvents: "stroke", cursor: "pointer" }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Highlight ${line.name}`}
                    onPointerEnter={() => setActivePillar(line.name)}
                    onFocus={() => setActivePillar(line.name)}
                  />
                  <motion.path
                    initial={false}
                    d={d}
                    stroke={
                      activePillar === line.name ? line.lineActive : line.lineIdle
                    }
                    strokeWidth={activePillar === line.name ? 2.7 : 1.85}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{ pointerEvents: "none" }}
                    animate={{ opacity: activePillar === line.name ? 1 : 0.55 }}
                    transition={{ duration: 0.22 }}
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-[22] h-36 w-36 -translate-x-1/2 -translate-y-[calc(50%+10px)] rounded-[1.8rem] border border-[#d8e6ff] bg-white/75 shadow-[0_25px_70px_-30px_rgba(74,111,192,0.8)] backdrop-blur-2xl">
            <motion.div
              className="absolute inset-4 rounded-2xl border border-[#d9e9ff] bg-[radial-gradient(circle_at_30%_30%,#f4f8ff,rgba(223,236,255,0.8))]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/logo.jpeg"
                  alt="Skyen Systems logo"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="absolute inset-0 z-[18] -translate-y-2.5">
            {nodes.map((node) => {
              const pillar = pillars.find((p) => p.name === node.name)!;
              const isHot = activePillar === node.name;
              const headerBg = isHot ? node.fillActive : node.fill;
              return (
                <div
                  key={node.name}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 outline-none focus-visible:ring-2 focus-visible:ring-[#5a68ff]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f9fc] rounded-2xl"
                  style={{ left: `${node.xPct}%`, top: `${node.yPct}%` }}
                  onPointerEnter={() => setActivePillar(node.name)}
                  tabIndex={0}
                  role="group"
                  aria-label={node.name}
                >
                  <motion.div
                    className="relative w-[min(440px,38vw)] min-w-[300px] max-w-[min(520px,42vw)]"
                    animate={{ scale: isHot ? 1.02 : 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <article className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                      <div
                        className="px-4 pb-1 pt-3.5 sm:px-5 sm:pt-4"
                        style={{ backgroundColor: headerBg }}
                      >
                        <h3
                          className="text-[0.8125rem] font-bold leading-snug tracking-tight sm:text-[0.9375rem]"
                          style={{ color: node.text }}
                        >
                          {node.name}
                        </h3>
                      </div>
                      <div
                        className="relative -mt-px h-[14px] w-full sm:h-[18px]"
                        style={{ backgroundColor: headerBg }}
                        aria-hidden
                      >
                        <svg
                          className="absolute inset-0 block h-full w-full"
                          viewBox="0 0 1200 28"
                          preserveAspectRatio="none"
                        >
                          <path fill="#ffffff" d={CardHeaderWavePath()} />
                        </svg>
                      </div>
                      <div className="bg-white px-4 pb-4 pt-2 sm:px-5 sm:pb-5 sm:pt-2.5">
                        <p className="text-left text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                          {pillar.description}
                        </p>
                      </div>
                    </article>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 space-y-4 md:hidden">
          {pillars.map((pillar) => {
            const accent = nodes.find((n) => n.name === pillar.name)!;
            return (
              <article
                key={pillar.name}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm"
              >
                <div className="px-4 pb-1 pt-3.5" style={{ backgroundColor: accent.fill }}>
                  <h3
                    className="text-center text-[0.8125rem] font-bold leading-snug tracking-tight"
                    style={{ color: accent.text }}
                  >
                    {pillar.name}
                  </h3>
                </div>
                <div
                  className="relative -mt-px h-[14px] w-full"
                  style={{ backgroundColor: accent.fill }}
                  aria-hidden
                >
                  <svg
                    className="absolute inset-0 block h-full w-full"
                    viewBox="0 0 1200 28"
                    preserveAspectRatio="none"
                  >
                    <path fill="#ffffff" d={CardHeaderWavePath()} />
                  </svg>
                </div>
                <div className="bg-white px-4 pb-4 pt-2">
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
