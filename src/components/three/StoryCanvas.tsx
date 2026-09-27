import { Canvas } from '@react-three/fiber';
import { StoryScene } from './StoryScene';

interface StoryCanvasProps {
  /** When false, the render loop is fully paused (story range scrolled off screen). */
  active?: boolean;
}

export function StoryCanvas({ active = true }: StoryCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [2.6, 1.4, 4.4], fov: 38 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
    >
      <StoryScene />
    </Canvas>
  );
}

export default StoryCanvas;
