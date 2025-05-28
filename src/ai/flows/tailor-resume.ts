// tailor-resume.ts
'use server';

/**
 * @fileOverview This file contains a Genkit flow for tailoring a resume to a specific job description.
 *
 * - tailorResumeToJobDescription - A function that tailors the resume based on the job description.
 * - TailorResumeToJobDescriptionInput - The input type for the tailorResumeToJobDescription function.
 * - TailorResumeToJobDescriptionOutput - The return type for the tailorResumeToJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorResumeToJobDescriptionInputSchema = z.object({
  resume: z.string().describe('The complete resume content as a string.'),
  jobDescription: z.string().describe('The job description to tailor the resume to.'),
});
export type TailorResumeToJobDescriptionInput = z.infer<typeof TailorResumeToJobDescriptionInputSchema>;

const TailorResumeToJobDescriptionOutputSchema = z.object({
  tailoredResume: z.string().describe('The tailored resume content.'),
  summary: z.string().describe('A summary of the changes made to the resume.'),
});
export type TailorResumeToJobDescriptionOutput = z.infer<typeof TailorResumeToJobDescriptionOutputSchema>;

export async function tailorResumeToJobDescription(
  input: TailorResumeToJobDescriptionInput
): Promise<TailorResumeToJobDescriptionOutput> {
  return tailorResumeToJobDescriptionFlow(input);
}

const tailorResumeToJobDescriptionPrompt = ai.definePrompt({
  name: 'tailorResumeToJobDescriptionPrompt',
  input: {schema: TailorResumeToJobDescriptionInputSchema},
  output: {schema: TailorResumeToJobDescriptionOutputSchema},
  prompt: `You are an expert resume writer. Analyze the provided resume and job description, and tailor the resume to match the job description.

Resume:
{{resume}}

Job Description:
{{jobDescription}}

Focus on highlighting the skills and experiences that are most relevant to the job description. Provide a summary of the changes you made. Return the entire tailored resume as a single string, and the summary as a string.

Ensure the tailored resume is well-formatted and easy to read.
`,
});

const tailorResumeToJobDescriptionFlow = ai.defineFlow(
  {
    name: 'tailorResumeToJobDescriptionFlow',
    inputSchema: TailorResumeToJobDescriptionInputSchema,
    outputSchema: TailorResumeToJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await tailorResumeToJobDescriptionPrompt(input);
    return output!;
  }
);
