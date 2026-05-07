"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PremiumHeroBubbles } from "@/components/marketing/PremiumHeroBubbles";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[74vh] w-full max-w-[1600px] items-center px-6 py-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden py-10 text-center md:py-14"
      >
        <PremiumHeroBubbles />
        <h1 className="mx-auto max-w-[1200px] text-balance text-4xl font-bold leading-[1.02] md:text-6xl lg:text-[5.2rem]">
          One team. Every digital need. <span className="text-gradient">Anywhere.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-slate-600 md:text-xl">
          We build websites, mobile apps, and digital brands with the same craft
          we put into our own products. Serious capability. Straightforward
          pricing. No agency games.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/pricing" className="rounded-xl bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(108,99,255,1)]">
            See Our Packages
          </Link>
          <Link href="https://calendly.com/skyensystems/discovery" className="rounded-xl border border-white/50 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl">
            Book a Free Call
          </Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Headquartered in Bahrain",
            "Avg. delivery in 3-4 weeks",
            "PSEB Certified",
            "Part of Skyen Group",
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
