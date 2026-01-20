import { CheckCircle2 } from "lucide-react";
import {
  Button,
  Container,
  SectionHeading,
  AnimatedSection,
} from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { PricingPlanData } from "@/sanity/lib/types";

interface PricingProps {
  title: string;
  plans: PricingPlanData[];
}

export function Pricing({ title, plans }: PricingProps) {
  return (
    <section className="py-24 bg-bg-primary" id="pricing">
      <Container>
        <SectionHeading>{title}</SectionHeading>

        <AnimatedSection stagger>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((tier, i) => (
              <div
                key={i}
                className={cn(
                  "relative p-8 rounded-3xl flex flex-col",
                  tier.isPopular
                    ? "bg-linear-to-b from-bg-elevated to-bg-secondary border border-accent-primary shadow-[0_0_40px_rgba(79,70,229,0.15)] transform md:-translate-y-4"
                    : "bg-bg-secondary border border-white/5",
                )}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Популярный выбор
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-sm font-bold text-text-muted tracking-widest uppercase mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-text-secondary">от</span>
                    <span className="text-4xl font-display font-bold text-white">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-text-secondary mt-2">{tier.description}</p>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {(tier.features ?? []).map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.isPopular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
