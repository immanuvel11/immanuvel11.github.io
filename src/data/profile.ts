// Sourced from Immanuvel M's CV (IMMANUVEL_CV.pdf). Do not add facts not present there.

export const profile = {
  name: 'Immanuvel M',
  role: 'Aspiring Robotics Engineer',
  kicker: 'Mechatronics Engineering Student',
  headline: 'Building robots, embedded control systems, and automation platforms.',
  summary:
    "I'm a Mechatronics Engineering student combining mechanical design, embedded electronics, and control software to build machines that actually move — a quadruped robot, a service robot, and an agricultural automation platform, among them. I work across CAD, firmware, and hardware integration, and I'm currently extending that into robotics simulation and applied AI.",
  location: 'Chennai, Tamil Nadu, India',
  email: 'm.immanuvel.11@gmail.com',
  phone: '+91 99520 02158',
  github: 'https://github.com/immanuvel11',
  githubHandle: 'github.com/immanuvel11',
  linkedin: 'https://www.linkedin.com/in/immanuvel-murugesan-8ba101301',
  linkedinHandle: 'linkedin.com/in/immanuvel-murugesan',
  resumePdf: '/resume/Immanuvel-M-Resume.pdf',
} as const;

export const education = {
  degree: 'B.E. Mechatronics Engineering',
  institution: 'KCG College of Technology, Chennai',
  affiliation: 'Affiliated to Anna University',
  duration: '2024 – 2028',
} as const;

export const experience = [
  {
    role: 'CAD & Additive Manufacturing Engineer',
    org: "EL's Crafting",
    type: 'Part-Time',
    duration: '1 Year',
    bullets: [
      'Developed parametric CAD models using CadQuery, Blender, and Fusion 360.',
      'Managed the complete 3D printing workflow — slicing, fabrication, and printer maintenance.',
      'Applied rapid prototyping, hardware calibration, and material optimization to functional products.',
    ],
  },
] as const;
