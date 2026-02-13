import type { Metric } from "../types";
import { MetricCell } from "./MetricCell";

interface MetricRowProps {
  metric: Metric;
  isLast: boolean;
}

export function MetricRow({ metric, isLast }: MetricRowProps) {
  return (
    <div
      className={`group relative grid grid-cols-[30%_23.33%_23.33%_23.33%] min-w-[800px] py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${
        isLast ? "border-b-0" : ""
      }`}
    >
      {/* Label Column */}
      <div className="px-4 md:px-6 flex items-center gap-3">
        <div className="text-white/50 group-hover:text-white transition-colors shrink-0">
          {metric.icon}
        </div>
        <span className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors font-medium">
          {metric.label}
        </span>
      </div>

      <MetricCell data={metric.webflow} platform="webflow" />
      <MetricCell data={metric.wordpress} platform="wordpress" />
      <MetricCell data={metric.nextjs} platform="nextjs" isHighlighted />
    </div>
  );
}
