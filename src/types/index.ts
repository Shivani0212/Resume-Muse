
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  website?: string;
  summary: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface EducationEntry {
  id:string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface Skill {
  id: string;
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; // Optional proficiency level
  category: string; // e.g., Programming Languages, Tools, Soft Skills
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: Skill[];
  projects: Project[];
 achievements: {
    id: string;
    description: string;
 }[];
}

// Removed 'aiCoach' from SectionId
export type SectionId = 'personalInfo' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'achievements';

export interface ResumeSection {
  id: SectionId;
  title: string;
  component: React.FC<any>; // Consider a more specific prop type if possible
}
