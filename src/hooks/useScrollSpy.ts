import { useEffect, useState } from 'react';

/**
 * Tracks which section is under a line `offset`px below the top of the
 * viewport (same behaviour as the original portfolio's nav highlighting).
 */
export function useScrollSpy(ids: readonly string[], offset = 300): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      const position = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (position >= top) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const frame = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, offset]);

  return active;
}
