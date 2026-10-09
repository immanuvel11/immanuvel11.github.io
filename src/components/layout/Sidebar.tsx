import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: 'bx-home' },
  { id: 'about', label: 'About', icon: 'bx-user' },
  { id: 'skills', label: 'Skills', icon: 'bx-chip' },
  { id: 'resume', label: 'Resume', icon: 'bx-file-blank' },
  { id: 'projects', label: 'Projects', icon: 'bx-bot' },
  { id: 'achievements', label: 'Achievements', icon: 'bx-trophy' },
  { id: 'contact', label: 'Contact', icon: 'bx-envelope' },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_IDS);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', open);
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (headerRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.body.classList.remove('mobile-nav-active');
    };
  }, [open]);

  const goTo = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    setOpen(false);
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav-toggle d-xl-none"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} aria-hidden="true" />
      </button>

      <header id="header" ref={headerRef} className="d-flex flex-column justify-content-center">
        <nav className="nav-menu" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={active === item.id ? 'active' : undefined}>
                <a href={`#${item.id}`} onClick={(event) => goTo(event, item.id)}>
                  <i className={`bx ${item.icon}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
