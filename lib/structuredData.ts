import { homeFaq } from './faq'
import { SITE_NAME, SITE_URL } from './site'
import type { FaqItem, ServicePage } from './services'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+48-XXX-XXX-XXX',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.2297,
    longitude: 21.0122,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/ampervolt',
    'https://www.instagram.com/ampervolt',
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 52.2297,
      longitude: 21.0122,
    },
    geoRadius: '50000',
  },
  serviceType: [
    'Instalacje elektryczne',
    'Wymiana instalacji elektrycznej',
    'Montaż rozdzielnic',
    'Montaż ładowarek samochodów elektrycznych',
    'Pomiary elektryczne',
  ],
}

export const buildFaqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const faqSchema = buildFaqSchema(homeFaq)

export const buildBreadcrumbSchema = (
  crumbs: { name: string; path: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.path}`,
  })),
})

export const buildServiceSchema = (service: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.h1,
  description: service.metaDescription,
  url: `${SITE_URL}/uslugi/${service.slug}`,
  serviceType: service.name,
  provider: { '@id': SITE_URL },
  areaServed: { '@type': 'City', name: 'Warszawa' },
})
