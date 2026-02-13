import { cn } from '@/shared/lib/cn'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  badge?: string
  badgeVariant?: 'default' | 'green' | 'accent'
  description?: string
  className?: string
  variant?: 'centered' | 'minimalist'
  subtitle?: string
}

export function SectionHeading({
  children,
  badge,
  badgeVariant = 'default',
  description,
  className,
  variant = 'centered',
  subtitle
}: SectionHeadingProps) {
  const badgeStyles = {
    default: 'border-white/10 bg-white/5 text-text-secondary',
    green: 'border-green-500/30 bg-green-500/10 text-green-400',
    accent: 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary',
  }

  if (variant === 'minimalist') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-16 pb-8', className)}>
        <div className="col-span-1">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none uppercase">
            {children}
          </h2>
          {subtitle && (
            <div className="text-white text-sm font-light mt-4 opacity-50">
              {subtitle}
            </div>
          )}
        </div>

        {description && (
          <div className="col-span-1 self-end md:text-right mt-8 md:mt-0">
            <p className="text-white/70 max-w-md md:ml-auto text-base md:text-lg font-light">
              {description}
            </p>
          </div>
        )}
      </div>
    )
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
