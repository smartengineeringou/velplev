import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://velplev.lv'),
  title: 'VELPLEV — Flexible Packaging Manufacturer',
  description:
    'VELPLEV manufactures polypropylene and polyethylene packaging bags for food, bakery, retail, industrial, and custom printed applications. B2B packaging supplier based in Latvia.',
  keywords:
    'flexible packaging, polypropylene bags, polyethylene bags, printed bags, bakery packaging, food packaging, custom packaging, B2B packaging Latvia',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://velplev.lv',
    siteName: 'VELPLEV',
    title: 'VELPLEV — Flexible Packaging Manufacturer',
    description:
      'Polypropylene & polyethylene bags for food, bakery, retail, and industrial use. Custom sizes and print. B2B orders. Riga, Latvia.',
    images: [
      {
        url: '/api/og?locale=en',
        width: 1200,
        height: 630,
        alt: 'VELPLEV — Flexible Packaging Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELPLEV — Flexible Packaging Manufacturer',
    description:
      'Polypropylene & polyethylene bags for food, bakery, retail, and industrial use. Custom sizes and print. B2B orders. Riga, Latvia.',
    images: ['/api/og?locale=en'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
