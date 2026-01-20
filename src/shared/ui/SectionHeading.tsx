import { cn } from '@/shared/lib/cn'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  badge?: string
  badgeVariant?: 'default' | 'green' | 'accent'
  description?: string
  className?: string
}

export function SectionHeading({
  children,
  badge,
  badgeVariant = 'default',
  description,
  className
}: SectionHeadingProps) {
  const badgeStyles = {
    default: 'border-white/10 bg-white/5 text-text-secondary',
    green: 'border-green-500/30 bg-green-500/10 text-green-400',
    accent: 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary',
  }

  return (
    <div className={cn('text-center mb-16', className)}>
      {badge && (
        <div className={cn(
          'inline-block mb-4 px-3 py-1 rounded-full border text-sm font-semibold',
          badgeStyles[badgeVariant]
        )}>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
        {children}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
