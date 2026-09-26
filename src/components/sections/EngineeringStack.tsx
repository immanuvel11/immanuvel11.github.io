import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { SectionShell } from '@/components/layout/SectionShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

export function EngineeringStack() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <SectionShell id="skills">
      <SectionHeading
        index="04"
        title="Engineering Stack"
        description="The languages, hardware, and tools I use to move a project from idea to a working physical system."
      />

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex shrink-0 flex-row gap-2 overflow-x-auto lg:w-56 lg:flex-col lg:gap-1 lg:overflow-visible">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={cn(
                'whitespace-nowrap border-l-2 px-4 py-3 text-left text-sm transition-colors duration-150',
                category.id === activeId
                  ? 'border-[var(--color-accent)] bg-[var(--color-surface)] text-[var(--color-ink)]'
                  : 'border-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="min-h-[160px] flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              {active.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono-tech border border-[var(--color-border-strong)] px-4 py-2 text-sm text-[var(--color-ink)]"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
