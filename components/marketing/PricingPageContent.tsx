"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { 
  Layout, 
  Smartphone, 
  Search, 
  Mail, 
  RefreshCw, 
  LifeBuoy,
  Monitor,
  Database,
  Globe,
  BarChart,
  History,
  Shield,
  Zap,
  Infinity as InfinityIcon,
  Puzzle,
  Link as LinkIcon,
  FastForward,
  Repeat,
  Headphones,
  Users,
  Calendar,
  LucideIcon
} from "lucide-react";
 
import { motion } from "framer-motion";
import { PricingStickers } from "./PricingStickers";
import PricingPanels from "./PricingPanels";
import Lottie from "lottie-react";
import girlAnimation from "../../public/girl say hi.json";
import cardAnimation from "../../public/card.json";
import onlinePaymentAnimation from "../../public/Online Payment.json";

type Feature = {
  text: string;
  icon: LucideIcon;
};

type Plan = {
  name: string;
  price: string;
  /** USD amount used for live PKR conversion (matches "From $X"). */
  usdFromAmount: number;
  badge?: string;
  description: string;
  features: Feature[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "From $1,500",
    usdFromAmount: 1500,
    description: "For small businesses needing a professional digital presence.",
    features: [
      { text: "Up to 8-page website", icon: Layout },
      { text: "Mobile responsive", icon: Smartphone },
      { text: "Basic SEO setup", icon: Search },
      { text: "Contact form", icon: Mail },
      { text: "1 revision round", icon: RefreshCw },
      { text: "30-day support", icon: LifeBuoy },
    ],
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    price: "From $4,000",
    usdFromAmount: 4000,
    description: "For businesses ready to grow with a full digital strategy.",
    features: [
      { text: "Up to 20 pages or web app", icon: Monitor },
      { text: "CMS integration", icon: Database },
      { text: "Full SEO setup", icon: Globe },
      { text: "Analytics tracking", icon: BarChart },
      { text: "3 revision rounds", icon: History },
      { text: "90-day support", icon: Shield },
      { text: "Priority response", icon: Zap },
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "From $8,000",
    usdFromAmount: 8000,
    description: "For established businesses with complex multi-platform needs.",
    features: [
      { text: "Unlimited scope", icon: InfinityIcon },
      { text: "Custom integrations", icon: Puzzle },
      { text: "API connections", icon: LinkIcon },
      { text: "Performance optimization", icon: FastForward },
      { text: "Unlimited revisions", icon: Repeat },
      { text: "6-month support", icon: Headphones },
      { text: "Dedicated PM", icon: Users },
      { text: "Monthly reviews", icon: Calendar },
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For projects over PKR 560,000 (approx. USD 2,000), we offer milestone-based payment schedules — typically 50% at project start and 50% on completion. For larger projects, a 3-stage payment plan is available. Contact us to discuss.",
  },
  {
    question: "What is included in the support period?",
    answer:
      "The support period covers bug fixes, minor content updates (text/image swaps), and technical questions about the delivered work. It does not cover new features or scope additions, which are quoted separately. Support is provided via email with a 1-business-day response time.",
  },
  {
    question: "Can I start with Starter and upgrade later?",
    answer:
      "Yes. We design all projects with future growth in mind. If you start with a Starter website and later need e-commerce, a client portal, or additional functionality, we can scope and add those as a separate project. There are no lock-ins.",
  },
  {
    question: "How does Dedicated Teams pricing work?",
    answer:
      "Dedicated Teams are billed monthly in advance. Pricing depends on the number of team members, their seniority, and the engagement model (full-time vs. part-time). Engagements require a minimum 3-month commitment. Contact us for a custom quote based on your specific team needs.",
  },
];

function formatPkrFromUsd(usd: number, rate: number): string {
  const pkr = Math.round(usd * rate);
  return `From PKR ${pkr.toLocaleString("en-PK", { maximumFractionDigits: 0 })}`;
}

const FALLBACK_PKR_PER_USD = 278.92;

type FxSnapshot = {
  pkrPerUsd: number;
  lastUpdateUtc: string | null;
  usedFallback: boolean;
};

  function PricingCurrencyPanel({
    fx,
    rateLoading,
    panelBusy,
    onRetry,
  }: {
    fx: FxSnapshot | null;
    rateLoading: boolean;
    panelBusy: boolean;
    onRetry: () => void;
  }) {
    const [usdInput, setUsdInput] = useState("1500");
    const usdNum = parseFloat(String(usdInput).replace(/,/g, ""));
    const pkrPerUsd = fx?.pkrPerUsd ?? null;
    const converted =
      pkrPerUsd != null && Number.isFinite(usdNum) && usdNum >= 0
        ? Math.round(usdNum * pkrPerUsd)
        : null;

    const updatedLabel = fx?.lastUpdateUtc ? `${fx.lastUpdateUtc.slice(0, 16).replace("T", " ")} UTC` : null;

    return (
      <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-[#1E3A8A2A] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(239,248,255,0.86),rgba(226,248,255,0.72))] p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.16),transparent_70%)] blur-3xl animate-pulse" />
          <div className="absolute -right-16 -bottom-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_70%)] blur-3xl animate-pulse [animation-duration:6s]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.035]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="currency-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1E3A8A" strokeWidth="0.35" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#currency-grid)" />
          </svg>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A1F] bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1E3A8A] shadow-sm">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-emerald-500"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  Live reference
                </span>
                {fx?.usedFallback ? (
                  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-800">
                    Backup feed
                  </span>
                ) : null}
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/75">
                USD → PKR
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0F172A] md:text-3xl">
                USD to PKR converter
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-[15px]">
                Track the current reference rate and convert project budgets instantly. The card stays
                calm, premium, and readable while the live value updates in the background.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Reference</p>
                {rateLoading && !fx ? (
                  <p className="mt-1 text-sm font-semibold text-slate-700">Fetching…</p>
                ) : panelBusy ? (
                  <p className="mt-1 text-sm font-semibold text-slate-700">Refreshing…</p>
                ) : pkrPerUsd != null ? (
                  <p className="mt-1 text-sm font-extrabold text-[#0F172A]">
                    1 USD ≈ PKR {pkrPerUsd.toLocaleString("en-PK", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                  </p>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-slate-700">Rate unavailable</p>
                )}
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Status</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {rateLoading && !fx ? "Loading live feed" : panelBusy ? "Updating now" : "Ready"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Updated</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">{updatedLabel ? updatedLabel : "—"}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-600">
              Exchange rate is indicative. Final PKR amounts are confirmed at invoice stage.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1E3A8A22] bg-[#0B1B2F] p-4 text-white shadow-[0_22px_50px_-30px_rgba(15,23,42,0.7)] md:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.5),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between gap-4">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200/80">Quick convert</p>
                    <p className="mt-1 text-lg font-extrabold text-white">Project budget estimator</p>
                  </div>
                  <button
                    type="button"
                    onClick={onRetry}
                    disabled={rateLoading || panelBusy}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/15 disabled:opacity-50"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Refresh
                  </button>
                </div>

                {fx?.usedFallback ? (
                  <p className="mt-3 inline-flex rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-100">
                    Live feed unavailable. Showing indicative backup rate.
                  </p>
                ) : null}
              </div>

              {!rateLoading && !panelBusy && pkrPerUsd != null ? (
                <div className="space-y-3">
                  <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100/80">
                    Amount in USD
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/12 bg-white/8 px-3 py-3 shadow-inner shadow-black/10 backdrop-blur-sm focus-within:border-cyan-300/60 focus-within:ring-2 focus-within:ring-cyan-300/20">
                    <span className="text-sm font-semibold text-cyan-100">USD</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={usdInput}
                      onChange={(e) => setUsdInput(e.target.value)}
                      className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-slate-400"
                      aria-label="Amount in USD"
                    />
                    <span className="text-slate-300">→</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white">
                      PKR {converted != null ? converted.toLocaleString("en-PK", { maximumFractionDigits: 0 }) : "—"}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    The converter updates instantly as you type and uses the live reference shown beside it.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-slate-200">
                  Live conversion will appear once the rate is loaded.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}


function PricingCard({
  plan,
  isFeatured,
  isMobile,
  isCentered: _isCentered,
  pkrPerUsd,
  rateLoading,
}: {
  plan: Plan;
  isFeatured: boolean;
  isMobile?: boolean;
  isCentered?: boolean;
  pkrPerUsd: number | null;
  rateLoading: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPkr, setShowPkr] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayPrice =
    showPkr && pkrPerUsd != null && !rateLoading
      ? formatPkrFromUsd(plan.usdFromAmount, pkrPerUsd)
      : plan.price;

  return (
    <motion.article
      className="group relative h-full"
      whileHover={!isMobile && !isFeatured ? { y: -8 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Sticker for Scale Plan */}
      {mounted && plan.name === "Scale" && !isMobile && (
        <div className="absolute top-0 right-[-35%] -translate-y-[80%] w-28 h-28 z-20 pointer-events-none opacity-0">
          {/* Moved to FAQ section */}
        </div>
      )}

      {/* Premium card container */}
      <div
        className={`relative h-full rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isFeatured
            ? "border-[#1E3A8A66] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] shadow-[0_25px_50px_-25px_rgba(30,58,138,0.5)]"
            : "border-[#1E3A8A33] bg-gradient-to-br from-white/90 via-white to-[#f4f8ff]/80 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
        } ${
          isHovered && isFeatured
            ? "shadow-[0_35px_70px_-15px_rgba(30,58,138,0.8)]"
            : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background graphics */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Orbital accent for featured card */}
          {isFeatured && (
            <>
              <svg className="absolute -right-20 -top-20 h-48 w-48 opacity-10">
                <circle cx="96" cy="96" r="80" fill="none" stroke="#1E3A8A" strokeWidth="1" />
                <circle cx="96" cy="96" r="100" fill="none" stroke="#22D3EE" strokeWidth="0.5" />
              </svg>
              <motion.div
                className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_70%)] blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </>
          )}

          {/* Top accent bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-40"
            animate={{ opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col p-5 md:p-7 h-full">
          {/* Header section */}
          <div className="mb-3 md:mb-5">
            {plan.badge && (
              <motion.span
                className="inline-block rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#112B44] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white mb-4 shadow-[0_8px_16px_-4px_rgba(30,58,138,0.3)]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {plan.badge}
              </motion.span>
            )}

            <motion.p
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A] opacity-70"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {plan.name}
            </motion.p>

            <motion.p
              className={`mt-2 font-black leading-tight ${
                isFeatured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
              } bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] bg-clip-text text-transparent`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {displayPrice}
            </motion.p>

            {rateLoading ? (
              <p className="mt-2 text-[11px] font-medium text-slate-500">Loading PKR rate…</p>
            ) : pkrPerUsd != null ? (
              <button
                type="button"
                onClick={() => setShowPkr((v) => !v)}
                className={`mt-2 inline-flex items-center rounded-lg border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
                  isFeatured
                    ? "border-[#1E3A8A55] bg-white/60 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                    : "border-[#1E3A8A44] bg-white/70 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                }`}
              >
                {showPkr ? "Show in USD" : "Show in PKR"}
              </button>
            ) : null}

            <motion.p
              className="mt-3 text-[13px] leading-relaxed text-slate-600 md:text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {plan.description}
            </motion.p>
          </div>

          {/* Divider with gradient */}
          <motion.div
            className="my-4 md:my-6 h-px bg-gradient-to-r from-transparent via-[#1E3A8A] to-transparent opacity-30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Features list with stagger animation */}
          <motion.ul className="mb-6 md:mb-8 flex-1 space-y-2">
            {plan.features.map((feature, featureIdx) => (
              <motion.li
                key={feature.text}
                className="flex gap-2.5 text-xs text-slate-600 md:text-[13px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + featureIdx * 0.05,
                }}
              >
                <motion.span
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg bg-[#1E3A8A08]"
                  whileHover={{ scale: 1.1, backgroundColor: "#1E3A8A12" }}
                >
                  <feature.icon className="h-3 w-3 text-[#1E3A8A]" />
                </motion.span>
                <span className="font-medium text-slate-700">{feature.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className={`group/cta relative inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 overflow-hidden ${
                isFeatured
                  ? "bg-gradient-to-r from-[#1E3A8A] to-[#112B44] text-white shadow-[0_12px_28px_-8px_rgba(30,58,138,0.4)] hover:shadow-[0_16px_40px_-8px_rgba(30,58,138,0.6)]"
                  : "border-2 border-[#1E3A8A] bg-white/50 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
              }`}
            >
              <span className="relative z-10">Start Your Project →</span>
              {isFeatured && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["−100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              )}
            </Link>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        {!isMobile && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#22D3EE] via-transparent to-transparent opacity-0"
            animate={{
              opacity: isHovered ? (isFeatured ? 0.1 : 0.05) : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </motion.article>
  );
}


export function PricingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState<"packages" | "retainers" | "individual">("packages");
  const [fx, setFx] = useState<FxSnapshot | null>(null);
  const [rateLoading, setRateLoading] = useState(true);
  const [panelBusy, setPanelBusy] = useState(false);
  const initialFetch = useRef(true);

  const loadRate = useCallback((opts?: { isRefresh?: boolean }) => {
    const isRefresh = opts?.isRefresh ?? false;
    if (isRefresh) setPanelBusy(true);
    else if (initialFetch.current) setRateLoading(true);

    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then(
        (j: {
          ok?: boolean;
          pkrPerUsd?: number;
          lastUpdateUtc?: string | null;
        }) => {
          if (j.ok && typeof j.pkrPerUsd === "number" && Number.isFinite(j.pkrPerUsd)) {
            setFx({
              pkrPerUsd: j.pkrPerUsd,
              lastUpdateUtc: typeof j.lastUpdateUtc === "string" ? j.lastUpdateUtc : null,
              usedFallback: false,
            });
          } else {
            setFx({
              pkrPerUsd: FALLBACK_PKR_PER_USD,
              lastUpdateUtc: null,
              usedFallback: true,
            });
          }
        }
      )
      .catch(() => {
        setFx({
          pkrPerUsd: FALLBACK_PKR_PER_USD,
          lastUpdateUtc: null,
          usedFallback: true,
        });
      })
      .finally(() => {
        if (isRefresh) setPanelBusy(false);
        else if (initialFetch.current) {
          setRateLoading(false);
          initialFetch.current = false;
        }
      });
  }, []);

  useEffect(() => {
    loadRate();
  }, [loadRate]);

  const cardPkr = fx?.pkrPerUsd ?? null;

  return (
    <div className="pb-0 pt-12 text-[#0F172A] bg-white">
      <section className="px-6 py-12 md:px-16 overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Animation on the left */}
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <Lottie animationData={onlinePaymentAnimation} loop={true} />
            </div>

            <div className="text-center">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A] opacity-60">
                TRANSPARENT PRICING
              </p>
              <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-slate-600">
                Three tiers for most projects. Custom quotes for everything else.
                Every tier includes the same quality — <span className="text-[#1E3A8A] font-bold">the difference is scope.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="relative overflow-hidden px-6 pb-12 md:px-16 md:pb-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgs/aqua.jfif')" }}
      >
        {/* Ambient background graphics */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Radial gradients for depth */}
          <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.08),transparent_70%)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.06),transparent_70%)] blur-3xl" />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute h-1 w-1 rounded-full bg-[#22D3EE]"
              style={{
                left: `${(i * 12.5) % 100}%`,
                top: `${(i * 14) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1.2, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + (i % 2) * 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Mesh grid overlay */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.03]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid-pricing"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#1E3A8A"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pricing)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl">
          <PricingCurrencyPanel
            fx={fx}
            rateLoading={rateLoading}
            panelBusy={panelBusy}
            onRetry={() => loadRate({ isRefresh: true })}
          />

          <PricingPanels selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="mt-10 rounded-2xl border border-[#1E3A8A22] bg-white/90 px-5 py-4 text-left text-sm leading-relaxed text-[#264766] shadow-sm backdrop-blur-sm md:px-6">
            <p className="font-semibold text-[#0F172A]">Pakistan clients</p>
            <p className="mt-2">
              Pricing above is in USD. Indicative PKR equivalents at current rates: Starter — from PKR
              420,000&nbsp;&nbsp;|&nbsp;&nbsp;Growth — from PKR 1,120,000&nbsp;&nbsp;|&nbsp;&nbsp;Scale — from PKR
              2,240,000
            </p>
            <p className="mt-2">
              Final amounts invoiced in PKR at rates confirmed at time of engagement. Contact us for a PKR
              quote:{" "}
              <Link
                href="mailto:info@skyensystems.com"
                className="font-semibold text-[#1E3A8A] underline-offset-2 hover:underline"
              >
                Info@skyensystems.com
              </Link>
            </p>
          </div>

          {/* Disclaimer card */}
          <motion.div
            className="mt-12 rounded-2xl border border-[#1E3A8A33] bg-gradient-to-br from-[#f4f8ff] via-white to-[#eef9ff] px-6 py-4 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-[#264766]">
              ⚠ Prices are starting points. All quotes are fixed-price — no hourly billing surprises.
              Payment plans are available for projects over USD $2,000 (approx. PKR 560,000 at indicative
              rates). Exchange rate is indicative; final PKR amounts are confirmed at invoice stage.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 rounded-2xl border border-[#1E3A8A22] bg-white/95 px-5 py-4 text-left text-sm leading-relaxed text-[#264766] shadow-sm backdrop-blur-sm md:px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              <span className="font-semibold text-[#0F172A]">Payment Methods:</span> We accept international
              bank transfers, Stripe (Visa/Mastercard/Debit), and PayPal. We do not accept cryptocurrency,
              Bitcoin, USDT, Skrill, or any crypto-based payment platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pt-8 pb-16 md:px-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            {/* Girl on the left */}
            <div className="w-32 h-32 md:w-56 md:h-56 flex-shrink-0">
              <Lottie animationData={girlAnimation} loop={true} />
            </div>

            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Pricing FAQ
              </p>
              <h2 className="text-3xl font-extrabold md:text-4xl text-balance">
                Common questions about our pricing.
              </h2>
            </div>

            {/* Card guy on the right */}
            <div className="hidden xl:block w-32 h-32 md:w-48 md:h-48 flex-shrink-0 opacity-80">
              <Lottie animationData={cardAnimation} loop={true} />
            </div>
          </div>
          <div className="mt-8 space-y-3 text-left">
            {FAQ_ITEMS.map((item, index) => {
              const open = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="rounded-xl border border-white/80 bg-white/85 shadow-[0_14px_32px_-26px_rgba(15,23,42,0.4)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-slate-800 md:text-base"
                  >
                    <span>{item.question}</span>
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A22] text-[#1E3A8A]">
                      {open ? "×" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingStickers />
    </div>
  );
}
