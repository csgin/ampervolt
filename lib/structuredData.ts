export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ampervolt',
  image: 'https://ampervolt.net/logo.png',
  '@id': 'https://ampervolt.net',
  url: 'https://ampervolt.net',
  telephone: '+48-XXX-XXX-XXX',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Warszawa',
    postalCode: '',
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
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'Interwencje awaryjne 24/7',
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
    'Modernizacje',
    'Naprawy elektryczne',
    'Pomiary elektryczne',
    'Interwencje awaryjne',
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ile kosztuje przyjazd elektryka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dojazd w ramach Warszawy i okolic jest bezpłatny przy zleceniu usługi. W przypadku samej wyceny pobieramy symboliczną opłatę, którą odliczamy od wartości zlecenia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy dojeżdżacie w trybie awaryjnym 24h?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, oferujemy całodobową pomoc w nagłych przypadkach. Czas dojazdu to maksymalnie 60 minut od zgłoszenia. Interwencje awaryjne wyceniane są indywidualnie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy wystawiacie faktury VAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, standardowo wystawiamy faktury VAT. Posiadamy wszystkie niezbędne ubezpieczenia i uprawnienia do wykonywania usług elektrycznych.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile trwa typowa instalacja elektryczna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Czas realizacji zależy od zakresu prac. Wymiana gniazdek to kilka godzin, kompletna instalacja w mieszkaniu 2-3 dni, w domu jednorodzinnym 1-2 tygodnie. Dokładny harmonogram ustalamy po wycenie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy udzielacie gwarancji na wykonane prace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, wszystkie nasze usługi objęte są 12-miesięczną gwarancją. Dodatkowo materiały posiadają gwarancję producenta. Wydajemy pisemne potwierdzenie gwarancji.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jakie materiały stosujecie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pracujemy wyłącznie na sprawdzonych, certyfikowanych materiałach renomowanych producentów. Klient może wybrać konkretne marki lub skorzystać z naszych rekomendacji.',
      },
    },
  ],
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ampervolt.net',
    },
  ],
}
