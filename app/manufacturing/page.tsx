import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'

const capabilities = [
  {
    title: 'Custom production',
    body: 'All products are manufactured to customer specification. We do not sell from a fixed catalogue — each order is produced to your required dimensions, format, and material.',
  },
  {
    title: 'Printed packaging',
    body: 'We have printing capability for logo and design printing on PP and PE bag formats. Suitable for branding, product labelling, and private label packaging.',
  },
  {
    title: 'Food packaging applications',
    body: 'We produce bags suitable for direct food contact in polypropylene and polyethylene. Applicable for bakery, confectionery, dry foods, and general food packaging.',
  },
  {
    title: 'Multiple bag formats',
    body: 'Production across a wide range of formats: flat bags, euro hanger bags, bottom-fold bags, bags with valves, perforated bags, bags with adhesive tape, and carrier bags.',
  },
  {
    title: 'Material options',
    body: 'We work with polypropylene (PP) and polyethylene (PE) materials in various thicknesses and grades. Material selection is based on application requirements.',
  },
  {
    title: 'B2B order process',
    body: 'Our order process is inquiry-based. Submit your requirements and we will provide a production proposal, pricing, and estimated delivery timeline.',
  },
]

const materials = [
  {
    name: 'Polypropylene (PP)',
    description:
      'Stiff, clear, lightweight material suitable for food and non-food packaging. High clarity for product display. Commonly used for bakery, stationery, and retail bags.',
    uses: ['Bakery bags', 'Stationery packaging', 'Retail display bags', 'Confectionery bags'],
  },
  {
    name: 'Polyethylene (PE)',
    description:
      'Flexible, durable material in various densities (LDPE, HDPE). Suitable for heavy-duty packaging, carrier bags, and industrial applications. Available food-grade.',
    uses: ['Carrier bags', 'Industrial bags', 'Heavy-duty packaging', 'Bulk goods bags'],
  },
]

const bagFormats = [
  'Flat bags (sealed on 3 sides)',
  'Euro hanger bags (with punch hole)',
  'Bottom-fold bags',
  'Bags with valve',
  'Perforated bags',
  'Bags with adhesive tape closure',
  'Bags with holes (ventilation)',
  'Carrier bags with handles',
  'Custom-format bags',
]

const galleryImages = [
  { src: '/images/hero-packaging.jpg', alt: 'Flexible packaging product range overview' },
  { src: '/images/about-factory.jpg', alt: 'VELPLEV manufacturing facility' },
  { src: '/images/gallery-1.jpg', alt: 'Transparent polypropylene bags' },
  { src: '/images/bakery-packaging.jpg', alt: 'Bakery packaging bags' },
  { src: '/images/printed-bags.jpg', alt: 'Custom printed bags' },
  { src: '/images/industrial-packaging.jpg', alt: 'Industrial packaging bags' },
]

export default function ManufacturingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* About Velplev */}
        <section className="bg-secondary py-20 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  About VELPLEV
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">
                  Manufacturing flexible packaging since day one
                </h1>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  VELPLEV is a Latvian manufacturer of flexible packaging bags and film-based
                  packaging products. We produce polypropylene and polyethylene bags for food,
                  retail, industrial, and custom branded applications.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our approach is practical and production-focused. We work directly with buyers,
                  procurement managers, and business owners to deliver packaging that fits their
                  specific requirements — not generic stock products.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {[
                    'Based in Latvia, supplying B2B clients',
                    'Custom production to specification',
                    'PP and PE material capabilities',
                    'Food and non-food packaging',
                    'Printed and plain packaging options',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow">
                <Image
                  src="/images/about-factory.jpg"
                  alt="VELPLEV packaging manufacturing facility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Capabilities
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                What our production covers
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <div key={cap.title} className="border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-brand-graphite mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Materials
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                Materials we work with
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {materials.map((mat) => (
                <div key={mat.name} className="bg-white rounded-xl p-8 border border-border">
                  <h3 className="text-lg font-bold text-brand-graphite mb-3">{mat.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {mat.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Common uses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mat.uses.map((use) => (
                        <span
                          key={use}
                          className="text-xs bg-brand-teal-light text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bag Formats */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Bag Formats
                </p>
                <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                  Bag types and configurations
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We produce a wide range of bag formats. If your required format is not listed
                  here, contact us — we handle custom configurations and can advise on what is
                  feasible for your application.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {bagFormats.map((fmt) => (
                    <div key={fmt} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-foreground">{fmt}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                >
                  Request a custom format <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Various bag formats and configurations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-4 md:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Gallery
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite">Production & products</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-sm"
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

        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
