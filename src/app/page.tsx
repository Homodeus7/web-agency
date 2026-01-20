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
import type { HomePageData } from '@/sanity/lib/types'

export const revalidate = 60

async function getHomePageData(): Promise<HomePageData> {
  const data = await client.fetch<HomePageData>(homePageQuery, {}, { cache: 'no-store' })

  if (!data) {
    throw new Error('HomePage data not found in Sanity. Run: npm run seed')
  }

  return data
}

export default async function HomePage() {
  const data = await getHomePageData()

  return (
    <>
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
        <ComparisonTable
          title={data.comparisonTitle!}
          rows={data.comparisonRows!}
        />
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
      <Footer />
    </>
  )
}
