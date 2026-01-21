import type { MetricValue, Platform } from "../types";
import { ProgressBar } from "./ProgressBar";
import { StatusIcon } from "./StatusIcon";

interface MetricCellProps {
  data: MetricValue;
  platform: Platform;
}

const platformStyles = {
  webflow: {
    barColor: "bg-slate-600",
    textClass: "text-slate-400",
    cellClass: "border-r border-slate-800/30",
  },
  wordpress: {
    barColor: "bg-slate-500",
    textClass: "text-slate-400",
    cellClass: "border-r border-slate-800/30",
  },
  nextjs: {
    barColor:
      "bg-linear-to-r from-blue-500 to-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
    textClass: "text-blue-200 font-medium",
    cellClass: "bg-blue-500/5 relative",
  },
} as const;

export function MetricCell({ data, platform }: MetricCellProps) {
  const styles = platformStyles[platform];
  const isNextjs = platform === "nextjs";

  return (
    <div className={`p-3 md:p-6 flex flex-col justify-center ${styles.cellClass}`}>
      {isNextjs && (
        <div className="absolute inset-y-0 left-0 w-px bg-blue-500/10" />
      )}

      {data.type === "bar" && typeof data.value === "number" && (
        <>
          <span className={`text-xs md:text-sm ${styles.textClass} line-clamp-1 mb-1`}>
            {data.text}
          </span>
          {isNextjs ? (
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2 relative">
              <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
              <div
                className={`h-full rounded-full ${styles.barColor}`}
                style={{ width: `${data.value}%` }}
              />
            </div>
          ) : (
            <ProgressBar value={data.value} colorClass={styles.barColor} />
          )}
        </>
      )}

      {data.type === "status" && (
        <StatusIcon status={data.status} text={data.text || ""} />
      )}

      {data.type === "text" && (
        <span
          className={
            isNextjs
              ? "text-lg md:text-xl font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
              : "text-base md:text-lg font-medium text-slate-400"
          }
        >
          {data.value}
        </span>
      )}
    </div>
  );
}
