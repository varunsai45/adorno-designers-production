import { SectionHeading } from '@/components/site/SectionHeading'
import { Award, Leaf, Hammer, Building2 } from 'lucide-react'
import craft from '@/assets/about-craft.jpg'

export default function About() {
  return (
    <div className="pt-32">
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Our Atelier</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            We don't just manufacture windows.
            <br />
            <span className="shimmer-gold">We frame lasting impressions.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--muted-foreground)] leading-relaxed">
            At Adorno Designers, every space deserves the perfect balance of comfort, safety and
            elegance. Our premium uPVC systems are designed to complement contemporary architecture
            while delivering extraordinary performance for modern luxury lifestyles.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-[rgba(197,161,74,0.1)] blur-3xl -z-10" />
            <img
              src={craft}
              alt="Adorno Designers manufacturing facility"
              className="rounded-sm border border-[rgba(197,161,74,0.15)] shadow-elegant"
              loading="lazy"
              width={1600}
              height={1080}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The Philosophy"
              title="Refined craftsmanship, advanced technology."
            />
            <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
              Combining European engineering with refined Indian craftsmanship, we create solutions
              that offer exceptional durability, weather resistance, thermal efficiency and noise
              insulation. Every product is precision-engineered for long-lasting strength, effortless
              maintenance and enhanced security — without compromising on style.
            </p>
            <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
              From luxurious residences to sophisticated commercial environments, our uPVC systems
              elevate interiors with clean aesthetics, natural light and seamless functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Pillars" title="Four principles. Every frame." center />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(197,161,74,0.1)] rounded-sm overflow-hidden border border-[rgba(197,161,74,0.1)]">
            {[
              {
                i: Award,
                t: 'Style',
                d: 'Architectural detailing, slim sightlines and bespoke finishes for design-led homes.',
              },
              {
                i: Hammer,
                t: 'Strength',
                d: 'Galvanized steel reinforcement, multi-point hardware and tested durability.',
              },
              {
                i: Leaf,
                t: 'Sustainability',
                d: 'Lead-free, 100% recyclable systems engineered for energy efficiency.',
              },
              {
                i: Building2,
                t: 'Innovation',
                d: 'Continuous investment in profile geometry, sealing and hardware technology.',
              },
            ].map((p) => (
              <div
                key={p.t}
                className="bg-[var(--card)] p-10 group hover:bg-[var(--charcoal)] transition-colors"
              >
                <p.i className="text-[var(--gold)] mb-6" size={28} strokeWidth={1.3} />
                <h3 className="font-display text-xl mb-3">{p.t}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
