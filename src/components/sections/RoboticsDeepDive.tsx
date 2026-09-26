import { projects } from '@/data/projects';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArchitectureChain } from '@/components/ui/ArchitectureChain';
import { ProjectVisual } from '@/components/ui/ProjectVisual';

const genesis = projects.find((p) => p.slug === 'genesis')!;

export function RoboticsDeepDive() {
  return (
    <SectionShell id="robotics" className="bg-[var(--color-surface)]/40">
      <SectionHeading
        index="03"
        title="Robotics — GENESIS"
        description="A closer look at how the quadruped goes from mechanical structure to coordinated locomotion."
      />

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h3 className="font-mono-tech text-xs uppercase text-[var(--color-ink-faint)]">Control chain</h3>
          <div className="mt-6">
            <ArchitectureChain steps={genesis.architecture} orientation="vertical" />
          </div>
        </div>

        <div>
          <ProjectVisual images={genesis.images.slice(0, 1)} slug={genesis.slug} name={genesis.name} />
          <p className="font-mono-tech mt-4 text-[11px] text-[var(--color-ink-faint)]">
            The hero visualization on this page is a procedural rig proportioned on GENESIS's real
            link lengths — not a rendered import of the physical robot. A rotatable CAD/GLB view will
            replace it here once a web-ready model exists.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
