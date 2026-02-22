import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ampervolt - Profesjonalne Usługi Elektryczne',
  description: 'Kompleksowe usługi elektryczne - instalacje, naprawy, modernizacje. Profesjonalny serwis elektryczny dla domów i firm.',
  keywords: 'elektryk, usługi elektryczne, instalacje elektryczne, naprawy elektryczne, Ampervolt',
  authors: [{ name: 'Ampervolt' }],
  openGraph: {
    title: 'Ampervolt - Profesjonalne Usługi Elektryczne',
    description: 'Kompleksowe usługi elektryczne - instalacje, naprawy, modernizacje.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
