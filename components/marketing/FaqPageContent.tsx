"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FAQ_SECTIONS, type FaqSection } from "./faq-page-data";

const SECTION_BACKGROUNDS: Partial<Record<string, string>> = {
  about: "/bgs/coffee.jpg",
  pricing: "/bgs/blue%20nodes.jpg",
  legal: "/bgs/3D.jpg",
};

function FaqSectionCard({ section, solid }: { section: FaqSection; solid?: boolean }) {
  return (
    <section
      id={section.id}
      className={`space-y-6 rounded-2xl border border-[#c9d8ff] p-6 shadow-md shadow-[#5678f8]/10 md:p-8 ${solid ? "bg-white" : "bg-white/90"}`}
    >
      <h2 className="border-b border-[#dbe4ff] pb-3 text-2xl font-semibold text-[#1a2050]">{section.title}</h2>
      <div className="space-y-4">
        {section.items.map((item) => (
          <details key={item.q} className="rounded-md border p-3">
            <summary className="cursor-pointer text-lg font-semibold text-[#2b3c7e]">{item.q}</summary>
            <div className="mt-2 text-[#4d5f99] [&_p]:leading-relaxed">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function FaqSectionBand({ bgImage, children }: { bgImage: string; children: ReactNode }) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 py-10 md:py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden
      />
      <div className="relative px-6 md:px-10">{children}</div>
    </div>
  );
}

export function FaqPageContent() {
  const [leftAnim, setLeftAnim] = useState<unknown>(null);
  const [rightAnim, setRightAnim] = useState<unknown>(null);

  useEffect(() => {
    fetch(encodeURI("/anims/Frequently Asked Question (FAQ).json"))
      .then((r) => r.json())
      .then((data) => setLeftAnim(data))
      .catch(() => {});

    fetch(encodeURI("/anims/Questions.json"))
      .then((r) => r.json())
      .then((data) => setRightAnim(data))
      .catch(() => {});
  }, []);

  return (
    <div className="text-[#1a2050]">
      <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 pb-16 pt-28 md:px-10 md:pt-32">
        <header className="mx-auto max-w-2xl space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
          <p className="text-lg text-[#4d5f99]">
            Everything you need to know about working with Skyen Systems.
          </p>
        </header>

        {FAQ_SECTIONS.map((section) => {
          const bgImage = SECTION_BACKGROUNDS[section.id];

          if (bgImage) {
            return (
              <FaqSectionBand key={section.id} bgImage={bgImage}>
                <FaqSectionCard section={section} solid />
              </FaqSectionBand>
            );
          }

          if (section.id === "services") {
            return (
              <div key={section.id} className="relative">
                <div className="pointer-events-none absolute -left-72 top-1/2 z-0 hidden -translate-y-1/2 md:block lg:-left-80">
                  <div className="w-80">
                    {leftAnim ? (
                      <Lottie animationData={leftAnim} loop style={{ width: "auto", height: 520 }} />
                    ) : null}
                  </div>
                </div>
                <FaqSectionCard section={section} />
              </div>
            );
          }

          if (section.id === "refunds") {
            return (
              <div key={section.id} className="relative">
                <div className="pointer-events-none absolute -right-56 top-1/2 z-0 hidden -translate-y-1/2 md:block lg:-right-64">
                  <div className="w-56">
                    {rightAnim ? (
                      <Lottie animationData={rightAnim} loop style={{ width: "auto", height: 320 }} />
                    ) : null}
                  </div>
                </div>
                <FaqSectionCard section={section} />
              </div>
            );
          }

          return <FaqSectionCard key={section.id} section={section} />;
        })}
      </main>
    </div>
  );
}
