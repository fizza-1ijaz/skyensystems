"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import aboutUsAnimation from "@/public/anims/about us.json";

export function AboutPageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 24, mass: 0.85 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 24, mass: 0.85 });
  const visualRotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const visualRotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
  const visualShiftX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const visualShiftY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfdff_0%,#f3f8ff_40%,#edf4ff_100%)] pb-12 pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#d9e7ff8a] blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[#e2dbff70] blur-3xl" />
        <div className="absolute inset-0 opacity-45 [background-size:44px_44px] [background-image:linear-gradient(to_right,rgba(123,140,175,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,140,175,0.11)_1px,transparent_1px)]" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div
          ref={heroRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6882ad]">
              WHO WE ARE
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-[0.98] tracking-tight text-[#0F172A] md:text-6xl">
              We build digital products for businesses that want to grow.
            </h1>
          </div>

          <motion.div
            style={{ rotateX: visualRotateX, rotateY: visualRotateY, transformPerspective: 1500 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <motion.div
              style={{ x: visualShiftX, y: visualShiftY }}
              className="absolute -left-4 top-8 hidden h-24 w-24 rounded-3xl border border-[#dbe8ff] bg-white/70 shadow-[0_25px_55px_-35px_rgba(85,111,177,0.85)] backdrop-blur-xl md:block"
            />
            <motion.div
              style={{ x: visualShiftX, y: visualShiftY }}
              className="absolute -right-5 top-2 hidden h-20 w-20 rounded-full border border-[#dbe8ff] bg-[radial-gradient(circle_at_30%_30%,#ffffff,rgba(190,220,255,0.7))] shadow-[0_25px_55px_-35px_rgba(85,111,177,0.85)] md:block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#dbe8ff] bg-white/75 p-5 shadow-[0_40px_90px_-45px_rgba(85,111,177,0.75)] backdrop-blur-2xl">
              <div className="flex items-center justify-center">
                <Lottie animationData={aboutUsAnimation} loop={true} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="hidden lg:block">
            <p className="text-7xl font-black leading-none text-[#d8e4f8]">01</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b82a8]">
              Company Story
            </p>
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-3xl border border-[#dbe8ff] bg-white/78 p-6 text-lg leading-8 text-slate-600 shadow-[0_30px_70px_-45px_rgba(84,113,182,0.72)] backdrop-blur-xl"
            >
              Skyen Systems is a registered software house based in Bahrain with a regional office in Pakistan. We work with small and medium businesses across the United States - and increasingly across the world - building websites, apps, AI tools, and running the digital marketing that makes them matter.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-3xl border border-[#dbe8ff] bg-white/78 p-6 text-lg leading-8 text-slate-600 shadow-[0_30px_70px_-45px_rgba(84,113,182,0.72)] backdrop-blur-xl"
            >
              We started with a belief that{" "}
              <span className="font-semibold text-[#28477d]">
                excellent digital work shouldn&apos;t require a Fortune 500 budget
              </span>{" "}
              or navigating a dozen different agencies. One team, with deep skills across every discipline, working as a true extension of your business - that&apos;s what we built.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-3xl border border-[#dbe8ff] bg-white/78 p-6 text-lg leading-8 text-slate-600 shadow-[0_30px_70px_-45px_rgba(84,113,182,0.72)] backdrop-blur-xl"
            >
              Our team includes senior developers, product designers, AI specialists, and digital marketers. Everyone on every project is a Skyen team member - not a contractor, not a marketplace match.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#dbe8ff] bg-white/78 p-7 shadow-[0_35px_80px_-45px_rgba(84,113,182,0.78)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#d7e7ff8f] blur-2xl" />
            <div className="absolute right-8 top-10 h-36 w-36 rounded-full bg-[#e2dcff7a] blur-2xl" />
          </div>
          <div className="relative">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6b82a8]">
              PSEB Registration
            </p>
            <p className="text-center text-lg leading-8 text-slate-600">
              <span className="font-semibold text-[#0F172A]">What PSEB means for you:</span>{" "}
              Pakistan&apos;s Software Export Board (PSEB) certifies and regulates Pakistani software houses operating in international markets. PSEB registration means verified technical capability, business legitimacy, and professional conduct standards. When you work with Skyen Systems, you&apos;re working with a formally registered, government-recognised technology company.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#cddfff] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#51729f]">
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-[#45b8ff]"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              Verified Infrastructure
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#dbe8ff] bg-white/80 p-7 shadow-[0_35px_80px_-45px_rgba(84,113,182,0.78)] backdrop-blur-2xl md:p-10">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6b82a8]">
            Our Offices
          </p>

          <div className="pointer-events-none absolute inset-0 opacity-30 [background-size:34px_34px] [background-image:linear-gradient(to_right,rgba(123,140,175,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,140,175,0.16)_1px,transparent_1px)]" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 420" fill="none">
            <path d="M180 255 C 340 160, 480 172, 620 220 C 720 255, 860 240, 1020 175" stroke="rgba(93,111,168,0.38)" strokeWidth="2" strokeDasharray="7 8" />
            <circle cx="250" cy="235" r="6" fill="#4FA0FF" />
            <circle cx="640" cy="222" r="6" fill="#6D64FF" />
            <circle cx="990" cy="180" r="6" fill="#37BEFF" />
          </svg>

          <div className="relative z-10 space-y-4 text-slate-600">
            <p className="text-lg leading-8">
              <strong className="text-[#0F172A]">Pakistan HQ:</strong> 12/27 AA Commercial Sector D, Bahria Town · Info@skyensystem.com
            </p>
            <p className="text-lg leading-8">
              <strong className="text-[#0F172A]">Bahrain Regional:</strong> Office 501, Building 1025, Road 3621, Block 436, Al-Seef, Bahrain, 0428 · Info@skyensystem.com
            </p>
            <p className="text-lg leading-8">
              <strong className="text-[#0F172A]">US inquiries:</strong> Info@skyensystem.com · Response within 4 hours (US business hours)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

