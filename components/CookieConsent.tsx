"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Settings2 } from "lucide-react";
import type { CookiePreference } from "@/components/ConsentAwareAnalytics";

const ESSENTIAL_ONLY: CookiePreference = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

function saveConsent(consent: CookiePreference) {
  localStorage.setItem("cookie-consent", JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreference>(ESSENTIAL_ONLY);

  useEffect(() => {
    setMounted(true);

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      try {
        const stored = localStorage.getItem("cookie-consent");
        if (stored) {
          setPreferences({ ...ESSENTIAL_ONLY, ...JSON.parse(stored) });
        }
      } catch {
        setPreferences(ESSENTIAL_ONLY);
      }
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const dismissBanner = (consent: CookiePreference) => {
    saveConsent(consent);
    setShowSettings(false);
    setIsVisible(false);
  };

  const handleAllowAll = () => {
    dismissBanner({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const handleEssentialOnly = () => {
    dismissBanner(ESSENTIAL_ONLY);
  };

  const handleCustomize = () => {
    dismissBanner(preferences);
  };

  const togglePreference = (key: keyof CookiePreference) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && !showSettings && (
          <motion.div
            className="fixed bottom-4 left-4 right-4 z-[90] flex items-end justify-center safe-area-bottom md:bottom-6 md:left-6 md:right-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="w-full md:max-w-6xl">
              <div className="relative overflow-hidden rounded-3xl border border-[#1E3A8A]/10 shadow-[0_25px_50px_-20px_rgba(30,58,138,0.35)] md:rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#EFF8F8]/70 to-white/60 backdrop-blur-xl" />

                  <motion.div
                    className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_70%)] blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.08),transparent_70%)] blur-3xl"
                    animate={{ scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />

                  <svg className="absolute inset-0 h-full w-full opacity-[0.02]" preserveAspectRatio="none">
                    <defs>
                      <pattern id="mesh-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mesh-grid)" />
                  </svg>

                  <motion.div
                    className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#31C3C3] to-transparent opacity-40"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                <div className="relative flex flex-col gap-4 p-5 pr-12 md:flex-row md:items-center md:justify-between md:gap-8 md:p-8 md:pr-8">
                  <div className="flex flex-shrink-0 items-center justify-center md:order-first">
                    <AnimatedCookie />
                  </div>

                  <div className="min-w-0 flex-1 md:min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1E3A8A] opacity-60">
                        Privacy Preferences
                      </p>
                      <h3 className="mt-2 text-base font-bold text-[#0F172A] md:text-lg">
                        We use cookies to enhance experience
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                        Your data stays protected while helping us improve performance, analytics, and your
                        experience. Read our{" "}
                        <Link href="/cookies-policy" className="font-semibold text-[#1E3A8A] underline-offset-2 hover:underline">
                          Cookies Policy
                        </Link>
                        .
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex w-full flex-shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 md:order-last">
                    <motion.button
                      onClick={handleAllowAll}
                      className="w-full rounded-lg bg-gradient-to-r from-[#1E3A8A] to-[#112B44] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_8px_16px_-4px_rgba(30,58,138,0.4)] transition-all hover:shadow-[0_12px_24px_-4px_rgba(30,58,138,0.6)] sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Allow All
                    </motion.button>

                    <motion.button
                      onClick={handleEssentialOnly}
                      className="w-full rounded-lg border-2 border-[#1E3A8A] bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1E3A8A] transition-all hover:bg-[#EFF8F8] sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      Essential
                    </motion.button>

                    <motion.button
                      onClick={() => setShowSettings(true)}
                      className="flex items-center justify-center rounded-lg bg-white/60 p-2 text-[#1E3A8A] transition-all hover:bg-white md:p-2.5"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      title="Customize preferences"
                      aria-label="Customize cookie preferences"
                    >
                      <Settings2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                <motion.button
                  onClick={handleEssentialOnly}
                  className="absolute right-4 top-4 rounded-full bg-white/60 p-1.5 text-[#1E3A8A] transition-all hover:bg-white md:right-5 md:top-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  aria-label="Accept essential cookies only"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm safe-area-top safe-area-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              className="mx-auto flex max-h-[min(90vh,640px)] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-[#EFF8F8]/85 to-white/80 shadow-[0_25px_50px_-25px_rgba(30,58,138,0.5)] backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-settings-title"
            >
              <div className="relative shrink-0 border-b border-[#1E3A8A]/10 px-6 py-5">
                <div className="pointer-events-none absolute inset-0">
                  <motion.div
                    className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#31C3C3] to-transparent opacity-40"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#1E3A8A] opacity-60">
                      Privacy Control
                    </p>
                    <h2 id="cookie-settings-title" className="mt-2 text-xl font-bold text-[#0F172A]">
                      Customize Preferences
                    </h2>
                  </div>
                  <motion.button
                    onClick={() => setShowSettings(false)}
                    className="rounded-full bg-white/60 p-2 text-[#1E3A8A] transition-all hover:bg-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close cookie settings"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-6 py-6">
                {[
                  {
                    key: "essential" as const,
                    name: "Essential Cookies",
                    description: "Required for basic functionality and security.",
                    locked: true,
                  },
                  {
                    key: "analytics" as const,
                    name: "Analytics",
                    description: "Help us understand how you use our site.",
                  },
                  {
                    key: "marketing" as const,
                    name: "Marketing",
                    description: "Enable personalized ads and marketing content.",
                  },
                  {
                    key: "preferences" as const,
                    name: "Preferences",
                    description: "Remember your settings and preferences.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.key}
                    className="group relative overflow-hidden rounded-xl border border-[#1E3A8A]/15 bg-white/50 p-4 transition-all hover:bg-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#31C3C3] via-transparent to-transparent opacity-0"
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 0.05 }}
                    />

                    <div className="relative flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-semibold text-[#0F172A]">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                      </div>

                      <motion.button
                        onClick={() => !item.locked && togglePreference(item.key)}
                        disabled={item.locked}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ${
                          preferences[item.key]
                            ? "bg-gradient-to-r from-[#1E3A8A] to-[#112B44]"
                            : "bg-slate-200"
                        } ${item.locked ? "cursor-not-allowed" : "cursor-pointer"}`}
                        aria-pressed={preferences[item.key]}
                        aria-label={`Toggle ${item.name}`}
                      >
                        <motion.div
                          className="inline-flex h-5 w-5 transform rounded-full bg-white shadow-md"
                          animate={{
                            x: preferences[item.key] ? 20 : 2,
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex shrink-0 gap-3 border-t border-[#1E3A8A]/10 px-6 py-4">
                <motion.button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 rounded-lg border-2 border-[#1E3A8A] bg-white/50 px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition-all hover:bg-[#EFF8F8]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleCustomize}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1E3A8A] to-[#112B44] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_16px_-4px_rgba(30,58,138,0.4)] transition-all hover:shadow-[0_12px_24px_-4px_rgba(30,58,138,0.6)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Check className="h-4 w-4" />
                  Save Preferences
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AnimatedCookie() {
  const [isClicked, setIsClicked] = useState(false);
  const [blobDirection, setBlobDirection] = useState(1);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const handleCookieClick = () => {
    setBlobDirection(Math.random() > 0.5 ? 1 : -1);
    setIsClicked(true);
  };

  return (
    <div className="relative h-24 w-24 flex-shrink-0">
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        animate={{ rotate: isClicked ? 360 : 0, opacity: isClicked ? 0 : 1 }}
        transition={{ duration: isClicked ? 0.4 : 20, ease: isClicked ? "easeIn" : "linear", repeat: isClicked ? 0 : Infinity }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#31C3C3" strokeWidth="0.5" opacity="0.3" />
      </motion.svg>

      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        animate={{ rotate: isClicked ? -360 : 0, opacity: isClicked ? 0 : 1 }}
        transition={{ duration: isClicked ? 0.4 : 30, ease: isClicked ? "easeIn" : "linear", repeat: isClicked ? 0 : Infinity }}
      >
        <circle cx="50" cy="50" r="35" fill="none" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.2" />
      </motion.svg>

      <motion.div
        className="absolute inset-0 flex cursor-pointer items-center justify-center"
        animate={{
          x: isClicked ? blobDirection * 120 : 0,
          y: isClicked ? -80 : [0, -4, 0],
          scale: isClicked ? 0.8 : 1,
          opacity: isClicked ? 0 : 1,
          rotate: isClicked ? blobDirection * 45 : 0,
        }}
        transition={{
          x: isClicked ? { duration: 0.6, ease: "easeOut" } : { duration: 0 },
          y: isClicked ? { duration: 0.6, ease: "easeIn" } : { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: isClicked ? { duration: 0.5, ease: "easeIn" } : { duration: 0 },
          opacity: { duration: 0.5 },
          rotate: isClicked ? { duration: 0.6, ease: "easeOut" } : { duration: 0 },
        }}
        onClick={handleCookieClick}
      >
        <svg className="h-16 w-16" viewBox="0 0 100 100" fill="none">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="#C4A574"
            animate={{ filter: ["drop-shadow(0 0 8px rgba(34, 211, 238, 0))", "drop-shadow(0 0 16px rgba(34, 211, 238, 0.4))", "drop-shadow(0 0 8px rgba(34, 211, 238, 0))"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <ellipse cx="35" cy="35" rx="12" ry="12" fill="white" opacity="0.3" />

          {[
            { cx: 45, cy: 40, r: 5 },
            { cx: 55, cy: 45, r: 4 },
            { cx: 50, cy: 55, r: 5 },
            { cx: 40, cy: 60, r: 4 },
            { cx: 60, cy: 55, r: 4 },
          ].map((chip, i) => (
            <motion.circle
              key={i}
              cx={chip.cx}
              cy={chip.cy}
              r={chip.r}
              fill="#3D2817"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}

          <path d="M 85 50 Q 90 45 90 50 Q 90 55 85 50" fill="white" opacity="0.8" />
        </svg>
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-[#31C3C3]"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: isClicked ? Math.cos((i / 6) * Math.PI * 2) * 120 : Math.cos((i / 6) * Math.PI * 2) * 45,
            y: isClicked ? Math.sin((i / 6) * Math.PI * 2) * 120 - 100 : Math.sin((i / 6) * Math.PI * 2) * 45,
            opacity: isClicked ? 0 : [0.5, 1, 0.5],
            scale: isClicked ? 0 : [0.5, 1, 0.5],
          }}
          transition={{
            duration: isClicked ? 0.6 : 3,
            repeat: isClicked ? 0 : Infinity,
            delay: isClicked ? i * 0.05 : (i / 6) * 0.5,
            ease: isClicked ? "easeOut" : "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
