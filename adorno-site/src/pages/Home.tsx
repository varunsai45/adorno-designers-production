import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Volume2,
  Leaf,
  Thermometer,
  Sparkles,
  Star,
} from 'lucide-react'
import heroVilla from '@/assets/hero-villa.jpg'
import productSliding from '@/assets/product-sliding.jpg'
import productCasement from '@/assets/product-casement.jpg'
import productTilt from '@/assets/product-tilt.jpg'
import productVilla from '@/assets/product-villa.jpg'
import productUpvc from '@/assets/product-upvc.jpg'
import productInterior from '@/assets/product-interior.jpg'
import galleryVilla from '@/assets/gallery-1.jpg'
import { SectionHeading } from '@/components/site/SectionHeading'
import { GoldParticles } from '@/components/site/GoldParticles'

const products = [
  {
    title: 'uPVC Windows',
    desc: 'Multi-chambered profiles engineered for thermal & acoustic excellence.',
    img: productUpvc,
    slug: 'upvc-windows',
  },
  {
    title: 'Sliding Systems',
    desc: 'Effortless wide-aperture sliders for panoramic villa openings.',
    img: productSliding,
    slug: 'sliding',
  },
  {
    title: 'Casement Windows',
    desc: 'Classic European casement design with multi-point locking.',
    img: productCasement,
    slug: 'casement',
  },
  {
    title: 'Tilt & Turn',
    desc: 'Dual-function ventilation and full-open access in a single frame.',
    img: productTilt,
    slug: 'tilt-turn',
  },
  {
    title: 'Villa Glazing',
    desc: 'Floor-to-ceiling glass facades for architectural statements.',
    img: productVilla,
    slug: 'villa',
  },
  {
    title: 'Interior Glazing',
    desc: 'Frameless partitions that sculpt light through luxury interiors.',
    img: productInterior,
    slug: 'interior',
  },
]

const stats = [
  { v: '12+', l: 'Years of Craft' },
  { v: '450+', l: 'Villas Delivered' },
  { v: '98%', l: 'Client Retention' },
  { v: '40 dB', l: 'Acoustic Reduction' },
]

const features = [
  {
    icon: Thermometer,
    t: 'Thermal Efficiency',
    d: 'Multi-chamber profiles maintain ideal indoor temperatures and reduce energy load.',
  },
  {
    icon: Volume2,
    t: 'Sound Insulation',
    d: 'Sealed assemblies suppress up to 40 dB of urban noise for a serene interior.',
  },
  {
    icon: ShieldCheck,
    t: 'Security & Durability',
    d: 'Galvanized reinforcement and multi-point locking for absolute peace of mind.',
  },
  {
    icon: Leaf,
    t: 'Eco-Friendly',
    d: 'Lead-free, 100% recyclable systems engineered for a sustainable future.',
  },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroVilla}
            alt="Luxury villa with premium uPVC glazing at twilight"
            className="h-full w-full object-cover scale-105"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[rgba(13,11,8,0.85)] to-[rgba(13,11,8,0.3)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[rgba(13,11,8,0.6)]" />
        </div>
        <GoldParticles count={20} />

        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-7">
              <span className="gold-divider-short" />
              <span className="hairline text-[var(--gold)]">Adorno Designers · Est. Bengaluru</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
              Style, Strength
              <br />
              <span className="shimmer-gold">&amp; Sustainability</span>
              <br />
              <span className="text-[rgba(245,240,232,0.85)]">in every frame.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[var(--muted-foreground)] leading-relaxed">
              Premium uPVC windows, sliding systems and villa glazing — engineered with European
              precision for India's most discerning architects and homeowners.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold-lg hover:shadow-gold-lg transition-all"
              >
                Explore Systems
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/brochure"
                className="inline-flex items-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] bg-[rgba(0,0,0,0.3)] backdrop-blur px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition-all"
              >
                <Download size={14} /> Brochure
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-gold-gradient">{s.v}</div>
                  <div className="hairline text-[var(--muted-foreground)] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hairline text-[var(--muted-foreground)] hidden md:block">
          ↓ Scroll
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Premium Systems"
            title="Engineered for architectural excellence"
            subtitle="Every Adorno frame is a study in precision — from multi-chambered uPVC profiles to galvanized reinforcement and weather-tight seals."
            center
          />

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                to="/products"
                className="group relative overflow-hidden rounded-sm border border-[rgba(197,161,74,0.1)] hover-lift bg-[var(--card)]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    loading="lazy"
                    width={1280}
                    height={1280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--onyx)] via-[rgba(8,7,5,0.6)] to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                    style={{ background: 'var(--gradient-radial-gold)' }}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="hairline text-[var(--gold)] mb-2">0{i + 1}</div>
                  <h3 className="font-display text-2xl text-[var(--foreground)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                    Discover{' '}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VILLA SHOWCASE */}
      <section className="relative py-32 bg-[var(--onyx)]">
        <div className="gold-divider absolute top-0 inset-x-0" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[rgba(197,161,74,0.1)] blur-3xl -z-10" />
            <img
              src={galleryVilla}
              alt="Luxury villa with full-height uPVC glazing"
              className="rounded-sm shadow-elegant border border-[rgba(197,161,74,0.15)]"
              loading="lazy"
              width={1280}
              height={1600}
            />
            <div className="absolute -bottom-6 -right-6 glass rounded-sm p-5 hidden md:block">
              <Sparkles className="text-[var(--gold)] mb-2" size={20} />
              <div className="font-display text-lg text-[var(--foreground)]">Villa Atelier</div>
              <div className="hairline text-[var(--muted-foreground)]">Signature Glazing</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The Adorno Villa"
              title="A canvas of light, framed in precision."
              subtitle="From private residences in Whitefield to architectural villas across Karnataka, our systems frame the way light, air and silence move through luxury homes."
            />
            <div className="mt-10 space-y-5">
              {[
                'Floor-to-ceiling glazing with concealed drainage',
                'Slim sightlines and matte-black finish profiles',
                'Custom geometry — arches, corners, pivot openings',
                'On-site survey, fabrication and white-glove installation',
              ].map((b) => (
                <div key={b} className="flex items-start gap-4">
                  <span className="mt-2 h-px w-8 bg-[var(--gold)] shrink-0" />
                  <p className="text-[rgba(245,240,232,0.85)] leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <Link
              to="/projects"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)] hover:gap-4 transition-all"
            >
              View Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Adorno"
            title="Treading ahead with superior craftsmanship."
            center
          />
          <div className="mt-20 grid gap-px bg-[rgba(197,161,74,0.1)] md:grid-cols-2 lg:grid-cols-4 rounded-sm overflow-hidden border border-[rgba(197,161,74,0.1)]">
            {features.map((f) => (
              <div
                key={f.t}
                className="relative bg-[var(--card)] p-10 group hover:bg-[var(--charcoal)] transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-gold-gradient group-hover:w-full transition-all duration-700" />
                <f.icon
                  className="text-[var(--gold)] mb-6"
                  size={28}
                  strokeWidth={1.3}
                />
                <h3 className="font-display text-xl mb-3 text-[var(--foreground)]">{f.t}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 bg-[var(--onyx)] overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: 'var(--gradient-radial-gold)' }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted by architects & homeowners."
            center
          />
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                q: 'The glazing transformed how light moves through the villa. Detailing is impeccable.',
                n: 'Arjun Mehta',
                r: 'Principal Architect, Studio AM',
              },
              {
                q: 'Silent, secure and beautiful. Adorno delivered everything they promised — on time.',
                n: 'Priya Rao',
                r: 'Homeowner, Sarjapur',
              },
              {
                q: 'Their tilt & turn systems are a notch above anything else available in this market.',
                n: 'Rohan Iyer',
                r: 'Director, Iyer Builders',
              },
            ].map((t) => (
              <div key={t.n} className="glass rounded-sm p-8 hover-lift">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[var(--gold)] text-[var(--gold)]"
                    />
                  ))}
                </div>
                <p className="text-[rgba(245,240,232,0.85)] leading-relaxed italic">"{t.q}"</p>
                <div className="mt-6 pt-5 border-t border-[rgba(197,161,74,0.1)]">
                  <div className="font-display text-base text-[var(--foreground)]">{t.n}</div>
                  <div className="hairline text-[var(--gold)] mt-1">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / BROCHURE */}
      <section className="relative py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-sm border border-[rgba(197,161,74,0.2)] p-12 md:p-20 text-center glass-strong">
            <GoldParticles count={12} />
            <div className="hairline text-[var(--gold)] mb-6">The Adorno Brochure</div>
            <h2 className="font-display text-4xl md:text-6xl">
              <span className="shimmer-gold">A complete catalogue</span>
              <br />
              <span className="text-[var(--foreground)]">of luxury uPVC systems.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-[var(--muted-foreground)]">
              Specifications, profiles, finishes and architectural references — curated in a single
              download.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/brochure"
                className="inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold-lg"
              >
                <Download size={14} /> Download Brochure
              </Link>
              <Link
                to="/inquiry"
                className="inline-flex items-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
