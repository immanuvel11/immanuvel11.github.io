interface ArchitectureChainProps {
  steps: string[];
  orientation?: 'horizontal' | 'vertical';
}

/** Renders a system chain (A → B → C) — used to show architecture at a glance. */
export function ArchitectureChain({ steps, orientation = 'vertical' }: ArchitectureChainProps) {
  const isVertical = orientation === 'vertical';

  return (
    <ol
      className={
        isVertical
          ? 'flex flex-col'
          : 'flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch'
      }
    >
      {steps.map((step, index) => (
        <li key={step} className={isVertical ? 'flex gap-4' : 'flex flex-1 items-center gap-3'}>
          {isVertical ? (
            <div className="flex flex-col items-center">
              <span className="font-mono-tech flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--color-border-strong)] text-[11px] text-[var(--color-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              {index < steps.length - 1 ? (
                <span className="my-1 h-full min-h-[24px] w-px bg-[var(--color-border-strong)]" />
              ) : null}
            </div>
          ) : null}

          <div className={isVertical ? 'pb-8' : 'flex flex-1 items-center gap-3'}>
            <span className="font-mono-tech text-sm text-[var(--color-ink)]">{step}</span>
            {!isVertical && index < steps.length - 1 ? (
              <span className="text-[var(--color-ink-faint)]" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
