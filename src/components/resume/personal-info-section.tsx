
import type { PersonalInfo } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Link as LinkIcon, Download, Printer } from 'lucide-react';

interface PersonalInfoSectionProps {
  data: PersonalInfo;
}

export function PersonalInfoSection({ data }: PersonalInfoSectionProps) {
  const initials = data.name.split(' ').map(n => n[0]).join('');
  const resumeUrl = "https://drive.google.com/file/d/1uOhx6Avg2_-41osOFUQAgEWg9j-9WezV/view?usp=drivesdk";

  const handlePrintToPdf = () => {
    window.print();
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 bg-card rounded-lg shadow-md hover-scale-up">
      <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary shadow-lg" data-ai-hint="user avatar">
        <AvatarImage src="/image_my.jpeg" alt={data.name} data-ai-hint="animated girl" />
        <AvatarFallback className="text-3xl bg-primary text-primary-foreground">{initials}</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{data.name}</h1>
        <p className="text-xl text-accent font-medium">{data.title}</p>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span>{data.phone}</span>
          </div>
          {data.linkedin && (
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4 text-primary" />
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {data.linkedin}
              </a>
            </div>
          )}
          {data.github && (
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
              <Github className="w-4 h-4 text-primary" />
              <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {data.github}
              </a>
            </div>
          )}
          {data.website && (
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
              <LinkIcon className="w-4 h-4 text-primary" />
              <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {data.website}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-auto flex-shrink-0 flex flex-col space-y-3 no-print">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </a>
        </Button>
        <Button variant="outline" size="lg" onClick={handlePrintToPdf} className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group">
          <Printer className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          Save Page as PDF
        </Button>
      </div>
    </div>
  );
}
