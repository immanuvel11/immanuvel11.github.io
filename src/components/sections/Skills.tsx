import { skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SkillIconView } from '@/components/ui/SkillIconView';

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Skills" />

        {skillGroups.map((group, index) => (
          <div key={group.id}>
            <h4 className={`font-weight-bold pb-3 ${index > 0 ? 'pt-4' : ''}`}>{group.title}</h4>
            {group.note ? <p className="skills-note">{group.note}</p> : null}
            <div className="row skills-content text-center">
              {group.skills.map((skill) => (
                <div key={skill.label} className="col-4 col-md-2">
                  <div className="skill-icon">
                    <SkillIconView icon={skill.icon} label={skill.label} />
                  </div>
                  <p className="skill">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
