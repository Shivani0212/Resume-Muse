import type { ResumeData } from '@/types';

export const mockResumeData: ResumeData = {
  personalInfo: {
    name: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex.johnson@email.com',
    phone: '(555) 123-4567',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    website: 'alexjohnson.dev',
    summary:
      'Highly skilled and motivated Senior Software Engineer with 8+ years of experience in developing and implementing innovative software solutions. Proven ability to lead projects, mentor junior developers, and collaborate effectively with cross-functional teams. Passionate about clean code, scalable architecture, and emerging technologies.',
  },
  experience: [
    {
      id: 'exp1',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2020 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led a team of 5 engineers in developing a new cloud-based SaaS platform, resulting in a 20% increase in customer acquisition.',
        'Designed and implemented microservices architecture using Node.js, Docker, and Kubernetes.',
        'Optimized database performance, reducing query times by 30%.',
        'Collaborated with product managers to define project requirements and deliverables.',
      ],
    },
    {
      id: 'exp2',
      role: 'Software Engineer',
      company: 'Innovatech Ltd.',
      period: 'Jun 2016 - Dec 2019',
      location: 'Austin, TX',
      responsibilities: [
        'Developed and maintained web applications using React, Redux, and Python/Django.',
        'Contributed to the full software development lifecycle, from concept to deployment.',
        'Participated in code reviews and provided constructive feedback to team members.',
        'Integrated third-party APIs to enhance application functionality.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'Stanford University',
      degree: 'M.S. in Computer Science',
      period: '2014 - 2016',
      location: 'Stanford, CA',
      details: ['Specialization in Artificial Intelligence', 'GPA: 3.9/4.0'],
    },
    {
      id: 'edu2',
      institution: 'University of Texas at Austin',
      degree: 'B.S. in Computer Engineering',
      period: '2010 - 2014',
      location: 'Austin, TX',
      details: ['Graduated with Honors', 'Dean\'s List 2012-2014'],
    },
  ],
  skills: [
    { id: 's1', name: 'JavaScript (ES6+)', category: 'Programming Languages', level: 'Expert' },
    { id: 's2', name: 'TypeScript', category: 'Programming Languages', level: 'Expert' },
    { id: 's3', name: 'Python', category: 'Programming Languages', level: 'Advanced' },
    { id: 's4', name: 'Node.js', category: 'Frameworks/Libraries', level: 'Expert' },
    { id: 's5', name: 'React/Next.js', category: 'Frameworks/Libraries', level: 'Expert' },
    { id: 's6', name: 'Angular', category: 'Frameworks/Libraries', level: 'Intermediate' },
    { id: 's7', name: 'SQL (PostgreSQL, MySQL)', category: 'Databases', level: 'Advanced' },
    { id: 's8', name: 'NoSQL (MongoDB)', category: 'Databases', level: 'Intermediate' },
    { id: 's9', name: 'Docker & Kubernetes', category: 'DevOps/Tools', level: 'Advanced' },
    { id: 's10', name: 'AWS/GCP', category: 'Cloud Platforms', level: 'Advanced' },
    { id: 's11', name: 'Git & GitHub', category: 'DevOps/Tools', level: 'Expert' },
    { id: 's12', name: 'Agile Methodologies', category: 'Methodologies', level: 'Expert' },
    { id: 's13', name: 'Problem Solving', category: 'Soft Skills', level: 'Expert' },
    { id: 's14', name: 'Team Leadership', category: 'Soft Skills', level: 'Advanced' },
  ],
  projects: [
    {
      id: 'proj1',
      name: 'E-commerce Platform Optimization',
      description:
        'Led the refactoring of a legacy e-commerce platform, improving performance by 40% and reducing server costs by 15%. Introduced modern CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Jenkins'],
      link: 'https://github.com/alexjohnson/ecomm-optimization',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'online store',
    },
    {
      id: 'proj2',
      name: 'Real-time Data Analytics Dashboard',
      description:
        'Developed a dashboard for visualizing real-time sensor data using WebSockets and D3.js. Enabled stakeholders to monitor critical metrics effectively.',
      technologies: ['Python (Flask)', 'WebSockets', 'D3.js', 'MongoDB', 'React'],
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'dashboard analytics',
    },
  ],
};
