
import type { Project } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <Code className="w-6 h-6 text-primary" />
        <CardTitle className="text-2xl font-semibold text-primary">Projects</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {project.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.dataAiHint || "project image"}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            {project.link && (
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
