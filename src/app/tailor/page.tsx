
"use client";

import { useState, useEffect } from "react";
import { tailorResumeToJobDescription, TailorResumeToJobDescriptionInput, TailorResumeToJobDescriptionOutput } from "@/ai/flows/tailor-resume";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Loader2, ClipboardCopy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { mockResumeData } from "@/lib/resume-data"; // For default resume content

// Helper to stringify resume data (simple version)
const stringifyResume = (resume: typeof mockResumeData): string => {
  let content = `Name: ${resume.personalInfo.name}\nTitle: ${resume.personalInfo.title}\nEmail: ${resume.personalInfo.email}\nPhone: ${resume.personalInfo.phone}\nSummary: ${resume.personalInfo.summary}\n\n`;
  content += "Experience:\n";
  resume.experience.forEach(exp => {
    content += `- ${exp.role} at ${exp.company} (${exp.period})\n  Responsibilities: ${exp.responsibilities.join(', ')}\n`;
  });
  content += "\nEducation:\n";
  resume.education.forEach(edu => {
    content += `- ${edu.degree} from ${edu.institution} (${edu.period})\n`;
  });
  content += "\nSkills:\n";
  resume.skills.forEach(skill => {
    content += `- ${skill.name} (${skill.category}${skill.level ? ', ' + skill.level : ''})\n`;
  });
  content += "\nProjects:\n";
  resume.projects.forEach(proj => {
    content += `- ${proj.name}: ${proj.description}\n  Technologies: ${proj.technologies.join(', ')}\n`;
  });
  return content;
};


export default function TailorResumePage() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tailoredResult, setTailoredResult] = useState<TailorResumeToJobDescriptionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    // Pre-fill resume text with mock data
    setResumeText(stringifyResume(mockResumeData));
  }, []);

  const handleTailorResume = async () => {
    if (!resumeText || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please provide both your resume content and the job description.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setTailoredResult(null);
    try {
      const input: TailorResumeToJobDescriptionInput = {
        resume: resumeText,
        jobDescription,
      };
      const result = await tailorResumeToJobDescription(input);
      setTailoredResult(result);
      toast({
        title: "Resume Tailored!",
        description: "Your resume has been tailored to the job description.",
      });
    } catch (error) {
      console.error("Error tailoring resume:", error);
      toast({
        title: "Error",
        description: "Failed to tailor resume. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };
  
  const handleCopyToClipboard = async (text: string, type: 'resume' | 'summary') => {
    if (!isClient) return;
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'resume') setCopiedResume(true);
      if (type === 'summary') setCopiedSummary(true);
      toast({ title: `${type === 'resume' ? 'Resume' : 'Summary'} copied to clipboard!`});
      setTimeout(() => {
        if (type === 'resume') setCopiedResume(false);
        if (type === 'summary') setCopiedSummary(false);
      }, 2000);
    } catch (err) {
      toast({ title: 'Failed to copy', variant: 'destructive' });
    }
  };

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wand2 className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">AI Resume Tailor</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            Paste your current resume and the job description below. Our AI will help you tailor your resume to highlight the most relevant skills and experiences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="resumeText" className="text-lg font-medium">Your Resume</Label>
            <Textarea
              id="resumeText"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              rows={15}
              className="focus:ring-accent focus:border-accent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobDescription" className="text-lg font-medium">Job Description</Label>
            <Textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              rows={10}
              className="focus:ring-accent focus:border-accent"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleTailorResume} disabled={isLoading} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 px-8">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Tailoring...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Tailor My Resume
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {tailoredResult && (
        <div className="mt-8 space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-2xl font-semibold text-primary">Tailored Resume</CardTitle>
              <Button variant="outline" size="sm" onClick={() => handleCopyToClipboard(tailoredResult.tailoredResume, 'resume')}>
                {copiedResume ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                <span className="ml-2">{copiedResume ? 'Copied!' : 'Copy'}</span>
              </Button>
            </CardHeader>
            <CardContent>
              <Textarea
                value={tailoredResult.tailoredResume}
                readOnly
                rows={20}
                className="bg-muted/50 border-muted-foreground/30"
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-2xl font-semibold text-primary">Summary of Changes</CardTitle>
               <Button variant="outline" size="sm" onClick={() => handleCopyToClipboard(tailoredResult.summary, 'summary')}>
                {copiedSummary ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                <span className="ml-2">{copiedSummary ? 'Copied!' : 'Copy'}</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap p-4 bg-muted/50 rounded-md border border-muted-foreground/30 leading-relaxed">
                {tailoredResult.summary}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
