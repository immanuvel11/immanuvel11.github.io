import { createContext, useContext, type MutableRefObject } from 'react';

export type ChapterId = 'hero' | 'about' | 'genesis' | 'tifan' | 'kira' | 'robotics';

export interface StoryProgress {
  /** Which section is currently driving the scene. */
  chapter: ChapterId;
  /** 0..1 progress through that chapter's own scroll range. */
  t: number;
  /** 0..1 progress across the entire Hero→Robotics story, used for the camera path. */
  global: number;
}

/**
 * A ref (not React state) so R3F components can read scroll progress inside
 * useFrame every frame without triggering React re-renders on scroll.
 */
export const StoryProgressContext = createContext<MutableRefObject<StoryProgress> | null>(null);

export function useStoryProgressRef() {
  const ctx = useContext(StoryProgressContext);
  if (!ctx) {
    throw new Error('useStoryProgressRef must be used within <StoryScroll>');
  }
  return ctx;
}
