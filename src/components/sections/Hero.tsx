import { profile } from '@/data/profile';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TypedText } from '@/components/ui/TypedText';

export function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="40">
        <h1>{profile.displayName}</h1>
        <p>
          <TypedText strings={profile.typedItems} />
        </p>
        <SocialLinks />
        <div className="mt-4">
          <a href={profile.resumePdf} download className="btn btn-outline-primary mb-2 rounded-pill">
            <i className="bx bxs-download" aria-hidden="true" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
