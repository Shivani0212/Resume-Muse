
import type { ExperienceEntry } from '@/types';
import { MapPin, CalendarDays } from 'lucide-react'; // Briefcase icon might not be needed here

interface ExperienceSectionProps {
  experience: ExperienceEntry[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  // This component now only renders the content part.
  // The Card and AccordionTrigger (acting as CardHeader) are in page.tsx.
  return (
    <div className="space-y-6">
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
    </div>
  );
}
