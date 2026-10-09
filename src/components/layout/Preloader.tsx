import { useEffect, useState } from 'react';

/** White spinner overlay that fades out once the page has loaded. */
export function Preloader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      timer = setTimeout(() => setPhase('fading'), 100);
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
    }
    return () => {
      window.removeEventListener('load', start);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      id="preloader"
      className={phase === 'fading' ? 'fading' : undefined}
      role="status"
      aria-label="Loading"
      onTransitionEnd={() => setPhase('gone')}
    />
  );
}
