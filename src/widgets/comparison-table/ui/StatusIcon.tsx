import { Check, X, AlertTriangle } from "lucide-react";
import type { MetricStatus } from "../types";

interface StatusIconProps {
  status?: MetricStatus;
  text: string;
}

const statusConfig = {
  danger: {
    icon: X,
    label: "Нет доступа",
    containerClass: "text-red-400 bg-red-400/10",
    textClass: "text-slate-500",
  },
  warning: {
    icon: AlertTriangle,
    label: "С ограничениями",
    containerClass: "text-amber-400 bg-amber-400/10",
    textClass: "text-slate-500",
  },
  success: {
    icon: Check,
    label: "Полный доступ",
    containerClass: "text-emerald-400 bg-emerald-400/10",
    textClass: "text-emerald-400/60",
  },
} as const;

export function StatusIcon({ status = "success", text }: StatusIconProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-start gap-1">
      <div
        className={`flex items-center ${config.containerClass} px-2 py-1 rounded text-xs font-medium`}
      >
        <Icon size={14} className="mr-1.5" />
        {config.label}
      </div>
      <span
        className={`text-[10px] ${config.textClass} font-medium uppercase tracking-wider`}
      >
        {text}
      </span>
    </div>
  );
}
