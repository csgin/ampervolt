import Link from 'next/link'
import { Zap } from 'lucide-react'
import { services } from '@/lib/services'
import { AREA, EMAIL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
            <span className="text-lg font-bold text-slate-900">AMPERVOLT</span>
          </div>
          <p className="text-slate-600 text-sm">
            Instalacje elektryczne dla domów, mieszkań i firm. {AREA}.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-3">Usługi</h2>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/uslugi/${service.slug}`}
                  className="text-slate-600 hover:text-electric-700"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-3">Kontakt</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href={PHONE_HREF} className="hover:text-electric-700">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-electric-700">{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ampervolt. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
)

export default Footer
