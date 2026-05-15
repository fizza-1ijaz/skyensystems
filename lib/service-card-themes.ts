export type ServiceCardTheme = {
  card: string;
  overlay: string;
  headline: string;
  body: string;
  label: string;
  highlight: string;
  emphasis: string;
  cta: string;
  imageBorder: string;
};

export const SERVICE_CARD_THEMES: Record<string, ServiceCardTheme> = {
  web: {
    card: "border-sky-300/90 bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-50 shadow-[0_35px_75px_-40px_rgba(14,165,233,0.28)]",
    overlay:
      "bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.28),transparent_52%),radial-gradient(circle_at_88%_72%,rgba(14,165,233,0.14),transparent_48%)]",
    headline: "text-[#0B1F4A]",
    body: "text-[#1E3A5F]",
    label: "text-[#1E40AF]",
    highlight: "border-sky-200/95 bg-white/75 text-[#1E3353]",
    emphasis: "text-[#0B1F4A]",
    cta: "bg-[#1E3A8A] text-white hover:bg-[#172554]",
    imageBorder: "border-sky-200/90",
  },
  mobile: {
    card: "border-pink-300/90 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-50 shadow-[0_35px_75px_-40px_rgba(236,72,153,0.26)]",
    overlay:
      "bg-[radial-gradient(circle_at_14%_22%,rgba(251,207,232,0.55),transparent_50%),radial-gradient(circle_at_82%_68%,rgba(244,114,182,0.18),transparent_46%)]",
    headline: "text-[#881337]",
    body: "text-[#9D174D]",
    label: "text-[#BE185D]",
    highlight: "border-pink-200/95 bg-white/75 text-[#831843]",
    emphasis: "text-[#701A35]",
    cta: "bg-[#9D174D] text-white hover:bg-[#831843]",
    imageBorder: "border-pink-200/90",
  },
  uiux: {
    card: "border-violet-300/90 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 shadow-[0_35px_75px_-40px_rgba(139,92,246,0.24)]",
    overlay:
      "bg-[radial-gradient(circle_at_16%_20%,rgba(196,181,253,0.45),transparent_50%),radial-gradient(circle_at_84%_70%,rgba(167,139,250,0.2),transparent_48%)]",
    headline: "text-[#4C1D95]",
    body: "text-[#5B21B6]",
    label: "text-[#6D28D9]",
    highlight: "border-violet-200/95 bg-white/75 text-[#4C1D95]",
    emphasis: "text-[#3B0764]",
    cta: "bg-[#6D28D9] text-white hover:bg-[#5B21B6]",
    imageBorder: "border-violet-200/90",
  },
  ai: {
    card: "border-yellow-300/90 bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-50 shadow-[0_35px_75px_-40px_rgba(234,179,8,0.26)]",
    overlay:
      "bg-[radial-gradient(circle_at_14%_24%,rgba(253,224,71,0.4),transparent_52%),radial-gradient(circle_at_86%_66%,rgba(251,191,36,0.2),transparent_46%)]",
    headline: "text-[#7C2D12]",
    body: "text-[#92400E]",
    label: "text-[#B45309]",
    highlight: "border-yellow-200/95 bg-white/75 text-[#78350F]",
    emphasis: "text-[#713F12]",
    cta: "bg-[#C2410C] text-white hover:bg-[#9A3412]",
    imageBorder: "border-yellow-200/90",
  },
  marketing: {
    card: "border-green-300/90 bg-gradient-to-br from-green-100 via-emerald-50 to-green-50 shadow-[0_35px_75px_-40px_rgba(34,197,94,0.26)]",
    overlay:
      "bg-[radial-gradient(circle_at_12%_20%,rgba(134,239,172,0.45),transparent_52%),radial-gradient(circle_at_88%_72%,rgba(52,211,153,0.18),transparent_48%)]",
    headline: "text-[#14532D]",
    body: "text-[#166534]",
    label: "text-[#15803D]",
    highlight: "border-green-200/95 bg-white/75 text-[#14532D]",
    emphasis: "text-[#064E3B]",
    cta: "bg-[#15803D] text-white hover:bg-[#166534]",
    imageBorder: "border-green-200/90",
  },
  teams: {
    card: "border-orange-300/90 bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50 shadow-[0_35px_75px_-40px_rgba(249,115,22,0.26)]",
    overlay:
      "bg-[radial-gradient(circle_at_15%_22%,rgba(253,186,116,0.45),transparent_50%),radial-gradient(circle_at_85%_68%,rgba(251,146,60,0.2),transparent_48%)]",
    headline: "text-[#7C2D12]",
    body: "text-[#9A3412]",
    label: "text-[#C2410C]",
    highlight: "border-orange-200/95 bg-white/75 text-[#7C2D12]",
    emphasis: "text-[#713F12]",
    cta: "bg-[#C2410C] text-white hover:bg-[#9A3412]",
    imageBorder: "border-orange-200/90",
  },
};

export function getServiceCardTheme(serviceId: string): ServiceCardTheme {
  return SERVICE_CARD_THEMES[serviceId] ?? SERVICE_CARD_THEMES.web;
}
