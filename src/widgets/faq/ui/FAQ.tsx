'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeading } from '@/shared/ui'
import type { FAQItemData } from '@/sanity/lib/types'

interface FAQProps {
  title: string
  items: FAQItemData[]
}

export function FAQ({ title, items }: FAQProps) {
  return (
    <section className="py-24 bg-bg-secondary">
      <Container>
        <SectionHeading
          variant="minimalist"
          subtitle="// ВОПРОСЫ & ОТВЕТЫ"
          description="Ответы на частые вопросы о разработке на Next.js"
        >
          {title}
        </SectionHeading>

        <Accordion.Root type="single" defaultValue="item-0" collapsible className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-bg-primary rounded-xl overflow-hidden border border-white/5"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-white/5 transition-colors group">
                  {item.question}
                  <ChevronDown className="w-5 h-5 text-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">{item.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}
