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
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'

const productCategories = [
  {
    id: 'food',
    title: 'Food Packaging',
    description:
      'Polypropylene and polyethylene bags for direct food contact. Suitable for dry goods, flour, confectionery, and packaged food products.',
    image: '/images/food-packaging.jpg',
    href: '/products#food',
    tags: ['PP bags', 'PE bags', 'Food-safe'],
  },
  {
    id: 'bakery',
    title: 'Bakery & Confectionery',
    description:
      'Transparent and printed bags for bread, pastries, cookies, and sweets. Euro hanger bags, bottom-fold bags, perforated bags, and more.',
    image: '/images/bakery-packaging.jpg',
    href: '/products#bakery',
    tags: ['Euro hanger', 'Perforated', 'Bottom fold'],
  },
  {
    id: 'consumer',
    title: 'Consumer Goods',
    description:
      'Retail-ready bags for packaged consumer products. Suitable for branded goods, promotional packs, and retail display applications.',
    image: '/images/gallery-2.jpg',
    href: '/products#consumer',
    tags: ['Retail', 'Branded', 'Promotional'],
  },
  {
    id: 'office',
    title: 'Office & Print Packaging',
    description:
      'Protective transparent bags for books, stationery, printed materials, and office supply products.',
    image: '/images/office-packaging.jpg',
    href: '/products#office',
    tags: ['Books', 'Stationery', 'Transparent'],
  },
  {
    id: 'printed',
    title: 'Branded / Printed Bags',
    description:
      'Custom printed bags with logos and branding for retail, promotional, and private label packaging applications.',
    image: '/images/printed-bags.jpg',
    href: '/products#printed',
    tags: ['Logo print', 'Private label', 'Custom design'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Custom',
    description:
      'Heavy-duty polyethylene bags and custom format packaging for industrial, commercial, and bulk applications.',
    image: '/images/industrial-packaging.jpg',
    href: '/products#industrial',
    tags: ['Heavy duty', 'Custom size', 'Bulk orders'],
  },
]

const whyVelplev = [
  {
    icon: Package,
    title: 'Custom Sizes & Formats',
    body: 'We produce bags in custom dimensions, formats, and configurations — including bottom folds, euro hangers, perforations, valves, and adhesive tape closures.',
  },
  {
    icon: Printer,
    title: 'Printed Packaging',
    body: 'Custom logo and design printing on polypropylene and polyethylene bags for branded, promotional, and private label packaging needs.',
  },
  {
    icon: FlaskConical,
    title: 'PP & PE Materials',
    body: 'Production in polypropylene (PP) and polyethylene (PE) materials for both food and non-food packaging applications.',
  },
  {
    icon: Layers,
    title: 'Multiple Industries Served',
    body: 'Packaging solutions for food producers, bakeries, confectionery, retail, office supply, printing industry, and industrial buyers.',
  },
  {
    icon: Building2,
    title: 'Manufacturing Experience',
    body: 'Practical know-how from real production orders. We understand packaging requirements and can advise on formats, materials, and feasibility.',
  },
  {
    icon: ShoppingBag,
    title: 'B2B Order Handling',
    body: 'Inquiry-driven process with direct communication. We respond to RFQs with concrete proposals, pricing, and production timelines.',
  },
]

const about = {
  kicker: 'About VELPLEV',
  heading: 'Producing flexible packaging since 1995',
  intro1:
    'A high level of production technology — based on imported equipment and the professionalism of our employees — allows us to consistently deliver excellent packaging quality.',
  intro2:
    'We manufacture a wide range of packaging from BOPP, CPP, LDPE, HDPE, PA/PE, PET/PE, and Mono PP films, as well as paper and foil.',
  foodHeading: 'Food packaging',
  foodItems: [
    'Vegetables and fruits',
    'Bulk and dry products',
    'Confectionery',
    'Bakery products',
    'Fish and meat products',
    'Frozen products',
    'Coffee and tea',
    'Printed bags',
  ],
  nonFoodHeading: 'Non-food packaging',
  nonFoodItems: [
    'Pet food and pet products',
    'Soil and construction materials',
    'Medical products',
    'Stationery and office supplies',
  ],
  typesHeading: 'Types of packaging produced',
  typesItems: [
    'BOPP, CPP, LDPE, HDPE bags',
    'Vacuum bags',
    'Zip-lock bags',
    'Bags with euro slot (euro hole)',
    'Bags with adhesive tape',
    'DOY PACK (stand-up pouches)',
  ],
  closing:
    'Every inquiry is carefully evaluated and matched with an optimal solution based on our technical capabilities and accumulated experience. Our core principles are an individual approach to each client, on-time order fulfilment, and guaranteed product quality. A close-knit team — where each person is responsible for their part of the process — ensures attentive customer service, prompt resolution of any issues, and strict quality control. We welcome new partnerships and are confident our cooperation will be mutually beneficial and productive.',
}

const trustBullets = [
  'Custom manufacturing to specification',
  'Printed & branded packaging',
  'Food and industrial applications',
  'Fast inquiry response',
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  Latvian Packaging Manufacturer
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-graphite leading-tight text-balance">
                  Flexible Packaging for Food and Industry
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  We produce polypropylene and polyethylene packaging bags for food, retail,
                  industrial, and branded applications — including printed and custom-made bags to
                  your specification.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors text-center"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/products"
                    className="border border-border text-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-white hover:border-primary/40 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Explore Products <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trustBullets.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/hero-packaging.jpg"
                  alt="VELPLEV flexible packaging products — polypropylene and polyethylene bags"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Product Range
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                Packaging solutions by application
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                We manufacture packaging across a range of formats and applications. Select a
                category to learn more.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <Image
                      src={cat.image}
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
                      View details <ArrowRight className="w-4 h-4" />
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
                Why VELPLEV
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                What we bring to your packaging supply
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyVelplev.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 bg-brand-teal-light rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-brand-graphite mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About company */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                {about.kicker}
              </p>
              <h2 className="text-3xl font-bold text-brand-graphite text-balance">
                {about.heading}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{about.intro1}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{about.intro2}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {about.foodHeading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {about.foodItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {about.nonFoodHeading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {about.nonFoodItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {about.typesHeading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {about.typesItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 text-muted-foreground leading-relaxed max-w-4xl">
              {about.closing}
            </p>
          </div>
        </section>

        {/* Custom Printing highlight */}
        <section className="py-20 px-4 md:px-8 bg-brand-graphite text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow aspect-[4/3] order-2 lg:order-1">
                <Image
                  src="/images/printed-bags.jpg"
                  alt="Custom printed packaging bags with brand logos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Custom Printing
                </p>
                <h2 className="text-3xl font-bold text-white text-balance">
                  Printed packaging with your brand
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  We produce custom printed bags carrying your logo, brand design, or product
                  information. Suitable for retail packaging, promotional bags, and private label
                  production runs.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    'Logo and brand printing on PP and PE bags',
                    'Promotional and retail-ready packaging',
                    'Private label production runs',
                    'Custom artwork and print specifications',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/custom-printing"
                  className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                >
                  Discuss your packaging design <ArrowRight className="w-4 h-4" />
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
                  Gallery
                </p>
                <h2 className="text-3xl font-bold text-brand-graphite">Product gallery</h2>
              </div>
              <Link
                href="/manufacturing"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View manufacturing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/images/gallery-1.jpg', alt: 'Transparent polypropylene packaging bags' },
                { src: '/images/gallery-2.jpg', alt: 'Custom printed branded packaging bags' },
                { src: '/images/bakery-packaging.jpg', alt: 'Bakery bags for bread and pastries' },
                { src: '/images/about-factory.jpg', alt: 'VELPLEV packaging production facility' },
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

        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
