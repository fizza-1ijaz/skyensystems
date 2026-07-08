type BlogBlueprintBackdropStaticProps = {
  className?: string;
  variant?: "light" | "dark";
};

function BlueprintSvg({ variant }: { variant: "light" | "dark" }) {
  const ink = variant === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(20, 20, 20, 1)";
  const accent = "rgba(49,195,195, 1)";

  return (
    <svg
      viewBox="0 0 520 440"
      className="absolute -right-[8%] top-1/2 h-[min(120%,640px)] w-[min(92%,720px)] -translate-y-1/2"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {[88, 176, 264, 352].map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="520" y2={y} stroke={ink} strokeWidth="1" opacity="0.35" />
      ))}
      {[104, 208, 312, 416].map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="440" stroke={ink} strokeWidth="1" opacity="0.35" />
      ))}
      <path d="M48 220 H472" stroke={ink} strokeWidth="1" />
      <path d="M260 48 V392" stroke={ink} strokeWidth="1" />
      <path d="M104 132 C168 132, 192 88, 260 88" stroke={ink} strokeWidth="1" />
      <path d="M260 88 C328 88, 352 132, 416 132" stroke={ink} strokeWidth="1" />
      <path d="M104 132 C168 168, 192 220, 260 220" stroke={ink} strokeWidth="1" />
      <path d="M260 220 C328 220, 352 168, 416 132" stroke={ink} strokeWidth="1" />
      <circle cx="260" cy="88" r="18" stroke={accent} strokeWidth="1" />
      <circle cx="260" cy="88" r="5" fill={accent} />
      <circle cx="260" cy="220" r="22" stroke={accent} strokeWidth="1.25" />
      <circle cx="260" cy="220" r="6" fill={accent} />
    </svg>
  );
}

export function BlogBlueprintBackdropStatic({
  className = "",
  variant = "light",
}: BlogBlueprintBackdropStaticProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04] ${className}`}
        aria-hidden
      >
        <BlueprintSvg variant={variant} />
      </div>
    </div>
  );
}
