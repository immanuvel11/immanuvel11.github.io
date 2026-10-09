import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="About" />

        <div className="row mt-md-5">
          <div className="col-lg-4">
            <img
              src={profile.portrait}
              className="img-fluid img-thumbnail shadow-lg portrait"
              alt="Portrait of Immanuvel M"
              loading="lazy"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{profile.headline}</h3>
            <div className="row mt-3">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                    <strong>GitHub:</strong>{' '}
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      {profile.githubHandle}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                    <strong>City:</strong> {profile.location}
                  </li>
                  <li>
                    <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                    <strong>Degree:</strong> {profile.degree}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-justify">{profile.summary}</p>
              <p className="text-justify">
                Currently studying at {profile.school}, 2024 – 2028.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
