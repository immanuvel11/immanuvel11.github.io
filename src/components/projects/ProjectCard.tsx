import { CATEGORY_LABELS, type Project } from '@/data/projects';
import { projectAsset } from '@/lib/assets';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const coverFile = project.cover?.file ?? project.images[0];
  const categories = project.categories.map((category) => CATEGORY_LABELS[category]).join(' · ');

  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        {coverFile ? (
          <img
            src={projectAsset(project.slug, coverFile)}
            alt=""
            loading="lazy"
            style={project.cover?.position ? { objectPosition: project.cover.position } : undefined}
          />
        ) : (
          <div className="portfolio-placeholder" aria-hidden="true">
            <i className={`bx ${project.placeholderIcon ?? 'bx-cube-alt'}`} />
          </div>
        )}

        {project.inProgress ? <span className="portfolio-status">In progress</span> : null}

        <div className="portfolio-info">
          <h4>{project.name}</h4>
          <p>{categories}</p>
          <div className="portfolio-links">
            <i className="bx bx-plus" aria-hidden="true" />
            {project.codeUrl ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
              >
                <i className="bx bxl-github" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="portfolio-open"
          aria-label={`Open ${project.name} details`}
          aria-haspopup="dialog"
          onClick={onOpen}
        />
      </div>

      <div className="portfolio-caption">
        <h5>{project.name}</h5>
        <p>{categories}</p>
        <p className="portfolio-summary">{project.summary}</p>
      </div>
    </div>
  );
}
