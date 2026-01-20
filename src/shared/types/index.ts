import type { LucideIcon } from 'lucide-react'

export interface TabItem {
  id: string
  label: string
  title: string
  description: string
  features: string[]
  metric: string
}

export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  cta: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface StatProps {
  label: string
  value: string
  icon?: LucideIcon
}

export interface ProcessStep {
  number: string
  title: string
  duration: string
  description: string
}

export interface Problem {
  icon: LucideIcon
  title: string
  desc: string
  stat: string
}

export interface TechItem {
  name: string
  desc: string
}

export interface ComparisonRow {
  label: string
  webflow: string | React.ReactNode
  wordpress: string | React.ReactNode
  nextjs: string | React.ReactNode
}
