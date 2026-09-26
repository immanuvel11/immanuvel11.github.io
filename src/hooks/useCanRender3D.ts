import { useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    );
  } catch {
    return false;
  }
}

/** Gates the 3D hero: off for reduced-motion preference or no WebGL support. */
export function useCanRender3D(): boolean {
  const reducedMotion = useReducedMotion();
  const [supportsWebGL] = useState(hasWebGL);

  return supportsWebGL && !reducedMotion;
}
