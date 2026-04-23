export type Locale = 'en' | 'lv' | 'ru'

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  lv: 'LV',
  ru: 'RU',
}

export const localePrefixes: Record<Locale, string> = {
  en: '',
  lv: '/lv',
  ru: '/ru',
}

// ---------------------------------------------------------------------------
// Shared / nav
// ---------------------------------------------------------------------------
export interface NavTranslations {
  home: string
  products: string
  productsChildren: {
    food: string
    bakery: string
    consumer: string
    office: string
    printed: string
    industrial: string
  }
  industries: string
  industriesChildren: {
    bakery: string
    food: string
    retail: string
    office: string
  }
  customPrinting: string
  manufacturing: string
  contact: string
  requestQuote: string
}

export interface FooterTranslations {
  tagline: string
  b2bNote: string
  products: string
  company: string
  contactTitle: string
  productLinks: { label: string; href: string }[]
  companyLinks: { label: string; href: string }[]
  copyright: string
  location: string
}

export interface CtaBandTranslations {
  heading: string
  body: string
  requestQuote: string
  contactSales: string
}

// ---------------------------------------------------------------------------
// Page-level translations
// ---------------------------------------------------------------------------
export interface HomeTranslations {
  heroKicker: string
  heroHeading: string
  heroBody: string
  requestQuote: string
  exploreProducts: string
  trustBullets: string[]
  productRangeKicker: string
  productRangeHeading: string
  productRangeBody: string
  viewDetails: string
  whyKicker: string
  whyHeading: string
  industriesKicker: string
  industriesHeading: string
  industriesBody: string
  viewIndustrySolutions: string
  printingKicker: string
  printingHeading: string
  printingBody: string
  printingPoints: string[]
  discussDesign: string
  galleryKicker: string
  galleryHeading: string
  viewManufacturing: string
  productCategories: {
    id: string
    title: string
    description: string
    tags: string[]
  }[]
  whyItems: {
    title: string
    body: string
  }[]
  industries: string[]
}

export interface ProductsTranslations {
  kicker: string
  heading: string
  body: string
  typicalApplications: string
  bagTypes: string
  requestInquiry: string
  materialsKicker: string
  materialsDimKicker: string
  materialsOrderKicker: string
  materialsBody: string
  materialsDimBody: string
  materialsOrderBody: string
  categories: {
    id: string
    title: string
    description: string
    applications: string[]
    bagTypes: string[]
  }[]
}

export interface IndustriesTranslations {
  kicker: string
  heading: string
  body: string
  packagingGoals: string
  relevantProducts: string
  requestInquiry: string
  browseProducts: string
  segments: {
    id: string
    title: string
    description: string
    goals: string[]
    products: string[]
  }[]
}

export interface CustomPrintingTranslations {
  kicker: string
  heading: string
  body: string
  discussDesign: string
  sendInquiry: string
  whyKicker: string
  whyHeading: string
  whyBody: string
  whyPoints: string[]
  brandingApplicationsHeading: string
  brandingApplications: string[]
  bagTypesKicker: string
  bagTypesHeading: string
  processKicker: string
  processHeading: string
  processBody: string
  ctaKicker: string
  ctaHeading: string
  ctaBody: string
  sendPrintInquiry: string
  browsePrintedBags: string
  printingTypes: { title: string; description: string }[]
  process: { step: string; title: string; body: string }[]
}

export interface ManufacturingTranslations {
  kicker: string
  heading: string
  body1: string
  body2: string
  points: string[]
  capabilitiesKicker: string
  capabilitiesHeading: string
  materialsKicker: string
  materialsHeading: string
  commonUses: string
  bagFormatsKicker: string
  bagFormatsHeading: string
  bagFormatsBody: string
  requestCustomFormat: string
  galleryKicker: string
  galleryHeading: string
  capabilities: { title: string; body: string }[]
  materials: { name: string; description: string; uses: string[] }[]
  bagFormats: string[]
}

export interface ContactTranslations {
  kicker: string
  heading: string
  body: string
  contactInfoHeading: string
  address: string
  addressValue: string
  phone: string
  phoneValues: string[]
  email: string
  emailValue: string
  pickupHours: string
  pickupHoursValue: string
  quotationHeading: string
  quotationBody: string
  quotationItems: string[]
  faqHeading: string
  faqs: { q: string; a: string }[]
  nameLabel: string
  namePlaceholder: string
  companyLabel: string
  companyPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  productTypeLabel: string
  productTypePlaceholder: string
  industryLabel: string
  industryPlaceholder: string
  materialLabel: string
  materialPlaceholder: string
  dimensionsLabel: string
  dimensionsPlaceholder: string
  printingLabel: string
  printingYes: string
  printingNo: string
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  submitNote: string
  successHeading: string
  successBody: string
  sendAnother: string
  productTypes: string[]
  industryOptions: string[]
  materialOptions: string[]
}

// ---------------------------------------------------------------------------
// Full translation bundle
// ---------------------------------------------------------------------------
export interface Translations {
  nav: NavTranslations
  footer: FooterTranslations
  cta: CtaBandTranslations
  home: HomeTranslations
  products: ProductsTranslations
  industries: IndustriesTranslations
  customPrinting: CustomPrintingTranslations
  manufacturing: ManufacturingTranslations
  contact: ContactTranslations
}

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------
const en: Translations = {
  nav: {
    home: 'Home',
    products: 'Products',
    productsChildren: {
      food: 'Food Packaging',
      bakery: 'Bakery & Confectionery',
      consumer: 'Consumer Goods',
      office: 'Office & Print',
      printed: 'Printed / Branded Bags',
      industrial: 'Industrial & Custom',
    },
    industries: 'Industries',
    industriesChildren: {
      bakery: 'Bakeries & Confectionery',
      food: 'Food Manufacturers',
      retail: 'Retail & Promotional',
      office: 'Office & Stationery',
    },
    customPrinting: 'Custom Printing',
    manufacturing: 'Manufacturing',
    contact: 'Contact',
    requestQuote: 'Request a Quote',
  },
  footer: {
    tagline:
      'Manufacturer of flexible packaging bags and film-based packaging for food, retail, industrial, and custom branded applications.',
    b2bNote: 'B2B orders & custom production',
    products: 'Products',
    company: 'Company',
    contactTitle: 'Contact',
    productLinks: [
      { label: 'Food Packaging', href: '/products#food' },
      { label: 'Bakery & Confectionery', href: '/products#bakery' },
      { label: 'Consumer Goods', href: '/products#consumer' },
      { label: 'Printed Bags', href: '/products#printed' },
      { label: 'Industrial Packaging', href: '/products#industrial' },
    ],
    companyLinks: [
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Industries', href: '/industries' },
      { label: 'Custom Printing', href: '/custom-printing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    copyright: 'All rights reserved.',
    location: 'Flexible packaging manufacturer — Latvia',
  },
  cta: {
    heading: 'Need custom packaging for your product?',
    body: 'Send your dimensions, material preference, print requirements, and application — we will get back to you with a suitable solution.',
    requestQuote: 'Request a Quote',
    contactSales: 'Contact Sales',
  },
  home: {
    heroKicker: 'Latvian Packaging Manufacturer',
    heroHeading: 'Flexible Packaging for Food and Industry',
    heroBody:
      'We produce polypropylene and polyethylene packaging bags for food, retail, industrial, and branded applications — including printed and custom-made bags to your specification.',
    requestQuote: 'Request a Quote',
    exploreProducts: 'Explore Products',
    trustBullets: [
      'Custom manufacturing to specification',
      'Printed & branded packaging',
      'Food and industrial applications',
      'Fast inquiry response',
    ],
    productRangeKicker: 'Product Range',
    productRangeHeading: 'Packaging solutions by application',
    productRangeBody:
      'We manufacture packaging across a range of formats and applications. Select a category to learn more.',
    viewDetails: 'View details',
    whyKicker: 'Why VELPLEV',
    whyHeading: 'What we bring to your packaging supply',
    industriesKicker: 'Industries',
    industriesHeading: 'Packaging for multiple business sectors',
    industriesBody:
      'We supply packaging to businesses across food production, retail, printing, and industrial sectors. Our production is configured for custom formats and repeat B2B orders.',
    viewIndustrySolutions: 'View industry solutions',
    printingKicker: 'Custom Printing',
    printingHeading: 'Printed packaging with your brand',
    printingBody:
      'We produce custom printed bags carrying your logo, brand design, or product information. Suitable for retail packaging, promotional bags, and private label production runs.',
    printingPoints: [
      'Logo and brand printing on PP and PE bags',
      'Promotional and retail-ready packaging',
      'Private label production runs',
      'Custom artwork and print specifications',
    ],
    discussDesign: 'Discuss your packaging design',
    galleryKicker: 'Gallery',
    galleryHeading: 'Product gallery',
    viewManufacturing: 'View manufacturing',
    productCategories: [
      {
        id: 'food',
        title: 'Food Packaging',
        description:
          'Polypropylene and polyethylene bags for direct food contact. Suitable for dry goods, flour, confectionery, and packaged food products.',
        tags: ['PP bags', 'PE bags', 'Food-safe'],
      },
      {
        id: 'bakery',
        title: 'Bakery & Confectionery',
        description:
          'Transparent and printed bags for bread, pastries, cookies, and sweets. Euro hanger bags, bottom-fold bags, perforated bags, and more.',
        tags: ['Euro hanger', 'Perforated', 'Bottom fold'],
      },
      {
        id: 'consumer',
        title: 'Consumer Goods',
        description:
          'Retail-ready bags for packaged consumer products. Suitable for branded goods, promotional packs, and retail display applications.',
        tags: ['Retail', 'Branded', 'Promotional'],
      },
      {
        id: 'office',
        title: 'Office & Print Packaging',
        description:
          'Protective transparent bags for books, stationery, printed materials, and office supply products.',
        tags: ['Books', 'Stationery', 'Transparent'],
      },
      {
        id: 'printed',
        title: 'Branded / Printed Bags',
        description:
          'Custom printed bags with logos and branding for retail, promotional, and private label packaging applications.',
        tags: ['Logo print', 'Private label', 'Custom design'],
      },
      {
        id: 'industrial',
        title: 'Industrial & Custom',
        description:
          'Heavy-duty polyethylene bags and custom format packaging for industrial, commercial, and bulk applications.',
        tags: ['Heavy duty', 'Custom size', 'Bulk orders'],
      },
    ],
    whyItems: [
      {
        title: 'Custom Sizes & Formats',
        body: 'We produce bags in custom dimensions, formats, and configurations — including bottom folds, euro hangers, perforations, valves, and adhesive tape closures.',
      },
      {
        title: 'Printed Packaging',
        body: 'Custom logo and design printing on polypropylene and polyethylene bags for branded, promotional, and private label packaging needs.',
      },
      {
        title: 'PP & PE Materials',
        body: 'Production in polypropylene (PP) and polyethylene (PE) materials for both food and non-food packaging applications.',
      },
      {
        title: 'Multiple Industries Served',
        body: 'Packaging solutions for food producers, bakeries, confectionery, retail, office supply, printing industry, and industrial buyers.',
      },
      {
        title: 'Manufacturing Experience',
        body: 'Practical know-how from real production orders. We understand packaging requirements and can advise on formats, materials, and feasibility.',
      },
      {
        title: 'B2B Order Handling',
        body: 'Inquiry-driven process with direct communication. We respond to RFQs with concrete proposals, pricing, and production timelines.',
      },
    ],
    industries: [
      'Bakeries',
      'Confectionery producers',
      'Food manufacturers',
      'Retail & supermarkets',
      'Consumer goods brands',
      'Office supply companies',
      'Publishing & print',
      'Promotional packaging',
    ],
  },
  products: {
    kicker: 'Products',
    heading: 'Packaging products overview',
    body: 'We manufacture flexible packaging bags in polypropylene and polyethylene for a range of food, retail, industrial, and custom applications. All products are available in custom dimensions and formats.',
    typicalApplications: 'Typical applications',
    bagTypes: 'Bag types',
    requestInquiry: 'Request inquiry',
    materialsKicker: 'Materials',
    materialsDimKicker: 'Custom dimensions',
    materialsOrderKicker: 'Ordering',
    materialsBody:
      'We work with polypropylene (PP) and polyethylene (PE) film materials, available in various thicknesses and specifications depending on the application.',
    materialsDimBody:
      'All bag formats are available in custom sizes. Provide your required dimensions and we will confirm feasibility and pricing based on your specification.',
    materialsOrderBody:
      'Ordering is inquiry-based. Contact us with your product type, dimensions, material, and quantity. We will respond with a proposal and lead time.',
    categories: [
      {
        id: 'food',
        title: 'Food Packaging',
        description:
          'Polypropylene (PP) and polyethylene (PE) bags suitable for direct food contact. Designed for dry food products, bulk goods, flour, sugar, confectionery, and other packaged food items.',
        applications: ['Flour and dry goods', 'Confectionery and sweets', 'Packaged food products', 'Retail food bags'],
        bagTypes: ['Flat bags', 'Bottom-fold bags', 'Bags with valve', 'Sealed bags'],
      },
      {
        id: 'bakery',
        title: 'Bakery & Confectionery',
        description:
          'Transparent and semi-transparent bags for fresh and packaged bakery products. Available with perforation, bottom fold, euro hanger, and adhesive tape closure options.',
        applications: ['Bread and bread rolls', 'Croissants and pastries', 'Cookies and biscuits', 'Chocolate and sweets'],
        bagTypes: ['Euro hanger bags', 'Perforated bags', 'Bottom-fold bags', 'Bags with adhesive tape'],
      },
      {
        id: 'consumer',
        title: 'Consumer Goods',
        description:
          'Retail-ready packaging bags for consumer products. Available plain or with custom printing. Suitable for hanging display, shelf packaging, and branded retail presentation.',
        applications: ['Retail products', 'Branded consumer goods', 'Promotional packs', 'Gift packaging'],
        bagTypes: ['Carrier bags', 'Euro hanger bags', 'Printed bags', 'Bags with holes'],
      },
      {
        id: 'office',
        title: 'Office & Print Packaging',
        description:
          'Protective transparent bags for books, stationery, notebooks, and printed materials. Clear polypropylene bags that display product while protecting from dust and moisture.',
        applications: ['Books and notebooks', 'Stationery sets', 'Printed materials', 'Office supply kits'],
        bagTypes: ['Flat transparent bags', 'Bags with euro hanger', 'Bags with adhesive tape', 'Custom sized bags'],
      },
      {
        id: 'printed',
        title: 'Branded / Printed Bags',
        description:
          'Custom printed flexible packaging bags with logo, product, or brand design. Printed on PP or PE material. Suitable for retail, promotional, and private label production.',
        applications: ['Retail branded packaging', 'Promotional bags', 'Private label production', 'Event and marketing packaging'],
        bagTypes: ['Printed PP bags', 'Printed PE bags', 'Branded carrier bags', 'Custom printed formats'],
      },
      {
        id: 'industrial',
        title: 'Industrial & Custom',
        description:
          'Heavy-duty polyethylene bags and custom format packaging for industrial, commercial, and large volume applications. Custom dimensions and material thickness available.',
        applications: ['Industrial components', 'Bulk goods packaging', 'Commercial supply', 'Custom B2B requirements'],
        bagTypes: ['Heavy PE bags', 'Custom dimension bags', 'Large format bags', 'Bags with valve or closure'],
      },
    ],
  },
  industries: {
    kicker: 'Industries',
    heading: 'Packaging for your industry',
    body: 'Different industries have different packaging requirements. We supply flexible packaging solutions matched to the specific needs of your sector — whether you are in food production, retail, or office supply.',
    packagingGoals: 'Packaging goals',
    relevantProducts: 'Relevant products',
    requestInquiry: 'Request inquiry',
    browseProducts: 'Browse products',
    segments: [
      {
        id: 'bakery',
        title: 'Bakeries & Confectionery',
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
    ],
  },
  customPrinting: {
    kicker: 'Custom Printing',
    heading: 'Printed packaging with your brand identity',
    body: 'We manufacture custom printed flexible packaging bags for retail, food, promotional, and private label applications. Printed on polypropylene and polyethylene materials in your required format and dimensions.',
    discussDesign: 'Discuss your packaging design',
    sendInquiry: 'Send print inquiry',
    whyKicker: 'Why Printed Packaging',
    whyHeading: 'Packaging as a branding surface',
    whyBody:
      'Printed packaging serves a functional and commercial purpose. Beyond protecting the product, it communicates brand identity, product information, and differentiates your goods at the point of sale or in distribution.',
    whyPoints: [
      'Brand identity on every unit shipped or sold',
      'Product information and legal labelling',
      'Professional appearance for retail and wholesale',
      'Differentiation in competitive product categories',
      'Consistency across production batches',
    ],
    brandingApplicationsHeading: 'Branding applications',
    brandingApplications: [
      'Bakery and confectionery brands',
      'Retail consumer goods producers',
      'Food manufacturers with branded product lines',
      'Companies requiring private label packaging',
      'Promotional and event packaging needs',
      'Export packaging with brand identity',
    ],
    bagTypesKicker: 'Bag Types',
    bagTypesHeading: 'Types of printed bags we produce',
    processKicker: 'Process',
    processHeading: 'From inquiry to printed packaging',
    processBody: 'Our process is straightforward. Send your requirements and we handle the rest.',
    ctaKicker: 'Get Started',
    ctaHeading: 'Ready to discuss your printed packaging?',
    ctaBody:
      'Send us your bag dimensions, material preference, print design, and quantity. We will review and respond with a production proposal.',
    sendPrintInquiry: 'Send print inquiry',
    browsePrintedBags: 'Browse printed bag types',
    printingTypes: [
      { title: 'Retail Branded Bags', description: 'Bags with your brand logo and product design for retail display and consumer-facing packaging.' },
      { title: 'Promotional Packaging', description: 'Custom printed bags for promotional campaigns, seasonal packaging, and marketing activities.' },
      { title: 'Private Label Production', description: 'Printed packaging produced under your brand for products sold through retail or wholesale channels.' },
      { title: 'Logo Carrier Bags', description: 'Printed carry bags with brand identity for retail, food service, and event distribution.' },
      { title: 'Food Packaging with Print', description: 'Printed bags that comply with food packaging requirements — suitable for branded food products.' },
      { title: 'Custom Format Printed Bags', description: 'Printed bags in custom dimensions and formats, including euro hanger, bottom fold, and adhesive closures.' },
    ],
    process: [
      { step: '01', title: 'Inquiry', body: 'Send your bag format, dimensions, material, quantity, and print requirements. Include logo files or design concepts if available.' },
      { step: '02', title: 'Artwork Review', body: 'We review your print requirements and confirm technical specifications. We will advise on colour modes, print area, and file preparation.' },
      { step: '03', title: 'Proposal', body: 'You receive a production proposal including pricing, minimum order quantity, and production timeline.' },
      { step: '04', title: 'Production', body: 'Upon approval, production begins. We maintain communication during production and notify you at dispatch.' },
    ],
  },
  manufacturing: {
    kicker: 'About VELPLEV',
    heading: 'Manufacturing flexible packaging since day one',
    body1:
      'VELPLEV is a Latvian manufacturer of flexible packaging bags and film-based packaging products. We produce polypropylene and polyethylene bags for food, retail, industrial, and custom branded applications.',
    body2:
      'Our approach is practical and production-focused. We work directly with buyers, procurement managers, and business owners to deliver packaging that fits their specific requirements — not generic stock products.',
    points: [
      'Based in Latvia, supplying B2B clients',
      'Custom production to specification',
      'PP and PE material capabilities',
      'Food and non-food packaging',
      'Printed and plain packaging options',
    ],
    capabilitiesKicker: 'Capabilities',
    capabilitiesHeading: 'What our production covers',
    materialsKicker: 'Materials',
    materialsHeading: 'Materials we work with',
    commonUses: 'Common uses',
    bagFormatsKicker: 'Bag Formats',
    bagFormatsHeading: 'Bag types and configurations',
    bagFormatsBody:
      'We produce a wide range of bag formats. If your required format is not listed here, contact us — we handle custom configurations and can advise on what is feasible for your application.',
    requestCustomFormat: 'Request a custom format',
    galleryKicker: 'Gallery',
    galleryHeading: 'Production & products',
    capabilities: [
      { title: 'Custom production', body: 'All products are manufactured to customer specification. We do not sell from a fixed catalogue — each order is produced to your required dimensions, format, and material.' },
      { title: 'Printed packaging', body: 'We have printing capability for logo and design printing on PP and PE bag formats. Suitable for branding, product labelling, and private label packaging.' },
      { title: 'Food packaging applications', body: 'We produce bags suitable for direct food contact in polypropylene and polyethylene. Applicable for bakery, confectionery, dry foods, and general food packaging.' },
      { title: 'Multiple bag formats', body: 'Production across a wide range of formats: flat bags, euro hanger bags, bottom-fold bags, bags with valves, perforated bags, bags with adhesive tape, and carrier bags.' },
      { title: 'Material options', body: 'We work with polypropylene (PP) and polyethylene (PE) materials in various thicknesses and grades. Material selection is based on application requirements.' },
      { title: 'B2B order process', body: 'Our order process is inquiry-based. Submit your requirements and we will provide a production proposal, pricing, and estimated delivery timeline.' },
    ],
    materials: [
      {
        name: 'Polypropylene (PP)',
        description: 'Stiff, clear, lightweight material suitable for food and non-food packaging. High clarity for product display. Commonly used for bakery, stationery, and retail bags.',
        uses: ['Bakery bags', 'Stationery packaging', 'Retail display bags', 'Confectionery bags'],
      },
      {
        name: 'Polyethylene (PE)',
        description: 'Flexible, durable material in various densities (LDPE, HDPE). Suitable for heavy-duty packaging, carrier bags, and industrial applications. Available food-grade.',
        uses: ['Carrier bags', 'Industrial bags', 'Heavy-duty packaging', 'Bulk goods bags'],
      },
    ],
    bagFormats: [
      'Flat bags (sealed on 3 sides)',
      'Euro hanger bags (with punch hole)',
      'Bottom-fold bags',
      'Bags with valve',
      'Perforated bags',
      'Bags with adhesive tape closure',
      'Bags with holes (ventilation)',
      'Carrier bags with handles',
      'Custom-format bags',
    ],
  },
  contact: {
    kicker: 'Contact',
    heading: 'Request a quote or send an inquiry',
    body: 'Fill in the form with your packaging requirements. The more detail you provide, the faster we can prepare an accurate proposal. We aim to respond within one business day.',
    contactInfoHeading: 'Contact information',
    address: 'Address',
    addressValue: 'K. Ulmaņa gatve 2, Rīga, Latvia, LV-1004',
    phone: 'Phone',
    phoneValues: ['+371 67-614-566', '+371 26-953-255', '+371 29-574-883'],
    email: 'Email',
    emailValue: 'velplev@inbox.lv',
    pickupHours: 'Order pickup hours',
    pickupHoursValue: 'Mon–Fri: 08:00 – 15:30',
    quotationHeading: 'For accurate quotation',
    quotationBody: 'Please provide the following in your message for a faster, more accurate response:',
    quotationItems: [
      'Bag dimensions (width × height)',
      'Material preference (PP or PE)',
      'Application / product to be packed',
      'Print requirements (yes/no)',
      'Estimated quantity per order',
    ],
    faqHeading: 'Common questions',
    faqs: [
      { q: 'Is there a minimum order quantity?', a: 'Minimum order quantities depend on the product type and format. Contact us to discuss your requirements.' },
      { q: 'Can you produce custom dimensions?', a: 'Yes. All products are available in custom dimensions. Provide your required size and we will confirm feasibility.' },
      { q: 'What is the typical lead time?', a: 'Lead times vary based on order size and complexity. We will provide a specific timeline with your quotation.' },
    ],
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    companyLabel: 'Company',
    companyPlaceholder: 'Company name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+371 ...',
    productTypeLabel: 'Product type',
    productTypePlaceholder: 'Select a category',
    industryLabel: 'Industry',
    industryPlaceholder: 'Select your industry',
    materialLabel: 'Material',
    materialPlaceholder: 'Select material',
    dimensionsLabel: 'Dimensions',
    dimensionsPlaceholder: 'e.g. 200 × 300 mm',
    printingLabel: 'Printing required?',
    printingYes: 'Yes',
    printingNo: 'No',
    messageLabel: 'Message / requirements',
    messagePlaceholder: 'Describe your packaging requirements, product to be packed, quantity, and any other relevant details...',
    submitButton: 'Send inquiry',
    submitNote: 'We will respond within one business day. All inquiries are handled directly by our sales team.',
    successHeading: 'Inquiry received',
    successBody: 'Thank you for your inquiry. We will review your requirements and get back to you within one business day with a proposal or follow-up questions.',
    sendAnother: 'Send another inquiry',
    productTypes: [
      'Food packaging bags',
      'Bakery & confectionery bags',
      'Consumer goods / retail bags',
      'Office & print packaging',
      'Branded / printed bags',
      'Industrial / custom packaging',
      'Other / unsure',
    ],
    industryOptions: [
      'Bakery', 'Confectionery', 'Food manufacturing', 'Retail / supermarket',
      'Consumer goods', 'Office supplies', 'Publishing / print', 'Industrial / commercial', 'Other',
    ],
    materialOptions: ['Polypropylene (PP)', 'Polyethylene (PE)', 'Not sure — advise me'],
  },
}

// ---------------------------------------------------------------------------
// LATVIAN
// ---------------------------------------------------------------------------
const lv: Translations = {
  nav: {
    home: 'Sākums',
    products: 'Produkti',
    productsChildren: {
      food: 'Pārtikas iepakojums',
      bakery: 'Maizītes un konditorejas izstrādājumi',
      consumer: 'Patēriņa preces',
      office: 'Biroja un drukāšanas iepakojums',
      printed: 'Drukāti / zīmola maisi',
      industrial: 'Rūpnieciskais un pielāgotais',
    },
    industries: 'Nozares',
    industriesChildren: {
      bakery: 'Maizes cepi un konditorejas ražotāji',
      food: 'Pārtikas ražotāji',
      retail: 'Tirdzniecība un reklāma',
      office: 'Biroja un kancelejas preces',
    },
    customPrinting: 'Pielāgota druka',
    manufacturing: 'Ražošana',
    contact: 'Kontakti',
    requestQuote: 'Pieprasīt piedāvājumu',
  },
  footer: {
    tagline:
      'Elastīgo iepakojuma maisu un plēves iepakojuma ražotājs pārtikas, mazumtirdzniecības, rūpnieciskām un zīmola lietojumprogrammām.',
    b2bNote: 'B2B pasūtījumi un pielāgota ražošana',
    products: 'Produkti',
    company: 'Uzņēmums',
    contactTitle: 'Kontakti',
    productLinks: [
      { label: 'Pārtikas iepakojums', href: '/lv/products#food' },
      { label: 'Maizītes un konditorejas izstrādājumi', href: '/lv/products#bakery' },
      { label: 'Patēriņa preces', href: '/lv/products#consumer' },
      { label: 'Drukāti maisi', href: '/lv/products#printed' },
      { label: 'Rūpnieciskais iepakojums', href: '/lv/products#industrial' },
    ],
    companyLinks: [
      { label: 'Ražošana', href: '/lv/manufacturing' },
      { label: 'Nozares', href: '/lv/industries' },
      { label: 'Pielāgota druka', href: '/lv/custom-printing' },
      { label: 'Kontakti', href: '/lv/contact' },
      { label: 'Pieprasīt piedāvājumu', href: '/lv/contact' },
    ],
    copyright: 'Visas tiesības aizsargātas.',
    location: 'Elastīgā iepakojuma ražotājs — Latvija',
  },
  cta: {
    heading: 'Vai jums nepieciešams pielāgots iepakojums?',
    body: 'Nosūtiet savus izmērus, materiāla preferences, drukāšanas prasības un lietojumu — mēs sazināsimies ar piemērotu risinājumu.',
    requestQuote: 'Pieprasīt piedāvājumu',
    contactSales: 'Sazināties ar pārdošanas nodaļu',
  },
  home: {
    heroKicker: 'Latvijas iepakojuma ražotājs',
    heroHeading: 'Elastīgais iepakojums pārtikai un rūpniecībai',
    heroBody:
      'Mēs ražojam polipropilēna un polietilēna iepakojuma maisus pārtikai, mazumtirdzniecībai, rūpniecībai un zīmola lietojumiem — tostarp drukātus un pēc pasūtījuma izgatavotus maisus pēc jūsu specifikācijas.',
    requestQuote: 'Pieprasīt piedāvājumu',
    exploreProducts: 'Aplūkot produktus',
    trustBullets: [
      'Pielāgota ražošana pēc specifikācijas',
      'Drukāts un zīmola iepakojums',
      'Pārtikas un rūpnieciskās lietojumprogrammas',
      'Ātra atbilde uz pieprasījumiem',
    ],
    productRangeKicker: 'Produktu klāsts',
    productRangeHeading: 'Iepakojuma risinājumi pēc lietojuma',
    productRangeBody:
      'Mēs ražojam iepakojumu dažādos formātos un lietojumiem. Izvēlieties kategoriju, lai uzzinātu vairāk.',
    viewDetails: 'Skatīt detaļas',
    whyKicker: 'Kāpēc VELPLEV',
    whyHeading: 'Ko mēs piedāvājam jūsu iepakojuma piegādei',
    industriesKicker: 'Nozares',
    industriesHeading: 'Iepakojums vairākām uzņēmējdarbības nozarēm',
    industriesBody:
      'Mēs piegādājam iepakojumu uzņēmumiem pārtikas ražošanas, mazumtirdzniecības, poligrāfijas un rūpniecības nozarēs. Mūsu ražošana ir konfigurēta pielāgotiem formātiem un atkārtotiem B2B pasūtījumiem.',
    viewIndustrySolutions: 'Skatīt nozares risinājumus',
    printingKicker: 'Pielāgota druka',
    printingHeading: 'Drukāts iepakojums ar jūsu zīmolu',
    printingBody:
      'Mēs ražojam pielāgotus drukātus maisus ar jūsu logotipu, zīmola dizainu vai produkta informāciju. Piemērots mazumtirdzniecības iepakojumam, reklāmas maisiem un privātās etiķetes ražošanas sērijām.',
    printingPoints: [
      'Logotipa un zīmola druka uz PP un PE maisiem',
      'Reklāmas un mazumtirdzniecībai gatavs iepakojums',
      'Privātās etiķetes ražošanas sērijas',
      'Pielāgots mākslinieciskais noformējums un drukas specifikācijas',
    ],
    discussDesign: 'Apspriest jūsu iepakojuma dizainu',
    galleryKicker: 'Galerija',
    galleryHeading: 'Produktu galerija',
    viewManufacturing: 'Skatīt ražošanu',
    productCategories: [
      {
        id: 'food',
        title: 'Pārtikas iepakojums',
        description: 'Polipropilēna un polietilēna maisi tiešam pārtikas kontaktam. Piemēroti sausajām precēm, miltiem, konditorejas izstrādājumiem un fasētiem pārtikas produktiem.',
        tags: ['PP maisi', 'PE maisi', 'Droši pārtikai'],
      },
      {
        id: 'bakery',
        title: 'Maizītes un konditorejas izstrādājumi',
        description: 'Caurspīdīgi un drukāti maisi maizei, konditorejas izstrādājumiem, cepumiem un saldumiem. Euro pakarināšanas maisi, maisi ar apakšas locījumu, perforēti maisi un citi.',
        tags: ['Euro pakars', 'Perforēti', 'Apakšas locījums'],
      },
      {
        id: 'consumer',
        title: 'Patēriņa preces',
        description: 'Mazumtirdzniecībai gatavi maisi fasētiem patēriņa produktiem. Piemēroti zīmola precēm, reklāmas iepakojumiem un mazumtirdzniecības displeja lietojumiem.',
        tags: ['Mazumtirdzniecība', 'Zīmols', 'Reklāma'],
      },
      {
        id: 'office',
        title: 'Biroja un drukāšanas iepakojums',
        description: 'Aizsargājoši caurspīdīgi maisi grāmatām, kancelejas precēm, drukātiem materiāliem un biroja piederumiem.',
        tags: ['Grāmatas', 'Kancelejas preces', 'Caurspīdīgs'],
      },
      {
        id: 'printed',
        title: 'Zīmola / drukātie maisi',
        description: 'Pielāgoti drukāti maisi ar logotipiem un zīmolu mazumtirdzniecībai, reklāmai un privātās etiķetes iepakojuma lietojumiem.',
        tags: ['Logotipa druka', 'Privātā etiķete', 'Pielāgots dizains'],
      },
      {
        id: 'industrial',
        title: 'Rūpnieciskais un pielāgotais',
        description: 'Smagās slodzes polietilēna maisi un pielāgota formāta iepakojums rūpnieciskām, komerciālām un liela apjoma lietojumprogrammām.',
        tags: ['Smagā slodze', 'Pielāgots izmērs', 'Lielapjoma pasūtījumi'],
      },
    ],
    whyItems: [
      { title: 'Pielāgoti izmēri un formāti', body: 'Mēs ražojam maisus pielāgotās dimensijās, formātos un konfigurācijās — tostarp apakšas locījumus, euro pakārnītes, perforāciju, vārstus un pašlīmējošās lentas aizdares.' },
      { title: 'Drukāts iepakojums', body: 'Pielāgota logotipa un dizaina druka uz polipropilēna un polietilēna maisiem zīmola, reklāmas un privātās etiķetes iepakojuma vajadzībām.' },
      { title: 'PP un PE materiāli', body: 'Ražošana polipropilēna (PP) un polietilēna (PE) materiālos gan pārtikas, gan ar pārtiku nesaistītam iepakojumam.' },
      { title: 'Vairākas apkalpotās nozares', body: 'Iepakojuma risinājumi pārtikas ražotājiem, maizes cepiem, konditorejas ražotājiem, mazumtirdzniecībai, biroja piederumiem, poligrāfijas nozarei un rūpnieciskajiem pircējiem.' },
      { title: 'Ražošanas pieredze', body: 'Praktiskas zināšanas no reāliem ražošanas pasūtījumiem. Mēs saprotam iepakojuma prasības un varam konsultēt par formātiem, materiāliem un iespējamību.' },
      { title: 'B2B pasūtījumu apstrāde', body: 'Pieprasījumu virzīts process ar tiešu saziņu. Mēs atbildam uz piedāvājumu pieprasījumiem ar konkrētiem priekšlikumiem, cenām un ražošanas termiņiem.' },
    ],
    industries: [
      'Maizes cepumi',
      'Konditorejas ražotāji',
      'Pārtikas ražotāji',
      'Mazumtirdzniecība un lielveikali',
      'Patēriņa preču zīmoli',
      'Biroja piederumu uzņēmumi',
      'Izdevniecība un druka',
      'Reklāmas iepakojums',
    ],
  },
  products: {
    kicker: 'Produkti',
    heading: 'Iepakojuma produktu pārskats',
    body: 'Mēs ražojam elastīgos iepakojuma maisus polipropilēnā un polietilēnā dažādiem pārtikas, mazumtirdzniecības, rūpnieciskiem un pielāgotiem lietojumiem. Visi produkti ir pieejami pielāgotās dimensijās un formātos.',
    typicalApplications: 'Tipiskie lietojumi',
    bagTypes: 'Maisu veidi',
    requestInquiry: 'Pieprasīt piedāvājumu',
    materialsKicker: 'Materiāli',
    materialsDimKicker: 'Pielāgoti izmēri',
    materialsOrderKicker: 'Pasūtīšana',
    materialsBody: 'Mēs strādājam ar polipropilēna (PP) un polietilēna (PE) plēves materiāliem, kas pieejami dažādos biezumos un specifikācijās atkarībā no lietojuma.',
    materialsDimBody: 'Visi maisu formāti ir pieejami pielāgotā izmērā. Norādiet nepieciešamās dimensijas un mēs apstiprināsim iespējamību un cenas atbilstoši jūsu specifikācijai.',
    materialsOrderBody: 'Pasūtīšana notiek uz pieprasījuma pamata. Sazinieties ar mums, norādot produkta veidu, dimensijas, materiālu un daudzumu. Mēs atbildēsim ar priekšlikumu un piegādes termiņu.',
    categories: [
      { id: 'food', title: 'Pārtikas iepakojums', description: 'Polipropilēna (PP) un polietilēna (PE) maisi, kas piemēroti tiešam pārtikas kontaktam. Paredzēti sausiem pārtikas produktiem, beramkravam, miltiem, cukuram, konditorejas izstrādājumiem un citiem fasētiem pārtikas produktiem.', applications: ['Milti un sausās preces', 'Konditorejas izstrādājumi un saldumi', 'Fasēti pārtikas produkti', 'Mazumtirdzniecības pārtikas maisi'], bagTypes: ['Plakanie maisi', 'Maisi ar apakšas locījumu', 'Maisi ar vārstu', 'Noslēgtie maisi'] },
      { id: 'bakery', title: 'Maizītes un konditorejas izstrādājumi', description: 'Caurspīdīgi un daļēji caurspīdīgi maisi svaigiem un fasētiem maizes izstrādājumiem. Pieejami ar perforāciju, apakšas locījumu, euro pakara un pašlīmējošās lentas aizdares iespējām.', applications: ['Maize un maizes ruļļi', 'Kruasāni un konditorejas izstrādājumi', 'Cepumi un biskvīti', 'Šokolāde un saldumi'], bagTypes: ['Euro pakara maisi', 'Perforēti maisi', 'Maisi ar apakšas locījumu', 'Maisi ar pašlīmējošo lenti'] },
      { id: 'consumer', title: 'Patēriņa preces', description: 'Mazumtirdzniecībai gatavi iepakojuma maisi patēriņa produktiem. Pieejami bez drukas vai ar pielāgotu druku. Piemēroti pakāršanai, plauktu iepakošanai un zīmola mazumtirdzniecības prezentācijai.', applications: ['Mazumtirdzniecības produkti', 'Zīmola patēriņa preces', 'Reklāmas iepakojumi', 'Dāvanu iepakojums'], bagTypes: ['Somu maisi', 'Euro pakara maisi', 'Drukātie maisi', 'Maisi ar caurumiem'] },
      { id: 'office', title: 'Biroja un drukāšanas iepakojums', description: 'Aizsargājoši caurspīdīgi maisi grāmatām, kancelejas precēm, blociņiem un drukātiem materiāliem. Dzidri polipropilēna maisi, kas demonstrē produktu, vienlaikus aizsargājot no putekļiem un mitruma.', applications: ['Grāmatas un blociņi', 'Kancelejas priekšmetu komplekti', 'Drukātie materiāli', 'Biroja piederumu komplekti'], bagTypes: ['Plakanie caurspīdīgie maisi', 'Maisi ar euro pakaru', 'Maisi ar pašlīmējošo lenti', 'Pielāgota izmēra maisi'] },
      { id: 'printed', title: 'Zīmola / drukātie maisi', description: 'Pielāgoti drukāti elastīgā iepakojuma maisi ar logotipu, produkta vai zīmola dizainu. Drukāti uz PP vai PE materiāla. Piemēroti mazumtirdzniecībai, reklāmai un privātās etiķetes ražošanai.', applications: ['Mazumtirdzniecības zīmola iepakojums', 'Reklāmas maisi', 'Privātās etiķetes ražošana', 'Pasākumu un mārketinga iepakojums'], bagTypes: ['Drukātie PP maisi', 'Drukātie PE maisi', 'Zīmola somu maisi', 'Pielāgoti drukātie formāti'] },
      { id: 'industrial', title: 'Rūpnieciskais un pielāgotais', description: 'Smagās slodzes polietilēna maisi un pielāgota formāta iepakojums rūpnieciskiem, komerciāliem un liela apjoma lietojumiem. Pieejamas pielāgotas dimensijas un materiāla biezums.', applications: ['Rūpnieciskās detaļas', 'Beramkravu iepakojums', 'Komerciāla piegāde', 'Pielāgotas B2B prasības'], bagTypes: ['Smagās slodzes PE maisi', 'Pielāgotu dimensiju maisi', 'Liela formāta maisi', 'Maisi ar vārstu vai aizdari'] },
    ],
  },
  industries: {
    kicker: 'Nozares',
    heading: 'Iepakojums jūsu nozarei',
    body: 'Dažādām nozarēm ir dažādas iepakojuma prasības. Mēs piegādājam elastīgā iepakojuma risinājumus, kas atbilst jūsu nozares specifiskajām vajadzībām — neatkarīgi no tā, vai darbojaties pārtikas ražošanā, mazumtirdzniecībā vai biroja piederumu jomā.',
    packagingGoals: 'Iepakojuma mērķi',
    relevantProducts: 'Saistītie produkti',
    requestInquiry: 'Pieprasīt piedāvājumu',
    browseProducts: 'Pārlūkot produktus',
    segments: [
      { id: 'bakery', title: 'Maizes cepumi un konditorejas ražotāji', description: 'Maizes cepumiem un konditorejas ražotājiem nepieciešams higiēnisks, pievilcīgs iepakojums, kas aizsargā svaigumu un atbalsta demonstrēšanu. Mēs ražojam dažādus caurspīdīgu un drukātu maisu formātus, kas piemēroti maizes cepumu ražošanas darba plūsmām.', goals: ['Aizsargāt svaigumu un novērst piesārņošanu', 'Skaidri demonstrēt produktu gala patērētājam', 'Atbalstīt mazumtirdzniecības un tirdzniecības vietas prezentāciju', 'Piemēroties dažādiem maizes klaipu un konditorejas izmēriem'], products: ['Perforēti caurspīdīgi PP maisi maizei', 'Euro pakara maisi fasētiem konditorejas izstrādājumiem', 'Maisi ar apakšas locījumu klaipiem un ruļļiem', 'Drukāti maisi zīmola maizes produktiem', 'Maisi ar pašlīmējošās lentas aizdari'] },
      { id: 'food', title: 'Pārtikas ražotāji', description: 'Pārtikas ražotājiem, kas iepērk iepakojumu lielos apjomos, nepieciešama konsekventā kvalitāte, atbilstoša atbilstība pārtikas kontaktam un uzticama piegāde. Mēs piegādājam gan vienkāršu, gan drukātu iepakojumu sausai pārtikai, konditorejas izstrādājumiem un pārstrādātas pārtikas lietojumiem.', goals: ['Pārtikai drošu materiālu atbilstība', 'Konsekventas maisu dimensijas ražošanas līnijas saderībai', 'Pieejams liela apjoma atkārtotiem pasūtījumiem', 'Iespējas gan zīmola, gan vienkāršam iepakojumam'], products: ['PP un PE maisi tiešam pārtikas kontaktam', 'Maisi ar vārstiem miltu un pulverveida produktiem', 'Plakanie noslēgtie maisi konditorejas izstrādājumiem', 'Pielāgots drukāts iepakojums zīmola līnijām', 'Maisi ar euro pakaru mazumtirdzniecības displeja vajadzībām'] },
      { id: 'retail', title: 'Mazumtirdzniecība un reklāma', description: 'Mazumtirgotājiem un zīmolu īpašniekiem nepieciešams iepakojums, kas komunicē zīmola identitāti un atbalsta plauktu klātbūtni. Mēs ražojam drukātus maisus un zīmola iepakojumu mazumtirdzniecības un reklāmas nolūkiem.', goals: ['Spēcīga vizuāla klātbūtne plauktos', 'Zīmola konsekvence visā iepakojumā', 'Piemērots mazumtirdzniecības displeja formātiem', 'Reklāmas un sezonāla iepakojuma iespējas'], products: ['Pielāgoti drukāti PP maisi ar logotipu', 'Somu maisi ar zīmolu', 'Maisi ar euro caurumu pakāršanai displejā', 'Privātās etiķetes ražošanas sērijas', 'Patēriņa preču iepakojuma maisi'] },
      { id: 'office', title: 'Biroja un kancelejas preces', description: 'Izdevniecībām, kancelejas preču ražotājiem un biroja piederumu uzņēmumiem nepieciešams dzidrs, aizsargājošs iepakojums, kas ļauj redzēt produktu, vienlaikus aizsargājot no putekļiem un bojājumiem uzglabāšanas un transportēšanas laikā.', goals: ['Caurspīdīga fasēta produkta prezentācija', 'Aizsardzība no putekļiem, mitruma un mehāniskiem bojājumiem', 'Piemērots kancelejas precēm, grāmatām un drukātajām precēm', 'Tīra profesionāla izskats B2B sūtījumiem'], products: ['Dzidri PP plakanie maisi grāmatām un blociņiem', 'Maisi ar pašlīmējošās lentas aizdari', 'Pielāgota izmēra maisi kancelejas komplektiem', 'Euro pakara maisi mazumtirdzniecības displejam', 'Drukātie maisi zīmola kancelejas precēm'] },
    ],
  },
  customPrinting: {
    kicker: 'Pielāgota druka',
    heading: 'Drukāts iepakojums ar jūsu zīmola identitāti',
    body: 'Mēs ražojam pielāgotus drukātus elastīgā iepakojuma maisus mazumtirdzniecībai, pārtikai, reklāmai un privātās etiķetes lietojumiem. Drukāti uz polipropilēna un polietilēna materiāliem jūsu nepieciešamajā formātā un dimensijās.',
    discussDesign: 'Apspriest jūsu iepakojuma dizainu',
    sendInquiry: 'Nosūtīt drukas pieprasījumu',
    whyKicker: 'Kāpēc drukāts iepakojums',
    whyHeading: 'Iepakojums kā zīmola virsma',
    whyBody: 'Drukāts iepakojums kalpo funkcionālam un komerciālam mērķim. Papildus produkta aizsardzībai tas komunicē zīmola identitāti, produkta informāciju un diferenciē jūsu preces pārdošanas vietā vai izplatīšanā.',
    whyPoints: [
      'Zīmola identitāte uz katras nosūtītās vai pārdotās vienības',
      'Produkta informācija un juridiskā marķēšana',
      'Profesionāls izskats mazumtirdzniecībai un vairumtirdzniecībai',
      'Diferenciācija konkurētspējīgās produktu kategorijās',
      'Konsekvence dažādās ražošanas partijās',
    ],
    brandingApplicationsHeading: 'Zīmola lietojumi',
    brandingApplications: [
      'Maizes cepumu un konditorejas zīmoli',
      'Mazumtirdzniecības patēriņa preču ražotāji',
      'Pārtikas ražotāji ar zīmola produktu līnijām',
      'Uzņēmumi, kuriem nepieciešams privātās etiķetes iepakojums',
      'Reklāmas un pasākumu iepakojuma vajadzības',
      'Eksporta iepakojums ar zīmola identitāti',
    ],
    bagTypesKicker: 'Maisu veidi',
    bagTypesHeading: 'Mūsu ražoto drukāto maisu veidi',
    processKicker: 'Process',
    processHeading: 'No pieprasījuma līdz drukātajam iepakojumam',
    processBody: 'Mūsu process ir vienkāršs. Nosūtiet savas prasības un mēs visu pārējo paveicam.',
    ctaKicker: 'Sākt darbu',
    ctaHeading: 'Gatavs apspriest savu drukāto iepakojumu?',
    ctaBody: 'Nosūtiet mums maisa dimensijas, materiāla preferences, drukas dizainu un daudzumu. Mēs izskatīsim un atbildēsim ar ražošanas priekšlikumu.',
    sendPrintInquiry: 'Nosūtīt drukas pieprasījumu',
    browsePrintedBags: 'Pārlūkot drukāto maisu veidus',
    printingTypes: [
      { title: 'Mazumtirdzniecības zīmola maisi', description: 'Maisi ar jūsu zīmola logotipu un produkta dizainu mazumtirdzniecības displeja un patērētājiem domātam iepakojumam.' },
      { title: 'Reklāmas iepakojums', description: 'Pielāgoti drukāti maisi reklāmas kampaņām, sezonālam iepakojumam un mārketinga aktivitātēm.' },
      { title: 'Privātās etiķetes ražošana', description: 'Drukāts iepakojums, kas ražots zem jūsu zīmola produktiem, kas tiek pārdoti mazumtirdzniecības vai vairumtirdzniecības kanālos.' },
      { title: 'Somu maisi ar logotipu', description: 'Drukāti somu maisi ar zīmola identitāti mazumtirdzniecībai, pārtikas pakalpojumiem un pasākumu izplatīšanai.' },
      { title: 'Pārtikas iepakojums ar druku', description: 'Drukāti maisi, kas atbilst pārtikas iepakojuma prasībām — piemēroti zīmola pārtikas produktiem.' },
      { title: 'Pielāgota formāta drukātie maisi', description: 'Drukāti maisi pielāgotās dimensijās un formātos, tostarp euro pakara, apakšas locījuma un pašlīmējošās aizdares varianti.' },
    ],
    process: [
      { step: '01', title: 'Pieprasījums', body: 'Nosūtiet maisa formātu, dimensijas, materiālu, daudzumu un drukas prasības. Pievienojiet logotipa failus vai dizaina koncepcijas, ja pieejami.' },
      { step: '02', title: 'Mākslinieciskā noformējuma pārskats', body: 'Mēs izskatām jūsu drukas prasības un apstiprinām tehniskās specifikācijas. Mēs konsultēsim par krāsu režīmiem, drukas laukumu un failu sagatavošanu.' },
      { step: '03', title: 'Priekšlikums', body: 'Jūs saņemat ražošanas priekšlikumu, tostarp cenas, minimālo pasūtījumu daudzumu un ražošanas termiņu.' },
      { step: '04', title: 'Ražošana', body: 'Pēc apstiprināšanas sākas ražošana. Mēs uzturim saziņu ražošanas laikā un paziņojam par nosūtīšanu.' },
    ],
  },
  manufacturing: {
    kicker: 'Par VELPLEV',
    heading: 'Elastīgā iepakojuma ražošana no pirmās dienas',
    body1: 'VELPLEV ir Latvijas elastīgā iepakojuma maisu un plēves iepakojuma produktu ražotājs. Mēs ražojam polipropilēna un polietilēna maisus pārtikai, mazumtirdzniecībai, rūpniecībai un pielāgotiem zīmola lietojumiem.',
    body2: 'Mūsu pieeja ir praktiska un ražošanā vērsta. Mēs tieši strādājam ar pircējiem, iepirkuma vadītājiem un uzņēmumu īpašniekiem, lai piegādātu iepakojumu, kas atbilst viņu specifiskajām prasībām — nevis vispārīgus standarta produktus.',
    points: ['Latvijā bāzēts, piegādā B2B klientiem', 'Pielāgota ražošana pēc specifikācijas', 'PP un PE materiālu iespējas', 'Pārtikas un ar pārtiku nesaistīts iepakojums', 'Drukātā un vienkāršā iepakojuma iespējas'],
    capabilitiesKicker: 'Iespējas',
    capabilitiesHeading: 'Ko mūsu ražošana aptver',
    materialsKicker: 'Materiāli',
    materialsHeading: 'Materiāli, ar kuriem mēs strādājam',
    commonUses: 'Izplatīti lietojumi',
    bagFormatsKicker: 'Maisu formāti',
    bagFormatsHeading: 'Maisu veidi un konfigurācijas',
    bagFormatsBody: 'Mēs ražojam plašu maisu formātu klāstu. Ja jūsu nepieciešamais formāts šeit nav uzskaitīts, sazinieties ar mums — mēs apstrādājam pielāgotas konfigurācijas un varam konsultēt par to, kas ir iespējams jūsu lietojumam.',
    requestCustomFormat: 'Pieprasīt pielāgotu formātu',
    galleryKicker: 'Galerija',
    galleryHeading: 'Ražošana un produkti',
    capabilities: [
      { title: 'Pielāgota ražošana', body: 'Visi produkti tiek ražoti atbilstoši klienta specifikācijai. Mēs nepārdodam no fiksēta kataloga — katrs pasūtījums tiek ražots atbilstoši jūsu nepieciešamajām dimensijām, formātam un materiālam.' },
      { title: 'Drukāts iepakojums', body: 'Mums ir drukas iespējas logotipu un dizaina drukāšanai uz PP un PE maisu formātiem. Piemērots zīmolvedībai, produktu marķēšanai un privātās etiķetes iepakojumam.' },
      { title: 'Pārtikas iepakojuma lietojumi', body: 'Mēs ražojam maisus, kas piemēroti tiešam pārtikas kontaktam polipropilēnā un polietilēnā. Piemērojami maizes cepumiem, konditorejas izstrādājumiem, sausajai pārtikai un vispārīgam pārtikas iepakojumam.' },
      { title: 'Vairāki maisu formāti', body: 'Ražošana plaša spektra formātos: plakanie maisi, euro pakara maisi, maisi ar apakšas locījumu, maisi ar vārstiem, perforēti maisi, maisi ar pašlīmējošo lenti un somu maisi.' },
      { title: 'Materiālu iespējas', body: 'Mēs strādājam ar polipropilēna (PP) un polietilēna (PE) materiāliem dažādos biezumos un pakāpēs. Materiāla izvēle balstās uz lietojuma prasībām.' },
      { title: 'B2B pasūtījumu process', body: 'Mūsu pasūtījumu process ir balstīts uz pieprasījumiem. Iesniedziet savas prasības un mēs nodrošināsim ražošanas priekšlikumu, cenas un aptuveno piegādes termiņu.' },
    ],
    materials: [
      { name: 'Polipropilēns (PP)', description: 'Stingrs, dzidrs, viegls materiāls, kas piemērots pārtikas un ar pārtiku nesaistītam iepakojumam. Augsta dzidrajtāte produkta demonstrēšanai. Parasti izmanto maizes cepumu, kancelejas preču un mazumtirdzniecības maisu ražošanā.', uses: ['Maizes cepumu maisi', 'Kancelejas preču iepakojums', 'Mazumtirdzniecības displeja maisi', 'Konditorejas maisi'] },
      { name: 'Polietilēns (PE)', description: 'Elastīgs, izturīgs materiāls dažādās blīvuma pakāpēs (LDPE, HDPE). Piemērots smagās slodzes iepakojumam, somu maisiem un rūpnieciskajiem lietojumiem. Pieejams pārtikas pakāpē.', uses: ['Somu maisi', 'Rūpnieciskās somas', 'Smagās slodzes iepakojums', 'Beramkravu maisi'] },
    ],
    bagFormats: [
      'Plakanie maisi (noslēgti no 3 pusēm)',
      'Euro pakara maisi (ar caurdurtu caurumu)',
      'Maisi ar apakšas locījumu',
      'Maisi ar vārstu',
      'Perforēti maisi',
      'Maisi ar pašlīmējošās lentas aizdari',
      'Maisi ar caurumiem (ventilācija)',
      'Somu maisi ar rokturiem',
      'Pielāgota formāta maisi',
    ],
  },
  contact: {
    kicker: 'Kontakti',
    heading: 'Pieprasīt piedāvājumu vai nosūtīt pieprasījumu',
    body: 'Aizpildiet veidlapu ar savām iepakojuma prasībām. Jo vairāk informācijas sniedzat, jo ātrāk mēs varam sagatavot precīzu priekšlikumu. Mēs cenšamies atbildēt vienas darba dienas laikā.',
    contactInfoHeading: 'Kontaktinformācija',
    address: 'Adrese',
    addressValue: 'K. Ulmaņa gatve 2, Rīga, LV-1004',
    phone: 'Tālrunis',
    phoneValues: ['+371 67-614-566', '+371 26-953-255', '+371 29-574-883'],
    email: 'E-pasts',
    emailValue: 'velplev@inbox.lv',
    pickupHours: 'Pasūtījumu izsniegšana',
    pickupHoursValue: 'Darba dienās: 8:00 – 15:30',
    quotationHeading: 'Precīzam piedāvājumam',
    quotationBody: 'Lūdzu, norādiet sekojošo savā ziņojumā ātrākai, precīzākai atbildei:',
    quotationItems: [
      'Maisa dimensijas (platums × augstums)',
      'Materiāla preferences (PP vai PE)',
      'Lietojums / fasējamais produkts',
      'Drukas prasības (jā/nē)',
      'Aptuvens daudzums uz pasūtījumu',
    ],
    faqHeading: 'Biežāk uzdotie jautājumi',
    faqs: [
      { q: 'Vai ir minimālais pasūtījuma daudzums?', a: 'Minimālie pasūtījumu daudzumi ir atkarīgi no produkta veida un formāta. Sazinieties ar mums, lai apspriestu savas prasības.' },
      { q: 'Vai varat ražot pielāgotās dimensijās?', a: 'Jā. Visi produkti ir pieejami pielāgotās dimensijās. Norādiet nepieciešamo izmēru un mēs apstiprināsim iespējamību.' },
      { q: 'Kāds ir tipiskais izpildes laiks?', a: 'Izpildes laiki atšķiras atkarībā no pasūtījuma apjoma un sarežģītības. Mēs iesniegsim konkrētu termiņu ar jūsu piedāvājumu.' },
    ],
    nameLabel: 'Pilns vārds',
    namePlaceholder: 'Jūsu vārds',
    companyLabel: 'Uzņēmums',
    companyPlaceholder: 'Uzņēmuma nosaukums',
    emailLabel: 'E-pasts',
    emailPlaceholder: 'jusu@epasts.lv',
    phoneLabel: 'Tālrunis',
    phonePlaceholder: '+371 ...',
    productTypeLabel: 'Produkta veids',
    productTypePlaceholder: 'Izvēlēties kategoriju',
    industryLabel: 'Nozare',
    industryPlaceholder: 'Izvēlēties nozari',
    materialLabel: 'Materiāls',
    materialPlaceholder: 'Izvēlēties materiālu',
    dimensionsLabel: 'Dimensijas',
    dimensionsPlaceholder: 'piem. 200 × 300 mm',
    printingLabel: 'Nepieciešama druka?',
    printingYes: 'Jā',
    printingNo: 'Nē',
    messageLabel: 'Ziņojums / prasības',
    messagePlaceholder: 'Aprakstiet savas iepakojuma prasības, fasējamo produktu, daudzumu un citas atbilstošas detaļas...',
    submitButton: 'Nosūtīt pieprasījumu',
    submitNote: 'Mēs atbildēsim vienas darba dienas laikā. Visus pieprasījumus apstrādā tieši mūsu pārdošanas nodaļa.',
    successHeading: 'Pieprasījums saņemts',
    successBody: 'Paldies par jūsu pieprasījumu. Mēs izskatīsim jūsu prasības un sazināsimies ar jums vienas darba dienas laikā ar priekšlikumu vai papildu jautājumiem.',
    sendAnother: 'Nosūtīt vēl vienu pieprasījumu',
    productTypes: ['Pārtikas iepakojuma maisi', 'Maizīšu un konditorejas maisi', 'Patēriņa preču / mazumtirdzniecības maisi', 'Biroja un drukāšanas iepakojums', 'Zīmola / drukātie maisi', 'Rūpnieciskais / pielāgotais iepakojums', 'Citi / nezinu'],
    industryOptions: ['Maizes cepums', 'Konditorejas ražošana', 'Pārtikas ražošana', 'Mazumtirdzniecība / lielveikals', 'Patēriņa preces', 'Biroja piederumi', 'Izdevniecība / druka', 'Rūpnieciskais / komerciālais', 'Citi'],
    materialOptions: ['Polipropilēns (PP)', 'Polietilēns (PE)', 'Nezinu — konsultējiet mani'],
  },
}

// ---------------------------------------------------------------------------
// RUSSIAN
// ---------------------------------------------------------------------------
const ru: Translations = {
  nav: {
    home: 'Главная',
    products: 'Продукция',
    productsChildren: {
      food: 'Пищевая упаковка',
      bakery: 'Хлебобулочные и кондитерские изделия',
      consumer: 'Потребительские товары',
      office: 'Офисная и печатная упаковка',
      printed: 'Фирменные / печатные пакеты',
      industrial: 'Промышленные и нестандартные',
    },
    industries: 'Отрасли',
    industriesChildren: {
      bakery: 'Хлебопекарни и кондитеры',
      food: 'Производители продуктов питания',
      retail: 'Розница и промоупаковка',
      office: 'Офис и канцтовары',
    },
    customPrinting: 'Печать на заказ',
    manufacturing: 'Производство',
    contact: 'Контакты',
    requestQuote: 'Запросить предложение',
  },
  footer: {
    tagline: 'Производитель гибкой упаковки из пленки для пищевой промышленности, розницы, промышленного и брендированного применения.',
    b2bNote: 'Заказы B2B и индивидуальное производство',
    products: 'Продукция',
    company: 'Компания',
    contactTitle: 'Контакты',
    productLinks: [
      { label: 'Пищевая упаковка', href: '/ru/products#food' },
      { label: 'Хлебобулочные и кондитерские', href: '/ru/products#bakery' },
      { label: 'Потребительские товары', href: '/ru/products#consumer' },
      { label: 'Печатные пакеты', href: '/ru/products#printed' },
      { label: 'Промышленная упаковка', href: '/ru/products#industrial' },
    ],
    companyLinks: [
      { label: 'Производство', href: '/ru/manufacturing' },
      { label: 'Отрасли', href: '/ru/industries' },
      { label: 'Печать на заказ', href: '/ru/custom-printing' },
      { label: 'Контакты', href: '/ru/contact' },
      { label: 'Запросить предложение', href: '/ru/contact' },
    ],
    copyright: 'Все права защищены.',
    location: 'Производитель гибкой упаковки — Латвия',
  },
  cta: {
    heading: 'Нужна индивидуальная упаковка для вашего продукта?',
    body: 'Пришлите размеры, предпочтения по материалу, требования к печати и назначение — мы свяжемся с вами с подходящим решением.',
    requestQuote: 'Запросить предложение',
    contactSales: 'Связаться с отделом продаж',
  },
  home: {
    heroKicker: 'Латвийский производитель упаковки',
    heroHeading: 'Гибкая упаковка для пищевой промышленности и производства',
    heroBody: 'Мы производим упаковочные пакеты из полипропилена и полиэтилена для пищевой, розничной, промышленной и брендированной сферы — включая печатные и изготовленные на заказ пакеты по вашим спецификациям.',
    requestQuote: 'Запросить предложение',
    exploreProducts: 'Смотреть продукцию',
    trustBullets: [
      'Индивидуальное производство по спецификации',
      'Печатная и брендированная упаковка',
      'Пищевое и промышленное применение',
      'Быстрый ответ на запросы',
    ],
    productRangeKicker: 'Ассортимент',
    productRangeHeading: 'Решения для упаковки по применению',
    productRangeBody: 'Мы производим упаковку в различных форматах и для различных применений. Выберите категорию, чтобы узнать больше.',
    viewDetails: 'Подробнее',
    whyKicker: 'Почему VELPLEV',
    whyHeading: 'Что мы предлагаем в области поставки упаковки',
    industriesKicker: 'Отрасли',
    industriesHeading: 'Упаковка для нескольких секторов бизнеса',
    industriesBody: 'Мы поставляем упаковку предприятиям в сфере пищевого производства, розничной торговли, полиграфии и промышленности. Наше производство настроено для нестандартных форматов и повторных заказов B2B.',
    viewIndustrySolutions: 'Смотреть отраслевые решения',
    printingKicker: 'Печать на заказ',
    printingHeading: 'Печатная упаковка с вашим брендом',
    printingBody: 'Мы производим индивидуально напечатанные пакеты с вашим логотипом, дизайном бренда или информацией о продукте. Подходит для розничной упаковки, рекламных пакетов и производственных серий под частной маркой.',
    printingPoints: [
      'Печать логотипа и бренда на пакетах из ПП и ПЭ',
      'Рекламная и розничная готовая упаковка',
      'Производственные серии под частной маркой',
      'Индивидуальное художественное оформление и спецификации печати',
    ],
    discussDesign: 'Обсудить дизайн упаковки',
    galleryKicker: 'Галерея',
    galleryHeading: 'Галерея продукции',
    viewManufacturing: 'Смотреть производство',
    productCategories: [
      { id: 'food', title: 'Пищевая упаковка', description: 'Пакеты из полипропилена и полиэтилена для прямого контакта с пищевыми продуктами. Подходит для сыпучих товаров, муки, кондитерских изделий и упакованных продуктов питания.', tags: ['Пакеты ПП', 'Пакеты ПЭ', 'Пищевая безопасность'] },
      { id: 'bakery', title: 'Хлебобулочные и кондитерские изделия', description: 'Прозрачные и печатные пакеты для хлеба, выпечки, печенья и сладостей. Пакеты с еврослотом, нижним сгибом, перфорацией и другие.', tags: ['Еврослот', 'Перфорированные', 'Нижний сгиб'] },
      { id: 'consumer', title: 'Потребительские товары', description: 'Готовые для розницы пакеты для упакованных потребительских товаров. Подходит для брендированных товаров, рекламных упаковок и розничных дисплеев.', tags: ['Розница', 'Брендированные', 'Рекламные'] },
      { id: 'office', title: 'Офисная и печатная упаковка', description: 'Защитные прозрачные пакеты для книг, канцтоваров, печатных материалов и офисных принадлежностей.', tags: ['Книги', 'Канцтовары', 'Прозрачные'] },
      { id: 'printed', title: 'Фирменные / печатные пакеты', description: 'Индивидуально напечатанные пакеты с логотипами и брендом для розничных, рекламных и частномарочных упаковочных решений.', tags: ['Печать логотипа', 'Частная марка', 'Индивидуальный дизайн'] },
      { id: 'industrial', title: 'Промышленные и нестандартные', description: 'Прочные пакеты из полиэтилена и упаковка нестандартного формата для промышленных, коммерческих и крупногабаритных задач.', tags: ['Сверхпрочные', 'Нестандартный размер', 'Оптовые заказы'] },
    ],
    whyItems: [
      { title: 'Нестандартные размеры и форматы', body: 'Мы производим пакеты в индивидуальных размерах, форматах и конфигурациях — включая нижний сгиб, еврослоты, перфорацию, клапаны и клейкую ленту.' },
      { title: 'Печатная упаковка', body: 'Индивидуальная печать логотипа и дизайна на пакетах из полипропилена и полиэтилена для брендированных, рекламных и частномарочных нужд.' },
      { title: 'Материалы ПП и ПЭ', body: 'Производство из полипропилена (ПП) и полиэтилена (ПЭ) для пищевой и непищевой упаковки.' },
      { title: 'Обслуживание нескольких отраслей', body: 'Решения для упаковки для производителей продуктов питания, хлебопеков, кондитеров, розницы, канцелярии, полиграфии и промышленных покупателей.' },
      { title: 'Производственный опыт', body: 'Практические знания из реальных производственных заказов. Мы понимаем требования к упаковке и можем консультировать по форматам, материалам и возможностям.' },
      { title: 'Обработка заказов B2B', body: 'Процесс на основе запросов с прямой коммуникацией. Мы отвечаем на запросы с конкретными предложениями, ценами и сроками производства.' },
    ],
    industries: [
      'Хлебопекарни',
      'Кондитерские производства',
      'Производители продуктов питания',
      'Розница и супермаркеты',
      'Бренды потребительских товаров',
      'Компании офисных принадлежностей',
      'Издательства и полиграфия',
      'Рекламная упаковка',
    ],
  },
  products: {
    kicker: 'Продукция',
    heading: 'Обзор упаковочной продукции',
    body: 'Мы производим гибкие упаковочные пакеты из полипропилена и полиэтилена для широкого спектра пищевых, розничных, промышленных и нестандартных применений. Вся продукция доступна в нестандартных размерах и форматах.',
    typicalApplications: 'Типичные применения',
    bagTypes: 'Виды пакетов',
    requestInquiry: 'Запросить предложение',
    materialsKicker: 'Материалы',
    materialsDimKicker: 'Нестандартные размеры',
    materialsOrderKicker: 'Заказ',
    materialsBody: 'Мы работаем с пленочными материалами из полипропилена (ПП) и полиэтилена (ПЭ) различной толщины и спецификаций в зависимости от применения.',
    materialsDimBody: 'Все форматы пакетов доступны в нестандартных размерах. Укажите необходимые размеры, и мы подтвердим возможность и стоимость на основе вашей спецификации.',
    materialsOrderBody: 'Заказы принимаются на основе запросов. Свяжитесь с нами, указав тип продукта, размеры, материал и количество. Мы ответим с предложением и сроком выполнения.',
    categories: [
      { id: 'food', title: 'Пищевая упаковка', description: 'Пакеты из полипропилена (ПП) и полиэтилена (ПЭ), пригодные для прямого контакта с пищей. Предназначены для сухих продуктов, сыпучих товаров, муки, сахара, кондитерских изделий и других упакованных продуктов.', applications: ['Мука и сухие товары', 'Кондитерские изделия и сладости', 'Упакованные продукты питания', 'Розничные продуктовые пакеты'], bagTypes: ['Плоские пакеты', 'Пакеты с нижним сгибом', 'Пакеты с клапаном', 'Запаянные пакеты'] },
      { id: 'bakery', title: 'Хлебобулочные и кондитерские изделия', description: 'Прозрачные и полупрозрачные пакеты для свежей и упакованной хлебобулочной продукции. Доступны с перфорацией, нижним сгибом, еврослотом и клейкой лентой.', applications: ['Хлеб и булочки', 'Круассаны и выпечка', 'Печенье и бисквиты', 'Шоколад и сладости'], bagTypes: ['Пакеты с еврослотом', 'Перфорированные пакеты', 'Пакеты с нижним сгибом', 'Пакеты с клейкой лентой'] },
      { id: 'consumer', title: 'Потребительские товары', description: 'Упаковочные пакеты для потребительских товаров, готовые для розницы. Доступны без печати или с нестандартной печатью. Подходит для вешалок, стеллажной упаковки и брендированной розничной презентации.', applications: ['Розничные товары', 'Брендированные потребительские товары', 'Рекламные упаковки', 'Подарочная упаковка'], bagTypes: ['Сумки-пакеты', 'Пакеты с еврослотом', 'Печатные пакеты', 'Пакеты с отверстиями'] },
      { id: 'office', title: 'Офисная и печатная упаковка', description: 'Защитные прозрачные пакеты для книг, канцтоваров, блокнотов и печатных материалов. Прозрачные полипропиленовые пакеты для демонстрации товара при защите от пыли и влаги.', applications: ['Книги и блокноты', 'Наборы канцтоваров', 'Печатные материалы', 'Наборы офисных принадлежностей'], bagTypes: ['Плоские прозрачные пакеты', 'Пакеты с еврослотом', 'Пакеты с клейкой лентой', 'Пакеты нестандартных размеров'] },
      { id: 'printed', title: 'Фирменные / печатные пакеты', description: 'Индивидуальные печатные гибкие упаковочные пакеты с логотипом, продуктом или дизайном бренда. Печать на материале ПП или ПЭ. Подходит для розницы, рекламы и производства под частной маркой.', applications: ['Брендированная розничная упаковка', 'Рекламные пакеты', 'Производство под частной маркой', 'Упаковка для мероприятий и маркетинга'], bagTypes: ['Печатные пакеты ПП', 'Печатные пакеты ПЭ', 'Брендированные сумки', 'Нестандартные печатные форматы'] },
      { id: 'industrial', title: 'Промышленные и нестандартные', description: 'Прочные пакеты из полиэтилена и упаковка нестандартного формата для промышленных, коммерческих и крупносерийных применений. Доступны нестандартные размеры и толщина материала.', applications: ['Промышленные компоненты', 'Упаковка сыпучих товаров', 'Коммерческие поставки', 'Нестандартные требования B2B'], bagTypes: ['Прочные пакеты ПЭ', 'Пакеты нестандартных размеров', 'Крупноформатные пакеты', 'Пакеты с клапаном или застёжкой'] },
    ],
  },
  industries: {
    kicker: 'Отрасли',
    heading: 'Упаковка для вашей отрасли',
    body: 'В разных отраслях разные требования к упаковке. Мы поставляем решения для гибкой упаковки, соответствующие конкретным потребностям вашего сектора — будь то пищевое производство, розница или канцтовары.',
    packagingGoals: 'Цели упаковки',
    relevantProducts: 'Подходящая продукция',
    requestInquiry: 'Запросить предложение',
    browseProducts: 'Смотреть продукцию',
    segments: [
      { id: 'bakery', title: 'Хлебопекарни и кондитеры', description: 'Хлебопекарням и кондитерским производствам требуется гигиеничная, привлекательная упаковка, сохраняющая свежесть и поддерживающая выкладку. Мы производим прозрачные и печатные форматы пакетов, подходящие для рабочих процессов хлебопекарного производства.', goals: ['Сохранять свежесть и предотвращать загрязнение', 'Чётко демонстрировать товар конечному покупателю', 'Поддерживать розничную и прикассовую выкладку', 'Подходить для различных размеров хлеба и выпе��ки'], products: ['Перфорированные прозрачные пакеты ПП для хлеба', 'Пакеты с еврослотом для упакованной выпечки', 'Пакеты с нижним сгибом для буханок и булочек', 'Печатные пакеты для брендированных хлебобулочных изделий', 'Пакеты с клейкой лентой'] },
      { id: 'food', title: 'Производители продуктов питания', description: 'Производителям продуктов питания, закупающим упаковку в больших объёмах, нужны стабильное качество, соответствие требованиям контакта с пищей и надёжные поставки. Мы поставляем простую и печатную упаковку для сухих продуктов, кондитерских изделий и переработанных пищевых продуктов.', goals: ['Соответствие требованиям безопасности пищевых материалов', 'Стабильные размеры пакетов для совместимости с производственной линией', 'Доступность для крупносерийных повторных заказов', 'Варианты как для брендированной, так и для простой упаковки'], products: ['Пакеты ПП и ПЭ для прямого контакта с пищей', 'Пакеты с клапанами для муки и порошковых продуктов', 'Плоские запаянные пакеты для кондитерских изделий', 'Нестандартная печатная упаковка для брендированных линий', 'Пакеты с еврослотом для розничного дисплея'] },
      { id: 'retail', title: 'Розница и промоупаковка', description: 'Розничным торговцам и владельцам брендов нужна упаковка, которая передаёт идентичность бренда и поддерживает присутствие на полке. Мы производим печатные пакеты и брендированную упаковку для розничных и рекламных целей.', goals: ['Сильное визуальное присутствие на полке', 'Последовательность бренда в упаковке', 'Подходит для форматов розничного дисплея', 'Варианты рекламной и сезонной упаковки'], products: ['Нестандартные печатные пакеты ПП с логотипом', 'Сумки-пакеты с брендингом', 'Пакеты с еврощелью для вешалок дисплея', 'Производственные серии под частной маркой', 'Упаковочные пакеты для потребительских товаров'] },
      { id: 'office', title: 'Офис и канцтовары', description: 'Издательствам, производителям канцтоваров и компаниям офисных принадлежностей нужна прозрачная, защитная упаковка, позволяющая видеть товар, защищая от пыли и повреждений при хранении и транспортировке.', goals: ['Прозрачная демонстрация упакованного товара', 'Защита от пыли, влаги и механических повреждений', 'Подходит для канцтоваров, книг и печатных изделий', 'Чистый профессиональный вид для B2B отгрузки'], products: ['Прозрачные плоские пакеты ПП для книг и блокнотов', 'Пакеты с клейкой лентой', 'Пакеты нестандартных размеров для наборов канцтоваров', 'Пакеты с еврослотом для розничного дисплея', 'Печатные пакеты для брендированных канцтоваров'] },
    ],
  },
  customPrinting: {
    kicker: 'Печать на заказ',
    heading: 'Печатная упаковка с вашей фирменной идентичностью',
    body: 'Мы производим индивидуальные печатные гибкие упаковочные пакеты для розницы, пищевой промышленности, рекламы и частномарочных применений. Печать на полипропиленовых и полиэтиленовых материалах в требуемом формате и размерах.',
    discussDesign: 'Обсудить дизайн упаковки',
    sendInquiry: 'Отправить запрос на печать',
    whyKicker: 'Почему печатная упаковка',
    whyHeading: 'Упаковка как поверхность для бренда',
    whyBody: 'Печатная упаковка служит функциональным и коммерческим целям. Помимо защиты товара, она передаёт идентичность бренда, информацию о продукте и выделяет ваши товары в точке продажи или при распределении.',
    whyPoints: [
      'Идентичность бренда на каждой отгружаемой или продаваемой единице',
      'Информация о продукте и юридическая маркировка',
      'Профессиональный вид для розницы и оптовой торговли',
      'Дифференциация в конкурентных категориях продуктов',
      'Последовательность в производственных партиях',
    ],
    brandingApplicationsHeading: 'Применение брендинга',
    brandingApplications: [
      'Бренды хлебопекарен и кондитерских',
      'Производители розничных потребительских товаров',
      'Производители продуктов питания с брендированными линейками',
      'Компании, нуждающиеся в упаковке под частной маркой',
      'Рекламные и событийные потребности в упаковке',
      'Экспортная упаковка с фирменной идентичностью',
    ],
    bagTypesKicker: 'Виды пакетов',
    bagTypesHeading: 'Виды производимых нами печатных пакетов',
    processKicker: 'Процесс',
    processHeading: 'От запроса до печатной упаковки',
    processBody: 'Наш процесс прост. Пришлите требования — остальное мы берём на себя.',
    ctaKicker: 'Начать',
    ctaHeading: 'Готовы обсудить вашу печатную упаковку?',
    ctaBody: 'Пришлите размеры пакета, предпочтения по материалу, дизайн печати и количество. Мы рассмотрим и ответим с производственным предложением.',
    sendPrintInquiry: 'Отправить запрос на печать',
    browsePrintedBags: 'Смотреть виды печатных пакетов',
    printingTypes: [
      { title: 'Брендированные розничные пакеты', description: 'Пакеты с вашим логотипом и дизайном продукта для розничного дисплея и потребительской упаковки.' },
      { title: 'Рекламная упаковка', description: 'Индивидуально напечатанные пакеты для рекламных кампаний, сезонной упаковки и маркетинговых мероприятий.' },
      { title: 'Производство под частной маркой', description: 'Печатная упаковка, произведённая под вашим брендом для товаров, продаваемых через розничные или оптовые каналы.' },
      { title: 'Сумки с логотипом', description: 'Печатные сумки с фирменной идентичностью для розницы, общепита и раздачи на мероприятиях.' },
      { title: 'Пищевая упаковка с печатью', description: 'Печатные пакеты, соответствующие требованиям к пищевой упаковке — подходит для брендированных продуктов питания.' },
      { title: 'Печатные пакеты нестандартных форматов', description: 'Печатные пакеты нестандартных размеров и форматов, включая еврослот, нижний сгиб и клейкую ленту.' },
    ],
    process: [
      { step: '01', title: 'Запрос', body: 'Пришлите формат пакета, размеры, материал, количество и требования к печати. Приложите логотип или концепцию дизайна, если доступны.' },
      { step: '02', title: 'Проверка макета', body: 'Мы проверяем требования к печати и подтверждаем технические характеристики. Мы проконсультируем по цветовым режимам, области печати и подготовке файлов.' },
      { step: '03', title: 'Предложение', body: 'Вы получаете производственное предложение с ценой, минимальным количеством заказа и сроком производства.' },
      { step: '04', title: 'Производство', body: 'После согласования начинается производство. Мы поддерживаем связь в процессе производства и уведомляем при отгрузке.' },
    ],
  },
  manufacturing: {
    kicker: 'О VELPLEV',
    heading: 'Производство гибкой упаковки с первого дня',
    body1: 'VELPLEV — латвийский производитель гибких упаковочных пакетов и упаковочных изделий из плёнки. Мы производим пакеты из полипропилена и полиэтилена для пищевой, розничной, промышленной и брендированной сферы.',
    body2: 'Наш подход практичен и ориентирован на производство. Мы работаем напрямую с покупателями, менеджерами по закупкам и владельцами бизнеса, чтобы поставлять упаковку, отвечающую их конкретным требованиям, а не стандартные складские товары.',
    points: ['Базируемся в Латвии, обслуживаем B2B клиентов', 'Индивидуальное производство по спецификации', 'Возможности работы с материалами ПП и ПЭ', 'Пищевая и непищевая упаковка', 'Варианты печатной и простой упаковки'],
    capabilitiesKicker: 'Возможности',
    capabilitiesHeading: 'Что охватывает наше производство',
    materialsKicker: 'Материалы',
    materialsHeading: 'Материалы, с которыми мы работаем',
    commonUses: 'Распространённые применения',
    bagFormatsKicker: 'Форматы пакетов',
    bagFormatsHeading: 'Виды пакетов и конфигурации',
    bagFormatsBody: 'Мы производим широкий спектр форматов пакетов. Если необходимый формат не указан, свяжитесь с нами — мы работаем с нестандартными конфигурациями и можем проконсультировать о возможностях для вашего применения.',
    requestCustomFormat: 'Запросить нестандартный формат',
    galleryKicker: 'Галерея',
    galleryHeading: 'Производство и продукция',
    capabilities: [
      { title: 'Индивидуальное производство', body: 'Вся продукция изготавливается по спецификации заказчика. Мы не продаём из фиксированного каталога — каждый заказ производится в соответствии с вашими требуемыми размерами, форматом и материалом.' },
      { title: 'Печатная упаковка', body: 'У нас есть возможности печати логотипа и дизайна на форматах пакетов ПП и ПЭ. Подходит для брендинга, маркировки продукции и упаковки под частной маркой.' },
      { title: 'Применение в пищевой упаковке', body: 'Мы производим пакеты, пригодные для прямого контакта с пищей из полипропилена и полиэтилена. Применимо для хлебопекарен, кондитерских изделий, сухих продуктов и общей пищевой упаковки.' },
      { title: 'Различные форматы пакетов', body: 'Производство широкого спектра форматов: плоские пакеты, пакеты с еврослотом, пакеты с нижним сгибом, пакеты с клапанами, перфорированные пакеты, пакеты с клейкой лентой и сумки.' },
      { title: 'Варианты материалов', body: 'Мы работаем с материалами из полипропилена (ПП) и полиэтилена (ПЭ) различной толщины и марок. Выбор материала зависит от требований применения.' },
      { title: 'Процесс заказов B2B', body: 'Наш процесс заказов основан на запросах. Отправьте требования, и мы предоставим производственное предложение, цены и расчётный срок поставки.' },
    ],
    materials: [
      { name: 'Полипропилен (ПП)', description: 'Жёсткий, прозрачный, лёгкий материал, подходящий для пищевой и непищевой упаковки. Высокая прозрачность для демонстрации продукта. Обычно используется для пакетов для хлебобулочных изделий, канцтоваров и розничных пакетов.', uses: ['Пакеты для хлебобулочных изделий', 'Упаковка канцтоваров', 'Розничные дисплейные пакеты', 'Кондитерские пакеты'] },
      { name: 'Полиэтилен (ПЭ)', description: 'Гибкий, прочный материал различной плотности (LDPE, HDPE). Подходит для тяжёлой упаковки, сумок и промышленного применения. Доступен в пищевом исполнении.', uses: ['Сумки-пакеты', 'Промышленные пакеты', 'Прочная упаковка', 'Пакеты для сыпучих товаров'] },
    ],
    bagFormats: [
      'Плоские пакеты (запаяны с 3 сторон)',
      'Пакеты с еврослотом (с пробитым отверстием)',
      'Пакеты с нижним сгибом',
      'Пакеты с клапаном',
      'Перфорированные пакеты',
      'Пакеты с клейкой лентой',
      'Пакеты с отверстиями (вентиляция)',
      'Сумки с ручками',
      'Пакеты нестандартного формата',
    ],
  },
  contact: {
    kicker: 'Контакты',
    heading: 'Запросить предложение или отправить запрос',
    body: 'Заполните форму с требованиями к упаковке. Чем больше деталей вы укажете, тем быстрее мы подготовим точное предложение. Мы стремимся ответить в течение одного рабочего дня.',
    contactInfoHeading: 'Контактная информация',
    address: 'Адрес',
    addressValue: 'ул. К. Улманя гатве 2, Рига, LV-1004',
    phone: 'Телефон',
    phoneValues: ['+371 67-614-566', '+371 26-953-255', '+371 29-574-883'],
    email: 'Email',
    emailValue: 'velplev@inbox.lv',
    pickupHours: 'Выдача заказов',
    pickupHoursValue: 'Пн–Пт: 8:00 – 15:30',
    quotationHeading: 'Для точного расчёта',
    quotationBody: 'Пожалуйста, укажите следующее в вашем сообщении для более быстрого и точного ответа:',
    quotationItems: [
      'Размеры пакета (ширина × высота)',
      'Предпочтение по материалу (ПП или ПЭ)',
      'Применение / упаковываемый продукт',
      'Требования к печати (да/нет)',
      'Примерное количество на заказ',
    ],
    faqHeading: 'Часто задаваемые вопросы',
    faqs: [
      { q: 'Есть ли минимальный объём заказа?', a: 'Минимальные объёмы заказа зависят от типа и формата продукта. Свяжитесь с нами, чтобы обсудить ваши требования.' },
      { q: 'Можете ли вы производить нестандартные размеры?', a: 'Да. Вся продукция доступна в нестандартных размерах. Укажите необходимый размер, и мы подтвердим возможность.' },
      { q: 'Каков типичный срок выполнения?', a: 'Сроки выполнения зависят от объёма и сложности заказа. Мы укажем конкретные сроки в вашем предложении.' },
    ],
    nameLabel: 'Полное имя',
    namePlaceholder: 'Ваше имя',
    companyLabel: 'Компания',
    companyPlaceholder: 'Название компании',
    emailLabel: 'Email',
    emailPlaceholder: 'ваш@email.com',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+371 ...',
    productTypeLabel: 'Тип продукта',
    productTypePlaceholder: 'Выберите категорию',
    industryLabel: 'Отрасль',
    industryPlaceholder: 'Выберите отрасль',
    materialLabel: 'Материал',
    materialPlaceholder: 'Выберите материал',
    dimensionsLabel: 'Размеры',
    dimensionsPlaceholder: 'напр. 200 × 300 мм',
    printingLabel: 'Требуется печать?',
    printingYes: 'Да',
    printingNo: 'Нет',
    messageLabel: 'Сообщение / требования',
    messagePlaceholder: 'Опишите требования к упаковке, упаковываемый продукт, количество и другие актуальные детали...',
    submitButton: 'Отправить запрос',
    submitNote: 'Мы ответим в течение одного рабочего дня. Все запросы обрабатываются непосредственно нашим отделом продаж.',
    successHeading: 'Запрос получен',
    successBody: 'Спасибо за ваш запрос. Мы рассмотрим ваши требования и свяжемся с вами в течение одного рабочего дня с предложением или уточняющими вопросами.',
    sendAnother: 'Отправить ещё один запрос',
    productTypes: ['Пакеты для пищевой продукции', 'Пакеты для хлебобулочных и кондитерских изделий', 'Пакеты для потребительских товаров / розница', 'Офисная и печатная упаковка', 'Фирменные / печатные пакеты', 'Промышленная / нестандартная упаковка', 'Другое / не уверен'],
    industryOptions: ['Хлебопекарня', 'Кондитерское производство', 'Пищевое производство', 'Розница / супермаркет', 'Потребительские товары', 'Офисные принадлежности', 'Издательство / полиграфия', 'Промышленное / коммерческое', 'Другое'],
    materialOptions: ['Полипропилен (ПП)', 'Полиэтилен (ПЭ)', 'Не уверен — проконсультируйте меня'],
  },
}

export const translations: Record<Locale, Translations> = { en, lv, ru }
