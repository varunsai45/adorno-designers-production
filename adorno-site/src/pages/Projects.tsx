import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/site/SectionHeading'
import g1 from '@/assets/gallery-1.jpg'
import g4 from '@/assets/gallery-4.jpg'
import g5 from '@/assets/gallery-5.jpg'
import g6 from '@/assets/gallery-6.jpg'
import pVilla from '@/assets/product-villa.jpg'
import pInterior from '@/assets/product-interior.jpg'

const projects = [
  {
    t: 'Villa Aurelius',
    l: 'Whitefield, Bengaluru',
    c: 'Full-height sliding facade across 4,200 sq.ft elevation.',
    img: g1,
  },
  {
    t: 'Skyline Penthouse',
    l: 'MG Road, Bengaluru',
    c: 'Acoustic gable glazing for a 32nd-floor private residence.',
    img: g4,
  },
  {
    t: 'Lake House Noir',
    l: 'Devanahalli',
    c: 'Black-framed villa glazing wrapping a private courtyard pool.',
    img: g5,
  },
  {
    t: 'Atelier Pavilion',
    l: 'Sarjapur Road',
    c: 'Curved glass entry with sculptural double-stair atrium.',
    img: g6,
  },
  {
    t: 'The Glass Manor',
    l: 'Yelahanka',
    c: 'Tilt & turn systems across 28 rooms of a private estate.',
    img: pVilla,
  },
  {
    t: 'Studio Lumen',
    l: 'Indiranagar',
    c: 'Frameless interior glazing dividing studio and lounge.',
    img: pInterior,
  },
]

export default function Projects() {
  return (
    <div className="pt-32">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Selected Works</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Architecture, framed
            <br />
            <span className="shimmer-gold">in light &amp; precision.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
            A curated portfolio of luxury villas, penthouses and architectural projects entrusted to
            Adorno.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.t}
              className={`group grid lg:grid-cols-12 gap-6 items-stretch ${
                i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-7 relative overflow-hidden rounded-sm border border-[rgba(197,161,74,0.15)]">
                <img
                  src={p.img}
                  alt={p.t}
                  className="w-full h-full aspect-[16/10] object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,7,5,0.4)] via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center glass rounded-sm p-8 md:p-10">
                <div className="hairline text-[var(--gold)] mb-4">Project · 0{i + 1}</div>
                <h2 className="font-display text-3xl md:text-4xl mb-4">{p.t}</h2>
                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-4">
                  <MapPin size={14} className="text-[var(--gold)]" /> {p.l}
                </div>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{p.c}</p>
                <Link
                  to="/inquiry"
                  className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)] w-fit hover:gap-4 transition-all"
                >
                  Discuss your project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Begin Together"
            title="Bring your vision to the Adorno atelier."
            center
          />
          <Link
            to="/inquiry"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold-lg"
          >
            Start an Enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
