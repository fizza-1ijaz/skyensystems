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
    <section className="relative overflow-hidden bg-[#F6F8FC] px-6 py-20 md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(108,99,255,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(30,58,138,0.1),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(246,248,252,0.98))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cfdcff] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-56 w-[46rem] -translate-x-1/2 rounded-full bg-[#6C63FF12] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              WHAT WE DO
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
              Everything your business needs to win online.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
              From the website your customers find to the app they use daily — we
              design, build, and grow it all.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {services.map(([serviceSlug, title, desc, features, Icon], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.42, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group rounded-[1.75rem] border border-[#DCE7FF] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,255,0.82))] p-6 text-center shadow-[0_22px_50px_-34px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-[#c6d8ff] hover:shadow-[0_26px_56px_-34px_rgba(15,23,42,0.16)] ${
                index === 0
                  ? "xl:col-span-6 xl:min-h-[20rem]"
                  : index === 1 || index === 2
                    ? "xl:col-span-3 xl:min-h-[16rem]"
                    : index === 3
                      ? "xl:col-span-4 xl:min-h-[16rem]"
                      : "xl:col-span-4 xl:min-h-[16rem]"
              }`}
            >
              <Link
                href={
                  serviceSlug.includes("ai") || serviceSlug.includes("dedicated")
                    ? "/contact-us"
                    : `/services/${serviceSlug}#service-road`
                }
                className="block h-full rounded-[1.25rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF66]"
              >
                <div className="mb-5 flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6C63FF2E] bg-gradient-to-br from-[#6C63FF26] via-[#8B5CF62B] to-[#1E3A8A2F] text-[#1E3A8A] shadow-[0_10px_24px_-14px_rgba(30,58,138,0.9)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="text-center text-lg font-semibold text-[#0F172A] md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-center text-sm leading-7 text-slate-600 md:text-[15px]">
                  {desc}
                </p>
                <div className="mt-4 border-t border-dashed border-[#D7E4FF] pt-4">
                  <p className="text-center text-xs font-semibold text-[#355173]">{features}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-[#274A68] bg-[#112B44] px-6 py-3 text-sm font-semibold text-[#F4F8FF] shadow-[0_18px_40px_-24px_rgba(17,43,68,0.72)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#365C7E] hover:bg-[#163750] hover:shadow-[0_24px_48px_-24px_rgba(17,43,68,0.85)]"
          >
            Explore all services
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
