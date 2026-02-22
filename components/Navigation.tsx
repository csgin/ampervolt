'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Start' },
    { href: '/#oferta', label: 'Oferta' },
    { href: '/#specjalizacje', label: 'Moje Specjalizacje' },
    { href: '/#o-mnie', label: 'O Mnie' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-electric'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-electric-500 group-hover:animate-pulse-glow" />
              <div className="absolute inset-0 blur-xl bg-electric-500/30 group-hover:bg-electric-500/50 transition-all" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-glow">
              AMPERVOLT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-electric-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="btn-primary"
            >
              Skontaktuj się
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-electric-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-electric-500/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-300 hover:text-electric-500 font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={handleLinkClick}
              className="block btn-primary text-center mt-4"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
