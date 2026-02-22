import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt - Ampervolt',
  description: 'Skontaktuj się z Ampervolt - profesjonalne usługi elektryczne. Telefon, email, lokalizacja.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Skontaktuj się z nami
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami w wygodny dla Ciebie sposób.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/10">
                <Phone className="w-8 h-8 text-electric-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-gray-400 mb-2">Zadzwoń do nas</p>
              <a href="tel:+48XXXXXXXXX" className="text-electric-500 hover:text-electric-400 font-semibold">
                +48 XXX XXX XXX
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/10">
                <Mail className="w-8 h-8 text-electric-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-2">Napisz do nas</p>
              <a href="mailto:kontakt@ampervolt.net" className="text-electric-500 hover:text-electric-400 font-semibold">
                kontakt@ampervolt.net
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/10">
                <MapPin className="w-8 h-8 text-electric-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lokalizacja</h3>
              <p className="text-gray-400 mb-2">Obszar działania</p>
              <p className="text-electric-500 font-semibold">
                Polska
              </p>
            </div>

            {/* Hours */}
            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/10">
                <Clock className="w-8 h-8 text-electric-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Godziny pracy</h3>
              <p className="text-gray-400 mb-2">Pon - Pt</p>
              <p className="text-electric-500 font-semibold">
                8:00 - 18:00
              </p>
              <p className="text-gray-500 text-sm mt-2">Interwencje 24/7</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg p-8 border border-electric-500/20">
              <h2 className="text-2xl font-bold mb-6 text-electric-500">
                Formularz Kontaktowy
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-colors"
                    placeholder="Jan Kowalski"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-colors"
                    placeholder="jan@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-colors"
                    placeholder="+48 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-colors"
                    placeholder="Temat wiadomości"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20 transition-colors resize-none"
                    placeholder="Opisz swoje zapytanie..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Wyślij wiadomość
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                * Formularz jest obecnie w trybie demonstracyjnym. Aby skonfigurować obsługę formularzy, 
                użyj rozwiązań takich jak Formspree, EmailJS lub własnego API.
              </p>
            </div>

            {/* Map */}
            <div className="bg-gray-900 rounded-lg p-8 border border-electric-500/20">
              <h2 className="text-2xl font-bold mb-6 text-electric-500">
                Lokalizacja
              </h2>
              <div className="relative w-full h-[400px] lg:h-full rounded-lg overflow-hidden border border-gray-700">
                {/* Google Maps Embed - Replace with actual location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1642788827636!2d21.012228776889843!3d52.22967717197341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji Ampervolt"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-electric-500/20 rounded-lg" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-gray-400">
                  <strong className="text-white">Obszar działania:</strong> Polska
                </p>
                <p className="text-gray-400">
                  Świadczymy usługi na terenie całego kraju. Skontaktuj się z nami, 
                  aby ustalić szczegóły dotyczące Twojej lokalizacji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20">
              <h3 className="text-xl font-bold mb-2 text-electric-500">
                Czy wykonujecie wyceny?
              </h3>
              <p className="text-gray-400">
                Tak, oferujemy bezpłatne wyceny. Skontaktuj się z nami, aby umówić spotkanie 
                i omówić szczegóły projektu.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20">
              <h3 className="text-xl font-bold mb-2 text-electric-500">
                Jaki jest czas realizacji?
              </h3>
              <p className="text-gray-400">
                Czas realizacji zależy od zakresu prac. Standardowe instalacje wykonujemy 
                w ciągu kilku dni, większe projekty wymagają indywidualnego ustalenia harmonogramu.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20">
              <h3 className="text-xl font-bold mb-2 text-electric-500">
                Czy posiadacie gwarancję?
              </h3>
              <p className="text-gray-400">
                Tak, wszystkie nasze usługi objęte są gwarancją. Szczegóły ustalimy podczas 
                podpisywania umowy.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20">
              <h3 className="text-xl font-bold mb-2 text-electric-500">
                Czy świadczycie usługi awaryjne?
              </h3>
              <p className="text-gray-400">
                Tak, oferujemy interwencje awaryjne 24/7. W przypadku nagłych sytuacji 
                skontaktuj się z nami telefonicznie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
