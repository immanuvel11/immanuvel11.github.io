import { Canvas } from '@react-three/fiber';
import { HeroScene } from './HeroScene';

interface HeroCanvasProps {
  /** When false, the render loop is fully paused (hero scrolled off screen). */
  active?: boolean;
}

export function HeroCanvas({ active = true }: HeroCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [2.6, 1.4, 4.4], fov: 38 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
    >
      <HeroScene />
    </Canvas>
  );
}

export default HeroCanvas;
