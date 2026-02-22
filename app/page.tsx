import Link from 'next/link'
import { 
  Zap, Phone, Clock, Shield, Wrench, TrendingUp, 
  Home, Building2, Lightbulb, AlertCircle, Plug, Box,
  CheckCircle, Award, ThumbsUp, Timer, Star, ChevronRight
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import PricingItem from '@/components/PricingItem'

export default function HomePage() {
  const features = [
    {
      icon: <Timer className="w-8 h-8" />,
      title: 'Szybki Dojazd',
      description: 'Docieramy do klienta w ciągu 60 minut od zgłoszenia w sytuacjach awaryjnych',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certyfikowany Elektryk',
      description: 'Uprawnienia SEP, ciągłe szkolenia i aktualna wiedza techniczna',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Gwarancja Wykonania',
      description: '12-miesięczna gwarancja na wszystkie wykonane prace i materiały',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Nowoczesny Sprzęt',
      description: 'Profesjonalne narzędzia i urządzenia pomiarowe najwyższej klasy',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Ubezpieczenie OC',
      description: 'Pełne ubezpieczenie odpowiedzialności cywilnej do 500 000 zł',
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: 'Transparentne Ceny',
      description: 'Jasna wycena przed rozpoczęciem prac - bez ukrytych kosztów',
    },
  ]

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Instalacje Elektryczne',
      description: 'Kompleksowe wykonawstwo instalacji elektrycznych w domach i mieszkaniach zgodnie z normami',
      features: [
        'Projektowanie i montaż instalacji od podstaw',
        'Rozdzielnice i tablice elektryczne',
        'Instalacje gniazdkowe i oświetleniowe',
        'Pomiary elektryczne i protokoły'
      ],
      slug: 'instalacje-elektryczne',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Modernizacje',
      description: 'Unowocześnianie przestarzałych instalacji elektrycznych z zachowaniem najwyższych standardów',
      features: [
        'Wymiana starych instalacji',
        'Rozbudowa istniejących układów',
        'Aktualizacja do obecnych norm',
        'Zwiększenie mocy przyłączeniowej'
      ],
      slug: 'modernizacje',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Pomiary i Przeglądy',
      description: 'Profesjonalne pomiary elektryczne i okresowe przeglądy instalacji z dokumentacją',
      features: [
        'Pomiary rezystancji izolacji',
        'Pomiary uziemień ochronnych',
        'Przeglądy okresowe',
        'Protokoły i certyfikaty'
      ],
      slug: 'pomiary-przeglady',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Usuwanie Awarii 24/7',
      description: 'Całodobowa pomoc w sytuacjach awaryjnych - szybka diagnoza i naprawa',
      features: [
        'Interwencje awaryjne 24h',
        'Diagnozowanie usterek',
        'Naprawa na miejscu',
        'Czas dojazdu do 60 minut'
      ],
      slug: 'awarie-24h',
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: 'Podłączenia Urządzeń',
      description: 'Profesjonalne podłączanie urządzeń elektrycznych i AGD z zachowaniem bezpieczeństwa',
      features: [
        'Kuchenki i piekarniki',
        'Klimatyzacje i pompy ciepła',
        'Ładowarki samochodów elektrycznych',
        'Fotowoltaika - przyłączenie'
      ],
      slug: 'podlaczenia-urzadzen',
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Rozdzielnie i Zabezpieczenia',
      description: 'Montaż i modernizacja rozdzielni elektrycznych oraz systemów zabezpieczeń',
      features: [
        'Rozdzielnie domowe i przemysłowe',
        'Ochrona przeciwprzepięciowa',
        'Systemy monitoringu zużycia',
        'Automatyka domowa'
      ],
      slug: 'rozdzielnie-zabezpieczenia',
    },
  ]

  const testimonials = [
    {
      name: 'Jan Kowalski',
      location: 'Warszawa, Mokotów',
      rating: 5,
      text: 'Profesjonalna obsługa, szybki dojazd i solidne wykonanie. Wymienili całą instalację w moim mieszkaniu. Polecam!',
      service: 'Modernizacja instalacji',
    },
    {
      name: 'Anna Nowak',
      location: 'Warszawa, Wilanów',
      rating: 5,
      text: 'Bardzo pomocni i kompetentni. Podłączyli mi nową kuchenkę elektryczną i sprawdzili całą instalację. Wszystko działa świetnie!',
      service: 'Podłączenie urządzeń',
    },
    {
      name: 'Piotr Wiśniewski',
      location: 'Warszawa, Śródmieście',
      rating: 5,
      text: 'Awaria w nocy - przyjechali w 45 minut i naprawili problem. Uczciwe ceny i pewne ręce. Dziękuję!',
      service: 'Usuwanie awarii',
    },
    {
      name: 'Maria Lewandowska',
      location: 'Warszawa, Ursynów',
      rating: 5,
      text: 'Kompleksowa instalacja elektryczna w nowym domu. Wszystko zgodnie z przepisami, terminowo i w dobrej cenie.',
      service: 'Instalacje elektryczne',
    },
    {
      name: 'Tomasz Dąbrowski',
      location: 'Warszawa, Bemowo',
      rating: 5,
      text: 'Szybko, sprawnie i profesjonalnie. Wykonali przegląd instalacji i pomiary. Otrzymałem pełną dokumentację.',
      service: 'Pomiary i przeglądy',
    },
    {
      name: 'Katarzyna Zielińska',
      location: 'Warszawa, Bielany',
      rating: 5,
      text: 'Polecam! Wymienili rozdzielnię i zainstalowali ochronę przeciwprzepięciową. Czuję się teraz bezpiecznie.',
      service: 'Rozdzielnie',
    },
  ]

  const pricingItems = [
    {
      title: 'Diagnoza i Wycena',
      price: 'od 0 zł',
      description: 'Wycena usług na miejscu',
      features: [
        'Dojazd do klienta',
        'Ocena zakresu prac',
        'Szczegółowa wycena',
        'Doradztwo techniczne',
      ],
    },
    {
      title: 'Instalacja Gniazdka',
      price: 'od 80 zł',
      description: 'Pojedyncze gniazdko',
      features: [
        'Montaż gniazdka',
        'Podłączenie do instalacji',
        'Sprawdzenie działania',
        'Materiały w cenie',
      ],
      isPopular: true,
    },
    {
      title: 'Wymiana Rozdzielni',
      price: 'od 600 zł',
      description: 'Kompleksowa wymiana',
      features: [
        'Demontaż starej rozdzielni',
        'Montaż nowej',
        'Podłączenie obwodów',
        'Pomiary i protokół',
      ],
    },
    {
      title: 'Interwencja Awaryjna',
      price: 'od 200 zł',
      description: 'Usługa 24/7',
      features: [
        'Dojazd w ciągu 60 min',
        'Diagnoza problemu',
        'Naprawa na miejscu',
        'Gwarancja wykonania',
      ],
    },
  ]

  const faqItems = [
    {
      question: 'Ile kosztuje przyjazd elektryka?',
      answer: 'Dojazd w ramach Warszawy i okolic jest bezpłatny przy zleceniu usługi. W przypadku samej wyceny pobieramy symboliczną opłatę, którą odliczamy od wartości zlecenia.',
    },
    {
      question: 'Czy dojeżdżacie w trybie awaryjnym 24h?',
      answer: 'Tak, oferujemy całodobową pomoc w nagłych przypadkach. Czas dojazdu to maksymalnie 60 minut od zgłoszenia. Interwencje awaryjne wyceniane są indywidualnie.',
    },
    {
      question: 'Czy wystawiacie faktury VAT?',
      answer: 'Tak, standardowo wystawiamy faktury VAT. Posiadamy wszystkie niezbędne ubezpieczenia i uprawnienia do wykonywania usług elektrycznych.',
    },
    {
      question: 'Ile trwa typowa instalacja elektryczna?',
      answer: 'Czas realizacji zależy od zakresu prac. Wymiana gniazdek to kilka godzin, kompletna instalacja w mieszkaniu 2-3 dni, w domu jednorodzinnym 1-2 tygodnie. Dokładny harmonogram ustalamy po wycenie.',
    },
    {
      question: 'Czy udzielacie gwarancji na wykonane prace?',
      answer: 'Tak, wszystkie nasze usługi objęte są 12-miesięczną gwarancją. Dodatkowo materiały posiadają gwarancję producenta. Wydajemy pisemne potwierdzenie gwarancji.',
    },
    {
      question: 'Jakie materiały stosujecie?',
      answer: 'Pracujemy wyłącznie na sprawdzonych, certyfikowanych materiałach renomowanych producentów. Klient może wybrać konkretne marki lub skorzystać z naszych rekomendacji.',
    },
  ]

  return (
    <>
      {/* Hero Section - Sprzedażowy */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 electric-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark" />
        
        {/* Animated electric elements */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-electric-500 rounded-full animate-pulse" />
        <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-electric-500 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-electric-500 rounded-full animate-pulse delay-150" />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-electric-500 rounded-full animate-pulse delay-300" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <div className="mb-6 inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-electric-500" />
            <span className="text-electric-500 text-sm font-medium">Profesjonalne Usługi Elektryczne</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Elektryk </span>
            <span className="text-electric-500 text-glow">24/7</span>
            <br />
            <span className="text-white">w Twojej Okolicy</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in">
            Szybki dojazd ⚡ Certyfikowane uprawnienia ✓ Gwarancja wykonania
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Kompleksowe usługi elektryczne dla domów i firm. 
            Instalacje, modernizacje, naprawy i interwencje awaryjne.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+48XXXXXXXXX"
              className="inline-flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-400 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-glow hover:shadow-electric-xl transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />
              <span>Zadzwoń: +48 XXX XXX XXX</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300"
            >
              <span>Darmowa Wycena</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-dark-card border border-electric-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-electric-500 mb-1">10+</div>
              <div className="text-gray-400 text-sm">Lat Doświadczenia</div>
            </div>
            <div className="bg-dark-card border border-electric-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-electric-500 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Zadowolonych Klientów</div>
            </div>
            <div className="bg-dark-card border border-electric-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-electric-500 mb-1">60 min</div>
              <div className="text-gray-400 text-sm">Czas Dojazdu</div>
            </div>
            <div className="bg-dark-card border border-electric-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-electric-500 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Dyżur Awaryjny</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Dlaczego </span>
              <span className="text-electric-500 text-glow">Ampervolt</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Profesjonalizm, doświadczenie i najwyższa jakość usług - to nasza gwarancja
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Nasze </span>
              <span className="text-electric-500 text-glow">Usługi</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kompleksowa obsługa elektryczna - od prostych napraw po skomplikowane instalacje
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="opinie" className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Opinie </span>
              <span className="text-electric-500 text-glow">Klientów</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sprawdź, co mówią o nas nasi zadowoleni klienci
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Cennik </span>
              <span className="text-electric-500 text-glow">Orientacyjny</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Przejrzyste ceny - dokładna wycena po oględzinach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingItems.map((item, index) => (
              <PricingItem key={index} {...item} />
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            * Ceny orientacyjne. Dokładna wycena po oględzinach. Materiały wliczone w cenę lub rozliczane osobno.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white">Najczęściej zadawane </span>
              <span className="text-electric-500 text-glow">Pytania</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Wszystko, co musisz wiedzieć przed zleceniem usługi
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-dark-card rounded-xl border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white">
                  <span>{item.question}</span>
                  <ChevronRight className="w-5 h-5 text-electric-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-400">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="section-padding bg-gradient-to-b from-dark to-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-electric-500 animate-pulse-glow" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Potrzebujesz </span>
            <span className="text-electric-500 text-glow">Elektryka</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Zadzwoń lub napisz - odpowiadamy w 15 minut! <br />
            Darmowa wycena i profesjonalne doradztwo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48XXXXXXXXX"
              className="inline-flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-400 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-glow hover:shadow-electric-xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>+48 XXX XXX XXX</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300"
            >
              <span>Formularz Kontaktowy</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
