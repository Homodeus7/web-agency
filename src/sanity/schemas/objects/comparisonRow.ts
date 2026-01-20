import { defineType, defineField } from 'sanity'

export const comparisonRow = defineType({
  name: 'comparisonRow',
  title: 'Строка сравнения',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Критерий',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'webflow',
      title: 'Webflow',
      type: 'string',
    }),
    defineField({
      name: 'wordpress',
      title: 'WordPress',
      type: 'string',
    }),
    defineField({
      name: 'nextjs',
      title: 'Next.js + Sanity',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
})
