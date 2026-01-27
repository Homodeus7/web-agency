"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Container, SectionHeading } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { SolutionData } from "@/sanity/lib/types";
import { TabVisual } from "./TabVisual";
import { useState } from "react";

interface SolutionTabsProps {
  title: string;
  solutions: SolutionData[];
}

export function SolutionTabs({ title, solutions }: SolutionTabsProps) {
  const [activeId, setActiveId] = useState(solutions[0]?.id ?? "");

  return (
    <section
      id="solutions"
      className="py-24 bg-bg-primary relative overflow-hidden"
    >
      <Container>
        <SectionHeading badge="Решение" badgeVariant="accent">
          {title}
        </SectionHeading>

        <Tabs.Root value={activeId} onValueChange={setActiveId}>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <Tabs.List
              className={cn(
                "w-full lg:col-span-4",
                "flex  lg:flex-col gap-2",
                "overflow-x-auto lg:overflow-x-visible",
                "pb-2 lg:pb-0",
                "-mx-4 px-4 lg:mx-0 lg:px-0",
                "scrollbar-hide",
              )}
              aria-label="Решения"
            >
              {solutions.map((tab) => (
                <Tabs.Trigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "relative group overflow-hidden",
                    "px-4 py-3 lg:px-6 lg:py-4",
                    "rounded-xl transition-all duration-300",
                    "text-text-secondary hover:bg-white/5",
                    "data-[state=active]:bg-bg-elevated data-[state=active]:text-white",
                    "lg:shrink",
                    "whitespace-nowrap lg:whitespace-normal",
                    "text-left",
                  )}
                >
                  {/* Вертикальный индикатор для desktop */}
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full bg-accent-primary opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300" />
                  {/* Горизонтальный индикатор для mobile */}
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-0.5 rounded-full bg-accent-primary opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300" />
                  <span className="font-semibold text-base lg:text-lg relative z-10">
                    {tab.label}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="w-full lg:col-span-8 relative">
              {solutions.map((tab) => (
                <Tabs.Content
                  key={tab.id}
                  value={tab.id}
                  forceMount
                  className={cn(
                    "h-full tab-panel",
                    activeId === tab.id
                      ? "tab-panel-enter"
                      : "tab-panel-exit",
                  )}
                >
                  <TabContent tab={tab} />
                </Tabs.Content>
              ))}
            </div>
          </div>
        </Tabs.Root>
      </Container>
    </section>
  );
}

interface TabContentProps {
  tab: SolutionData;
}

function TabContent({ tab }: TabContentProps) {
  return (
    <div className="gradient-border-wrapper h-full">
      <div className="bg-bg-secondary p-8 md:p-12 rounded-2xl h-full flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">
                {tab.title}
              </h3>
              <p className="text-xl text-text-secondary">{tab.description}</p>
            </div>
            <MetricBadge metric={tab.metric} />
          </div>

          <FeatureList features={tab.features ?? []} />

          <TabVisual tabId={tab.id} />
        </div>
      </div>
    </div>
  );
}

interface MetricBadgeProps {
  metric?: string;
}

function MetricBadge({ metric }: MetricBadgeProps) {
  if (!metric) {
    return null;
  }

  return (
    <div className="hidden md:flex flex-col items-center gap-2.5 pt-4 px-1 justify-start w-24 h-24 min-w-24 rounded-full bg-linear-to-br from-accent-primary to-accent-secondary text-white font-bold">
      <span className="text-[10px] opacity-60 uppercase">Метрика</span>
      <span className="text-sm text-center leading-tight">{metric}</span>
    </div>
  );
}

interface FeatureListProps {
  features: string[];
}

function FeatureList({ features }: FeatureListProps) {
  if (features.length === 0) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <span className="font-medium text-text-primary">{feature}</span>
        </div>
      ))}
    </div>
  );
}
