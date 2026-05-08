"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PremiumHeroBubbles } from "@/components/marketing/PremiumHeroBubbles";
import { useEffect, useState } from "react";

const trustMessages = [
  "PSEB Registered Software House · Pakistan & Bahrain",
  "Trusted by 50+ US small businesses",
  "Free project consultation — 30 minutes, no obligation",
  "Response within 4 business hours, guaranteed",
];

export function Hero() {
  const [trustIndex, setTrustIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustMessages.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto flex min-h-[74vh] w-full max-w-[1600px] items-center px-6 py-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden py-10 text-center md:py-14"
      >
        <PremiumHeroBubbles />
        <div className="mx-auto mb-6 w-fit rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-700 backdrop-blur-xl">
          {trustMessages[trustIndex]}
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          YOUR GROWTH-FOCUSED DIGITAL PARTNER
        </p>
        <h1 className="mx-auto max-w-[1200px] text-balance text-4xl font-bold leading-[1.02] md:text-6xl lg:text-[5.2rem]">
          One Team.
          <br />
          <span className="text-gradient">Every Digital Need.</span>
          <br />
          Anywhere.
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg text-slate-600 md:text-xl">
          We build websites, mobile apps, AI-powered products, and run the digital
          marketing that fills them with customers. PSEB-registered. US-market
          focused. One team that becomes part of yours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-xl bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(108,99,255,1)]">
            Start Your Project →
          </Link>
          <Link href="/portfolio" className="rounded-xl border border-white/50 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl">
            View Our Work
          </Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            "✓ PSEB Registered",
            "✓ 50+ Projects Delivered",
            "✓ US Timezone Support",
            "✓ 4-Hour Response Guarantee",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/50 bg-white/60 px-4 py-3 text-center font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
