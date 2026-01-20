import { defineType, defineField } from 'sanity'

export const problemItem = defineType({
  name: 'problemItem',
  title: 'Проблема',
  type: 'object',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Иконка',
      type: 'string',
      description: 'Название иконки из Lucide (gauge, trending-up, lock, alert-triangle)',
      options: {
        list: [
          { title: 'Спидометр (Gauge)', value: 'gauge' },
          { title: 'Рост (TrendingUp)', value: 'trending-up' },
          { title: 'Замок (Lock)', value: 'lock' },
          { title: 'Предупреждение (AlertTriangle)', value: 'alert-triangle' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'stat',
      title: 'Статистика/Метрика',
      type: 'string',
      description: 'Например: "3-5сек Load" или "$3.5k/год+"',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'stat',
    },
  },
})
