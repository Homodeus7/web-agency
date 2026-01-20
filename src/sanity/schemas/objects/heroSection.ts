import { defineType, defineField } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Главный экран',
  type: 'object',
  fields: [
    defineField({
      name: 'badge',
      title: 'Бейдж (маленький текст сверху)',
      type: 'string',
      initialValue: 'Headless CMS + React Framework',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Выделенный текст (градиент)',
      type: 'string',
      description: 'Текст, который будет выделен градиентом',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionHighlight',
      title: 'Выделенная часть описания',
      type: 'string',
      description: 'Например: "Сделано на Next.js и Sanity."',
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Текст основной кнопки',
      type: 'string',
      initialValue: 'Обсудить проект',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Текст второй кнопки',
      type: 'string',
      initialValue: 'Смотреть кейсы',
    }),
    defineField({
      name: 'trustBadgesTitle',
      title: 'Заголовок блока доверия',
      type: 'string',
      initialValue: 'Нам доверяют передовые компании',
    }),
    defineField({
      name: 'trustLogos',
      title: 'Логотипы компаний',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Названия компаний для блока доверия',
    }),
  ],
})
