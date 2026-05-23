import { MessageCircle } from 'lucide-react'

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917019549787?text=Hello%20Adorno%20Designers%2C%20I%27d%20like%20to%20enquire%20about%20your%20uPVC%20systems."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-gold-gradient text-[var(--primary-foreground)] shadow-gold-lg animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} />
    </a>
  )
}
