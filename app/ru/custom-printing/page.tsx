import LocaleCustomPrintingPage from '@/components/pages/LocaleCustomPrintingPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Печать на заказ — VELPLEV брендированная упаковка',
  description: 'Индивидуальные печатные упаковочные пакеты с вашим логотипом и брендом. Материалы ПП и ПЭ. Подходит для розницы, промо и private label.',
}

export default function RuCustomPrintingPage() {
  return <LocaleCustomPrintingPage locale="ru" t={translations.ru} />
}
