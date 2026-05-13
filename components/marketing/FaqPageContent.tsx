"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FAQ_SECTIONS } from "./faq-page-data";

export function FaqPageContent() {
  const [leftAnim, setLeftAnim] = useState<any>(null);
  const [rightAnim, setRightAnim] = useState<any>(null);

  useEffect(() => {
    // fetch animation JSONs from public/anims
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
        {/* Left animation (hidden on small screens) - anchored to the FAQ main container */}
        <div className="pointer-events-none hidden md:block absolute -left-56 top-1/2 -translate-y-1/2">
          <div className="w-80">
            {leftAnim ? (
              <Lottie animationData={leftAnim} loop={true} style={{ width: "auto", height: 520 }} />
            ) : null}
          </div>
        </div>

        {/* Right animation (hidden on small screens) - anchored to the FAQ main container */}
        <div className="pointer-events-none hidden md:block absolute -right-64 top-[calc(38%-608px)] -translate-y-1/2">
          <div className="w-72">
            {rightAnim ? (
              <Lottie animationData={rightAnim} loop={true} style={{ width: "auto", height: 440 }} />
            ) : null}
          </div>
        </div>
        <header className="space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
          <p className="text-lg text-[#4d5f99]">Everything you need to know about working with Skyen Systems.</p>
        </header>

        {FAQ_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="space-y-6 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10 md:p-8"
          >
            <h2 className="border-b border-[#dbe4ff] pb-3 text-2xl font-semibold text-[#1a2050]">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <details key={item.q} className="rounded-md border p-3">
                  <summary className="cursor-pointer text-lg font-semibold text-[#2b3c7e]">{item.q}</summary>
                  <div className="mt-2 text-[#4d5f99] [&_p]:leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

