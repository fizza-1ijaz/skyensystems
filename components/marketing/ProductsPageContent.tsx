"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

type ProductScene = {
  id: string;
  name: string;
  eyebrow: string;
  status: string;
  statusMeta?: string;
  tagline: string;
  paragraphs: string[];
  platforms: string[];
  tech: string[];
  mockupLabel: string;
  mockupNote: string;
  logoSrc: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waitlistPlaceholder?: string;
  waitlistButtonLabel?: string;
  waitlistNote?: string;
  showStoreButtons?: boolean;
  appStoreHref?: string;
  playStoreHref?: string;
};

const PRODUCTS: ProductScene[] = [
  {
    id: "studiely",
    name: "Studiely",
    eyebrow: "AI STUDY TOOL",
    status: "LIVE — Available on App Store and Play Store",
    tagline: "Study smarter. Not harder.",
    paragraphs: [
      "Studiely uses AI to turn your notes and textbooks into smart flashcards, adaptive quizzes, and personalised revision plans. Designed for students who want to make every study hour count.",
    ],
    platforms: ["Core Features"],
    tech: [
      "Smart Flashcard Generation: Upload your notes — Studiely AI extracts key concepts and builds flashcard decks automatically.",
      "Adaptive Quizzes: Questions adjust to your performance in real time. Harder on what you struggle with, lighter on what you know.",
      "Personalised Revision Plans: Tell Studiely your exam date. It builds a revision schedule covering everything, prioritised by difficulty.",
      "Progress Tracking: See what you've mastered and what needs more work — at a glance.",
      "Study Groups: Share decks and compete with classmates on quiz leaderboards.",
    ],
    mockupLabel: "Studiely - App preview",
    mockupNote: "Replace with real app screenshots",
    logoSrc: "/logo-studiely.jpeg",
    primaryCtaLabel: "Visit Studiely",
    primaryCtaHref: "https://studiely.com",
    primaryExternal: true,
    secondaryCtaLabel: "Build something similar",
    secondaryCtaHref: "/contact-us?service=mobile-app",
    showStoreButtons: true,
    appStoreHref: "https://apps.apple.com/us/app/studiely-your-daily-study-app/id6758246110",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce",
  },
  {
    id: "make-my-lesson",
    name: "Make My Lesson",
    eyebrow: "AI LESSON PLANNER",
    status: "In Development",
    tagline: "Great lessons. Half the planning time.",
    paragraphs: [
      "An AI-powered lesson plan generator built for teachers. Input your topic, grade level, curriculum standard, and available time — get a complete, editable lesson plan in seconds.",
    ],
    platforms: ["Core Features (Planned)"],
    tech: [
      "Curriculum-Aligned Plans: Compatible with Common Core, UK National Curriculum, and other major frameworks.",
      "Full Lesson Structure: Objectives, warm-up, main activity, differentiation notes, exit ticket — complete.",
      "One-Click Editable: Every generated plan is fully editable. Your plan, your voice — just faster.",
      "Resource Suggestions: Linked worksheets, videos, and discussion prompts relevant to your topic.",
      "Lesson Bank: Save and reuse past plans. Build your own library over time.",
    ],
    mockupLabel: "Make My Lesson - UI preview",
    mockupNote: "Concept preview - not final UI",
    logoSrc: "/logo-makemylesson.png",
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
    eyebrow: "AI LANGUAGE LEARNING",
    status: "In Development",
    tagline: "Finally become fluent. Not just functional.",
    paragraphs: [
      "Linguatude combines AI conversation practice, spaced repetition vocabulary, and real-world context to take you from beginner to confident speaker — at your own pace.",
    ],
    platforms: ["Core Features (Planned)"],
    tech: [
      "AI Conversation Partner: Practice speaking with an AI tutor that responds naturally, corrects gently, and adjusts to your level.",
      "Spaced Repetition Vocabulary: Words surface at the scientifically optimal moment for long-term retention.",
      "Real-World Scenarios: Restaurant conversations. Business meetings. Travel situations. Practical language from day one.",
      "Pronunciation Feedback: Real-time analysis with specific, actionable improvement cues.",
      "Progress Milestones: Clear levels and achievements to keep you motivated.",
    ],
    mockupLabel: "Linguatude - Coming soon",
    mockupNote: "Be the first to access Linguatude at launch.",
    logoSrc: "/logo-linguatude.jpg",
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

function ProductPreview({ product }: { product: ProductScene }) {
  if (product.id === "studiely") {
    return (
      <>
        <div className="mt-4 rounded-xl border border-[#d3e2ff] bg-white p-4">
          <div className="mb-3">
            <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-[#6C63FF66] to-[#1E3A8A66]" />
            <div className="mt-2 h-2 w-2/5 rounded-full bg-slate-200" />
          </div>
          <div className="h-12 rounded-lg bg-[#eef4ff]" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg bg-[#f2f6ff]" />
            <div className="h-16 rounded-lg bg-[#f2f6ff]" />
          </div>
          <div className="mt-3 h-2 w-4/5 rounded-full bg-gradient-to-r from-[#6C63FF55] to-[#1E3A8A55]" />
        </div>
        <p className="mt-4 text-xs text-slate-500">{product.mockupNote}</p>
      </>
    );
  }

  if (product.id === "make-my-lesson") {
    return (
      <>
        <div className="mt-4 rounded-xl border border-[#d3e2ff] bg-white p-4">
          <div className="rounded-lg border border-[#d7e5ff] bg-[#f3f8ff] p-3">
            <div className="h-2 w-[70%] rounded-full bg-slate-300" />
            <div className="mt-2 h-2 w-[50%] rounded-full bg-gradient-to-r from-[#6C63FF66] to-[#1E3A8A66]" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-md bg-[#f6f9ff] py-2 text-center text-[10px] font-medium text-slate-500">
              Grade
            </div>
            <div className="rounded-md bg-[#f6f9ff] py-2 text-center text-[10px] font-medium text-slate-500">
              Subject
            </div>
            <div className="rounded-md bg-[#f6f9ff] py-2 text-center text-[10px] font-medium text-slate-500">
              Duration
            </div>
          </div>
          <div className="mt-3 h-12 rounded-lg bg-[#eef4ff]" />
          <div className="mt-3 flex justify-center">
            <span className="rounded-md bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-4 py-2 text-[11px] font-semibold text-white">
              Generate Lesson Plan
            </span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">{product.mockupNote}</p>
      </>
    );
  }

  return (
    <>
      <div className="mt-4 rounded-xl border border-[#d3e2ff] bg-white p-4">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#1E3A8A] text-xl font-black text-white">
            A
          </div>
        </div>
        <div className="mx-auto h-2 w-3/5 rounded-full bg-gradient-to-r from-[#6C63FF66] to-[#1E3A8A66]" />
        <div className="mx-auto mt-2 h-2 w-2/5 rounded-full bg-slate-200" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          {["IELTS", "TOEFL", "PTE", "General"].map((item) => (
            <div
              key={item}
              className="rounded-md bg-[#f6f9ff] py-2 text-center text-[10px] font-medium text-slate-500"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{product.mockupNote}</p>
    </>
  );
}

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
            <article
              key={product.id}
              id={`product-${product.id}`}
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
                    {product.eyebrow}
                  </p>
                  <h2 className="mt-2 text-4xl font-bold text-[#0F172A]">{product.tagline}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                    {product.status}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gradient">{product.name}</p>
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
                  <div className="mt-5 rounded-2xl border border-white/80 bg-white/75 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
                      {product.platforms[0] ?? "Core Features"}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                      {product.tech.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4267f9]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>

                <div
                  className={`rounded-2xl border border-[#dbe8ff] bg-[#f5f8ff] p-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="mb-3 flex items-center justify-center md:justify-start">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-[#d3e2ff] bg-white p-1">
                      <Image
                        src={product.logoSrc}
                        alt={`${product.name} logo`}
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-600">{product.mockupLabel}</p>
                  <ProductPreview product={product} />
                  <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                    <a
                      href={product.primaryCtaHref}
                      target={product.primaryExternal ? "_blank" : undefined}
                      rel={product.primaryExternal ? "noopener noreferrer" : undefined}
                      className="rounded-xl bg-[#112B44] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B3E5E]"
                    >
                      {product.primaryCtaLabel}
                    </a>
                    {product.secondaryCtaLabel && product.secondaryCtaHref ? (
                      <Link
                        href={product.secondaryCtaHref}
                        className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
                      >
                        {product.secondaryCtaLabel}
                      </Link>
                    ) : null}
                  </div>
                  {product.showStoreButtons ? (
                    <div className="mt-4 flex gap-2">
                      <a href={product.appStoreHref} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                        App Store
                      </a>
                      <a href={product.playStoreHref} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                        Google Play
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
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
          <Link href="/services" className="mt-6 inline-block rounded-xl bg-[#112B44] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B3E5E]">
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
            <Link href="/services" className="rounded-lg bg-[#112B44] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1B3E5E]">
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
