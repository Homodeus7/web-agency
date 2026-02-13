'use client'

import { AlertTriangle, TrendingUp, Lock, Gauge, type LucideIcon } from 'lucide-react'
import { Container, SectionHeading, AnimatedSection } from '@/shared/ui'
import type { ProblemData } from '@/sanity/lib/types'

const iconMap: Record<string, LucideIcon> = {
  'gauge': Gauge,
  'trending-up': TrendingUp,
  'lock': Lock,
  'alert-triangle': AlertTriangle,
}

interface ProblemSectionProps {
  title: string
  description: string
  problems: ProblemData[]
}

export function ProblemSection({ title, description, problems }: ProblemSectionProps) {
  return (
    <section className="py-24 bg-bg-secondary relative">
      <Container>
        <SectionHeading
          variant="minimalist"
          subtitle="// ПРОБЛЕМЫ & ВЫЗОВЫ"
          description={description}
        >
          {title}
        </SectionHeading>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, idx) => {
              const Icon = iconMap[item.iconName ?? 'gauge'] ?? Gauge
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-bg-primary border border-white/5 hover:border-red-500/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-block px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-mono">
                    {item.stat}
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
