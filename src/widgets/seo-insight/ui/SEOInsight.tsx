import { Server, Settings, Zap, Check, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, AnimatedSection } from "@/shared/ui";
import type { SEOCardData } from "@/sanity/lib/types";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  settings: Settings,
  zap: Zap,
};

const iconColorMap: Record<
  string,
  { bg: string; text: string; check: string }
> = {
  server: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    check: "text-blue-400",
  },
  settings: {
    bg: "bg-accent-primary/10",
    text: "text-accent-primary",
    check: "text-accent-primary",
  },
  zap: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    check: "text-green-400",
  },
};

interface SEOInsightProps {
  title: string;
  description: string;
  cards: SEOCardData[];
}

export function SEOInsight({ title, description, cards }: SEOInsightProps) {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          variant="minimalist"
          subtitle="// SEO & ЭКСПЕРТИЗА"
          description={description}
        >
          {title}
        </SectionHeading>

        <AnimatedSection stagger>
          <div className="grid lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => {
              const iconName = card.iconName ?? "server";
              const Icon = iconMap[iconName] ?? Server;
              const colors = iconColorMap[iconName] ?? iconColorMap["server"];
              const items = card.items ?? [];

              if (card.isHighlighted) {
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-linear-to-br from-bg-elevated to-bg-secondary border border-accent-primary shadow-[0_0_30px_rgba(79,70,229,0.15)] relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/20 transition-all duration-500" />

                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                    {card.description && (
                      <p className="text-text-secondary text-sm mb-6">
                        {card.description}
                      </p>
                    )}
                    <ul className="space-y-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2" />
                          <span className="text-text-secondary text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-bg-secondary border border-white/5"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className={`w-5 h-5 ${colors.check} shrink-0`} />
                        <span className="text-text-secondary text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
