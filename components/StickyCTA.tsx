'use client'

import { Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Sticky Call Button */}
      <a
        href="tel:+48XXXXXXXXX"
        className={`
          fixed bottom-6 right-6 z-50 
          md:hidden
          flex items-center justify-center
          w-16 h-16 
          bg-electric-500 hover:bg-electric-400
          text-black
          rounded-full
          shadow-electric-lg hover:shadow-electric-xl
          transition-all duration-300
          animate-pulse-glow
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        aria-label="Zadzwoń teraz"
      >
        <Phone className="w-7 h-7" />
      </a>

      {/* Desktop Sticky CTA Bar */}
      <div
        className={`
          hidden md:block
          fixed bottom-0 left-0 right-0 z-40
          bg-dark/95 backdrop-blur-lg
          border-t border-electric-500/30
          shadow-electric
          transition-all duration-300
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-lg">Potrzebujesz elektryka?</p>
              <p className="text-gray-400 text-sm">Zadzwoń lub napisz - odpowiadamy w 15 minut!</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+48XXXXXXXXX"
                className="flex items-center gap-2 bg-electric-500 hover:bg-electric-400 text-black font-bold px-6 py-3 rounded-lg shadow-glow transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+48 XXX XXX XXX</span>
              </a>
              <a
                href="#kontakt"
                className="border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black font-bold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Darmowa Wycena
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyCTA
