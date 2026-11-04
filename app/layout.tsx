import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import { organizationSchema } from '@/lib/structuredData'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Instalacje elektryczne Warszawa – wykonanie i montaż | Ampervolt',
    template: '%s | Ampervolt',
  },
  description:
    'Wykonujemy instalacje elektryczne w domach, mieszkaniach i firmach w Warszawie i okolicach. Montaż od podstaw, rozdzielnice, pomiary i protokoły. Bezpłatna wycena.',
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ampervolt – instalacje elektryczne w Warszawie',
    description:
      'Montaż i wykonanie instalacji elektrycznych w domach, mieszkaniach i firmach. Certyfikowany elektryk, pomiary, gwarancja wykonania.',
    type: 'website',
    locale: 'pl_PL',
    siteName: SITE_NAME,
    url: '/',
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
      <body className={`${inter.className} bg-white text-slate-700 min-h-screen antialiased`}>
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
