import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, ChevronRight, Phone } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { PROCESS_STEPS, getService, services } from '@/lib/services'
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
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFaqSchema(service.faq)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Start', path: '/' },
          { name: 'Usługi', path: '/uslugi' },
          { name: service.name, path: `/uslugi/${service.slug}` },
        ])}
      />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-electric-500">Start</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/uslugi" className="hover:text-electric-500">Usługi</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-glow">{service.h1}</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">{service.lead}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-400 text-black font-bold px-6 py-3 rounded-lg shadow-glow transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black font-bold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <span>Darmowa wycena</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto space-y-12">
          {service.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-gray-400 text-lg mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-electric-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-dark-lighter">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Zakres </span>
            <span className="text-electric-500 text-glow">usługi</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-dark-card border border-electric-500/20 rounded-lg p-4 text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-electric-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Jak </span>
            <span className="text-electric-500 text-glow">pracujemy</span>
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="bg-dark-card border border-electric-500/20 rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-electric-500 mb-2">{index + 1}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Od czego zależy cena?</h2>
          <p className="text-gray-400 mb-6">
            Każda realizacja jest inna, dlatego wycenę przygotowujemy indywidualnie – po rozmowie lub
            oględzinach. Na koszt wpływają przede wszystkim:
          </p>
          <ul className="space-y-2">
            {service.priceFactors.map((factor) => (
              <li key={factor} className="flex items-start gap-3 text-gray-300">
                <span className="text-electric-500 mt-0.5 flex-shrink-0">✓</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm mt-6">
            Orientacyjne ceny wybranych usług znajdziesz w{' '}
            <Link href="/#cennik" className="text-electric-500 hover:text-electric-400">
              cenniku
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-white">Najczęściej zadawane </span>
            <span className="text-electric-500 text-glow">pytania</span>
          </h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="group bg-dark-card rounded-xl border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white">
                  <span>{item.question}</span>
                  <ChevronRight className="w-5 h-5 text-electric-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-400">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-dark-lighter">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Zobacz także
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/uslugi/${item.slug}`}
                    className="block h-full bg-dark-card border border-electric-500/20 hover:border-electric-500/50 rounded-lg p-5 card-hover"
                  >
                    <h3 className="font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.cardDescription}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section-padding bg-gradient-to-b from-dark to-dark-lighter">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Zaplanuj <span className="text-electric-500 text-glow">instalację</span> z Ampervolt
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Opisz, co chcesz wykonać – przygotujemy bezpłatną wycenę i zaproponujemy termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-400 text-black font-bold px-8 py-4 rounded-lg shadow-glow transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
