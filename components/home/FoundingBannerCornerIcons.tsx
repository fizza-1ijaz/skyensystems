"use client";

import {
  Cloud,
  Code2,
  Monitor,
  PenLine,
  Smartphone,
  Layout,
  Zap,
  Terminal,
  Lightbulb,
  Rocket,
  GitBranch,
  Database,
  Laptop,
  Braces,
  Keyboard,
  Cpu,
  Server,
  Wifi,
  Layers,
  MousePointer2,
  Tablet,
  Plug,
  Palette,
  Sparkles,
  Box,
  Workflow,
  HardDrive,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type CornerIconConfig = {
  Icon: LucideIcon;
  insetX: string;
  insetY: string;
  size: number;
  rotate: number;
  delay: number;
  opacity?: number;
};

const CORNER_META: Record<
  Corner,
  {
    color: string;
    anchorX: "left" | "right";
    anchorY: "top" | "bottom";
    fadeMask: string;
    icons: CornerIconConfig[];
  }
> = {
  "top-left": {
    color: "#0284c7",
    anchorX: "left",
    anchorY: "top",
    fadeMask:
      "radial-gradient(ellipse 92% 88% at 0% 0%, black 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.42) 44%, transparent 66%)",
    icons: [
      { Icon: Cloud, insetX: "2%", insetY: "4%", size: 36, rotate: -18, delay: 0, opacity: 0.72 },
      { Icon: Code2, insetX: "10%", insetY: "14%", size: 30, rotate: 24, delay: 0.35, opacity: 0.66 },
      { Icon: Monitor, insetX: "3%", insetY: "24%", size: 32, rotate: -8, delay: 0.7, opacity: 0.62 },
      { Icon: Laptop, insetX: "16%", insetY: "6%", size: 28, rotate: 32, delay: 0.2, opacity: 0.58 },
      { Icon: Terminal, insetX: "8%", insetY: "34%", size: 26, rotate: -42, delay: 0.55, opacity: 0.54 },
      { Icon: Database, insetX: "18%", insetY: "22%", size: 24, rotate: 14, delay: 0.9, opacity: 0.5 },
      { Icon: Wifi, insetX: "5%", insetY: "44%", size: 22, rotate: -26, delay: 1.1, opacity: 0.46 },
      { Icon: Cpu, insetX: "20%", insetY: "36%", size: 24, rotate: 48, delay: 0.45, opacity: 0.48 },
    ],
  },
  "top-right": {
    color: "#db2777",
    anchorX: "right",
    anchorY: "top",
    fadeMask:
      "radial-gradient(ellipse 92% 88% at 100% 0%, black 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.42) 44%, transparent 66%)",
    icons: [
      { Icon: PenLine, insetX: "3%", insetY: "5%", size: 34, rotate: 16, delay: 0.15, opacity: 0.72 },
      { Icon: Layout, insetX: "12%", insetY: "15%", size: 30, rotate: -22, delay: 0.5, opacity: 0.66 },
      { Icon: Smartphone, insetX: "2%", insetY: "26%", size: 32, rotate: 10, delay: 0.85, opacity: 0.62 },
      { Icon: Palette, insetX: "17%", insetY: "7%", size: 28, rotate: -34, delay: 0.25, opacity: 0.58 },
      { Icon: MousePointer2, insetX: "9%", insetY: "35%", size: 26, rotate: 38, delay: 0.6, opacity: 0.54 },
      { Icon: Tablet, insetX: "19%", insetY: "24%", size: 24, rotate: -12, delay: 0.95, opacity: 0.5 },
      { Icon: Sparkles, insetX: "6%", insetY: "46%", size: 22, rotate: 22, delay: 1.15, opacity: 0.46 },
      { Icon: Layers, insetX: "21%", insetY: "38%", size: 24, rotate: -48, delay: 0.4, opacity: 0.48 },
    ],
  },
  "bottom-left": {
    color: "#ca8a04",
    anchorX: "left",
    anchorY: "bottom",
    fadeMask:
      "radial-gradient(ellipse 92% 88% at 0% 100%, black 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.42) 44%, transparent 66%)",
    icons: [
      { Icon: Zap, insetX: "4%", insetY: "6%", size: 34, rotate: -14, delay: 0.1, opacity: 0.72 },
      { Icon: Terminal, insetX: "11%", insetY: "16%", size: 28, rotate: 20, delay: 0.45, opacity: 0.66 },
      { Icon: Lightbulb, insetX: "3%", insetY: "28%", size: 30, rotate: -6, delay: 0.8, opacity: 0.62 },
      { Icon: Braces, insetX: "15%", insetY: "8%", size: 26, rotate: 36, delay: 0.22, opacity: 0.58 },
      { Icon: Keyboard, insetX: "7%", insetY: "38%", size: 24, rotate: -30, delay: 0.58, opacity: 0.54 },
      { Icon: Plug, insetX: "18%", insetY: "26%", size: 22, rotate: 44, delay: 0.92, opacity: 0.5 },
      { Icon: Box, insetX: "5%", insetY: "48%", size: 22, rotate: -18, delay: 1.05, opacity: 0.46 },
      { Icon: Workflow, insetX: "20%", insetY: "40%", size: 24, rotate: 26, delay: 0.38, opacity: 0.48 },
    ],
  },
  "bottom-right": {
    color: "#16a34a",
    anchorX: "right",
    anchorY: "bottom",
    fadeMask:
      "radial-gradient(ellipse 92% 88% at 100% 100%, black 0%, rgba(0,0,0,0.82) 20%, rgba(0,0,0,0.42) 44%, transparent 66%)",
    icons: [
      { Icon: Rocket, insetX: "3%", insetY: "5%", size: 36, rotate: 12, delay: 0.2, opacity: 0.72 },
      { Icon: GitBranch, insetX: "13%", insetY: "14%", size: 28, rotate: -28, delay: 0.55, opacity: 0.66 },
      { Icon: Database, insetX: "2%", insetY: "25%", size: 32, rotate: 8, delay: 0.9, opacity: 0.62 },
      { Icon: Server, insetX: "16%", insetY: "7%", size: 28, rotate: -16, delay: 0.28, opacity: 0.58 },
      { Icon: HardDrive, insetX: "8%", insetY: "36%", size: 24, rotate: 42, delay: 0.62, opacity: 0.54 },
      { Icon: Cloud, insetX: "19%", insetY: "23%", size: 24, rotate: -8, delay: 0.98, opacity: 0.5 },
      { Icon: Code2, insetX: "6%", insetY: "47%", size: 22, rotate: 30, delay: 1.12, opacity: 0.46 },
      { Icon: Monitor, insetX: "21%", insetY: "39%", size: 24, rotate: -36, delay: 0.42, opacity: 0.48 },
    ],
  },
};

function CornerFloatingIcon({
  config,
  color,
  anchorX,
  anchorY,
  className,
}: {
  config: CornerIconConfig;
  color: string;
  anchorX: "left" | "right";
  anchorY: "top" | "bottom";
  className?: string;
}) {
  const { Icon, insetX, insetY, size, rotate, delay, opacity = 0.58 } = config;

  const style = {
    [anchorX]: insetX,
    [anchorY]: insetY,
    "--icon-rotate": `${rotate}deg`,
    "--float-delay": `${delay}s`,
    color,
    opacity,
  } as CSSProperties;

  return (
    <div className={`founding-corner-icon absolute ${className ?? ""}`} style={style}>
      <Icon size={size} strokeWidth={1.5} aria-hidden />
    </div>
  );
}

function CornerIconCluster({
  corner,
  mobileCount = 4,
}: {
  corner: Corner;
  mobileCount?: number;
}) {
  const { anchorX, anchorY, color, fadeMask, icons } = CORNER_META[corner];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        maskImage: fadeMask,
        WebkitMaskImage: fadeMask,
      }}
      aria-hidden
    >
      {icons.map((icon) => (
        <CornerFloatingIcon
          key={`${corner}-desktop-${icon.insetX}-${icon.insetY}-${icon.rotate}`}
          config={icon}
          color={color}
          anchorX={anchorX}
          anchorY={anchorY}
          className="hidden sm:block"
        />
      ))}
      {icons.slice(0, mobileCount).map((icon) => (
        <CornerFloatingIcon
          key={`${corner}-mobile-${icon.insetX}-${icon.insetY}`}
          config={{ ...icon, size: Math.round(icon.size * 0.82) }}
          color={color}
          anchorX={anchorX}
          anchorY={anchorY}
          className="sm:hidden"
        />
      ))}
    </div>
  );
}

export function FoundingBannerCornerIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      <CornerIconCluster corner="top-left" />
      <CornerIconCluster corner="top-right" />
      <CornerIconCluster corner="bottom-left" />
      <CornerIconCluster corner="bottom-right" />
    </div>
  );
}
