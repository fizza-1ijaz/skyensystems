"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { target: 50, suffix: "+", title: "Projects Delivered" },
  { target: 4, suffix: " hrs", title: "Response Guarantee" },
  { target: 3, suffix: "", title: "Products Live/Dev" },
  { target: 2, suffix: "", title: "Offices PK + BH" },
];

export function ProblemSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      setCounts(stats.map((item) => Math.floor(item.target * progress)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="bg-white px-6 py-14 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-[#274A68] bg-[#112B44] px-5 py-6 shadow-[0_16px_35px_-24px_rgba(17,43,68,0.72)]"
            >
              <p className="text-4xl font-extrabold text-[#EAF2FF]">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#C5D4E7]">{stat.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
