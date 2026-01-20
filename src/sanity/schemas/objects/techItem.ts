import { defineType, defineField } from 'sanity'

export const techItem = defineType({
  name: 'techItem',
  title: 'Технология',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Короткое описание',
      type: 'string',
      description: 'Например: "App Router" или "Type-safe"',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
