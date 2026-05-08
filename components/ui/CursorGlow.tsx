"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const media = window.matchMedia("(pointer: fine)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const shouldEnable = !isTouchDevice && media.matches && !connection?.saveData;

    setEnabled(shouldEnable);
    if (!shouldEnable) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }
    document.body.classList.add("custom-cursor-enabled");

    let rafId = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glow = { x: target.x, y: target.y };

    const setTransform = (node: HTMLDivElement | null, x: number, y: number) => {
      if (!node) return;
      node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const isInteractive = (node: EventTarget | null) =>
      node instanceof Element &&
      Boolean(
        node.closest(
          'a, button, input, textarea, select, summary, [role="button"], [data-cursor-interactive="true"]',
        ),
      );

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      setTransform(dotRef.current, target.x, target.y);
      setIsHoveringInteractive(isInteractive(event.target));
    };

    const onPointerDown = () => setIsClicking(true);
    const onPointerUp = () => setIsClicking(false);
    const onPointerCancel = () => setIsClicking(false);

    const animateGlow = () => {
      glow.x += (target.x - glow.x) * 0.14;
      glow.y += (target.y - glow.y) * 0.14;
      setTransform(glowRef.current, glow.x, glow.y);
      rafId = window.requestAnimationFrame(animateGlow);
    };

    rafId = window.requestAnimationFrame(animateGlow);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerCancel, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[80] h-12 w-12 rounded-full border border-[#9AA8FF66] bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,rgba(30,58,138,0.18)_45%,rgba(30,58,138,0)_72%)] blur-[10px] transition-[width,height,opacity,filter,box-shadow,background] duration-200 ${
          isHoveringInteractive
            ? "h-[68px] w-[68px] opacity-100 blur-[14px] shadow-[0_0_26px_6px_rgba(108,99,255,0.35),0_0_58px_14px_rgba(30,58,138,0.25)]"
            : "opacity-90 shadow-[0_0_16px_3px_rgba(108,99,255,0.24),0_0_32px_10px_rgba(30,58,138,0.2)]"
        } ${isClicking ? "h-10 w-10" : ""}`}
      />
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[81] h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.95),0_0_16px_rgba(108,99,255,0.55)] transition-transform duration-100 ${
          isClicking ? "scale-75" : "scale-100"
        }`}
      />
    </>
  );
}
