'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      data-animate={!stagger ? '' : undefined}
      data-animate-stagger={stagger ? '' : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  )
}
