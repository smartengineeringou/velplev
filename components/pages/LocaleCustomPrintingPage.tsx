import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import LocaleHeader from '@/components/LocaleHeader'
import LocaleFooter from '@/components/LocaleFooter'
import type { Locale, Translations } from '@/lib/translations'

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleCustomPrintingPage({ locale, t }: Props) {
  const prefix = locale === 'en' ? '' : `/${locale}`
  const cp = t.customPrinting

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{cp.kicker}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">{cp.heading}</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{cp.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`${prefix}/contact`} className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors">
                {cp.discussDesign}
              </Link>
              <Link href={`${prefix}/contact`} className="border border-border text-foreground px-6 py-3 rounded font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors">
                {cp.sendInquiry}
              </Link>
            </div>
          </div>
        </section>

        {/* Why printed packaging */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{cp.whyKicker}</p>
              <h2 className="text-2xl font-bold text-brand-graphite text-balance mb-4">{cp.whyHeading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{cp.whyBody}</p>
              <ul className="flex flex-col gap-3">
                {cp.whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{cp.brandingApplicationsHeading}</p>
                <div className="flex flex-wrap gap-2">
                  {cp.brandingApplications.map((app) => (
                    <span key={app} className="text-xs bg-brand-teal-light text-primary px-2.5 py-1 rounded-full font-medium">{app}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow aspect-[4/3]">
              <Image src="/images/printed-bags.jpg" alt="Custom printed packaging bags" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Printing types */}
        <section className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{cp.bagTypesKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-8">{cp.bagTypesHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cp.printingTypes.map((pt) => (
                <div key={pt.title} className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-brand-graphite mb-2">{pt.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{cp.processKicker}</p>
            <h2 className="text-2xl font-bold text-brand-graphite mb-3">{cp.processHeading}</h2>
            <p className="text-muted-foreground mb-10 max-w-xl">{cp.processBody}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cp.process.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < cp.process.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-4 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold text-brand-graphite mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA block */}
        <section className="py-16 px-4 md:px-8 bg-brand-graphite text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{cp.ctaKicker}</p>
              <h2 className="text-3xl font-bold text-white text-balance mb-4">{cp.ctaHeading}</h2>
              <p className="text-white/70 leading-relaxed">{cp.ctaBody}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`${prefix}/contact`} className="bg-primary text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors text-center flex items-center justify-center gap-2">
                {cp.sendPrintInquiry} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`${prefix}/products#printed`} className="border border-white/30 text-white px-6 py-3 rounded font-semibold text-sm hover:border-white/60 transition-colors text-center">
                {cp.browsePrintedBags}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LocaleFooter locale={locale} t={t} />
    </>
  )
}
