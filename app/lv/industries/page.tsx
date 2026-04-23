import LocaleIndustriesPage from '@/components/pages/LocaleIndustriesPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Nozares — VELPLEV iepakojums pa nozarēm',
  description: 'Iepakojuma risinājumi maizniekiem, pārtikas ražotājiem, tirdzniecībai un biroja precēm.',
}

export default function LvIndustriesPage() {
  return <LocaleIndustriesPage locale="lv" t={translations.lv} />
}
