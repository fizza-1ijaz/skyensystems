"use client";

import { FaqReveal } from "@/components/faq/FaqReveal";
import { Reveal } from "@/components/landing/Reveal";
import { ContactSimpleForm } from "@/components/contact/sections/ContactSimpleForm";
import { OFFICE_EMAIL } from "@/lib/company-offices";
import { CONTACT_SIMPLE_FAQ } from "@/lib/contact-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";

export function ContactPage() {
  return (
    <div className="bg-white text-[#141414]">
      <section className="px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <div className="mx-auto max-w-[980px]">
          <Reveal>
            <p className={eyebrowClass}>Contact Skyen Systems</p>
            <h1 className="mt-3 font-heading text-[clamp(2.375rem,5vw,4rem)] font-bold leading-none tracking-[-0.04em] text-[#141414]">
              Let&apos;s Start Your Project
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5C5C5C] md:text-lg md:leading-[1.7]">
              Tell us what you want to build, improve, or scale. We&apos;ll help you understand the
              best next step for your website, mobile app, AI solution, UI/UX design, SEO growth,
              or dedicated software development team.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSimpleForm />

      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto grid max-w-[980px] gap-3.5 sm:grid-cols-3">
          {[
            { label: "Email", value: OFFICE_EMAIL },
            { label: "Response Time", value: "Within 4 business hours" },
            { label: "Availability", value: "Australia & USA remote support" },
          ].map((item, index) => (
            <Reveal key={item.label} delay={0.04 * index}>
              <div className="rounded-[1.25rem] border border-[#DADAD8] bg-[#F4F4F2] p-4 md:p-5">
                <span className="block text-xs text-[#8A8A8A]">{item.label}</span>
                <strong className="mt-1 block text-sm font-semibold text-[#141414] md:text-base">
                  {item.value}
                </strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F4F2] px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[980px]">
          <Reveal className="text-center">
            <p className={eyebrowClass}>Quick Answers</p>
            <h2 className="editorial-section-title mt-3 text-[#141414]">Before You Contact</h2>
          </Reveal>

          <div className="mx-auto mt-6 max-w-3xl space-y-2.5">
            {CONTACT_SIMPLE_FAQ.map((item, index) => (
              <FaqReveal key={item.question} delay={0.06 * index}>
                <details
                  className="rounded-2xl border border-[#DADAD8] bg-white px-4 py-4 md:px-5"
                  open={index === 0}
                >
                  <summary className="cursor-pointer list-none font-heading text-base font-bold text-[#141414] [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5C5C]">{item.answer}</p>
                </details>
              </FaqReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
