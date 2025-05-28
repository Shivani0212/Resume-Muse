
"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface SectionWrapperProps {
  children: React.ReactNode;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function SectionWrapper({ children, onMoveUp, onMoveDown, isFirst, isLast }: SectionWrapperProps) {
  return (
    <div className="relative group mb-8">
      {onMoveUp && onMoveDown && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={onMoveUp}
            disabled={isFirst}
            aria-label="Move section up"
            className="h-8 w-8"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onMoveDown}
            disabled={isLast}
            aria-label="Move section down"
            className="h-8 w-8"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      )}
      {children}
    </div>
  );
}
