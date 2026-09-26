import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import type { Group } from 'three';
import type { ReactNode } from 'react';

/**
 * A slow, continuous turntable drift makes it unmistakable that this is a
 * live 3D render (not a static image) even before the visitor moves the
 * mouse; pointer parallax and the scroll dolly layer on top of that same
 * base rotation — still no free spin, still no scroll-jacking.
 */
export function CameraRig({ children }: { children: ReactNode }) {
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useFrame(({ clock, mouse, camera }) => {
    pointer.current.x += (mouse.x - pointer.current.x) * 0.04;
    pointer.current.y += (mouse.y - pointer.current.y) * 0.04;

    const idleDrift = Math.sin(clock.getElapsedTime() * 0.15) * 0.18;

    if (groupRef.current) {
      groupRef.current.rotation.y = idleDrift + pointer.current.x * 0.3 + Math.PI * 0.12;
      groupRef.current.rotation.x = -pointer.current.y * 0.06;
    }

    const scrollRatio = Math.min(window.scrollY / (size.height || 1), 1);
    camera.position.z = 4.4 - scrollRatio * 0.6;
    camera.position.y = 1.4 - scrollRatio * 0.25;
    camera.lookAt(0, 0.6, 0);
  });

  return <group ref={groupRef}>{children}</group>;
}
