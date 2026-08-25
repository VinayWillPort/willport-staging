import Link from 'next/link'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'WILLPORTtrust', href: '/willporttrust' },
  { label: 'WILLPORTapp', href: '/willport' },
  { label: 'WILLPORTvouchers', href: '/willportvouchers' },
  { label: 'About', href: '/about' },
  { label: "FAQ's", href: 'https://willport.zendesk.com/hc/en-us', external: true },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Footer() {
  // Change sheet §9 GLOBAL FIX: live site hard-codes "© 2025". Now dynamic.
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-site px-5 py-10">
        <img src="/img/logo.svg" alt="WILLPORT" className="h-9 w-auto" />
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((n) =>
            n.external ? (
              <a key={n.label} href={n.href} className="text-[14px] text-black hover:text-brand">{n.label}</a>
            ) : (
              <Link key={n.label} href={n.href} className="text-[14px] text-black hover:text-brand">{n.label}</Link>
            ),
          )}
        </nav>
        <div className="mt-6 flex gap-4">
          <a href="https://www.facebook.com/willporttrust/" className="text-[14px] text-black/70 hover:text-brand">Facebook</a>
          <a href="https://www.instagram.com/willport_/?hl=en" className="text-[14px] text-black/70 hover:text-brand">Instagram</a>
          <a href="https://www.linkedin.com/company/willporttrust/" className="text-[14px] text-black/70 hover:text-brand">Linkedin</a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-black/10 pt-5 text-[13px] text-black/60">
          <span>© {year} WILLPORT Holdings, Inc. All rights reserved.</span>
          <span aria-hidden>·</span>
          <Link href="/privacy" className="hover:text-brand">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link href="/terms-and-conditions" className="hover:text-brand">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
