import { cn } from '@/shared/lib/cn'
import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-6', className)}>
      {children}
    </div>
  )
}
