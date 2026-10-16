import { useCallback, useMemo, useState } from 'react';
import { CATEGORY_LABELS, projects, type ProjectCategory } from '@/data/projects';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';

type Filter = 'all' | ProjectCategory;

const CATEGORY_ORDER: ProjectCategory[] = ['robotics', 'hardware', 'software', 'ai-ml', 'automation'];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Only offer a filter chip if at least one project actually has that tag.
  const filters = useMemo(() => {
    const used = new Set(projects.flatMap((project) => project.categories));
    return [
      { id: 'all' as const, label: 'All' },
      ...CATEGORY_ORDER.filter((category) => used.has(category)).map((category) => ({
        id: category,
        label: CATEGORY_LABELS[category],
      })),
    ];
  }, []);

  const visible = projects.filter((project) => filter === 'all' || project.categories.includes(filter));
  // The flagship card only makes sense when there are enough cards to build around it.
  const featuredSlug = visible.length >= 3 ? visible.find((project) => project.featured)?.slug : undefined;
  const openProject = projects.find((project) => project.slug === openSlug) ?? null;
  const closeModal = useCallback(() => setOpenSlug(null), []);

  return (
    <section id="projects" className="portfolio">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Projects"
          subtitle="Robots and automation systems I've designed, built and programmed — click any project for the full story."
        />

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              {filters.map((item) => (
                <li key={item.id} className={filter === item.id ? 'filter-active' : undefined}>
                  <button type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pcard-grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.slug === featuredSlug}
              onOpen={() => setOpenSlug(project.slug)}
            />
          ))}
        </div>
      </div>

      {openProject ? <ProjectModal project={openProject} onClose={closeModal} /> : null}
    </section>
  );
}
