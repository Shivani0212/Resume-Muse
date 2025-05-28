
"use client";

import { useState, useEffect } from 'react';
import { mockResumeData } from '@/lib/resume-data';
import type { ResumeData, ResumeSection, SectionId } from '@/types';
import { PersonalInfoSection } from '@/components/resume/personal-info-section';
import { SummarySection } from '@/components/resume/summary-section';
import { ExperienceSection } from '@/components/resume/experience-section';
import { EducationSection } from '@/components/resume/education-section';
import { SkillsSection } from '@/components/resume/skills-section';
import { ProjectsSection } from '@/components/resume/projects-section';
import { AiCoachSection } from '@/components/resume/ai-coach-section'; // New Import
import { SectionWrapper } from '@/components/resume/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

// Define the component map for sections
const sectionComponentsMap: Record<Exclude<SectionId, 'personalInfo'>, React.FC<any>> = {
  summary: SummarySection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  aiCoach: AiCoachSection, // New Entry
};

// Define the fixed order of sections for the portfolio
const portfolioSectionOrder: Exclude<SectionId, 'personalInfo'>[] = [
  'summary',
  'projects',
  'skills',
  'aiCoach', // New section added
  'experience',
  'education',
];

export default function PortfolioPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setResumeData(mockResumeData);
    setIsClient(true);
  }, []);

  if (!resumeData || !isClient) {
    // Basic loading state or skeleton
    return (
      <div className="space-y-8 animate-fadeIn">
        <Card><CardContent className="h-48 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-96 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-64 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
      </div>
    );
  }

  // Prepare section data based on the fixed order
  const sectionsToRender: ResumeSection[] = portfolioSectionOrder.map(id => {
    const titleMap: Record<typeof id, string> = {
      summary: 'Summary',
      experience: 'Work Experience & Responsibilities', // Updated Title
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      aiCoach: 'AI Resume Coach', // Title for the new section
    };
    return { id, title: titleMap[id], component: sectionComponentsMap[id] };
  });

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4 animate-fadeIn">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">{resumeData.personalInfo.name}</h1>
        <p className="text-xl md:text-2xl text-accent mt-2">{resumeData.personalInfo.title}</p>
      </header>

      <div className="space-y-12">
        <SectionWrapper>
          <PersonalInfoSection data={resumeData.personalInfo} />
        </SectionWrapper>

        {sectionsToRender.map((section) => {
          const SectionComponent = section.component;
          // Props mapping based on section ID
          let sectionProps = {};
          if (section.id === 'summary') {
            sectionProps = { summary: resumeData.personalInfo.summary };
          } else if (section.id === 'aiCoach') {
            sectionProps = {}; // AiCoachSection doesn't need specific props from resumeData
          } 
          else if (resumeData[section.id as keyof Omit<ResumeData, 'personalInfo' | 'aiCoach'>]) {
             sectionProps = { [section.id]: resumeData[section.id as keyof Omit<ResumeData, 'personalInfo' | 'aiCoach'>] };
          }
          
          return (
            <SectionWrapper key={section.id}>
              {/* Explicitly render title for aiCoach section if needed, or handle in component */}
              {/* For other sections, title is usually part of the component's CardHeader */}
              <SectionComponent {...sectionProps} />
            </SectionWrapper>
          );
        })}
      </div>
    </div>
  );
}
