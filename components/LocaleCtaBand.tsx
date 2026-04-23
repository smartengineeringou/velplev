import Link from 'next/link'
import type { Locale, Translations } from '@/lib/translations'

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleCtaBand({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const c = t.cta
  return (
    <section className="bg-primary py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">{c.heading}</h2>
        <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {c.body}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`${prefix}/contact`}
            className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-brand-teal-light transition-colors text-sm"
          >
            {c.requestQuote}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors text-sm"
          >
            {c.contactSales}
          </Link>
        </div>
      </div>
    </section>
  )
}
