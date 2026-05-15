'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Food Packaging', href: '/products#food' },
      { label: 'Bakery & Confectionery', href: '/products#bakery' },
      { label: 'Consumer Goods', href: '/products#consumer' },
      { label: 'Office & Print', href: '/products#office' },
      { label: 'Printed / Branded Bags', href: '/products#printed' },
      { label: 'Industrial & Custom', href: '/products#industrial' },
    ],
  },
  { label: 'Custom Printing', href: '/custom-printing' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 bg-white ${
        scrolled ? 'shadow-sm border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-widest text-primary uppercase">
              VELPLEV
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link href="/lv" className="hover:text-primary font-medium transition-colors">LV</Link>
              <span>/</span>
              <span className="text-primary font-semibold">EN</span>
              <span>/</span>
              <Link href="/ru" className="hover:text-primary font-medium transition-colors">RU</Link>
            </div>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-brand-teal-dark transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l border-border ml-3 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border mt-2">
              <Link
                href="/contact"
                className="block bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-semibold text-center hover:bg-brand-teal-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
