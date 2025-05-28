
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center gap-2">
        <UserCircle className="w-6 h-6 text-primary" />
        <CardTitle className="text-2xl font-semibold text-primary">Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed">{summary}</p>
      </CardContent>
    </Card>
  );
}
