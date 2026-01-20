import { defineType, defineField } from 'sanity'

export const solutionTab = defineType({
  name: 'solutionTab',
  title: 'Таб решения',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (уникальный)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Название таба',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Заголовок контента',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Список преимуществ',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metric',
      title: 'Метрика',
      type: 'string',
      description: 'Например: "< 0.8s LCP" или "100% Контроль"',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'metric',
    },
  },
})
