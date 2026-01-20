// Hero Section
export interface HeroData {
  badge?: string
  title?: string
  highlightedText?: string
  description?: string
  descriptionHighlight?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  trustBadgesTitle?: string
  trustLogos?: string[]
}

// Problem Section
export interface ProblemData {
  iconName?: 'gauge' | 'trending-up' | 'lock' | 'alert-triangle'
  title: string
  description?: string
  stat?: string
}

// Solution Section
export interface SolutionData {
  id: string
  label: string
  title?: string
  description?: string
  features?: string[]
  metric?: string
}

// SEO Insight Section
export interface SEOCardData {
  iconName?: 'server' | 'settings' | 'zap'
  title: string
  description?: string
  items?: string[]
  isHighlighted?: boolean
}

// Comparison Section
export interface ComparisonRowData {
  label: string
  webflow?: string
  wordpress?: string
  nextjs?: string
}

// Process Section
export interface ProcessStepData {
  number: string
  title: string
  duration?: string
  description?: string
}

// Tech Stack Section
export interface TechItemData {
  name: string
  description?: string
}

// Pricing Section
export interface PricingPlanData {
  name: string
  price: string
  description?: string
  features?: string[]
  isPopular?: boolean
  ctaText?: string
}

// FAQ Section
export interface FAQItemData {
  question: string
  answer: string
}

// CTA Section
export interface CTAData {
  title?: string
  description?: string
  buttonText?: string
  contactEmail?: string
}

// Footer Section
export interface SocialLinkData {
  platform: 'telegram' | 'twitter' | 'github' | 'linkedin' | 'instagram' | 'youtube' | 'vk'
  url: string
}

export interface FooterLinkData {
  label: string
  href: string
}

export interface FooterLinkColumnData {
  title: string
  links?: FooterLinkData[]
}

export interface FooterData {
  brandName?: string
  brandDescription?: string
  linkColumns?: FooterLinkColumnData[]
  socialLinks?: SocialLinkData[]
  copyrightText?: string
}

// Full Home Page Data
export interface HomePageData {
  // Hero
  hero?: HeroData

  // Problems
  problemsTitle?: string
  problemsDescription?: string
  problems?: ProblemData[]

  // Solutions
  solutionsTitle?: string
  solutions?: SolutionData[]

  // SEO Insight
  seoTitle?: string
  seoDescription?: string
  seoCards?: SEOCardData[]

  // Comparison
  comparisonTitle?: string
  comparisonRows?: ComparisonRowData[]

  // Process
  processTitle?: string
  processSteps?: ProcessStepData[]

  // Tech Stack
  techTitle?: string
  techItems?: TechItemData[]

  // Pricing
  pricingTitle?: string
  pricingPlans?: PricingPlanData[]

  // FAQ
  faqTitle?: string
  faqItems?: FAQItemData[]

  // CTA
  cta?: CTAData

  // Footer
  footer?: FooterData
}
