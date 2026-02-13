import type { ReactNode } from "react";

interface AnimatedGradientCardProps {
  children: ReactNode;
  className?: string;
  gradientColors?: {
    from: string;
    via?: string;
    to: string;
  };
}

export function AnimatedGradientCard({
  children,
  className = "",
  gradientColors = {
    from: "#4f46e5",
    to: "#06b6d4",
  },
}: AnimatedGradientCardProps) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: `
          linear-gradient(var(--color-bg-secondary), var(--color-bg-secondary)) padding-box,
          linear-gradient(
            135deg,
            ${gradientColors.from},
            ${gradientColors.via || gradientColors.from},
            ${gradientColors.to}
          ) border-box
        `,
        border: "2px solid transparent",
      }}
    >
      <div className="p-10 md:p-12 rounded-2xl bg-bg-secondary/40 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
