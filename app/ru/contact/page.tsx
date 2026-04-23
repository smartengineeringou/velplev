import LocaleContactPage from '@/components/pages/LocaleContactPage'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'Контакты — VELPLEV запрос на упаковку',
  description: 'Свяжитесь с VELPLEV для запроса на упаковку. К. Улманя гатве 2, Рига, LV-1004. Тел.: +371 67-614-566.',
}

export default function RuContactPage() {
  return <LocaleContactPage locale="ru" t={translations.ru} />
}
