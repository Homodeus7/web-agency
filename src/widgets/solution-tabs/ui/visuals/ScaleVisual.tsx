import { VisualCard } from "../VisualCard";

const CDN_LOCATIONS = [
  { name: "Москва", x: "72%", y: "25%" },
  { name: "Франкфурт", x: "52%", y: "28%" },
  { name: "Нью-Йорк", x: "25%", y: "35%" },
  { name: "Сингапур", x: "80%", y: "60%" },
  { name: "Сан-Паулу", x: "32%", y: "75%" },
];

const CDN_CONNECTIONS = [
  { x1: "72%", y1: "25%", x2: "52%", y2: "28%" },
  { x1: "52%", y1: "28%", x2: "25%", y2: "35%" },
  { x1: "72%", y1: "25%", x2: "80%", y2: "60%" },
];

const CDN_STATS = [
  { label: "5 регионов" },
  { label: "99.99% uptime" },
  { label: "< 50ms latency" },
];

export function ScaleVisual() {
  return (
    <VisualCard
      icon={{ gradient: "from-cyan-400 to-blue-500" }}
      label="Vercel Edge Network"
      footer={
        <div className="flex justify-between text-xs text-text-secondary">
          {CDN_STATS.map((stat) => (
            <span key={stat.label}>{stat.label}</span>
          ))}
        </div>
      }
    >
      <div className="relative h-40 bg-white/5 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {CDN_LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="absolute flex flex-col items-center"
            style={{ left: loc.x, top: loc.y }}
          >
            <div className="w-3 h-3 rounded-full bg-accent-secondary shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse" />
            <span className="text-[10px] text-text-secondary mt-1 whitespace-nowrap">
              {loc.name}
            </span>
          </div>
        ))}
        <svg className="absolute inset-0 w-full h-full">
          {CDN_CONNECTIONS.map((conn, i) => (
            <line
              key={i}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="rgba(6,182,212,0.3)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </VisualCard>
  );
}
