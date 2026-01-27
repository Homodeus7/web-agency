import { MetadataRoute } from 'next'

const SITE_URL = 'https://example.ru' // Замените на реальный URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
