"use client";

import { Container, SectionHeading, AnimatedSection } from "@/shared/ui";
import type { ProcessStepData } from "@/sanity/lib/types";
import SpotlightCard from "@/components/SpotlightCard";

interface ProcessStepsProps {
  title: string;
  steps: ProcessStepData[];
}

export function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="pt-24 pb-32 bg-bg-primary" id="process">
      <Container className="overflow-hidden">
        <SectionHeading
          variant="minimalist"
          description="От идеи до запуска несколько дней"
        >
          {title}
        </SectionHeading>

        <AnimatedSection
          stagger
          className="grid md:grid-cols-4 gap-8 relative pt-28"
        >
          {/* Connecting Line (Desktop) - expands after steps appear */}
          <div className="hidden md:block absolute top-40 left-0 w-full h-0.5 bg-linear-to-r from-bg-elevated via-accent-primary to-bg-elevated z-0 animate-line-expand" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col gap-6 items-center text-center"
            >
              <SpotlightCard
                className="custom-spotlight-card w-32 h-32 flex flex-col items-center justify-center bg-accent-foreground rounded-2xl"
                spotlightColor="rgba(79, 70, 229, 0.3)"
              >
                <span className="text-4xl font-bold text-accent-primary">
                  {step.number}
                </span>
                <span className="text-xs text-text-muted mt-1">
                  {step.duration}
                </span>
              </SpotlightCard>

              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed px-6">
                {step.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
