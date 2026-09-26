import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import type { Group } from 'three';
import type { ReactNode } from 'react';

/**
 * Restrained interaction: the rig turns gently toward the pointer and eases
 * into a slightly closer, front-on view as the visitor scrolls through the
 * hero — never a free spin, never scroll-jacked.
 */
export function CameraRig({ children }: { children: ReactNode }) {
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useFrame(({ mouse, camera }) => {
    pointer.current.x += (mouse.x - pointer.current.x) * 0.04;
    pointer.current.y += (mouse.y - pointer.current.y) * 0.04;

    if (groupRef.current) {
      groupRef.current.rotation.y = pointer.current.x * 0.25 + Math.PI * 0.15;
      groupRef.current.rotation.x = -pointer.current.y * 0.06;
    }

    const scrollRatio = Math.min(window.scrollY / (size.height || 1), 1);
    camera.position.z = 4.4 - scrollRatio * 0.6;
    camera.position.y = 1.4 - scrollRatio * 0.25;
    camera.lookAt(0, 0.6, 0);
  });

  return <group ref={groupRef}>{children}</group>;
}
