'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

const navLinks = [
  { href: '/uslugi', label: 'Usługi' },
  { href: '/#cennik', label: 'Cennik' },
  { href: '/kontakt', label: 'Kontakt' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Zap className="w-7 h-7 text-amber-500 fill-amber-500" />
            <span className="text-xl font-bold text-slate-900">AMPERVOLT</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-electric-700 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="btn-primary py-2">
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 p-2"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-electric-700 font-medium py-3"
              >
                {link.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="btn-primary w-full mt-3">
              {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navigation
