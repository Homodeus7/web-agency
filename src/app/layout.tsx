import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio | Решения на Next.js + Sanity',
  description: 'Создаем бизнес-сайты на Next.js и Sanity CMS. Производительность, гибкость и масштабируемость без компромиссов.',
  keywords: ['Next.js', 'Sanity', 'веб-разработка', 'headless CMS', 'React'],
  authors: [{ name: 'Studio' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Studio | Решения на Next.js + Sanity',
    description: 'Создаем бизнес-сайты на Next.js и Sanity CMS.',
    siteName: 'Studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <div className="noise-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
