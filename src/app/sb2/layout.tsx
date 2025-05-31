import { Footer } from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sb2 - Emagrecedores',
  description: 'SB2 - Análise completa do suplemento SB2 para emagrecimento',
}

export default function Sb2Layout({
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