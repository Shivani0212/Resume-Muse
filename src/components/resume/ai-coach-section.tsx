
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, ArrowRight } from "lucide-react";

export function AiCoachSection() {
  return (
    <Card className="shadow-xl hover-scale-up bg-gradient-to-br from-primary/10 via-card to-accent/10">
      <CardHeader className="items-center text-center">
        <Wand2 className="w-12 h-12 text-accent mb-3" />
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
          AI Resume Coach
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1 max-w-md mx-auto">
          Elevate your job applications! Let our AI help you tailor your resume specifically for any job description, highlighting your most relevant skills and experiences.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <p className="mb-6 text-foreground">
          Get a personalized resume draft and a summary of suggested improvements in seconds.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 px-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="/tailor">
            Tailor Your Resume Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
