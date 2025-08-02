import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biocapilar: Análise Completa do Novo Líder em Crescimento Capilar 2025',
  description: 'Descubra por que o Biocapilar conquistou o 1º lugar no ranking dos melhores produtos capilares de 2025. Análise detalhada, composição, resultados e onde comprar com segurança.',
  keywords: 'biocapilar, produto capilar, suplemento natural, crescimento capilar, calvície, 1º lugar ranking',
  
  openGraph: {
    title: 'Biocapilar: Análise Completa do Novo Líder em Crescimento Capilar 2025',
    description: 'Descubra por que o Biocapilar conquistou o 1º lugar no ranking dos melhores produtos capilares de 2025.',
    type: 'website',
  },
}

export default function BiocapilarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 