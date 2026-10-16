export interface ResumeEntry {
  title: string;
  period: string;
  place?: string;
  description?: string;
  bullets?: string[];
  /** Optional Boxicons glyph shown before the title. */
  icon?: string;
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

// Only achievements confirmed by the user or already in the portfolio data
// (CV / achievements.ts). No competition names, dates or details beyond that.
export const recognition: ResumeColumn = {
  heading: 'Achievements & Recognition',
  entries: [
    {
      icon: 'bx-trophy',
      title: 'IoT Lab Competition',
      period: 'First Prize',
      description: 'Awarded First Prize in the IoT Lab Competition.',
    },
    {
      icon: 'bx-medal',
      title: 'GKDC Go-Kart Design Challenge',
      period: 'Third Place — Acceleration Event',
      place: 'Coimbatore',
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
      title: 'Video Editor',
      period: 'Since 10th Standard',
      description: "I've been editing videos since my 10th standard.",
    },
    {
      title: 'Musician',
      period: 'October 2020 – Present',
      description:
        "I'm a passionate musician who enjoys playing drums, keyboard and guitar, using my talents to create soulful gospel music.",
    },
  ],
};
