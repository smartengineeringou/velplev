import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LocaleHeader from '@/components/LocaleHeader'
import LocaleFooter from '@/components/LocaleFooter'
import LocaleCtaBand from '@/components/LocaleCtaBand'
import type { Locale, Translations } from '@/lib/translations'

const segmentImages: Record<string, string> = {
  bakery: '/images/bakery-packaging.jpg',
  food: '/images/food-packaging.jpg',
  retail: '/images/printed-bags.jpg',
  office: '/images/office-packaging.jpg',
}

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleIndustriesPage({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const ind = t.industries

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{ind.kicker}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">{ind.heading}</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{ind.body}</p>
          </div>
        </section>

        {/* Segments */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {ind.segments.map((seg, i) => (
              <div key={seg.id} id={seg.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start scroll-mt-20">
                <div className={`relative rounded-xl overflow-hidden shadow aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={segmentImages[seg.id]} alt={seg.title} fill className="object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl font-bold text-brand-graphite mb-3">{seg.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{seg.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{ind.packagingGoals}</p>
                      <ul className="flex flex-col gap-1.5">
                        {seg.goals.map((g) => (
                          <li key={g} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{ind.relevantProducts}</p>
                      <ul className="flex flex-col gap-1.5">
                        {seg.products.map((pr) => (
                          <li key={pr} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                            {pr}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`${prefix}/contact`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                    >
                      {ind.requestInquiry} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`${prefix}/products`}
                      className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {ind.browseProducts}
                    </Link>
                  </div>
                </div>
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
