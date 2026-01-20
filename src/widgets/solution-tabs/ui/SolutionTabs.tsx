'use client'

import { useState } from 'react'
import { Container, SectionHeading } from '@/shared/ui'
import { cn } from '@/shared/lib/cn'
import type { SolutionData } from '@/sanity/lib/types'

interface SolutionTabsProps {
  title: string
  solutions: SolutionData[]
}

export function SolutionTabs({ title, solutions }: SolutionTabsProps) {
  const [activeTab, setActiveTab] = useState(solutions[0])

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <Container>
        <SectionHeading badge="Решение" badgeVariant="accent">
          {title}
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {solutions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'text-left px-6 py-4 rounded-xl transition-all duration-300 relative group overflow-hidden',
                  activeTab.id === tab.id
                    ? 'bg-bg-elevated text-white shadow-lg'
                    : 'text-text-secondary hover:bg-white/5'
                )}
              >
                {activeTab.id === tab.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-primary" />
                )}
                <span className="font-semibold text-lg relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="gradient-border-wrapper h-full">
              <div className="bg-bg-secondary p-8 md:p-12 rounded-2xl h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-display font-bold mb-4">{activeTab.title}</h3>
                      <p className="text-xl text-text-secondary">{activeTab.description}</p>
                    </div>
                    <div className="hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-white font-bold shadow-lg">
                      <span className="text-xs opacity-80 uppercase">Метрика</span>
                      <span className="text-lg text-center leading-tight">{activeTab.metric}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {(activeTab.features ?? []).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                        <span className="font-medium text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code Preview */}
                  <div className="mt-8 p-6 rounded-lg bg-[#0d0d0d] border border-white/10 font-mono text-sm text-text-secondary overflow-hidden">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="text-purple-400">export const</span>{' '}
                        <span className="text-blue-400">getStaticProps</span> ={' '}
                        <span className="text-purple-400">async</span> () =&gt; {'{'}
                      </p>
                      <p className="pl-4">
                        <span className="text-purple-400">const</span> data ={' '}
                        <span className="text-purple-400">await</span> sanity.
                        <span className="text-yellow-300">fetch</span>(query);
                      </p>
                      <p className="pl-4">
                        <span className="text-purple-400">return</span> {'{'}
                      </p>
                      <p className="pl-8">props: {'{'} data {'}'},</p>
                      <p className="pl-8">
                        <span className="text-gray-500">// ISR Strategy</span>
                      </p>
                      <p className="pl-8">
                        revalidate: <span className="text-orange-400">60</span>
                      </p>
                      <p className="pl-4">{'}'}</p>
                      <p>{'}'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
