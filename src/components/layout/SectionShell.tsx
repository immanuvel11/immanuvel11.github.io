import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  /** Marks this section as a chapter of the scroll-driven 3D story (see StoryScroll). */
  chapter?: string;
  /** Frosted dark scrim over the persistent 3D layer, for sections that sit inside the story range. */
  scrim?: boolean;
}

export function SectionShell({ id, children, className, bordered = true, chapter, scrim = false }: SectionShellProps) {
  return (
    <section
      id={id}
      data-story-chapter={chapter}
      className={cn(
        'scroll-mt-20 py-24 sm:py-32',
        bordered && 'border-t border-[var(--color-border)]',
        scrim && 'bg-[var(--color-bg)]/80 backdrop-blur-[2px]',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
