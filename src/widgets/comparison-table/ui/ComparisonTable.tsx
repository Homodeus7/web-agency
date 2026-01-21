import { Info } from "lucide-react";
import { Container, SectionHeading } from "@/shared/ui";
import { metrics } from "../data";
import { TableHeader } from "./TableHeader";
import { MetricRow } from "./MetricRow";

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-bg-secondary">
      <Container>
        <SectionHeading>Честное сравнение</SectionHeading>

        <div className="w-full relative">
          {/* Glassmorphism Container */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Scrollable wrapper for mobile */}
            <div className="overflow-x-auto">
              <TableHeader />

              {/* Table Body */}
              <div className="min-w-200">
                {metrics.map((metric, index) => (
                  <MetricRow
                    key={metric.id}
                    metric={metric}
                    isLast={index === metrics.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 flex items-start gap-2 text-slate-500 text-xs max-w-2xl mx-auto px-4">
            <Info size={14} className="mt-0.5 shrink-0 text-slate-600" />
            <p>
              * Vercel Hobby + Sanity Free tier позволяют запускать MVP за $0
              регулярных расходов. Стоимость Webflow и WordPress рассчитана с
              учетом необходимых плагинов для функционала бизнес-уровня и
              хостинга.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
