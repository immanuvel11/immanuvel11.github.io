import type { SkillIcon } from '@/data/skills';

export function SkillIconView({ icon, label }: { icon: SkillIcon; label: string }) {
  if (icon.kind === 'brand') {
    return (
      <svg role="img" aria-label={label} viewBox="0 0 24 24" fill={`#${icon.icon.hex}`}>
        <path d={icon.icon.path} />
      </svg>
    );
  }
  if (icon.kind === 'image') {
    return <img src={icon.src} alt={label} loading="lazy" />;
  }
  return <i className={`bx ${icon.name}`} aria-hidden="true" />;
}
