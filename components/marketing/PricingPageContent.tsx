"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

type TabKey = "packages" | "retainers" | "individual";

type Plan = {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  compare: string;
  featured?: boolean;
};

const PACKAGES: Plan[] = [
  {
    name: "Start",
    price: "$750",
    description:
      "Everything you need to show up professionally online — website, social setup, and brand.",
    features: [
      "Professional website — up to 6 pages",
      "Mobile responsive + SEO-ready structure",
      "Social media profile optimization (3 platforms)",
      "Google Business Profile setup or optimization",
      "Basic brand kit — logo, colors, fonts",
      "Google Analytics setup",
      "30 days post-launch support",
    ],
    ctaLabel: "Get started →",
    ctaHref: "/contact-us?package=start",
    compare: "US agencies charge $3,000–$8,000 for this scope.",
  },
  {
    name: "Grow",
    price: "$1,500",
    description:
      "The full digital foundation to scale with confidence — brand, web, social, and content.",
    features: [
      "Everything in START",
      "Website expanded to 10 pages + blog setup",
      "Full brand identity + brand guide document",
      "30 branded social post templates",
      "1 month social media management included",
      "Email newsletter template design",
      "60 days post-launch support",
    ],
    ctaLabel: "Get started →",
    ctaHref: "/contact-us?package=grow",
    compare: "US agencies charge $8,000–$15,000 for this scope.",
    featured: true,
  },
  {
    name: "Lead",
    price: "$4,000",
    suffix: "+",
    description:
      "Complete digital transformation — web, app, brand, SEO, and marketing. Custom scoped in discovery.",
    features: [
      "Everything in GROW",
      "Custom web app or mobile app (iOS + Android)",
      "Advanced SEO — keyword research + Search Console",
      "Paid ad campaign setup + ad creatives",
      "Dedicated project manager",
      "Quarterly strategy call",
      "90 days post-launch support",
    ],
    ctaLabel: "Let's talk →",
    ctaHref: "/contact-us?package=lead",
    compare: "US agencies charge $20,000–$50,000+ for this scope.",
  },
];

const RETAINERS: Plan[] = [
  {
    name: "Steady",
    price: "$400",
    suffix: "/mo",
    description:
      "Consistent social presence across 2 platforms. Ideal for businesses that need to stay visible without the daily stress.",
    features: [
      "3 posts per week across 2 platforms",
      "Custom graphics for every post — no stock templates",
      "Caption writing + hashtag strategy",
      "Community management — comments and DMs",
      "Monthly performance report",
    ],
    ctaLabel: "Get started →",
    ctaHref: "/contact-us?plan=steady",
    compare: "US agencies charge $800–$2,000/mo for this.",
  },
  {
    name: "Amplify",
    price: "$600",
    suffix: "/mo",
    description:
      "Higher frequency, more platforms, paid ad management. For businesses ready to grow their reach and run campaigns.",
    features: [
      "5 posts per week across 3 platforms",
      "Custom graphics + 1 reel or video per week",
      "Bi-weekly strategy call",
      "Paid ad campaign management (client pays ad spend)",
      "Full community management",
      "Bi-weekly performance report",
    ],
    ctaLabel: "Get started →",
    ctaHref: "/contact-us?plan=amplify",
    compare: "US agencies charge $2,000–$5,000/mo for this.",
    featured: true,
  },
  {
    name: "Shield",
    price: "$100",
    suffix: "/mo",
    description:
      "Monthly website care — updates, security, backups, and performance monitoring. Peace of mind for your site.",
    features: [
      "Up to 5 content updates per month",
      "Security monitoring and backups",
      "Performance optimization checks",
      "Monthly website health report",
    ],
    ctaLabel: "Get started →",
    ctaHref: "/contact-us?plan=shield",
    compare: "US agencies charge $300–$500/mo for this.",
  },
];

const FAQ = [
  {
    q: "Does the price include ad spend?",
    a: "No — and we will always be explicit about this. Our fee covers the work: strategy, content, design, posting, and reporting. Your ad budget is separate and paid directly by you to the platform (Facebook, Google, Instagram). We never hold or manage your ad spend.",
  },
  {
    q: "How do payments work?",
    a: "For one-time packages: 50% upfront to start, 50% on final delivery before handoff. For monthly retainers: billed at the start of each month. We accept bank transfer and major payment methods. No long-term contracts on retainers — cancel with 30 days notice.",
  },
  {
    q: 'What is included in "post-launch support"?',
    a: "Post-launch support means we remain available to fix bugs, answer questions, and make minor adjustments to your website for the stated period (30, 60, or 90 days depending on the package). It does not include new feature development — that would be a separate quote.",
  },
  {
    q: "What is the revision policy?",
    a: "Every package includes two full rounds of feedback after the first draft. We scope this clearly before starting. If a project grows significantly in scope, we discuss it openly and agree before proceeding — you will never be surprised by a change in cost without prior conversation.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes. If you start with START and want to upgrade to GROW, you pay the difference. We are not trying to lock you into a decision — we want the relationship to grow with your business.",
  },
  {
    q: "I need something not listed. Can you help?",
    a: "Absolutely. Book a free 30-minute discovery call and tell us what you're trying to build. We'll give you an honest assessment and a clear quote — no pressure.",
  },
];

export function PricingPageContent() {
  const [activeTab, setActiveTab] = useState<TabKey>("packages");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = activeTab === "packages" ? PACKAGES : RETAINERS;

  return (
    <div className="pb-8 pt-12 text-[#0F172A]">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#2DD4BF]">
            Transparent pricing
          </p>
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Simple pricing.
            <br />
            <span className="text-gradient">No agency games.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            We publish every price because we&apos;re confident in our value. No
            quote requests for standard work. No back-and-forth. No surprises —
            ever.
          </p>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 inline-flex flex-wrap gap-2 rounded-xl border border-white/70 bg-white/80 p-1 backdrop-blur-xl">
            {(["packages", "retainers", "individual"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize transition ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] text-white shadow-[0_14px_24px_-16px_rgba(108,99,255,0.9)]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab === "packages"
                  ? "Launch Packages"
                  : tab === "retainers"
                    ? "Monthly Retainers"
                    : "Individual Services"}
              </button>
            ))}
          </div>

          {activeTab !== "individual" ? (
            <div>
              <h2 className="mb-1 text-center text-2xl font-extrabold">
                {activeTab === "packages"
                  ? "Launch Packages"
                  : "Monthly Retainers"}
              </h2>
              <p className="mb-8 text-center text-sm text-slate-600">
                {activeTab === "packages"
                  ? "One-time, fixed price. Everything scoped upfront. No invoice surprises."
                  : "Ongoing services billed monthly. Cancel with 30 days notice — no long-term contracts."}
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <article
                    key={plan.name}
                    className={`flex flex-col rounded-2xl border p-6 ${
                      plan.featured
                        ? "border-[#1E3A8A66] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] shadow-[0_22px_44px_-26px_rgba(30,58,138,0.6)]"
                        : "border-white/80 bg-white/80 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]"
                    } text-center md:text-left`}
                  >
                    {plan.featured ? (
                      <span className="mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2DD4BF] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                        Most popular
                      </span>
                    ) : null}
                    <p className="text-center text-xs font-bold uppercase tracking-[0.1em] text-[#2DD4BF]">
                      {plan.name}
                    </p>
                    <p className="mt-2 text-center text-5xl font-extrabold text-[#0F172A]">
                      {plan.price}
                      {plan.suffix ? (
                        <span className="text-2xl font-semibold text-slate-500">
                          {plan.suffix}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-3 text-center text-sm leading-6 text-slate-600">
                      {plan.description}
                    </p>
                    <div className="my-5 h-px bg-slate-200" />
                    <ul className="mb-6 space-y-3 text-sm text-slate-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#10B98122]">
                            <Check className="h-3 w-3 text-[#10B981]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={plan.ctaHref}
                      className={`mt-auto inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold ${
                        plan.featured
                          ? "bg-gradient-to-r from-[#1E3A8A] to-[#2DD4BF] text-white"
                          : plan.name === "Lead"
                            ? "border border-slate-300 bg-white text-slate-700"
                            : "border border-[#2DD4BF] text-[#2DD4BF]"
                      }`}
                    >
                      {plan.ctaLabel}
                    </Link>
                    <p className="mt-4 border-t border-slate-200 pt-3 text-center text-xs text-slate-500 md:text-left">
                      {plan.compare}
                    </p>
                  </article>
                ))}
              </div>
              {activeTab === "retainers" ? (
                <p className="mt-5 text-sm text-slate-500">
                  Ad spend is always paid directly by the client to the platform.
                  We never hold or manage your ad budget.
                </p>
              ) : null}
            </div>
          ) : (
            <div>
              <h2 className="mb-1 text-center text-2xl font-extrabold">Individual Services</h2>
              <p className="mb-8 text-center text-sm text-slate-600">
                Not every project needs a full package. Pick exactly what you need.
              </p>
              <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Our Price</th>
                      <th className="px-4 py-3">US Agency Rate</th>
                      <th className="px-4 py-3">You Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Logo Design (3 concepts, 2 revision rounds)", "$125", "$800–$2,500", "~85%"],
                      ["Landing Page — single, conversion-focused", "$200", "$1,500–$3,000", "~87%"],
                      ["Brand Identity Package — full system", "$300", "$2,000–$6,000", "~90%"],
                      ["Social Media Audit + Strategy Document", "$100", "$500–$1,500", "~80%"],
                      ["SEO Audit + Full Report", "$150", "$800–$2,000", "~82%"],
                      ["Mobile App — iOS or Android", "From $2,000", "$15,000–$40,000", "~87%"],
                      ["Mobile App — iOS + Android", "From $3,500", "$25,000–$80,000", "~90%"],
                      ["Web Application / SaaS MVP", "From $2,500", "$15,000–$50,000", "~85%"],
                    ].map(([service, ourPrice, usRate, save]) => (
                      <tr key={service} className="border-t border-slate-200">
                        <td className="px-4 py-3 text-slate-800">{service}</td>
                        <td className="px-4 py-3 font-semibold text-[#2DD4BF]">{ourPrice}</td>
                        <td className="px-4 py-3 text-slate-400 line-through">{usRate}</td>
                        <td className="px-4 py-3 font-semibold text-[#10B981]">{save}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                All prices in USD. Custom quotes available for any project not listed above.
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[#1E3A8A44] bg-gradient-to-r from-[#eef5ff] via-white to-[#ecf9ff] p-7 shadow-[0_20px_48px_-30px_rgba(15,23,42,0.35)]">
            <div>
              <p className="text-lg font-bold">
                ⭐ Founding Client Rate — 20% off START &amp; GROW
              </p>
              <p className="mt-1 text-sm text-slate-600">
                We&apos;re building our US portfolio. Get 20% off either package in
                exchange for a written testimonial and permission to feature your
                project. One condition. Real savings. Available for a limited time.
              </p>
            </div>
            <Link
              href="/contact-us?offer=founding"
              className="rounded-lg bg-gradient-to-r from-[#1E3A8A] to-[#2DD4BF] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Claim the offer →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#2DD4BF]">
            Pricing FAQ
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Common questions
            <br />
            about our pricing.
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

      <section className="border-y border-white/70 bg-white/75 px-6 py-16 text-center md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#2DD4BF]">
            Still have questions?
          </p>
          <h2 className="text-3xl font-extrabold md:text-5xl">
            Book a free call.
            <br />
            <span className="text-gradient">Get straight answers.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            30 minutes. No pitch. We&apos;ll look at your business and tell you exactly
            what we&apos;d recommend — and what we wouldn&apos;t.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="https://calendly.com/skyensystems/discovery"
              className="rounded-lg bg-gradient-to-r from-[#1E3A8A] to-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white"
            >
              Book a Free Discovery Call ↗
            </Link>
            <Link
              href="/contact-us"
              className="rounded-lg border border-[#2DD4BF66] bg-white px-6 py-3 text-sm font-semibold text-[#158a77]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
