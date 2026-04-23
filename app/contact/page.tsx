'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const productTypes = [
  'Food packaging bags',
  'Bakery & confectionery bags',
  'Consumer goods / retail bags',
  'Office & print packaging',
  'Branded / printed bags',
  'Industrial / custom packaging',
  'Other / unsure',
]

const industryOptions = [
  'Bakery',
  'Confectionery',
  'Food manufacturing',
  'Retail / supermarket',
  'Consumer goods',
  'Office supplies',
  'Publishing / print',
  'Industrial / commercial',
  'Other',
]

const materialOptions = [
  'Polypropylene (PP)',
  'Polyethylene (PE)',
  'Not sure — advise me',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [printRequired, setPrintRequired] = useState<string>('no')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">
              Request a quote or send an inquiry
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Fill in the form with your packaging requirements. The more detail you provide, the
              faster we can prepare an accurate proposal. We aim to respond within one business day.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Contact info */}
              <div className="lg:col-span-1">
                <h2 className="text-lg font-bold text-brand-graphite mb-6">Contact information</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                        {'K. Ulmaņa gatve 2'}<br />{'Rīga, Latvia, LV-1004'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <a href="tel:+37167614566" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block">+371 67-614-566</a>
                      <a href="tel:+37126953255" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+371 26-953-255</a>
                      <a href="tel:+37129574883" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+371 29-574-883</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:velplev@inbox.lv"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block"
                      >
                        velplev@inbox.lv
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-teal-light rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Order pickup hours</p>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                        Mon–Fri: 08:00 – 15:30
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quotation note */}
                <div className="mt-10 bg-secondary rounded-xl p-5 border border-border">
                  <h3 className="text-sm font-semibold text-brand-graphite mb-2">
                    For accurate quotation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Please provide the following in your message for a faster, more accurate
                    response:
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      'Bag dimensions (width × height)',
                      'Material preference (PP or PE)',
                      'Application / product to be packed',
                      'Print requirements (yes/no)',
                      'Estimated quantity per order',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ mini */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-brand-graphite mb-4">Common questions</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        q: 'Is there a minimum order quantity?',
                        a: 'Minimum order quantities depend on the product type and format. Contact us to discuss your requirements.',
                      },
                      {
                        q: 'Can you produce custom dimensions?',
                        a: 'Yes. All products are available in custom dimensions. Provide your required size and we will confirm feasibility.',
                      },
                      {
                        q: 'What is the typical lead time?',
                        a: 'Lead times vary based on order size and complexity. We will provide a specific timeline with your quotation.',
                      },
                    ].map((faq) => (
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
                    <h2 className="text-xl font-bold text-brand-graphite mb-2">
                      Inquiry received
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                      Thank you for your inquiry. We will review your requirements and get back to
                      you within one business day with a proposal or follow-up questions.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-primary hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Full name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="+371 ..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Product type
                        </label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">Select a category</option>
                          {productTypes.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Industry
                        </label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">Select your industry</option>
                          {industryOptions.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Material
                        </label>
                        <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
                          <option value="">Select material</option>
                          {materialOptions.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Dimensions
                        </label>
                        <input
                          type="text"
                          className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="e.g. 200 × 300 mm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Printing required?
                      </label>
                      <div className="flex gap-4">
                        {['yes', 'no'].map((val) => (
                          <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="printing"
                              value={val}
                              checked={printRequired === val}
                              onChange={() => setPrintRequired(val)}
                              className="w-4 h-4 accent-primary"
                            />
                            <span className="text-sm text-foreground capitalize">{val}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Message / requirements
                      </label>
                      <textarea
                        rows={5}
                        className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="Describe your packaging requirements, product to be packed, quantity, and any other relevant details..."
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors w-full sm:w-auto"
                      >
                        Send inquiry
                      </button>
                      <p className="mt-3 text-xs text-muted-foreground">
                        We will respond within one business day. All inquiries are handled directly
                        by our sales team.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
