import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Looping typewriter text; renders the first string statically for reduced-motion users. */
export function TypedText({ strings }: { strings: readonly string[] }) {
  const target = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !target.current) return;
    const typed = new Typed(target.current, {
      strings: [...strings],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, [reducedMotion, strings]);

  return (
    <span className="typed" ref={target}>
      {reducedMotion ? strings[0] : null}
    </span>
  );
}
