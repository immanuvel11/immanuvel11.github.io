import { Suspense, lazy, type ReactNode } from 'react';
import { useScrollStory } from '@/hooks/useScrollStory';
import { useCanRender3D } from '@/hooks/useCanRender3D';
import { useInView } from '@/hooks/useInView';
import { StoryProgressContext } from '@/components/three/storyContext';
import { SceneHUD } from '@/components/three/SceneHUD';

const StoryCanvas = lazy(() => import('@/components/three/StoryCanvas'));

/**
 * Wraps Hero..RoboticsDeepDive. Mounts a single fixed, full-viewport 3D
 * canvas behind that whole range, driven by scroll (see useScrollStory).
 * The canvas is only mounted while any part of this wrapper is on screen —
 * scrolled into Skills and beyond, it's gone entirely, same cost as today.
 */
export function StoryScroll({ children }: { children: ReactNode }) {
  const { progressRef, chapter } = useScrollStory();
  const canRender3D = useCanRender3D();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <StoryProgressContext.Provider value={progressRef}>
      <div ref={ref}>
        {canRender3D && inView ? (
          <Suspense fallback={null}>
            <div className="pointer-events-none fixed inset-0 z-0">
              <StoryCanvas />
            </div>
            <SceneHUD chapter={chapter} />
          </Suspense>
        ) : null}
        <div className="relative z-10">{children}</div>
      </div>
    </StoryProgressContext.Provider>
  );
}
