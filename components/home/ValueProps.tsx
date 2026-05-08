"use client";

import { motion } from "framer-motion";

const points = [
  {
    id: "01",
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your goals, timeline, and budget. No sales pitch. Just listening and asking the right questions.",
  },
  {
    id: "02",
    title: "Proposal & Quote",
    body: "A clear, itemised proposal within 24 hours. Exactly what we'll build, when it'll be ready, and what it will cost. No surprises.",
  },
  {
    id: "03",
    title: "Design & Prototype",
    body: "We show you before we build. Figma prototypes and design reviews so you approve the look before a line of code is written.",
  },
  {
    id: "04",
    title: "Build & Iterate",
    body: "Agile sprints. Weekly updates. You see progress every week — not a surprise reveal at the end.",
  },
  {
    id: "05",
    title: "Launch & Support",
    body: "We don't disappear at launch. Ongoing support, maintenance, and growth are part of how we work.",
  },
];

export function ValueProps() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            OUR PROCESS
          </p>
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
            From idea to launch — and everything after.
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {points.map((point, index) => (
            <motion.article
              key={point.id}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl border border-white/80 bg-white p-6 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.5)]"
            >
              <p className="mb-4 text-sm font-bold text-[#6C63FF]">{point.id}</p>
              <h3 className="text-xl font-semibold text-[#0F172A]">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{point.body}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A] opacity-70 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
