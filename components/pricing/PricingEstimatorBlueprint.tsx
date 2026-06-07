type PricingEstimatorBlueprintProps = {
  className?: string;
};

/** Financial grid + graph motif for the estimator left column. */
export function PricingEstimatorBlueprint({ className = "" }: PricingEstimatorBlueprintProps) {
  const ink = "rgba(20, 20, 20, 1)";
  const accent = "rgba(49,195,195, 1)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 480"
        className="absolute -left-[8%] top-1/2 h-[min(130%,520px)] w-[min(110%,680px)] -translate-y-1/2"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {[96, 192, 288, 384].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="640" y2={y} stroke={ink} strokeWidth="1" opacity="0.4" />
        ))}
        {[128, 256, 384, 512].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="480" stroke={ink} strokeWidth="1" opacity="0.4" />
        ))}

        {/* Trend line — financial graph */}
        <path
          d="M48 360 L128 320 L208 340 L288 260 L368 280 L448 180 L528 200 L592 120"
          stroke={ink}
          strokeWidth="1.25"
        />
        <path
          d="M48 360 L128 320 L208 340 L288 260 L368 280 L448 180 L528 200 L592 120 L592 400 L48 400 Z"
          fill={accent}
          opacity="0.08"
        />

        {/* Axis markers */}
        <line x1="48" y1="400" x2="592" y2="400" stroke={ink} strokeWidth="1" />
        <line x1="48" y1="80" x2="48" y2="400" stroke={ink} strokeWidth="1" />

        {/* Architecture nodes along graph */}
        {(
          [
            [128, 320],
            [288, 260],
            [448, 180],
            [592, 120],
          ] as const
        ).map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="10" stroke={ink} strokeWidth="1" />
            <circle cx={cx} cy={cy} r="3" fill={ink} />
          </g>
        ))}

        <circle cx="448" cy="180" r="16" stroke={accent} strokeWidth="1" />
        <circle cx="448" cy="180" r="5" fill={accent} />

        {/* System diagram fragment */}
        <rect x="420" y="48" width="180" height="100" stroke={ink} strokeWidth="1" />
        <line x1="420" y1="76" x2="600" y2="76" stroke={ink} strokeWidth="1" opacity="0.6" />
        <path d="M440 108 H560 M500 92 V124" stroke={accent} strokeWidth="1" opacity="0.8" />
      </svg>
    </div>
  );
}
