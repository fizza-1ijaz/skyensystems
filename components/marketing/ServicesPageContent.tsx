"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

type ReelService = {
  id: string;
  slug: string;
  title: string;
  short: string;
  sectionHeadline: string;
  description: string;
  listLabel?: string;
  highlights: string[];
  approach?: string;
  stackLabel?: string;
  stack?: string;
  cta: string;
  href: string;
};

const SERVICES: ReelService[] = [
  {
    id: "web",
    slug: "web-design-development",
    title: "Web Development",
    short: "Web",
    sectionHeadline: "Websites & Web Applications That Work",
    listLabel: "What we build",
    description:
      "Your website is working 24/7, representing your business to every potential customer who looks you up. It needs to be fast, professional, and built to convert — not just look good in a pitch deck.",
    highlights: [
      "Marketing websites and landing pages",
      "Full web applications and SaaS products",
      "E-commerce stores (Shopify, WooCommerce, custom)",
      "Content management systems (WordPress, Sanity, Contentful)",
      "Web portals and client dashboards",
      "API integrations and third-party connections",
    ],
    approach:
      "Every project starts with understanding what success looks like for you — not just aesthetically, but commercially. Page speed, conversion rate, SEO structure — these aren't afterthoughts, they're built in from day one.",
    stackLabel: "Technology",
    stack:
      "Next.js · React · TypeScript · Node.js · PostgreSQL · Tailwind CSS · Stripe · Shopify · WordPress",
    cta: "Explore Web Projects",
    href: "/contact-us",
  },
  {
    id: "mobile",
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "App",
    sectionHeadline: "iOS & Android Apps Your Users Will Actually Love",
    listLabel: "What we build",
    description:
      "A bad app doesn't get a second chance. Users delete within 30 seconds if it's slow, confusing, or unreliable. We build apps that users keep — and come back to.",
    highlights: [
      "Consumer-facing iOS and Android apps",
      "Business productivity tools",
      "Marketplace and platform apps",
      "App Store and Play Store launch and optimisation",
      "MVP development for funded startups",
    ],
    approach:
      "We begin with user flows before writing code. Every screen is prototyped and approved. We build for performance first — your app will load fast and feel native.",
    stackLabel: "Technology",
    stack: "React Native · Swift · Kotlin · Expo · Firebase · REST APIs · Redux",
    cta: "Build a Mobile App",
    href: "/contact-us",
  },
  {
    id: "uiux",
    slug: "brand-ui-ux-design",
    title: "UI/UX Design",
    short: "UI",
    sectionHeadline: "Design That Does More Than Look Good",
    listLabel: "What we design",
    description:
      "Great design isn't decoration — it's what determines whether your user finds what they need or gives up and leaves. We design for human behaviour, then make it beautiful.",
    highlights: [
      "Product UI from wireframe to final design",
      "User experience research and journey mapping",
      "Design systems and component libraries",
      "Website and landing page design",
      "App UI for iOS and Android",
      "Brand identity and visual language",
    ],
    approach:
      "We research before we design. User interviews, competitive analysis, and behavioural data inform every decision. Then we build prototypes you can actually click through.",
    stackLabel: "Tools",
    stack: "Figma · Prototyping · InVision · Maze · Hotjar",
    cta: "Design Your Product Experience",
    href: "/contact-us",
  },
  {
    id: "ai",
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "AI",
    sectionHeadline: "Practical AI. Real Business Value.",
    listLabel: "What we build",
    description:
      "AI is not a feature — it's a business decision. We help you identify where AI creates genuine value in your operation, then build it properly, not as a gimmick.",
    highlights: [
      "Customer service chatbots trained on your content",
      "Internal knowledge base assistants",
      "AI-powered content generation tools",
      "Intelligent workflow automation",
      "LLM integration into existing products",
      "Custom model fine-tuning for specific use cases",
    ],
    stackLabel: "Technology",
    stack:
      "OpenAI · Claude API (Anthropic) · LangChain · Python · FastAPI · Vector Databases",
    cta: "Discuss AI for Your Business",
    href: "/contact-us",
  },
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "SEO",
    sectionHeadline: "Marketing That Actually Fills Your Pipeline",
    listLabel: "What we do",
    description:
      "We don't run campaigns that just get impressions. We run campaigns that get customers — with every dollar tracked to business outcomes.",
    highlights: [
      "Search Engine Optimisation (technical + content)",
      "Google Ads — Search, Display, and Shopping",
      "Meta Ads — Facebook and Instagram",
      "LinkedIn Ads (B2B campaigns)",
      "Content marketing and blog strategy",
      "Email marketing and automation",
      "Analytics setup and conversion tracking",
    ],
    cta: "Launch Growth Campaigns",
    href: "/contact-us",
  },
  {
    id: "teams",
    slug: "dedicated-teams",
    title: "Dedicated Teams",
    short: "Team",
    sectionHeadline: "Your Team. Our People.",
    listLabel: "What you get",
    description:
      "Hiring is slow, expensive, and risky. Dedicated teams give you experienced developers and designers working exclusively on your projects — without the overhead of employment.",
    highlights: [
      "1–5 developers dedicated full-time to your company",
      "A project manager who oversees delivery and communication",
      "US timezone overlap (4+ hours) guaranteed",
      "Weekly video syncs and daily Slack/Teams updates",
      "Month-to-month flexibility — scale up or down",
      "Ideal for: Growth-stage companies that need consistent development output but aren't ready to hire full in-house. Popular with US startups wanting senior development talent.",
    ],
    cta: "Build Your Dedicated Team",
    href: "/contact-us",
  },
];

type ServicesPageContentProps = {
  initialServiceSlug?: string;
};

export function ServicesPageContent({ initialServiceSlug }: ServicesPageContentProps) {
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const itemCount = SERVICES.length;
  const activeService = SERVICES[activeIndex];

  useEffect(() => {
    if (initialServiceSlug) {
      const slugIndex = SERVICES.findIndex(
        (service) => service.slug === initialServiceSlug,
      );
      if (slugIndex >= 0) {
        setActiveIndex(slugIndex);
        return;
      }
    }

    const serviceId = searchParams.get("service");
    if (!serviceId) return;
    const resolvedIndex = SERVICES.findIndex((service) => service.id === serviceId);
    if (resolvedIndex >= 0) {
      setActiveIndex(resolvedIndex);
    }
  }, [initialServiceSlug, searchParams]);

  const ringItems = useMemo(
    () =>
      SERVICES.map((service, idx) => {
        const progress = idx / (itemCount - 1 || 1);
        const x = -420 + progress * 840;
        const curveY = Math.sin(progress * Math.PI) * -86;
        const edgeStopLift = idx === 0 || idx === itemCount - 1 ? 5 : 0;
        const stopY = curveY - 62 - edgeStopLift;
        const edgeOffset = Math.abs(progress - 0.5) * 2;
        const carY = curveY + 4 + edgeOffset * 10;
        const nearFocal = idx === activeIndex;
        return {
          ...service,
          idx,
          progress,
          x,
          y: stopY,
          carY,
          nearFocal,
        };
      }),
    [activeIndex, itemCount],
  );

  const mobileStops = useMemo(
    () => [
      { label: "Web", idx: SERVICES.findIndex((service) => service.id === "web"), top: true },
      { label: "App", idx: SERVICES.findIndex((service) => service.id === "mobile"), top: false },
      { label: "UI", idx: SERVICES.findIndex((service) => service.id === "uiux"), top: true },
      { label: "AI", idx: SERVICES.findIndex((service) => service.id === "ai"), top: false },
      { label: "SEO", idx: SERVICES.findIndex((service) => service.id === "marketing"), top: true },
      { label: "Team", idx: SERVICES.findIndex((service) => service.id === "teams"), top: false },
    ],
    [],
  );

  const activeMobileStopIndex = Math.max(
    0,
    mobileStops.findIndex((stop) => stop.idx === activeIndex),
  );
  const mobileCarLeftPercentRaw =
    ((activeMobileStopIndex + 0.5) / (mobileStops.length || 1)) * 100;
  const mobileCarLeftPercent = Math.min(88, Math.max(12, mobileCarLeftPercentRaw));

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    dragStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) > 30) {
      if (delta < 0) setActiveIndex((prev) => (prev + 1) % itemCount);
      else setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }
    dragStartX.current = null;
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };
  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = event.clientX - dragStartX.current;
    if (Math.abs(delta) > 36) {
      if (delta < 0) setActiveIndex((prev) => (prev + 1) % itemCount);
      else setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }
    dragStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-[90px] md:pt-24">
      <section className="px-6 pb-4 md:px-16 md:pb-5">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            WHAT WE OFFER
          </p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-5xl">
            Every digital service your business needs.
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 md:text-lg">
            Six specialisms. One team. No coordination overhead.
          </p>
        </div>
      </section>

      <section
        id="service-road"
        className="mt-10 flex items-start px-3 pb-6 md:mt-[120px] md:px-8 md:pb-8 xl:px-12"
      >
        <div
          className="mx-auto w-full max-w-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div className="relative mx-auto h-[120px] w-full max-w-[1180px] md:h-[240px]">
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <svg
                className="absolute left-1/2 top-[40%] h-[220px] w-[96%] max-w-[1120px] -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 1120 220"
                fill="none"
              >
                <path d="M40 180 C 260 20, 860 20, 1080 180" stroke="#112B44" strokeWidth="28" strokeLinecap="round" />
                <path d="M40 180 C 260 20, 860 20, 1080 180" stroke="#274A68" strokeWidth="2" strokeDasharray="10 16" />
              </svg>
              <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#8B5CF626] blur-3xl" />
              <div className="absolute -right-16 top-16 h-64 w-64 rounded-full bg-[#1E3A8A1f] blur-3xl" />
              <div className="absolute left-1/2 top-[40%] h-32 w-[92%] max-w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6C63FF16] via-[#8B5CF61a] to-[#1E3A8A16] blur-3xl" />
            </div>

            <div className="relative z-20 mx-auto flex w-full flex-col items-center">
              <div className="relative mb-3 block h-[112px] w-full max-w-[440px] md:hidden">
              <div className="absolute left-6 right-6 top-[56px] h-[2px] rounded-full bg-gradient-to-r from-[#1E3A8A88] via-[#6C63FF66] to-[#2DD4BF88]" />
              <motion.div
                className="pointer-events-none absolute top-[76px] z-20 h-8 w-14 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  left: `${mobileCarLeftPercent}%`,
                }}
                transition={{ duration: 0.45, ease: [0.22, 0.9, 0.25, 1.08] }}
              >
                <div className="relative h-8 w-14 rounded-lg border border-[#3D3E8A] bg-gradient-to-b from-[#8FD4FF] via-[#7E8BFF] to-[#7C3AED] shadow-[0_10px_22px_-10px_rgba(0,0,0,0.65)]">
                  <div className="absolute left-1.5 top-1.5 h-2.5 w-6 rounded bg-[#E6F7FF]" />
                  <div className="absolute right-1.5 top-1.5 h-2.5 w-4 rounded bg-[#DDD7FF]" />
                  <div className="absolute -bottom-1.5 left-2 h-3 w-3 rounded-full border border-[#0B1F31] bg-[#0F172A]" />
                  <div className="absolute -bottom-1.5 right-2 h-3 w-3 rounded-full border border-[#0B1F31] bg-[#0F172A]" />
                </div>
              </motion.div>
              <div className="absolute left-0 right-0 top-[56px] grid -translate-y-1/2 grid-cols-6 items-center">
                {mobileStops.map((stop) => (
                  <button
                    key={stop.label}
                    type="button"
                    onClick={() => setActiveIndex(stop.idx)}
                    className="relative mx-auto flex h-11 w-11 items-center justify-center"
                    aria-label={`Select ${stop.label}`}
                  >
                    <span
                      className={`absolute -top-5 text-[10px] font-semibold leading-none tracking-tight ${
                        activeIndex === stop.idx ? "text-[#0F2742]" : "text-[#5A728C]"
                      }`}
                    >
                      {stop.label}
                    </span>
                    <span
                      className={`h-3 w-3 rounded-full border ${
                        activeIndex === stop.idx
                          ? "border-[#1E3A8A] bg-[#1E3A8A] shadow-[0_0_0_5px_rgba(30,58,138,0.16)]"
                          : "border-[#8FA6BE] bg-[#D6E2F0]"
                      }`}
                    />
                  </button>
                ))}
              </div>
              </div>

              <div className="relative hidden h-[210px] w-full max-w-[1180px] md:block">
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    x: ringItems[activeIndex]?.x ?? 0,
                  y: ringItems[activeIndex]?.carY ?? 36,
                  }}
                  transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative h-8 w-14 rounded-lg border border-[#3D3E8A] bg-gradient-to-b from-[#8FD4FF] via-[#7E8BFF] to-[#7C3AED] shadow-[0_10px_22px_-10px_rgba(0,0,0,0.65)]">
                    <div className="absolute left-1.5 top-1.5 h-2.5 w-6 rounded bg-[#E6F7FF]" />
                    <div className="absolute right-1.5 top-1.5 h-2.5 w-4 rounded bg-[#DDD7FF]" />
                    <div className="absolute -bottom-1.5 left-2 h-3 w-3 rounded-full border border-[#0B1F31] bg-[#0F172A]" />
                    <div className="absolute -bottom-1.5 right-2 h-3 w-3 rounded-full border border-[#0B1F31] bg-[#0F172A]" />
                  </div>
                </motion.div>

                {ringItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(item.idx)}
                    className="absolute left-1/2 top-1/2 flex h-[96px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full whitespace-nowrap bg-transparent text-center outline-none ring-0 select-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 md:h-[112px] md:w-[230px]"
                    animate={{
                      x: item.x,
                      y: item.y,
                      scale: item.nearFocal ? 1.1 : 0.92,
                      opacity: item.nearFocal ? 1 : 0.82,
                      filter: item.nearFocal ? "blur(0px)" : "blur(0.2px)",
                      textShadow: item.nearFocal
                        ? "0 0 18px rgba(108,99,255,0.35)"
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.74, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={`Select ${item.title}`}
                  >
                    <div className="pointer-events-none">
                      <span
                        className={`mx-auto mb-2 block h-5 w-5 rounded-full border ${
                        item.nearFocal
                          ? "border-[#38BDF8] bg-[#38BDF8]"
                          : "border-[#5C7FA1] bg-[#2C4B68]"
                        }`}
                      />
                      <span
                        className={`block max-w-[140px] px-1.5 py-0.5 text-center text-xs font-semibold leading-tight tracking-[0.01em] sm:max-w-[180px] sm:text-sm md:max-w-[220px] md:text-lg ${
                          item.nearFocal ? "text-[#0F2742]" : "text-[#264766]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </motion.button>
                ))}

                <motion.div
                  key={`curve-badge-${activeService.id}`}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="pointer-events-none absolute left-1/2 top-[78%] z-20 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#7C8FB7] bg-white/75 px-6 py-2.5 backdrop-blur-xl shadow-[0_18px_44px_-24px_rgba(30,58,138,0.65)]">
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.24),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.18),transparent_50%)]" />
                    <span className="relative text-sm font-bold uppercase tracking-[0.2em] text-[#1E3353] md:text-base">
                      {activeService.short}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative mt-4 w-full rounded-3xl border border-[#2B4A67] bg-[#112B44E8] p-5 text-[#EAF2FF] shadow-[0_35px_75px_-40px_rgba(8,20,34,0.85)] backdrop-blur-xl md:-mt-[30px] md:p-7"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_15%_20%,rgba(108,99,255,0.22),transparent_48%),radial-gradient(circle_at_85%_35%,rgba(30,58,138,0.16),transparent_40%)]" />
              <div className="relative text-center md:text-left">
                <h2 className="mt-2 text-2xl font-bold text-[#F6FAFF] md:text-4xl">
                  {activeService.sectionHeadline}
                </h2>
                <p className="mt-3 text-[#C5D4E7]">{activeService.description}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#9CB3CF]">
                  {activeService.listLabel ?? "What we build"}
                </p>
                <ul className="mt-4 grid gap-2 text-left sm:grid-cols-2">
                  {activeService.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-[#2D4E6D] bg-[#0F253AE6] px-3 py-2 text-sm text-[#C9D9ED]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {activeService.approach ? (
                  <p className="mt-4 text-sm text-[#C5D4E7]">
                    <span className="font-semibold text-[#EAF2FF]">Our approach: </span>
                    {activeService.approach}
                  </p>
                ) : null}
                {activeService.stack ? (
                  <p className="mt-3 text-sm text-[#C5D4E7]">
                    <span className="font-semibold text-[#EAF2FF]">
                      {activeService.stackLabel ?? "Technology"}:{" "}
                    </span>
                    {activeService.stack}
                  </p>
                ) : null}
                <Link
                  href={activeService.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#112B44] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1B3E5E]"
                >
                  {activeService.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
