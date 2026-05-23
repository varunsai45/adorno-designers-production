import { Download, FileText, Check } from 'lucide-react'
import { SectionHeading } from '@/components/site/SectionHeading'

export default function Brochure() {
  return (
    <div className="pt-32">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">The Catalogue</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            The Adorno
            <br />
            <span className="shimmer-gold">Brochure</span>
          </h1>
          <p className="mt-6 max-w-xl text-[var(--muted-foreground)]">
            Specifications, profiles, finishes and architectural references — curated in a single
            download.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 relative group">
            <div className="absolute -inset-6 bg-[rgba(197,161,74,0.1)] blur-3xl -z-10" />
            <div className="relative rounded-sm overflow-hidden border border-[rgba(197,161,74,0.2)] shadow-elegant bg-black aspect-[3/4]">
              <iframe
                title="Adorno Designers Brochure Preview"
                src="/brochure/adorno-designers-brochure.pdf#toolbar=0&navpanes=0&view=FitH"
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-[rgba(197,161,74,0.15)]" />
            </div>
          </div>

          <div className="lg:col-span-2 glass rounded-sm p-8 md:p-10 sticky top-32">
            <FileText className="text-[var(--gold)] mb-5" size={28} />
            <SectionHeading title="Download the full PDF." />
            <ul className="mt-7 space-y-3 text-sm">
              {[
                'Complete product specifications',
                'Profile cross-sections & finishes',
                'Performance & sustainability data',
                'Architectural reference projects',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={16} className="text-[var(--gold)] mt-1" />
                  <span className="text-[rgba(245,240,232,0.85)]">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="/brochure/adorno-designers-brochure.pdf"
              download
              className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold-lg"
            >
              <Download size={14} /> Download Brochure
            </a>
            <a
              href="/brochure/adorno-designers-brochure.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
