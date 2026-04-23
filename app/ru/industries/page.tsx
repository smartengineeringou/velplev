import LocaleIndustriesPage from '@/components/pages/LocaleIndustriesPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Отрасли — VELPLEV упаковка по отраслям',
  description: 'Упаковочные решения для хлебопеков, производителей продуктов питания, розницы и офисных принадлежностей.',
}

export default function RuIndustriesPage() {
  return <LocaleIndustriesPage locale="ru" t={translations.ru} />
}
