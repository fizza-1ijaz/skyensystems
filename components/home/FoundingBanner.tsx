"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FoundingBanner() {
  return (
    <section className="-mt-6 w-full overflow-hidden bg-gradient-to-r from-[#EEF3FF] via-[#F7F8FC] to-[#E8F8FF] px-0 pb-12 pt-0 md:-mt-10 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full border-y border-white/70 bg-white/66 px-6 py-12 text-center shadow-[0_26px_70px_-42px_rgba(15,23,42,0.35)] md:px-10"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70" />
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">FINAL STEP</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
          Ready to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Let's start with a conversation. No commitment. No sales pressure. Just an honest look at what's possible for your business.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-xl bg-[#112B44] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B3E5E]">
            Start Your Project →
          </Link>
          <Link href="/services" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700">
            Or explore our services →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
