"use client";

import { useEffect, useMemo, useRef } from "react";

type BubbleMeta = {
  x: number;
  y: number;
  size: number;
  depth: number;
  drift: number;
  phase: number;
  opacity: number;
};

const seeded = (seed: number) => {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
};

export function PremiumHeroBubbles() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pointer = useRef({ x: 0, y: 0 });

  const bubbles = useMemo<BubbleMeta[]>(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        x: 6 + seeded(i + 1) * 88,
        y: 10 + seeded(i + 11) * 72,
        size: 56 + seeded(i + 21) * 134,
        depth: 0.35 + seeded(i + 31) * 0.9,
        drift: 0.15 + seeded(i + 41) * 0.45,
        phase: seeded(i + 51) * Math.PI * 2,
        opacity: 0.16 + seeded(i + 61) * 0.3,
      })),
    [],
  );

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let frameId = 0;
    const tick = (time: number) => {
      const host = wrapRef.current?.getBoundingClientRect();
      if (host) {
        for (let i = 0; i < bubbles.length; i += 1) {
          const node = bubbleRefs.current[i];
          if (!node) continue;
          const bubble = bubbles[i];

          const baseX = (bubble.x / 100) * host.width;
          const baseY = (bubble.y / 100) * host.height;

          const dx = pointer.current.x - (host.left + baseX);
          const dy = pointer.current.y - (host.top + baseY);
          const distance = Math.hypot(dx, dy);
          const radius = 280 * bubble.depth;
          const proximity = Math.max(0, 1 - distance / radius);

          const idleX = Math.cos(time * 0.00024 + bubble.phase) * 16 * bubble.drift;
          const idleY = Math.sin(time * 0.00018 + bubble.phase) * 18 * bubble.drift;
          const reactX = (dx / (distance || 1)) * proximity * 16 * bubble.depth;
          const reactY = (dy / (distance || 1)) * proximity * 12 * bubble.depth;

          node.style.transform = `translate3d(${idleX + reactX}px, ${idleY + reactY}px, 0) scale(${1 + proximity * 0.05})`;
          node.style.opacity = String(Math.min(0.58, bubble.opacity + proximity * 0.13));
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [bubbles]);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          ref={(element) => {
            bubbleRefs.current[index] = element;
          }}
          className="absolute rounded-full border border-white/60 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.92),rgba(255,255,255,0.34)_35%,rgba(139,92,246,0.16)_72%,rgba(0,194,255,0.08)_100%)] shadow-[inset_0_2px_14px_rgba(255,255,255,0.65),0_10px_26px_-16px_rgba(108,99,255,0.75)] backdrop-blur-md"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            willChange: "transform, opacity",
          }}
        />
      ))}
      <div className="absolute left-1/2 top-[44%] h-64 w-[70rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6C63FF1f] via-[#8B5CF621] to-[#00C2FF1c] blur-3xl" />
    </div>
  );
}
