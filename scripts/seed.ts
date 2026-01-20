import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const homePageData = {
  _type: 'homePage',
  _id: 'homePage',

  // Hero Section
  hero: {
    _type: 'heroSection',
    badge: 'Headless CMS + React Framework',
    title: 'Бизнес-сайты, которые',
    highlightedText: 'действительно работают на вас',
    description:
      'Производительность, гибкость и масштабируемость, которые обещают no-code платформы, но не могут дать.',
    descriptionHighlight: 'Сделано на Next.js и Sanity.',
    primaryButtonText: 'Обсудить проект',
    secondaryButtonText: 'Смотреть кейсы',
    trustBadgesTitle: 'Нам доверяют передовые компании',
    trustLogos: ['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'FoxRun'],
  },

  // Problems Section
  problemsTitle: 'Знакомые проблемы No-Code?',
  problemsDescription:
    'Зачем мириться с ограничениями, когда вы строите серьезный бизнес?',
  problems: [
    {
      _type: 'problemItem',
      _key: 'problem1',
      iconName: 'gauge',
      title: 'Медленная загрузка',
      description:
        'No-code генерирует тонны лишнего кода. Средняя загрузка Webflow сайта — 3-5 секунд.',
      stat: '3-5сек Load',
    },
    {
      _type: 'problemItem',
      _key: 'problem2',
      iconName: 'trending-up',
      title: 'Дорогое масштабирование',
      description:
        'Enterprise планы от $299/мес, плюс плагины, интеграции и жесткие лимиты API.',
      stat: '$3.5k/год+',
    },
    {
      _type: 'problemItem',
      _key: 'problem3',
      iconName: 'lock',
      title: 'Зависимость от платформы',
      description:
        'Ваш сайт существует только внутри их системы. Уйти значит переделать все с нуля.',
      stat: '0 Контроля',
    },
    {
      _type: 'problemItem',
      _key: 'problem4',
      iconName: 'alert-triangle',
      title: 'Проблемы с SEO',
      description:
        'Ограниченный контроль над мета-тегами, структурой URL, sitemap и Core Web Vitals.',
      stat: 'Плохой ранг',
    },
  ],

  // Solutions Section
  solutionsTitle: 'Next.js + Sanity: Другой уровень',
  solutions: [
    {
      _type: 'solutionTab',
      _key: 'sol1',
      id: 'perf',
      label: 'Скорость',
      title: 'Скорость, которая продает',
      description:
        'Мы используем Next.js для статической генерации (SSG) и инкрементальной регенерации (ISR).',
      features: [
        'Edge Functions',
        '< 1сек First Paint',
        '90+ Lighthouse Score',
        'Авто-оптимизация фото',
      ],
      metric: '< 0.8s LCP',
    },
    {
      _type: 'solutionTab',
      _key: 'sol2',
      id: 'flex',
      label: 'Гибкость',
      title: 'Дизайн без границ',
      description:
        'Кастомные React компоненты позволяют реализовать любой UI, любые взаимодействия и логику.',
      features: [
        'Pixel-perfect из Figma',
        'Кастомная бизнес-логика',
        'Любые API интеграции',
        'Удобная Sanity Studio',
      ],
      metric: '100% Контроль',
    },
    {
      _type: 'solutionTab',
      _key: 'sol3',
      id: 'scale',
      label: 'Масштаб',
      title: 'Рост без боли',
      description:
        'Глобальный CDN от Vercel гарантирует скорость везде. Никаких лимитов на количество страниц.',
      features: [
        'Глобальная Edge сеть',
        'Zero-config кеширование',
        'Оптимизация ассетов',
        'DDoS защита',
      ],
      metric: '1M+ Страниц',
    },
    {
      _type: 'solutionTab',
      _key: 'sol4',
      id: 'seo',
      label: 'SEO',
      title: 'Доминируйте в поиске',
      description:
        'Полный программный контроль над метаданными, canonical ссылками и разметкой schema.org.',
      features: [
        'Динамические Sitemap',
        'Open Graph картинки',
        'Семантический HTML5',
        'Schema.org JSON-LD',
      ],
      metric: 'Топ 3 Выдача',
    },
  ],

  // SEO Insight Section
  seoTitle: 'А что насчет SEO?',
  seoDescription:
    'Headless CMS часто пугает сложностью SEO. Но при правильном подходе это становится вашим главным преимуществом.',
  seoCards: [
    {
      _type: 'seoCard',
      _key: 'seo1',
      iconName: 'server',
      title: 'Наши стандарты',
      items: [
        'Server-Side Rendering (SSR) для идеальной индексации',
        'Оптимизация доставки контента через CDN Sanity',
        'Регулярные SEO-аудиты на битые ссылки и мета-теги',
      ],
    },
    {
      _type: 'seoCard',
      _key: 'seo2',
      iconName: 'settings',
      title: 'Сложности берем на себя',
      description:
        'Headless требует ручной настройки того, что есть в плагинах WP. Мы это знаем и делаем.',
      items: [
        'Внедряем поля для мета-тегов и Open Graph',
        'Настраиваем structured data (Schema.org)',
        'Исключаем "тяжелый JS", мешающий краулерам',
      ],
      isHighlighted: true,
    },
    {
      _type: 'seoCard',
      _key: 'seo3',
      iconName: 'zap',
      title: 'Почему вы выигрываете',
      items: [
        'Скорость загрузки напрямую влияет на ранжирование',
        'Полный контроль HTML без шаблонного мусора',
        'Чистая структура URL и Mobile-First подход',
      ],
    },
  ],

  // Comparison Section
  comparisonTitle: 'Честное сравнение',
  comparisonRows: [
    {
      _type: 'comparisonRow',
      _key: 'comp1',
      label: 'Скорость',
      webflow: '⭐⭐',
      wordpress: '⭐⭐',
      nextjs: '⭐⭐⭐⭐⭐',
    },
    {
      _type: 'comparisonRow',
      _key: 'comp2',
      label: 'Гибкость',
      webflow: '⭐⭐⭐',
      wordpress: '⭐⭐⭐',
      nextjs: '⭐⭐⭐⭐⭐',
    },
    {
      _type: 'comparisonRow',
      _key: 'comp3',
      label: 'SEO Контроль',
      webflow: '⭐⭐⭐',
      wordpress: '⭐⭐⭐⭐',
      nextjs: '⭐⭐⭐⭐⭐',
    },
    {
      _type: 'comparisonRow',
      _key: 'comp4',
      label: 'Масштабируемость',
      webflow: '⭐⭐',
      wordpress: '⭐⭐',
      nextjs: '⭐⭐⭐⭐⭐',
    },
  ],

  // Process Section
  processTitle: 'Как мы работаем',
  processSteps: [
    {
      _type: 'processStep',
      _key: 'step1',
      number: '01',
      title: 'Анализ',
      duration: '2-3 дня',
      description:
        'Глубокое погружение в бизнес-цели, целевую аудиторию и структуру контента.',
    },
    {
      _type: 'processStep',
      _key: 'step2',
      number: '02',
      title: 'Дизайн',
      duration: '5-7 дней',
      description:
        'Прототипирование в Figma, адаптация под мобильные устройства и создание UI системы.',
    },
    {
      _type: 'processStep',
      _key: 'step3',
      number: '03',
      title: 'Разработка',
      duration: '2-4 недели',
      description:
        'Верстка на Next.js, настройка схемы Sanity CMS, TypeScript и тесты.',
    },
    {
      _type: 'processStep',
      _key: 'step4',
      number: '04',
      title: 'Запуск',
      duration: '1 день',
      description:
        'Деплой на Vercel, настройка DNS домена и обучение вашей команды.',
    },
  ],

  // Tech Stack Section
  techTitle: 'Мощный технологический стек',
  techItems: [
    { _type: 'techItem', _key: 'tech1', name: 'Next.js 15', description: 'App Router' },
    { _type: 'techItem', _key: 'tech2', name: 'React 19', description: 'RSC Power' },
    { _type: 'techItem', _key: 'tech3', name: 'TypeScript', description: 'Type-safe' },
    { _type: 'techItem', _key: 'tech4', name: 'Sanity', description: 'Content Lake' },
    { _type: 'techItem', _key: 'tech5', name: 'Vercel', description: 'Global Edge' },
    { _type: 'techItem', _key: 'tech6', name: 'Tailwind', description: 'Modern CSS' },
    { _type: 'techItem', _key: 'tech7', name: 'CSS Anim', description: 'Smooth UX' },
    { _type: 'techItem', _key: 'tech8', name: 'Zod', description: 'Validation' },
  ],

  // Pricing Section
  pricingTitle: 'Прозрачные пакеты услуг',
  pricingPlans: [
    {
      _type: 'pricingPlan',
      _key: 'plan1',
      name: 'STARTER',
      price: '₽150K',
      description: 'Лендинг пейдж',
      features: [
        '1-5 Страниц',
        'Базовая настройка CMS',
        'Мобильная адаптация',
        'Базовое SEO',
        'Срок: 2 недели',
      ],
      ctaText: 'Выбрать Starter',
    },
    {
      _type: 'pricingPlan',
      _key: 'plan2',
      name: 'BUSINESS',
      price: '₽350K',
      description: 'Корпоративный сайт',
      isPopular: true,
      features: [
        '10-30 Страниц',
        'Сложная CMS & Схемы',
        'Система Блога',
        'Мультиязычность (i18n)',
        'Срок: 4-6 недель',
      ],
      ctaText: 'Выбрать Business',
    },
    {
      _type: 'pricingPlan',
      _key: 'plan3',
      name: 'ENTERPRISE',
      price: '₽800K',
      description: 'Платформа',
      features: [
        'Безлимит страниц',
        'Кастомные воркфлоу CMS',
        'Интеграции 3-их сервисов',
        'Rest API / GraphQL',
        'Срок: 8-12 недель',
      ],
      ctaText: 'Обсудить проект',
    },
  ],

  // FAQ Section
  faqTitle: 'Частые вопросы',
  faqItems: [
    {
      _type: 'faqItem',
      _key: 'faq1',
      question: 'Почему не Webflow, Tilda или WordPress?',
      answer:
        'No-code платформы отлично подходят для MVP, но создают технический долг. Next.js + Sanity предлагает лучшую производительность (Core Web Vitals), бесконечную масштабируемость, отсутствие привязки к вендору и полный контроль над кодом.',
    },
    {
      _type: 'faqItem',
      _key: 'faq2',
      question: 'Сколько стоит обслуживание?',
      answer:
        'Часто 0₽/мес. План Hobby от Vercel бесплатен, а бесплатный уровень Sanity покрывает щедрые лимиты API. Вам не нужны дорогие контракты на поддержку, так как стек невероятно стабилен.',
    },
    {
      _type: 'faqItem',
      _key: 'faq3',
      question: 'Смогу ли я сам редактировать контент?',
      answer:
        'Абсолютно. Sanity Studio предоставляет удобный интерфейс реального времени, настроенный под ваш контент. Мы обучаем вашу команду, и это часто проще, чем WordPress.',
    },
    {
      _type: 'faqItem',
      _key: 'faq4',
      question: 'Что насчет хостинга и домена?',
      answer:
        'Мы разворачиваем проекты на Vercel, глобальной edge-сети, оптимизированной для Next.js. Мы берем на себя настройку DNS, SSL и конфигурацию домена в рамках пакета.',
    },
    {
      _type: 'faqItem',
      _key: 'faq5',
      question: 'А что с SEO? Говорят, с headless это сложно.',
      answer:
        'Действительно, headless CMS требует правильной настройки, но результат того стоит. Мы используем Server-Side Rendering (SSR) для идеальной индексации, настраиваем CDN для мгновенной загрузки и даем вам полный контроль над URL и мета-тегами. В итоге вы получаете SEO-преимущество за счет скорости и чистоты кода, недостижимое для шаблонных решений.',
    },
  ],

  // CTA Section
  cta: {
    _type: 'ctaSection',
    title: 'Готовы к сайту, который работает?',
    description:
      'Оставьте заявку на бесплатную консультацию, чтобы обсудить ваш проект.',
    buttonText: 'Отправить заявку',
    contactEmail: 'hello@studio.dev',
  },
}

async function seed() {
  console.log('🌱 Seeding Sanity with initial data...')

  try {
    // Check if document already exists
    const existing = await client.fetch(`*[_type == "homePage" && _id == "homePage"][0]`)

    if (existing) {
      console.log('📝 HomePage document already exists. Updating...')
      await client.createOrReplace(homePageData)
    } else {
      console.log('📝 Creating new HomePage document...')
      await client.create(homePageData)
    }

    console.log('✅ Seed completed successfully!')
    console.log('🔗 Open /studio to see the content')
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seed()
