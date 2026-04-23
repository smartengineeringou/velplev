'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import LocaleHeader from '@/components/LocaleHeader'
import LocaleFooter from '@/components/LocaleFooter'
import type { Locale, Translations } from '@/lib/translations'

interface Props {
  locale: Locale
  t: Translations
}

export default function LocaleContactPage({ locale, t }: Props) {
  const c = t.contact
  const [submitted, setSubmitted] = useState(false)
  const [printRequired, setPrintRequired] = useState<string>('no')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <LocaleHeader locale={locale} t={t} />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              {c.kicker}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">
              {c.heading}
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{c.body}</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Contact info sidebar */}
              <div className="lg:col-span-1">
                <h2 className="text-lg font-bold text-brand-graphite mb-6">{c.contactInfoHeading}</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.address}</p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                        K. Ulmaņa gatve 2<br />Rīga, Latvia, LV-1004
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.phone}</p>
                      {c.phoneValues.map((num) => (
                        <a key={num} href={`tel:${num.replace(/[^+\d]/g, '')}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-0.5">
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.email}</p>
                      <a href="mailto:velplev@inbox.lv"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">
                        velplev@inbox.lv
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.pickupHours}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{c.pickupHoursValue}</p>
                    </div>
                  </div>
                </div>

                {/* Quotation note */}
                <div className="mt-10 bg-secondary rounded-xl p-5 border border-border">
                  <h3 className="text-sm font-semibold text-brand-graphite mb-2">{c.quotationHeading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.quotationBody}</p>
                  <ul className="flex flex-col gap-1.5">
                    {c.quotationItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ mini */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-brand-graphite mb-4">{c.faqHeading}</h3>
                  <div className="flex flex-col gap-4">
                    {c.faqs.map((faq) => (
                      <div key={faq.q}>
                        <p className="text-sm font-medium text-foreground">{faq.q}</p>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-brand-teal-light border border-primary/20 rounded-xl p-10 text-center">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-brand-graphite mb-2">{c.successHeading}</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">{c.successBody}</p>
                    <button onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-primary hover:underline">
                      {c.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          {c.nameLabel} <span className="text-destructive">*</span>
                        </label>
                        <input type="text" required placeholder={c.namePlaceholder}
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.companyLabel}</label>
                        <input type="text" placeholder={c.companyPlaceholder}
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          {c.emailLabel} <span className="text-destructive">*</span>
                        </label>
                        <input type="email" required placeholder={c.emailPlaceholder}
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.phoneLabel}</label>
                        <input type="tel" placeholder={c.phonePlaceholder}
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.productTypeLabel}</label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">{c.productTypePlaceholder}</option>
                          {c.productTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.industryLabel}</label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">{c.industryPlaceholder}</option>
                          {c.industryOptions.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.materialLabel}</label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">{c.materialPlaceholder}</option>
                          {c.materialOptions.map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{c.dimensionsLabel}</label>
                        <input type="text" placeholder={c.dimensionsPlaceholder}
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{c.printingLabel}</label>
                      <div className="flex gap-4">
                        {[{ val: 'yes', label: c.printingYes }, { val: 'no', label: c.printingNo }].map(({ val, label }) => (
                          <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="printing" value={val}
                              checked={printRequired === val} onChange={() => setPrintRequired(val)}
                              className="w-4 h-4 accent-primary" />
                            <span className="text-sm text-foreground">{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{c.messageLabel}</label>
                      <textarea rows={5} placeholder={c.messagePlaceholder}
                        className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" />
                    </div>
                    <div className="pt-1">
                      <button type="submit"
                        className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors w-full sm:w-auto">
                        {c.submitButton}
                      </button>
                      <p className="mt-3 text-xs text-muted-foreground">{c.submitNote}</p>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <LocaleFooter locale={locale} t={t} />
    </>
  )
}
