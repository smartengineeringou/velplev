import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  ArrowRight,
  Package,
  Printer,
  FlaskConical,
  Layers,
  Building2,
  ShoppingBag,
} from 'lucide-react'
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

const whyIcons = [Package, Printer, FlaskConical, Layers, Building2, ShoppingBag]

interface Props {
  locale: Locale
  t: Translations
}

export default function HomePageContent({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const h = t.home

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main>
        {/* Hero — full-bleed image with overlay text */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden">
          {/* Background photo */}
          <Image
            src="/images/manufacturing.jpg"
            alt="VELPLEV packaging production facility — flexible bag manufacturing machines"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-graphite/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite/90 via-brand-graphite/30 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24 pt-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
              {h.heroKicker}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance max-w-4xl">
              {h.heroHeading}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              {h.heroBody}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href={`${prefix}/contact`}
                className="bg-primary text-white px-7 py-3.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors text-center"
              >
                {h.requestQuote}
              </Link>
              <Link
                href={`${prefix}/products`}
                className="border border-white/30 text-white px-7 py-3.5 rounded font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-colors text-center flex items-center justify-center gap-2"
              >
                {h.exploreProducts} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust bullets row */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8">
              {h.trustBullets.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-white/70">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {h.productRangeKicker}
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                {h.productRangeHeading}
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">{h.productRangeBody}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {h.productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`${prefix}/products#${cat.id}`}
                  className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <Image
                      src={categoryImages[cat.id]}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-brand-graphite group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-brand-teal-light text-primary px-2 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                      {h.viewDetails} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Velplev */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {h.whyKicker}
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                {h.whyHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {h.whyItems.map((item, i) => {
                const Icon = whyIcons[i]
                return (
                  <div key={item.title} className="bg-white rounded-xl p-6 border border-border">
                    <div className="w-10 h-10 bg-brand-teal-light rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-brand-graphite mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  {h.industriesKicker}
                </p>
                <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                  {h.industriesHeading}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{h.industriesBody}</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {h.industries.map((ind) => (
                    <div key={ind} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-foreground">{ind}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`${prefix}/industries`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  {h.viewIndustrySolutions} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow aspect-[4/3]">
                <Image
                  src="/images/manufacturing.jpg"
                  alt="VELPLEV manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Printing highlight */}
        <section className="py-20 px-4 md:px-8 bg-brand-graphite text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow aspect-[4/3] order-2 lg:order-1">
                <Image
                  src="/images/printed-bags.jpg"
                  alt="Custom printed packaging bags"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  {h.printingKicker}
                </p>
                <h2 className="text-3xl font-bold text-white text-balance">{h.printingHeading}</h2>
                <p className="mt-4 text-white/70 leading-relaxed">{h.printingBody}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {h.printingPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${prefix}/custom-printing`}
                  className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                >
                  {h.discussDesign} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery preview */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  {h.galleryKicker}
                </p>
                <h2 className="text-3xl font-bold text-brand-graphite">{h.galleryHeading}</h2>
              </div>
              <Link
                href={`${prefix}/manufacturing`}
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                {h.viewManufacturing} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/gallery-1.jpg', alt: 'Transparent polypropylene packaging bags' },
                { src: '/images/gallery-2.jpg', alt: 'Custom printed branded packaging bags' },
                { src: '/images/bakery-packaging.jpg', alt: 'Bakery bags' },
                { src: '/images/about-factory.jpg', alt: 'VELPLEV production facility' },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-lg overflow-hidden bg-secondary"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocaleCtaBand locale={locale} t={t} />
      </main>
      <LocaleFooter locale={locale} t={t} />
    </>
  )
}
