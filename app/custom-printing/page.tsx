import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const printingTypes = [
  {
    title: 'Retail Branded Bags',
    description:
      'Bags with your brand logo and product design for retail display and consumer-facing packaging.',
  },
  {
    title: 'Promotional Packaging',
    description:
      'Custom printed bags for promotional campaigns, seasonal packaging, and marketing activities.',
  },
  {
    title: 'Private Label Production',
    description:
      'Printed packaging produced under your brand for products sold through retail or wholesale channels.',
  },
  {
    title: 'Logo Carrier Bags',
    description:
      'Printed carry bags with brand identity for retail, food service, and event distribution.',
  },
  {
    title: 'Food Packaging with Print',
    description:
      'Printed bags that comply with food packaging requirements — suitable for branded food products.',
  },
  {
    title: 'Custom Format Printed Bags',
    description:
      'Printed bags in custom dimensions and formats, including euro hanger, bottom fold, and adhesive closures.',
  },
]

const process = [
  {
    step: '01',
    title: 'Inquiry',
    body: 'Send your bag format, dimensions, material, quantity, and print requirements. Include logo files or design concepts if available.',
  },
  {
    step: '02',
    title: 'Artwork Review',
    body: 'We review your print requirements and confirm technical specifications. We will advise on colour modes, print area, and file preparation.',
  },
  {
    step: '03',
    title: 'Proposal',
    body: 'You receive a production proposal including pricing, minimum order quantity, and production timeline.',
  },
  {
    step: '04',
    title: 'Production',
    body: 'Upon approval, production begins. We maintain communication during production and notify you at dispatch.',
  },
]

const brandingApplications = [
  'Bakery and confectionery brands',
  'Retail consumer goods producers',
  'Food manufacturers with branded product lines',
  'Companies requiring private label packaging',
  'Promotional and event packaging needs',
  'Export packaging with brand identity',
]

export default function CustomPrintingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-brand-graphite text-white py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  Custom Printing
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white text-balance">
                  Printed packaging with your brand identity
                </h1>
                <p className="mt-5 text-white/70 leading-relaxed">
                  We manufacture custom printed flexible packaging bags for retail, food,
                  promotional, and private label applications. Printed on polypropylene and
                  polyethylene materials in your required format and dimensions.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors text-center"
                  >
                    Discuss your packaging design
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white/30 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-white/10 transition-colors text-center"
                  >
                    Send print inquiry
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="/images/printed-bags.jpg"
                  alt="Custom printed packaging bags with brand logos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why printed packaging */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Why Printed Packaging
                </p>
                <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                  Packaging as a branding surface
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Printed packaging serves a functional and commercial purpose. Beyond protecting
                  the product, it communicates brand identity, product information, and differentiates
                  your goods at the point of sale or in distribution.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    'Brand identity on every unit shipped or sold',
                    'Product information and legal labelling',
                    'Professional appearance for retail and wholesale',
                    'Differentiation in competitive product categories',
                    'Consistency across production batches',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Branding applications
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {brandingApplications.map((app) => (
                    <div key={app} className="bg-secondary rounded-lg px-4 py-3 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of printed bags */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Bag Types
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                Types of printed bags we produce
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {printingTypes.map((type) => (
                <div key={type.title} className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-brand-graphite mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Process
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                From inquiry to printed packaging
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Our process is straightforward. Send your requirements and we handle the rest.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0 -translate-x-1/2" />
                  )}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-brand-graphite mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA form block */}
        <section className="py-20 px-4 md:px-8 bg-secondary border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Get Started
            </p>
            <h2 className="text-3xl font-bold text-brand-graphite text-balance">
              Ready to discuss your printed packaging?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Send us your bag dimensions, material preference, print design, and quantity. We will
              review and respond with a production proposal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors flex items-center gap-2"
              >
                Send print inquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products#printed"
                className="border border-border text-foreground px-6 py-3 rounded font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Browse printed bag types
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
