import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/site/SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="pt-32">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Get in Touch</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Let's frame
            <br />
            <span className="shimmer-gold">your next project.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a
              href="tel:+917019549787"
              className="flex items-start gap-5 glass rounded-sm p-6 hover-lift group"
            >
              <Phone className="text-[var(--gold)]" size={22} />
              <div>
                <div className="hairline text-[var(--gold)] mb-1">Call Now</div>
                <div className="font-display text-2xl text-[var(--foreground)]">
                  +91 70195 49787
                </div>
              </div>
              <ArrowRight className="ml-auto text-[var(--gold)] opacity-0 group-hover:opacity-100 transition" />
            </a>

            <a
              href="mailto:info@adornodesigners.com"
              className="flex items-start gap-5 glass rounded-sm p-6 hover-lift group"
            >
              <Mail className="text-[var(--gold)]" size={22} />
              <div>
                <div className="hairline text-[var(--gold)] mb-1">Email</div>
                <div className="font-display text-xl text-[var(--foreground)] break-all">
                  info@adornodesigners.com
                </div>
              </div>
              <ArrowRight className="ml-auto text-[var(--gold)] opacity-0 group-hover:opacity-100 transition" />
            </a>

            <a
              href="https://www.adornodesigners.in"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-5 glass rounded-sm p-6 hover-lift group"
            >
              <Globe className="text-[var(--gold)]" size={22} />
              <div>
                <div className="hairline text-[var(--gold)] mb-1">Website</div>
                <div className="font-display text-xl text-[var(--foreground)]">
                  www.adornodesigners.in
                </div>
              </div>
              <ArrowRight className="ml-auto text-[var(--gold)] opacity-0 group-hover:opacity-100 transition" />
            </a>

            <a
              href="https://wa.me/917019549787"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-5 rounded-sm p-6 hover-lift group bg-gold-gradient text-[var(--primary-foreground)]"
            >
              <MessageCircle size={22} />
              <div>
                <div className="hairline opacity-80 mb-1">WhatsApp</div>
                <div className="font-display text-xl">Chat with our team</div>
              </div>
              <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition" />
            </a>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="glass rounded-sm p-6">
                <MapPin className="text-[var(--gold)] mb-3" size={20} />
                <div className="hairline text-[var(--gold)] mb-2">Office</div>
                <p className="text-sm text-[rgba(245,240,232,0.8)] leading-relaxed">
                  Shop no.1, Plot no.28 Namitha Nilaya Sai Nagar, Neralur Village, Bengaluru Urban,
                  Karnataka — 562017
                </p>
              </div>
              <div className="glass rounded-sm p-6">
                <MapPin className="text-[var(--gold)] mb-3" size={20} />
                <div className="hairline text-[var(--gold)] mb-2">Storage Unit</div>
                <p className="text-sm text-[rgba(245,240,232,0.8)] leading-relaxed">
                  Ground Floor, Old Survey No. 77/8, New Survey No. 77/9, Kazaba Hobli,
                  Vanakanahalli, Bengaluru Urban — 562106
                </p>
              </div>
            </div>
          </div>

          <div>
            <form
              className="glass rounded-sm p-8 md:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="hairline text-[var(--gold)]">Send a Message</div>
              <h3 className="font-display text-3xl">We'll respond within 24 hours.</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  className="bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition text-[var(--foreground)]"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition text-[var(--foreground)]"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition text-[var(--foreground)]"
              />
              <input
                placeholder="Project Location"
                className="w-full bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition text-[var(--foreground)]"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your project…"
                className="w-full bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition resize-none text-[var(--foreground)]"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-sm bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold"
              >
                {sent ? 'Message Sent' : 'Send Enquiry'} <ArrowRight size={14} />
              </button>
              <p className="text-xs text-[var(--muted-foreground)] text-center">
                Prefer a detailed brief?{' '}
                <Link to="/inquiry" className="text-[var(--gold)] underline">
                  Use our full inquiry form
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Find Us" title="Visit our Bengaluru atelier." />
          <div className="mt-10 rounded-sm overflow-hidden border border-[rgba(197,161,74,0.15)] shadow-elegant aspect-[16/9]">
            <iframe
              title="Adorno Designers Office Location"
              src="https://www.google.com/maps?q=Neralur+Village+Bengaluru+562017&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
