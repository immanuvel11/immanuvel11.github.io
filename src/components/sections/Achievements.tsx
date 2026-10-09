import { achievements } from '@/data/achievements';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Achievements" subtitle="Competitions and events I've taken part in." />

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          {achievements.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={`${item.title}-${item.event}`}>
              <div className="card bg-light achievement-card">
                <div className="icon">
                  <i className={`bx ${item.icon}`} aria-hidden="true" />
                </div>
                <h5>{item.title}</h5>
                <h6>{item.event}</h6>
                {item.detail ? <p className="mb-0 text-muted">{item.detail}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
