
"use client";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="relative group mb-10 md:mb-12">
      {children}
    </div>
  );
}
