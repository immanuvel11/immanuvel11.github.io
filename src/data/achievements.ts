// Verbatim from the CV, plus the Smart India Hackathon participation the user
// confirmed (KIRA). No ranks, dates or certificates beyond what is stated.

export interface Achievement {
  title: string;
  event: string;
  detail?: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: '3rd Place',
    event: 'Acceleration Event — GKDC Go-Kart Design Challenge',
    detail: 'Coimbatore',
    icon: 'bx-trophy',
  },
  {
    title: 'Participant',
    event: 'Smart India Hackathon (SIH)',
    detail: 'Team Lead — KIRA',
    icon: 'bx-medal',
  },
  {
    title: 'Participant',
    event: 'TIFAN 2026',
    detail: 'Team Electronics Lead',
    icon: 'bx-flag',
  },
  {
    title: 'Participant',
    event: 'Young Technocrats 3.0',
    icon: 'bx-group',
  },
];
