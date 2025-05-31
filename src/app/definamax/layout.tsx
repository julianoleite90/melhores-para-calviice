import { Metadata } from 'next'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Definamax - Emagrecedores',
  description: 'Definamax - Análise completa do suplemento Definamax para emagrecimento',
}

export default function DefinamaxLayout({
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