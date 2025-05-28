
import type { EducationEntry } from '@/types';
import { MapPin, CalendarDays } from 'lucide-react'; // GraduationCap icon might not be needed here

interface EducationSectionProps {
  education: EducationEntry[];
}

export function EducationSection({ education }: EducationSectionProps) {
  // This component now only renders the content part.
  // The Card and AccordionTrigger (acting as CardHeader) are in page.tsx.
  return (
    <div className="space-y-6">
      {education.map((entry) => (
        <div key={entry.id} className="relative pl-6 border-l-2 border-accent">
          <span className="absolute -left-[0.6rem] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-sm"></span>
          <h3 className="text-lg font-semibold text-foreground">{entry.institution}</h3>
          <p className="text-md font-medium text-accent">{entry.degree}</p>
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
          {entry.details && entry.details.length > 0 && (
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-foreground/90">
              {entry.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
