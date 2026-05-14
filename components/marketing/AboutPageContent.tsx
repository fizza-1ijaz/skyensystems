"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Calendar,
  Clock,
  Factory,
  Globe2,
  Headphones,
  Home,
  Landmark,
  Laptop,
  Mail,
  MapPin,
  Network,
  Phone,
  Send,
  Users,
} from "lucide-react";
import aboutUsAnimation from "@/public/anims/about us.json";
import { PricingPageLottie } from "./PricingPageLottie";

const STORY_CIRCLE_COPY = [
  "We operate a regional delivery office in Lahore, Pakistan, registered with the Pakistan Software Export Board (PSEB). Our Lahore office is our primary development centre, staffed with senior developers, designers, AI engineers, and digital marketers working full-time on client projects.",
  "We serve clients across the United States, the United Kingdom, the GCC, and Pakistan — building websites, mobile apps, AI-powered products, and running the digital marketing strategies that put those products in front of the right customers.",
  "We started with a belief that excellent digital work shouldn't require a Fortune 500 budget or seven different agencies. One team — with deep skills across every discipline — working as a true extension of your business. That's what we built.",
] as const;

/** Solid fill + single plain outline color per circle (outline drawn as SVG stroke) */
const STORY_CIRCLE_THEME = [
  { fill: "#0f1a2e", stroke: "#8eb8e8" },
  { fill: "#2a0d45", stroke: "#c9a8f2" },
  { fill: "#0a2f26", stroke: "#7dccb0" },
] as const;

/** Smooth wavy “droopy sun” silhouette in viewBox 0..200 — gentler waves = more usable text area */
function droopySunBlobPath(cx = 100, cy = 100, baseR = 88, segments = 96) {
  const parts: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    const rays = Math.sin(t * 11 + 0.2) * 3.2;
    const droop = Math.sin(t * 3 + 0.65) * 5.5 + Math.sin(t * 2 - 0.35) * 2.8;
    const r = baseR + rays + droop * 0.45;
    const x = cx + r * Math.cos(t + 0.06);
    const y = cy + r * Math.sin(t + 0.06);
    parts.push(i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : `L ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `${parts.join(" ")} Z`;
}

const STORY_CIRCLE_BLOB_D = droopySunBlobPath();

/** Vibrant strokes for office decor (cycles through spray index). */
const OFFICE_SPRAY_PALETTE = [
  "#2563eb",
  "#7c3aed",
  "#059669",
  "#d97706",
  "#db2777",
  "#0891b2",
  "#4f46e5",
  "#ea580c",
  "#0d9488",
  "#9333ea",
  "#2563eb",
  "#c026d3",
] as const;

/** Right-side office decor: tighter + stronger near the right edge; sparser + lighter moving left (toward copy). */
const OFFICES_RIGHT_SPRAY = [
  { Icon: Building2, top: "4%", right: "1%", size: 27, opacity: 0.94 },
  { Icon: Landmark, top: "17%", right: "0%", size: 25, opacity: 0.9 },
  { Icon: MapPin, top: "30%", right: "3%", size: 24, opacity: 0.88 },
  { Icon: Globe2, top: "8%", right: "9%", size: 23, opacity: 0.72 },
  { Icon: Phone, top: "42%", right: "2%", size: 23, opacity: 0.84 },
  { Icon: Mail, top: "54%", right: "5%", size: 22, opacity: 0.78 },
  { Icon: Briefcase, top: "66%", right: "1%", size: 21, opacity: 0.8 },
  { Icon: Users, top: "22%", right: "14%", size: 21, opacity: 0.58 },
  { Icon: Building2, top: "36%", right: "12%", size: 20, opacity: 0.52 },
  { Icon: Phone, top: "74%", right: "10%", size: 19, opacity: 0.48 },
  { Icon: MapPin, top: "58%", right: "16%", size: 18, opacity: 0.4 },
  { Icon: Landmark, top: "86%", right: "8%", size: 18, opacity: 0.42 },
  { Icon: Globe2, top: "48%", right: "22%", size: 17, opacity: 0.32 },
  { Icon: Mail, top: "12%", right: "18%", size: 16, opacity: 0.36 },
  { Icon: Laptop, top: "25%", right: "6%", size: 22, opacity: 0.76 },
  { Icon: Home, top: "63%", right: "7%", size: 21, opacity: 0.7 },
  { Icon: Factory, top: "78%", right: "3%", size: 20, opacity: 0.72 },
  { Icon: Clock, top: "52%", right: "0%", size: 20, opacity: 0.82 },
  { Icon: Headphones, top: "92%", right: "5%", size: 19, opacity: 0.55 },
  { Icon: Network, top: "14%", right: "5%", size: 19, opacity: 0.68 },
  { Icon: Send, top: "70%", right: "14%", size: 18, opacity: 0.44 },
  { Icon: Calendar, top: "38%", right: "20%", size: 17, opacity: 0.38 },
  { Icon: Laptop, top: "8%", right: "15%", size: 16, opacity: 0.42 },
  { Icon: Briefcase, top: "82%", right: "15%", size: 19, opacity: 0.5 },
  { Icon: Users, top: "44%", right: "8%", size: 20, opacity: 0.74 },
  { Icon: Home, top: "96%", right: "12%", size: 17, opacity: 0.4 },
  { Icon: Factory, top: "20%", right: "11%", size: 18, opacity: 0.62 },
  { Icon: Globe2, top: "60%", right: "19%", size: 16, opacity: 0.34 },
  { Icon: MapPin, top: "2%", right: "8%", size: 18, opacity: 0.58 },
  { Icon: Phone, top: "34%", right: "4%", size: 21, opacity: 0.8 },
  { Icon: Network, top: "56%", right: "11%", size: 17, opacity: 0.46 },
  { Icon: Mail, top: "90%", right: "1%", size: 18, opacity: 0.52 },
  { Icon: Clock, top: "12%", right: "2%", size: 19, opacity: 0.66 },
] as const;

export function AboutPageContent() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white pb-8">
      {/* Top: sky-blue hero — headline + compact Lottie above white body */}
      <section className="relative overflow-visible px-6 pb-4 pt-[calc(4rem-50px)] text-center md:px-10 md:pb-6 md:pt-[calc(5rem-50px)]">
        {/* Blue paint ends above section bottom — content / Lottie stay in normal flow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 bottom-52 z-0 overflow-hidden bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 md:bottom-64"
          aria-hidden
        >
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-36 w-[100%] -translate-x-1/2 rounded-[100%] bg-sky-600/20 blur-2xl md:h-40 md:w-[105%]" />
          <div
            className="absolute inset-0 opacity-[0.12] [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-4xl md:mt-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/95">
            WHO WE ARE
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
            We build digital products for businesses that want to grow.
          </h1>
        </div>

        <div className="relative z-20 mx-auto mt-3 flex w-full max-w-screen-2xl flex-col items-stretch gap-6 sm:mt-4 sm:gap-7 md:mt-5 md:flex-row md:items-start md:justify-start md:gap-6 lg:gap-8">
          <div className="relative aspect-video w-full max-w-[min(92vw,22rem)] shrink-0 grow-0 basis-auto self-start sm:max-w-[min(92vw,26rem)] md:max-w-[min(58%,28rem)] lg:max-w-[min(52%,34rem)] xl:max-w-[min(48%,40rem)] 2xl:max-w-[44rem]">
            <PricingPageLottie
              animationData={aboutUsAnimation}
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="z-30 mt-2 w-full min-w-0 flex-1 rounded-lg border border-slate-200/90 bg-white/95 p-4 text-left text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-900/10 ring-1 ring-slate-200/50 backdrop-blur-sm sm:mt-3 sm:rounded-xl sm:p-5 sm:text-base sm:leading-relaxed md:mt-14 md:w-auto md:min-w-0 md:flex-1 md:basis-0 md:max-w-none md:rounded-2xl md:p-6 md:text-[0.9375rem] md:leading-7 lg:mt-16 lg:p-6 lg:text-base lg:leading-8"
          >
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A]">
              Company Story
            </p>
            <p>
              Skyen Systems is the trading name of Qismat Ventures W.L.L., a company incorporated in the Kingdom of Bahrain
              (Commercial Registration No. 190698-1). Our head office is in Al-Seef, Manama, Bahrain.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Below hero: three story circles (same copy as former cards) */}
      <div className="relative z-10 -mt-2 flex-1 bg-white pt-2 md:-mt-4 md:pt-3">
        <section className="relative mx-auto w-full max-w-screen-2xl overflow-visible px-4 pb-6 pt-0 sm:px-6 md:px-8 md:pb-8 md:pt-1 lg:px-10">
          <div className="mx-auto grid w-full max-w-[min(100%,calc(100vw_-_2rem))] grid-cols-1 items-start justify-items-center gap-8 py-4 sm:max-w-[min(100%,40rem)] sm:gap-10 sm:py-5 md:max-w-none md:grid-cols-2 md:gap-x-7 md:gap-y-8 md:py-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 xl:gap-x-9 xl:gap-y-9">
            {STORY_CIRCLE_COPY.map((text, i) => {
              const theme = STORY_CIRCLE_THEME[i];
              const thirdOnTablet = i === 2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`relative flex aspect-square w-full min-h-0 max-w-[min(26rem,calc(100vw_-_2.5rem))] items-center justify-center overflow-visible px-1.5 py-2 text-center sm:max-w-[min(28rem,calc(100vw_-_3rem))] sm:px-2 sm:py-2 md:max-w-none md:w-full md:px-2 md:py-2 lg:px-2.5 lg:py-2.5 xl:px-3 xl:py-3 ${
                    thirdOnTablet ? "md:col-span-2 md:max-w-[min(30rem,calc(100vw_-_4rem))] md:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-auto" : ""
                  }`}
                >
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 200 200"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <path
                      d={STORY_CIRCLE_BLOB_D}
                      fill={theme.fill}
                      stroke={theme.stroke}
                      strokeWidth={3.75}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-[8.5%] z-10 flex min-h-0 items-center justify-center p-2.5 sm:inset-[8%] sm:p-3 md:inset-[7.5%] md:p-3.5 lg:inset-[7%] lg:p-4 xl:inset-[6.5%] xl:p-4 2xl:inset-[6%] 2xl:p-5">
                    <p className="max-h-full w-full min-h-0 overflow-y-auto overscroll-contain text-center text-[0.8125rem] leading-snug text-white/92 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.35)_transparent] sm:text-[0.875rem] sm:leading-snug md:text-[0.9rem] md:leading-snug lg:text-[0.95rem] lg:leading-normal xl:text-base xl:leading-normal 2xl:text-[1.0625rem] 2xl:leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-7 md:px-10 md:py-9">
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/bgs/universe.jfif')] bg-cover bg-center"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-white/45 backdrop-blur-[1px]" aria-hidden />
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 shadow-[0_35px_80px_-45px_rgba(84,113,182,0.78)] backdrop-blur-md md:mx-auto md:max-w-4xl">
              <div className="relative p-7 md:p-10">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#4a6288]">
                  PSEB Registration
                </p>
                <p className="text-center text-lg leading-8 text-slate-700">
                  <span className="font-semibold text-[#0F172A]">What PSEB means for you:</span>{" "}
                  Pakistan&apos;s Software Export Board (PSEB) certifies and regulates Pakistani software houses operating in international markets. PSEB registration means verified technical capability, business legitimacy, and professional conduct standards. When you work with Skyen Systems, you&apos;re working with a formally registered, government-recognised technology company.
                </p>

                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#b8cef5]/90 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d5f8a] shadow-sm backdrop-blur-sm">
                    <motion.span
                      className="h-2.5 w-2.5 rounded-full bg-[#45b8ff]"
                      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Verified Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-6 py-7 md:px-10 md:py-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#dbe8ff] bg-white p-7 shadow-[0_35px_80px_-45px_rgba(84,113,182,0.78)] md:p-10">
            <p className="relative z-10 mb-4 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-[#4a6288] sm:text-base md:mb-5 md:text-lg">
              Our Offices
            </p>

            <div className="pointer-events-none absolute inset-0 z-0 opacity-30 [background-size:34px_34px] [background-image:linear-gradient(to_right,rgba(123,140,175,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,140,175,0.16)_1px,transparent_1px)]" />
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1200 420" fill="none">
              <path d="M180 255 C 340 160, 480 172, 620 220 C 720 255, 860 240, 1020 175" stroke="rgba(93,111,168,0.38)" strokeWidth="2" strokeDasharray="7 8" />
              <circle cx="250" cy="235" r="6" fill="#4FA0FF" />
              <circle cx="640" cy="222" r="6" fill="#6D64FF" />
              <circle cx="990" cy="180" r="6" fill="#37BEFF" />
            </svg>

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-stretch md:gap-6 lg:gap-10">
              <div className="min-w-0 flex-1 space-y-8 text-base leading-7 text-slate-600 md:max-w-[min(100%,52rem)] lg:max-w-[min(100%,48rem)]">
                <div className="space-y-2">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#4a6288] sm:text-base md:text-[1.0625rem]">
                    Head Office — Bahrain
                  </p>
                  <p className="font-semibold text-[#0F172A]">Qismat Ventures W.L.L. (CR No. 190698-1)</p>
                  <p>
                    Office 501, Building 1025, Road 3621, Block 436, Al-Seef, Manama, Kingdom of Bahrain — 0428
                  </p>
                  <p>Phone: +973 8048045&nbsp;&nbsp;|&nbsp;&nbsp;Email: Info@qismatventures.com</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#4a6288] sm:text-base md:text-[1.0625rem]">
                    Regional Office — Pakistan (PSEB Registered)
                  </p>
                  <p>12/27 AA Commercial, Sector D, Bahria Town, Lahore, Punjab, Pakistan</p>
                  <p>Phone: +92-423-5482980&nbsp;&nbsp;|&nbsp;&nbsp;Email: Info@skyensystems.com</p>
                  <p>Office Hours: Monday–Friday, 9:00am–6:00pm PKT</p>
                </div>
                <div className="space-y-2 border-t border-[#dbe8ff] pt-6">
                  <p className="font-semibold text-[#0F172A]">US Enquiries:</p>
                  <div className="space-y-1.5 text-slate-600">
                    <p>Email: Info@skyensystems.com</p>
                    <p>Response within 4 hours (US business hours, Mon–Fri 9am–6pm ET)</p>
                  </div>
                </div>
              </div>

              {/* Mobile / narrow: small icons aligned right */}
              <div className="flex shrink-0 justify-end gap-2.5 pt-1 min-[480px]:hidden sm:gap-3.5">
                {[Building2, MapPin, Globe2, Phone, Mail, Laptop].map((Icon, i) => {
                  const color = OFFICE_SPRAY_PALETTE[i % OFFICE_SPRAY_PALETTE.length];
                  return (
                    <motion.div
                      key={`office-mobile-${i}`}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 0.55 + i * 0.06, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.04 * i, duration: 0.35 }}
                    >
                      <motion.div
                        animate={{ y: [0, -3, 2, 0], x: [0, 2, -2, 0] }}
                        transition={{
                          duration: 6.5 + i * 0.55,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.22,
                        }}
                        style={{ color }}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} aria-hidden />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* md+: decorative strip — dense & strong on the right, fewer & lighter toward the copy */}
              <div
                className="pointer-events-none relative hidden min-h-[300px] w-full max-w-[min(100%,248px)] shrink-0 self-end min-[480px]:block md:min-h-[340px] md:w-[36%] md:max-w-[280px] md:self-auto lg:max-w-[300px]"
                aria-hidden
              >
                <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black_50%,rgba(0,0,0,0.5)_72%,transparent)] md:[mask-image:linear-gradient(to_left,black_58%,rgba(0,0,0,0.45)_80%,transparent)]">
                  {OFFICES_RIGHT_SPRAY.map((item, i) => {
                    const { Icon, top, right, size, opacity } = item;
                    const color = OFFICE_SPRAY_PALETTE[i % OFFICE_SPRAY_PALETTE.length];
                    const driftDuration = 9 + (i % 7) * 1.35;
                    const driftDelay = i * 0.18;
                    return (
                      <motion.div
                        key={`office-spray-${i}`}
                        className="absolute"
                        style={{ top, right }}
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, delay: 0.02 * i, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div
                          style={{ opacity, color }}
                          animate={{
                            y: [0, -5, 3, -2, 0],
                            x: [0, 3, -4, 2, 0],
                            rotate: [0, 2.5, -2, 1.5, 0],
                          }}
                          transition={{
                            duration: driftDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: driftDelay,
                          }}
                        >
                          <Icon width={size} height={size} strokeWidth={1.85} aria-hidden />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
