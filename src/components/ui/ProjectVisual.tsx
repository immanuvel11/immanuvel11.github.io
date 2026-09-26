interface ProjectVisualProps {
  images: string[];
  slug: string;
  name: string;
}

/**
 * Renders the project's real photo when one exists at public/projects/<slug>/.
 * Otherwise shows a plain, honest placeholder — a drawing-sheet frame, not a
 * decorative gradient — so nothing implies a visual that doesn't exist yet.
 */
export function ProjectVisual({ images, slug, name }: ProjectVisualProps) {
  if (images.length > 0) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
        <img
          src={`/projects/${slug}/${images[0]}`}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface)]">
      <CornerMarks />
      <span className="font-mono-tech px-6 text-center text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
        Visual pending — project photos to be added
      </span>
    </div>
  );
}

function CornerMarks() {
  const corner = 'absolute h-3 w-3 border-[var(--color-border-strong)]';
  return (
    <>
      <span className={`${corner} left-2 top-2 border-l border-t`} />
      <span className={`${corner} right-2 top-2 border-r border-t`} />
      <span className={`${corner} bottom-2 left-2 border-b border-l`} />
      <span className={`${corner} bottom-2 right-2 border-b border-r`} />
    </>
  );
}
