"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">The reality</p>
          <h2 className="text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
            Most businesses are either <span className="text-gradient">invisible online</span> - or paying too much to fix it.
          </h2>
        </div>
        <div className="space-y-4 text-slate-600">
          <p>You have seen the quotes. $5,000 for a five-page website. $2,000 a month to post three times a week on Instagram. And still no guarantee it actually brings in customers.</p>
          <p>US agencies charge what they charge because of rent, staff overhead, and sales teams - not because the work is worth more. We removed all of that.</p>
          <p>What is left is a capable, fast, and genuinely honest team that builds the same standard of work for a fraction of the price. Not because we cut corners. Because we built our own products - and learned to do more with less.</p>
          <Link href="/about" className="inline-block rounded-xl border border-white/80 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
            How we work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
