"use client";

import dynamic from "next/dynamic";
import { Container, SectionHeading, AnimatedGradientCard } from "@/shared/ui";
import type { SolutionData } from "@/sanity/lib/types";
import { Zap, TrendingUp, Gauge, Search, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ScrollStack = dynamic(() => import("@/components/ScrollStack").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="min-h-100 flex items-center justify-center">
    <div className="text-neutral-400">Загрузка...</div>
  </div>,
});

const ScrollStackItem = dynamic(() => import("@/components/ScrollStack").then((mod) => mod.ScrollStackItem), {
  ssr: false,
});

interface SolutionTabsProps {
  title: string;
  solutions: SolutionData[];
}

export function SolutionTabs({ title, solutions }: SolutionTabsProps) {
  return (
    <section
      id="solutions"
      className="pt-24 bg-bg-primary relative overflow-hidden"
    >
      <Container>
        <SectionHeading
          variant="minimalist"
          description="Современный подход к разработке"
        >
          {title}
        </SectionHeading>

        {/* ScrollStack контейнер */}
        <div className="max-w-4xl mx-auto">
          <ScrollStack
            itemDistance={100}
            itemScale={0.05}
            itemStackDistance={30}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.88}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={true}
            onStackComplete={() => {}}
          >
            {solutions.map((solution) => (
              <ScrollStackItem key={solution.id}>
                <SolutionCard solution={solution} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </Container>
    </section>
  );
}

interface SolutionCardProps {
  solution: SolutionData;
}

// Icon mapping by solution id
const ICON_MAP: Record<string, LucideIcon> = {
  perf: Zap,
  flex: TrendingUp,
  scale: Gauge,
  seo: Search,
};

// Color schemes by solution id
const COLOR_SCHEMES: Record<
  string,
  {
    border: { from: string; via?: string; to: string };
    iconBg: { from: string; to: string };
    iconColor: string;
    checkBg: string;
  }
> = {
  perf: {
    border: { from: "#4f46e5", via: "#7c3aed", to: "#06b6d4" },
    iconBg: { from: "from-indigo-500/20", to: "to-cyan-500/20" },
    iconColor: "text-cyan-400",
    checkBg: "hsl(191, 85%, 50%)",
  },
  flex: {
    border: { from: "#7c3aed", via: "#c026d3", to: "#ec4899" },
    iconBg: { from: "from-purple-500/20", to: "to-pink-500/20" },
    iconColor: "text-pink-400",
    checkBg: "hsl(330, 81%, 60%)",
  },
  scale: {
    border: { from: "#3b82f6", via: "#6366f1", to: "#8b5cf6" },
    iconBg: { from: "from-blue-500/20", to: "to-indigo-500/20" },
    iconColor: "text-indigo-400",
    checkBg: "hsl(263, 70%, 50%)",
  },
  seo: {
    border: { from: "#10b981", via: "#14b8a6", to: "#06b6d4" },
    iconBg: { from: "from-emerald-500/20", to: "to-teal-500/20" },
    iconColor: "text-emerald-400",
    checkBg: "hsl(167, 85%, 45%)",
  },
};

function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = ICON_MAP[solution.id] || Zap;
  const colors = COLOR_SCHEMES[solution.id] || COLOR_SCHEMES.perf;

  // Ограничиваем количество фич до 4 для минимализма
  const features = solution.features?.slice(0, 4) || [];

  return (
    <AnimatedGradientCard gradientColors={colors.border}>
      {/* Header: Icon + Title */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className={`h-12 w-12 rounded-xl border border-white/10 bg-linear-to-br ${colors.iconBg.from} ${colors.iconBg.to} flex items-center justify-center`}
          >
            <Icon className={`h-6 w-6 ${colors.iconColor}`} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold tracking-tight text-white/90">
              {solution.title || solution.label}
            </h3>
            {solution.label && solution.title && (
              <p className="text-xs text-neutral-500/80">{solution.label}</p>
            )}
          </div>
        </div>
      </div>

      {/* Metric */}
      {solution.metric && (
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-white/90">
              {solution.metric}
            </span>
          </div>
          {solution.description && (
            <p className="text-sm text-neutral-400/90 mt-3 line-clamp-2">
              {solution.description}
            </p>
          )}
        </div>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-4 text-sm text-neutral-300/90">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className="flex h-4 w-4 items-center justify-center rounded-full shrink-0"
                style={{ backgroundColor: colors.checkBg }}
              >
                <Check
                  className="h-3 w-3"
                  stroke="hsl(0, 0%, 7%)"
                  strokeWidth={3}
                />
              </div>
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </AnimatedGradientCard>
  );
}
