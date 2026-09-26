import type { Project } from '@/data/projects';
import { ArchitectureChain } from '@/components/ui/ArchitectureChain';
import { ProjectVisual } from '@/components/ui/ProjectVisual';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';

export function ProjectCaseStudy({ project, reversed }: { project: Project; reversed?: boolean }) {
  return (
    <article className="grid grid-cols-1 gap-10 border-t border-[var(--color-border)] py-16 first:border-none first:pt-0 lg:grid-cols-2 lg:gap-16">
      <div className={cn('flex flex-col justify-center', reversed && 'lg:order-2')}>
        <ProjectVisual images={project.images} slug={project.slug} name={project.name} />
      </div>

      <div className={cn(reversed && 'lg:order-1')}>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">{project.name}</h3>
          <Tag>{project.status}</Tag>
        </div>
        <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{project.subtitle} — {project.role}</p>

        <p className="mt-6 text-base leading-relaxed text-[var(--color-ink)]">{project.problem}</p>

        <div className="mt-6">
          <h4 className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">Engineering approach</h4>
          <ul className="mt-3 space-y-2">
            {project.approach.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">System architecture</h4>
          <div className="mt-3">
            <ArchitectureChain steps={project.architecture} orientation="horizontal" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <p className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-relaxed text-[var(--color-ink)]">
          {project.result}
        </p>
      </div>
    </article>
  );
}
