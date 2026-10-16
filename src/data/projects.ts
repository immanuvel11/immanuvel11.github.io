// Project case studies. Built projects (GENESIS, KIRA, TIFAN 2026) are sourced
// from the CV, the user's project folders, and the firmware itself. The
// in-progress entry contains only what the user has stated about them — no
// results, metrics, dates or field data are claimed.
// The Diet Point is a client project: it is described as "a small fitness-food
// cafe" and carries only the facts and test metrics the user supplied — no
// owner names, prices, sales figures, location or testimonials.

export type ProjectCategory = 'robotics' | 'hardware' | 'software' | 'ai-ml' | 'automation';

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  robotics: 'Robotics',
  hardware: 'Hardware',
  software: 'Software',
  'ai-ml': 'AI & ML',
  automation: 'Automation',
};

export interface ProjectVideo {
  file: string;
  poster: string;
  caption?: string;
  /** Short clip played (muted) when a card is hovered; defaults to the first video. */
  preview?: boolean;
}

export interface ProjectSection {
  heading: string;
  text?: string;
  bullets?: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

/**
 * A screenshot slot. The image lives in src/assets/projects/<slug>/ as
 * <name>.png | .jpg | .webp; until that file exists a placeholder is shown.
 */
export interface GalleryShot {
  name: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  /** One line shown under the card. */
  summary: string;
  categories: ProjectCategory[];
  status: string;
  inProgress: boolean;
  role?: string;
  problem?: string;
  approach?: string[];
  architecture?: string[];
  technologies: string[];
  result?: string;
  /** Files inside public/projects/<slug>/. The first image is the default cover. */
  images: string[];
  videos?: ProjectVideo[];
  /** Overrides the default cover image / crop. */
  cover?: { file: string; position?: string };
  /** boxicons class shown on the card when there is no photo yet. */
  placeholderIcon?: string;
  codeUrl?: string;
  /** Display tags that replace the category labels on the card and in the modal. */
  tags?: string[];
  /** Ribbon on the card photo (in-progress projects always show "In progress"). */
  cardBadge?: string;
  /** Free-form case-study sections, rendered in order before the problem/approach blocks. */
  sections?: ProjectSection[];
  metrics?: ProjectMetric[];
  metricsNote?: string;
  /** Heading for the technologies block (default "Technologies"). */
  techHeading?: string;
  /** Longer description of the user's role, shown as its own block. */
  roleDetail?: string;
  gallery?: GalleryShot[];
  galleryNote?: string;
  /** Shown as the large flagship card in the Projects grid. */
  featured?: boolean;
  /** CSS aspect-ratio for the media viewer (default 4 / 3) — e.g. '3 / 4' for phone screenshots. */
  mediaAspect?: string;
  /** object-position for a gallery-based card cover (e.g. 'center 30%'). */
  coverPosition?: string;
}

export const projects: Project[] = [
  {
    slug: 'genesis',
    featured: true,
    name: 'GENESIS',
    subtitle: '12-DOF Quadruped Robot Dog',
    summary: 'Arduino Mega + PCA9685 quadruped with inverse kinematics and a Bluetooth Android app.',
    categories: ['robotics', 'hardware', 'software'],
    status: 'Functional prototype',
    inProgress: false,
    role: 'Individual project',
    problem:
      'Legged locomotion needs twelve coordinated degrees of freedom to hold a stable stance and walk, turn, and reverse without falling — a mechanical design and control problem in one.',
    approach: [
      'Built the mechanical frame on the open-source SpotMicro quadruped platform (3D-printed, MG995 / MG996R servos), rather than designing the leg geometry from scratch.',
      'Drove all 12 joints from an Arduino Mega through a PCA9685 16-channel PWM driver.',
      'Implemented inverse kinematics in firmware (two-link law-of-cosines solver) using the leg’s real link lengths — 115 mm femur, 137 mm tibia — to convert foot positions into joint angles.',
      'Wrote gait routines for walking, reversing, dancing, push-ups, and a hello wave, plus an ultrasonic sensor that triggers an autonomous handshake when a hand is detected.',
      'Built a companion Android app (MIT App Inventor) that talks to the Mega over Bluetooth to trigger each behaviour.',
    ],
    architecture: [
      'SpotMicro frame (12-DOF)',
      'MG995 / MG996R servos + PCA9685',
      'Arduino Mega + inverse kinematics',
      'Gait routines / ultrasonic handshake',
      'Bluetooth — custom Android app',
    ],
    technologies: [
      'Arduino Mega',
      'PCA9685',
      'Inverse Kinematics',
      'MG995 / MG996R Servos',
      'Ultrasonic Sensing',
      'Bluetooth',
      'Android App',
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
    summary: 'Wheeled assistance robot with temperature sensing, a touchscreen and two mobile apps. Smart India Hackathon.',
    categories: ['robotics', 'hardware', 'software'],
    status: 'Functional prototype — built for Smart India Hackathon (SIH)',
    inProgress: false,
    role: 'Team of 6 — Team Lead',
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
      'Wheeled mobile base',
      'Temperature & interaction sensors',
      'Onboard touchscreen',
      'Monitoring & interaction software',
      'Dual mobile apps',
    ],
    technologies: [
      'Embedded C/C++',
      'Sensor Integration',
      'Touchscreen Interface',
      'Mobile Apps',
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
    cover: { file: 'kira-01-portrait.jpg', position: 'center 18%' },
  },
  {
    slug: 'tifan-2026',
    name: 'TIFAN 2026',
    subtitle: 'Automated Seedling Transplanter',
    summary: 'Tractor-towed implement with a stepper gantry, comb gripper and conveyor, field-tested.',
    categories: ['robotics', 'hardware', 'automation'],
    status: 'Field-tested — Participant, TIFAN 2026',
    inProgress: false,
    role: 'Team Electronics Lead',
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
      'Mobile app (Bluetooth)',
      'Arduino Mega controller',
      'Stepper drivers — gantry & conveyor',
      'Gantry + multi-finger gripper',
      'Seedling pick-and-place',
    ],
    technologies: [
      'Arduino Mega',
      'NEMA 17 Stepper Motors',
      'Stepper Motor Drivers',
      'Bluetooth',
      'Chain & Conveyor Drive',
      'Custom Gripper',
      'Mobile App',
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
  {
    slug: 'diet-point',
    name: 'The Diet Point',
    subtitle: 'Offline Billing & Owner Dashboard',
    summary:
      'Client project: an offline billing and business dashboard for a small fitness-food café — fast billing, sales and profit analytics, menu management and automatic backups, with no cloud or subscription.',
    categories: ['software', 'automation'],
    tags: ['Software', 'Business Automation', 'Client Project'],
    status: 'Completed',
    inProgress: false,
    cardBadge: 'Completed',
    role: 'Sole developer',
    roleDetail:
      'Sole developer — responsible for requirements, design, development, testing, packaging, delivery and owner documentation.',
    sections: [
      {
        heading: 'Overview',
        text: 'An offline billing and business-management application designed for a small fitness-food café. The billing counter and the owners’ dashboard live in a single Windows application that runs entirely on the shop’s own computer — no cloud services and no monthly subscription.',
      },
      {
        heading: 'The challenge',
        text: 'A small café counter needs fast billing, accurate profit calculations, clear visibility into sales, a simple installation, complete offline operation and reliable protection of its data.',
      },
      {
        heading: 'The solution',
        text: 'A Python, FastAPI, SQLite and JavaScript application that combines billing, reporting, menu management, expense tracking and data recovery in one tool.',
      },
      {
        heading: 'Key features',
        bullets: [
          'Fast billing with searchable product tiles.',
          'Dine-in and takeaway orders.',
          'UPI, cash and card payment methods.',
          'Discounts and combo savings.',
          'Sales and profit dashboard.',
          'Best sellers and slow-moving products.',
          'Owner login, shift tracking and audit logs.',
          'Menu management and Excel/CSV import.',
          'Daily closing summaries and report exports.',
          'Automatic backups and recovery.',
          'Separate practice mode for training.',
          'Simple Windows installation.',
        ],
      },
      {
        heading: 'Under the hood',
        bullets: [
          'Local architecture: a FastAPI backend and a SQLite database run on the café’s own Windows computer and serve the JavaScript interface — nothing depends on the cloud.',
          'Transactional bill saving: a bill is stored completely or not at all.',
          'Money is stored as integer paise rather than floating-point rupees, so totals and profit stay exact.',
          'Versioned database migrations let the data structure change safely between releases.',
          'Startup integrity checks run when the app opens.',
          'Offline-first by design: the app, its data and the interface (a PWA with a service worker) are all local.',
        ],
      },
    ],
    metrics: [
      { value: '150,000+', label: 'bills in testing' },
      { value: '< 50 ms', label: 'load time for every tested screen (300 ms target)' },
      { value: '≈ 1 s', label: 'to create a three-item bill' },
      { value: '76', label: 'automated tests covering critical workflows and data integrity' },
    ],
    metricsNote:
      'Measured test results from my own testing — not a guarantee of performance in every environment.',
    techHeading: 'Tech stack',
    technologies: [
      'Python',
      'FastAPI',
      'SQLite',
      'JavaScript (ES modules)',
      'HTML',
      'CSS',
      'PWA',
      'Service Workers',
      'SVG',
      'openpyxl',
      'pytest',
      'PowerShell',
      'Windows packaging',
    ],
    images: [],
    placeholderIcon: 'bx-receipt',
    gallery: [
      { name: 'billing-counter', caption: 'Billing counter — dine-in or takeaway, discount, UPI / cash / card' },
      { name: 'owner-dashboard', caption: 'Owner dashboard — sales, bills, average bill, costs and profit' },
      { name: 'expenses', caption: 'Expenses — rent, gas, salary and other costs counted in profit' },
      { name: 'login-screen', caption: 'Owner login — tap a name, then enter a PIN' },
      // Not captured yet: shown only while developing locally, hidden on the live site.
      { name: 'best-sellers-slow-movers', caption: 'Best sellers and slow movers' },
      { name: 'end-of-day-summary', caption: 'End-of-day summary' },
    ],
    galleryNote: 'Screenshots contain no real business data; owner names are blurred.',
  },
  {
    slug: 'toneshift',
    name: 'ToneShift',
    subtitle: 'Chord Transposer & Tuner',
    summary:
      'Self-initiated app that shifts chord progressions by semitones and tunes a guitar from the microphone — built in my first year to solve a problem I had as a musician.',
    categories: ['software'],
    tags: ['Software', 'Music Technology'],
    status: 'Working app — first-year personal project',
    inProgress: false,
    role: 'Self-initiated project',
    roleDetail:
      'Created in my first year as a self-initiated project. Rather than keep transposing chords by hand, I decided to build my own application — combining my interest in music with software development and practical problem-solving.',
    sections: [
      {
        heading: 'Overview',
        text: 'ToneShift is a music utility app that combines a chord transposer with a guitar tuner. I made it in my first year of engineering, inspired by a real problem I ran into as a musician.',
      },
      {
        heading: 'The problem',
        text: 'As a musician, I often needed to move chords into a different key. Working that out by hand every time was inconvenient, so I looked for a simpler way instead of relying on manual calculation.',
      },
      {
        heading: 'The solution',
        text: 'I built my own app. Enter a chord progression, shift it up or down one semitone at a time, and read the transposed chords along with a running step count. A tuner in the same app lets a guitarist pick a string and tune it using the device’s microphone.',
      },
      {
        heading: 'Key features',
        bullets: [
          'Chord transposition: enter a progression and move every chord up or down in semitone steps.',
          'Step counter showing how far the progression has been transposed.',
          'Guitar tuner for the six standard-tuning strings (E, A, D, G, B, E).',
          'Live pitch detection from the microphone, with the detected frequency in Hz and a clear tune up / tune down / in-tune result.',
          'Simple two-button interface — Transpose and Tuner — designed for quick use by musicians.',
        ],
      },
    ],
    techHeading: 'Technology stack',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    images: [],
    placeholderIcon: 'bx-music',
    gallery: [
      { name: 'transposer', caption: 'Chord transposer — enter a progression and shift it by semitones' },
      { name: 'tuner', caption: 'Guitar tuner — choose a string and tune using the microphone' },
    ],
    galleryNote: 'Screenshots from the app running on an Android phone.',
    mediaAspect: '3 / 4',
    coverPosition: 'center 28%',
  },
  {
    slug: 'digital-twin',
    name: 'Well-to-Surface Digital Twin',
    subtitle: 'Hybrid physics + AI model for CSS and Sucker Rod Pump (SRP) operations',
    summary: 'In progress: physics + AI digital-twin architecture for heavy-oil wells, prototyped on synthetic data.',
    categories: ['ai-ml', 'software'],
    status: 'In progress — prototype on synthetic data',
    inProgress: true,
    problem:
      'In heavy-oil wells using Cyclic Steam Stimulation (CSS) with sucker rod pumps, reservoir temperature, crude viscosity, oil mobility, production, pump performance, energy use and failures all interact — so tuning one in isolation misses the system-level picture.',
    approach: [
      'Modelling the chain Reservoir → Wellbore → SRP → Surface production as a hybrid of physics-based models and machine learning.',
      'The prototype architecture contains five models: thermal / reservoir behaviour, production prediction, SRP performance, failure / anomaly detection, and joint CSS + SRP optimization.',
      'Uses synthetic data to reproduce the architecture and demonstrate the workflow where real field data is unavailable.',
      'A 3D pumpjack visualization is being developed alongside, to connect the model to an interactive view of the equipment.',
    ],
    architecture: [
      'Reservoir',
      'Thermal model',
      'Viscosity',
      'Wellbore',
      'Sucker rod pump (SRP)',
      'Surface production',
      'Optimization',
    ],
    technologies: [
      'Python',
      'XGBoost',
      'PyTorch',
      'Physics-based models',
      'Synthetic data',
      'Dashboard concepts',
    ],
    result:
      'Work in progress. All values in the prototype are simulated / demonstration data — nothing here represents real field measurements.',
    images: [],
    placeholderIcon: 'bx-network-chart',
    gallery: [
      { name: 'overview', caption: 'Dashboard overview — field summary; data mode: synthetic / physics-simulated' },
      { name: 'unity-3d-twin', caption: 'Interactive 3D pumpjack digital twin (Unity) with live telemetry panels' },
      { name: 'thermal-response', caption: 'Reservoir and wellbore thermal response' },
      { name: 'production-response', caption: 'Predicted production response' },
      { name: 'what-if', caption: 'What-if analysis — adjust operating conditions and compare' },
    ],
    galleryNote: 'Screenshots of the working prototype dashboard, running on synthetic data — not field measurements.',
    videos: [
      {
        file: 'flowforge-walkthrough.mp4',
        poster: 'flowforge-walkthrough-poster.jpg',
        caption: 'FlowForge project walkthrough (narrated) — prototype on synthetic data',
      },
      {
        file: 'physical-model-demo.mp4',
        poster: 'physical-model-demo-poster.jpg',
        caption: 'Physical pumpjack model running beside the Unity digital twin',
        preview: true,
      },
    ],
  },
];
