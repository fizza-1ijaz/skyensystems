"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Start",
    price: "$750",
    description:
      "Professional website, social setup, Google business profile, and basic brand kit.",
    featured: false,
  },
  {
    name: "Grow",
    price: "$1,500",
    description:
      "Everything in Start plus 10-page site, full brand identity, and one month social management.",
    featured: true,
  },
  {
    name: "Lead",
    price: "$4,000+",
    description:
      "Full transformation: web, app, SEO, ad setup, and dedicated project management.",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">Simple pricing. No agency games.</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Most agencies hide cost behind calls and custom quotes. We do not. Clear packages, clear deliverables, and clear ownership.
          </p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`rounded-3xl p-6 ${
                plan.featured
                  ? "border border-[#20344a] bg-[#111827] text-white shadow-[0_30px_70px_-40px_rgba(17,24,39,1)]"
                  : "border border-white/80 bg-white/80 text-[#0F172A]"
              }`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-3xl font-bold">{plan.price}</p>
              <p className={`mt-3 text-sm ${plan.featured ? "text-slate-200" : "text-slate-600"}`}>
                {plan.description}
              </p>
              <Link href="/pricing" className={`mt-4 inline-block text-sm font-semibold ${plan.featured ? "text-[#9adfff]" : "text-[#6C63FF]"}`}>
                Get started -&gt;
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/pricing" className="inline-flex rounded-xl bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white">
            See full pricing details
          </Link>
        </div>
      </div>
    </section>
  );
}
