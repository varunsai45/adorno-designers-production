import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/ad-logo.jpeg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/projects', label: 'Projects' },
  { to: '/brochure', label: 'Brochure' },
  { to: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="relative h-10 w-10 overflow-hidden rounded-sm transition"
          >
            <img
              src={logo}
              alt="Adorno Designers"
              className="h-full w-full object-cover ring-1 ring-[rgba(197,161,74,0.3)] rounded-sm group-hover:ring-[var(--gold)] transition"
              width={40}
              height={40}
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm tracking-[0.25em] text-gold-gradient">ADORNO</div>
            <div className="hairline text-[var(--muted-foreground)]">Designers</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-[13px] tracking-wider uppercase font-medium transition-colors ${
                isActive(l.to) ? 'text-[var(--gold)]' : 'text-[rgba(245,240,232,0.8)] hover:text-[var(--gold)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/inquiry"
            className="ml-3 inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-foreground)] shadow-gold hover:shadow-gold-lg transition-all"
          >
            Enquire
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-[var(--gold)] p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 glass rounded-md p-4 animate-fade-up">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-3 text-sm uppercase tracking-widest border-b border-[rgba(197,161,74,0.1)] last:border-0 ${
                  isActive(l.to) ? 'text-[var(--gold)]' : 'text-[rgba(245,240,232,0.8)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/inquiry"
              className="mt-3 rounded-sm bg-gold-gradient px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-foreground)]"
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
