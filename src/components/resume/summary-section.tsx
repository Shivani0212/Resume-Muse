
import { UserCircle } from "lucide-react"; // Icon might not be needed here anymore if handled in page.tsx

interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  // This component now only renders the content part, not the Card or CardHeader.
  // The Card and AccordionTrigger (acting as CardHeader) are in page.tsx.
  return (
    <p className="text-foreground leading-relaxed text-justify">{summary}</p>
  );
}
