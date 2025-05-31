import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ozenvitta - Emagrecedores',
  description: 'Ozenvitta - Análise completa do suplemento Ozenvitta para emagrecimento',
}

export default function OzenvittaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 