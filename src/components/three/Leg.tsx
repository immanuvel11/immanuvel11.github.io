import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import { rigColors } from './materials';

// Proportioned on GENESIS's real link lengths (femur 115mm : tibia 137mm),
// scaled to scene units. This is a procedural stand-in, not an imported CAD
// model — see the caption alongside the hero canvas.
const FEMUR_LEN = 0.58;
const TIBIA_LEN = 0.69;
const LIMB_RADIUS = 0.045;

interface LegProps {
  /** Position of the hip joint relative to the body. */
  position: [number, number, number];
  /** Mirrors the outward splay for legs on the left side of the body. */
  mirrored: boolean;
  /** Phase offset so each leg's idle sway is not perfectly synchronized. */
  phase: number;
}

export function Leg({ position, mirrored, phase }: LegProps) {
  const hipRef = useRef<Group>(null);
  const kneeRef = useRef<Group>(null);
  const sign = mirrored ? -1 : 1;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const sway = Math.sin(t * 0.6 + phase) * 0.03;
    if (hipRef.current) hipRef.current.rotation.z = sign * (0.5 + sway);
    if (kneeRef.current) kneeRef.current.rotation.x = -0.9 + Math.sin(t * 0.6 + phase + 1) * 0.02;
  });

  return (
    <group position={position}>
      {/* Hip joint */}
      <mesh castShadow>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color={rigColors.joint} metalness={0.4} roughness={0.6} />
      </mesh>

      <group ref={hipRef} rotation={[0, 0, sign * 0.5]}>
        {/* Femur */}
        <mesh castShadow position={[0, -FEMUR_LEN / 2, 0]}>
          <cylinderGeometry args={[LIMB_RADIUS, LIMB_RADIUS * 0.85, FEMUR_LEN, 12]} />
          <meshStandardMaterial color={rigColors.limb} metalness={0.7} roughness={0.3} />
        </mesh>

        <group position={[0, -FEMUR_LEN, 0]}>
          {/* Knee joint */}
          <mesh castShadow>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial color={rigColors.joint} metalness={0.4} roughness={0.6} />
          </mesh>

          <group ref={kneeRef} rotation={[-0.9, 0, 0]}>
            {/* Tibia */}
            <mesh castShadow position={[0, -TIBIA_LEN / 2, 0]}>
              <cylinderGeometry args={[LIMB_RADIUS * 0.8, LIMB_RADIUS * 0.55, TIBIA_LEN, 12]} />
              <meshStandardMaterial color={rigColors.limb} metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Foot */}
            <mesh castShadow position={[0, -TIBIA_LEN, 0]}>
              <sphereGeometry args={[0.05, 10, 10]} />
              <meshStandardMaterial color={rigColors.foot} metalness={0.2} roughness={0.8} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}
