/** A thin engineering-drawing tick rule, used sparingly as a section divider. */
export function MeasurementRule() {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className="h-6 w-full text-[var(--color-border-strong)]"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="1200" y2="12" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 25 }, (_, i) => i * 50).map((x) => (
        <line
          key={x}
          x1={x}
          y1={x % 100 === 0 ? 4 : 8}
          x2={x}
          y2={20}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
