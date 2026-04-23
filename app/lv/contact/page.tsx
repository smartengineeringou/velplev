import LocaleContactPage from '@/components/pages/LocaleContactPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Kontakti — VELPLEV iepakojuma pieprasījums',
  description: 'Sazinieties ar VELPLEV iepakojuma pieprasījumam. K. Ulmaņa gatve 2, Rīga, LV-1004. Tālr.: +371 67-614-566.',
}

export default function LvContactPage() {
  return <LocaleContactPage locale="lv" t={translations.lv} />
}
