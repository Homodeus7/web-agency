interface ProgressBarProps {
  value: number;
  colorClass: string;
}

export function ProgressBar({ value, colorClass }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2">
      <div
        className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
