"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="pricing" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
            The agency that works like part of your team.
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Built for outcomes, accountability, and long-term growth.
          </p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl border border-white/80 bg-white/80 p-6 text-center text-[#0F172A]"
            >
              <h3 className="text-xl font-bold">{pillar.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
