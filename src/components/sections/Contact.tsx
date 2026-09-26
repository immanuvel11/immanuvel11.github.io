import { profile } from '@/data/profile';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
];

export function Contact() {
  return (
    <SectionShell id="contact">
      <SectionHeading index="08" title="Contact" />

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-baseline justify-between border-b border-[var(--color-border)] pb-4"
          >
            <span className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">
              {link.label}
            </span>
            <span className="text-base text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent-strong)]">
              {link.value}
            </span>
          </a>
        ))}
        <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-4 sm:col-span-2">
          <span className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">Location</span>
          <span className="text-base text-[var(--color-ink)]">{profile.location}</span>
        </div>
      </div>
    </SectionShell>
  );
}
