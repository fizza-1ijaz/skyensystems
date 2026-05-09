"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "From $1,500",
    description:
      "For small businesses needing a professional digital presence.",
    features: [
      "Up to 8-page website",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "1 revision round",
      "30-day support",
    ],
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    price: "From $4,000",
    description:
      "For businesses ready to grow with a full digital strategy.",
    features: [
      "Up to 20 pages or web app",
      "CMS integration",
      "Full SEO setup",
      "Analytics tracking",
      "3 revision rounds",
      "90-day support",
      "Priority response",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "From $8,000",
    description:
      "For established businesses with complex multi-platform needs.",
    features: [
      "Unlimited scope",
      "Custom integrations",
      "API connections",
      "Performance optimization",
      "Unlimited revisions",
      "6-month support",
      "Dedicated PM",
      "Monthly reviews",
    ],
  },
];

const FAQ = [
  {
    q: "Do you offer payment plans?",
    a: "Yes. For projects over $2,000: 50% deposit / 50% on completion. Larger projects have phased milestone payments.",
  },
  {
    q: "What is included in the support period?",
    a: "Bug fixes, minor content updates, performance monitoring. Feature additions quoted separately.",
  },
  {
    q: "Can I start Starter and upgrade later?",
    a: "Absolutely. All projects built with scalability in mind. Moving from Starter to Growth is straightforward.",
  },
  {
    q: "How does Dedicated Teams pricing work?",
    a: "Monthly rate per team member based on seniority. Minimum 3-month engagement. Scale up/down with 30 days' notice.",
  },
];

function PricingCard({
  plan,
  isFeatured,
  isMobile,
  isCentered,
}: {
  plan: Plan;
  isFeatured: boolean;
  isMobile?: boolean;
  isCentered?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative h-full"
      whileHover={!isMobile && !isFeatured ? { y: -8 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Premium card container */}
      <div
        className={`relative h-full rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isFeatured
            ? "border-[#1E3A8A66] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] shadow-[0_25px_50px_-25px_rgba(30,58,138,0.5)]"
            : "border-[#1E3A8A33] bg-gradient-to-br from-white/90 via-white to-[#f4f8ff]/80 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
        } ${
          isHovered && isFeatured
            ? "shadow-[0_35px_70px_-15px_rgba(30,58,138,0.8)]"
            : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background graphics */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Orbital accent for featured card */}
          {isFeatured && (
            <>
              <svg className="absolute -right-20 -top-20 h-48 w-48 opacity-10">
                <circle cx="96" cy="96" r="80" fill="none" stroke="#1E3A8A" strokeWidth="1" />
                <circle cx="96" cy="96" r="100" fill="none" stroke="#22D3EE" strokeWidth="0.5" />
              </svg>
              <motion.div
                className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_70%)] blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </>
          )}

          {/* Top accent bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-40"
            animate={{ opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col p-6 md:p-8 h-full">
          {/* Header section */}
          <div className="mb-4 md:mb-6">
            {plan.badge && (
              <motion.span
                className="inline-block rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#112B44] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white mb-4 shadow-[0_8px_16px_-4px_rgba(30,58,138,0.3)]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {plan.badge}
              </motion.span>
            )}

            <motion.p
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] opacity-70"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {plan.name}
            </motion.p>

            <motion.p
              className={`mt-3 font-black leading-tight ${
                isFeatured ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"
              } bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] bg-clip-text text-transparent`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {plan.price}
            </motion.p>

            <motion.p
              className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {plan.description}
            </motion.p>
          </div>

          {/* Divider with gradient */}
          <motion.div
            className="my-6 md:my-8 h-px bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Features list with stagger animation */}
          <motion.ul className="mb-8 md:mb-10 flex-1 space-y-3">
            {plan.features.map((feature, featureIdx) => (
              <motion.li
                key={feature}
                className="flex gap-3 text-sm text-slate-600 md:text-[15px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + featureIdx * 0.05,
                }}
              >
                <motion.span
                  className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#112B44] shadow-[0_4px_12px_-4px_rgba(30,58,138,0.4)]"
                  whileHover={{ scale: 1.2 }}
                >
                  <Check className="h-3 w-3 text-white" />
                </motion.span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className={`group/cta relative inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 overflow-hidden ${
                isFeatured
                  ? "bg-gradient-to-r from-[#1E3A8A] to-[#112B44] text-white shadow-[0_12px_28px_-8px_rgba(30,58,138,0.4)] hover:shadow-[0_16px_40px_-8px_rgba(30,58,138,0.6)]"
                  : "border-2 border-[#1E3A8A] bg-white/50 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
              }`}
            >
              <span className="relative z-10">Start Your Project →</span>
              {isFeatured && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["−100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              )}
            </Link>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        {!isMobile && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#22D3EE] via-transparent to-transparent opacity-0"
            animate={{
              opacity: isHovered ? (isFeatured ? 0.1 : 0.05) : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </motion.article>
  );
}

export function PricingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-8 pt-12 text-[#0F172A]">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            TRANSPARENT PRICING
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            No mystery. No hourly surprises.
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-center text-lg text-slate-600">
            Three tiers for most projects. Custom quotes for everything else.
            Every tier includes the same quality — the difference is scope.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-20 md:px-16 md:pb-32">
        {/* Ambient background graphics */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Radial gradients for depth */}
          <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.08),transparent_70%)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_70%)] blur-3xl" />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute h-1 w-1 rounded-full bg-[#22D3EE]"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 14) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1.2, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + (i % 2) * 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Mesh grid overlay */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.03]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid-pricing"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#1E3A8A"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pricing)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Pricing cards with premium layout */}
          <div className="relative">
            {/* Mobile stacked layout */}
            <div className="grid gap-6 md:hidden">
              {PLANS.map((plan) => (
                <PricingCard key={plan.name} plan={plan} isFeatured={!!plan.featured} isMobile />
              ))}
            </div>

            {/* Desktop grid with elevated center card */}
            <div className="hidden md:grid md:gap-6 md:grid-cols-3 md:items-end">
              {/* Left card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <PricingCard plan={PLANS[0]} isFeatured={false} isMobile={false} />
              </motion.div>

              {/* Center card - elevated with negative margin */}
              <motion.div
                className="md:-mb-6 md:z-10"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <PricingCard plan={PLANS[1]} isFeatured={true} isMobile={false} isCentered={true} />
              </motion.div>

              {/* Right card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <PricingCard plan={PLANS[2]} isFeatured={false} isMobile={false} />
              </motion.div>
            </div>

            {/* Connecting energy lines - desktop only */}
            <svg className="absolute hidden md:block inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.line
                x1="33%"
                y1="60%"
                x2="50%"
                y2="45%"
                stroke="url(#energyGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line
                x1="67%"
                y1="60%"
                x2="50%"
                y2="45%"
                stroke="url(#energyGradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </svg>
          </div>

          {/* Disclaimer card */}
          <motion.div
            className="mt-12 rounded-2xl border border-[#1E3A8A33] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] px-6 py-4 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-[#264766]">
              ⚠ Prices are starting points. All quotes are fixed-price — no hourly
              billing surprises. Payment plans available for projects over $2,000.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Pricing FAQ
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Common questions about our pricing.
          </h2>
          <div className="mt-8 space-y-3">
            {FAQ.map((item, index) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-white/80 bg-white/85 shadow-[0_14px_32px_-26px_rgba(15,23,42,0.4)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-800"
                >
                  {item.q}
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A22] text-[#1E3A8A]">
                    {openFaq === index ? "×" : "+"}
                  </span>
                </button>
                {openFaq === index ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">
                    {item.a}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
