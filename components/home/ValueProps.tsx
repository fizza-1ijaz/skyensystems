"use client";

import { motion } from "framer-motion";

const points = [
  {
    id: "01",
    title: "Founder-level execution",
    body: "We do not outsource random freelancers. You work with a focused product team that ships real systems, fast.",
  },
  {
    id: "02",
    title: "Everything under one roof",
    body: "Web, mobile, design, content, marketing - all handled by one coordinated team. No communication gaps.",
  },
  {
    id: "03",
    title: "Built on outcomes, not vanity",
    body: "Our process is designed to increase inquiries, improve conversion, and make your brand feel premium from day one.",
  },
];

export function ValueProps() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">What makes Skyen Systems different</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
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
