import { Container, SectionHeading } from '@/shared/ui'
import type { TechItemData } from '@/sanity/lib/types'

interface TechStackProps {
  title: string
  items: TechItemData[]
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <section className="py-24 bg-bg-secondary border-y border-white/5">
      <Container>
        <SectionHeading
          variant="minimalist"
          subtitle="// ТЕХНОЛОГИИ & ИНСТРУМЕНТЫ"
          description="Современный стек технологий для вашего проекта"
        >
          {title}
        </SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {items.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-bg-primary border border-white/5 hover:border-accent-primary/30 transition-colors"
            >
              <span className="font-bold text-white mb-1">{tech.name}</span>
              <span className="text-xs text-text-muted">{tech.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
