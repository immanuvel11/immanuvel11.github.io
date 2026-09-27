import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import { rigColors } from './materials';
import { useStoryProgressRef } from './storyContext';

// Procedural stand-in for TIFAN 2026's gantry + comb gripper + tray, placed
// alongside GENESIS in the same "showroom" the story camera dollies through.
export const TIFAN_WORLD_X = 3.4;

const FINGER_COUNT = 5;
const TRAY_COLS = 6;

export function TifanRig() {
  const carriageRef = useRef<Group>(null);
  const fingerRefs = useRef<Array<Group | null>>([]);
  const progress = useStoryProgressRef();

  useFrame(() => {
    const { chapter, t } = progress.current;
    const cycle = chapter === 'tifan' ? t : 0;

    if (carriageRef.current) {
      carriageRef.current.position.x = -0.6 + cycle * 1.2;
      carriageRef.current.position.y = 0.9 - Math.max(0, Math.sin(cycle * Math.PI * 2)) * 0.12;
    }

    const curl = Math.max(0, Math.sin(cycle * Math.PI * 2)) * 0.7;
    fingerRefs.current.forEach((finger) => {
      if (finger) finger.rotation.x = -curl;
    });
  });

  const fingerOffsets = Array.from({ length: FINGER_COUNT }, (_, i) => (i - (FINGER_COUNT - 1) / 2) * 0.05);
  const trayOffsets = Array.from({ length: TRAY_COLS }, (_, i) => (i - (TRAY_COLS - 1) / 2) * 0.15);

  return (
    <group position={[TIFAN_WORLD_X, 0, 0]}>
      {/* Base platform */}
      <mesh position={[0, -0.02, 0]} receiveShadow>
        <boxGeometry args={[2.2, 0.04, 1]} />
        <meshStandardMaterial color={rigColors.body} metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Gantry posts */}
      {[-0.9, 0.9].map((x) => (
        <mesh key={x} position={[x, 0.6, -0.3]} castShadow>
          <boxGeometry args={[0.06, 1.2, 0.06]} />
          <meshStandardMaterial color={rigColors.limb} metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Gantry rail */}
      <mesh position={[0, 1.15, -0.3]} castShadow>
        <boxGeometry args={[1.9, 0.06, 0.06]} />
        <meshStandardMaterial color={rigColors.limb} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Carriage + comb gripper */}
      <group ref={carriageRef} position={[-0.6, 0.9, -0.3]}>
        <mesh castShadow>
          <boxGeometry args={[0.16, 0.1, 0.16]} />
          <meshStandardMaterial color={rigColors.joint} metalness={0.5} roughness={0.5} />
        </mesh>
        {fingerOffsets.map((x, i) => (
          <group
            key={x}
            position={[x, -0.05, 0]}
            ref={(el) => {
              fingerRefs.current[i] = el;
            }}
          >
            <mesh position={[0, -0.08, 0]} castShadow>
              <boxGeometry args={[0.02, 0.16, 0.03]} />
              <meshStandardMaterial color={rigColors.accent} metalness={0.3} roughness={0.5} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Seedling tray */}
      <group position={[0, 0.06, 0.25]}>
        {trayOffsets.map((x) => (
          <mesh key={x} position={[x, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.04, 0.08, 10]} />
            <meshStandardMaterial color={rigColors.joint} metalness={0.2} roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Conveyor drum */}
      <mesh position={[0, 0.03, 0.25]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[0.08, 1.3, 4, 8]} />
        <meshStandardMaterial color={rigColors.foot} metalness={0.2} roughness={0.8} />
      </mesh>
    </group>
  );
}
