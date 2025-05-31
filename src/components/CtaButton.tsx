'use client'

import { useUtm } from '@/hooks/useUtm'

interface CtaButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function CtaButton({ href, className = '', children }: CtaButtonProps) {
  const { addUtmsToUrl } = useUtm()

  return (
    <a 
      href={addUtmsToUrl(href)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
} 