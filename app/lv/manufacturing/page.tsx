import LocaleManufacturingPage from '@/components/pages/LocaleManufacturingPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Ražošana — VELPLEV elastīgā iepakojuma ražotājs',
  description: 'VELPLEV ražošanas iespējas, materiāli un maisu formāti. PP un PE plēves. Pielāgoti izmēri pēc pasūtījuma.',
}

export default function LvManufacturingPage() {
  return <LocaleManufacturingPage locale="lv" t={translations.lv} />
}
