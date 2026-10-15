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

// Wording comes from the CV and from details the user supplied directly.
// Internship entries state only what the user confirmed (organisation, title,
// dates, activities) — add detail here only when it is verified.
// Experience is in reverse chronological order (by start date).
export const experience: ResumeColumn = {
  heading: 'Experience',
  entries: [
    {
      title: 'Machine Learning Intern',
      period: '10 July 2026 – 25 August 2026',
      place: 'ShikshaVertex',
      bullets: [
        'Successfully completed a Machine Learning internship program.',
        'Gained exposure to machine learning concepts and workflows.',
        'Demonstrated diligence, consistency, active participation, and innovation throughout the internship.',
      ],
    },
    {
      title: 'CNC Machining & Manufacturing Intern',
      period: '11 June 2026 – 4 July 2026',
      place: 'Perfect Engineering — Perungudi, Chennai',
      bullets: [
        'Activities included CNC turning, VMC milling and CNC grinding.',
        'Worked on tool setting and tool offsets, and observed CNC program loading.',
        'Operated a lathe and VMC under supervision.',
        'Component inspection and quality checking, assembly, and jigs and fixtures.',
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
  ],
};

export const leadership: ResumeColumn = {
  heading: 'Leadership & Project Experience',
  entries: [
    {
      title: 'Team Lead — KIRA',
      period: 'Smart India Hackathon',
      place: 'Team of 6',
      description:
        'Led a six-member team developing a health-monitoring and assistance robot for Smart India Hackathon.',
    },
    {
      title: 'Team Electronics Lead — TIFAN 2026',
      period: 'TIFAN 2026',
      place: 'Agricultural automation',
      description:
        'Led electronics integration, embedded programming, and troubleshooting for an agricultural seedling transplanter.',
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
      title: 'Higher Secondary Education',
      period: '2023 – 2024',
      place: 'CHSS Tharamani',
      description: 'Score: 66.3%',
    },
  ],
};

// No description for the Secretary role yet: none was supplied, so it is left
// out rather than invented — add a `description` string here when ready.
export const extracurricular: ResumeColumn = {
  heading: 'Extracurricular Activities',
  entries: [
    {
      title: 'Secretary — Robotics Society',
      period: '2025 – 2028',
    },
    {
      title: 'Musician',
      period: 'October 2020 – Present',
      description:
        "I'm a passionate musician who enjoys playing drums, keyboard and guitar, using my talents to create soulful gospel music.",
    },
  ],
};

// The badge (period) carries the result. The first two are new; the rest are
// carried over from the CV. No dates or award details beyond what is stated.
export const resumeAchievements: ResumeColumn = {
  heading: 'Achievements & Competitions',
  entries: [
    { title: 'Smart India Hackathon 2026', period: 'Finalist' },
    { title: 'IoT Lab Competition', period: 'First Prize' },
    {
      title: 'Acceleration Event — GKDC Go-Kart Design Challenge',
      period: '3rd Place',
      place: 'Coimbatore',
    },
    { title: 'TIFAN 2026', period: 'Participant' },
    { title: 'Young Technocrats 3.0', period: 'Participant' },
  ],
};
