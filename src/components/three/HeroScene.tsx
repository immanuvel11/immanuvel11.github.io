import { Grid } from '@react-three/drei';
import { CameraRig } from './CameraRig';
import { QuadrupedRig } from './QuadrupedRig';
import { rigColors } from './materials';

export function HeroScene() {
  return (
    <>
      <color attach="background" args={['#0b0c0e']} />
      <fog attach="fog" args={['#0b0c0e', 5, 11]} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#a8bcc9" />
      <pointLight position={[0, 1.6, 2.5]} intensity={0.5} color="#d98a3d" />

      <Grid
        position={[0, 0, 0]}
        args={[20, 20]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor={rigColors.limb}
        sectionSize={2.5}
        sectionThickness={1}
        sectionColor={rigColors.ground}
        fadeDistance={9}
        fadeStrength={1.5}
        infiniteGrid
      />

      <CameraRig>
        <QuadrupedRig />
      </CameraRig>
    </>
  );
}
