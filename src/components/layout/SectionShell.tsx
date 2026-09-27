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
        // `relative z-10`: a position:fixed element paints above static
        // in-flow content regardless of DOM order or background color, so
        // every section needs its own stacking context to sit above the
        // story's persistent canvas (z-0) — not just an opaque background.
        'relative z-10 scroll-mt-20 py-24 sm:py-32',
        bordered && 'border-t border-[var(--color-border)]',
        scrim ? 'bg-[var(--color-bg)]/80 backdrop-blur-[2px]' : 'bg-[var(--color-bg)]',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
