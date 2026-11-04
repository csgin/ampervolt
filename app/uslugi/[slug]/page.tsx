import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { getService, services } from '@/lib/services'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from '@/lib/structuredData'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const url = `/uslugi/${service.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'website',
      locale: 'pl_PL',
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item) => item !== undefined)

  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8">
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFaqSchema(service.faq)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Start', path: '/' },
          { name: 'Usługi', path: '/uslugi' },
          { name: service.name, path: `/uslugi/${service.slug}` },
        ])}
      />

      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
          <Link href="/uslugi" className="hover:text-electric-700">
            ← Wszystkie usługi
          </Link>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">{service.h1}</h1>
        <p className="text-lg text-slate-700 mb-8">{service.lead}</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="w-5 h-5" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Link href="/kontakt" className="btn-secondary">
            Bezpłatna wycena
          </Link>
        </div>

        <div className="space-y-12">
          {service.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-slate-700 text-lg mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-1 text-slate-700 text-lg marker:text-electric-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Zakres usługi</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-lg marker:text-electric-700">
              {service.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Od czego zależy cena?</h2>
            <p className="text-slate-700 text-lg mb-4">
              Wycenę przygotowujemy indywidualnie, po rozmowie lub oględzinach. Na koszt wpływają przede
              wszystkim:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-lg marker:text-electric-700">
              {service.priceFactors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Najczęstsze pytania</h2>
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.question}
                  className="bg-white shadow-sm rounded-xl border border-slate-200"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-slate-900">
                    {item.question}
                  </summary>
                  <p className="px-5 pb-5 text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Zobacz także</h2>
              <ul className="space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/uslugi/${item.slug}`}
                      className="text-electric-700 hover:text-electric-800 text-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
