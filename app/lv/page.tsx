import HomePageContent from '@/components/pages/HomePageContent'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'VELPLEV — Elastīgā iepakojuma ražotājs | Rīga, Latvija',
  description: 'Polipropilēna un polietilēna iepakojuma maisi pārtikas, tirdzniecības un rūpniecības vajadzībām. Pielāgota ražošana un iespiestas maisiņas.',
}

export default function LvHomePage() {
  return <HomePageContent locale="lv" t={translations.lv} />
}
