import { defineType, defineField } from 'sanity'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Призыв к действию',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Готовы к сайту, который работает?',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 2,
      initialValue: 'Оставьте заявку на бесплатную консультацию, чтобы обсудить ваш проект.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      initialValue: 'Отправить заявку',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email для связи',
      type: 'string',
    }),
  ],
})
