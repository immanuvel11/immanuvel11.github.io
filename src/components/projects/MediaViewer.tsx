import { useState } from 'react';
import type { Project } from '@/data/projects';
import { galleryAsset, projectAsset } from '@/lib/assets';

type MediaItem =
  | { type: 'image'; src: string; thumb: string; caption?: string }
  | { type: 'video'; src: string; thumb: string; poster: string; caption?: string }
  | { type: 'pending'; caption: string };

function buildItems(project: Project): MediaItem[] {
  const images = project.images.map(
    (file): MediaItem => ({
      type: 'image',
      src: projectAsset(project.slug, file),
      thumb: projectAsset(project.slug, file),
    }),
  );
  const videos = (project.videos ?? []).map(
    (video): MediaItem => ({
      type: 'video',
      src: projectAsset(project.slug, video.file),
      thumb: projectAsset(project.slug, video.poster),
      poster: projectAsset(project.slug, video.poster),
      caption: video.caption,
    }),
  );
  // Screenshot slots: the real image if it has been added, else a labelled placeholder.
  const gallery = (project.gallery ?? [])
    .map((shot): MediaItem => {
      const url = galleryAsset(project.slug, shot.name);
      return url
        ? { type: 'image', src: url, thumb: url, caption: shot.caption }
        : { type: 'pending', caption: shot.caption };
    })
    // Unfinished slots are a to-do list for local development, not for visitors.
    .filter((item) => item.type !== 'pending' || import.meta.env.DEV);
  return [...images, ...gallery, ...videos];
}

/** Photo + video gallery with previous/next controls and a thumbnail strip. */
export function MediaViewer({ project }: { project: Project }) {
  const items = buildItems(project);
  const [index, setIndex] = useState(0);

  if (items.length === 0) {
    return (
      <div className="pm-placeholder">
        <i className={`bx ${project.placeholderIcon ?? 'bx-cube-alt'}`} aria-hidden="true" />
        <p>Photos and demo will be added as this project progresses.</p>
      </div>
    );
  }

  const active = items[index];
  const step = (delta: number) => setIndex((current) => (current + delta + items.length) % items.length);
  const caption = active.caption;

  return (
    <div>
      <div className={`mv-main${active.type === 'pending' ? ' is-pending' : ''}`}>
        {active.type === 'image' ? (
          <img src={active.src} alt={active.caption ?? `${project.name} — photo ${index + 1}`} />
        ) : active.type === 'video' ? (
          <video key={active.src} src={active.src} poster={active.poster} controls preload="none">
            <track kind="captions" />
          </video>
        ) : (
          <div className="mv-pending">
            <i className="bx bx-image" aria-hidden="true" />
            <p>Screenshot coming soon</p>
          </div>
        )}

        {items.length > 1 ? (
          <>
            <button type="button" className="mv-nav mv-prev" aria-label="Previous" onClick={() => step(-1)}>
              <i className="bx bx-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" className="mv-nav mv-next" aria-label="Next" onClick={() => step(1)}>
              <i className="bx bx-chevron-right" aria-hidden="true" />
            </button>
            <span className="mv-count">
              {index + 1} / {items.length}
            </span>
          </>
        ) : null}
      </div>

      {caption ? <p className="mv-caption">{caption}</p> : null}

      {items.length > 1 ? (
        <div className="mv-thumbs">
          {items.map((item, itemIndex) => (
            <button
              key={item.type === 'pending' ? `pending-${itemIndex}` : item.src}
              type="button"
              className={`mv-thumb${itemIndex === index ? ' active' : ''}${item.type === 'pending' ? ' is-pending' : ''}`}
              aria-label={
                item.type === 'pending' ? `Show ${item.caption} (coming soon)` : `Show ${item.type} ${itemIndex + 1}`
              }
              aria-current={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            >
              {item.type === 'pending' ? (
                <i className="bx bx-image" aria-hidden="true" />
              ) : (
                <img src={item.thumb} alt="" loading="lazy" />
              )}
              {item.type === 'video' ? <i className="bx bx-play-circle" aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}

      {project.galleryNote ? <p className="mv-note">{project.galleryNote}</p> : null}
    </div>
  );
}
