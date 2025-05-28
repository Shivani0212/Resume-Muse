
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
import { SectionWrapper } from '@/components/resume/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserCircle, Code, Lightbulb, Briefcase, GraduationCap, UserSquare, Wand2 } from 'lucide-react';
import { AiCoachSection } from '@/components/resume/ai-coach-section';

// Define the component map for sections
const sectionComponentsMap: Record<Exclude<SectionId, 'personalInfo' | 'aiCoach'>, React.FC<any>> = {
  summary: SummarySection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  projects: ProjectsSection,
};

// Define the fixed order of sections for the portfolio
const portfolioSectionOrder: Exclude<SectionId, 'personalInfo' | 'aiCoach'>[] = [
  'summary',
  'projects',
  'skills',
  'experience',
  'education',
];

const sectionIconMap: Record<Exclude<SectionId, 'personalInfo' | 'aiCoach'>, React.ElementType> = {
  summary: UserCircle,
  projects: Code,
  skills: Lightbulb,
  experience: Briefcase,
  education: GraduationCap,
};


export default function PortfolioPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setResumeData(mockResumeData);
    setIsClient(true);
  }, []);

  if (!resumeData || !isClient) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <Card><CardContent className="h-48 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-96 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-64 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
      </div>
    );
  }

  const sectionsToRenderData = portfolioSectionOrder.map(id => {
    const titleMap: Record<typeof id, string> = {
      summary: 'Summary',
      experience: 'Responsibilities',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
    };
    return { id, title: titleMap[id], component: sectionComponentsMap[id], icon: sectionIconMap[id] };
  });

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4 animate-fadeIn">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">{resumeData.personalInfo.name}</h1>
        <p className="text-xl md:text-2xl text-accent mt-2">{resumeData.personalInfo.title}</p>
      </header>

      {/* PersonalInfoSection remains outside the accordion */}
      <SectionWrapper>
        <PersonalInfoSection data={resumeData.personalInfo} />
      </SectionWrapper>

      {/* AI Coach Section - remains outside the accordion, displayed prominently */}
      <SectionWrapper>
        <AiCoachSection />
      </SectionWrapper>

      <Accordion type="multiple" className="w-full space-y-12 mt-12" defaultValue={['summary', 'projects']}>
        {sectionsToRenderData.map((section) => {
          const SectionComponent = section.component;
          const IconComponent = section.icon;
          let sectionProps = {};
          if (section.id === 'summary') {
            sectionProps = { summary: resumeData.personalInfo.summary };
          } else if (resumeData[section.id as keyof Omit<ResumeData, 'personalInfo' | 'aiCoach'>]) {
             sectionProps = { [section.id]: resumeData[section.id as keyof Omit<ResumeData, 'personalInfo' | 'aiCoach'>] };
          }
          
          return (
            <AccordionItem key={section.id} value={section.id} className="border-none overflow-hidden rounded-lg shadow-lg hover-scale-up bg-card">
              <AccordionTrigger className="w-full p-6 hover:no-underline text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  {IconComponent && <IconComponent className="w-7 h-7 text-primary flex-shrink-0" />}
                  <h2 className="text-2xl font-semibold text-primary">{section.title}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-card"> 
                <div className="p-6 pt-0"> 
                   <SectionComponent {...sectionProps} />
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
