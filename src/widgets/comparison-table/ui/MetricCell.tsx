import type { MetricValue, Platform } from "../types";

interface MetricCellProps {
  data: MetricValue;
  platform: Platform;
  isHighlighted?: boolean;
}

export function MetricCell({ data, platform, isHighlighted }: MetricCellProps) {
  const isNextjs = platform === "nextjs";

  return (
    <div className="px-4 md:px-6 flex flex-col justify-center gap-1">
      {/* Bar Type */}
      {data.type === "bar" && typeof data.value === "number" && (
        <>
          <span
            className={`text-base md:text-lg font-mono ${
              isHighlighted
                ? "text-cyan-400"
                : "text-gray-400 group-hover:text-white transition-colors"
            }`}
          >
            {data.text}
          </span>
          <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
            {data.value}%
          </span>
        </>
      )}

      {/* Status Type */}
      {data.type === "status" && (
        <>
          <span
            className={`text-base md:text-lg font-mono ${
              isHighlighted
                ? "text-cyan-400"
                : "text-gray-400 group-hover:text-white transition-colors"
            }`}
          >
            {data.value}
          </span>
          {data.text && (
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
              {data.text}
            </span>
          )}
        </>
      )}

      {/* Text Type - Special styling for highlighted column */}
      {data.type === "text" && (
        <span
          className={`text-xl md:text-2xl font-medium ${
            isHighlighted
              ? "text-cyan-400"
              : "text-gray-400 group-hover:text-white transition-colors"
          }`}
        >
          {data.value}
        </span>
      )}
    </div>
  );
}
