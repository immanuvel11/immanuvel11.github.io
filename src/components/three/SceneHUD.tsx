import type { ChapterId } from './storyContext';

interface HudEntry {
  title: string;
  specs: string[];
}

// Labels are pulled straight from verified project facts (see
// src/data/projects.ts) — nothing here is invented for the HUD.
const LABELS: Partial<Record<ChapterId, HudEntry>> = {
  genesis: { title: 'GENESIS', specs: ['12-DOF', 'PCA9685 · 16-CH PWM', 'Inverse Kinematics'] },
  tifan: { title: 'TIFAN 2026', specs: ['Stepper Gantry', 'Multi-Finger Gripper', 'Chain-Driven Conveyor'] },
  kira: { title: 'KIRA', specs: ['Wheeled Mobile Base', 'Touchscreen Interface', 'Sensor Integration'] },
  robotics: { title: 'GENESIS — LEG DETAIL', specs: ['Femur 115 mm', 'Tibia 137 mm', 'Law-of-cosines IK'] },
};

export function SceneHUD({ chapter }: { chapter: ChapterId }) {
  const data = LABELS[chapter];
  if (!data) return null;

  return (
    <div
      key={chapter}
      className="pointer-events-none fixed bottom-10 right-6 z-0 hidden text-right transition-opacity duration-500 sm:right-10 sm:block"
    >
      <div className="font-mono-tech text-xs uppercase tracking-wide text-[var(--color-ink-muted)]">
        <div className="text-[var(--color-accent)]">{data.title}</div>
        {data.specs.map((spec) => (
          <div key={spec} className="mt-1">
            {spec}
          </div>
        ))}
      </div>
    </div>
  );
}
