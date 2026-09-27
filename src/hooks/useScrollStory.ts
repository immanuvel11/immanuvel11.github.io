import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ChapterId, StoryProgress } from '@/components/three/storyContext';

gsap.registerPlugin(ScrollTrigger);

const CHAPTER_IDS: ChapterId[] = ['hero', 'about', 'genesis', 'tifan', 'kira', 'robotics'];

/**
 * Drives the cinematic 3D story from scroll position. Chapter + local
 * progress are written into a ref every scroll tick (read by R3F components
 * inside useFrame, never via React state, so scrolling never triggers a
 * React re-render). `chapter` is also mirrored into state, but only updated
 * when it actually changes, for the DOM HUD to react to.
 */
export function useScrollStory() {
  const progressRef = useRef<StoryProgress>({ chapter: 'hero', t: 0, global: 0 });
  const [chapter, setChapter] = useState<ChapterId>('hero');

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      CHAPTER_IDS.forEach((id) => {
        const el = document.querySelector<HTMLElement>(`[data-story-chapter="${id}"]`);
        if (!el) return;

        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            onUpdate: (self) => {
              if (!self.isActive) return;
              progressRef.current.chapter = id;
              progressRef.current.t = self.progress;
              setChapter((prev) => (prev === id ? prev : id));
            },
            onToggle: (self) => {
              if (self.isActive) {
                progressRef.current.chapter = id;
                progressRef.current.t = self.progress;
                setChapter((prev) => (prev === id ? prev : id));
              }
            },
          }),
        );
      });

      const first = document.querySelector<HTMLElement>('[data-story-chapter="hero"]');
      const last = document.querySelector<HTMLElement>('[data-story-chapter="robotics"]');
      if (first && last) {
        triggers.push(
          ScrollTrigger.create({
            trigger: first,
            start: 'top top',
            endTrigger: last,
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              progressRef.current.global = self.progress;
            },
          }),
        );
      }
    });

    return () => {
      ctx.revert();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return { progressRef, chapter };
}
