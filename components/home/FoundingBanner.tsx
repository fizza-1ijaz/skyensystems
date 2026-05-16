"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FoundingBannerCornerIcons } from "./FoundingBannerCornerIcons";

export function FoundingBanner() {
  return (
    <section className="mt-8 w-full overflow-hidden bg-gradient-to-r from-[#EEF3FF] via-[#F7F8FC] to-[#E8F8FF] px-0 pb-0 pt-0 md:-mt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative isolate w-full overflow-hidden border-t border-white/70 bg-white/66 px-6 py-12 text-center shadow-[0_26px_70px_-42px_rgba(15,23,42,0.35)] md:px-10"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: [
              "radial-gradient(ellipse 58% 48% at 0% 0%, rgba(125, 211, 252, 0.46) 0%, transparent 38%)",
              "radial-gradient(ellipse 58% 48% at 100% 0%, rgba(251, 207, 232, 0.46) 0%, transparent 38%)",
              "radial-gradient(ellipse 58% 48% at 0% 100%, rgba(253, 224, 71, 0.42) 0%, transparent 38%)",
              "radial-gradient(ellipse 58% 48% at 100% 100%, rgba(134, 239, 172, 0.42) 0%, transparent 38%)",
            ].join(", "),
          }}
        />
        <FoundingBannerCornerIcons />
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
          FINAL STEP
        </p>
        <h2 className="relative z-10 mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#4C1D95] md:text-4xl">
          Ready to build something great?
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-2xl text-slate-600">
          Let's start with a conversation. No commitment. No sales pressure. Just an honest look at what's possible for your business.
        </p>
        <div className="relative z-10 mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#6C63FF] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-pink-100 hover:text-pink-900 hover:shadow-[0_0_32px_-4px_rgba(236,72,153,0.4)] sm:px-8 sm:py-4 sm:text-base"
          >
            Start Your Project →
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-transparent px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-amber-300 hover:bg-amber-100 hover:text-amber-900 hover:shadow-[0_0_28px_-4px_rgba(245,158,11,0.35)] sm:px-8 sm:py-4 sm:text-base"
          >
            Or explore our services →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
