import { profile } from '@/data/profile';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-xs text-[var(--color-ink-faint)] sm:flex-row sm:items-center">
        <p className="font-mono-tech">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
