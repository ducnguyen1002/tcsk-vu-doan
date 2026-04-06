"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "white";
  children: React.ReactNode;
  className?: string;
}

const Button = ({ variant = "gold", children, className, ...props }: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden uppercase tracking-[0.15em] text-[11px] font-medium transition-all duration-700 ease-out py-5 px-10 border";
  
  const variants = {
    gold: "bg-gold border-gold text-white hover:bg-ink hover:border-ink",
    outline: "bg-transparent border-gold text-gold hover:bg-gold hover:text-white",
    white: "bg-transparent border-white/40 text-white hover:bg-white hover:text-ink hover:border-white",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
