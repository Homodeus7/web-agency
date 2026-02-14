"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/shared/ui";
import type { FAQItemData } from "@/sanity/lib/types";

interface FAQProps {
  title: string;
  items: FAQItemData[];
}

export function FAQ({ title, items }: FAQProps) {
  return (
    <section className="py-24 bg-bg-secondary" id="faq">
      <Container>
        <SectionHeading
          variant="minimalist"
          description="Ответы на частые вопросы о разработке"
        >
          {title}
        </SectionHeading>

        <div className="border-t border-white/10 max-w-4xl mx-auto mt-16">
          <Accordion.Root
            type="single"
            defaultValue="item-0"
            collapsible
          >
            {items.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="flex flex-col border-b border-white/10 group/item cursor-pointer hover:bg-white/5 transition-colors rounded-xl"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left">
                    <div className="flex items-start gap-6">
                      {/* Indicator dots */}
                      <div className="flex flex-col gap-1 pt-1 opacity-70">
                        <span className={`w-1.5 h-1.5 rounded-full block ${i % 3 === 0 ? 'bg-accent-secondary' : i % 3 === 1 ? 'bg-accent-primary' : 'bg-white/30'}`}></span>
                        <span className={`w-1.5 h-1.5 rounded-full block ${i % 3 === 0 ? 'bg-accent-secondary' : i % 3 === 1 ? 'bg-accent-primary' : 'bg-white/30'}`}></span>
                        <span className={`w-1.5 h-1.5 rounded-full block ${i % 2 === 0 ? 'bg-accent-secondary' : 'bg-white/30'}`}></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 block"></span>
                      </div>

                      {/* Question text */}
                      <div className="flex flex-col">
                        <span className="text-2xl font-medium text-white group-hover/item:text-accent-secondary transition-colors">
                          {item.question}
                        </span>
                      </div>
                    </div>

                    {/* Chevron icon */}
                    <div className="text-text-muted group-hover/item:text-accent-secondary transition-colors">
                      <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                  <div className="px-6 pb-6 pl-18 text-neutral-300 leading-relaxed">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
}
