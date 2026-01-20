import { defineType, defineField } from 'sanity'

export const submission = defineType({
  name: 'submission',
  title: 'Заявка',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Сообщение',
      type: 'text',
    }),
    defineField({
      name: 'selectedPackage',
      title: 'Выбранный пакет',
      type: 'string',
      options: {
        list: [
          { title: 'Starter', value: 'starter' },
          { title: 'Business', value: 'business' },
          { title: 'Enterprise', value: 'enterprise' },
        ],
      },
    }),
    defineField({
      name: 'createdAt',
      title: 'Дата создания',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Статус',
      type: 'string',
      options: {
        list: [
          { title: 'Новая', value: 'new' },
          { title: 'В работе', value: 'processing' },
          { title: 'Завершена', value: 'completed' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'createdAt',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      const statusEmoji = {
        new: '🆕',
        processing: '⏳',
        completed: '✅',
      }[status as string] || '📋'

      return {
        title: `${statusEmoji} ${title}`,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ru-RU') : '',
      }
    },
  },
  orderings: [
    {
      title: 'Дата (новые первые)',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
})
