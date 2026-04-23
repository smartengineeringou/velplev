import LocaleProductsPage from '@/components/pages/LocaleProductsPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Produkti — VELPLEV iepakojuma risinājumi',
  description: 'Elastīgā iepakojuma maisi pārtikas, maizīšu, patēriņa preču un rūpnieciskām vajadzībām. Visi izmēri pēc pasūtījuma.',
}

export default function LvProductsPage() {
  return <LocaleProductsPage locale="lv" t={translations.lv} />
}
