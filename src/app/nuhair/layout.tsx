import { Footer } from '../../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NuHair - Produtos Capilares',
  description: 'NuHair - Análise completa do suplemento NuHair para crescimento capilar',
}

export default function NuHairLayout({
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