"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const pillars = [
  {
    name: "PSEB Registered",
    description:
      "We are a formally registered software house under Pakistan's Software Export Board — meaning quality, accountability, and a structured operation, not a freelancer.",
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
  const [activePillar, setActivePillar] = useState(pillars[0].name);
  const selectedPillar = pillars.find((pillar) => pillar.name === activePillar) ?? pillars[0];

  return (
    <section id="pricing" className="px-6 pb-10 pt-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
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

        <div className="relative hidden min-h-[620px] overflow-hidden rounded-[2.2rem] border border-[#dce7ff] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(241,247,255,0.84))] md:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-[#dce9ff88] blur-3xl" />
            <div className="absolute right-10 top-12 h-64 w-64 rounded-full bg-[#e0d9ff85] blur-3xl" />
          </div>

          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 700" fill="none">
            {[
              { toX: 230, toY: 210, id: "PSEB Registered" },
              { toX: 970, toY: 210, id: "US Market Focused" },
              { toX: 250, toY: 430, id: "Full Stack" },
              { toX: 950, toY: 430, id: "Long-Term Partners" },
            ].map((line) => (
              <motion.path
                key={line.id}
                initial={false}
                d={`M600 350 Q 600 350 ${line.toX} ${line.toY}`}
                stroke={activePillar === line.id ? "rgba(92,104,255,0.85)" : "rgba(114,138,180,0.38)"}
                strokeWidth={activePillar === line.id ? 2.8 : 1.8}
                strokeLinecap="round"
                strokeDasharray="6 8"
                animate={{ opacity: activePillar === line.id ? 1 : 0.58 }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-[43%] z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border border-[#d8e6ff] bg-white/75 shadow-[0_25px_70px_-30px_rgba(74,111,192,0.8)] backdrop-blur-2xl">
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

          {[
            { name: "PSEB Registered", pos: "left-[12%] top-[28%]" },
            { name: "US Market Focused", pos: "right-[12%] top-[28%]" },
            { name: "Full Stack", pos: "left-[16%] bottom-[30%]" },
            { name: "Long-Term Partners", pos: "right-[14%] bottom-[30%]" },
          ].map((node) => {
            const isActive = node.name === activePillar;
            return (
              <motion.button
                key={node.name}
                type="button"
                onMouseEnter={() => setActivePillar(node.name)}
                onFocus={() => setActivePillar(node.name)}
                className={`absolute z-30 ${node.pos} rounded-full border px-4 py-2.5 text-sm font-bold text-[#2a4d86] shadow-[0_24px_50px_-34px_rgba(88,117,193,0.9)] backdrop-blur-xl transition-all ${
                  isActive
                    ? "border-[#b8cdff] bg-white/92 scale-105"
                    : "border-[#d9e7ff] bg-white/72"
                }`}
              >
                {node.name}
              </motion.button>
            );
          })}

          <motion.div
            key={`pillar-detail-${selectedPillar.name}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 z-30 w-[min(88%,720px)] -translate-x-1/2 rounded-2xl border border-[#cfdeff] bg-white/86 p-5 text-center shadow-[0_24px_56px_-36px_rgba(88,117,193,0.95)] backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d84ab]">
              {selectedPillar.name}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#4a6388]">
              {selectedPillar.description}
            </p>
          </motion.div>
        </div>

        <div className="rounded-2xl border border-[#dce7ff] bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(241,247,255,0.9))] p-5 shadow-[0_18px_44px_-36px_rgba(88,117,193,0.75)] md:hidden">
          <div className="space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="relative pl-6">
                <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[#5a68ff] shadow-[0_0_12px_rgba(90,104,255,0.8)]" />
                <h3 className="font-semibold text-[#1f3b66]">{pillar.name}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
