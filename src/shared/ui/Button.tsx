"use client";

import { cn } from "@/shared/lib/cn";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight cursor-pointer outline-none overflow-hidden";

  const variants = {
    primary: cn(
      "rounded-3xl px-6 py-3",
      "bg-gradient-to-b from-blue-500/20 to-blue-600/40",
      "text-sky-50",
      "ring-1 ring-sky-400/20",
      "focus-visible:ring-2 focus-visible:ring-sky-400/50",
      "hover:bg-gradient-to-b hover:from-blue-500/25 hover:to-blue-600/50",
    ),
    secondary: cn(
      "rounded-full px-5 py-3",
      "bg-white/5 border border-white/10",
      "text-gray-100 backdrop-blur-lg",
      "hover:bg-white/10 transition-all",
    ),
    outline:
      "bg-transparent border border-accent-primary text-accent-primary hover:bg-accent-primary/10 rounded-xl px-6 py-3",
  };

  if (variant === "primary") {
    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        style={{ boxSizing: "border-box" }}
        {...props}
      >
        {/* Base gradient layer */}
        <span
          className="absolute inset-0 rounded-3xl z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,77,126,0) 0%, rgba(8,77,126,0.42) 100%), rgba(59,130,246,0.22)",
            boxShadow: "inset 0 0 12px rgba(151,200,255,0.44)",
          }}
        />

        {/* Hover gradient layer */}
        <span
          className="absolute inset-0 rounded-3xl z-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,77,126,0) 0%, rgba(8,77,126,0.54) 100%), rgba(59,130,246,0.30)",
            boxShadow: "inset 0 0 14px rgba(151,200,255,0.60)",
          }}
        />

        {/* Border gradient */}
        <span
          className="pointer-events-none absolute inset-0 rounded-3xl z-10"
          style={{
            padding: "1px",
            background:
              "linear-gradient(180deg, rgba(184,238,255,0.24) 0%, rgba(184,238,255,0) 100%), linear-gradient(0deg, rgba(184,238,255,0.32), rgba(184,238,255,0.32))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderRadius: "1.5rem",
          }}
        />

        {/* Content */}
        <span className="relative z-20 flex items-center justify-center gap-2 w-full">
          <span className="text-[15px] leading-none whitespace-nowrap">
            {children}
          </span>
          <ArrowRight className="w-4 h-4 flex-shrink-0 text-sky-100/90 transition-transform duration-300 ease-out group-hover:translate-x-0.5 will-change-transform" />
        </span>
      </button>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
