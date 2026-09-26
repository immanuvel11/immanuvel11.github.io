import { useEffect, useState } from 'react';

function getQuery() {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => getQuery().matches);

  useEffect(() => {
    const query = getQuery();
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  return reduced;
}
