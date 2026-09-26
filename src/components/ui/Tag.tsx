export function Tag({ children }: { children: string }) {
  return (
    <span className="font-mono-tech inline-flex items-center border border-[var(--color-border-strong)] px-2.5 py-1 text-[11px] uppercase text-[var(--color-ink-muted)]">
      {children}
    </span>
  );
}
