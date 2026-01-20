import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Описание сайта (SEO)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email для связи',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Телефон',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Социальные сети',
      type: 'object',
      fields: [
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
    },
  },
})
