import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phynamax: Análise Completa do Novo Líder em Emagrecimento 2025',
  description: 'Descubra por que o Phynamax conquistou o 1º lugar no ranking dos melhores emagrecedores de 2025. Análise detalhada, composição, resultados e onde comprar com segurança.',
  keywords: 'phynamax, emagrecedor, suplemento natural, perda de peso, queima gordura, 1º lugar ranking',
  
  openGraph: {
    title: 'Phynamax: Análise Completa do Novo Líder em Emagrecimento 2025',
    description: 'Descubra por que o Phynamax conquistou o 1º lugar no ranking dos melhores emagrecedores de 2025.',
    type: 'website',
  },
}

export default function PhynamaxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 