import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import { organizationSchema } from '@/lib/structuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ampervolt - Profesjonalne Usługi Elektryczne 24/7 w Twojej Okolicy',
  description: 'Szybki dojazd ⚡ Certyfikowany elektryk ✓ Gwarancja wykonania ✓ Usługi elektryczne dla domów i firm. Instalacje, naprawy, modernizacje. Dzwoń: +48 XXX XXX XXX',
  keywords: 'elektryk, usługi elektryczne, instalacje elektryczne, naprawa instalacji, awaria elektryczna, elektryk 24h, pomiary elektryczne, przeglądy elektryczne',
  authors: [{ name: 'Ampervolt' }],
  openGraph: {
    title: 'Ampervolt - Profesjonalne Usługi Elektryczne 24/7',
    description: 'Szybki dojazd ⚡ Certyfikowany elektryk ✓ Gwarancja wykonania. Kompleksowe usługi elektryczne.',
    type: 'website',
    locale: 'pl_PL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-dark text-white min-h-screen antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
