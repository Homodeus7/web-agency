import { Info } from "lucide-react";
import { Container, SectionHeading } from "@/shared/ui";
import { metrics } from "../data";
import { TableHeader } from "./TableHeader";
import { MetricRow } from "./MetricRow";

export function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="py-16 md:py-24 bg-bg-secondary overflow-hidden"
    >
      <Container>
        <SectionHeading
          variant="minimalist"
          description="Честное сравнение платформ"
        >
          Сравнение
        </SectionHeading>

        {/* Minimalist Table Container */}
        <div className="w-full relative overflow-hidden bg-linear-to-br from-white/5 via-white/0 to-white/5">
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

          {/* Footer Note */}
          <div className="px-4 md:px-6 py-4 border-t border-white/5 bg-white/2">
            <div className="flex items-start gap-2 text-white/40 text-xs">
              <Info size={14} className="mt-0.5 shrink-0" />
              <p>
                * Vercel Hobby + Sanity Free tier позволяют запускать MVP за $0
                регулярных расходов. Стоимость Webflow и WordPress рассчитана с
                учетом необходимых плагинов для функционала бизнес-уровня и
                хостинга.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
