import { Metadata } from 'next'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
      title: 'Imecap - Crescimento Capilar',
      description: 'Imecap - Análise completa do suplemento Imecap para crescimento capilar',
}

export default function NewDetoxLayout({
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