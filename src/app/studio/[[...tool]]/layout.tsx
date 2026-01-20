export const metadata = {
  title: 'Studio - Управление контентом',
  description: 'Sanity Studio для управления контентом сайта',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
