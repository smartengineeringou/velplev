import Link from 'next/link'

export default function CtaBand() {
  return (
    <section className="bg-primary py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
          Need custom packaging for your product?
        </h2>
        <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Send your dimensions, material preference, print requirements, and application — we will
          get back to you with a suitable solution.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-brand-teal-light transition-colors text-sm"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors text-sm"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  )
}
