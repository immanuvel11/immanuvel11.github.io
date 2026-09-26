import { achievements } from '@/data/achievements';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Achievements() {
  return (
    <SectionShell id="achievements" bordered={false}>
      <SectionHeading index="06" title="Achievements" />

      <ul className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
        {achievements.map((item) => (
          <li key={`${item.title}-${item.event}`} className="bg-[var(--color-bg)] p-6">
            <p className="text-base font-medium text-[var(--color-ink)]">{item.title}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{item.event}</p>
            {item.place ? (
              <p className="font-mono-tech mt-1 text-xs text-[var(--color-ink-faint)]">{item.place}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
