import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import LocaleHeader from '@/components/LocaleHeader'
import LocaleFooter from '@/components/LocaleFooter'
import LocaleCtaBand from '@/components/LocaleCtaBand'
import type { Locale, Translations } from '@/lib/translations'

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleManufacturingPage({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const m = t.manufacturing

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main className="pt-16">
        {/* About / intro */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{m.kicker}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">{m.heading}</h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">{m.body1}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{m.body2}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {m.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow aspect-[4/3]">
              <Image src="/images/about-factory.jpg" alt="VELPLEV manufacturing facility" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{m.capabilitiesKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-8">{m.capabilitiesHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {m.capabilities.map((cap) => (
                <div key={cap.title} className="bg-secondary rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-brand-graphite mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{m.materialsKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-8">{m.materialsHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {m.materials.map((mat) => (
                <div key={mat.name} className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-brand-graphite mb-2">{mat.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mat.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{m.commonUses}</p>
                  <ul className="flex flex-col gap-1">
                    {mat.uses.map((u) => (
                      <li key={u} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bag formats */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{m.bagFormatsKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-3">{m.bagFormatsHeading}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">{m.bagFormatsBody}</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {m.bagFormats.map((fmt) => (
                <span key={fmt} className="bg-secondary border border-border text-foreground text-sm px-4 py-2 rounded-full">{fmt}</span>
              ))}
            </div>
            <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors">
              {m.requestCustomFormat} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{m.galleryKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-8">{m.galleryHeading}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/manufacturing.jpg', alt: 'Manufacturing' },
                { src: '/images/about-factory.jpg', alt: 'Factory' },
                { src: '/images/gallery-1.jpg', alt: 'Product gallery' },
                { src: '/images/hero-packaging.jpg', alt: 'Packaging range' },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden bg-white">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
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
