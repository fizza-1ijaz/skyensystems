"use client";

import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import { HeroWaveTopPath } from "./HeroGalaxyLandscape";

type HeroContentWaveProps = {
  children: React.ReactNode;
  motionStyle: MotionStyle;
};

export function HeroContentWave({ children, motionStyle }: HeroContentWaveProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex justify-end">
      <div className="relative w-full md:w-[min(64%,940px)] lg:w-[min(60%,900px)]">
        {/* Droopy wave lip — separates galaxy from white content */}
        <svg
          className="relative z-10 -mb-px block h-[clamp(4rem,14vw,8.5rem)] w-full drop-shadow-[0_-8px_30px_rgba(15,23,42,0.06)]"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <HeroWaveTopPath />
        </svg>

        {/* Organic white landscape cutout — content lives here */}
        <motion.div
          className="relative bg-white pb-10 pl-6 pr-6 pt-1 shadow-[0_-32px_90px_-24px_rgba(15,23,42,0.14)] sm:pl-10 sm:pr-10 sm:pb-12 md:rounded-tl-[4rem] md:pl-14 md:pr-16 md:pb-14 lg:pl-20 lg:pr-20 lg:pb-16"
          style={{
            clipPath:
              "polygon(0% 2%, 100% 0%, 100% 100%, 42% 100%, 22% 97%, 10% 90%, 4% 82%, 0% 72%)",
          }}
        >
          <motion.div
            className="pointer-events-none absolute -left-12 top-0 h-full w-32 bg-gradient-to-r from-[#6C63FF]/10 via-[#8B5CF6]/05 to-transparent"
            animate={{ opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -top-6 right-[18%] h-28 w-28 rounded-full bg-[#22D3EE]/08 blur-2xl"
            animate={{ y: [0, -8, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />

          <motion.div
            style={motionStyle}
            className="relative ml-auto w-full max-w-xl space-y-2.5 pt-2 text-left sm:max-w-2xl sm:space-y-3 md:max-w-none md:space-y-4 lg:max-w-3xl"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
