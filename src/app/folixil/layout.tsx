import { Metadata } from 'next'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Folixil - Produtos Capilares',
  description: 'Folixil - Análise completa do suplemento Folixil para crescimento capilar',
}

export default function FolixilLayout({
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