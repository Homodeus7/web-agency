import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
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

// === SEO КОНФИГУРАЦИЯ ===
const SITE_NAME = 'SIMPL'
const SITE_URL = 'https://example.ru' // Замените на реальный URL
const SITE_DESCRIPTION = 'Создаем современные бизнес-сайты на Next.js и Sanity CMS. Производительность, гибкость и масштабируемость без компромиссов.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Разработка сайтов на Next.js + Sanity`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'разработка сайтов',
    'создание сайтов',
    'веб-разработка',
    'Next.js',
    'Sanity CMS',
    'React',
    'headless CMS',
    'лендинг',
    'корпоративный сайт',
    'веб-студия',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  appleWebApp: {
    title: 'SIMPLA',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Разработка сайтов на Next.js + Sanity`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg', // Создайте изображение 1200x630px в public/
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Разработка сайтов на Next.js + Sanity`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Верификация поисковых систем (раскомментируйте и добавьте коды)
  // verification: {
  //   google: 'ваш-код-google',
  //   yandex: 'ваш-код-яндекс',
  // },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0b' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <div className="noise-bg" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
