
import type { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, PenToolIcon, Users, Brain } from 'lucide-react'; // Example icons

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': Code,
  'Frameworks/Libraries': Code, // Can refine later
  'Databases': () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.03 3 3 4.79 3 7s4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4m0 14c-4.97 0-9-1.79-9-4v3c0 2.21 4.03 4 9 4s9-1.79 9-4v-3c0 2.21-4.03 4-9 4m0-7C7.03 10 3 11.79 3 14v3c0 2.21 4.03 4 9 4s9-1.79 9-4v-3c0-2.21-4.03-4-9-4"/></svg>, // Lucide Database icon
  'DevOps/Tools': PenToolIcon,
  'Cloud Platforms': () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.53 17.03c-1.24 0-2.26.38-3.05 1.13c-.78.75-1.17 1.74-1.17 2.97c0 1.27.42 2.28 1.25 3.04c.84.76 1.9 1.13 3.19 1.13c1.16 0 2.17-.3 3.05-1c.88-.68 1.4-1.54 1.56-2.58H7.4l-.07-.2c-.08-.64.1-1.17.53-1.58c.43-.41.96-.62 1.58-.62c.46 0 .89.12 1.28.38l.7-.95C10.6 17.4 9.3 17.03 7.8 17.03zm-.06 5.5c-.67 0-1.22-.18-1.65-.54c-.44-.36-.65-.8-.65-1.32c0-.51.21-.94.62-1.3c.41-.36.92-.54 1.53-.54c.63 0 1.15.18 1.56.54c.41.36.61.8.61 1.3c0 .53-.21.97-.62 1.32c-.41.35-.95.54-1.6.54M15.8 2.03c-2.68 0-4.93 1-6.75 3.03C7.22 7.08 6.31 9.53 6.31 12.38c0 .85.11 1.68.34 2.48l1.2-.33c-.18-.7-.26-1.43-.26-2.15c0-2.3.72-4.3 2.15-5.98C11.2 5 12.94 4.18 15.02 4.18c1.8 0 3.27.58 4.42 1.73c1.15 1.15 1.73 2.62 1.73 4.43c0 1.3-.33 2.5-.98 3.58h-1.9c.42-.75.63-1.55.63-2.4c0-1.23-.4-2.24-1.2-3.05c-.8-.8-1.8-1.2-3.03-1.2c-1.25 0-2.28.4-3.08 1.2s-1.2 1.8-1.2 3.04c0 .9.24 1.68.73 2.33l-1.12.43c-.6-.85-.9-1.88-.9-3.1c0-1.7.58-3.17 1.73-4.43c1.15-1.25 2.62-1.88 4.43-1.88c1.63 0 3 .5 4.1 1.5l.7-.98c-1.25-1.12-2.78-1.68-4.58-1.68m-.8 10.58l-1.95.65c.43 1.33 1.25 2.36 2.48 3.1V18c-1.48-.63-2.6-1.65-3.38-3.05c-.78-1.4-1.17-2.98-1.17-4.73c0-1.75.58-3.22 1.73-4.43c1.15-1.2 2.6-1.8 4.38-1.8c1.73 0 3.17.55 4.33 1.65c1.15 1.1 1.73 2.53 1.73 4.28c0 1.9-.73 3.5-2.18 4.78c-1.45 1.28-3.25 1.93-5.4 1.93c-.95 0-1.85-.14-2.7-.43l.65-1.95c.75.2 1.5.3 2.28.3c1.58 0 2.9-.45 3.98-1.33c1.08-.88 1.6-2.02 1.6-3.4c0-1.2-.4-2.2-1.2-3c-.8-.8-1.8-1.2-3.03-1.2c-1.23 0-2.25.4-3.05 1.2c-.8.8-1.2 1.8-1.2 3.02c0 1.03.3 1.95.9 2.78M7.4 19.7l.15-.25c-.38-.62-.57-1.3-.57-2.05c0-.65.17-1.22.52-1.72s.8-.75 1.35-.75c.6 0 1.1.22 1.53.65l.7-.93c-.6-.53-1.32-.8-2.18-.8c-1 0-1.82.33-2.48 1c-.65.67-.98 1.5-.98 2.5c0 1.03.35 1.9.98 2.58c.28.3.6.53.95.68l.15-.93c-.25-.1-.48-.27-.68-.5z"/></svg>, // Lucide Cloud icon
  'Methodologies': Brain,
  'Soft Skills': Users,
  'Other': Lightbulb, // Default
};

const getCategoryIcon = (category: string) => {
  const Icon = categoryIcons[category] || Lightbulb;
  return <Icon className="w-5 h-5 mr-2 text-accent" />;
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Lightbulb className="w-6 h-6 text-primary" />
        <CardTitle className="text-2xl font-semibold text-primary">Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <h4 className="flex items-center text-lg font-medium text-foreground mb-2">
              {getCategoryIcon(category)}
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <Badge key={skill.id} variant="secondary" className="text-sm py-1 px-3 shadow-sm">
                  {skill.name}
                  {skill.level && <span className="ml-1.5 text-xs opacity-75">({skill.level})</span>}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
