"use client";

import Link from "next/link";
import { AboutTechFocusSection } from "@/components/about/sections/AboutTechFocusSection";
import { AboutWhatWeDoSection } from "@/components/about/sections/AboutWhatWeDoSection";
import { Reveal } from "@/components/landing/Reveal";
import {
  ABOUT_HERO_STATS,
  ABOUT_PEOPLE_POINTS,
  ABOUT_PRIMARY_SERVICE_HREF,
  ABOUT_STORY_PILLS,
  ABOUT_VALUES,
  ABOUT_WORK,
} from "@/lib/about-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";
const bodyMuted = "text-sm leading-relaxed text-[#5C5C5C] md:text-base md:leading-relaxed";
const leadClass = "text-base leading-relaxed text-[#4A4A4A] md:text-lg md:leading-[1.75]";

function PrimaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[50px] items-center justify-center bg-[#141414] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAFAF8] transition-colors hover:bg-[#31C3C3] hover:text-[#141414]"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
      }}
    >
      {children}
    </Link>
  );
}

function SecondaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[50px] items-center justify-center border border-[#DADAD8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:border-[#31C3C3] hover:text-[#31C3C3]"
    >
      {children}
    </Link>
  );
}

export function AboutPage() {
  return (
    <div className="bg-white text-[#141414]">
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#fff,#F4F4F2)] pb-14 pt-[calc(var(--site-nav-height)+3rem)] md:pb-16 md:pt-[calc(var(--site-nav-height)+4rem)]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.82fr] lg:gap-11">
          <Reveal>
            <p className={eyebrowClass}>About Skyen Systems</p>
            <h1 className="mt-3 font-heading text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
              Brilliant Digital Products, Built With Purpose.
            </h1>
            <p className={`mt-6 max-w-2xl ${leadClass}`}>
              Skyen Systems is a product-focused software company helping Australian and US
              businesses build websites, mobile apps, AI solutions, SaaS platforms, UI/UX
              experiences, SEO systems, and dedicated software teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryCta href="/contact-us">Start Your Project</PrimaryCta>
              <SecondaryCta href={ABOUT_PRIMARY_SERVICE_HREF}>Explore Services</SecondaryCta>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#141414] p-7 shadow-[0_18px_55px_rgba(10,24,42,0.08)] md:min-h-[26rem] md:rounded-[2.125rem] md:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,rgba(20,20,20,0.94),rgba(15,23,42,0.75)),url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#31C3C3]/20"
                aria-hidden
              />
              <div className="relative">
                <p className={`${eyebrowClass} text-[#A9E7E2]`}>Product Team</p>
                <p className="mt-3 max-w-sm font-heading text-[clamp(1.75rem,3vw,2.125rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  Strategy, design, development, AI and growth under one roof.
                </p>
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                {ABOUT_HERO_STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                  >
                    <strong className="block font-heading text-2xl font-bold text-white">
                      {stat.value}
                    </strong>
                    <span className="mt-1 block text-xs text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-[4.375rem]">
        <div className="mx-auto grid max-w-[1120px] items-start gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-11">
          <Reveal>
            <div className="flex min-h-[20rem] flex-col justify-between rounded-[1.875rem] bg-[#141414] p-7 text-white md:min-h-[20.5rem] md:p-8">
              <div>
                <p className={`${eyebrowClass} text-[#A9E7E2]`}>Who We Are</p>
                <h2 className="mt-3 font-heading text-[clamp(1.75rem,3vw,2.125rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  A team built for modern digital product growth.
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                We help businesses move from idea to launch with a clear plan, clean design, strong
                development, smart automation, and long-term growth support.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className={eyebrowClass}>Our Story</p>
            <h2 className="editorial-section-title mt-3 text-[#141414]">
              Building software that supports real business value
            </h2>
            <p className={`mt-4 ${leadClass}`}>
              Skyen Systems combines web development, mobile app development, AI automation, UI/UX
              design, SEO, digital marketing, and dedicated software team support in one connected
              process.
            </p>
            <p className={`mt-4 ${leadClass}`}>
              We support businesses that want to launch new digital products, improve existing
              platforms, automate workflows, redesign user experiences, increase search visibility,
              or extend development capacity with a reliable remote team.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {ABOUT_STORY_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#DADAD8] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#141414]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#F4F4F2] py-16 md:py-[4.375rem]">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="max-w-3xl">
            <p className={eyebrowClass}>Our Vision</p>
            <h2 className="editorial-section-title mt-3 text-[#141414]">
              To create digital products that are useful, scalable and ready for growth.
            </h2>
            <p className={`mt-4 ${leadClass}`}>
              We believe a strong digital product should look professional, solve a real problem,
              work smoothly for users, support business goals, and keep improving after launch.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ABOUT_VALUES.map((value, index) => (
              <Reveal key={value.title} delay={0.04 * index}>
                <div className="min-h-[10rem] rounded-[1.375rem] border border-[#DADAD8] bg-white p-5">
                  <strong className="block font-heading text-lg font-bold tracking-[-0.02em] text-[#141414]">
                    {value.title}
                  </strong>
                  <p className={`mt-2 ${bodyMuted}`}>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture banner */}
      <section className="py-16 md:py-[4.375rem]">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal>
            <div
              className="flex min-h-[18rem] items-end rounded-[2.125rem] bg-[#141414] p-7 shadow-[0_18px_55px_rgba(10,24,42,0.08)] md:min-h-[24rem] md:p-9"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(20,20,20,0.88),rgba(20,20,20,0.48)),url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <p className={`${eyebrowClass} text-[#A9E7E2]`}>Our Culture</p>
                <h2 className="mt-3 max-w-3xl font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                  Great products happen when smart teams solve real business problems together.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                  At Skyen Systems, our work connects product thinking, technology, AI, design,
                  marketing, and long-term support so businesses can build with more clarity and
                  confidence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutWhatWeDoSection />

      {/* People */}
      <section className="py-16 md:py-[4.375rem]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <p className={eyebrowClass}>Our People</p>
            <h2 className="editorial-section-title mt-3 text-[#141414]">
              Product thinkers, designers, developers and growth specialists working together.
            </h2>
            <p className={`mt-4 ${leadClass}`}>
              Our team approach helps businesses avoid disconnected design, development, AI and
              marketing work. We keep planning, execution and improvement connected from the start.
            </p>
            <div className="mt-6 grid gap-3.5">
              {ABOUT_PEOPLE_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[1.25rem] border border-[#DADAD8] bg-white p-4 md:p-5"
                >
                  <h3 className="font-heading text-lg font-bold tracking-[-0.02em] text-[#141414]">
                    {point.title}
                  </h3>
                  <p className={`mt-1.5 ${bodyMuted}`}>{point.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="min-h-[18rem] rounded-[1.875rem] md:min-h-[22.5rem]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,rgba(20,20,20,0.65),rgba(20,20,20,0.2)),url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="bg-[#F4F4F2] py-16 md:py-[4.375rem]">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="max-w-3xl">
            <p className={eyebrowClass}>Our Work</p>
            <h2 className="editorial-section-title mt-3 text-[#141414]">
              Digital products we build and grow.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_WORK.map((project, index) => (
              <Reveal key={project.title} delay={0.04 * index}>
                <article className="group overflow-hidden rounded-3xl border border-[#DADAD8] bg-white shadow-[0_12px_34px_rgba(16,24,40,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(16,24,40,0.12)]">
                  <div className="h-44 overflow-hidden">
                    <div
                      className="h-full w-full scale-100 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-[#141414]">
                      {project.title}
                    </h3>
                    <p className={`mt-2 ${bodyMuted}`}>{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutTechFocusSection />

      {/* Final CTA */}
      <section className="bg-[#141414] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 lg:grid-cols-[1fr_auto] lg:gap-10">
          <Reveal>
            <p className={`${eyebrowClass} text-[#A9E7E2]`}>Ready to Build?</p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,3.625rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              Let&apos;s build your next website, app, AI product or software platform.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Tell us what you want to build, improve, or scale. Skyen Systems will help you plan
              the right digital product direction and development roadmap.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:text-right">
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center border border-white/30 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:border-[#31C3C3] hover:bg-[#31C3C3] sm:w-auto sm:min-w-[220px]"
            >
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
