"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const points = [
  {
    id: "01",
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your goals, timeline, and budget. No sales pitch. Just listening and asking the right questions.",
  },
  {
    id: "02",
    title: "Proposal & Quote",
    body: "A clear, itemised proposal within 24 hours. Exactly what we'll build, when it'll be ready, and what it will cost. No surprises.",
  },
  {
    id: "03",
    title: "Design & Prototype",
    body: "We show you before we build. Figma prototypes and design reviews so you approve the look before a line of code is written.",
  },
  {
    id: "04",
    title: "Build & Iterate",
    body: "Agile sprints. Weekly updates. You see progress every week — not a surprise reveal at the end.",
  },
  {
    id: "05",
    title: "Launch & Support",
    body: "We don't disappear at launch. Ongoing support, maintenance, and growth are part of how we work.",
  },
];

export function ValueProps() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopStageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 20, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 20, mass: 0.7 });
  const stageRotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const stageRotateY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const glowShiftX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const glowShiftY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const stageProgress = Math.max(0, Math.min(points.length - 1, progress));
  const activeIndex = Math.round(stageProgress);
  const activePoint = points[activeIndex];
  const trackStartPercent = 12;
  const trackSpanPercent = 76;
  const orbXPercent =
    trackStartPercent + (stageProgress / (points.length - 1)) * trackSpanPercent;
  const orbY = Math.sin((stageProgress / (points.length - 1)) * Math.PI) * -26 + 6;

  const stations = useMemo(
    () =>
      points.map((point, idx) => {
        const xPercent = trackStartPercent + (idx / (points.length - 1)) * trackSpanPercent;
        const yOffset = idx % 2 === 0 ? -52 : -76;
        return { ...point, xPercent, yOffset, idx };
      }),
    [trackSpanPercent],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, idx) => ({
        id: idx,
        left: `${(idx * 97) % 100}%`,
        top: `${(idx * 53) % 100}%`,
      })),
    [],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !desktopStageRef.current) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1400",
      scrub: true,
      pin: desktopStageRef.current,
      pinSpacing: true,
      onUpdate: (self) => {
        const next = self.progress * (points.length - 1);
        if (Math.abs(next - progressRef.current) < 0.02) return;
        progressRef.current = next;
        setProgress(next);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = desktopStageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    const nextX = Math.max(-1, Math.min(1, x));
    const nextY = Math.max(-1, Math.min(1, y));
    if (Math.abs(nextX - pointerX.get()) > 0.015) pointerX.set(nextX);
    if (Math.abs(nextY - pointerY.get()) > 0.015) pointerY.set(nextY);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(76,99,255,0.24),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_35%),linear-gradient(180deg,#040812_0%,#050d1f_45%,#071428_100%)] px-4 py-12 text-[#E6EEFF] md:px-0 md:py-0"
    >
      <div
        ref={desktopStageRef}
        className="relative hidden h-[100svh] min-h-[620px] w-full overflow-hidden [--assembly-top:54%] [--track-top:54%] lg:min-h-[700px] lg:[--assembly-top:57%] lg:[--track-top:57%] xl:min-h-[760px] xl:[--assembly-top:60%] xl:[--track-top:60%] md:block"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            rotateX: stageRotateX,
            rotateY: stageRotateY,
            transformPerspective: 1400,
          }}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B6BFF26] blur-[90px]"
            style={{ x: glowShiftX, y: glowShiftY }}
          />

          <div className="absolute inset-0 opacity-40">
            {particles.map((particle) => (
              <span
                key={`particle-${particle.id}`}
                className="absolute h-[2px] w-[2px] rounded-full bg-[#8ED8FF]"
                style={{
                  left: particle.left,
                  top: particle.top,
                  boxShadow: "0 0 10px rgba(142,216,255,0.9)",
                }}
              />
            ))}
          </div>

          <div className="absolute left-0 right-0 top-10 z-30 text-center lg:top-12 xl:top-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8EA7CC]">
              OUR PROCESS
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#ECF3FF] lg:text-5xl">
              From idea to launch - and everything after.
            </h2>
          </div>

          <div className="absolute left-[12%] right-[12%] z-20 h-[2px] rounded-full bg-[#9FC9FF1A]" style={{ top: "var(--track-top)" }}>
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] via-[#22D3EE] to-[#8B5CF6] shadow-[0_0_24px_rgba(108,99,255,0.8)]"
              style={{ width: `${(stageProgress / (points.length - 1)) * 100}%` }}
            />
          </div>

          {stations.map((station) => {
            const isActive = station.idx === activeIndex;
            const isPassed = station.idx < activeIndex;
            return (
              <motion.div
                key={station.id}
                className="absolute z-30"
                style={{
                  left: `${station.xPercent}%`,
                  top: `calc(var(--assembly-top) + ${station.yOffset}px)`,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  scale: isActive ? 1.06 : 1,
                  opacity: isActive || isPassed ? 1 : 0.75,
                }}
              >
                <div className="relative w-[170px] rounded-2xl border border-[#8fb2ff3a] bg-[#0b1a34c7] p-4 backdrop-blur-xl shadow-[0_20px_50px_-35px_rgba(56,189,248,0.9)] lg:w-[220px]">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#82A9E5]">
                    {station.id} - STATION
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-[#F4F8FF]">{station.title}</h3>
                </div>
                <div className="mx-auto mt-3 h-3 w-3 rounded-full border border-[#7BD3FF] bg-[#24b9ff] shadow-[0_0_20px_rgba(36,185,255,0.95)]" />
              </motion.div>
            );
          })}

          <motion.div
            className="absolute z-40 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#9de0ff88] bg-[linear-gradient(135deg,rgba(112,130,255,0.85),rgba(49,213,255,0.58))] shadow-[0_0_45px_rgba(61,153,255,0.85)]"
            style={{
              left: `${orbXPercent}%`,
              top: `calc(var(--assembly-top) + ${orbY}px)`,
            }}
            animate={{
              borderRadius: activeIndex >= 4 ? "24%" : activeIndex >= 2 ? "32%" : "18%",
              rotate: activeIndex >= 4 ? 0 : 45,
              boxShadow:
                activeIndex >= 4
                  ? "0 0 60px rgba(34,211,238,0.95)"
                  : activeIndex >= 2
                    ? "0 0 45px rgba(139,92,246,0.8)"
                    : "0 0 35px rgba(96,165,250,0.75)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-2 rounded-xl border border-white/40" />
            <div className="absolute inset-[18px] rounded-md bg-white/60" />
          </motion.div>

          <div className="absolute bottom-10 left-1/2 z-30 w-[min(92%,920px)] -translate-x-1/2 rounded-3xl border border-[#b9d0ff38] bg-[#081327d6] p-6 backdrop-blur-2xl">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#84A5DA]">
                  {activePoint.id} - {activePoint.title}
                </p>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#D4E3FB] lg:text-[15px]">
                  {activePoint.body}
                </p>
              </div>
              <span className="text-8xl font-black leading-none text-[#9bc6ff1e]">
                {activePoint.id}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-3xl md:hidden">
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9BB5D8]">
            OUR PROCESS
          </p>
          <h2 className="text-3xl font-bold text-[#ECF3FF]">
            From idea to launch - and everything after.
          </h2>
        </div>
        <div className="relative space-y-5 pb-6">
          <div className="pointer-events-none absolute left-4 top-2 h-[94%] w-px bg-gradient-to-b from-[#60A5FA] via-[#22D3EE] to-transparent" />
          {points.map((point, index) => (
            <article
              key={`mobile-${point.id}`}
              className="relative rounded-2xl border border-[#9fb4da42] bg-[#0b1730cc] p-4 pl-9 backdrop-blur-xl"
            >
              <span className="absolute left-2.5 top-5 h-3 w-3 rounded-full bg-[#3DD5FF] shadow-[0_0_14px_rgba(61,213,255,0.95)]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8AABDA]">
                {point.id} - STAGE {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#F4F8FF]">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#CDDCF6]">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
