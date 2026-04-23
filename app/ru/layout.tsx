import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://velplev.lv'),
  title: 'VELPLEV — Производитель гибкой упаковки в Латвии',
  description:
    'VELPLEV производит упаковочные пакеты из полипропилена и полиэтилена для пищевой, розничной и промышленной сферы. Нестандартные размеры, печать на заказ, заказы B2B.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://velplev.lv/ru',
    siteName: 'VELPLEV',
    title: 'VELPLEV — Производитель гибкой упаковки в Латвии',
    description:
      'Пакеты из полипропилена и полиэтилена для пищевой, розничной и промышленной сферы. Нестандартные размеры, печать на заказ, заказы B2B.',
    images: [
      {
        url: '/api/og?locale=ru',
        width: 1200,
        height: 630,
        alt: 'VELPLEV — Производитель гибкой упаковки в Латвии',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELPLEV — Производитель гибкой упаковки в Латвии',
    description:
      'Пакеты из полипропилена и полиэтилена для пищевой, розничной и промышленной сферы. Нестандартные размеры, печать на заказ, заказы B2B.',
    images: ['/api/og?locale=ru'],
  },
}

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
