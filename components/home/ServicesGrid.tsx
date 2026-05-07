"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  ["web-design-development", "Web Design & Development", "Fast, beautiful websites built to convert visitors into customers."],
  ["mobile-apps", "Mobile Apps - iOS & Android", "Native-quality apps with modern cross-platform delivery."],
  ["social-media-management", "Social Media Management", "Consistent, on-brand presence managed end to end."],
  ["digital-marketing", "Digital Marketing & SEO", "Organic growth and paid strategy tuned to measurable outcomes."],
  ["brand-ui-ux-design", "Brand & UI/UX Design", "Identity systems and interfaces your customers remember."],
  ["web-applications-saas", "Web Applications & SaaS", "Custom dashboards, tools, and SaaS MVPs built for scale."],
] as const;

export function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">Everything your business needs. Nothing you do not.</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Six core services, one team.
          </p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([serviceSlug, title, desc], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-[#FBFDFF] p-6 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.6)]"
            >
              <Link
                href={`/services/${serviceSlug}#service-road`}
                className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF66]"
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-[#6C63FF1f] via-[#8B5CF622] to-[#1E3A8A22]" />
                <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {desc}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="inline-flex rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700">
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}
