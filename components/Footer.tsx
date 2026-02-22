import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-electric-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-electric-500" />
              <span className="text-xl font-bold">AMPERVOLT</span>
            </div>
            <p className="text-gray-400 text-sm">
              Profesjonalne usługi elektryczne. Bezpieczeństwo i jakość w każdym projekcie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-500">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#oferta" className="text-gray-400 hover:text-electric-500 text-sm transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/#specjalizacje" className="text-gray-400 hover:text-electric-500 text-sm transition-colors">
                  Specjalizacje
                </Link>
              </li>
              <li>
                <Link href="/#o-mnie" className="text-gray-400 hover:text-electric-500 text-sm transition-colors">
                  O Mnie
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-electric-500 text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-500">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-electric-500" />
                <span>+48 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-electric-500" />
                <span>kontakt@ampervolt.net</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-electric-500" />
                <span>Polska</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Ampervolt. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
