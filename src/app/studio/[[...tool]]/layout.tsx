export const metadata = {
  title: 'SIMPL - Управление контентом',
  description: 'Sanity Studio для управления контентом сайта',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      {children}
    </div>
  )
}
