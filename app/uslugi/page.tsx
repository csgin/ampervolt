import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ServiceCard from '@/components/ServiceCard'
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
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Start', path: '/' },
          { name: 'Usługi', path: '/uslugi' },
        ])}
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Usługi elektryczne</h1>
        <p className="text-lg text-slate-700 mb-12 max-w-3xl">
          Specjalizujemy się w wykonywaniu instalacji elektrycznych w domach, mieszkaniach i lokalach
          firmowych. Pracujemy na terenie: {AREA}.
        </p>
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
  )
}
