import { useState } from 'react'
import { ArrowRight, Upload, MessageCircle, Mail, Check } from 'lucide-react'
import { SectionHeading } from '@/components/site/SectionHeading'

const productOptions = [
  'uPVC Windows',
  'Sliding Doors & Systems',
  'Casement Windows',
  'Tilt & Turn Systems',
  'Villa Glass Systems',
  'Interior Glazing',
  'Custom / Other',
]

const inputCls =
  'w-full bg-transparent border border-[rgba(197,161,74,0.2)] rounded-sm px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition'

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="hairline text-[var(--gold)] mb-2 block">
        {label}
        {required && <span className="text-[rgba(197,161,74,0.6)]"> *</span>}
      </span>
      {children}
    </label>
  )
}

export default function Inquiry() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    product: productOptions[0],
    budget: '',
    timeline: '',
    message: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [sent, setSent] = useState(false)

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const whatsappLink = () => {
    const text = `*New Inquiry — Adorno Designers*%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ACompany: ${form.company}%0ALocation: ${form.location}%0AProduct: ${form.product}%0ABudget: ${form.budget}%0ATimeline: ${form.timeline}%0AMessage: ${form.message}`
    return `https://wa.me/917019549787?text=${text}`
  }

  const mailtoLink = () => {
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\nLocation: ${form.location}\nProduct: ${form.product}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\n${form.message}`
    return `mailto:info@adornodesigners.com?subject=${encodeURIComponent('New Inquiry — ' + form.name)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="pt-32">
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="hairline text-[var(--gold)] mb-5">Project Inquiry</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Tell us about
            <br />
            <span className="shimmer-gold">your project.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--muted-foreground)]">
            Share your specifications, drawings and preferences. Our atelier will respond with a
            tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <form
            className="glass rounded-sm p-8 md:p-12 space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input required value={form.name} onChange={set('name')} className={inputCls} />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  className={inputCls}
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  className={inputCls}
                />
              </Field>
              <Field label="Company / Studio">
                <input value={form.company} onChange={set('company')} className={inputCls} />
              </Field>
              <Field label="Project Location">
                <input value={form.location} onChange={set('location')} className={inputCls} />
              </Field>
              <Field label="Product Category">
                <select
                  value={form.product}
                  onChange={set('product')}
                  className={inputCls}
                  style={{ background: 'var(--onyx)' }}
                >
                  {productOptions.map((o) => (
                    <option key={o} style={{ background: 'var(--onyx)' }}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Approx. Budget (₹)">
                <input
                  value={form.budget}
                  onChange={set('budget')}
                  placeholder="e.g. 5L – 15L"
                  className={inputCls}
                />
              </Field>
              <Field label="Timeline">
                <input
                  value={form.timeline}
                  onChange={set('timeline')}
                  placeholder="e.g. 2–3 months"
                  className={inputCls}
                />
              </Field>
            </div>

            <Field label="Project Brief">
              <textarea
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us about the property, configuration, finishes…"
                className={`${inputCls} resize-none`}
              />
            </Field>

            <div>
              <div className="hairline text-[var(--gold)] mb-2">Upload Drawings / Reference</div>
              <label className="flex items-center justify-between gap-4 border border-dashed border-[rgba(197,161,74,0.3)] rounded-sm px-4 py-4 cursor-pointer hover:border-[var(--gold)] transition">
                <span className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                  <Upload size={16} className="text-[var(--gold)]" />
                  {file ? file.name : 'PDF, DWG, JPG or PNG (max 10 MB)'}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Browse</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  accept=".pdf,.dwg,.jpg,.jpeg,.png"
                />
              </label>
            </div>

            {sent && (
              <div className="flex items-center gap-3 rounded-sm bg-[rgba(197,161,74,0.15)] border border-[rgba(197,161,74,0.3)] px-4 py-3 text-sm text-[var(--gold)]">
                <Check size={16} /> Thanks — your details are ready. Choose how to send below.
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-gold-gradient px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-foreground)] shadow-gold"
              >
                Submit <ArrowRight size={14} />
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={mailtoLink()}
                className="inline-flex items-center justify-center gap-3 rounded-sm border border-[rgba(197,161,74,0.3)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </form>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Or Reach Directly"
              title="+91 70195 49787"
              subtitle="info@adornodesigners.com"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
