import { defineType, defineField } from 'sanity'

export const footerSection = defineType({
  name: 'footerSection',
  title: 'Футер',
  type: 'object',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Название бренда',
      type: 'string',
      initialValue: 'SIMPL',
    }),
    defineField({
      name: 'brandDescription',
      title: 'Описание бренда',
      type: 'text',
      rows: 3,
      initialValue: 'Создаем сайты, которые стимулируют рост бизнеса. Производительность, масштабируемость и превосходный дизайн без компромиссов.',
    }),
    defineField({
      name: 'linkColumns',
      title: 'Колонки ссылок',
      type: 'array',
      of: [{ type: 'footerLinkColumn' }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Социальные сети',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Текст копирайта',
      type: 'string',
      description: 'Используйте {year} для автоподстановки года',
      initialValue: '© {year} SIMPL Все права защищены.',
    }),
  ],
})
