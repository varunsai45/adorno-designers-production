import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold-gradient">404</h1>
        <h2 className="mt-4 font-display text-xl text-[var(--foreground)]">Page not found</h2>
        <p className="mt-3 text-sm text-[var(--muted-foreground)]">
          The page you are looking for has been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-foreground)] shadow-gold"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
