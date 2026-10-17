import { useEffect, useState } from 'react';

/**
 * White spinner overlay shown only until the page has first painted.
 * It deliberately does not wait for `window.load` (which also waits for every
 * image and font), so a slow connection sees content instead of a spinner.
 */
export function Preloader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    const frame = requestAnimationFrame(() => setPhase('fading'));
    // Safety net: if transitionend never fires (e.g. reduced motion), drop it.
    const fallback = setTimeout(() => setPhase('gone'), 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
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
