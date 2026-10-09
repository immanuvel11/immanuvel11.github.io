import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Open to internships, projects and conversations about robotics." />

        <div className="row content justify-content-center">
          <div className="col-lg-5">
            <ul>
              <li>
                <i className="bx bx-envelope" aria-hidden="true" />
                <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <i className="bx bx-phone" aria-hidden="true" />
                <strong>Phone:</strong>{' '}
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <i className="bx bx-map" aria-hidden="true" />
                <strong>Location:</strong> {profile.location}
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul>
              <li>
                <i className="bx bxl-github" aria-hidden="true" />
                <strong>GitHub:</strong>{' '}
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  {profile.githubHandle}
                </a>
              </li>
              <li>
                <i className="bx bxl-linkedin" aria-hidden="true" />
                <strong>LinkedIn:</strong>{' '}
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  {profile.linkedinHandle}
                </a>
              </li>
              <li>
                <i className="bx bxl-instagram" aria-hidden="true" />
                <strong>Instagram:</strong>{' '}
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                  @immanuvel_11
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
