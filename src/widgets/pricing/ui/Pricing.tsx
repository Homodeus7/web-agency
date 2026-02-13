"use client";

import { CheckCircle2 } from "lucide-react";
import {
  Button,
  Container,
  SectionHeading,
  AnimatedSection,
} from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import { useSelectedPackage } from "@/shared/lib/selected-package-context";
import type { PricingPlanData } from "@/sanity/lib/types";
import ElectricBorder from "@/components/ElectricBorder";

interface PricingProps {
  title: string;
  plans: PricingPlanData[];
}

export function Pricing({ title, plans }: PricingProps) {
  const { selectPackage } = useSelectedPackage();

  const handleSelectPlan = (planName: string) => {
    selectPackage(planName);
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-bg-primary" id="pricing">
      <Container>
        <SectionHeading
          variant="minimalist"
          subtitle="// ТАРИФЫ & ПАКЕТЫ"
          description="Выберите оптимальное решение для вашего бизнеса"
        >
          {title}
        </SectionHeading>

        <AnimatedSection stagger>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((tier, i) => (
              <div key={i} className="relative flex">
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-10">
                    Популярный выбор
                  </div>
                )}
                <ElectricBorder
                  color={tier.isPopular ? "#3730a3" : "#4f46e5"}
                  speed={tier.isPopular ? 0.8 : 0.6}
                  chaos={tier.isPopular ? 0.15 : 0.05}
                  borderRadius={18}
                  style={undefined}
                  className={cn(
                    "w-full transform md:translate-y-0",
                    tier.isPopular && "md:-translate-y-4",
                  )}
                >
                  <div
                    className={cn(
                      "relative p-8 rounded-3xl flex flex-col h-full",
                      tier.isPopular
                        ? "bg-linear-to-b from-indigo-950/40 via-indigo-900/30 to-bg-secondary backdrop-blur-xl shadow-[0_0_60px_rgba(79,70,229,0.25)]"
                        : "bg-linear-to-b from-slate-900/40 via-slate-800/30 to-bg-secondary backdrop-blur-sm",
                    )}
                  >
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
                      <p className="text-text-secondary mt-2">
                        {tier.description}
                      </p>
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
                      onClick={() => handleSelectPlan(tier.name)}
                    >
                      {tier.ctaText}
                    </Button>
                  </div>
                </ElectricBorder>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
