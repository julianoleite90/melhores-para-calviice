'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import { MobileMenu } from './MobileMenu'
import { HairFollicleIcon } from '@/components/icons/HairFollicleIcon'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

const navigationItems = [
  {
    label: 'Condições de Saúde',
    href: '#ranking',
    items: []
  },
  {
    label: 'Bem-estar',
    href: '#ranking',
    items: []
  },
  {
    label: 'Nutrição & Fitness',
    href: '#ranking',
    items: []
  },
  {
    label: 'Avaliações de Produtos',
    href: '#ranking',
    items: []
  },
  {
    label: 'Encontre um Produto',
    href: '#ranking',
    items: []
  },
  {
    label: 'Ferramentas',
    href: '#ranking',
    items: []
  },
  {
    label: 'Sobre Nós',
    href: '#ranking',
    items: []
  }
]

export function Header() {
  const scrollToRanking = (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById('ranking')
    if (section) {
      const headerOffset = 64
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="relative flex items-center justify-between h-16 lg:h-24">
          {/* Menu Mobile (esquerda) */}
          <div className="flex items-center lg:w-[180px]">
            <MobileMenu navigationItems={navigationItems} />
          </div>

          {/* Logo (centro em todas as telas) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/#ranking" 
              onClick={scrollToRanking}
              className={`text-xl lg:text-2xl font-light tracking-wide text-emerald-600 flex items-center gap-2 ${playfair.className}`}
            >
              <span>SAÚDE</span>
              <HairFollicleIcon className="h-5 w-5 lg:h-6 lg:w-6 text-black" strokeWidth={1.5} />
              <span>CAPILAR</span>
            </Link>
          </div>

          {/* Newsletter e Busca (direita) */}
          <div className="flex items-center gap-4 lg:gap-6 lg:w-[180px] justify-end">
            <Link 
              href="/#ranking" 
              onClick={scrollToRanking}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase hidden lg:block"
            >
              Newsletters
            </Link>
            <div className="h-4 w-px bg-gray-300 hidden lg:block" />
            <button 
              onClick={scrollToRanking}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
              <span className="hidden lg:inline uppercase">Buscar</span>
            </button>
          </div>
        </div>

        {/* Navigation - Visível apenas em desktop */}
        <nav className="hidden lg:flex items-center justify-center py-4">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={scrollToRanking}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
} 