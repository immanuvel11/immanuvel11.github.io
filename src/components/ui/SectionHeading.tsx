interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

/** Consistent numbered section heading — the "engineering drawing sheet" motif. */
export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="font-mono-tech text-xs text-[var(--color-accent)]">{index}</span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
