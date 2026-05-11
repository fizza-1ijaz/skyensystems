"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { BookOpen } from "lucide-react";

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
  mockup1Src?: string;
  mockup2Src?: string;
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
    mockupLabel: "Studiely - Mobile App",
    mockupNote: "Live previews from our latest release.",
    mockup1Src: "/studiely-mockup.jpeg",
    mockup2Src: "/studiely-mockup2.jpeg",
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
    mockupLabel: "Make My Lesson - AI Platform",
    mockupNote: "Concept preview of our teacher dashboard.",
    mockup1Src: "/makemylesson-mockup.jpeg",
    mockup2Src: "/makemylesson-mockup2.jpeg",
    logoSrc: "/logo-makemylesson.png",
    primaryCtaLabel: "Visit Make My Lesson",
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
    primaryCtaLabel: "Visit Linguatude",
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

function ProductPreview({ product, priority = false }: { product: ProductScene; priority?: boolean }) {
  const mockups = [product.mockup1Src, product.mockup2Src].filter(Boolean);

  if (mockups.length > 0) {
    return (
      <div className="relative h-full min-h-[400px] flex items-center justify-center py-10">
        <div className="relative flex items-center gap-4 md:gap-8">
          {/* Main Mobile Frame */}
          <div className="relative w-[180px] md:w-[220px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-xl z-20" />
              <div className="relative h-full w-full">
                <Image
                  src={mockups[0]!}
                  alt={`${product.name} mockup 1`}
                  fill
                  sizes="(max-width: 768px) 180px, 220px"
                  quality={80}
                  className="object-cover"
                  priority={priority}
                />
              </div>
          </div>

          {/* Secondary Offset Frame */}
          {mockups[1] && (
            <div className="relative w-[160px] md:w-[200px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-800 shadow-xl overflow-hidden -ml-12 md:-ml-16 mt-12 opacity-90 transition-all hover:opacity-100 hover:-translate-y-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20" />
                <div className="relative h-full w-full">
                    <Image
                    src={mockups[1]}
                    alt={`${product.name} mockup 2`}
                    fill
                    sizes="(max-width: 768px) 160px, 200px"
                    quality={80}
                    className="object-cover"
                    priority={priority}
                    />
                </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[400px] flex items-center justify-center py-10">
       <div className="w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 gap-4">
            <BookOpen size={48} strokeWidth={1} />
            <p className="text-xs font-bold uppercase tracking-widest">Prototype Stage</p>
       </div>
    </div>
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
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
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
              <div className={`relative z-10 grid gap-12 ${idx % 2 === 1 ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"}`}>
                <div className={`${idx % 2 === 1 ? "md:order-2" : ""} text-center md:text-left`}>
                  <div className="mb-6 flex flex-col md:flex-row items-center md:items-end gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[#d3e2ff] bg-white p-1.5 shadow-lg">
                      <Image
                        src={product.logoSrc}
                        alt={`${product.name} logo`}
                        fill
                        sizes="80px"
                        quality={80}
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                            {product.eyebrow}
                        </p>
                        <h2 className="text-4xl font-black tracking-tight text-slate-900">{product.name}</h2>
                    </div>
                  </div>

                  <p className="text-xl font-bold text-slate-700 leading-tight mb-2">{product.tagline}</p>
                  <p className="text-sm font-bold uppercase tracking-wider text-violet-500 mb-6">
                    {product.status}
                  </p>
                  
                  <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                      {product.platforms[0] ?? "Core Capabilities"}
                    </p>
                    <ul className="grid gap-4 text-base text-slate-600">
                      {product.tech.map((item) => (
                        <li key={item} className="flex gap-4">
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>

                <div
                  className={`relative flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <ProductPreview product={product} priority={idx === 0} />
                  
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href={product.primaryCtaHref}
                      target={product.primaryExternal ? "_blank" : undefined}
                      rel={product.primaryExternal ? "noopener noreferrer" : undefined}
                      className="group relative rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
                    >
                      {product.primaryCtaLabel}
                    </a>
                    {product.secondaryCtaLabel && product.secondaryCtaHref ? (
                      <Link
                        href={product.secondaryCtaHref}
                        className="group rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95 shadow-lg shadow-slate-100"
                      >
                        {product.secondaryCtaLabel}
                      </Link>
                    ) : null}
                  </div>
                  {product.showStoreButtons ? (
                    <div className="mt-8 border-t border-slate-200 pt-6">
                      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Download and see it now
                      </p>
                      <div className="flex justify-center gap-3">
                        <a 
                          href={product.appStoreHref} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 rounded-lg bg-[#112B44] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_6px_16px_-6px_rgba(17,43,68,0.5)] transition-all duration-300 hover:bg-[#1B3E5E] hover:shadow-[0_8px_20px_-8px_rgba(17,43,68,0.7)] active:scale-95"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 13.5c-.91 0-1.64.75-1.64 1.67s.73 1.67 1.64 1.67 1.64-.75 1.64-1.67-.73-1.67-1.64-1.67zM16.56 5.44h4.92s.5 0 .5.5v10.2c0 .3-.2.5-.5.5h-4.92m-11.6 1.62V5.94s0-.5.5-.5h10.25l-4.5 8.68z"/>
                          </svg>
                          App Store
                        </a>
                        <a 
                          href={product.playStoreHref} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 rounded-lg bg-[#112B44] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_6px_16px_-6px_rgba(17,43,68,0.5)] transition-all duration-300 hover:bg-[#1B3E5E] hover:shadow-[0_8px_20px_-8px_rgba(17,43,68,0.7)] active:scale-95"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.798 12 3.609 22.186A1.5 1.5 0 0 1 1.5 20.879V3.12a1.5 1.5 0 0 1 2.109-1.306zm15.974 9.186L7.157 2.311a1.5 1.5 0 0 1 2.386 1.227v17.924a1.5 1.5 0 0 1-2.386 1.227l12.426-8.689a1.5 1.5 0 0 0 0-2.454z"/>
                          </svg>
                          Google Play
                        </a>
                      </div>
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
            <Link href="/services" className="group relative rounded-lg bg-[#112B44] px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(108,99,255,0.8),0_12px_40px_-12px_rgba(108,99,255,0.6)] hover:scale-105 active:scale-95">
              <span className="relative z-10">See Our Services</span>
            </Link>
            <Link href="/contact-us" className="group relative rounded-lg border border-[#3A5C7A] bg-[#0F253AE6] px-6 py-3 font-semibold text-[#EAF2FF] shadow-[0_0_30px_rgba(100,200,255,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(100,200,255,0.8),0_12px_40px_-12px_rgba(100,200,255,0.6)] hover:border-[#5A8CBA] hover:scale-105 active:scale-95">
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
