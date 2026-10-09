export interface ResumeEntry {
  title: string;
  period: string;
  place?: string;
  description?: string;
  bullets?: string[];
}

export interface ResumeColumn {
  heading: string;
  entries: ResumeEntry[];
}

// Experience wording follows the CV; the freelance, education (12th) and
// extracurricular entries are carried over from the user's original portfolio.
export const experience: ResumeColumn = {
  heading: 'Experience',
  entries: [
    {
      title: 'CAD & Additive Manufacturing Engineer (Part-Time)',
      period: '1 Year',
      place: "EL's Crafting",
      bullets: [
        'Developed parametric CAD models using CadQuery, Blender, and Fusion 360.',
        'Managed the complete 3D printing workflow — slicing, fabrication, and printer maintenance.',
        'Applied rapid prototyping, hardware calibration, and material optimization to functional products.',
      ],
    },
    {
      title: 'Frontend Developer',
      period: 'November 2024 – Present',
      place: 'Freelancer',
      bullets: [
        "Designed and developed the frontend for a client's website.",
        'Used HTML, CSS and JavaScript to build the interface.',
      ],
    },
  ],
};

export const leadership: ResumeColumn = {
  heading: 'Leadership',
  entries: [
    {
      title: 'Team Lead — KIRA',
      period: 'Smart India Hackathon (SIH)',
      place: 'Team of 6',
      description: 'Led a 6-member team building a health-monitoring and assistance robot.',
    },
    {
      title: 'Team Electronics Lead — TIFAN 2026',
      period: 'TIFAN 2026',
      place: 'Agricultural automation',
      description: 'Led electronics integration, embedded programming and troubleshooting for a seedling transplanter.',
    },
  ],
};

export const education: ResumeColumn = {
  heading: 'Education',
  entries: [
    {
      title: 'B.E. Mechatronics Engineering',
      period: '2024 – 2028',
      place: 'KCG College of Technology, Chennai (Affiliated to Anna University)',
    },
    {
      title: '12th',
      period: '2023 – 2024',
      place: 'CHSS Tharamani',
      description: '60%',
    },
  ],
};

export const extracurricular: ResumeColumn = {
  heading: 'Extracurricular Activities',
  entries: [
    {
      title: 'Musician',
      period: 'October 2020 – Present',
      description:
        "I'm a passionate musician who enjoys playing drums, keyboard and guitar, using my talents to create soulful gospel music.",
    },
    {
      title: 'Member — Inferno Racing Team, KCG College',
      period: 'October 2024 – Present',
      description: 'The team builds race cars and takes them to competitions.',
    },
  ],
};
