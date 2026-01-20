import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Главная страница',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Главный экран' },
    { name: 'problems', title: 'Проблемы' },
    { name: 'solutions', title: 'Решения' },
    { name: 'seo', title: 'SEO секция' },
    { name: 'comparison', title: 'Сравнение' },
    { name: 'process', title: 'Процесс' },
    { name: 'tech', title: 'Технологии' },
    { name: 'pricing', title: 'Цены' },
    { name: 'faq', title: 'FAQ' },
    { name: 'cta', title: 'Призыв к действию' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Главный экран',
      type: 'heroSection',
      group: 'hero',
    }),

    // Problems Section
    defineField({
      name: 'problemsTitle',
      title: 'Заголовок секции',
      type: 'string',
      group: 'problems',
      initialValue: 'Знакомые проблемы No-Code?',
    }),
    defineField({
      name: 'problemsDescription',
      title: 'Описание',
      type: 'text',
      rows: 2,
      group: 'problems',
    }),
    defineField({
      name: 'problems',
      title: 'Список проблем',
      type: 'array',
      of: [{ type: 'problemItem' }],
      group: 'problems',
    }),

    // Solutions Section
    defineField({
      name: 'solutionsTitle',
      title: 'Заголовок секции',
      type: 'string',
      group: 'solutions',
      initialValue: 'Next.js + Sanity: Другой уровень',
    }),
    defineField({
      name: 'solutions',
      title: 'Табы решений',
      type: 'array',
      of: [{ type: 'solutionTab' }],
      group: 'solutions',
    }),

    // SEO Insight Section
    defineField({
      name: 'seoTitle',
      title: 'Заголовок SEO секции',
      type: 'string',
      group: 'seo',
      initialValue: 'А что насчет SEO?',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Описание',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
    defineField({
      name: 'seoCards',
      title: 'SEO Карточки',
      type: 'array',
      of: [{ type: 'seoCard' }],
      group: 'seo',
      validation: (Rule) => Rule.max(3),
    }),

    // Comparison Section
    defineField({
      name: 'comparisonTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'comparison',
      initialValue: 'Честное сравнение',
    }),
    defineField({
      name: 'comparisonRows',
      title: 'Строки сравнения',
      type: 'array',
      of: [{ type: 'comparisonRow' }],
      group: 'comparison',
    }),

    // Process Section
    defineField({
      name: 'processTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'process',
      initialValue: 'Как мы работаем',
    }),
    defineField({
      name: 'processSteps',
      title: 'Шаги процесса',
      type: 'array',
      of: [{ type: 'processStep' }],
      group: 'process',
    }),

    // Tech Stack Section
    defineField({
      name: 'techTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'tech',
      initialValue: 'Мощный технологический стек',
    }),
    defineField({
      name: 'techItems',
      title: 'Технологии',
      type: 'array',
      of: [{ type: 'techItem' }],
      group: 'tech',
    }),

    // Pricing Section
    defineField({
      name: 'pricingTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'pricing',
      initialValue: 'Прозрачные пакеты услуг',
    }),
    defineField({
      name: 'pricingPlans',
      title: 'Тарифы',
      type: 'array',
      of: [{ type: 'pricingPlan' }],
      group: 'pricing',
    }),

    // FAQ Section
    defineField({
      name: 'faqTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'faq',
      initialValue: 'Частые вопросы',
    }),
    defineField({
      name: 'faqItems',
      title: 'Вопросы и ответы',
      type: 'array',
      of: [{ type: 'faqItem' }],
      group: 'faq',
    }),

    // CTA Section
    defineField({
      name: 'cta',
      title: 'Призыв к действию',
      type: 'ctaSection',
      group: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Главная страница',
      }
    },
  },
})
