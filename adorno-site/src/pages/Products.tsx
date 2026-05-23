import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/site/SectionHeading'
import productSliding from '@/assets/product-sliding.jpg'
import productCasement from '@/assets/product-casement.jpg'
import productTilt from '@/assets/product-tilt.jpg'
import productVilla from '@/assets/product-villa.jpg'
import productUpvc from '@/assets/product-upvc.jpg'
import productInterior from '@/assets/product-interior.jpg'

const categories = [
  {
    id: 'upvc',
    title: 'uPVC Windows',
    img: productUpvc,
    intro: 'Multi-chambered profiles engineered for superior thermal & acoustic insulation.',
    specs: [
      'Multi-chambered uPVC compound',
      'Galvanized steel reinforcement',
      'EPDM weather seals',
      'Up to 40 dB sound reduction',
    ],
  },
  {
    id: 'sliding',
    title: 'Sliding Doors & Systems',
    img: productSliding,
    intro: 'Smooth, strong and space-saving — ideal for balconies, patios and panoramic openings.',
    specs: [
      'Effortless smooth glide',
      'Wide unobstructed views',
      'Heavy-duty rollers',
      'Up to 4-track configurations',
    ],
  },
  {
    id: 'casement',
    title: 'Casement Windows',
    img: productCasement,
    intro: 'European casement design with refined detailing and multi-point locking.',
    specs: [
      'Multi-point security locking',
      'Concealed hinges available',
      'Slim sightlines',
      'Custom RAL finishes',
    ],
  },
  {
    id: 'tilt-turn',
    title: 'Tilt & Turn Systems',
    img: productTilt,
    intro: 'Tilt for secure ventilation. Turn for full opening and easy cleaning.',
    specs: [
      'Dual-action hardware',
      'Safe ventilation mode',
      'Inward opening for cleaning',
      'Ideal for high-rises',
    ],
  },
  {
    id: 'villa',
    title: 'Villa Glass Systems',
    img: productVilla,
    intro:
      'Floor-to-ceiling glazing for architectural villas, infinity facades and pool elevations.',
    specs: [
      'Large-format glazing',
      'Concealed drainage',
      'Structural reinforcement',
      'Custom geometry',
    ],
  },
  {
    id: 'interior',
    title: 'Interior Glazing',
    img: productInterior,
    intro:
      'Frameless partitions and luxury interior glass that sculpt light through living spaces.',
    specs: [
      'Frameless designs',
      'Toughened safety glass',
      'Sliding & pivot options',
      'Acoustic glass available',
    ],
  },
]

export default function Products() {
  return (
    <div className="pt-32">
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Catalogue</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Premium uPVC systems.
            <br />
            <span className="shimmer-gold">Engineered for excellence.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
            Every Adorno system is a study in precision — multi-chambered profiles, galvanized
            reinforcement, weather-tight seals and hardware engineered for a lifetime of operation.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {categories.map((c, i) => (
            <div
              key={c.id}
              id={c.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="group relative overflow-hidden rounded-sm border border-[rgba(197,161,74,0.15)]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full aspect-[4/3] object-cover transition duration-[1200ms] group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,7,5,0.7)] to-transparent" />
                <div className="absolute top-5 left-5 hairline text-[var(--gold)] glass px-3 py-2 rounded-sm">
                  0{i + 1}
                </div>
              </div>
              <div>
                <SectionHeading
                  eyebrow={`Category 0${i + 1}`}
                  title={c.title}
                  subtitle={c.intro}
                />
                <ul className="mt-8 space-y-3">
                  {c.specs.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <Check size={16} className="text-[var(--gold)] mt-1 shrink-0" />
                      <span className="text-[rgba(245,240,232,0.85)]">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/inquiry"
                    className="inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold"
                  >
                    Enquire <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/brochure"
                    className="inline-flex items-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
                  >
                    Brochure
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
