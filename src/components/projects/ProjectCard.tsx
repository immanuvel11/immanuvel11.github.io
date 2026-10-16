import { useRef, useState } from 'react';
import { CATEGORY_LABELS, type Project } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { galleryAsset, projectAsset } from '@/lib/assets';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onOpen: () => void;
}

export function ProjectCard({ project, featured = false, onOpen }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  const coverFile = project.cover?.file ?? project.images[0];
  // Screenshot-based projects use the first screenshot that has been added.
  const galleryCover = project.gallery
    ?.map((shot) => galleryAsset(project.slug, shot.name))
    .find((url) => url !== undefined);
  const coverSrc = coverFile ? projectAsset(project.slug, coverFile) : galleryCover;
  const coverPosition = project.cover?.position ?? project.coverPosition;
  const tags = (project.tags ?? project.categories.map((category) => CATEGORY_LABELS[category])).join(' · ');
  const ribbon = project.inProgress ? 'In progress' : (project.cardBadge ?? (featured ? 'Featured' : undefined));
  const chips = project.technologies.slice(0, featured ? 6 : 4);

  // Short muted preview loop, only on devices that really hover (not touch),
  // never under reduced motion, and only fetched the first time it is needed.
  const preview = project.videos?.find((video) => video.preview) ?? project.videos?.[0];
  const canPreview = Boolean(preview) && !reducedMotion;

  const startPreview = () => {
    const video = videoRef.current;
    if (!canPreview || !preview || !video) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (!video.getAttribute('src')) video.src = projectAsset(project.slug, preview.file);
    video
      .play()
      .then(() => setPreviewing(true))
      .catch(() => setPreviewing(false));
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPreviewing(false);
  };

  return (
    <article
      className={`pcard${featured ? ' is-featured' : ''}${previewing ? ' is-previewing' : ''}`}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') startPreview();
      }}
      onPointerLeave={stopPreview}
    >
      <div className="pcard-media">
        {coverSrc ? (
          <img
            src={coverSrc}
            alt=""
            loading="lazy"
            style={coverPosition ? { objectPosition: coverPosition } : undefined}
          />
        ) : (
          <div className="pcard-placeholder" aria-hidden="true">
            <i className={`bx ${project.placeholderIcon ?? 'bx-cube-alt'}`} />
          </div>
        )}

        {canPreview ? (
          <video ref={videoRef} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />
        ) : null}

        <div className="pcard-shade" aria-hidden="true" />

        {ribbon ? <span className="pcard-badge">{ribbon}</span> : null}

        <div className="pcard-title">
          <h4>{project.name}</h4>
          <p>{tags}</p>
        </div>

        {canPreview ? <i className="bx bx-play-circle pcard-play" aria-hidden="true" /> : null}

        <div className="pcard-actions">
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard-code"
              aria-label={`${project.name} source code on GitHub`}
            >
              <i className="bx bxl-github" aria-hidden="true" />
            </a>
          ) : null}
          <span className="pcard-cta" aria-hidden="true">
            View details <i className="bx bx-plus" />
          </span>
        </div>

        <button
          type="button"
          className="pcard-open"
          aria-label={`Open ${project.name} details`}
          aria-haspopup="dialog"
          onClick={onOpen}
          onFocus={startPreview}
          onBlur={stopPreview}
        />
      </div>

      <div className="pcard-body">
        <p className="pcard-summary">{project.summary}</p>
        <ul className="pcard-chips">
          {chips.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
