import { profile } from '@/data/profile';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TypedText } from '@/components/ui/TypedText';

/** Decorative blueprint backdrop: a faint grid plus a servo dial and a two-link arm sketch. */
function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid" />
      <svg className="hero-dial" viewBox="0 0 600 600" fill="none" stroke="currentColor">
        <g className="hero-ring hero-ring-slow">
          <circle cx="300" cy="300" r="284" strokeWidth="1.5" strokeDasharray="2 9" />
          <circle cx="300" cy="300" r="252" strokeWidth="2" strokeDasharray="36 16" />
        </g>
        <g className="hero-ring hero-ring-reverse">
          <circle cx="300" cy="300" r="206" strokeWidth="1.5" strokeDasharray="6 8" />
        </g>
        <circle cx="300" cy="300" r="156" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="96" strokeWidth="1.5" />
        <line x1="24" y1="300" x2="576" y2="300" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="300" y1="24" x2="300" y2="576" strokeWidth="1" strokeDasharray="4 6" />

        {/* two-link arm: base, shoulder joint, tool tip */}
        <g className="hero-arm">
          <polyline points="300,300 408,196 504,282" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 352 300 A 52 52 0 0 0 337 263" strokeWidth="2" />
          <circle cx="300" cy="300" r="12" fill="#fff" strokeWidth="3" />
          <circle cx="408" cy="196" r="9" fill="#fff" strokeWidth="3" />
          <circle cx="504" cy="282" r="7" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <HeroBackdrop />
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
