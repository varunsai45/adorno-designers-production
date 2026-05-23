/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: 'var(--gold)',
        'gold-bright': 'var(--gold-bright)',
        'gold-deep': 'var(--gold-deep)',
        charcoal: 'var(--charcoal)',
        onyx: 'var(--onyx)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
      },
      boxShadow: {
        gold: 'var(--shadow-gold)',
        'gold-lg': 'var(--shadow-gold-lg)',
        elegant: 'var(--shadow-elegant)',
        'glow-gold': 'var(--glow-gold)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '50%': { transform: 'translateY(-40px) translateX(20px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(197, 161, 86, 0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(197, 161, 86, 0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        particle: 'float-particle 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'pulse-glow': 'pulse-glow 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
