'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  navigationItems: Array<{
    label: string
    href: string
  }>
}

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

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
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Menu Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -ml-2 text-gray-600 hover:text-gray-900"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="mt-8">
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={scrollToRanking}
                    className="block text-base font-medium text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
} 