import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'

const segments = [
  {
    id: 'bakery',
    title: 'Bakeries & Confectionery',
    image: '/images/bakery-packaging.jpg',
    description:
      'Bakeries and confectionery producers require hygienic, attractive packaging that protects freshness and supports display. We produce a range of transparent and printed bag formats suited to bakery production workflows.',
    goals: [
      'Protect freshness and prevent contamination',
      'Display product clearly to end customer',
      'Support retail and point-of-sale presentation',
      'Accommodate varying loaf and pastry sizes',
    ],
    products: [
      'Perforated transparent PP bags for bread',
      'Euro hanger bags for packaged pastries',
      'Bottom-fold bags for loaves and rolls',
      'Printed bags for branded bakery products',
      'Bags with adhesive tape closure',
    ],
  },
  {
    id: 'food',
    title: 'Food Manufacturers',
    image: '/images/food-packaging.jpg',
    description:
      'Food manufacturers sourcing packaging in volume need consistent quality, appropriate food-contact compliance, and reliable delivery. We supply both plain and printed packaging for dry food, confectionery, and processed food applications.',
    goals: [
      'Food-safe material compliance',
      'Consistent bag dimensions for production line compatibility',
      'Available in high volume repeat orders',
      'Options for both branded and plain packaging',
    ],
    products: [
      'PP and PE bags for direct food contact',
      'Bags with valves for flour and powder products',
      'Flat sealed bags for confectionery',
      'Custom printed packaging for branded lines',
      'Bags with euro hanger for retail display',
    ],
  },
  {
    id: 'retail',
    title: 'Retail & Promotional',
    image: '/images/gallery-2.jpg',
    description:
      'Retailers and brand owners need packaging that communicates brand identity and supports shelf presence. We manufacture printed bags and branded packaging for retail and promotional end uses.',
    goals: [
      'Strong on-shelf visual presence',
      'Brand consistency across packaging',
      'Suitable for retail display formats',
      'Promotional and seasonal packaging options',
    ],
    products: [
      'Custom printed PP bags with logo',
      'Carrier bags with branding',
      'Bags with euro hole for hanging display',
      'Private label production runs',
      'Consumer goods packaging bags',
    ],
  },
  {
    id: 'office',
    title: 'Office & Stationery',
    image: '/images/office-packaging.jpg',
    description:
      'Publishers, stationery producers, and office supply companies need clear, protective packaging that lets product show through while protecting from dust and handling damage during storage and transit.',
    goals: [
      'Transparent presentation of packaged product',
      'Protection from dust, moisture, and handling',
      'Suitable for stationery, books, and printed goods',
      'Clean professional appearance for B2B shipment',
    ],
    products: [
      'Clear PP flat bags for books and notebooks',
      'Bags with adhesive tape closure',
      'Custom sized bags for stationery kits',
      'Euro hanger bags for retail display',
      'Printed bags for branded stationery',
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Industries
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">
              Packaging for your industry
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              Different industries have different packaging requirements. We supply flexible
              packaging solutions matched to the specific needs of your sector — whether you are in
              food production, retail, or office supply.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {segments.map((seg) => (
                <a
                  key={seg.id}
                  href={`#${seg.id}`}
                  className="text-xs bg-white border border-border text-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  {seg.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Segment sections */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
          {segments.map((seg, index) => (
            <section key={seg.id} id={seg.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm bg-secondary">
                  <Image src={seg.image} alt={seg.title} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-graphite mb-3">{seg.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{seg.description}</p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Packaging goals
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {seg.goals.map((goal) => (
                          <li key={goal} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-sm text-foreground">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Relevant products
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {seg.products.map((product) => (
                          <li key={product} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-sm text-foreground">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                    >
                      Request inquiry <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                    >
                      Browse products
                    </Link>
                  </div>
                </div>
              </div>
              {index < segments.length - 1 && (
                <div className="mt-20 border-t border-border" />
              )}
            </section>
          ))}
        </div>

        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
