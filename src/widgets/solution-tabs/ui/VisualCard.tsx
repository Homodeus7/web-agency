import type { ReactNode } from "react";

interface VisualCardProps {
  icon: {
    gradient: string;
  };
  label: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function VisualCard({ icon, label, children, footer }: VisualCardProps) {
  return (
    <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-5 h-5 rounded bg-linear-to-br ${icon.gradient}`} />
        <span className="text-sm text-text-secondary">{label}</span>
      </div>
      {children}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
