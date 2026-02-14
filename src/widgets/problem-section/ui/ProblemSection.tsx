import {
  AlertTriangle,
  TrendingUp,
  Lock,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/shared/ui";
import type { ProblemData } from "@/sanity/lib/types";

const iconMap: Record<string, LucideIcon> = {
  gauge: Gauge,
  "trending-up": TrendingUp,
  lock: Lock,
  "alert-triangle": AlertTriangle,
};

// Визуальные компоненты для каждой проблемы
const ProblemVisuals = {
  gauge: () => (
    <div className="relative h-48 rounded-xl bg-white/3 border border-white/6 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Спидометр */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#ef4444"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset="60"
            className="drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
            style={{
              animation: "gauge-fill 2s ease-out infinite alternate",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white tracking-tight">
            Slow
          </span>
          <span className="text-[10px] text-red-400 uppercase tracking-wider font-medium">
            Loading
          </span>
        </div>
      </div>
    </div>
  ),

  "trending-up": () => (
    <div className="relative h-48 rounded-xl bg-white/3 border border-white/6 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center p-6">
      {/* График роста расходов */}
      <div className="relative w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 200 120">
          {/* Ось */}
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="100"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />

          {/* Растущая линия */}
          <polyline
            points="20,90 60,75 100,65 140,45 180,25"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"
            style={{
              strokeDasharray: "250",
              strokeDashoffset: "250",
              animation: "draw-line 2s ease-out forwards",
            }}
          />

          {/* Точки */}
          {[
            { x: 20, y: 90 },
            { x: 60, y: 75 },
            { x: 100, y: 65 },
            { x: 140, y: 45 },
            { x: 180, y: 25 },
          ].map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#ef4444"
              className="opacity-0"
              style={{
                animation: `fade-in 0.3s ease-out ${0.4 * i + 1.5}s forwards`,
              }}
            />
          ))}
        </svg>

        {/* Метка */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-red-500/20 backdrop-blur rounded border border-red-500/30">
          <span className="text-[10px] text-red-400 font-mono">
            ↑ Costs Rising
          </span>
        </div>
      </div>
    </div>
  ),

  lock: () => (
    <div className="relative h-48 rounded-xl bg-white/3 border border-white/6 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center">
      {/* Открытый/уязвимый замок */}
      <div className="relative">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]"
        >
          {/* Дужка замка (открытая) */}
          <path
            d="M25 35V25C25 16.7157 31.7157 10 40 10C48.2843 10 55 16.7157 55 25V28"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-pulse"
          />
          {/* Тело замка */}
          <rect
            x="20"
            y="35"
            width="40"
            height="30"
            rx="4"
            fill="#ef4444"
            fillOpacity="0.2"
            stroke="#ef4444"
            strokeWidth="2"
          />
          {/* Замочная скважина */}
          <circle cx="40" cy="50" r="4" fill="#ef4444" />
          <line
            x1="40"
            y1="54"
            x2="40"
            y2="60"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Предупреждающие индикаторы */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full" />
      </div>
    </div>
  ),

  "alert-triangle": () => (
    <div className="relative h-48 rounded-xl bg-white/3 border border-white/6 overflow-hidden group-hover:border-white/10 transition-colors flex items-center justify-center">
      {/* Предупреждающий треугольник */}
      <div className="relative">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          className="drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]"
        >
          {/* Внешний треугольник */}
          <path
            d="M50 15 L85 75 L15 75 Z"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          {/* Внутренний треугольник (заливка) */}
          <path d="M50 15 L85 75 L15 75 Z" fill="#ef4444" fillOpacity="0.1" />
          {/* Восклицательный знак */}
          <line
            x1="50"
            y1="35"
            x2="50"
            y2="55"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="50" cy="65" r="2.5" fill="#ef4444" />
        </svg>

        {/* Волны предупреждения */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-500/30 rounded-full"
          style={{
            animation: "warning-pulse 2s ease-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-red-500/20 rounded-full"
          style={{
            animation: "warning-pulse 2s ease-out infinite 1s",
          }}
        />
      </div>
    </div>
  ),
};

interface ProblemSectionProps {
  title: string;
  description: string;
  problems: ProblemData[];
}

export function ProblemSection({
  title,
  description,
  problems,
}: ProblemSectionProps) {
  return (
    <section className="border-white/6 border-t pt-24 pb-24 relative" id="problems">
      <Container>
        <SectionHeading variant="minimalist" description={description}>
          {title}
        </SectionHeading>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, idx) => {
              const Visual =
                ProblemVisuals[item.iconName as keyof typeof ProblemVisuals] ??
                ProblemVisuals.gauge;

              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#0E0F11] border border-white/8 overflow-hidden hover:border-white/20 transition-colors duration-500"
                >
                  {/* Glow эффект */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-all duration-500" />

                  <div className="p-8 relative z-10">
                    {/* Иконка */}
                    {item.stat && (
                      <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-6 ">
                        {item.stat}
                      </div>
                    )}
                    {/* <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-500">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div> */}

                    {/* Заголовок */}
                    <h3 className="text-xl font-medium text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Визуальное представление */}
                    <Visual />

                    {/* Статистика */}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
