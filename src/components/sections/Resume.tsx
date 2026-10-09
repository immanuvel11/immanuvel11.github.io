import { education, experience, extracurricular, leadership, type ResumeColumn } from '@/data/resume';
import { SectionTitle } from '@/components/ui/SectionTitle';

function ResumeGroup({ column }: { column: ResumeColumn }) {
  return (
    <>
      <h3 className="resume-title">{column.heading}</h3>
      {column.entries.map((entry) => (
        <div className="resume-item" key={`${entry.title}-${entry.period}`}>
          <h4>{entry.title}</h4>
          <h5>{entry.period}</h5>
          {entry.place ? <p className="font-italic">{entry.place}</p> : null}
          {entry.description ? <p>{entry.description}</p> : null}
          {entry.bullets ? (
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </>
  );
}

export function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Resume" />

        <div className="row">
          <div className="col-lg-6">
            <ResumeGroup column={experience} />
            <ResumeGroup column={leadership} />
          </div>
          <div className="col-lg-6">
            <ResumeGroup column={education} />
            <ResumeGroup column={extracurricular} />
          </div>
        </div>
      </div>
    </section>
  );
}
