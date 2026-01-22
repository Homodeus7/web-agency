import { VisualCard } from "../VisualCard";
import { CircularMetric } from "../CircularMetric";

const LIGHTHOUSE_METRICS = [
  { label: "Скорость", value: 98, color: "text-green-400" },
  { label: "Доступность", value: 100, color: "text-green-400" },
  { label: "SEO", value: 100, color: "text-green-400" },
  { label: "Практики", value: 95, color: "text-green-400" },
];

export function LighthouseVisual() {
  return (
    <VisualCard
      icon={{ gradient: "from-orange-400 to-red-500" }}
      label="Lighthouse Report"
    >
      <div className="grid grid-cols-4 gap-4">
        {LIGHTHOUSE_METRICS.map((metric) => (
          <CircularMetric
            key={metric.label}
            label={metric.label}
            value={metric.value}
            color={metric.color}
          />
        ))}
      </div>
    </VisualCard>
  );
}
