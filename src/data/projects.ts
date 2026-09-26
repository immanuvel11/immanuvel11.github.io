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
  /** Real demo clips in public/projects/<slug>/, each with a poster frame. */
  videos?: { file: string; poster: string }[];
  /** Link to a public source-code repository, if one exists. */
  codeUrl?: string;
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
      "Built the mechanical frame on the open-source SpotMicro quadruped platform (3D-printed, MG995 / MG996R servos), rather than designing the leg geometry from scratch.",
      'Drove all 12 joints from an Arduino Mega through a PCA9685 16-channel PWM driver.',
      'Implemented inverse kinematics in firmware (two-link law-of-cosines solver) using the leg’s real link lengths — 115 mm femur, 137 mm tibia — to convert foot positions into joint angles.',
      'Wrote gait routines for walking, reversing, dancing, push-ups, and a hello wave, plus an ultrasonic sensor that triggers an autonomous handshake when a hand is detected.',
      'Built a companion Android app (MIT App Inventor) that talks to the Mega over Bluetooth to trigger each behaviour.',
    ],
    architecture: [
      'SpotMicro mechanical frame (12-DOF)',
      'MG995 / MG996R servos — PCA9685 driver',
      'Arduino Mega + inverse kinematics',
      'Gait routines / ultrasonic-triggered handshake',
      'Bluetooth control — custom Android app',
    ],
    technologies: [
      'Arduino Mega',
      'PCA9685',
      'Inverse Kinematics',
      'MG995 / MG996R Servos',
      'Ultrasonic Sensing',
      'Bluetooth (Android App Control)',
      'C++',
    ],
    result:
      'Achieved stable walking, turning, reverse motion, dance and push-up routines, and a sensor-triggered handshake — all controllable from a custom Bluetooth Android app.',
    images: [
      'genesis-01-stand-code.jpg',
      'genesis-03-chassis-top.jpg',
      'genesis-02-wiring.jpg',
      'genesis-04-full-body.jpg',
      'genesis-05-build-progress.jpg',
      'genesis-06-control-app.jpg',
    ],
    videos: [
      { file: 'genesis-demo-1.mp4', poster: 'genesis-demo-1-poster.jpg' },
      { file: 'genesis-demo-2.mp4', poster: 'genesis-demo-2-poster.jpg' },
    ],
    codeUrl: 'https://github.com/immanuvel11/genesis-quadruped-robot',
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
