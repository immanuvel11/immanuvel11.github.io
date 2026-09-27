import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStoryProgressRef } from './storyContext';
import { TIFAN_WORLD_X } from './TifanRig';
import { KIRA_WORLD_X } from './KiraRig';

type Vec3 = [number, number, number];

interface Waypoint {
  at: number;
  pos: Vec3;
  look: Vec3;
}

// A handful of hand-placed camera waypoints across the whole story's global
// 0..1 progress. The camera glides between them — this is the primary
// carrier of "cinematic movement"; the rigs themselves only animate their
// own mechanisms.
const WAYPOINTS: Waypoint[] = [
  { at: 0.0, pos: [2.6, 1.4, 4.4], look: [0, 0.6, 0] },
  { at: 0.15, pos: [1.5, 1.8, 3.3], look: [0, 1.0, 0] },
  { at: 0.35, pos: [2.1, 1.1, 3.7], look: [0, 0.55, 0] },
  { at: 0.55, pos: [KIRA_WORLD_X + 1.5, 1.3, 3.2], look: [KIRA_WORLD_X, 0.7, 0] },
  { at: 0.75, pos: [TIFAN_WORLD_X + 1.9, 1.3, 3.4], look: [TIFAN_WORLD_X, 0.6, 0] },
  { at: 1.0, pos: [0.55, 0.55, 1.5], look: [0, 0.55, 0] },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function sampleWaypoints(global: number): { pos: Vec3; look: Vec3 } {
  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    const a = WAYPOINTS[i];
    const b = WAYPOINTS[i + 1];
    if (global >= a.at && global <= b.at) {
      const span = b.at - a.at || 1;
      const eased = smoothstep((global - a.at) / span);
      return {
        pos: [lerp(a.pos[0], b.pos[0], eased), lerp(a.pos[1], b.pos[1], eased), lerp(a.pos[2], b.pos[2], eased)],
        look: [lerp(a.look[0], b.look[0], eased), lerp(a.look[1], b.look[1], eased), lerp(a.look[2], b.look[2], eased)],
      };
    }
  }
  const last = WAYPOINTS[WAYPOINTS.length - 1];
  return { pos: last.pos, look: last.look };
}

export function StoryCameraRig() {
  const pointer = useRef({ x: 0, y: 0 });
  const progress = useStoryProgressRef();

  useFrame(({ mouse, camera }) => {
    pointer.current.x += (mouse.x - pointer.current.x) * 0.04;
    pointer.current.y += (mouse.y - pointer.current.y) * 0.04;

    const { pos, look } = sampleWaypoints(progress.current.global);

    camera.position.set(pos[0] + pointer.current.x * 0.15, pos[1] - pointer.current.y * 0.05, pos[2]);
    camera.lookAt(look[0], look[1], look[2]);
  });

  return null;
}
