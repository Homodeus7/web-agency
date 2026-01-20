import { defineType, defineField } from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Социальная сеть',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Платформа',
      type: 'string',
      options: {
        list: [
          { title: 'Telegram', value: 'telegram' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'GitHub', value: 'github' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'VK', value: 'vk' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Ссылка',
      type: 'url',
      description: 'Для Telegram можно указать https://t.me/username',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      url: 'url',
    },
    prepare({ platform, url }) {
      const platformNames: Record<string, string> = {
        telegram: 'Telegram',
        twitter: 'Twitter/X',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        youtube: 'YouTube',
        vk: 'VK',
      }
      return {
        title: platformNames[platform] || platform,
        subtitle: url,
      }
    },
  },
})
