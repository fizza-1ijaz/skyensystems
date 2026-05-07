"use client";

import { useState } from "react";
import Link from "next/link";

type TabKey = "packages" | "retainers" | "individual";

export function PricingPageContent() {
  const [activeTab, setActiveTab] = useState<TabKey>("packages");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faq = [
    {
      q: "Does the price include ad spend?",
      a: "No. Our fee covers strategy and execution; ad spend is always paid directly by the client to ad platforms.",
    },
    {
      q: "How do payments work?",
      a: "One-time packages are generally 50% upfront and 50% on delivery. Retainers are billed monthly.",
    },
    {
      q: "Can I start with a smaller scope?",
      a: "Yes. You can begin with an individual service and scale to a full package later.",
    },
  ];

  return (
    <div className="pb-24 pt-28">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Transparent pricing</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">Simple pricing. No agency games.</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Published rates, clear scopes, no hidden terms.
          </p>
        </div>
      </section>

      <section className="border-t border-white/40 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-white/50 bg-white/70 p-2 backdrop-blur-xl">
            {(["packages", "retainers", "individual"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold capitalize transition ${activeTab === tab ? "bg-gradient-to-r from-[#6C63FF] to-[#00C2FF] text-white shadow" : "text-slate-600"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "packages" && (
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Start", "$750", "Launch-ready website and brand setup."],
                ["Grow", "$1,500", "Complete growth-ready digital foundation."],
                ["Lead", "$4,000+", "Custom full-scope product and growth build."],
              ].map(([name, price, desc]) => (
                <article key={name} className={`rounded-3xl border p-6 shadow-sm backdrop-blur-xl ${name === "Grow" ? "border-[#8B5CF655] bg-gradient-to-b from-white to-[#f1f5ff] shadow-[0_24px_50px_-28px_rgba(108,99,255,0.8)]" : "border-white/50 bg-white/75"}`}>
                  <h2 className="text-xl font-bold text-[#0F172A]">{name}</h2>
                  {name === "Grow" ? <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#6C63FF]">Most Popular</p> : null}
                  <p className="mt-2 text-3xl font-extrabold text-[#0F172A]">{price}</p>
                  <p className="mt-3 text-sm text-slate-600">{desc}</p>
                  <Link href="/contact-us" className="mt-5 inline-block rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#00C2FF] px-5 py-2.5 text-sm font-semibold text-white">
                    Get started
                  </Link>
                </article>
              ))}
            </div>
          )}

          {activeTab === "retainers" && (
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Steady", "$400/mo", "Social management across 2 platforms."],
                ["Amplify", "$600/mo", "Higher cadence plus ad operations."],
                ["Shield", "$100/mo", "Website care and maintenance plan."],
              ].map(([name, price, desc]) => (
                <article key={name} className="rounded-3xl border border-white/50 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
                  <h2 className="text-xl font-bold text-[#0F172A]">{name}</h2>
                  <p className="mt-2 text-3xl font-extrabold text-[#0F172A]">{price}</p>
                  <p className="mt-3 text-sm text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "individual" && (
            <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/75 backdrop-blur-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Our Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Logo Design", "$125"],
                    ["Landing Page", "$200"],
                    ["Brand Identity", "$300"],
                    ["SEO Audit", "$150"],
                  ].map(([service, price]) => (
                    <tr key={service} className="border-t border-slate-100">
                      <td className="px-4 py-3 text-slate-700">{service}</td>
                      <td className="px-4 py-3 font-semibold text-[#0F172A]">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">Pricing FAQ</h2>
          <div className="space-y-3">
            {faq.map((item, index) => (
              <div key={item.q} className="rounded-xl border border-white/50 bg-white/75 backdrop-blur-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#0F172A]"
                >
                  {item.q}
                  <span>{openFaq === index ? "-" : "+"}</span>
                </button>
                {openFaq === index ? <p className="px-4 pb-4 text-sm text-slate-600">{item.a}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
