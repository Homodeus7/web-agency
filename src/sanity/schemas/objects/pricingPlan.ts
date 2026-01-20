import { defineType, defineField } from 'sanity'

export const pricingPlan = defineType({
  name: 'pricingPlan',
  title: 'Тарифный план',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Название тарифа',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'string',
      description: 'Например: "₽150K"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'string',
      description: 'Например: "Лендинг пейдж"',
    }),
    defineField({
      name: 'features',
      title: 'Список возможностей',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Популярный выбор',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'Выбрать',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      isPopular: 'isPopular',
    },
    prepare({ title, subtitle, isPopular }) {
      return {
        title: isPopular ? `⭐ ${title}` : title,
        subtitle,
      }
    },
  },
})
