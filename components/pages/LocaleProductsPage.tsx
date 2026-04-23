import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LocaleHeader from '@/components/LocaleHeader'
import LocaleFooter from '@/components/LocaleFooter'
import LocaleCtaBand from '@/components/LocaleCtaBand'
import type { Locale, Translations } from '@/lib/translations'

const categoryImages: Record<string, string> = {
  food: '/images/food-packaging.jpg',
  bakery: '/images/bakery-packaging.jpg',
  consumer: '/images/gallery-2.jpg',
  office: '/images/office-packaging.jpg',
  printed: '/images/printed-bags.jpg',
  industrial: '/images/industrial-packaging.jpg',
}

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleProductsPage({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const p = t.products

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{p.kicker}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">{p.heading}</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{p.body}</p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {p.categories.map((cat, i) => (
              <div key={cat.id} id={cat.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start scroll-mt-20">
                <div className={`relative rounded-xl overflow-hidden shadow aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={categoryImages[cat.id]} alt={cat.title} fill className="object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl font-bold text-brand-graphite mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{cat.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{p.typicalApplications}</p>
                      <ul className="flex flex-col gap-1.5">
                        {cat.applications.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{p.bagTypes}</p>
                      <ul className="flex flex-col gap-1.5">
                        {cat.bagTypes.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    href={`${prefix}/contact`}
                    className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                  >
                    {p.requestInquiry} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials info strip */}
        <section className="bg-secondary py-12 px-4 md:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { kicker: p.materialsKicker, body: p.materialsBody },
              { kicker: p.materialsDimKicker, body: p.materialsDimBody },
              { kicker: p.materialsOrderKicker, body: p.materialsOrderBody },
            ].map((item) => (
              <div key={item.kicker}>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{item.kicker}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <LocaleCtaBand locale={locale} t={t} />
      </main>
      <LocaleFooter locale={locale} t={t} />
    </>
  )
}
