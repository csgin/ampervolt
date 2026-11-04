import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { AREA, EMAIL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z Ampervolt – zamów bezpłatną wycenę instalacji elektrycznej. Telefon, email, obszar działania.',
  alternates: { canonical: '/kontakt' },
}

export default function ContactPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Kontakt</h1>
        <p className="text-lg text-slate-700 mb-10">
          Opisz, jaką instalację planujesz (dom, mieszkanie, lokal, orientacyjny metraż i etap prac).
          Odpowiemy i umówimy bezpłatną wycenę.
        </p>

        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-electric-700 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-slate-900">Telefon</h2>
              <a href={PHONE_HREF} className="text-electric-700 hover:text-electric-800 text-lg">
                {PHONE_DISPLAY}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-electric-700 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-slate-900">Email</h2>
              <a href={`mailto:${EMAIL}`} className="text-electric-700 hover:text-electric-800 text-lg">
                {EMAIL}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-electric-700 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-slate-900">Godziny pracy</h2>
              <p className="text-slate-700">Poniedziałek – piątek, 8:00 – 18:00</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-electric-700 mt-1 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-slate-900">Obszar działania</h2>
              <p className="text-slate-700">{AREA}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
