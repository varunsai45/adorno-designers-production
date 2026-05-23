# Adorno Designers — Luxury uPVC Windows & Doors

A pixel-perfect rebuild of [adornodesigners-in.lovable.app](https://adornodesigners-in.lovable.app) using **React + Vite + Tailwind CSS**.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS v3** for utility-first styling
- **React Router DOM v6** for client-side routing
- **Lucide React** for icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no config needed
4. The `vercel.json` handles SPA routing

### Netlify

Create a `_redirects` file in `public/`:
```
/* /index.html 200
```

## Project Structure

```
src/
├── assets/          # Images (jpg/jpeg)
├── components/
│   └── site/
│       ├── GoldParticles.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SectionHeading.tsx
│       └── WhatsAppFab.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Gallery.tsx
│   ├── Projects.tsx
│   ├── Brochure.tsx
│   ├── Contact.tsx
│   ├── Inquiry.tsx
│   └── NotFound.tsx
├── App.tsx
├── main.tsx
└── index.css       # Design tokens + custom utilities
public/
└── brochure/
    └── adorno-designers-brochure.pdf
```

## Design System

**Colors (CSS Variables)**
- `--gold`: `#c5a14a` — Primary brand gold
- `--gold-bright`: `#e8c96a` — Highlight gold
- `--gold-deep`: `#8a6f2e` — Deep gold
- `--background`: `#0d0b08` — Near-black background
- `--onyx`: `#080705` — Section backgrounds
- `--charcoal`: `#1a1712` — Card hover state

**Typography**
- Display: `Cinzel` (serif) — headings, logo
- Body: `Montserrat` (sans-serif) — paragraphs, UI

**Custom Utilities**
- `.shimmer-gold` — animated gold shimmer text
- `.glass` — glassmorphism effect
- `.gold-divider` — horizontal gold gradient line
- `.hover-lift` — lift + gold glow on hover
- `.hairline` — ultra-spaced uppercase label text
- `.animate-fade-up` — fade-in-from-bottom animation
- `.animate-pulse-glow` — pulsing gold glow (WhatsApp FAB)
- `.particle` — floating particle animation
