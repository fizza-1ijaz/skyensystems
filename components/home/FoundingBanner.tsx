"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FoundingBanner() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#EEF3FF] via-[#F7F8FC] to-[#E8F8FF] px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto max-w-7xl rounded-3xl border border-white/80 bg-white/70 p-10 shadow-[0_26px_70px_-42px_rgba(15,23,42,0.6)]"
      >
        <div className="pointer-events-none absolute inset-y-0 -left-20 w-28 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70" />
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Founding client offer</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
          Launch your digital presence with one team that designs, builds, and markets under one system.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          We are currently onboarding a limited number of businesses this cycle.
          If you are serious about growth, we will map the right package for your stage.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="https://calendly.com/skyensystems/discovery" className="rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white">
            Book Strategy Call
          </Link>
          <Link href="/contact-us" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700">
            Talk to our team
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
