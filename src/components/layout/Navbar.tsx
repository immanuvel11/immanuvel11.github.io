import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { navLinks } from './navLinks';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono-tech text-sm tracking-wide text-[var(--color-ink)]"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name.toUpperCase()}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-full bg-[var(--color-ink)] transition-transform duration-200',
                menuOpen && 'translate-y-[6.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 bottom-0 h-px w-full bg-[var(--color-ink)] transition-transform duration-200',
                menuOpen && '-translate-y-[6.5px] -rotate-45',
              )}
            />
          </span>
        </button>
      </Container>

      {menuOpen ? (
        <nav className="flex flex-col border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[var(--color-border)] py-4 text-base text-[var(--color-ink)] first:pt-0 last:border-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
