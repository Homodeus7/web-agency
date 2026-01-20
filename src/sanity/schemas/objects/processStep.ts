import { defineType, defineField } from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Шаг процесса',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Номер шага',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Длительность',
      type: 'string',
      description: 'Например: "2-3 дня"',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
    },
    prepare({ title, number }) {
      return {
        title: `${number}. ${title}`,
      }
    },
  },
})
