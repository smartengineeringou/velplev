import LocaleProductsPage from '@/components/pages/LocaleProductsPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Продукция — VELPLEV упаковочные решения',
  description: 'Гибкие упаковочные пакеты для пищевой, хлебопекарной, потребительской и промышленной продукции. Все размеры изготавливаются на заказ.',
}

export default function RuProductsPage() {
  return <LocaleProductsPage locale="ru" t={translations.ru} />
}
