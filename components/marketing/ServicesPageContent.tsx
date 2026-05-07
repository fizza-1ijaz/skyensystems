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
  description: string;
  highlights: string[];
  cta: string;
  href: string;
};

const SERVICES: ReelService[] = [
  {
    id: "web",
    slug: "web-design-development",
    title: "Web Design & Development",
    short: "Web Experiences",
    description:
      "A beautiful website that no one can find - or that no one takes action on - is a decoration, not an asset. We build websites with one goal: turning visitors into customers.",
    highlights: [
      "Custom responsive design - mobile first, always",
      "SEO-ready HTML structure and meta setup",
      "Google PageSpeed score above 90",
      "Contact forms, booking integrations, and CTAs",
      "CMS integration and Google Analytics + Search Console setup",
      "30-90 days post-launch support included",
    ],
    cta: "Explore Web Projects",
    href: "/contact-us",
  },
  {
    id: "social",
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Brand Presence",
    description:
      "Posting three times a week and hoping for the best is not a social media strategy. We build and manage a social presence that reflects your brand consistently and report on what actually matters.",
    highlights: [
      "Content strategy tailored to your business and audience",
      "Custom graphic design for every post",
      "Caption writing in your brand voice",
      "Hashtag research and platform-specific SEO",
      "Community management - comments, DMs, replies",
      "Monthly performance reports with real metrics",
    ],
    cta: "Scale Social Presence",
    href: "/contact-us",
  },
  {
    id: "mobile",
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "iOS + Android",
    description:
      "We have built Studiely as a live app on the App Store and Google Play. We build with React Native and Flutter to deliver native performance on both iOS and Android from a single codebase.",
    highlights: [
      "React Native or Flutter - your choice or our recommendation",
      "UI/UX design fully included",
      "Backend API development (Node.js / Python)",
      "App Store and Google Play submission handled",
      "Push notifications, authentication, and in-app purchases",
      "Post-launch maintenance packages available",
    ],
    cta: "Build a Mobile App",
    href: "/contact-us",
  },
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Growth Engine",
    description:
      "SEO is a long game that compounds, and paid campaigns need clear execution. We set technical foundations correctly, build keyword strategy around real customer intent, and optimize campaigns transparently.",
    highlights: [
      "Keyword research based on actual customer search behavior",
      "Technical SEO audit and fixes",
      "On-page optimization for key pages",
      "Google Search Console and Analytics setup",
      "Google and Meta ads setup with creative design",
      "Campaign monitoring and monthly optimization",
    ],
    cta: "Launch Growth Engine",
    href: "/contact-us",
  },
  {
    id: "brand",
    slug: "brand-ui-ux-design",
    title: "Brand & UI/UX Design",
    short: "Identity + Product UI",
    description:
      "Your brand is not your logo. We design systems that hold together across website, app, social, and sales materials, then shape interfaces around how users actually think.",
    highlights: [
      "Logo design - 3 concepts, 2 revision rounds",
      "Color palette and typography system",
      "Brand voice and tone guidelines",
      "Full brand guide document",
      "Social media template kit",
      "UI design for web and mobile with Figma handover",
    ],
    cta: "Design Your Brand System",
    href: "/contact-us",
  },
  {
    id: "webapps",
    slug: "web-applications-saas",
    title: "Web Applications & SaaS",
    short: "Web Apps / SaaS",
    description:
      "Off-the-shelf software rarely fits exactly. We build custom web applications, client portals, internal tools, and SaaS MVPs around the way your business actually operates.",
    highlights: [
      "React / Next.js frontend development",
      "Node.js or Python backend and REST APIs",
      "Database design for PostgreSQL, MongoDB, or Firebase",
      "Authentication and role-based permissions",
      "Cloud deployment on AWS, GCP, or Vercel",
      "Full documentation and source code handover",
    ],
    cta: "Discuss Your Project",
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
        const y = Math.sin(progress * Math.PI) * -86;
        const roadY = 68 - Math.sin(progress * Math.PI) * 52;
        const nearFocal = idx === activeIndex;
        return {
          ...service,
          idx,
          progress,
          x,
          y,
          roadY,
          nearFocal,
        };
      }),
    [activeIndex, itemCount],
  );

  const mobileStops = useMemo(
    () => [
      { label: "Web", idx: SERVICES.findIndex((service) => service.id === "web"), top: true },
      { label: "App", idx: SERVICES.findIndex((service) => service.id === "mobile"), top: false },
      { label: "SEO", idx: SERVICES.findIndex((service) => service.id === "marketing"), top: true },
      { label: "SM", idx: SERVICES.findIndex((service) => service.id === "social"), top: false },
      { label: "Brand", idx: SERVICES.findIndex((service) => service.id === "brand"), top: true },
      { label: "Ads", idx: SERVICES.findIndex((service) => service.id === "webapps"), top: false },
    ],
    [],
  );

  const activeMobileStopIndex = Math.max(
    0,
    mobileStops.findIndex((stop) => stop.idx === activeIndex),
  );

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
    <div className="pb-8 pt-12">
      <section className="px-6 py-14 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Service Roadmap
          </p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">
            Six services. One team.
            <br />
            <span className="text-gradient">Zero runaround.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Everything your business needs to compete online — designed, built, and managed by the same team that built Studiely from scratch.
          </p>
        </div>
      </section>

      <section id="service-road" className="px-4 md:px-10 xl:px-16">
        <div
          className="relative mx-auto min-h-[640px] w-full max-w-none overflow-hidden p-2 md:min-h-[700px] md:p-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg
              className="absolute left-1/2 top-[33%] h-[170px] w-[96%] max-w-[1120px] -translate-x-1/2 -translate-y-1/2 md:top-[36%] md:h-[220px]"
              viewBox="0 0 1120 220"
              fill="none"
            >
              <path d="M40 180 C 260 20, 860 20, 1080 180" stroke="#112B44" strokeWidth="28" strokeLinecap="round" />
              <path d="M40 180 C 260 20, 860 20, 1080 180" stroke="#274A68" strokeWidth="2" strokeDasharray="10 16" />
            </svg>
            <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-[#8B5CF626] blur-3xl" />
            <div className="absolute -right-16 bottom-20 h-64 w-64 rounded-full bg-[#1E3A8A1f] blur-3xl" />
            <div className="absolute left-1/2 top-[33%] h-24 w-[92%] max-w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6C63FF16] via-[#8B5CF61a] to-[#1E3A8A16] blur-3xl md:top-[36%] md:h-32" />
          </div>

          <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center">
            <div className="relative mb-3 block h-[96px] w-full max-w-[440px] md:hidden">
              <div className="absolute left-6 right-6 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#1E3A8A88] via-[#6C63FF66] to-[#2DD4BF88]" />
              <motion.div
                className="pointer-events-none absolute top-1/2 z-20 h-8 w-14 -translate-y-1/2"
                animate={{
                  left: `calc(12% + ${activeMobileStopIndex} * 15.2%)`,
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
              <div className="absolute inset-0 flex items-center justify-between px-2">
                {mobileStops.map((stop) => (
                  <button
                    key={stop.label}
                    type="button"
                    onClick={() => setActiveIndex(stop.idx)}
                    className="relative flex h-11 w-11 items-center justify-center"
                    aria-label={`Select ${stop.label}`}
                  >
                    <span
                      className={`absolute text-[10px] font-semibold leading-none tracking-tight ${
                        stop.top ? "top-0" : "bottom-0"
                      } ${activeIndex === stop.idx ? "text-[#0F2742]" : "text-[#5A728C]"}`}
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

            <div className="relative hidden h-[240px] w-full max-w-[1180px] md:block md:h-[300px]">
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: ringItems[activeIndex]?.x ?? 0,
                  y: ringItems[activeIndex]?.roadY ?? 0,
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
                      className={`block max-w-[140px] rounded-md border px-1.5 py-0.5 text-center text-xs font-semibold leading-tight tracking-[0.01em] sm:max-w-[180px] sm:text-sm md:max-w-[220px] md:text-lg ${
                      item.nearFocal
                        ? "border-[#CFE5FF] bg-[#F4FAFF] text-[#0F2742] shadow-[0_6px_16px_-10px_rgba(15,39,66,0.5)]"
                        : "border-[#DCE8F5] bg-[#F4F8FD] text-[#264766]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative mt-4 w-full max-w-3xl rounded-3xl border border-[#2B4A67] bg-[#112B44E8] p-5 text-[#EAF2FF] shadow-[0_35px_75px_-40px_rgba(8,20,34,0.85)] backdrop-blur-xl md:mt-8 md:p-7"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_15%_20%,rgba(108,99,255,0.22),transparent_48%),radial-gradient(circle_at_85%_35%,rgba(30,58,138,0.16),transparent_40%)]" />
              <div className="relative text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CB3CF]">
                  {activeService.short}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#F6FAFF] md:text-4xl">
                  {activeService.title}
                </h2>
                <p className="mt-3 text-[#C5D4E7]">{activeService.description}</p>
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
                <Link
                  href={activeService.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {activeService.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-0 py-16">
        <div className="w-full rounded-none border-y border-[#2B4A67] bg-[#112B44E8] px-6 py-10 text-center text-[#EAF2FF] backdrop-blur-xl md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9CB3CF]">
            Not sure which service you need?
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Book a free call. <span className="text-gradient">We will figure it out together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[#C5D4E7]">
            30 minutes. No pitch. We look at your business, tell you what we think
            you actually need, and give you an honest answer - even if that means
            suggesting you do not need us yet.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="https://calendly.com/skyensystems/discovery"
              className="rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#1E3A8A] px-6 py-3 font-semibold text-white"
            >
              Book a Free Call
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-[#3A5C7A] bg-[#0F253AE6] px-6 py-3 font-semibold text-[#EAF2FF]"
            >
              See All Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
