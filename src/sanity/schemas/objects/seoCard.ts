import { defineType, defineField } from 'sanity'

export const seoCard = defineType({
  name: 'seoCard',
  title: 'SEO Карточка',
  type: 'object',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Иконка',
      type: 'string',
      options: {
        list: [
          { title: 'Сервер (server)', value: 'server' },
          { title: 'Настройки (settings)', value: 'settings' },
          { title: 'Молния (zap)', value: 'zap' },
        ],
      },
      initialValue: 'server',
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
      name: 'items',
      title: 'Список пунктов',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Выделенная карточка',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      iconName: 'iconName',
    },
    prepare({ title, iconName }) {
      return {
        title: title || 'SEO Карточка',
        subtitle: iconName || 'Без иконки',
      }
    },
  },
})
