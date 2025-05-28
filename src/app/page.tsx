
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
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sectionComponentsMap: Record<SectionId, React.FC<any>> = {
  personalInfo: PersonalInfoSection,
  summary: SummarySection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  projects: ProjectsSection,
};

const initialSectionOrder: SectionId[] = [
  'summary',
  'experience',
  'education',
  'skills',
  'projects',
];

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [sectionOrder, setSectionOrder] = useState<SectionId[]>(initialSectionOrder);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setResumeData(mockResumeData);
    setIsClient(true);
  }, []);

  const handlePrint = () => {
    if (isClient) {
      window.print();
    }
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...sectionOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newOrder.length) return;

    [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
    setSectionOrder(newOrder);
  };

  if (!resumeData || !isClient) {
    // Basic loading state or skeleton
    return (
      <div className="space-y-8">
        <Card><CardContent className="h-48 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-96 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
        <Card><CardContent className="h-64 p-6 animate-pulse bg-muted rounded-lg"></CardContent></Card>
      </div>
    );
  }

  const sections: ResumeSection[] = sectionOrder.map(id => {
    switch (id) {
      case 'summary':
        return { id, title: 'Summary', component: SummarySection };
      case 'experience':
        return { id, title: 'Experience', component: ExperienceSection };
      case 'education':
        return { id, title: 'Education', component: EducationSection };
      case 'skills':
        return { id, title: 'Skills', component: SkillsSection };
      case 'projects':
        return { id, title: 'Projects', component: ProjectsSection };
      default:
        throw new Error(`Unknown section ID: ${id}`);
    }
  });

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 print:px-0">
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact; /* Chrome, Safari */
            color-adjust: exact; /* Firefox */
          }
          .no-print {
            display: none !important;
          }
          .print\\:px-0 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
           main {
            padding: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          /* Ensure cards take full width and don't break across pages weirdly */
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
      
      <header className="mb-8 no-print">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">My Resume</h1>
          <Button onClick={handlePrint} variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print / Save PDF
          </Button>
        </div>
        <p className="text-muted-foreground mt-1">Customize and share your professional profile.</p>
      </header>

      <div className="print:shadow-none">
        <SectionWrapper>
            <PersonalInfoSection data={resumeData.personalInfo} />
        </SectionWrapper>

        {sections.map((section, index) => {
          const SectionComponent = section.component;
          const sectionDataKey = section.id === 'summary' ? 'summary' : section.id;
          const props = section.id === 'summary' ? { summary: resumeData.personalInfo.summary } : { [sectionDataKey]: resumeData[sectionDataKey as keyof Omit<ResumeData, 'personalInfo'>] };
          
          return (
            <SectionWrapper
              key={section.id}
              onMoveUp={() => moveSection(index, 'up')}
              onMoveDown={() => moveSection(index, 'down')}
              isFirst={index === 0}
              isLast={index === sections.length - 1}
            >
              <div className="print:break-inside-avoid">
                <SectionComponent {...props} />
              </div>
            </SectionWrapper>
          );
        })}
      </div>
    </div>
  );
}
