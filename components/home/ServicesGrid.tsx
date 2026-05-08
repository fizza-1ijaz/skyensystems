"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Bot,
  Palette,
  Users,
  Globe,
  Megaphone,
} from "lucide-react";

const services = [
  [
    "web-design-development",
    "Web Development",
    "Custom websites, web applications, and e-commerce stores built to convert visitors into customers. Fast, secure, and built to grow with you.",
    "Next.js · React · WordPress · Shopify · API Integration",
    Globe,
  ],
  [
    "mobile-apps",
    "Mobile Apps",
    "iOS and Android apps that your users will actually use. From MVP to full launch — we handle everything including App Store submission.",
    "React Native · Swift · Kotlin · App Store · Play Store",
    Smartphone,
  ],
  [
    "brand-ui-ux-design",
    "UI/UX Design",
    "Beautiful, intuitive interfaces that make your product a joy to use. Research-backed design that reduces churn and drives engagement.",
    "Figma · Prototyping · User Research · Design Systems",
    Palette,
  ],
  [
    "ai-solutions",
    "AI Solutions",
    "Practical AI that solves real business problems. Chatbots, automation, intelligent features — without the complexity.",
    "LLM Integration · Chatbots · Automation · Custom Models",
    Bot,
  ],
  [
    "digital-marketing",
    "Digital Marketing",
    "More of the right customers finding your business. SEO, paid ads, content — all tied to measurable results.",
    "SEO · Google Ads · Meta Ads · Content Marketing",
    Megaphone,
  ],
  [
    "dedicated-teams",
    "Dedicated Teams",
    "Your own extended team of developers and designers — working exclusively on your projects, in your timezone.",
    "Full-time Devs · Project Managers · Designers · Agile",
    Users,
  ],
] as const;

export function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            WHAT WE DO
          </p>
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
            Everything your business needs to win online.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            From the website your customers find to the app they use daily — we
            design, build, and grow it all.
          </p>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([serviceSlug, title, desc, features, Icon], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-[#FBFDFF] p-6 text-center shadow-[0_20px_40px_-34px_rgba(15,23,42,0.6)]"
            >
              <Link
                href={serviceSlug.includes("ai") || serviceSlug.includes("dedicated") ? "/contact-us" : `/services/${serviceSlug}#service-road`}
                className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF66]"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#6C63FF2E] bg-gradient-to-br from-[#6C63FF26] via-[#8B5CF62B] to-[#1E3A8A2F] text-[#1E3A8A] shadow-[0_10px_24px_-14px_rgba(30,58,138,0.9)]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {desc}
                </p>
                <p className="mt-3 text-xs font-semibold text-[#355173]">{features}</p>
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
