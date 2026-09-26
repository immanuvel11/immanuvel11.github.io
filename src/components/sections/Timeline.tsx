import { milestones } from '@/data/achievements';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Timeline() {
  return (
    <SectionShell id="experience">
      <SectionHeading index="05" title="Experience" />

      <ol className="relative border-l border-[var(--color-border)] pl-8">
        {milestones.map((milestone) => (
          <li key={milestone.title} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-2.5 w-2.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)]" />
            {milestone.date ? (
              <span className="font-mono-tech text-xs text-[var(--color-accent)]">{milestone.date}</span>
            ) : null}
            <h3 className="mt-1 text-lg font-medium text-[var(--color-ink)]">{milestone.title}</h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {milestone.detail}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
