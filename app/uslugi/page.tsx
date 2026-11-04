import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { services } from '@/lib/services'
import { buildBreadcrumbSchema } from '@/lib/structuredData'
import { AREA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Usługi elektryczne – instalacje elektryczne Warszawa',
  description:
    'Instalacje elektryczne w domach, mieszkaniach i firmach, wymiana instalacji, rozdzielnice, ładowarki EV, pomiary i odbiory. Sprawdź ofertę Ampervolt.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi elektryczne – instalacje elektryczne Warszawa',
    description:
      'Instalacje elektryczne w domach, mieszkaniach i firmach, wymiana instalacji, rozdzielnice, ładowarki EV, pomiary i odbiory.',
    url: '/uslugi',
    type: 'website',
    locale: 'pl_PL',
  },
}

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Start', path: '/' },
          { name: 'Usługi', path: '/uslugi' },
        ])}
      />
      <section className="pt-32 pb-12 md:pt-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Instalacje elektryczne i usługi elektryczne
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Specjalizujemy się w wykonywaniu instalacji elektrycznych w domach, mieszkaniach i
            lokalach firmowych. Pracujemy na terenie: {AREA}.
          </p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/uslugi/${service.slug}`}
              className="group block bg-dark-card rounded-xl border border-electric-500/20 hover:border-electric-500/50 p-6 card-hover"
            >
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-electric-500 transition-colors">
                {service.name}
              </h2>
              <p className="text-gray-400 mb-4">{service.cardDescription}</p>
              <span className="inline-flex items-center gap-2 text-electric-500 font-medium">
                Sprawdź szczegóły
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
