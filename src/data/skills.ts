import {
  siAndroid,
  siArduino,
  siBlender,
  siBluetooth,
  siCplusplus,
  siCss,
  siEspressif,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siOpencv,
  siPython,
  siPytorch,
  siRos,
  siTinkercad,
  type SimpleIcon,
} from 'simple-icons';

export type SkillIcon =
  | { kind: 'brand'; icon: SimpleIcon }
  | { kind: 'glyph'; name: string }
  | { kind: 'image'; src: string };

export interface Skill {
  label: string;
  icon: SkillIcon;
}

export interface SkillGroup {
  id: string;
  title: string;
  note?: string;
  skills: Skill[];
}

const brand = (icon: SimpleIcon): SkillIcon => ({ kind: 'brand', icon });
const glyph = (name: string): SkillIcon => ({ kind: 'glyph', name });

// Group contents come from the CV's Technical Skills section; the AI & ML
// group is the user's own account of what the digital-twin prototype uses.
export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { label: 'Python', icon: brand(siPython) },
      { label: 'C++', icon: brand(siCplusplus) },
      { label: 'JavaScript', icon: brand(siJavascript) },
      { label: 'HTML', icon: brand(siHtml5) },
      { label: 'CSS', icon: brand(siCss) },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & Hardware',
    skills: [
      { label: 'Arduino Mega', icon: brand(siArduino) },
      { label: 'ESP32', icon: brand(siEspressif) },
      { label: 'Servo & Motion Control', icon: glyph('bx-slider-alt') },
      { label: 'Sensor Integration', icon: glyph('bx-radar') },
      { label: 'Bluetooth', icon: brand(siBluetooth) },
      { label: 'Electronics Integration', icon: glyph('bx-chip') },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    skills: [
      { label: 'ROS2', icon: brand(siRos) },
      { label: 'OpenCV', icon: brand(siOpencv) },
      { label: 'Inverse Kinematics', icon: glyph('bx-math') },
      { label: 'System Integration', icon: glyph('bx-cog') },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    note: 'Used in my digital-twin prototype (in progress).',
    skills: [
      { label: 'Machine Learning', icon: glyph('bx-brain') },
      { label: 'PyTorch', icon: brand(siPytorch) },
      { label: 'XGBoost', icon: glyph('bx-analyse') },
      { label: 'Synthetic Data', icon: glyph('bx-network-chart') },
    ],
  },
  {
    id: 'cad',
    title: 'CAD & Fabrication',
    skills: [
      { label: 'Fusion 360', icon: { kind: 'image', src: '/icons/fusion360.jpg' } },
      { label: 'CadQuery', icon: glyph('bx-cube-alt') },
      { label: 'Blender', icon: brand(siBlender) },
      { label: 'Tinkercad', icon: brand(siTinkercad) },
      { label: '3D Printing', icon: glyph('bx-printer') },
      { label: 'Rapid Prototyping', icon: glyph('bx-wrench') },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { label: 'Git', icon: brand(siGit) },
      { label: 'GitHub', icon: brand(siGithub) },
      { label: 'MIT App Inventor', icon: brand(siAndroid) },
    ],
  },
];
