import Link from 'next/link'
import { Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import PricingItem from '@/components/PricingItem'
import JsonLd from '@/components/JsonLd'
import { homeFaq } from '@/lib/faq'
import { PROCESS_STEPS, services } from '@/lib/services'
import { faqSchema } from '@/lib/structuredData'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

const pricingItems = [
  {
    title: 'Montaż gniazdka',
    price: 'od 80 zł',
    description: 'Pojedyncze gniazdko wraz z podłączeniem i sprawdzeniem działania.',
  },
  {
    title: 'Wymiana rozdzielnicy',
    price: 'od 600 zł',
    description: 'Demontaż starej, montaż nowej rozdzielnicy, pomiary i protokół.',
  },
  {
    title: 'Kompleksowa instalacja',
    price: 'Wycena indywidualna',
    description: 'Dom, mieszkanie lub lokal – od przewodów po pomiary odbiorcze.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-electric-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Instalacje elektryczne w <span className="text-electric-700">Warszawie</span> i okolicach
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Wykonujemy instalacje w domach, mieszkaniach i lokalach firmowych – od projektu tras i
            rozdzielnicy po pomiary odbiorcze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={PHONE_HREF} className="btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link href="/kontakt" className="btn-secondary text-lg px-8 py-4">
              Bezpłatna wycena
            </Link>
          </div>
          <p className="text-sm text-slate-600">
            Uprawnienia SEP · Pomiary i protokoły · 12 miesięcy gwarancji
          </p>
        </div>
      </section>

      <section id="uslugi" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.cardDescription}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Jak pracujemy</h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title}>
                <div className="text-electric-700 font-bold mb-1">{index + 1}</div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cennik" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Cennik orientacyjny</h2>
          <p className="text-slate-600 text-center mb-10">
            Dokładną cenę podajemy po oględzinach. Materiały rozliczamy osobno lub w cenie – ustalamy to
            przed rozpoczęciem prac.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingItems.map((item) => (
              <PricingItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Najczęstsze pytania</h2>
          <div className="space-y-3">
            {homeFaq.map((item) => (
              <details
                key={item.question}
                className="group bg-white shadow-sm rounded-xl border border-slate-200"
              >
                <summary className="cursor-pointer p-5 font-semibold text-slate-900">
                  {item.question}
                </summary>
                <p className="px-5 pb-5 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-electric-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Planujesz instalację elektryczną?</h2>
          <p className="text-slate-700 mb-8">
            Zadzwoń lub napisz – przygotujemy bezpłatną wycenę i zaproponujemy termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="btn-primary">
              <Phone className="w-5 h-5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
