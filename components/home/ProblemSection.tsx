"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { target: 50, suffix: "+", title: "Projects Delivered" },
  { target: 4, suffix: " hrs", title: "Response Guarantee" },
  { target: 3, suffix: "", title: "Products Live/Dev" },
  { target: 2, suffix: "", title: "Offices PK + BH" },
];

export function ProblemSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let frameId = 0;
    const start = performance.now();
    const duration = 2000;

    const tick = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(1, elapsed / duration);
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      
      setCounts(
        stats.map((item) => Math.floor(item.target * easeOutQuad))
      );
      
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible]);

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
    <section className="relative bg-white px-6 py-14 md:px-10" ref={ref}>
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
              <p className="text-4xl md:text-5xl font-extrabold text-[#EAF2FF] transition-colors">
                {counts[index]}
                <span className="text-[#1fc7cf]">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-[#C5D4E7]">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
