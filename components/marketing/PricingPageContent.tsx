"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

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
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Three tiers for most projects. Custom quotes for everything else.
            Every tier includes the same quality — the difference is scope.
          </p>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  plan.featured
                    ? "border-[#1E3A8A66] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] shadow-[0_22px_44px_-26px_rgba(30,58,138,0.6)]"
                    : "border-white/80 bg-white/80 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]"
                } text-center md:text-left`}
              >
                {plan.badge ? (
                  <span className="mb-4 inline-block w-fit rounded-full bg-[#112B44] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    {plan.badge}
                  </span>
                ) : null}
                <p className="text-center text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                  {plan.name}
                </p>
                <p className="mt-2 text-center text-5xl font-extrabold text-[#0F172A]">
                  {plan.price}
                </p>
                <p className="mt-3 text-center text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>
                <div className="my-5 h-px bg-slate-200" />
                <ul className="mb-6 space-y-3 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1E3A8A22]">
                        <Check className="h-3 w-3 text-[#1E3A8A]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className={`mt-auto inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold ${
                    plan.featured
                      ? "bg-[#112B44] text-white hover:bg-[#1B3E5E]"
                      : "border border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  Start Your Project →
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-[#1E3A8A33] bg-[#eff5ff] px-4 py-3 text-sm text-[#264766]">
            ⚠ Prices are starting points. All quotes are fixed-price — no hourly
            billing surprises. Payment plans available for projects over $2,000.
          </p>
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
