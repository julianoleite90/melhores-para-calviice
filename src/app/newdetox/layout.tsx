import { Metadata } from 'next'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'New Detox - Emagrecedores',
  description: 'New Detox - Análise completa do suplemento New Detox para emagrecimento',
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