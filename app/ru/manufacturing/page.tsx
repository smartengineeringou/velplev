import LocaleManufacturingPage from '@/components/pages/LocaleManufacturingPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Производство — VELPLEV производитель гибкой упаковки',
  description: 'Производственные возможности, материалы и форматы пакетов VELPLEV. Плёнки ПП и ПЭ. Нестандартные размеры на заказ.',
}

export default function RuManufacturingPage() {
  return <LocaleManufacturingPage locale="ru" t={translations.ru} />
}
