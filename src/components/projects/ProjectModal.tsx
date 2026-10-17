import { useEffect, useRef } from 'react';
import { CATEGORY_LABELS, type Project } from '@/data/projects';
import { MediaViewer } from './MediaViewer';

const FOCUSABLE = 'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add('modal-open');
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const categories = project.tags ?? project.categories.map((category) => CATEGORY_LABELS[category]);

  return (
    <div
      className="pm-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="pm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="pm-close" aria-label="Close project details" onClick={onClose}>
          <i className="bx bx-x" aria-hidden="true" />
        </button>

        <div className="pm-body">
          <MediaViewer project={project} />

          <div className="pm-info">
            <h3 id="pm-title">{project.name}</h3>
            <p className="pm-subtitle">{project.subtitle}</p>

            <div className="pm-badges">
              <span className={`pm-badge${project.inProgress ? ' pm-badge-progress' : ''}`}>{project.status}</span>
              {project.role ? <span className="pm-badge">{project.role}</span> : null}
              {categories.map((label) => (
                <span key={label} className="pm-badge">
                  {label}
                </span>
              ))}
            </div>

            {project.sections?.map((section) => (
              <div key={section.heading}>
                <h5>{section.heading}</h5>
                {section.text ? <p>{section.text}</p> : null}
                {section.bullets ? (
                  <ul className="pm-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {project.problem ? (
              <>
                <h5>The problem</h5>
                <p>{project.problem}</p>
              </>
            ) : null}

            {project.approach ? (
              <>
                <h5>Engineering approach</h5>
                <ul className="pm-list">
                  {project.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {project.architecture ? (
              <>
                <h5>System architecture</h5>
                <ol className="arch-chain">
                  {project.architecture.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{step}</span>
                      {stepIndex < project.architecture!.length - 1 ? (
                        <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </>
            ) : null}

            {project.metrics ? (
              <>
                <h5>Results</h5>
                <dl className="pm-metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="pm-metric">
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                {project.metricsNote ? <p className="pm-metrics-note">{project.metricsNote}</p> : null}
              </>
            ) : null}

            <h5>{project.techHeading ?? 'Technologies'}</h5>
            <div className="pm-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {project.result ? (
              <>
                <h5>{project.inProgress ? 'Status' : 'Result'}</h5>
                <div className="pm-result">{project.result}</div>
              </>
            ) : null}

            {project.roleDetail ? (
              <>
                <h5>My role</h5>
                <p>{project.roleDetail}</p>
              </>
            ) : null}

            {project.codeUrl ? (
              <div className="mt-4">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-pill"
                >
                  <i className="bx bxl-github" aria-hidden="true" /> View Code
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
