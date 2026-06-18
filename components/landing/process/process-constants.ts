/** Shared motion tokens — keeps animation values out of JSX. */
export const PROCESS_MOTION = {
  sectionEntry: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
    y: 32,
  },
  progressLine: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  stageHighlight: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  imagePreview: {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  },
} as const;

/** Intersection Observer band — stages near the upper-middle of the viewport become active. */
export const PROCESS_OBSERVER = {
  /** Viewport Y ratio used as the scroll focus line (timeline progress + active stage). */
  focusRatio: 0.38,
  rootMargin: "-25% 0px -55% 0px",
  thresholds: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] as number[],
} as const;

/** Extra scroll room after the last stage so sticky preview + final step stay in view. */
export const PROCESS_SCROLL_SPACER = "min(58vh, 520px)";

/** Layout + reusable surface classes for the process section. */
export const PROCESS_STYLES = {
  section: "bg-[#141414] py-20 text-[#FAFAF8] md:py-28",
  container: "mx-auto max-w-[1440px] px-6 md:px-10",
  heading:
    "mx-auto max-w-2xl text-center font-heading text-[clamp(1.85rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]",
  accent: "text-brand-cyan",
  grid: "mt-14 grid grid-cols-1 items-start gap-12 md:mt-16 md:gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(220px,300px)] lg:gap-16",
  timelineTrack: "relative pl-6 md:pl-10 lg:pl-12",
  timelineLine: "absolute bottom-0 left-0 top-0 w-px bg-[#2E2E2E]",
  timelineProgress:
    "absolute left-0 top-0 w-[2px] origin-top bg-brand-cyan shadow-[0_0_12px_rgba(49,195,195,0.65)]",
  stageList: "relative flex flex-col gap-16 md:gap-20 lg:gap-24",
  timelineSpacer: "shrink-0 w-full pointer-events-none",
  previewSticky:
    "sticky top-[calc(var(--site-nav-height)+2rem)] hidden self-start md:block",
  previewFrame:
    "relative overflow-hidden rounded-[2.5rem] border border-[#2E2E2E] bg-[#0A0A0A] shadow-[0_40px_100px_-48px_rgba(49,195,195,0.45)]",
  previewSize: "h-[min(56vh,520px)] w-full max-w-[300px] lg:h-[min(60vh,560px)]",
  mobilePreview:
    "relative mb-6 h-56 overflow-hidden rounded-[2rem] border border-[#2E2E2E] md:hidden",
} as const;
