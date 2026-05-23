import { Link } from 'react-router-dom'
import { Mail, Phone, Globe, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import logo from '@/assets/ad-logo.jpeg'

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[rgba(197,161,74,0.1)] bg-[var(--onyx)]">
      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="Adorno Designers"
              className="h-12 w-12 rounded-sm object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <div>
              <div className="font-display text-base tracking-[0.25em] text-gold-gradient">ADORNO</div>
              <div className="hairline text-[var(--muted-foreground)]">Designers</div>
            </div>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Style, Strength &amp; Sustainability in every frame. Premium uPVC windows &amp; doors
            engineered for modern luxury living.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid place-items-center h-9 w-9 rounded-sm border border-[rgba(197,161,74,0.2)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="hairline text-[var(--gold)] mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              ['/about', 'About'],
              ['/products', 'Products'],
              ['/gallery', 'Gallery'],
              ['/projects', 'Projects'],
              ['/brochure', 'Brochure'],
              ['/inquiry', 'Inquiry'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-[rgba(245,240,232,0.7)] hover:text-[var(--gold)] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="hairline text-[var(--gold)] mb-5">Reach Us</h4>
          <ul className="space-y-3 text-sm text-[rgba(245,240,232,0.8)]">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[var(--gold)]" /> 70195 49787
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[var(--gold)]" /> info@adornodesigners.com
            </li>
            <li className="flex items-center gap-3">
              <Globe size={14} className="text-[var(--gold)]" /> www.adornodesigners.in
            </li>
          </ul>
        </div>

        <div>
          <h4 className="hairline text-[var(--gold)] mb-5">Locations</h4>
          <ul className="space-y-4 text-sm text-[rgba(245,240,232,0.7)]">
            <li className="flex gap-3">
              <MapPin size={14} className="text-[var(--gold)] mt-1 shrink-0" />
              <span>
                <span className="block text-[rgba(245,240,232,0.9)] mb-1">Office</span>
                Shop no.1, Plot no.28 Namitha Nilaya Sai Nagar, Neralur Village, Bengaluru Urban,
                Karnataka — 562017
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin size={14} className="text-[var(--gold)] mt-1 shrink-0" />
              <span>
                <span className="block text-[rgba(245,240,232,0.9)] mb-1">Storage</span>
                Ground Floor, Old Survey No. 77/8, New Survey No. 77/9, Kazaba Hobli,
                Vanakanahalli, Bengaluru Urban — 562106
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted-foreground)]">
        <p>© {new Date().getFullYear()} Adorno Designers. All rights reserved.</p>
        <p className="hairline text-[rgba(197,161,74,0.7)]">
          Style · Strength · Sustainability · Innovation
        </p>
      </div>
    </footer>
  )
}
