
import type { Project } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Card className="shadow-lg hover-scale-up">
      <CardHeader className="flex flex-row items-center gap-2">
        <Code className="w-6 h-6 text-primary" />
        <CardTitle className="text-2xl font-semibold text-primary">Projects</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2"> {/* Increased gap for better spacing with rotation */}
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="group flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:rotate-[-1deg] bg-card"
          >
            {project.imageUrl && (
              project.link ? (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.name}`} className="block">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                      data-ai-hint={project.dataAiHint || "project image"}
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110" // Still apply scale effect even if not clickable
                    data-ai-hint={project.dataAiHint || "project image"}
                  />
                </div>
              )
            )}
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs shadow-sm bg-secondary/70 hover:bg-secondary transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {project.link && (
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80 font-medium">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
