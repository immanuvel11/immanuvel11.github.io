// Achievements, verbatim from the CV. No ranks/dates beyond what is stated there.

export interface Achievement {
  title: string;
  event: string;
  place?: string;
}

export const achievements: Achievement[] = [
  {
    title: '3rd Place — Acceleration Event',
    event: 'GKDC Go-Kart Design Challenge',
    place: 'Coimbatore',
  },
  {
    title: 'Participant',
    event: 'Young Technocrats 3.0',
  },
  {
    title: 'Participant',
    event: 'TIFAN 2026',
  },
  {
    title: 'Participant',
    event: 'Smart India Hackathon (SIH)',
  },
];

// Milestones for the vertical timeline. Only calendar-anchored where the CV
// gives a date; undated entries are ordered logically instead of guessed.
export interface Milestone {
  date?: string;
  title: string;
  detail: string;
}

export const milestones: Milestone[] = [
  {
    date: '2024 – 2028',
    title: 'B.E. Mechatronics Engineering',
    detail: 'KCG College of Technology, Chennai (Affiliated to Anna University).',
  },
  {
    title: "CAD & Additive Manufacturing Engineer — EL's Crafting",
    detail: 'Part-time, 1 year. Parametric CAD, 3D printing workflow, rapid prototyping.',
  },
  {
    title: 'GENESIS — 12-DOF Quadruped Robot',
    detail: 'Individual project. Arduino Mega, servo actuation, gait control.',
  },
  {
    title: 'KIRA — Health Monitoring & Assistance Robot',
    detail: 'Team of 6, Team Lead. Built for Smart India Hackathon (SIH).',
  },
  {
    date: '2026',
    title: 'TIFAN 2026 — Agricultural Automation System',
    detail: 'Team Electronics Lead. Participant, TIFAN 2026.',
  },
  {
    title: 'GKDC Go-Kart Design Challenge',
    detail: '3rd Place, Acceleration Event, Coimbatore.',
  },
];
