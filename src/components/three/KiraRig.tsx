import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group, Mesh, MeshStandardMaterial } from 'three';
import { rigColors } from './materials';
import { useStoryProgressRef } from './storyContext';

// Procedural stand-in for KIRA's wheeled base + shell — simplified, not a
// scan of the real robot (see the on-page caption pattern used for GENESIS).
export const KIRA_WORLD_X = 6.6;

const WHEEL_POSITIONS: Array<[number, number, number]> = [
  [0.2, 0.05, 0.2],
  [-0.2, 0.05, 0.2],
  [0.2, 0.05, -0.2],
  [-0.2, 0.05, -0.2],
];

export function KiraRig() {
  const headRef = useRef<Group>(null);
  const displayRef = useRef<Mesh>(null);
  const progress = useStoryProgressRef();

  useFrame(({ clock }) => {
    const { chapter, t } = progress.current;
    const power = chapter === 'kira' ? t : 0;

    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.15;
    }
    if (displayRef.current) {
      const material = displayRef.current.material as MeshStandardMaterial;
      material.emissiveIntensity = 0.2 + power * 1.4;
    }
  });

  return (
    <group position={[KIRA_WORLD_X, 0, 0]}>
      {/* Tapered base shell */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.34, 0.7, 16]} />
        <meshStandardMaterial color={rigColors.body} metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Wheels */}
      {WHEEL_POSITIONS.map((p) => (
        <mesh key={p.join(',')} position={p} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} />
          <meshStandardMaterial color={rigColors.joint} metalness={0.3} roughness={0.6} />
        </mesh>
      ))}

      {/* Chest display */}
      <mesh ref={displayRef} position={[0, 0.42, 0.23]}>
        <boxGeometry args={[0.2, 0.14, 0.02]} />
        <meshStandardMaterial
          color={rigColors.joint}
          emissive={rigColors.accent}
          emissiveIntensity={0.2}
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 0.85, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color={rigColors.limb} metalness={0.4} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
