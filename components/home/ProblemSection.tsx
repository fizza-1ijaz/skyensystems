"use client";

import { motion } from "framer-motion";

/**
 * Figures are literal text in the DOM on first paint (SSR / compliance / no-JS).
 * Framer Motion adds a light entrance on the value block when JS runs.
 */
const stats = [
  { target: 20, suffix: "+", title: "Projects Delivered" },
  { target: 4, suffix: " hrs", title: "Response Guarantee" },
  { target: 3, suffix: "", title: "Products Live/Dev" },
  {
    target: 2,
    suffix: "",
    title: "Offices — Bahrain (head) & Lahore, PK (regional)",
  },
] as const;

export function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative bg-white px-6 py-14 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="rounded-2xl border border-[#274A68] bg-[#112B44] px-5 py-6 shadow-[0_16px_35px_-24px_rgba(17,43,68,0.72)] transition-all duration-300 hover:border-[#1fc7cf] hover:shadow-[0_16px_35px_-24px_rgba(31,199,207,0.3)]"
            >
              <motion.p
                className="text-4xl md:text-5xl font-extrabold text-[#EAF2FF] transition-colors"
                initial={{ opacity: 0.88, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 28,
                  delay: 0.04 + index * 0.06,
                }}
              >
                <span className="tabular-nums tracking-tight">{stat.target}</span>
                <span className="text-[#1fc7cf]">{stat.suffix}</span>
              </motion.p>
              <p className="mt-2 text-balance text-sm font-semibold leading-snug text-[#C5D4E7]">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
