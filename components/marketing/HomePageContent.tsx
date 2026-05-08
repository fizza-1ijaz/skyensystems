"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomePageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 24, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 24, mass: 0.8 });
  const panelRotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const panelRotateY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const panelShiftX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const panelShiftY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const whyRef = useRef<HTMLDivElement>(null);
  const [activeWhyNode, setActiveWhyNode] = useState("pseb");
  const whyX = useMotionValue(0);
  const whyY = useMotionValue(0);
  const whySmoothX = useSpring(whyX, { stiffness: 130, damping: 22, mass: 0.9 });
  const whySmoothY = useSpring(whyY, { stiffness: 130, damping: 22, mass: 0.9 });
  const whyCoreRotateX = useTransform(whySmoothY, [-1, 1], [4, -4]);
  const whyCoreRotateY = useTransform(whySmoothX, [-1, 1], [-5, 5]);

  const whyNodes = [
    {
      id: "pseb",
      title: "PSEB Registered",
      body: "We are a formally registered software house under Pakistan's Software Export Board — meaning quality, accountability, and a structured operation, not a freelancer.",
      pos: "left-[12%] top-[32%]",
    },
    {
      id: "us-market",
      title: "US Market Focused",
      body: "We understand American business culture, customer expectations, and market dynamics. Our work is built for US users, not adapted for them as an afterthought.",
      pos: "right-[12%] top-[32%]",
    },
    {
      id: "full-stack",
      title: "Full Stack",
      body: "Website. App. Design. AI. Marketing. One team handles everything. No briefing seven different vendors and hoping they work together.",
      pos: "left-[14%] bottom-[18%]",
    },
    {
      id: "partners",
      title: "Long-Term Partners",
      body: "We measure success in client relationships that last years, not projects that close and move on. Your growth is how we grow.",
      pos: "right-[14%] bottom-[18%]",
    },
  ] as const;
  const activeWhyDetail =
    whyNodes.find((node) => node.id === activeWhyNode) ?? whyNodes[0];

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

  const onHeroPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  };

  const onHeroPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const onWhyPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = whyRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    whyX.set(Math.max(-1, Math.min(1, x)));
    whyY.set(Math.max(-1, Math.min(1, y)));
  };

  const onWhyPointerLeave = () => {
    whyX.set(0);
    whyY.set(0);
  };

  return (
    <div ref={containerRef} className="pb-8 pt-0">
      <section className="relative mx-auto min-h-[88vh] w-full max-w-[1700px] overflow-hidden px-6 pb-14 pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#d6e5ff88] blur-3xl" />
          <div className="absolute right-8 top-12 h-80 w-80 rounded-full bg-[#ddd5ff70] blur-3xl" />
          <div className="absolute bottom-8 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-[#e4edff75] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.84),rgba(241,247,255,0.75)_44%,rgba(235,243,255,0.72))]" />
          <div className="absolute inset-0 opacity-40 [background-size:38px_38px] [background-image:linear-gradient(to_right,rgba(123,140,175,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,140,175,0.12)_1px,transparent_1px)]" />
        </div>

        <div
          ref={heroRef}
          onPointerMove={onHeroPointerMove}
          onPointerLeave={onHeroPointerLeave}
          className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center"
        >
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto inline-flex items-center rounded-full border border-[#d8e5ff] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4a6490] shadow-[0_15px_40px_-30px_rgba(64,95,175,0.5)] lg:mx-0"
            >
              PSEB Registered Software House · Pakistan & Bahrain
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
              className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#637da4]"
            >
              YOUR GROWTH-FOCUSED DIGITAL PARTNER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              className="mt-4 text-balance text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0f2544] md:text-6xl lg:text-[5.45rem]"
            >
              <span className="block">One Team.</span>
              <motion.span
                className="block bg-gradient-to-r from-[#324b8f] via-[#6b63ff] to-[#34b7ff] bg-clip-text text-transparent"
                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "180% 100%" }}
              >
                Every Digital Need.
              </motion.span>
              <span className="block">Anywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-[#4a6388] md:text-lg lg:mx-0 lg:max-w-3xl"
            >
              We build websites, mobile apps, AI-powered products, and run the digital marketing that fills them with customers. PSEB-registered. US-market focused. One team that becomes part of yours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5d62ff] via-[#7f75ff] to-[#45b8ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-24px_rgba(93,98,255,0.85)] transition duration-300 hover:-translate-y-0.5"
              >
                Start Your Project
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                href="/products"
                className="rounded-xl border border-[#d7e4ff] bg-white/80 px-6 py-3 text-sm font-semibold text-[#36527f] shadow-[0_16px_38px_-30px_rgba(64,95,175,0.7)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#c3d8ff]"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.62, ease: "easeOut" }}
              className="mt-8 grid grid-cols-1 gap-2.5 text-left text-sm text-[#3f5d88] sm:grid-cols-2"
            >
              {[
                "✓ PSEB Registered",
                "✓ 50+ Projects Delivered",
                "✓ US Timezone Support",
                "✓ 4-Hour Response Guarantee",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#dbe7ff] bg-white/72 px-3.5 py-2.5 font-semibold shadow-[0_14px_30px_-26px_rgba(67,101,174,0.75)] backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ rotateX: panelRotateX, rotateY: panelRotateY, transformPerspective: 1600 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <motion.div
              style={{ x: panelShiftX, y: panelShiftY }}
              className="absolute -left-4 top-10 hidden h-24 w-24 rounded-3xl border border-[#d6e6ff] bg-white/70 backdrop-blur-xl shadow-[0_24px_45px_-30px_rgba(78,110,194,0.85)] md:block"
            />
            <motion.div
              style={{ x: panelShiftX, y: panelShiftY }}
              className="absolute -right-6 top-4 hidden h-20 w-20 rounded-full border border-[#dce7ff] bg-[radial-gradient(circle_at_30%_30%,#ffffff,rgba(188,219,255,0.7))] shadow-[0_24px_45px_-30px_rgba(90,128,212,0.9)] md:block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            />

            <div className="relative rounded-[2rem] border border-[#dce8ff] bg-white/70 p-5 shadow-[0_35px_80px_-40px_rgba(80,114,196,0.85)] backdrop-blur-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-2xl border border-[#dce8ff] bg-white/80 p-4"
                  animate={{ y: [-2, 4, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b82a8]">
                    Live Pipeline
                  </p>
                  <div className="mt-3 space-y-2">
                    {[72, 58, 84].map((w) => (
                      <div key={w} className="h-2 rounded-full bg-[#edf3ff]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#5c68ff] to-[#37beff]"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-[#dce8ff] bg-white/80 p-4"
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b82a8]">
                    AI Nodes
                  </p>
                  <div className="relative mt-3 h-16">
                    {[10, 40, 72].map((x, idx) => (
                      <span
                        key={x}
                        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#4f91ff] shadow-[0_0_12px_rgba(79,145,255,0.9)]"
                        style={{ left: `${x}%`, opacity: 0.75 + idx * 0.1 }}
                      />
                    ))}
                    <div className="absolute left-[12%] right-[18%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#7ba0ff] via-[#69c5ff] to-[#8e9fff]" />
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl border border-[#dce8ff] bg-white/80 p-4 sm:col-span-2"
                  animate={{ y: [-1, 3, -1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6b82a8]">
                    Deployment Command Center
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-[#e5eeff] bg-[#f6f9ff] p-2 text-center text-[11px] font-semibold text-[#55729f]">
                      Web
                    </div>
                    <div className="rounded-xl border border-[#e5eeff] bg-[#f6f9ff] p-2 text-center text-[11px] font-semibold text-[#55729f]">
                      App
                    </div>
                    <div className="rounded-xl border border-[#e5eeff] bg-[#f6f9ff] p-2 text-center text-[11px] font-semibold text-[#55729f]">
                      AI
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,106,255,0.24),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(55,190,255,0.24),transparent_45%)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-x-hidden px-6 py-14 md:px-10">
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
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            The agency that works like part of your team.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Built for outcomes, accountability, and long-term growth.
          </p>
        </div>

        <div
          ref={whyRef}
          onPointerMove={onWhyPointerMove}
          onPointerLeave={onWhyPointerLeave}
          className="relative mt-10 hidden min-h-[640px] overflow-hidden rounded-[2.5rem] border border-[#dce7ff] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(241,247,255,0.84))] md:block"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-12 h-56 w-56 rounded-full bg-[#dce9ff88] blur-3xl" />
            <div className="absolute right-16 top-10 h-64 w-64 rounded-full bg-[#e0d9ff85] blur-3xl" />
            <div className="absolute bottom-8 left-1/2 h-44 w-[30rem] -translate-x-1/2 rounded-full bg-[#d8eeff80] blur-3xl" />
          </div>

          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 700" fill="none">
            {[
              { toX: 220, toY: 220, id: "pseb" },
              { toX: 980, toY: 220, id: "us-market" },
              { toX: 240, toY: 520, id: "full-stack" },
              { toX: 960, toY: 520, id: "partners" },
            ].map((line) => (
              <motion.path
                key={line.id}
                d={`M600 350 Q 600 350 ${line.toX} ${line.toY}`}
                stroke={activeWhyNode === line.id ? "rgba(92,104,255,0.8)" : "rgba(114,138,180,0.38)"}
                strokeWidth={activeWhyNode === line.id ? 2.8 : 1.8}
                strokeLinecap="round"
                strokeDasharray="6 8"
                animate={{ opacity: activeWhyNode === line.id ? 1 : 0.6 }}
              />
            ))}
          </svg>

          <motion.div
            style={{ rotateX: whyCoreRotateX, rotateY: whyCoreRotateY, transformPerspective: 1400 }}
            className="absolute left-1/2 top-1/2 z-20 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              className="absolute inset-0 rounded-[2rem] border border-[#d8e6ff] bg-white/75 shadow-[0_25px_70px_-30px_rgba(74,111,192,0.8)] backdrop-blur-2xl"
              animate={{ scale: activeWhyNode ? [1, 1.03, 1] : 1 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-4 rounded-2xl border border-[#d9e9ff] bg-[radial-gradient(circle_at_30%_30%,#f4f8ff,rgba(223,236,255,0.8))]" />
            </motion.div>
            <motion.div
              className="absolute -inset-6 rounded-full border border-[#7c8fff55]"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            />
          </motion.div>

          {whyNodes.map((node) => {
            const isActive = activeWhyNode === node.id;
            return (
              <motion.div
                key={node.id}
                onHoverStart={() => setActiveWhyNode(node.id)}
                onFocus={() => setActiveWhyNode(node.id)}
                className={`absolute z-30 ${node.pos}`}
                animate={{ scale: isActive ? 1.04 : 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <div
                  className={`group rounded-full border px-4 py-2.5 shadow-[0_24px_50px_-34px_rgba(88,117,193,0.9)] backdrop-blur-xl transition-colors ${
                    isActive
                      ? "border-[#b8cdff] bg-white/92"
                      : "border-[#d9e7ff] bg-white/72"
                  }`}
                >
                  <p className="text-sm font-bold text-[#2a4d86]">{node.title}</p>
                </div>
                <div
                  className={`mx-auto mt-2 h-3 w-3 rounded-full transition-all ${
                    isActive
                      ? "bg-[#5a68ff] shadow-[0_0_16px_rgba(90,104,255,0.85)]"
                      : "bg-[#7ea2d6]"
                  }`}
                />
              </motion.div>
            );
          })}

          <motion.div
            key={`why-detail-${activeWhyDetail.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 z-30 w-[min(86%,720px)] -translate-x-1/2 rounded-2xl border border-[#cfdeff] bg-white/84 p-5 text-center shadow-[0_24px_56px_-36px_rgba(88,117,193,0.95)] backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d84ab]">
              {activeWhyDetail.title}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#4a6388]">{activeWhyDetail.body}</p>
          </motion.div>
        </div>

        <div className="mt-8 space-y-4 md:hidden">
          {whyNodes.map((node) => (
            <div key={`mobile-${node.id}`} className="relative pl-6">
              <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[#5a68ff] shadow-[0_0_12px_rgba(90,104,255,0.8)]" />
              <h3 className="font-semibold text-[#1f3b66]">{node.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{node.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Built by us, for real users</p>
        <h2 className="text-3xl font-bold md:text-4xl">
          We do not just build for clients. We build for <span className="text-gradient">ourselves.</span>
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">Meet the Skyen Group products built by the same team and standards we bring to client projects.</p>
        <div className="mt-8 grid gap-7 md:grid-cols-3 lg:gap-8">
          {[
            ["Studiely", "Live", "Learning, made personal.", "A full-stack education platform live on iOS, Android, and Web.", "Visit Studiely", "https://studiely.com"],
            ["Make My Lesson", "Arriving soon", "Teaching, reimagined.", "AI-powered lesson planning with instant structured plans.", "Join waitlist", "/products"],
            ["Linguatude", "Coming soon", "English, unlocked.", "Adaptive English test prep with real exam simulations.", "Notify me", "/products"],
          ].map(([name, status, tag, desc, cta, href]) => (
            <motion.article
              key={name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-3xl border border-white/50 bg-white/75 p-6 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{status}</p>
              <h3 className="mt-2 text-2xl font-bold">{name}</h3>
              <p className="text-sm font-semibold text-gradient">{tag}</p>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <Link href={href} className="mt-4 inline-block text-sm font-semibold text-[#6C63FF]">{cta} -&gt;</Link>
            </motion.article>
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

