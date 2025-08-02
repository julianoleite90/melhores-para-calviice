import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rogaine - Crescimento Capilar',
  description: 'Rogaine - Análise completa do suplemento Rogaine para crescimento capilar',
}

export default function RogaineLayout({
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