import { X, Check, AlertTriangle } from 'lucide-react'
import { Container, SectionHeading } from '@/shared/ui'
import type { ComparisonRowData } from '@/sanity/lib/types'

interface ComparisonTableProps {
  title: string
  rows: ComparisonRowData[]
}

export function ComparisonTable({ title, rows }: ComparisonTableProps) {
  return (
    <section className="py-24 bg-bg-secondary">
      <Container>
        <SectionHeading>{title}</SectionHeading>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-bg-elevated rounded-2xl p-8 border border-white/5">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-8 border-b border-white/10 pb-6">
              <div className="font-bold text-lg text-text-muted flex items-end">Критерий</div>
              <div className="font-bold text-xl text-center text-text-secondary">Webflow</div>
              <div className="font-bold text-xl text-center text-text-secondary">WordPress</div>
              <div className="font-bold text-xl text-center text-accent-primary relative">
                Next.js + Sanity
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-accent-primary text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                  Наш выбор
                </div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-4 py-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors rounded px-2"
              >
                <div className="font-medium text-text-secondary">{row.label}</div>
                <div className="text-center text-text-muted">{row.webflow}</div>
                <div className="text-center text-text-muted">{row.wordpress}</div>
                <div className="text-center font-bold text-white">{row.nextjs}</div>
              </div>
            ))}

            {/* Ownership Row */}
            <div className="grid grid-cols-4 gap-4 py-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors rounded px-2">
              <div className="font-medium text-text-secondary">Владение кодом</div>
              <div className="flex justify-center">
                <X className="text-red-500" />
              </div>
              <div className="flex justify-center">
                <AlertTriangle className="text-yellow-500" />
              </div>
              <div className="flex justify-center items-center gap-2 text-green-500">
                <Check className="w-5 h-5" /> 100%
              </div>
            </div>

            {/* Cost Row */}
            <div className="grid grid-cols-4 gap-4 py-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors rounded px-2">
              <div className="font-medium text-text-secondary">Стоимость/год*</div>
              <div className="text-center text-text-muted">$3,500+</div>
              <div className="text-center text-text-muted">$500+</div>
              <div className="text-center text-green-400 font-bold">от $0</div>
            </div>

            <p className="mt-6 text-xs text-text-muted text-center">
              * Vercel Hobby + Sanity Free tier позволяют запускать MVP за $0 регулярных расходов.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
