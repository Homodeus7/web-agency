import type { Metric } from "../types";
import { MetricCell } from "./MetricCell";

interface MetricRowProps {
  metric: Metric;
  isLast: boolean;
}

const STICKY_CELL_CLASS =
  "sticky left-0 z-10 bg-slate-900/95 backdrop-blur-sm after:absolute after:right-0 after:top-0 after:bottom-0 after:w-4 after:bg-linear-to-r after:from-slate-900/80 after:to-transparent after:pointer-events-none md:after:hidden";

export function MetricRow({ metric, isLast }: MetricRowProps) {
  return (
    <div
      className={`grid grid-cols-[1.2fr_1fr_1fr_1.1fr] border-b border-slate-800/40 hover:bg-slate-800/20 transition-colors group ${isLast ? "border-b-0" : ""}`}
    >
      {/* Label Column */}
      <div
        className={`p-4 md:p-6 flex items-center gap-2 md:gap-3 text-slate-300 font-medium text-sm md:text-base ${STICKY_CELL_CLASS}`}
      >
        <div className="p-1.5 md:p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors shrink-0">
          {metric.icon}
        </div>
        <span className="line-clamp-2">{metric.label}</span>
      </div>

      <MetricCell data={metric.webflow} platform="webflow" />
      <MetricCell data={metric.wordpress} platform="wordpress" />
      <MetricCell data={metric.nextjs} platform="nextjs" />
    </div>
  );
}
