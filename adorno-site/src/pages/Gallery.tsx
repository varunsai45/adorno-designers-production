import { useState } from 'react'
import { X } from 'lucide-react'
import g1 from '@/assets/gallery-1.jpg'
import g2 from '@/assets/gallery-2.jpg'
import g3 from '@/assets/gallery-3.jpg'
import g4 from '@/assets/gallery-4.jpg'
import g5 from '@/assets/gallery-5.jpg'
import g6 from '@/assets/gallery-6.jpg'
import pSliding from '@/assets/product-sliding.jpg'
import pVilla from '@/assets/product-villa.jpg'
import pInterior from '@/assets/product-interior.jpg'

const images = [
  { src: g1, alt: 'Modern villa facade with full-height glazing', h: 'tall' },
  { src: g2, alt: 'Penthouse living with panoramic sliding doors', h: 'short' },
  { src: pSliding, alt: 'Premium black uPVC sliding system detail', h: 'tall' },
  { src: g4, alt: 'Bedroom with gable glass wall and city view', h: 'tall' },
  { src: g3, alt: 'Architectural rain detail on black frame', h: 'short' },
  { src: pVilla, alt: 'Luxury villa with pool reflection', h: 'tall' },
  { src: g5, alt: 'Stone villa with pool glazing', h: 'short' },
  { src: pInterior, alt: 'Frameless interior glass partition', h: 'tall' },
  { src: g6, alt: 'Luxury double staircase with glazing', h: 'tall' },
]

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="pt-32">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Visual Archive</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Light, glass
            <br />
            <span className="shimmer-gold">&amp; architectural intent.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(img.src)}
                className="group block w-full overflow-hidden rounded-sm border border-[rgba(197,161,74,0.1)] break-inside-avoid relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-[1200ms] group-hover:scale-110 ${
                    img.h === 'tall' ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,7,5,0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="hairline text-[var(--gold)]">View</div>
                  <div className="text-sm text-[var(--foreground)] mt-1 line-clamp-2">{img.alt}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.9)] backdrop-blur-xl grid place-items-center p-4 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-[var(--gold)] p-2"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={active}
            alt="Preview"
            className="max-h-[90vh] max-w-[92vw] rounded-sm shadow-gold-lg border border-[rgba(197,161,74,0.2)]"
          />
        </div>
      )}
    </div>
  )
}
