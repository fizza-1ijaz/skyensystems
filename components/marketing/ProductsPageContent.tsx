"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

type ProductScene = {
  id: string;
  name: string;
  status: string;
  statusMeta: string;
  tagline: string;
  paragraphs: string[];
  platforms: string[];
  tech: string[];
  mockupLabel: string;
  mockupNote: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waitlistPlaceholder?: string;
  waitlistButtonLabel?: string;
  waitlistNote?: string;
  showStoreButtons?: boolean;
};

const PRODUCTS: ProductScene[] = [
  {
    id: "studiely",
    name: "Studiely",
    status: "Live",
    statusMeta: "iOS · Android · Web",
    tagline: "Learning, made personal.",
    paragraphs: [
      "Studiely is a full-stack education platform built entirely in-house - and it is live. Real students. Real educators. Real usage. It runs on iOS, Android, and the web from a single codebase maintained by our team.",
      "We designed the product, built the backend, submitted it to the App Store and Google Play, and continue to iterate on it. When we say we know how to build apps, Studiely is the proof.",
    ],
    platforms: ["iOS App", "Android App", "Web Application"],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    mockupLabel: "Studiely - App preview",
    mockupNote: "Replace with real app screenshots",
    primaryCtaLabel: "Visit Studiely",
    primaryCtaHref: "https://studiely.com",
    primaryExternal: true,
    secondaryCtaLabel: "Build something similar",
    secondaryCtaHref: "/contact-us?service=mobile-app",
    showStoreButtons: true,
  },
  {
    id: "make-my-lesson",
    name: "Make My Lesson",
    status: "Arriving soon",
    statusMeta: "iOS · Android · Web",
    tagline: "Teaching, reimagined.",
    paragraphs: [
      "Educators spend hours creating lesson plans. Make My Lesson changes that. Describe your topic, set your grade level, and get a complete, structured, curriculum-aligned lesson plan - instantly.",
      "Built by the same team as Studiely, Make My Lesson is nearly ready. Join the waitlist to be the first to access it when we launch.",
    ],
    platforms: ["iOS App", "Android App", "Web App"],
    tech: ["Grade", "Subject", "Duration"],
    mockupLabel: "Make My Lesson - UI preview",
    mockupNote: "Concept preview - not final UI",
    primaryCtaLabel: "Visit",
    primaryCtaHref: "https://makemylesson.ai",
    primaryExternal: true,
    waitlistPlaceholder: "Your email address",
    waitlistButtonLabel: "Join waitlist",
    waitlistNote: "No spam. Launch announcement only.",
  },
  {
    id: "linguatude",
    name: "Linguatude",
    status: "Coming soon",
    statusMeta: "iOS · Android · Web",
    tagline: "English, unlocked.",
    paragraphs: [
      "Linguatude is a comprehensive English test preparation platform for learners targeting IELTS, TOEFL, PTE, and professional English certifications. Adaptive practice, real exam simulation, and measurable progress that actually shows you where you're improving.",
      "Currently in development. Be the first to know when it launches.",
    ],
    platforms: ["iOS App", "Android App", "Web App"],
    tech: ["IELTS", "TOEFL", "PTE", "General English"],
    mockupLabel: "Linguatude - Coming soon",
    mockupNote: "Be the first to access Linguatude at launch.",
    primaryCtaLabel: "Visit",
    primaryCtaHref: "https://linguatude.com",
    primaryExternal: true,
    waitlistPlaceholder: "Your email address",
    waitlistButtonLabel: "Notify me",
    waitlistNote: "Be the first to access Linguatude at launch.",
  },
];

type ProductsPageContentProps = {
  initialProductId?: string;
};

export function ProductsPageContent({ initialProductId }: ProductsPageContentProps) {
  useEffect(() => {
    if (!initialProductId) return;
    const target = document.getElementById(`product-${initialProductId}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [initialProductId]);

  return (
    <div className="pb-8 pt-12">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Built by us, for real users
          </p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">
            We do not just build for clients.
            <span className="text-gradient"> We build for ourselves.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            These are the Skyen Group&apos;s own products - designed, developed,
            and maintained by the same team that will work on your project. This
            is our standard.
          </p>
        </div>
      </section>

      <section id="product-showcase" className="px-4 md:px-10">
        <div className="mx-auto space-y-8">
          {PRODUCTS.map((product, idx) => (
            <motion.article
              key={product.id}
              id={`product-${product.id}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-[2.2rem] border bg-gradient-to-br from-[#f6f9ff] via-white to-[#eef8ff] p-6 shadow-[0_30px_90px_-55px_rgba(108,99,255,0.65)] md:p-8 ${
                initialProductId === product.id
                  ? "border-[#6C63FF88] ring-2 ring-[#6C63FF33]"
                  : "border-white/80"
              }`}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-[#6C63FF1a] blur-3xl" />
                <div className="absolute right-10 top-14 h-48 w-48 rounded-full bg-[#1E3A8A1c] blur-3xl" />
              </div>
              <div className={`relative z-10 grid gap-8 ${idx % 2 === 1 ? "md:grid-cols-[1.05fr_1fr]" : "md:grid-cols-2"}`}>
                <div className={`${idx % 2 === 1 ? "md:order-2" : ""} text-center md:text-left`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">
                    {product.status}
                    <span className="ml-2 text-[11px] normal-case tracking-normal text-slate-400">
                      {product.statusMeta}
                    </span>
                  </p>
                  <h2 className="mt-2 text-4xl font-bold text-[#0F172A]">{product.name}</h2>
                  <p className="mt-1 text-lg font-semibold text-gradient">{product.tagline}</p>
                  <div className="mt-4 space-y-3 text-slate-600">
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                    {product.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-md border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    <a
                      href={product.primaryCtaHref}
                      target={product.primaryExternal ? "_blank" : undefined}
                      rel={product.primaryExternal ? "noopener noreferrer" : undefined}
                      className="rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      {product.primaryCtaLabel}
                    </a>
                    {product.secondaryCtaLabel && product.secondaryCtaHref ? (
                      <Link href={product.secondaryCtaHref} className="rounded-xl border border-white/80 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700">
                        {product.secondaryCtaLabel}
                      </Link>
                    ) : null}
                  </div>
                  {product.waitlistButtonLabel && product.waitlistPlaceholder ? (
                    <div className="mt-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-center md:justify-start">
                        <input
                          type="email"
                          placeholder={product.waitlistPlaceholder}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none"
                        />
                        <button
                          type="button"
                          className="rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white"
                        >
                          {product.waitlistButtonLabel}
                        </button>
                      </div>
                      {product.waitlistNote ? (
                        <p className="mt-2 text-xs text-slate-500">{product.waitlistNote}</p>
                      ) : null}
                    </div>
                  ) : null}
                  </div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                  className={`rounded-2xl border border-[#dbe8ff] bg-[#f5f8ff] p-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <p className="text-sm font-semibold text-slate-600">{product.mockupLabel}</p>
                  <div className="mt-4 rounded-xl border border-[#d3e2ff] bg-white p-4">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-[#6C63FF66] to-[#1E3A8A66]" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-200" />
                    <div className="mt-3 h-24 rounded-lg bg-[#eef4ff]" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="h-10 rounded-lg bg-[#f2f6ff]" />
                      <div className="h-10 rounded-lg bg-[#f2f6ff]" />
                    </div>
                    <div className="mt-3 h-2 w-4/5 rounded-full bg-gradient-to-r from-[#6C63FF55] to-[#1E3A8A55]" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[#cce4ff] bg-white px-2 py-1 text-[11px] font-semibold text-[#2f5d85]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-500">{product.mockupNote}</p>
                  {product.showStoreButtons ? (
                    <div className="mt-4 flex gap-2">
                      <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                        App Store
                      </a>
                      <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                        Google Play
                      </a>
                    </div>
                  ) : null}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-0 py-14">
        <div className="w-full border-y border-white/50 bg-white/70 px-6 py-10 text-center md:px-16">
          <p className="text-balance text-xl font-bold text-[#0F172A] md:text-2xl">
            &ldquo;Studiely isn&apos;t a demo. It isn&apos;t a portfolio piece. It&apos;s
            a live product with real users - built entirely by our in-house team.
            When we say we can build your app, this is what we mean.&rdquo;
          </p>
          <Link href="/services" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white">
            See our mobile app service
          </Link>
        </div>
      </section>

      <section className="px-0 py-16">
        <div className="w-full rounded-none border-y border-[#2B4A67] bg-[#112B44E8] p-10 text-center text-[#EAF2FF] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9CB3CF]">
            Ready to build?
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            This is the standard we hold ourselves to.
            <span className="text-gradient"> Your project gets the same.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[#C5D4E7]">
            The same team. The same process. The same quality of thinking - applied
            to your business.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 font-semibold text-white">
              See Our Services
            </Link>
            <Link href="https://calendly.com/skyensystems/discovery" className="rounded-lg border border-[#3A5C7A] bg-[#0F253AE6] px-6 py-3 font-semibold text-[#EAF2FF]">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
