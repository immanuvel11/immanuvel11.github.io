// Technical Skills, verbatim categories from the CV.

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: ['Python', 'C++', 'Arduino', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'embedded-robotics',
    label: 'Embedded & Robotics',
    skills: [
      'Arduino Mega',
      'ESP32',
      'ROS2',
      'OpenCV',
      'Motion Control',
      'Servo Control',
      'Sensor Integration',
      'Bluetooth Communication',
      'Electronics Integration',
      'System Integration',
    ],
  },
  {
    id: 'cad-fabrication',
    label: 'CAD & Fabrication',
    skills: ['Fusion 360', 'CadQuery', 'Blender', '3D Printing', 'Rapid Prototyping'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['GitHub', 'Tinkercad'],
  },
];
