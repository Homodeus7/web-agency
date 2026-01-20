import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    // Hero Section
    hero {
      badge,
      title,
      highlightedText,
      description,
      descriptionHighlight,
      primaryButtonText,
      secondaryButtonText,
      trustBadgesTitle,
      trustLogos
    },

    // Problems Section
    problemsTitle,
    problemsDescription,
    problems[] {
      iconName,
      title,
      description,
      stat
    },

    // Solutions Section
    solutionsTitle,
    solutions[] {
      id,
      label,
      title,
      description,
      features,
      metric,
      showCodeExample,
      codeExample
    },

    // SEO Insight Section
    seoTitle,
    seoDescription,
    seoCards[] {
      iconName,
      title,
      description,
      items,
      isHighlighted
    },

    // Comparison Section
    comparisonTitle,
    comparisonRows[] {
      label,
      webflow,
      wordpress,
      nextjs
    },

    // Process Section
    processTitle,
    processSteps[] {
      number,
      title,
      duration,
      description
    },

    // Tech Stack Section
    techTitle,
    techItems[] {
      name,
      description
    },

    // Pricing Section
    pricingTitle,
    pricingPlans[] {
      name,
      price,
      description,
      features,
      isPopular,
      ctaText
    },

    // FAQ Section
    faqTitle,
    faqItems[] {
      question,
      answer
    },

    // CTA Section
    cta {
      title,
      description,
      buttonText,
      contactEmail
    },

    // Footer Section
    footer {
      brandName,
      brandDescription,
      linkColumns[] {
        title,
        links[] {
          label,
          href
        }
      },
      socialLinks[] {
        platform,
        url
      },
      copyrightText
    }
  }
`
