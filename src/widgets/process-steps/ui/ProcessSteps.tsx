import { Container, SectionHeading, AnimatedSection } from "@/shared/ui";
import type { ProcessStepData } from "@/sanity/lib/types";

interface ProcessStepsProps {
  title: string;
  steps: ProcessStepData[];
}

export function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="py-24 bg-bg-primary">
      <Container>
        <SectionHeading
          variant="minimalist"
          subtitle="// ПРОЦЕСС & ЭТАПЫ"
          description="От идеи до запуска — прозрачный процесс разработки"
        >
          {title}
        </SectionHeading>

        <AnimatedSection stagger>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-bg-elevated via-accent-primary to-bg-elevated opacity-30 z-0" />

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-2xl bg-bg-secondary border border-white/10 flex flex-col items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-2xl font-bold text-accent-primary">
                    {step.number}
                  </span>
                  <span className="text-xs text-text-muted mt-1">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
