"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Zap, Terminal, Cpu, Database, Layout } from "lucide-react";
import { ServiceCard } from "./hero/ServiceCard";
import { HeroLandscapeComposition } from "./hero/HeroLandscapeComposition";
import { useMotionProfile } from "@/hooks/useMotionProfile";

const ServiceScrollCornerIcons = dynamic(
  () =>
    import("./hero/HeroTechCornerIcons").then((m) => ({
      default: m.ServiceScrollCornerIcons,
    })),
  { ssr: false },
);

const rotatingTexts = [
  "Response within 4 business hours, guaranteed",
  "PSEB Registered Software House · Pakistan & Bahrain",
  "Free project consultation — 30 minutes, no obligation",
  "Trusted by 50+ US small businesses",
];

const services = [
  {
    id: "web",
    title: "Web Development",
    slug: "web-design-development",
    desc: "Custom websites, web applications, and e-commerce stores built to convert visitors into customers. Fast, secure, and built to grow with you.",
    features: "Next.js · React · WordPress · Shopify · API Integration",
    icon: Globe,
    previewImage: "/webdevelop.jfif",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    slug: "mobile-apps",
    desc: "iOS and Android apps that your users will actually use. From MVP to full launch — we handle everything including App Store submission.",
    features: "React Native · Swift · Kotlin · App Store · Play Store",
    icon: Cpu,
    previewImage: "/mobapp.jfif",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    slug: "brand-ui-ux-design",
    desc: "Beautiful, intuitive interfaces that make your product a joy to use. Research-backed design that reduces churn and drives engagement.",
    features: "Figma · Prototyping · User Research · Design Systems",
    icon: Layout,
    previewImage: "/UIUX.png",
  },
  {
    id: "ai",
    title: "AI Solutions",
    slug: "ai-solutions",
    desc: "Practical AI that solves real business problems. Chatbots, automation, intelligent features — without the complexity.",
    features: "LLM Integration · Chatbots · Automation · Custom Models",
    icon: Zap,
    previewImage: "/AI.jfif",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "More of the right customers finding your business. SEO, paid ads, content — all tied to measurable results.",
    features: "SEO · Google Ads · Meta Ads · Content Marketing",
    icon: Database,
    previewImage: "/digitalmarketing.jfif",
  },
  {
    id: "teams",
    title: "Dedicated Teams",
    slug: "dedicated-teams",
    desc: "Your own extended team of developers and designers — working exclusively on your projects, in your timezone.",
    features: "Full-time Devs · Project Managers · Designers · Agile",
    icon: Terminal,
    previewImage: "/teams.jfif",
  },
];

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const profile = useMotionProfile();
  const isLite = profile !== "full";

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollProgress = isLite ? scrollYProgress : smoothScroll;

  const heroOpacity = useTransform(scrollProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollProgress, [0, 0.25], [1, isLite ? 1 : 0.95]);
  const heroY = useTransform(scrollProgress, [0, 0.25], [0, isLite ? -24 : -40]);

  const scrollSectionMinH = isLite ? "min-h-[280vh]" : "min-h-[400vh]";
  const cardSpacing = isLite ? "space-y-[22vh] py-[14vh]" : "space-y-[30vh] py-[20vh]";

  return (
    <section
      ref={containerRef}
      id="hero-container"
      className={`relative w-full ${scrollSectionMinH}`}
    >
      <motion.div
        id="ecosystem-container"
        className="relative sticky top-0 h-screen min-h-[640px] w-full overflow-hidden"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute left-1/2 top-1/2 z-[6] flex w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 text-center sm:top-28 sm:translate-y-0 md:top-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-2.5 py-1 text-center text-[6px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[7px] md:text-xs"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6C63FF] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6C63FF]" />
            </span>
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {rotatingTexts[textIndex]}
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-balance font-black leading-[1.02] tracking-tight text-slate-900 [font-family:var(--font-space-grotesk)] text-4xl sm:mt-5 sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            One Team.
            <br />
            Every Digital Need.
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              Anywhere.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:max-w-2xl md:text-lg"
          >
            We build websites, mobile apps, AI-powered products, and run the digital marketing that fills them with customers.{" "}
            <span className="font-bold text-slate-900">Bahrain-incorporated. PSEB-registered. US-market focused.</span> One team that becomes a genuine part of yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#6C63FF] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-pink-100 hover:text-pink-900 hover:shadow-[0_0_32px_-4px_rgba(236,72,153,0.4)] sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-transparent px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-amber-300 hover:bg-amber-100 hover:text-amber-900 hover:shadow-[0_0_28px_-4px_rgba(245,158,11,0.35)] sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        <HeroLandscapeComposition
          motionStyle={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          lite={isLite}
        />
      </motion.div>

      <div className="relative z-20 w-full overflow-hidden bg-[#f8fafc]">
        {profile !== "minimal" ? <ServiceScrollCornerIcons /> : null}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className={cardSpacing}>
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
