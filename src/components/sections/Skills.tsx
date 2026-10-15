import { skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SkillIconView } from '@/components/ui/SkillIconView';

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Skills"
          subtitle="Tools and techniques from my robotics, embedded and AI projects."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.id}
              className={`skill-card skill-card--${group.id}${group.featured ? ' is-featured' : ''}`}
              aria-labelledby={`skills-${group.id}`}
            >
              <header className="skill-card-head">
                <span className="skill-card-icon" aria-hidden="true">
                  <i className={`bx ${group.icon}`} />
                </span>
                <div className="skill-card-heading">
                  <h3 id={`skills-${group.id}`}>{group.title}</h3>
                  {group.tagline ? <p>{group.tagline}</p> : null}
                </div>
                <span className="skill-card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </header>

              <ul className="skill-chips">
                {group.skills.map((skill) => (
                  <li
                    key={skill.label}
                    className={`skill-chip${skill.early ? ' is-early' : ''}`}
                    title={skill.early ? 'Used in an in-progress prototype' : undefined}
                  >
                    <span className="skill-chip-icon">
                      <SkillIconView icon={skill.icon} label={skill.label} />
                    </span>
                    <span className="skill-chip-label">{skill.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="skills-legend">
          <span className="skills-legend-swatch" aria-hidden="true" />
          Dashed outline: used so far in in-progress prototypes (digital twin, AR) using synthetic
          data.
        </p>
      </div>
    </section>
  );
}
