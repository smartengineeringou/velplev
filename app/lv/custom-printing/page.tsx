import LocaleCustomPrintingPage from '@/components/pages/LocaleCustomPrintingPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Pielāgota druka — VELPLEV iespiestas iepakojuma maisiņas',
  description: 'Pielāgotas iespiestas iepakojuma maisiņas ar jūsu logotipu un zīmolu. PP un PE materiāli. Piemērots mazumtirdzniecībai, reklāmai un privātajam zīmolam.',
}

export default function LvCustomPrintingPage() {
  return <LocaleCustomPrintingPage locale="lv" t={translations.lv} />
}
