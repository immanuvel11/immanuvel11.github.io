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
    role: 'Team of 6 — Team Lead',
    status: 'Functional prototype — built for Smart India Hackathon (SIH)',
    problem:
      'A mobile assistance robot needs a wheeled base sturdy enough for real-world use, an approachable interface, and reliable sensing to monitor and guide people — all working together, not just as separate demos.',
    approach: [
      'Led a 6-member team as Team Lead, building KIRA for Smart India Hackathon (SIH).',
      'Directed software development for the robot’s monitoring and interaction logic, including the chest-mounted touchscreen interface.',
      'Integrated temperature sensing and embedded control into a 4-wheel mobile base carrying the robot’s upper body.',
      'Contributed to hardware testing and debugging, including load-testing the base chassis for stability.',
      'Built dual mobile applications for interacting with and monitoring the robot.',
    ],
    architecture: [
      'Wheeled mobile base — motors + embedded control',
      'Temperature & interaction sensors',
      'Onboard touchscreen interface',
      'Monitoring & interaction software',
      'Dual mobile applications',
    ],
    technologies: [
      'Embedded C/C++',
      'Sensor Integration',
      'Touchscreen Interface',
      'Mobile Application Development',
      'System Integration',
    ],
    result:
      'Delivered a working assistance robot — wheeled base, sensing, onboard display, and companion mobile apps — as Team Lead of a 6-member team for Smart India Hackathon (SIH).',
    images: [
      'kira-01-portrait.jpg',
      'kira-03-standing.jpg',
      'kira-04-display-closeup.jpg',
      'kira-02-disassembled.jpg',
      'kira-05-base-loadtest.jpg',
    ],
    videos: [
      { file: 'kira-demo-1.mp4', poster: 'kira-demo-1-poster.jpg' },
      { file: 'kira-demo-2.mp4', poster: 'kira-demo-2-poster.jpg' },
    ],
  },
  {
    slug: 'tifan-2026',
    name: 'TIFAN 2026',
    subtitle: 'Automated Seedling Transplanter',
    role: 'Team Electronics Lead',
    status: 'Field-tested — Participant, TIFAN 2026',
    problem:
      'Transplanting nursery seedlings by hand is slow and repetitive. Automating it needs a mechanism that can extract fragile plugs from a tray without damaging them, index the tray, and place each seedling accurately — all from a tractor-towed implement that survives real field conditions.',
    approach: [
      'Built a tractor-towed steel chassis from an engineering drawing (dimensioned CAD sheet, welded frame on pneumatic wheels) so it could be hitched behind and towed through a field.',
      'Designed a 2-axis gantry — stepper motors on a lead-screw and linear rail — to position a multi-finger comb gripper over the seedling tray.',
      'Built the gripper to curl and lift a full row of plugs out of the tray at once, releasing them onto a chain-driven conveyor.',
      'Drove the tray-indexing conveyor with a DC geared motor synchronized to the gripper cycle.',
      'Programmed the Arduino Mega controller and stepper drivers, wired the system to run off onboard sealed lead-acid batteries, and implemented Bluetooth communication for monitoring and control from a mobile app.',
      'Led electronics integration and troubleshooting through bench testing and an actual field trial towed behind a tractor.',
    ],
    architecture: [
      'Mobile app (Bluetooth command)',
      'Arduino Mega controller',
      'Stepper drivers — gantry & conveyor motors',
      'Gantry + multi-finger gripper',
      'Seedling pick-and-place onto conveyor',
    ],
    technologies: [
      'Arduino Mega',
      'NEMA 17 Stepper Motors',
      'Stepper Motor Drivers',
      'Bluetooth Communication',
      'Chain & Conveyor Drive',
      'Custom Gripper Mechanism',
      'Mobile Application',
    ],
    result:
      'Built and field-tested a tractor-towed seedling transplanter — gantry, gripper, and conveyor working together to extract and place seedlings — as Team Electronics Lead for TIFAN 2026.',
    images: [
      'tifan-01-full-machine.jpg',
      'tifan-04-gripper-chain.jpg',
      'tifan-02-gantry-conveyor.jpg',
      'tifan-03-tray-leadscrew.jpg',
      'tifan-05-electronics-drawing.jpg',
      'tifan-06-programming.jpg',
      'tifan-07-chassis-side.jpg',
    ],
    videos: [
      { file: 'tifan-demo-1.mp4', poster: 'tifan-demo-1-poster.jpg' },
      { file: 'tifan-demo-2.mp4', poster: 'tifan-demo-2-poster.jpg' },
    ],
  },
];
