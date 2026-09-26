import { education, profile } from '@/data/profile';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading index="01" title="About" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <p className="max-w-2xl text-xl leading-relaxed text-[var(--color-ink)] text-balance sm:text-2xl">
          {profile.summary}
        </p>

        <dl className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] pt-6 sm:grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <dt className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">Education</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              <span className="text-[var(--color-ink)]">{education.degree}</span>
              <br />
              {education.institution}
              <br />
              {education.affiliation}
              <br />
              <span className="font-mono-tech">{education.duration}</span>
            </dd>
          </div>
          <div>
            <dt className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">Based in</dt>
            <dd className="mt-2 text-sm text-[var(--color-ink-muted)]">{profile.location}</dd>
          </div>
        </dl>
      </div>
    </SectionShell>
  );
}
