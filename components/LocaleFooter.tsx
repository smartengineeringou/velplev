import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import type { Locale, Translations } from '@/lib/translations'

interface Props {
  locale: Locale
  t: Translations
}

const localeLinks: { locale: Locale; label: string; href: string }[] = [
  { locale: 'lv', label: 'LV', href: '/lv' },
  { locale: 'en', label: 'EN', href: '/' },
  { locale: 'ru', label: 'RU', href: '/ru' },
]

export default function LocaleFooter({ locale, t }: Props) {
  const f = t.footer
  return (
    <footer className="bg-brand-graphite text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-xl font-bold tracking-widest uppercase text-white">
              VELPLEV
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">{f.tagline}</p>
            <p className="mt-4 text-xs text-white/40 uppercase tracking-wider">{f.b2bNote}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {f.products}
            </h4>
            <ul className="flex flex-col gap-2">
              {f.productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {f.company}
            </h4>
            <ul className="flex flex-col gap-2">
              {f.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {f.contactTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 leading-snug">K. Ulmaņa gatve 2<br />Rīga, LV-1004</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+37167614566" className="text-sm text-white/60 hover:text-white transition-colors">+371 67-614-566</a>
                  <a href="tel:+37126953255" className="text-sm text-white/60 hover:text-white transition-colors">+371 26-953-255</a>
                  <a href="tel:+37129574883" className="text-sm text-white/60 hover:text-white transition-colors">+371 29-574-883</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:velplev@inbox.lv" className="text-sm text-white/60 hover:text-white transition-colors">
                  velplev@inbox.lv
                </a>
              </li>
            </ul>
            {/* Language switcher */}
            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              {localeLinks.map((l, i) => (
                <span key={l.locale} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  <Link
                    href={l.href}
                    className={locale === l.locale ? 'text-white/80 font-semibold' : 'hover:text-white/80 transition-colors'}
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} VELPLEV. {f.copyright}
          </p>
          <p className="text-xs text-white/30">{f.location}</p>
        </div>
      </div>
    </footer>
  )
}
