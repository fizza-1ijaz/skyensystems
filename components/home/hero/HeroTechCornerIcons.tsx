"use client";

import { motion } from "framer-motion";
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

/** Brand blues — vivid on white (low-opacity near-black reads grey) */
const BLUE_DEEP = "#1E3A8A";
const BLUE_BRIGHT = "#2563eb";
const BLUE_SKY = "#3b82f6";

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

const ICON_BLUES = [BLUE_DEEP, BLUE_BRIGHT, BLUE_SKY, BLUE_BRIGHT, BLUE_DEEP] as const;

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
  sizeScale = 1,
  className,
}: {
  config: TechIconConfig;
  index: number;
  corner: Corner;
  sizeScale?: number;
  className?: string;
}) {
  const { Icon, insetX, insetY, size, opacity, rotate, delay, nudgeX = 0, nudgeY = 0 } = config;
  const { anchorX, anchorY, enterY } = CORNER_CONFIG[corner];
  const stroke = ICON_BLUES[index % ICON_BLUES.length];

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
  mobileCount = 8,
}: {
  corner: Corner;
  mobileCount?: number;
}) {
  const { fadeMask } = CORNER_CONFIG[corner];
  const scaleOriginClass =
    corner === "bottom-right" ? "max-md:origin-bottom-right" : "max-md:origin-top-left";

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 overflow-hidden max-md:scale-[0.78] ${scaleOriginClass}`}
      aria-hidden
    >
      <div
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
            className="absolute hidden sm:block"
          />
        ))}

        {TECH_ICONS.slice(0, mobileCount).map((config, i) => (
          <TechIconItem
            key={`${corner}-mobile-${config.insetX}-${config.insetY}`}
            config={config}
            index={i}
            corner={corner}
            sizeScale={0.7}
            className="absolute sm:hidden"
          />
        ))}
      </div>
    </motion.div>
  );
}

export function HeroTechCornerIcons() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[4]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
    >
      <TechIconCluster corner="bottom-right" />
      <TechIconCluster corner="top-left" />
    </motion.div>
  );
}
