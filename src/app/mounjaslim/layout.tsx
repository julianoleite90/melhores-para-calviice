import { Footer } from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mounjaslim - Emagrecedores',
  description: 'Mounjaslim - Análise completa do suplemento Mounjaslim para emagrecimento',
}

export default function MounjaslimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
} 