import Link from 'next/link'
import { Zap, Home, Building2, Lightbulb, Shield, Wrench, Clock } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import SpecializationCard from '@/components/SpecializationCard'

export default function HomePage() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Instalacje Elektryczne',
      description: 'Kompleksowe wykonanie instalacji elektrycznych dla domów i mieszkań.',
      features: [
        'Projektowanie i wykonanie',
        'Modernizacja starych instalacji',
        'Pomiary i sprawdzenia',
      ],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Usługi Komercyjne',
      description: 'Profesjonalne usługi elektryczne dla firm i obiektów użyteczności publicznej.',
      features: [
        'Instalacje przemysłowe',
        'System zarządzania energią',
        'Serwis i konserwacja',
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Oświetlenie LED',
      description: 'Nowoczesne rozwiązania oświetleniowe LED - oszczędność i efektywność.',
      features: [
        'Projekty oświetleniowe',
        'Montaż opraw LED',
        'Smart lighting',
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Systemy Zabezpieczeń',
      description: 'Instalacja systemów ochrony przeciwprzepięciowej i bezpieczeństwa.',
      features: [
        'Ochrona przeciwprzepięciowa',
        'Systemy alarmowe',
        'Monitoring',
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Naprawy i Modernizacje',
      description: 'Szybkie i skuteczne naprawy oraz modernizacje instalacji elektrycznych.',
      features: [
        'Diagnozowanie usterek',
        'Naprawa awarii',
        'Modernizacja instalacji',
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Serwis 24/7',
      description: 'Całodobowa pomoc w nagłych przypadkach - jesteśmy zawsze dostępni.',
      features: [
        'Interwencje awaryjne',
        'Szybki czas reakcji',
        'Wsparcie techniczne',
      ],
    },
  ]

  const specializations = [
    {
      title: 'Instalacje Domowe',
      description: 'Specjalizuję się w kompleksowych instalacjach elektrycznych dla domów jednorodzinnych i mieszkań.',
      items: [
        'Rozdzielnice elektryczne',
        'Instalacje gniazdkowe i oświetleniowe',
        'Instalacje inteligentnego domu',
        'Systemy grzewcze elektryczne',
        'Fotowoltaika - przyłączenie',
      ],
    },
    {
      title: 'Automatyka Budynkowa',
      description: 'Nowoczesne systemy automatyki zwiększające komfort i bezpieczeństwo.',
      items: [
        'Smart home - sterowanie oświetleniem',
        'Automatyczne rolety i żaluzje',
        'Systemy klimatyzacji',
        'Centralne sterowanie',
        'Integracja z aplikacjami mobilnymi',
      ],
    },
    {
      title: 'Energia Odnawialna',
      description: 'Profesjonalne wsparcie w zakresie odnawialnych źródeł energii.',
      items: [
        'Przyłączenie fotowoltaiki',
        'Pompy ciepła - instalacja elektryczna',
        'Magazyny energii',
        'Ładowarki do samochodów elektrycznych',
        'Audyty energetyczne',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 electric-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Floating electric elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-electric-500 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-electric-500 rounded-full animate-pulse delay-150" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Zap className="w-20 h-20 md:w-24 md:h-24 mx-auto text-electric-500 animate-pulse-glow" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-glow">
            AMPERVOLT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
            Profesjonalne Usługi Elektryczne
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Kompleksowe rozwiązania elektryczne dla Twojego domu i firmy. 
            Bezpieczeństwo, jakość i innowacja w każdym projekcie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary text-lg">
              Skontaktuj się z nami
            </Link>
            <Link href="#oferta" className="btn-secondary text-lg">
              Zobacz ofertę
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric-500 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Lat Doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric-500 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Zrealizowanych Projektów</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric-500 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Zadowolonych Klientów</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-electric-500 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Dostępność</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="oferta" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow">
              Nasza Oferta
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi elektryczne dostosowane do Twoich potrzeb
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section id="specjalizacje" className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow">
              Moje Specjalizacje
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Wieloletnie doświadczenie w kluczowych obszarach elektrotechniki
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <SpecializationCard key={index} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                O Mnie
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Jestem doświadczonym elektrykiem z ponad 10-letnim stażem w branży. 
                  Specjalizuję się w instalacjach elektrycznych dla domów jednorodzinnych, 
                  mieszkań oraz obiektów komercyjnych.
                </p>
                <p>
                  Moja pasja do elektroniki i automatyki sprawiła, że nieustannie rozwijam 
                  swoje umiejętności w zakresie nowoczesnych technologii, takich jak inteligentne 
                  domy, fotowoltaika czy systemy zarządzania energią.
                </p>
                <p>
                  Priorytetem w mojej pracy jest bezpieczeństwo, jakość wykonania oraz 
                  satysfakcja klienta. Każdy projekt traktuję indywidualnie, dostosowując 
                  rozwiązania do konkretnych potrzeb i oczekiwań.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg px-6 py-3">
                  <div className="text-electric-500 font-bold">Certyfikowane SEP</div>
                </div>
                <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg px-6 py-3">
                  <div className="text-electric-500 font-bold">Ubezpieczenie OC</div>
                </div>
                <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg px-6 py-3">
                  <div className="text-electric-500 font-bold">Gwarancja</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-500/20 to-transparent rounded-lg p-8 border border-electric-500/30 electric-border">
                <div className="w-full h-full flex items-center justify-center">
                  <Zap className="w-48 h-48 text-electric-500 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
            Gotowy na współpracę?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Skontaktuj się z nami już dziś i umów bezpłatną wycenę
          </p>
          <Link href="/kontakt" className="btn-primary text-lg inline-block">
            Skontaktuj się teraz
          </Link>
        </div>
      </section>
    </>
  )
}
