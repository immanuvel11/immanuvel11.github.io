import { profile } from '@/data/profile';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function Resume() {
  return (
    <SectionShell id="resume">
      <SectionHeading index="07" title="Resume" />

      <div className="flex flex-col items-start justify-between gap-8 border border-[var(--color-border)] p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <p className="text-lg text-[var(--color-ink)]">Full CV — education, experience, and skills.</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">PDF, single page.</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button href={profile.resumePdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            View CV
          </Button>
          <Button href={profile.resumePdf} download variant="primary">
            Download CV
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
