"use client";

import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionLabel = ({ children, className, dark = false }: SectionLabelProps) => {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <span className={cn("inline-block w-8 h-[1px]", dark ? "bg-stone" : "bg-gold")}></span>
      <span className={cn("text-[11px] uppercase tracking-[0.2em] font-medium", dark ? "text-stone" : "text-gold")}>
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;
