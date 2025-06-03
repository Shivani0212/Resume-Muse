import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'; // Assuming these components are in your ui library

interface AchievementsSectionProps {
 achievements: Achievement[];
}

interface Achievement {
  id: string;
  description: string;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
 return null; // Don't render the section if there are no achievements
  }

  return (
    <Card data-ai-hint="achievements section">
      <CardHeader>
        <CardTitle data-ai-hint="section title">Achievements</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul className="grid gap-2">
          {achievements.map((achievement: Achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-4 h-4 text-primary flex-shrink-0 mt-1">•</span> {/* Use a standard bullet point or choose an icon*/}
              <span className="flex-grow text-muted-foreground">{achievement.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;