/**
 * Static engineering-drawing fallback for when WebGL is unavailable or the
 * visitor prefers reduced motion. Same subject as the 3D rig, none of the cost.
 */
export function HeroFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 480 320"
        className="h-full max-h-[420px] w-full max-w-[560px] text-[var(--color-border-strong)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="blueprint-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="480" height="320" fill="url(#blueprint-grid)" />

        {/* Body */}
        <rect x="150" y="150" width="180" height="34" rx="2" fill="none" stroke="var(--color-ink-muted)" strokeWidth="1.5" />

        {/* Legs (front pair) */}
        {[170, 300].map((hipX) => (
          <g key={hipX}>
            <line x1={hipX} y1="184" x2={hipX - 18} y2="240" stroke="var(--color-ink-muted)" strokeWidth="1.5" />
            <line x1={hipX - 18} y1="240" x2={hipX - 8} y2="286" stroke="var(--color-ink-muted)" strokeWidth="1.5" />
            <circle cx={hipX} cy="184" r="3" fill="var(--color-accent)" />
            <circle cx={hipX - 18} cy="240" r="3" fill="var(--color-ink-muted)" />
          </g>
        ))}

        {/* Measurement marks */}
        <line x1="150" y1="300" x2="330" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="150" y1="294" x2="150" y2="306" stroke="currentColor" strokeWidth="1" />
        <line x1="330" y1="294" x2="330" y2="306" stroke="currentColor" strokeWidth="1" />
        <text x="240" y="314" textAnchor="middle" fontSize="10" fill="var(--color-ink-faint)" fontFamily="var(--font-mono)">
          GENESIS — 12-DOF FRAME
        </text>
      </svg>
    </div>
  );
}
