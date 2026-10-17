import {
  siArduino,
  siBluetooth,
  siCplusplus,
  siCss,
  siEspressif,
  siGit,
  siHtml5,
  siJavascript,
  siOpencv,
  siPython,
  siPytorch,
  siRos,
  siStreamlit,
  siUnity,
  type SimpleIcon,
} from 'simple-icons';

export type SkillIcon =
  | { kind: 'brand'; icon: SimpleIcon; color?: string }
  | { kind: 'glyph'; name: string }
  | { kind: 'image'; src: string };

export interface Skill {
  label: string;
  icon: SkillIcon;
  /** Only used so far inside the in-progress digital-twin prototype. */
  early?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  /** Boxicons glyph for the category heading. */
  icon: string;
  /** Rendered larger and first — the primary career focus. */
  featured?: boolean;
  tagline?: string;
  skills: Skill[];
}

const brand = (icon: SimpleIcon, color?: string): SkillIcon => ({ kind: 'brand', icon, color });
const glyph = (name: string): SkillIcon => ({ kind: 'glyph', name });

// Each entry is backed by the CV, a project on this site, or project source:
//  - CV: ROS2, OpenCV, motion/servo control, Arduino Mega, ESP32, Bluetooth,
//    sensor/electronics/system integration, Fusion 360, 3D printing, Git(Hub).
//  - GENESIS (inverse kinematics, servo drivers), TIFAN (stepper drivers,
//    automation), KIRA (mobile base, sensing).
//  - Digital-twin prototype source: PyTorch CNN, XGBoost, Streamlit dashboard,
//    Unity 3D well visualization — flagged `early` (synthetic data, in progress).
//  - The user's ROS 2 resume and the Plain-English Robot Arm project: MoveIt 2,
//    URDF, Gazebo, RViz and simulation work (both ROS 2 systems run in Gazebo).
// Deliberately NOT listed (no evidence yet): SolidWorks.
export const skillGroups: SkillGroup[] = [
  {
    id: 'robotics',
    title: 'Robotics & ROS 2',
    icon: 'bx-bot',
    featured: true,
    tagline: 'Primary focus — building towards a ROS 2 developer role.',
    skills: [
      { label: 'ROS 2', icon: brand(siRos) },
      { label: 'MoveIt 2', icon: glyph('bx-map-alt') },
      { label: 'URDF', icon: glyph('bx-vector') },
      { label: 'Gazebo', icon: glyph('bx-world') },
      { label: 'RViz', icon: glyph('bx-show') },
      { label: 'Inverse Kinematics', icon: glyph('bx-math') },
      { label: 'Robot Motion Control', icon: glyph('bx-move') },
      { label: 'Robot Simulation', icon: glyph('bx-play-circle') },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems & Electronics',
    icon: 'bx-chip',
    skills: [
      { label: 'Arduino Mega', icon: brand(siArduino) },
      { label: 'ESP32', icon: brand(siEspressif) },
      { label: 'Servo & Motor Control', icon: glyph('bx-slider-alt') },
      { label: 'Sensor Integration', icon: glyph('bx-radar') },
      { label: 'Motor Drivers', icon: glyph('bx-bolt-circle') },
      { label: 'Bluetooth Communication', icon: brand(siBluetooth) },
      { label: 'Electronics Integration', icon: glyph('bx-chip') },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Software',
    icon: 'bx-code-alt',
    skills: [
      { label: 'Python', icon: brand(siPython) },
      { label: 'C++', icon: brand(siCplusplus) },
      { label: 'JavaScript', icon: brand(siJavascript) },
      { label: 'HTML5', icon: brand(siHtml5) },
      { label: 'CSS3', icon: brand(siCss) },
      { label: 'Git & GitHub', icon: brand(siGit) },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI, ML & Computer Vision',
    icon: 'bx-brain',
    skills: [
      { label: 'OpenCV', icon: brand(siOpencv) },
      { label: 'Computer Vision', icon: glyph('bx-scan') },
      { label: 'Machine Learning', icon: glyph('bx-brain') },
      { label: 'PyTorch', icon: brand(siPytorch), early: true },
      { label: 'CNNs', icon: glyph('bx-sitemap'), early: true },
      { label: 'XGBoost', icon: glyph('bx-analyse'), early: true },
    ],
  },
  {
    id: 'cad',
    title: 'CAD, Design & Visualization',
    icon: 'bx-cube-alt',
    skills: [
      { label: 'Fusion 360', icon: { kind: 'image', src: '/icons/fusion360.jpg' } },
      { label: 'CAD Modeling', icon: glyph('bx-cube-alt') },
      { label: '3D Printing', icon: glyph('bx-printer') },
      { label: 'Unity', icon: brand(siUnity, '#272829'), early: true },
      { label: 'Digital Twin Visualization', icon: glyph('bx-network-chart'), early: true },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    icon: 'bx-cog',
    skills: [
      { label: 'Hardware–Software Integration', icon: glyph('bx-link') },
      { label: 'Sensor Feedback Systems', icon: glyph('bx-pulse') },
      { label: 'Robotics Automation', icon: glyph('bx-bot') },
      { label: 'Mobile Robot Control', icon: glyph('bx-car') },
      { label: 'Streamlit Dashboards', icon: brand(siStreamlit), early: true },
    ],
  },
];
