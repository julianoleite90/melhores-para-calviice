import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Melhor Remédio', section: 'ranking' },
    { name: 'Comparativo', section: 'ranking' },
    { name: 'Avaliações', section: 'ranking' },
    { name: 'Resultados', section: 'ranking' },
    { name: 'Preços', section: 'ranking' },
  ]

  const scrollToSection = (e: React.MouseEvent) => {
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
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/#ranking" 
              onClick={scrollToSection}
              className="text-xl font-bold text-gray-900 cursor-pointer"
            >
              Emagrecedores
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={`/#${item.section}`}
                onClick={scrollToSection}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/#${item.section}`}
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-gray-900 block w-full text-left px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}