import { profile } from '@/data/profile';

const links = [
  { label: 'GitHub', href: profile.github, icon: 'bxl-github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'bxl-linkedin' },
  { label: 'WhatsApp', href: profile.whatsapp, icon: 'bxl-whatsapp' },
  { label: 'Instagram', href: profile.instagram, icon: 'bxl-instagram' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'bx-mail-send' },
] as const;

export function SocialLinks() {
  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <i className={`bx ${link.icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
