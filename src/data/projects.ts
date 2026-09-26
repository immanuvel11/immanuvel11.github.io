// Case-study data sourced from Immanuvel M's CV. Architecture chains describe
// the systems using only what the CV states — no invented components or metrics.

export type ArchitectureStep = string;

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  status: string;
  problem: string;
  approach: string[];
  architecture: ArchitectureStep[];
  technologies: string[];
  result: string;
  /** Drop real photos/renders into public/projects/<slug>/ and list filenames here. */
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'genesis',
    name: 'GENESIS',
    subtitle: '12-DOF Quadruped Robot Dog',
    role: 'Individual project',
    status: 'Functional prototype',
    problem:
      'Legged locomotion needs twelve coordinated degrees of freedom to hold a stable stance and walk, turn, and reverse without falling — a mechanical design and control problem in one.',
    approach: [
      'Designed a 12-DOF leg and body structure driven by MG995 / MG996R servos.',
      'Built the embedded control layer on an Arduino Mega to sequence joint motion.',
      'Wrote gait algorithms for walking, turning, reverse motion, and dance routines.',
      'Integrated power management and wiring for stable, repeatable real-world operation.',
    ],
    architecture: [
      'Mechanical structure (12-DOF legs)',
      'Servo actuation — MG995 / MG996R',
      'Arduino Mega control',
      'Gait algorithms',
      'Locomotion — walk / turn / reverse / dance',
    ],
    technologies: ['Arduino Mega', 'MG995 / MG996R Servos', 'C++', 'Gait Control', 'Power Management'],
    result:
      'Achieved stable walking, turning, reverse motion, and dance routines in real-world testing.',
    images: [],
  },
  {
    slug: 'kira',
    name: 'KIRA',
    subtitle: 'Health Monitoring & Assistance Robot',
    role: 'Team of 4 — Software lead',
    status: 'Functional prototype',
    problem:
      'A service robot for temperature monitoring and guided assistance needs sensing, embedded control, and a usable interface working together reliably.',
    approach: [
      'Led software development for the robot’s monitoring and interaction logic.',
      'Contributed to hardware testing, debugging, and system integration.',
      'Integrated sensors and embedded control for temperature monitoring and guided assistance.',
      'Built dual mobile applications for interacting with and monitoring the robot.',
    ],
    architecture: [
      'Sensors (temperature)',
      'Embedded control',
      'Interaction software',
      'Guided assistance behaviour',
      'Dual mobile applications',
    ],
    technologies: ['Embedded C/C++', 'Sensor Integration', 'Mobile Application Development', 'System Integration'],
    result:
      'Delivered a working assistance robot with integrated sensing, embedded control, and companion mobile apps as a team of four.',
    images: [],
  },
  {
    slug: 'tifan-2026',
    name: 'TIFAN 2026',
    subtitle: 'Agricultural Automation System',
    role: 'Team Electronics Lead',
    status: 'Competition build — Participant, TIFAN 2026',
    problem:
      'Automating agricultural material handling requires a controller that can coordinate a conveyor, grippers, and sensors while staying serviceable and remotely controllable in the field.',
    approach: [
      'Engineered an Arduino Mega-based automation platform integrating conveyor, grippers, sensors, and motion control.',
      'Led electronics integration and embedded programming for the platform.',
      'Implemented Bluetooth communication for wireless monitoring and control.',
      'Ran testing and troubleshooting, and built mobile application support for the system.',
    ],
    architecture: [
      'Mobile app (command)',
      'Bluetooth communication',
      'Arduino Mega controller',
      'Motion control',
      'Conveyor & grippers (mechanical action)',
    ],
    technologies: ['Arduino Mega', 'Bluetooth Communication', 'Motion Control', 'Sensors', 'Mobile Application'],
    result: 'Built and field-tested a working automation platform as Team Electronics Lead for TIFAN 2026.',
    images: [],
  },
];
