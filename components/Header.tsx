'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'WILLPORTtrust', href: '/willporttrust' },
  { label: 'WILLPORTapp', href: '/willport' },
  { label: 'WILLPORTvouchers', href: '/willportvouchers' },
  { label: 'About', href: '/about' },
  { label: "FAQ's", href: 'https://willport.zendesk.com/hc/en-us', external: true },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4">
        <Link href="/" aria-label="WILLPORT home">
          <img src="/img/logo.svg" alt="WILLPORT" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) =>
            n.external ? (
              <a key={n.label} href={n.href} className="text-[15px] text-black hover:text-brand">
                {n.label}
              </a>
            ) : (
              <Link key={n.label} href={n.href} className="text-[15px] text-black hover:text-brand">
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 lg:hidden">
          <div className="mx-auto max-w-site px-5 py-2">
            {NAV.map((n) =>
              n.external ? (
                <a key={n.label} href={n.href} className="block py-2.5 text-[15px]">{n.label}</a>
              ) : (
                <Link key={n.label} href={n.href} onClick={() => setOpen(false)} className="block py-2.5 text-[15px]">
                  {n.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
