import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import { Leg } from './Leg';
import { rigColors } from './materials';
import { useStoryProgressRef } from './storyContext';
import { computeGenesisState } from './genesisStory';

const BODY_LENGTH = 1.15;
const BODY_WIDTH = 0.55;
const BODY_HEIGHT = 0.22;

const legPositions: Array<{ position: [number, number, number]; mirrored: boolean; phase: number }> = [
  { position: [BODY_LENGTH / 2, -BODY_HEIGHT / 2, BODY_WIDTH / 2], mirrored: false, phase: 0 },
  { position: [BODY_LENGTH / 2, -BODY_HEIGHT / 2, -BODY_WIDTH / 2], mirrored: true, phase: 1.4 },
  { position: [-BODY_LENGTH / 2, -BODY_HEIGHT / 2, BODY_WIDTH / 2], mirrored: false, phase: 2.8 },
  { position: [-BODY_LENGTH / 2, -BODY_HEIGHT / 2, -BODY_WIDTH / 2], mirrored: true, phase: 4.2 },
];

export function QuadrupedRig() {
  const bodyRef = useRef<Group>(null);
  const progress = useStoryProgressRef();

  useFrame(({ clock }) => {
    const { chapter, t } = progress.current;
    const { explode } = computeGenesisState(chapter, t);
    const bob = Math.sin(clock.getElapsedTime() * 0.6) * 0.015;
    if (bodyRef.current) {
      bodyRef.current.position.y = 0.72 + bob + explode * 0.3;
    }
  });

  return (
    <group ref={bodyRef} position={[0, 0.72, 0]}>
      <mesh castShadow>
        <boxGeometry args={[BODY_LENGTH, BODY_HEIGHT, BODY_WIDTH]} />
        <meshStandardMaterial color={rigColors.body} metalness={0.55} roughness={0.4} />
      </mesh>

      {/* Status indicator — restrained use of the accent color */}
      <mesh position={[BODY_LENGTH / 2 - 0.08, 0.03, 0]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial
          color={rigColors.accent}
          emissive={rigColors.accent}
          emissiveIntensity={1.4}
        />
      </mesh>

      {legPositions.map((leg) => (
        <Leg key={`${leg.position.join(',')}`} {...leg} />
      ))}
    </group>
  );
}
