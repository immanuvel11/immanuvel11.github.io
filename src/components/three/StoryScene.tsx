import { Grid } from '@react-three/drei';
import { StoryCameraRig } from './StoryCameraRig';
import { QuadrupedRig } from './QuadrupedRig';
import { TifanRig } from './TifanRig';
import { KiraRig } from './KiraRig';
import { rigColors } from './materials';

export function StoryScene() {
  return (
    <>
      <color attach="background" args={['#0b0c0e']} />
      <fog attach="fog" args={['#0b0c0e', 5, 13]} />

      <ambientLight intensity={0.95} />
      <directionalLight position={[3, 5, 2]} intensity={3} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={1.1} color="#c3d4de" />
      <pointLight position={[0, 1.6, 2.5]} intensity={0.8} color="#d98a3d" />

      <Grid
        args={[40, 40]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor={rigColors.limb}
        sectionSize={2.5}
        sectionThickness={1}
        sectionColor={rigColors.ground}
        fadeDistance={10}
        fadeStrength={1.5}
        infiniteGrid
      />

      <QuadrupedRig />
      <TifanRig />
      <KiraRig />
      <StoryCameraRig />
    </>
  );
}
