"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustMessages = [
    "PSEB Registered Software House · Pakistan & Bahrain",
    "Trusted by 50+ US small businesses",
    "Free project consultation — 30 minutes, no obligation",
    "Response within 4 business hours, guaranteed",
  ];
  const [trustIndex, setTrustIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 24, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 24, mass: 0.8 });
  const panelRotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const panelRotateY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const panelShiftX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const panelShiftY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const onHeroPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  };

  const onHeroPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTrustIndex((current) => (current + 1) % trustMessages.length);
    }, 3200);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative mx-auto min-h-[72vh] w-full max-w-[1700px] overflow-hidden px-6 pb-8 pt-28 md:min-h-[66vh] md:px-10 md:pb-6 md:pt-[120px] lg:min-h-[70vh] lg:pb-8 lg:pt-[120px] xl:min-h-[88vh] xl:pb-16 xl:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#d6e5ff88] blur-3xl" />
        <div className="absolute right-8 top-12 h-80 w-80 rounded-full bg-[#ddd5ff70] blur-3xl" />
        <div className="absolute bottom-8 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-[#e4edff75] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.84),rgba(241,247,255,0.75)_44%,rgba(235,243,255,0.72))]" />
        <div className="absolute inset-0 opacity-40 [background-size:38px_38px] [background-image:linear-gradient(to_right,rgba(123,140,175,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,140,175,0.12)_1px,transparent_1px)]" />
      </div>

      <div
        ref={heroRef}
        onPointerMove={onHeroPointerMove}
        onPointerLeave={onHeroPointerLeave}
        className="relative z-10 mx-auto w-full max-w-7xl text-center"
        style={{ transform: "translateY(-20px)" }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto inline-flex min-h-10 items-center rounded-full border border-[#d8e5ff] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#4a6490] shadow-[0_15px_40px_-30px_rgba(64,95,175,0.5)] lg:mx-0"
            aria-live="polite"
          >
            <motion.span
              key={trustMessages[trustIndex]}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="text-center"
            >
              {trustMessages[trustIndex]}
            </motion.span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="mt-4 text-balance text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0f2544] md:text-6xl lg:text-[5.45rem]"
          >
            <span className="block">One Team.</span>
            <motion.span
              className="block bg-gradient-to-r from-[#324b8f] via-[#6b63ff] to-[#34b7ff] bg-clip-text text-transparent"
              animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "180% 100%" }}
            >
              Every Digital Need.
            </motion.span>
            <span className="block">Anywhere.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-5xl text-balance text-base leading-relaxed text-[#4a6388] md:text-lg"
          >
            We build websites, mobile apps, AI-powered products, and run the digital marketing that fills them with customers. PSEB-registered. US-market focused. One team that becomes part of yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#112B44] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-24px_rgba(17,43,68,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1B3E5E]"
            >
              Start Your Project
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/products"
              className="rounded-xl border border-[#d7e4ff] bg-white/80 px-6 py-3 text-sm font-semibold text-[#36527f] shadow-[0_16px_38px_-30px_rgba(64,95,175,0.7)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#c3d8ff]"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.62, ease: "easeOut" }}
            className="mt-8 grid grid-cols-1 gap-2.5 text-center text-sm text-[#DCE9FF] sm:grid-cols-2"
          >
            {[
              "✓ PSEB Registered",
              "✓ 50+ Projects Delivered",
              "✓ US Timezone Support",
              "✓ 4-Hour Response Guarantee",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#274A68] bg-[#112B44] px-3.5 py-2.5 font-semibold text-[#EAF2FF] shadow-[0_14px_30px_-22px_rgba(17,43,68,0.7)]"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
