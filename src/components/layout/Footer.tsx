import { profile } from '@/data/profile';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>{profile.name}</h3>
        <SocialLinks />
        <div className="credits">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </div>
      </div>
    </footer>
  );
}
