"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PremiumHeroBubbles } from "@/components/marketing/PremiumHeroBubbles";

export function HomePageContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = containerRef.current?.querySelectorAll("[data-service-card]");
    if (!cards) return;

    const animation = gsap.fromTo(
      cards,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.14,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="pb-8 pt-0">
      <section className="relative mx-auto flex min-h-[82vh] w-full max-w-[1600px] items-center px-6 py-12 md:px-10">
        <div className="relative w-full overflow-hidden py-14 text-center md:py-20">
          <PremiumHeroBubbles />
          <h1 className="mx-auto max-w-[1300px] text-balance text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[7rem]">
            One team. Every digital need. <span className="text-gradient">Anywhere.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-slate-600 md:text-xl">
            We build websites, mobile apps, and digital brands with the same craft
            we put into our own products. Serious capability. Straightforward
            pricing. No agency games.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/pricing" className="rounded-xl bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(108,99,255,1)]">
              See Our Packages
            </Link>
            <Link href="https://calendly.com/skyensystems/discovery" className="rounded-xl border border-white/50 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl">
              Book a Free Call
            </Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Headquartered in Bahrain",
              "Avg. delivery in 3-4 weeks",
              "PSEB Certified",
              "Part of Skyen Group",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/50 bg-white/60 px-4 py-3 text-center font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">The reality</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Most businesses are either <span className="text-gradient">invisible online</span> or paying too much to fix it.
            </h2>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>You have seen the quotes. $5,000 for a five-page website. $2,000 a month to post three times a week on Instagram.</p>
            <p>We removed agency overhead and kept capability. What is left is a fast, honest team delivering the same standard for a fraction of the price.</p>
            <Link href="/about" className="inline-block rounded-xl border border-white/60 bg-white/70 px-5 py-2.5 text-sm font-semibold">How we work</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Why Skyen Systems</p>
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Three things we never compromise on.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Fast", "Websites in 3-4 weeks. Mobile apps in 6-10 weeks with clear milestone sprints."],
            ["02", "Full-stack", "Web, apps, brand, social, SEO, and design handled by one aligned team."],
            ["03", "Honest", "Every price is published. No hidden fees and no inflated retainers."],
          ].map(([no, title, text]) => (
            <motion.article
              key={no}
              data-service-card
              initial={{ opacity: 1, y: 0 }}
              className="noise rounded-3xl border border-white/40 bg-white/65 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl"
            >
              <p className="text-4xl font-bold text-slate-300">{no}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Built by us, for real users</p>
        <h2 className="text-3xl font-bold md:text-4xl">
          We do not just build for clients. We build for <span className="text-gradient">ourselves.</span>
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">Meet the Skyen Group products built by the same team and standards we bring to client projects.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Studiely", "Live", "Learning, made personal.", "A full-stack education platform live on iOS, Android, and Web.", "Visit Studiely", "https://studiely.com"],
            ["Make My Lesson", "Arriving soon", "Teaching, reimagined.", "AI-powered lesson planning with instant structured plans.", "Join waitlist", "/products"],
            ["Linguatude", "Coming soon", "English, unlocked.", "Adaptive English test prep with real exam simulations.", "Notify me", "/products"],
          ].map(([name, status, tag, desc, cta, href]) => (
            <article key={name} className="rounded-3xl border border-white/50 bg-white/75 p-6 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{status}</p>
              <h3 className="mt-2 text-2xl font-bold">{name}</h3>
              <p className="text-sm font-semibold text-gradient">{tag}</p>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <Link href={href} className="mt-4 inline-block text-sm font-semibold text-[#6C63FF]">{cta} -&gt;</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">What we build</p>
        <h2 className="text-3xl font-bold md:text-4xl">Everything your business needs. Nothing you do not.</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Six core services, one team.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Web Design & Development", "Fast, beautiful websites built to convert visitors into customers."],
            ["Mobile Apps - iOS & Android", "Native-quality apps with modern cross-platform delivery."],
            ["Social Media Management", "Consistent, on-brand presence managed end to end."],
            ["Digital Marketing & SEO", "Organic growth and paid strategy tuned to measurable outcomes."],
            ["Brand & UI/UX Design", "Identity systems and interfaces your customers remember."],
            ["Web Applications & SaaS", "Custom dashboards, tools, and SaaS MVPs built for scale."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-3xl border border-white/50 bg-white/75 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Honest pricing</p>
        <h2 className="text-3xl font-bold md:text-4xl">Simple pricing. No agency games.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Start", "$750", "Professional website, social setup, Google business profile, and basic brand kit."],
            ["Grow", "$1,500", "Everything in Start plus 10-page site, full brand identity, and one month social management."],
            ["Lead", "$4,000+", "Full transformation: web, app, SEO, ad setup, and dedicated project management."],
          ].map(([name, price, desc]) => (
            <article key={name} className="rounded-3xl border border-white/50 bg-white/75 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-1 text-3xl font-bold">{price}</p>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <Link href="/pricing" className="mt-4 inline-block text-sm font-semibold text-[#6C63FF]">Get started -&gt;</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Who we are</p>
        <h2 className="text-3xl font-bold md:text-4xl">Built by builders. Backed by experience.</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Skyen Systems is the digital services arm of the Skyen Group. We built Studiely in-house and bring that same product thinking to client work.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["3+", "Live products built in-house"],
            ["2", "International offices"],
            ["6", "Core service areas"],
            ["3-4", "Week avg. website delivery"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/50 bg-white/75 p-5">
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">What clients say</p>
        <h2 className="text-3xl font-bold md:text-4xl">Early results. Real businesses.</h2>
        <div className="mt-6 rounded-3xl border border-dashed border-[#6C63FF55] bg-white/70 p-8 text-center">
          <h3 className="text-2xl font-bold">Be one of our first US clients.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We are offering a Founding Client rate with 20% off in exchange for your honest review.
          </p>
          <Link href="/contact-us" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white">
            Claim the Founding Rate
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Common questions</p>
        <h2 className="text-3xl font-bold md:text-4xl">Things people ask before they reach out.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Do your prices include ad spend?", "No. Management fee covers work; ad spend is paid directly by the client to platforms."],
            ["Where is your team located?", "Headquartered in Bahrain with regional development center and US-friendly communication hours."],
            ["How do payments work?", "Packages are typically 50% upfront and 50% on delivery; retainers are billed monthly."],
            ["How is this different from a freelancer?", "You get a full multidisciplinary team with one point of contact and long-term support."],
          ].map(([q, a]) => (
            <article key={q} className="rounded-2xl border border-white/50 bg-white/75 p-5">
              <h3 className="font-semibold">{q}</h3>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">From our team</p>
            <h2 className="text-3xl font-bold md:text-4xl">Thinking out loud.</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-[#6C63FF]">All posts -&gt;</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Web Design", "How Much Should a Website Cost for a Small Business? (Honest 2025 Breakdown)", "US agencies quote $5,000-$25,000. Here is what actually drives price."],
            ["Growth", "Why Your Small Business Website Is Not Getting You Customers", "Most sites fail due to five recurring conversion blockers."],
            ["Social Media", "Management vs Marketing - What Is the Difference?", "A clear framework to choose what your business actually needs now."],
          ].map(([category, title, excerpt]) => (
            <article key={title} className="rounded-2xl border border-white/50 bg-white/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6C63FF]">{category}</p>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-0 py-14">
        <div className="w-full rounded-none border-y border-white/50 bg-white/75 px-8 py-12 text-center shadow-[0_20px_60px_-32px_rgba(108,99,255,0.6)] md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Let us work together</p>
          <h2 className="mt-3 text-4xl font-bold">
            Ready to build something <span className="text-gradient">that actually works?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            No commitment. No pitch. Just a conversation about what your business needs.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="https://calendly.com/skyensystems/discovery" className="rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white">
              Book a Free Discovery Call
            </Link>
            <Link href="/pricing" className="rounded-xl border border-white/70 bg-white px-6 py-3 text-sm font-semibold">
              See Pricing
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">We respond to every inquiry within 24 hours. Usually much faster.</p>
        </div>
      </section>
    </div>
  );
}

