import HomePageContent from '@/components/pages/HomePageContent'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'VELPLEV — Производитель гибкой упаковки | Рига, Латвия',
  description: 'Полипропиленовые и полиэтиленовые упаковочные пакеты для пищевой, розничной и промышленной отраслей. Изготовление на заказ и печатная упаковка.',
}

export default function RuHomePage() {
  return <HomePageContent locale="ru" t={translations.ru} />
}
