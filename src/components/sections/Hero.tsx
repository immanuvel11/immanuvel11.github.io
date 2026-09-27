import { profile } from '@/data/profile';
import { useCanRender3D } from '@/hooks/useCanRender3D';
import { Button } from '@/components/ui/Button';
import { HeroFallback } from '@/components/three/HeroFallback';

export function Hero() {
  const canRender3D = useCanRender3D();

  return (
    <section
      id="top"
      data-story-chapter="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* The persistent 3D story layer (StoryScroll) renders behind this whole
          section and beyond; this is only the static fallback for when it's
          unavailable (no WebGL / reduced motion). */}
      {!canRender3D ? (
        <div className="absolute inset-0">
          <HeroFallback />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent sm:via-[var(--color-bg)]/15" />

      <div className="relative mx-auto flex w-full max-w-[var(--container-content)] flex-1 flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-24">
        <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {profile.kicker}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-ink)] text-balance sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)] sm:text-xl">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href={profile.resumePdf} variant="secondary" download>
            Download CV
          </Button>
        </div>

        <p className="font-mono-tech mt-12 text-[11px] text-[var(--color-ink-faint)]">
          Procedural visualization, proportioned on GENESIS (12-DOF quadruped) — not an imported CAD model.
        </p>
      </div>
    </section>
  );
}
