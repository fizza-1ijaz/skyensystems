"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  PenTool,
  SquareTerminal,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const ILLUS_DESKTOP_DEFAULT = "w-[min(220px,18vw)] max-w-[240px]";
const ILLUS_EMBEDDED_DEFAULT =
  "mx-auto max-h-28 w-auto max-w-[min(240px,78%)] object-contain opacity-95 sm:max-h-32";

/** Full-card pastel fills (yellow, baby pink, sky blue, light purple, light orange). */
const STEP_CARD_PALETTES = [
  "border-amber-300/60 bg-amber-100 shadow-[0_12px_40px_-20px_rgba(245,158,11,0.35)]",
  "border-pink-300/60 bg-pink-100 shadow-[0_12px_40px_-20px_rgba(236,72,153,0.3)]",
  "border-sky-300/60 bg-sky-100 shadow-[0_12px_40px_-20px_rgba(14,165,233,0.32)]",
  "border-violet-300/60 bg-violet-100 shadow-[0_12px_40px_-20px_rgba(139,92,246,0.3)]",
  "border-orange-300/60 bg-orange-100 shadow-[0_12px_40px_-20px_rgba(249,115,22,0.32)]",
] as const;

const STEP_CARD_WATERMARKS = [
  "text-amber-900/[0.08]",
  "text-pink-900/[0.07]",
  "text-sky-900/[0.08]",
  "text-violet-900/[0.07]",
  "text-orange-900/[0.07]",
] as const;

const STEPS: {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
  illustrationSrc: string;
  illustrationWidthClass?: string;
  illustrationOffsetClass?: string;
  illustrationEmbeddedClass?: string;
}[] = [
  {
    id: "01",
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your goals, timeline, and budget. No sales pitch. Just listening and asking the right questions.",
    icon: MessageCircle,
    illustrationSrc: "/anims/call.svg",
    illustrationWidthClass: "w-[min(140px,12vw)] max-w-[156px]",
    illustrationOffsetClass: "translate-x-2 sm:translate-x-4 md:translate-x-5",
    illustrationEmbeddedClass:
      "mx-auto max-h-20 w-auto max-w-[42%] object-contain opacity-95 sm:max-h-24 sm:max-w-[45%]",
  },
  {
    id: "02",
    title: "Proposal & Quote",
    body: "A clear, itemised proposal within 24 hours. Exactly what we'll build, when it'll be ready, and what it will cost. No surprises.",
    icon: FileText,
    illustrationSrc: "/anims/quote.svg",
  },
  {
    id: "03",
    title: "Design & Prototype",
    body: "We show you before we build. Figma prototypes and design reviews so you approve the look before a line of code is written.",
    icon: PenTool,
    illustrationSrc: "/anims/design.svg",
    illustrationWidthClass: "w-[min(280px,26vw)] max-w-[310px]",
    illustrationEmbeddedClass:
      "mx-auto max-h-32 w-auto max-w-[min(220px,72%)] object-contain opacity-95 sm:max-h-36",
  },
  {
    id: "04",
    title: "Build & Iterate",
    body: "Agile sprints. Weekly updates. You see progress every week — not a surprise reveal at the end.",
    icon: SquareTerminal,
    illustrationSrc: "/anims/build.svg",
  },
  {
    id: "05",
    title: "Launch & Support",
    body: "We don't disappear at launch. Ongoing support, maintenance, and growth are part of how we work.",
    icon: Rocket,
    illustrationSrc: "/anims/launch.svg",
  },
];

/** Bead centers on spine path (same viewBox 0 0 400 1000 as SPINE_PATH_D). */
const SPINE_BEADS = [
  { cx: 200, cy: 100 },
  { cx: 200, cy: 300 },
  { cx: 200, cy: 500 },
  { cx: 200, cy: 700 },
  { cx: 200, cy: 900 },
] as const;

const SPINE_PATH_D =
  "M 200 100 C 285 180 285 220 200 300 C 115 380 115 420 200 500 C 285 580 285 620 200 700 C 115 780 115 820 200 900";

function useSequentialGlow(stepCount: number, intervalMs: number, enabled: boolean) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % stepCount);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [enabled, stepCount, intervalMs]);
  return active;
}

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [liteParticles, setLiteParticles] = useState(false);
  const activeGlow = useSequentialGlow(STEPS.length, 1000, !reduceMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const low =
      typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    setLiteParticles(mq.matches || coarse || low);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: liteParticles ? 14 : 28 }, (_, i) => ({
        id: i,
        left: `${((i * 47) % 100) + (i % 7) * 0.5}%`,
        top: `${((i * 31) % 100) + (i % 5) * 0.3}%`,
        delay: (i * 0.17) % 2.4,
        size: 1 + (i % 3),
      })),
    [liteParticles],
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-[#081120] px-4 py-20 text-slate-100 md:px-8 md:py-28"
    >
      {/* Base + purple depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(124,77,255,0.22),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(36,16,58,0.85),transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(56,189,248,0.08),transparent_45%),linear-gradient(180deg,#081120_0%,#24103a_42%,#081120_100%)]"
        aria-hidden
      />

      {/* Floating blobs */}
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-[12%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-[#7c4dff]/25 blur-[100px] will-change-transform"
            animate={{ x: [0, 36, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-[8%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[#38bdf8]/18 blur-[90px] will-change-transform"
            animate={{ x: [0, -28, 0], y: [0, -32, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[35%] top-[45%] h-64 w-64 rounded-full bg-[#f472b6]/12 blur-[80px] will-change-transform"
            animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[20%] top-[18%] h-48 w-48 rounded-full bg-[#fbbf24]/10 blur-[70px] will-change-transform"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </>
      )}

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-[#38bdf8]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 10px rgba(56,189,248,0.7)",
            }}
            animate={
              reduceMotion
                ? { opacity: 0.25 }
                : { opacity: [0.15, 0.55, 0.2], y: [0, -8, 0] }
            }
            transition={{
              duration: 4 + (p.id % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-20"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#38bdf8]/90">
            Our process
          </p>
          <h2
            id="process-heading"
            className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl md:leading-[1.1]"
          >
            From idea to launch — and everything after.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            A transparent, premium delivery path. No black boxes — just clarity, craft, and
            momentum.
          </p>
        </motion.div>

        {/* Desktop: zig-zag + spine SVG */}
        <div className="relative hidden min-h-[1040px] md:block">
          <svg
            className="pointer-events-none absolute left-1/2 top-0 z-[5] h-full w-[min(400px,42vw)] -translate-x-1/2 overflow-visible"
            viewBox="0 0 400 1000"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="process-spine-base" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(124,77,255,0.35)" />
                <stop offset="45%" stopColor="rgba(56,189,248,0.45)" />
                <stop offset="100%" stopColor="rgba(244,114,182,0.25)" />
              </linearGradient>
              <linearGradient id="process-spine-flow" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="65%" stopColor="#f472b6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.75" />
                {!reduceMotion && (
                  <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    values="-220 0; 220 0; -220 0"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                )}
              </linearGradient>
              <filter id="process-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="process-bead-fill" cx="32%" cy="32%" r="68%">
                <stop offset="0%" stopColor="#fef9c7" />
                <stop offset="45%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#38bdf8" />
              </radialGradient>
              <filter id="process-bead-soft" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={SPINE_PATH_D}
              fill="none"
              stroke="url(#process-spine-base)"
              strokeWidth={5}
              strokeLinecap="round"
              opacity={0.45}
            />
            {!reduceMotion && (
              <motion.path
                d={SPINE_PATH_D}
                fill="none"
                stroke="url(#process-spine-flow)"
                strokeWidth={2.5}
                strokeLinecap="round"
                filter="url(#process-glow)"
                strokeDasharray="42 180"
                animate={{ strokeDashoffset: [0, -222] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              />
            )}
            {SPINE_BEADS.map((pt, beadIndex) => {
              const on = activeGlow === beadIndex;
              return (
                <g key={`bead-${beadIndex}`} transform={`translate(${pt.cx},${pt.cy})`}>
                  {!reduceMotion && on && (
                    <motion.circle
                      cx={0}
                      cy={0}
                      fill="rgba(56,189,248,0.45)"
                      initial={false}
                      animate={{ r: [10, 20, 10], opacity: [0.35, 0.65, 0.35] }}
                      transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <motion.circle
                    cx={0}
                    cy={0}
                    r={6.5}
                    fill="url(#process-bead-fill)"
                    stroke="rgba(255,255,255,0.42)"
                    strokeWidth={1.5}
                    filter="url(#process-bead-soft)"
                    initial={false}
                    animate={reduceMotion ? {} : { r: on ? [6.5, 7.8, 6.8] : 6.5 }}
                    transition={{ duration: on ? 0.8 : 0.2, ease: "easeOut" }}
                  />
                </g>
              );
            })}
          </svg>

          <ol className="relative z-[10] m-0 list-none space-y-0 p-0" aria-label="Process steps">
            {STEPS.map((step, index) => {
              const isRight = index % 2 === 1;
              const Icon = step.icon;
              return (
                <li
                  key={step.id}
                  className="relative grid min-h-[200px] grid-cols-[1fr_auto_1fr] items-center gap-x-6"
                >
                  <div className="col-start-1 flex min-h-[160px] w-full max-w-none items-center justify-end pr-2">
                    {!isRight ? (
                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        index={index}
                        reduceMotion={!!reduceMotion}
                        variant="desktop"
                      />
                    ) : (
                      <StepIllustration
                        src={step.illustrationSrc}
                        index={index}
                        reduceMotion={!!reduceMotion}
                        widthClass={step.illustrationWidthClass ?? ILLUS_DESKTOP_DEFAULT}
                        className={step.illustrationOffsetClass}
                      />
                    )}
                  </div>

                  <div className="pointer-events-none relative z-[2] w-10 shrink-0" aria-hidden />

                  <div className="col-start-3 flex min-h-[160px] w-full max-w-none items-center justify-start pl-2">
                    {isRight ? (
                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        index={index}
                        reduceMotion={!!reduceMotion}
                        variant="desktop"
                      />
                    ) : (
                      <StepIllustration
                        src={step.illustrationSrc}
                        index={index}
                        reduceMotion={!!reduceMotion}
                        widthClass={step.illustrationWidthClass ?? ILLUS_DESKTOP_DEFAULT}
                        className={step.illustrationOffsetClass}
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile: full-width cards, illustration inside each card */}
        <div className="relative w-full min-w-0 max-w-none md:hidden">
          <div
            className="pointer-events-none absolute bottom-0 left-[22px] top-2 w-px bg-gradient-to-b from-[#7c4dff]/80 via-[#38bdf8]/60 to-[#f472b6]/40"
            aria-hidden
          />
          <ol className="relative m-0 list-none space-y-10 p-0 pl-2" aria-label="Process steps">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const dotActive = !reduceMotion && activeGlow === index;
              return (
                <li key={step.id} className="relative pl-12">
                  <motion.span
                    className="absolute left-[14px] top-7 z-[1] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/25"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #fef3c7, #7c4dff 45%, #38bdf8 100%)",
                      boxShadow: dotActive
                        ? "0 0 0 5px rgba(124,77,255,0.35), 0 0 22px rgba(56,189,248,0.75)"
                        : reduceMotion
                          ? "0 0 14px rgba(56,189,248,0.4)"
                          : "0 0 10px rgba(56,189,248,0.2)",
                    }}
                    animate={reduceMotion ? {} : { scale: dotActive ? [1, 1.15, 1.05] : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    aria-hidden
                  />
                  <div className="w-full min-w-0">
                    <ProcessCard
                      step={step}
                      Icon={Icon}
                      index={index}
                      reduceMotion={!!reduceMotion}
                      variant="mobile"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepIllustration({
  src,
  index,
  reduceMotion,
  className = "",
  widthClass = ILLUS_DESKTOP_DEFAULT,
}: {
  src: string;
  index: number;
  reduceMotion: boolean;
  className?: string;
  widthClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`pointer-events-none flex items-center justify-center ${widthClass} ${className}`.trim()}
      aria-hidden
    >
      <motion.div
        className="relative w-full"
        animate={reduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{
          duration: 4.5 + (index % 3) * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.22,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- flat SVGs from /public/anims */}
        <img
          src={src}
          alt=""
          width={240}
          height={240}
          className="h-auto w-full object-contain opacity-[0.92] drop-shadow-[0_14px_36px_rgba(56,189,248,0.14)]"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </motion.div>
  );
}

function ProcessCard({
  step,
  Icon,
  index,
  reduceMotion,
  variant,
}: {
  step: (typeof STEPS)[number];
  Icon: LucideIcon;
  index: number;
  reduceMotion: boolean;
  variant: "desktop" | "mobile";
}) {
  const shell = STEP_CARD_PALETTES[index % STEP_CARD_PALETTES.length];
  const watermark = STEP_CARD_WATERMARKS[index % STEP_CARD_WATERMARKS.length];
  const embeddedImgClass = step.illustrationEmbeddedClass ?? ILLUS_EMBEDDED_DEFAULT;

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? {}
          : { y: -5, transition: { duration: 0.22, ease: "easeOut" } }
      }
      className={`group relative w-full ${variant === "desktop" ? "max-w-md" : "max-w-none"}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border p-6 ${shell}`}
      >
        <span
          className={`pointer-events-none absolute -right-4 -top-8 select-none font-black tabular-nums text-[7rem] leading-none md:text-[8.5rem] ${watermark}`}
          aria-hidden
        >
          {step.id}
        </span>

        {variant === "mobile" && (
          <div className="relative z-[1] mb-5 flex w-full justify-center px-1">
            {/* eslint-disable-next-line @next/next/no-img-element -- flat SVGs from /public/anims */}
            <img
              src={step.illustrationSrc}
              alt=""
              width={240}
              height={240}
              className={embeddedImgClass}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <div className="relative z-[1] flex items-start gap-4">
          <motion.div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-300/50 bg-white/80 text-sky-700 shadow-inner shadow-slate-200/80"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -5, 0], rotate: [0, 2, 0, -2, 0] }
            }
            transition={{
              duration: 5 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
          >
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </motion.div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              Step {step.id}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px] md:leading-relaxed">
              {step.body}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
