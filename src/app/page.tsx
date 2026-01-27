import {
  Header,
  Hero,
  ProblemSection,
  SolutionTabs,
  SEOInsight,
  ComparisonTable,
  ProcessSteps,
  TechStack,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from '@/widgets'
import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'
import type { HomePageData, FAQItemData, PricingPlanData } from '@/sanity/lib/types'

export const dynamic = 'force-static'

// === SEO КОНФИГУРАЦИЯ ===
const SITE_NAME = 'SIMPL'
const SITE_URL = 'https://example.ru'
const SITE_DESCRIPTION = 'Создаем современные бизнес-сайты на Next.js и Sanity CMS'

async function getHomePageData(): Promise<HomePageData> {
  const data = await client.fetch<HomePageData>(homePageQuery, {}, { cache: 'force-cache' })

  if (!data) {
    throw new Error('HomePage data not found in Sanity. Run: npm run seed')
  }

  return data
}

// JSON-LD структурированные данные
function generateJsonLd(data: HomePageData) {
  const schemas = []

  // Organization
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    // Раскомментируйте и заполните:
    // email: 'info@example.ru',
    // telephone: '+7 (999) 123-45-67',
    // address: {
    //   '@type': 'PostalAddress',
    //   addressLocality: 'Москва',
    //   addressCountry: 'RU',
    // },
  })

  // WebSite
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'ru-RU',
  })

  // FAQPage
  if (data.faqItems && data.faqItems.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqItems.map((item: FAQItemData) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  // Service с ценами
  if (data.pricingPlans && data.pricingPlans.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Веб-разработка',
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
      description: 'Разработка сайтов на Next.js и Sanity CMS',
      offers: data.pricingPlans.map((plan: PricingPlanData) => ({
        '@type': 'Offer',
        name: plan.name,
        price: plan.price.replace(/[^\d]/g, ''),
        priceCurrency: 'RUB',
        description: plan.description,
      })),
    })
  }

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: SITE_URL,
      },
    ],
  })

  return schemas
}

export default async function HomePage() {
  const data = await getHomePageData()
  const jsonLd = generateJsonLd(data)

  return (
    <>
      {/* JSON-LD структурированные данные */}
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <main>
        <Hero data={data.hero!} />
        <ProblemSection
          title={data.problemsTitle!}
          description={data.problemsDescription!}
          problems={data.problems!}
        />
        <SolutionTabs
          title={data.solutionsTitle!}
          solutions={data.solutions!}
        />
        <SEOInsight
          title={data.seoTitle!}
          description={data.seoDescription!}
          cards={data.seoCards!}
        />
        <ComparisonTable />
        <ProcessSteps
          title={data.processTitle!}
          steps={data.processSteps!}
        />
        <TechStack
          title={data.techTitle!}
          items={data.techItems!}
        />
        <Pricing
          title={data.pricingTitle!}
          plans={data.pricingPlans!}
        />
        <FAQ
          title={data.faqTitle!}
          items={data.faqItems!}
        />
        <CTA data={data.cta!} />
      </main>
      <Footer data={data.footer} />
    </>
  )
}
