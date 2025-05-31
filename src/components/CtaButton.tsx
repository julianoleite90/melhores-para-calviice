'use client'

import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface CtaButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CtaButton({ children, href, variant = 'primary', className = '' }: CtaButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white hover:shadow-emerald-200 hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white hover:shadow-rose-200 hover:shadow-2xl"
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </a>
  )
} 