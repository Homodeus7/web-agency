"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { SolutionData } from "@/sanity/lib/types";

interface SolutionTabsProps {
  title: string;
  solutions: SolutionData[];
}

// Lighthouse метрики для таба "Скорость"
function LighthouseVisual() {
  const metrics = [
    { label: "Скорость", value: 98, color: "text-green-400" },
    { label: "Доступность", value: 100, color: "text-green-400" },
    { label: "SEO", value: 100, color: "text-green-400" },
    { label: "Практики", value: 95, color: "text-green-400" },
  ];

  return (
    <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded bg-linear-to-br from-orange-400 to-red-500" />
        <span className="text-sm text-text-secondary">Lighthouse Report</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-white/10"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${metric.value} 100`}
                  strokeLinecap="round"
                  className={metric.color}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                {metric.value}
              </span>
            </div>
            <span className="text-xs text-text-secondary text-center">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Превью компонентов для таба "Гибкость"
function FlexibilityVisual() {
  return (
    <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded bg-linear-to-br from-purple-400 to-pink-500" />
        <span className="text-sm text-text-secondary">Sanity Studio</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="w-8 h-8 rounded bg-accent-primary/20 flex items-center justify-center">
            <span className="text-accent-primary text-xs">T</span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-white">Заголовок секции</div>
            <div className="text-xs text-text-secondary">
              Редактируйте прямо в браузере
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="w-8 h-8 rounded bg-accent-secondary/20 flex items-center justify-center">
            <span className="text-accent-secondary text-xs">I</span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-white">Изображения</div>
            <div className="text-xs text-text-secondary">
              Drag & drop загрузка
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center">
            <span className="text-yellow-400 text-xs">L</span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-white">Списки и блоки</div>
            <div className="text-xs text-text-secondary">
              Гибкая структура контента
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>
    </div>
  );
}

// CDN карта для таба "Масштаб"
function ScaleVisual() {
  const locations = [
    { name: "Москва", x: "72%", y: "25%" },
    { name: "Франкфурт", x: "52%", y: "28%" },
    { name: "Нью-Йорк", x: "25%", y: "35%" },
    { name: "Сингапур", x: "80%", y: "60%" },
    { name: "Сан-Паулу", x: "32%", y: "75%" },
  ];

  return (
    <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded bg-linear-to-br from-cyan-400 to-blue-500" />
        <span className="text-sm text-text-secondary">Vercel Edge Network</span>
      </div>
      <div className="relative h-40 bg-white/5 rounded-lg overflow-hidden">
        {/* World map grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* CDN points */}
        {locations.map((loc) => (
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
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          <line
            x1="72%"
            y1="25%"
            x2="52%"
            y2="28%"
            stroke="rgba(6,182,212,0.3)"
            strokeWidth="1"
          />
          <line
            x1="52%"
            y1="28%"
            x2="25%"
            y2="35%"
            stroke="rgba(6,182,212,0.3)"
            strokeWidth="1"
          />
          <line
            x1="72%"
            y1="25%"
            x2="80%"
            y2="60%"
            stroke="rgba(6,182,212,0.3)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="mt-4 flex justify-between text-xs text-text-secondary">
        <span>5 регионов</span>
        <span>99.99% uptime</span>
        <span>&lt; 50ms latency</span>
      </div>
    </div>
  );
}

// Google превью для таба "SEO"
function SEOVisual() {
  return (
    <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded bg-linear-to-br from-blue-400 via-red-400 to-yellow-400" />
        <span className="text-sm text-text-secondary">Превью в Google</span>
      </div>
      <div className="space-y-4">
        {/* Search result preview */}
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center">
              <span className="text-accent-primary text-xs font-bold">S</span>
            </div>
            <div>
              <div className="text-xs text-text-secondary">studio.dev</div>
              <div className="text-xs text-text-secondary/60">
                https://studio.dev
              </div>
            </div>
          </div>
          <div className="text-blue-400 text-sm font-medium mb-1 hover:underline cursor-pointer">
            Studio | Создание сайтов на Next.js + Sanity
          </div>
          <div className="text-xs text-text-secondary leading-relaxed">
            Разрабатываем быстрые бизнес-сайты на Next.js и Sanity CMS.
            Производительность 90+ баллов, гибкость и масштабируемость...
          </div>
        </div>
        {/* Rich snippets */}
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-text-secondary">
            ★ 4.9 рейтинг
          </div>
          <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-text-secondary">
            FAQ Schema
          </div>
          <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-text-secondary">
            Open Graph
          </div>
        </div>
      </div>
    </div>
  );
}

// Выбор визуального блока по id таба
function TabVisual({ tabId }: { tabId: string }) {
  switch (tabId) {
    case "perf":
      return <LighthouseVisual />;
    case "flex":
      return <FlexibilityVisual />;
    case "scale":
      return <ScaleVisual />;
    case "seo":
      return <SEOVisual />;
    default:
      return null;
  }
}

export function SolutionTabs({ title, solutions }: SolutionTabsProps) {
  const [activeTab, setActiveTab] = useState(solutions[0]);

  return (
    <section id="solutions" className="py-24 bg-bg-primary relative overflow-hidden">
      <Container>
        <SectionHeading badge="Решение" badgeVariant="accent">
          {title}
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {solutions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl transition-all duration-300 relative group overflow-hidden",
                  activeTab.id === tab.id
                    ? "bg-bg-elevated text-white shadow-lg"
                    : "text-text-secondary hover:bg-white/5",
                )}
              >
                {activeTab.id === tab.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-primary" />
                )}
                <span className="font-semibold text-lg relative z-10">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="gradient-border-wrapper h-full">
              <div className="bg-bg-secondary p-8 md:p-12 rounded-2xl h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-display font-bold mb-4">
                        {activeTab.title}
                      </h3>
                      <p className="text-xl text-text-secondary">
                        {activeTab.description}
                      </p>
                    </div>
                    <div className="hidden md:flex flex-col items-center gap-2.5 pt-4 px-1 justify-start w-24 h-24 min-w-24 rounded-full bg-linear-to-br from-accent-primary to-accent-secondary text-white font-bold">
                      <span className="text-[10px] opacity-60 uppercase">
                        Метрика
                      </span>
                      <span className="text-sm text-center leading-tight">
                        {activeTab.metric}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {(activeTab.features ?? []).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                        <span className="font-medium text-text-primary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Preview */}
                  <TabVisual tabId={activeTab.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
