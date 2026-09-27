import type { ChapterId } from './storyContext';

export interface GenesisState {
  /** 0 = assembled, 1 = fully exploded (parts offset outward). */
  explode: number;
  /** 0..1 blend-in amount for the walk-cycle swing. */
  walkAmount: number;
  /** Radians — drives the leg-swing phase. Scroll-scrubbed, not clock-driven. */
  walkPhase: number;
}

/** Derives GENESIS's mechanical state purely from which chapter is active and how far through it we are. */
export function computeGenesisState(chapter: ChapterId, t: number): GenesisState {
  if (chapter === 'about') {
    return { explode: t, walkAmount: 0, walkPhase: 0 };
  }
  if (chapter === 'genesis') {
    if (t < 0.3) {
      return { explode: 1 - t / 0.3, walkAmount: 0, walkPhase: 0 };
    }
    const walkT = (t - 0.3) / 0.7;
    return { explode: 0, walkAmount: Math.min(1, walkT * 4), walkPhase: walkT * Math.PI * 10 };
  }
  if (chapter === 'robotics') {
    return { explode: 0, walkAmount: 0.15, walkPhase: t * Math.PI * 4 };
  }
  return { explode: 0, walkAmount: 0, walkPhase: 0 };
}
