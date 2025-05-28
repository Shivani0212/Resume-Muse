
import type { ResumeData } from '@/types';

export const mockResumeData: ResumeData = {
  personalInfo: {
    name: 'Shivani Kumari',
    title: 'Recent Graduate & Aspiring Software Engineer',
    email: 'jhashivaniradhekrishna@gmail.com',
    phone: '+91-6207231730',
    linkedin: 'linkedin.com/in/shivani-kumari0212',
    github: 'github.com/Shivani0212',
    website: '',
    summary:
      "Motivated recent graduate from Motilal Nehru National Institute of Technology (CPI: 7.9) with a Bachelor of Technology. Strong foundation in C++, Java, JavaScript, Python, and SQL, complemented by hands-on project experience with NodeJS, ReactJS, ExpressJS, and MongoDB. Proven ability to lead and coordinate in extracurricular activities, including organizing tech fests and mentoring students. Eager to contribute technical skills and a proactive learning attitude to challenging software development roles.",
  },
  experience: [
    {
      id: 'exp1',
      role: 'Departmental Coordinator, Tech Fest Avishkar’24',
      company: 'MNNIT Allahabad',
      period: '2024',
      location: 'Allahabad',
      responsibilities: [
        'Organized Tech Fest Avishkar’24.',
      ],
    },
    {
      id: 'exp2',
      role: 'Student Coordinator',
      company: 'Anokhi Pehel, MNNIT Allahabad',
      period: '2022 - 2023',
      location: 'Allahabad',
      responsibilities: [
        'Served as a Mentor and Educator.',
        'Facilitated the admission of 100+ underprivileged students into schools, including arranging financial help.',
        'Organized Antyodaya 2022 & 2023 Fest (Cultural & Technical), managing 1300+ students and 30+ schools.',
      ],
    },
    {
      id: 'exp3',
      role: 'PR Team Member, Avishkar’21',
      company: 'MNNIT Allahabad',
      period: '2021',
      location: 'Allahabad',
      responsibilities: [
        'Contributed as a dedicated college PR team member, skilled in media relations, content creation, and strategic communication.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'Motilal Nehru National Institute of Technology, Allahabad',
      degree: 'Bachelor of Technology (B.Tech)',
      period: '2020 - 2024',
      location: 'Allahabad',
      details: ['CPI: 7.9'],
    },
    {
      id: 'edu2',
      institution: 'C.M.S.C. College, DARBHANGA',
      degree: 'Senior Secondary Examination (Class XII)',
      period: '2017 - 2019',
      location: 'Darbhanga, Bihar',
      details: ['Percentage: 86.8 %'],
    },
    {
      id: 'edu3',
      institution: 'Upgraded M S Dahaura Raghopur North',
      degree: 'Higher Secondary Examination (Class X)',
      period: '2016 - 2017',
      location: 'Bihar', // Location inferred as Bihar
      details: ['Percentage: 85 %'],
    },
  ],
  skills: [
    // Programming Languages
    { id: 's1', name: 'C++', category: 'Programming Languages', level: 'Advanced' },
    { id: 's2', name: 'Java', category: 'Programming Languages', level: 'Advanced' },
    { id: 's3', name: 'JavaScript', category: 'Programming Languages', level: 'Intermediate' },
    { id: 's4', name: 'Python', category: 'Programming Languages', level: 'Intermediate' },
    { id: 's5', name: 'SQL', category: 'Programming Languages', level: 'Intermediate' },
    // Frameworks/Libraries
    { id: 's6', name: 'NodeJS', category: 'Frameworks/Libraries', level: 'Intermediate' },
    { id: 's7', name: 'ReactJS', category: 'Frameworks/Libraries', level: 'Intermediate' },
    { id: 's8', name: 'Express Js', category: 'Frameworks/Libraries', level: 'Intermediate' },
    { id: 's9', name: 'Moment Js', category: 'Frameworks/Libraries', level: 'Beginner' },
    { id: 's10', name: 'HTML', category: 'Frameworks/Libraries', level: 'Advanced' },
    { id: 's11', name: 'CSS', category: 'Frameworks/Libraries', level: 'Advanced' },
    { id: 's12', name: 'Bootstrap', category: 'Frameworks/Libraries', level: 'Intermediate' },
    { id: 's13', name: 'Tailwind CSS', category: 'Frameworks/Libraries', level: 'Intermediate' },
    // Databases
    { id: 's14', name: 'MySQL', category: 'Databases', level: 'Intermediate' },
    { id: 's15', name: 'MongoDB', category: 'Databases', level: 'Intermediate' },
    { id: 's16', name: 'DBMS', category: 'Databases', level: 'Advanced' }, // From Area of Interest
    // DevOps/Tools
    { id: 's17', name: 'Git', category: 'DevOps/Tools', level: 'Advanced' },
    { id: 's18', name: 'Postman', category: 'DevOps/Tools', level: 'Intermediate' },
    // Methodologies
    { id: 's19', name: 'Data Structures & Algorithms', category: 'Methodologies', level: 'Advanced' },
    // Other (from Area of Interest)
    { id: 's20', name: 'Operating Systems (OS)', category: 'Other', level: 'Advanced' },
    { id: 's21', name: 'Object-Oriented Programming (OOPs)', category: 'Other', level: 'Advanced' },
    { id: 's22', name: 'Networking', category: 'Other', level: 'Intermediate' },
    { id: 's23', name: 'Machine learning', category: 'Other', level: 'Beginner' },
  ],
  projects: [
    {
      id: 'proj1',
      name: 'Store Monitoring',
      description:
        'A backend system that monitors store uptime and downtime through periodic status checks. It processes store status, business hours, and timezone data to generate reports for restaurant owners.',
      technologies: ['Node Js', 'Express Js', 'MongoDB', 'Moment Js'],
      link: 'https://github.com/Shivani0212/Store-Monitoring',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'store backend',
    },
    {
      id: 'proj2',
      name: 'KoOl ScHoOl - School Management WebApp',
      description:
        'A platform for schools that makes task easier. Teachers can create classes, add subjects, manage events etc. Students can attend the classes & participates in various events.',
      technologies: ['Node Js', 'Express Js', 'MongoDB', 'React Js', 'Tailwind CSS'],
      link: 'https://github.com/Shivani0212/KoOl-ScHoOl',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'school management',
    },
    {
      id: 'proj3',
      name: 'ELITE-Wellness - Health WebApp',
      description:
        'A platform with the idea of ”Take care of our health by electronic medium”, Patients can conveniently schedule their appointments with their preferred doctors by accessing and checking the availability of time slots.',
      technologies: ['Node Js', 'Express Js', 'MongoDB', 'React Js', 'Bootstrap', 'CSS'],
      link: 'https://github.com/Shivani0212/ELITE-Wellness',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'health webapp',
    },
  ],
};
