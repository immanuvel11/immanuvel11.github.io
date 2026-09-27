import { projects } from '@/data/projects';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCaseStudy } from './ProjectCaseStudy';

export function Projects() {
  return (
    <SectionShell id="projects" scrim>
      <SectionHeading
        index="02"
        title="Projects"
        description="Three systems that took me from mechanical design through embedded control to a working machine."
      />

      <div>
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.slug} project={project} reversed={index % 2 === 1} />
        ))}
      </div>
    </SectionShell>
  );
}
