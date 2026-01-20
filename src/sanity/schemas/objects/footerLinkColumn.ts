import { defineType, defineField } from 'sanity'

export const footerLinkColumn = defineType({
  name: 'footerLinkColumn',
  title: 'Колонка ссылок',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок колонки',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Ссылки',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Текст ссылки',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              type: 'string',
              description: 'Внутренняя ссылка (например, #pricing) или внешняя URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare({ title, links }) {
      return {
        title: title,
        subtitle: `${links?.length || 0} ссылок`,
      }
    },
  },
})
