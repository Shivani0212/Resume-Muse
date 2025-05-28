
import type { ExperienceEntry } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';

interface ExperienceSectionProps {
  experience: ExperienceEntry[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Briefcase className="w-6 h-6 text-primary" />
        <CardTitle className="text-2xl font-semibold text-primary">Work Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((entry) => (
          <div key={entry.id} className="relative pl-6 border-l-2 border-accent">
            <span className="absolute -left-[0.6rem] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-background"></span>
            <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
            <p className="text-md font-medium text-accent">{entry.company}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>{entry.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{entry.location}</span>
              </div>
            </div>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-foreground/90">
              {entry.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
