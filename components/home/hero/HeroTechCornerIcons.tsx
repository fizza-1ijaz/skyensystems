"use client";

import type { RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMotionProfile } from "@/hooks/useMotionProfile";
import { useInViewport } from "@/hooks/useInViewport";
import {
  Monitor,
  Laptop,
  PenLine,
  Code2,
  Terminal,
  Smartphone,
  Braces,
  Keyboard,
  GitBranch,
  Cpu,
  Database,
  Server,
  Cloud,
  MousePointer2,
  Tablet,
  Wifi,
  Bug,
  Layers,
  HardDrive,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Brand blues — vivid on white (hero landscape) */
const BLUE_DEEP = "#1E3A8A";
const BLUE_BRIGHT = "#2563eb";
const BLUE_SKY = "#3b82f6";

const HERO_ICON_COLORS = [BLUE_DEEP, BLUE_BRIGHT, BLUE_SKY, BLUE_BRIGHT, BLUE_DEEP] as const;

/** Full brand palette for scroll service viewer */
const SERVICE_SCROLL_ICON_COLORS = [
  "#6C63FF",
  "#1E3A8A",
  "#7C3AED",
  "#22D3EE",
  "#8B5CF6",
  "#EC4899",
  "#06b6d4",
  "#4f46e5",
  "#db2777",
  "#0ea5e9",
] as const;

type TechIconConfig = {
  Icon: LucideIcon;
  insetX: string;
  insetY: string;
  size: number;
  opacity: number;
  rotate: number;
  delay: number;
  nudgeX?: number;
  nudgeY?: number;
};

/** Scattered dev-themed icons — each with a distinct tilt for a scrambled look */
const TECH_ICONS: TechIconConfig[] = [
  { Icon: Laptop, insetX: "1.5%", insetY: "4%", size: 74, opacity: 0.78, rotate: -38, delay: 0, nudgeY: 4 },
  { Icon: Monitor, insetX: "10%", insetY: "14%", size: 60, opacity: 0.72, rotate: 24, delay: 0.04, nudgeX: -6 },
  { Icon: Terminal, insetX: "3.5%", insetY: "24%", size: 52, opacity: 0.7, rotate: -52, delay: 0.08 },
  { Icon: Code2, insetX: "16%", insetY: "6%", size: 48, opacity: 0.68, rotate: 41, delay: 0.12, nudgeY: -8 },
  { Icon: PenLine, insetX: "20%", insetY: "20%", size: 44, opacity: 0.65, rotate: -19, delay: 0.16, nudgeX: 8 },
  { Icon: Braces, insetX: "7%", insetY: "34%", size: 40, opacity: 0.62, rotate: 33, delay: 0.2 },
  { Icon: Smartphone, insetX: "14%", insetY: "28%", size: 46, opacity: 0.64, rotate: -44, delay: 0.24, nudgeY: 6 },
  { Icon: Keyboard, insetX: "22%", insetY: "10%", size: 42, opacity: 0.6, rotate: 17, delay: 0.28 },
  { Icon: GitBranch, insetX: "5%", insetY: "44%", size: 38, opacity: 0.58, rotate: -27, delay: 0.32 },
  { Icon: Cpu, insetX: "18%", insetY: "36%", size: 40, opacity: 0.62, rotate: 48, delay: 0.36, nudgeX: -4 },
  { Icon: Database, insetX: "12%", insetY: "48%", size: 36, opacity: 0.56, rotate: -56, delay: 0.4 },
  { Icon: Server, insetX: "25%", insetY: "22%", size: 38, opacity: 0.58, rotate: 11, delay: 0.44, nudgeY: 5 },
  { Icon: Cloud, insetX: "26%", insetY: "38%", size: 34, opacity: 0.55, rotate: -34, delay: 0.48 },
  { Icon: MousePointer2, insetX: "1%", insetY: "16%", size: 32, opacity: 0.58, rotate: 55, delay: 0.52, nudgeX: 10 },
  { Icon: Tablet, insetX: "28%", insetY: "6%", size: 36, opacity: 0.55, rotate: -12, delay: 0.56 },
  { Icon: Wifi, insetX: "8%", insetY: "54%", size: 32, opacity: 0.52, rotate: 29, delay: 0.6 },
  { Icon: Bug, insetX: "19%", insetY: "52%", size: 30, opacity: 0.5, rotate: -41, delay: 0.64 },
  { Icon: Layers, insetX: "24%", insetY: "48%", size: 34, opacity: 0.52, rotate: 37, delay: 0.68, nudgeY: -6 },
  { Icon: HardDrive, insetX: "4%", insetY: "58%", size: 32, opacity: 0.48, rotate: -8, delay: 0.72 },
  { Icon: Plug, insetX: "15%", insetY: "58%", size: 28, opacity: 0.48, rotate: 46, delay: 0.76, nudgeX: 6 },
];

/** Full-canvas scatter for the scroll service viewer (left/top anchored) */
const SERVICE_SCROLL_SCATTER_ICONS: TechIconConfig[] = [
  { Icon: Laptop, insetX: "4%", insetY: "3%", size: 68, opacity: 0.55, rotate: -32, delay: 0 },
  { Icon: Monitor, insetX: "24%", insetY: "6%", size: 56, opacity: 0.5, rotate: 18, delay: 0.03 },
  { Icon: Code2, insetX: "48%", insetY: "4%", size: 50, opacity: 0.48, rotate: 42, delay: 0.06 },
  { Icon: Cloud, insetX: "72%", insetY: "7%", size: 46, opacity: 0.5, rotate: -24, delay: 0.09 },
  { Icon: Tablet, insetX: "90%", insetY: "5%", size: 44, opacity: 0.46, rotate: 14, delay: 0.12 },
  { Icon: Terminal, insetX: "8%", insetY: "14%", size: 48, opacity: 0.48, rotate: -48, delay: 0.15 },
  { Icon: Keyboard, insetX: "38%", insetY: "12%", size: 42, opacity: 0.46, rotate: 22, delay: 0.18 },
  { Icon: GitBranch, insetX: "62%", insetY: "15%", size: 40, opacity: 0.44, rotate: -36, delay: 0.21 },
  { Icon: Server, insetX: "84%", insetY: "13%", size: 44, opacity: 0.47, rotate: 28, delay: 0.24 },
  { Icon: PenLine, insetX: "2%", insetY: "24%", size: 40, opacity: 0.44, rotate: -15, delay: 0.27 },
  { Icon: Braces, insetX: "18%", insetY: "22%", size: 38, opacity: 0.42, rotate: 38, delay: 0.3 },
  { Icon: Cpu, insetX: "44%", insetY: "20%", size: 46, opacity: 0.48, rotate: -44, delay: 0.33 },
  { Icon: Database, insetX: "56%", insetY: "26%", size: 38, opacity: 0.43, rotate: 52, delay: 0.36 },
  { Icon: Smartphone, insetX: "78%", insetY: "23%", size: 44, opacity: 0.45, rotate: -28, delay: 0.39 },
  { Icon: Wifi, insetX: "94%", insetY: "25%", size: 34, opacity: 0.4, rotate: 19, delay: 0.42 },
  { Icon: MousePointer2, insetX: "12%", insetY: "34%", size: 36, opacity: 0.42, rotate: 55, delay: 0.45 },
  { Icon: Layers, insetX: "32%", insetY: "32%", size: 40, opacity: 0.44, rotate: -22, delay: 0.48 },
  { Icon: Bug, insetX: "52%", insetY: "36%", size: 34, opacity: 0.4, rotate: 31, delay: 0.51 },
  { Icon: HardDrive, insetX: "70%", insetY: "33%", size: 38, opacity: 0.43, rotate: -41, delay: 0.54 },
  { Icon: Plug, insetX: "88%", insetY: "35%", size: 32, opacity: 0.4, rotate: 46, delay: 0.57 },
  { Icon: Monitor, insetX: "6%", insetY: "44%", size: 52, opacity: 0.46, rotate: 12, delay: 0.6 },
  { Icon: Laptop, insetX: "28%", insetY: "42%", size: 58, opacity: 0.47, rotate: -38, delay: 0.63 },
  { Icon: Terminal, insetX: "46%", insetY: "46%", size: 44, opacity: 0.42, rotate: -52, delay: 0.66 },
  { Icon: Code2, insetX: "64%", insetY: "43%", size: 42, opacity: 0.44, rotate: 35, delay: 0.69 },
  { Icon: Cloud, insetX: "82%", insetY: "45%", size: 40, opacity: 0.43, rotate: -18, delay: 0.72 },
  { Icon: PenLine, insetX: "16%", insetY: "54%", size: 38, opacity: 0.4, rotate: -19, delay: 0.75 },
  { Icon: Braces, insetX: "40%", insetY: "52%", size: 36, opacity: 0.4, rotate: 27, delay: 0.78 },
  { Icon: Keyboard, insetX: "58%", insetY: "56%", size: 40, opacity: 0.42, rotate: 16, delay: 0.81 },
  { Icon: GitBranch, insetX: "76%", insetY: "53%", size: 36, opacity: 0.4, rotate: -30, delay: 0.84 },
  { Icon: Cpu, insetX: "92%", insetY: "55%", size: 42, opacity: 0.44, rotate: 44, delay: 0.87 },
  { Icon: Database, insetX: "3%", insetY: "64%", size: 36, opacity: 0.4, rotate: -56, delay: 0.9 },
  { Icon: Server, insetX: "22%", insetY: "62%", size: 40, opacity: 0.42, rotate: 8, delay: 0.93 },
  { Icon: Smartphone, insetX: "50%", insetY: "66%", size: 44, opacity: 0.43, rotate: -40, delay: 0.96 },
  { Icon: Tablet, insetX: "68%", insetY: "63%", size: 38, opacity: 0.41, rotate: -10, delay: 0.99 },
  { Icon: Wifi, insetX: "86%", insetY: "65%", size: 32, opacity: 0.38, rotate: 24, delay: 1.02 },
  { Icon: Layers, insetX: "10%", insetY: "74%", size: 36, opacity: 0.4, rotate: 33, delay: 1.05 },
  { Icon: Bug, insetX: "34%", insetY: "72%", size: 32, opacity: 0.38, rotate: -45, delay: 1.08 },
  { Icon: MousePointer2, insetX: "54%", insetY: "76%", size: 34, opacity: 0.39, rotate: 48, delay: 1.11 },
  { Icon: HardDrive, insetX: "74%", insetY: "73%", size: 36, opacity: 0.4, rotate: -6, delay: 1.14 },
  { Icon: Plug, insetX: "90%", insetY: "75%", size: 30, opacity: 0.38, rotate: 40, delay: 1.17 },
  { Icon: Code2, insetX: "6%", insetY: "84%", size: 44, opacity: 0.4, rotate: 21, delay: 1.2 },
  { Icon: Monitor, insetX: "30%", insetY: "82%", size: 48, opacity: 0.42, rotate: -26, delay: 1.23 },
  { Icon: Laptop, insetX: "52%", insetY: "86%", size: 54, opacity: 0.44, rotate: 36, delay: 1.26 },
  { Icon: Terminal, insetX: "72%", insetY: "83%", size: 42, opacity: 0.4, rotate: -34, delay: 1.29 },
  { Icon: Cloud, insetX: "88%", insetY: "85%", size: 38, opacity: 0.39, rotate: 15, delay: 1.32 },
  { Icon: GitBranch, insetX: "18%", insetY: "93%", size: 34, opacity: 0.36, rotate: -20, delay: 1.35 },
  { Icon: Database, insetX: "44%", insetY: "91%", size: 36, opacity: 0.37, rotate: 42, delay: 1.38 },
  { Icon: Server, insetX: "66%", insetY: "94%", size: 38, opacity: 0.38, rotate: -14, delay: 1.41 },
  { Icon: Cpu, insetX: "84%", insetY: "92%", size: 40, opacity: 0.39, rotate: 50, delay: 1.44 },
];

type Corner = "bottom-right" | "top-left";

const CORNER_CONFIG: Record<
  Corner,
  {
    anchorX: "left" | "right";
    anchorY: "top" | "bottom";
    fadeMask: string;
    enterY: number;
  }
> = {
  "bottom-right": {
    anchorX: "right",
    anchorY: "bottom",
    fadeMask:
      "linear-gradient(to left, black 0%, rgba(0,0,0,0.94) 22%, rgba(0,0,0,0.55) 52%, transparent 86%)",
    enterY: 16,
  },
  "top-left": {
    anchorX: "left",
    anchorY: "top",
    fadeMask:
      "linear-gradient(to right, black 0%, rgba(0,0,0,0.94) 22%, rgba(0,0,0,0.55) 52%, transparent 86%)",
    enterY: -16,
  },
};

function TechIconItem({
  config,
  index,
  corner,
  iconColors,
  sizeScale = 1,
  className,
}: {
  config: TechIconConfig;
  index: number;
  corner: Corner;
  iconColors: readonly string[];
  sizeScale?: number;
  className?: string;
}) {
  const { Icon, insetX, insetY, size, opacity, rotate, delay, nudgeX = 0, nudgeY = 0 } = config;
  const { anchorX, anchorY, enterY } = CORNER_CONFIG[corner];
  const stroke = iconColors[index % iconColors.length];

  return (
    <motion.div
      className={className}
      style={{
        [anchorX]: insetX,
        [anchorY]: insetY,
        translate: `${nudgeX}px ${nudgeY}px`,
      }}
      initial={{ opacity: 0, y: enterY, rotate: rotate - 20 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.75, delay: 0.4 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [rotate, rotate + 3, rotate] }}
        transition={{
          duration: 5.2 + index * 0.28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.18,
        }}
      >
        <Icon
          size={size * sizeScale}
          strokeWidth={1.5}
          color={stroke}
          style={{ opacity }}
          aria-hidden
        />
      </motion.div>
    </motion.div>
  );
}

function TechIconCluster({
  corner,
  iconColors,
  mobileCount = 8,
}: {
  corner: Corner;
  iconColors: readonly string[];
  mobileCount?: number;
}) {
  const { fadeMask } = CORNER_CONFIG[corner];
  const scaleOriginClass =
    corner === "bottom-right" ? "max-md:origin-bottom-right" : "max-md:origin-top-left";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden max-md:scale-[0.78] ${scaleOriginClass}`}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
        }}
      >
        {TECH_ICONS.map((config, i) => (
          <TechIconItem
            key={`${corner}-${config.insetX}-${config.insetY}-${config.rotate}`}
            config={config}
            index={i}
            corner={corner}
            iconColors={iconColors}
            className="absolute hidden sm:block"
          />
        ))}

        {TECH_ICONS.slice(0, mobileCount).map((config, i) => (
          <TechIconItem
            key={`${corner}-mobile-${config.insetX}-${config.insetY}`}
            config={config}
            index={i}
            corner={corner}
            iconColors={iconColors}
            sizeScale={0.7}
            className="absolute sm:hidden"
          />
        ))}
      </motion.div>
    </div>
  );
}

type CornerTechIconsProps = {
  iconColors: readonly string[];
  className?: string;
  animateIn?: boolean;
};

function CornerTechIcons({
  iconColors,
  className = "pointer-events-none absolute inset-0 z-[4]",
  animateIn = true,
}: CornerTechIconsProps) {
  return (
    <motion.div
      className={className}
      initial={animateIn ? { opacity: 0 } : false}
      animate={animateIn ? { opacity: 1 } : undefined}
      transition={animateIn ? { duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] } : undefined}
      aria-hidden
    >
      <TechIconCluster corner="bottom-right" iconColors={iconColors} />
      <TechIconCluster corner="top-left" iconColors={iconColors} />
    </motion.div>
  );
}

function ScatteredTechIconItem({
  config,
  index,
  iconColors,
  sizeScale = 1,
  className,
  animateFloat = true,
}: {
  config: TechIconConfig;
  index: number;
  iconColors: readonly string[];
  sizeScale?: number;
  className?: string;
  animateFloat?: boolean;
}) {
  const { Icon, insetX, insetY, size, opacity, rotate, delay, nudgeX = 0, nudgeY = 0 } = config;
  const stroke = iconColors[index % iconColors.length];
  const enterY = index % 3 === 0 ? -14 : index % 3 === 1 ? 14 : 0;
  const enterX = index % 2 === 0 ? -10 : 10;

  return (
    <motion.div
      className={className}
      style={{
        left: insetX,
        top: insetY,
        translate: `${nudgeX}px ${nudgeY}px`,
        rotate: `${rotate}deg`,
      }}
      initial={animateFloat ? { opacity: 0, x: enterX, y: enterY } : false}
      animate={animateFloat ? { opacity: 1, x: 0, y: 0 } : { opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {animateFloat ? (
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 2.5, 0] }}
          transition={{
            duration: 5.5 + index * 0.22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.14,
          }}
        >
          <Icon
            size={size * sizeScale}
            strokeWidth={1.5}
            color={stroke}
            style={{ opacity }}
            aria-hidden
          />
        </motion.div>
      ) : (
        <Icon
          size={size * sizeScale}
          strokeWidth={1.5}
          color={stroke}
          style={{ opacity }}
          aria-hidden
        />
      )}
    </motion.div>
  );
}

function ScatteredTechIcons({
  icons,
  iconColors,
  className = "pointer-events-none absolute inset-0 z-0",
  mobileCount = 14,
  desktopCount,
  animateFloat = true,
}: {
  icons: TechIconConfig[];
  iconColors: readonly string[];
  className?: string;
  mobileCount?: number;
  desktopCount?: number;
  animateFloat?: boolean;
}) {
  const desktopIcons = icons.slice(0, desktopCount ?? icons.length);

  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0 overflow-hidden">
        {desktopIcons.map((config, i) => (
          <ScatteredTechIconItem
            key={`scatter-${config.insetX}-${config.insetY}-${config.rotate}-${i}`}
            config={config}
            index={i}
            iconColors={iconColors}
            animateFloat={animateFloat}
            className="absolute hidden sm:block"
          />
        ))}
        {icons.slice(0, mobileCount).map((config, i) => (
          <ScatteredTechIconItem
            key={`scatter-mobile-${config.insetX}-${config.insetY}-${i}`}
            config={config}
            index={i}
            iconColors={iconColors}
            sizeScale={0.72}
            animateFloat={animateFloat}
            className="absolute sm:hidden"
          />
        ))}
      </div>
    </div>
  );
}

export function HeroTechCornerIcons() {
  return <CornerTechIcons iconColors={HERO_ICON_COLORS} />;
}

/** Themed icons scattered across the full scroll service viewer background */
export function ServiceScrollCornerIcons() {
  const profile = useMotionProfile();
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInViewport({ rootMargin: "200px 0px", once: true });

  if (profile === "minimal" || reduceMotion) return null;

  const animateFloat = profile === "full" && inView;
  const desktopCount = profile === "lite" ? 22 : SERVICE_SCROLL_SCATTER_ICONS.length;
  const mobileCount = profile === "lite" ? 8 : 14;

  return (
    <div ref={ref as unknown as RefObject<HTMLDivElement>} className="pointer-events-none absolute inset-0 z-0">
      <ScatteredTechIcons
        icons={SERVICE_SCROLL_SCATTER_ICONS}
        iconColors={SERVICE_SCROLL_ICON_COLORS}
        className="absolute inset-0"
        desktopCount={desktopCount}
        mobileCount={mobileCount}
        animateFloat={animateFloat}
      />
    </div>
  );
}
