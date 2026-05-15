"use client";

import type { MotionStyle } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroTechCornerIcons } from "./HeroTechCornerIcons";

type HeroLandscapeCompositionProps = {
  children?: React.ReactNode;
  motionStyle: MotionStyle;
};

const HERO_LEFT_BG = "/bgs/cute%20blue.jfif";

/**
 * Cubic wave segments for the left white carve boundary.
 * Each tuple: cp1x, cp1y, cp2x, cp2y, endx, endy
 */
const LANDSCAPE_WAVE_SEGMENTS = [
  [260, 855, 440, 795, 300, 735],
  [200, 675, 480, 615, 320, 555],
  [240, 495, 520, 435, 380, 375],
  [300, 315, 600, 255, 500, 195],
  [440, 135, 860, 85, 760, 55],
  [680, 38, 1280, 30, 1440, 35],
] as const;

function buildCubicWavePath(
  segments: readonly (readonly [number, number, number, number, number, number])[],
  mapPoint: (x: number, y: number) => [number, number]
): string {
  return segments
    .map(([cx1, cy1, cx2, cy2, ex, ey]) => {
      const [x1, y1] = mapPoint(cx1, cy1);
      const [x2, y2] = mapPoint(cx2, cy2);
      const [x3, y3] = mapPoint(ex, ey);
      return `C${x1},${y1} ${x2},${y2} ${x3},${y3}`;
    })
    .join(" ");
}

/** Plain white blob: wavy left edge, straight bottom-right corner */
const WHITE_CARVE_PATH = [
  "M380,900",
  buildCubicWavePath(LANDSCAPE_WAVE_SEGMENTS, (x, y) => [x, y]),
  "L1440,900 Z",
].join(" ");

/** Organic white carve-out — wavy diagonal boundary (~1440×900). */
function WhiteLandscapeCarve() {
  return (
    <svg
      className="absolute inset-0 z-[3] h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="carve-shadow" x="-4%" y="-4%" width="108%" height="108%">
          <feDropShadow dx="-6" dy="-4" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>
      <path filter="url(#carve-shadow)" fill="#ffffff" d={WHITE_CARVE_PATH} />
    </svg>
  );
}

export function HeroLandscapeComposition({ children, motionStyle }: HeroLandscapeCompositionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      className="relative h-full min-h-[inherit] w-full overflow-hidden bg-[#dbeafe]"
    >
      {/* Left hero panel — cute blue photo (visible where white carve does not cover) */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_LEFT_BG}')` }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#93c5fd]/15 via-transparent to-[#1e3a8a]/10" />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/25" />
      </motion.div>

      <WhiteLandscapeCarve />

      <HeroTechCornerIcons />

      {children ? (
        <motion.div className="absolute inset-x-0 bottom-0 top-auto z-[5] flex min-h-[52vh] flex-col justify-end px-8 pb-12 pt-24 sm:min-h-[48vh] sm:justify-center sm:px-12 sm:pb-14 md:left-[40%] md:right-0 md:top-0 md:min-h-0 md:max-w-none md:justify-center md:px-0 md:pb-20 md:pt-36 lg:left-[38%] xl:left-[36%]">
          <motion.div className="relative mx-auto w-full max-w-lg md:mr-[8%] md:ml-auto md:max-w-xl lg:mr-[10%] lg:max-w-2xl">
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
