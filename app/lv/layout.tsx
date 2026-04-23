import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://velplev.lv'),
  title: 'VELPLEV — Elastīgā iepakojuma ražotājs Latvijā',
  description:
    'VELPLEV ražo polipropilēna un polietilēna iepakojuma maisus pārtikai, mazumtirdzniecībai un rūpniecībai. Pielāgoti izmēri, drukāts iepakojums, B2B pasūtījumi.',
  openGraph: {
    type: 'website',
    locale: 'lv_LV',
    url: 'https://velplev.lv/lv',
    siteName: 'VELPLEV',
    title: 'VELPLEV — Elastīgā iepakojuma ražotājs Latvijā',
    description:
      'Polipropilēna un polietilēna maisi pārtikai, maiznīcām, mazumtirdzniecībai un rūpniecībai. Pielāgoti izmēri un druka. B2B pasūtījumi.',
    images: [
      {
        url: '/api/og?locale=lv',
        width: 1200,
        height: 630,
        alt: 'VELPLEV — Elastīgā iepakojuma ražotājs Latvijā',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELPLEV — Elastīgā iepakojuma ražotājs Latvijā',
    description:
      'Polipropilēna un polietilēna maisi pārtikai, maiznīcām, mazumtirdzniecībai un rūpniecībai. Pielāgoti izmēri un druka. B2B pasūtījumi.',
    images: ['/api/og?locale=lv'],
  },
}

export default function LvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
