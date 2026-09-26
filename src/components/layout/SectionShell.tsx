import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export function SectionShell({ id, children, className, bordered = true }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 py-24 sm:py-32', bordered && 'border-t border-[var(--color-border)]', className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
