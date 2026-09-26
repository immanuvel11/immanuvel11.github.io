import { useState } from 'react';
import { cn } from '@/lib/utils';

interface VideoAsset {
  file: string;
  poster: string;
}

interface ProjectVisualProps {
  images: string[];
  videos?: VideoAsset[];
  slug: string;
  name: string;
}

type MediaItem =
  | { type: 'image'; src: string; thumb: string }
  | { type: 'video'; src: string; poster: string; thumb: string };

/**
 * Renders the project's real photos/videos when they exist at
 * public/projects/<slug>/, as a featured item with a thumbnail strip.
 * Otherwise shows a plain, honest placeholder — a drawing-sheet frame, not a
 * decorative gradient — so nothing implies a visual that doesn't exist yet.
 */
export function ProjectVisual({ images, videos = [], slug, name }: ProjectVisualProps) {
  const base = `/projects/${slug}`;
  const items: MediaItem[] = [
    ...images.map((img): MediaItem => ({ type: 'image', src: `${base}/${img}`, thumb: `${base}/${img}` })),
    ...videos.map((v): MediaItem => ({
      type: 'video',
      src: `${base}/${v.file}`,
      poster: `${base}/${v.poster}`,
      thumb: `${base}/${v.poster}`,
    })),
  ];

  const [selected, setSelected] = useState(0);

  if (items.length === 0) {
    return (
      <div className="relative flex aspect-[4/3] w-full items-center justify-center border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface)]">
        <CornerMarks />
        <span className="font-mono-tech px-6 text-center text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
          Visual pending — project photos to be added
        </span>
      </div>
    );
  }

  const active = items[selected];

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
        {active.type === 'image' ? (
          <img src={active.src} alt={name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <video
            key={active.src}
            src={active.src}
            poster={active.poster}
            controls
            preload="none"
            className="h-full w-full object-cover"
          >
            <track kind="captions" />
          </video>
        )}
      </div>

      {items.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show ${item.type} ${index + 1}`}
              className={cn(
                'relative h-14 w-20 shrink-0 overflow-hidden border transition-opacity',
                index === selected
                  ? 'border-[var(--color-accent)]'
                  : 'border-[var(--color-border)] opacity-60 hover:opacity-100',
              )}
            >
              <img src={item.thumb} alt="" className="h-full w-full object-cover" loading="lazy" />
              {item.type === 'video' ? (
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
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
