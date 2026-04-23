import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'

const categories = [
  {
    id: 'food',
    title: 'Food Packaging',
    image: '/images/food-packaging.jpg',
    description:
      'Polypropylene (PP) and polyethylene (PE) bags suitable for direct food contact. Designed for dry food products, bulk goods, flour, sugar, confectionery, and other packaged food items.',
    applications: ['Flour and dry goods', 'Confectionery and sweets', 'Packaged food products', 'Retail food bags'],
    bagTypes: ['Flat bags', 'Bottom-fold bags', 'Bags with valve', 'Sealed bags'],
  },
  {
    id: 'bakery',
    title: 'Bakery & Confectionery',
    image: '/images/bakery-packaging.jpg',
    description:
      'Transparent and semi-transparent bags for fresh and packaged bakery products. Available with perforation, bottom fold, euro hanger, and adhesive tape closure options.',
    applications: ['Bread and bread rolls', 'Croissants and pastries', 'Cookies and biscuits', 'Chocolate and sweets'],
    bagTypes: ['Euro hanger bags', 'Perforated bags', 'Bottom-fold bags', 'Bags with adhesive tape'],
  },
  {
    id: 'consumer',
    title: 'Consumer Goods',
    image: '/images/gallery-2.jpg',
    description:
      'Retail-ready packaging bags for consumer products. Available plain or with custom printing. Suitable for hanging display, shelf packaging, and branded retail presentation.',
    applications: ['Retail products', 'Branded consumer goods', 'Promotional packs', 'Gift packaging'],
    bagTypes: ['Carrier bags', 'Euro hanger bags', 'Printed bags', 'Bags with holes'],
  },
  {
    id: 'office',
    title: 'Office & Print Packaging',
    image: '/images/office-packaging.jpg',
    description:
      'Protective transparent bags for books, stationery, notebooks, and printed materials. Clear polypropylene bags that display product while protecting from dust and moisture.',
    applications: ['Books and notebooks', 'Stationery sets', 'Printed materials', 'Office supply kits'],
    bagTypes: ['Flat transparent bags', 'Bags with euro hanger', 'Bags with adhesive tape', 'Custom sized bags'],
  },
  {
    id: 'printed',
    title: 'Branded / Printed Bags',
    image: '/images/printed-bags.jpg',
    description:
      'Custom printed flexible packaging bags with logo, product, or brand design. Printed on PP or PE material. Suitable for retail, promotional, and private label production.',
    applications: ['Retail branded packaging', 'Promotional bags', 'Private label production', 'Event and marketing packaging'],
    bagTypes: ['Printed PP bags', 'Printed PE bags', 'Branded carrier bags', 'Custom printed formats'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Custom',
    image: '/images/industrial-packaging.jpg',
    description:
      'Heavy-duty polyethylene bags and custom format packaging for industrial, commercial, and large volume applications. Custom dimensions and material thickness available.',
    applications: ['Industrial components', 'Bulk goods packaging', 'Commercial supply', 'Custom B2B requirements'],
    bagTypes: ['Heavy PE bags', 'Custom dimension bags', 'Large format bags', 'Bags with valve or closure'],
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page header */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Products
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-graphite text-balance">
              Packaging products overview
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
              We manufacture flexible packaging bags in polypropylene and polyethylene for a range
              of food, retail, industrial, and custom applications. All products are available in
              custom dimensions and formats.
            </p>
            {/* Jump links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-xs bg-white border border-border text-foreground px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category sections */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
          {categories.map((cat, index) => (
            <section key={cat.id} id={cat.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm bg-secondary">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-graphite mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>

                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Typical applications
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {cat.applications.map((app) => (
                          <li key={app} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-sm text-foreground">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Bag types
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {cat.bagTypes.map((type) => (
                          <li key={type} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-sm text-foreground">{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                  >
                    Request inquiry <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {index < categories.length - 1 && (
                <div className="mt-20 border-t border-border" />
              )}
            </section>
          ))}
        </div>

        {/* Materials note */}
        <section className="bg-secondary py-14 px-4 md:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Materials
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We work with polypropylene (PP) and polyethylene (PE) film materials, available in
                  various thicknesses and specifications depending on the application.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Custom dimensions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All bag formats are available in custom sizes. Provide your required dimensions and
                  we will confirm feasibility and pricing based on your specification.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Ordering
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ordering is inquiry-based. Contact us with your product type, dimensions, material,
                  and quantity. We will respond with a proposal and lead time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
