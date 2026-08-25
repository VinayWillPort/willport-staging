import './globals.css'
import { statSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import { ReviewProvider } from '@/lib/review'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WILLPORT — Staging',
  // Change sheet §8.3: staging must be noindex. Removed only on the approved production page.
  robots: { index: false, follow: false, nocache: true },
}

// Cache-bust the override sheet on every change, so a stale browser copy can never
// mask a fix. Read at build time from the file itself.
const cssVersion = (() => {
  try { return String(Math.floor(statSync(join(process.cwd(), 'public/wp-css/zz-willport-overrides.css')).mtimeMs)) }
  catch { return '0' }
})()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* WordPress / Elementor cascade, vendored verbatim from willport.com and loaded
            in the same order, so styled sections render identically rather than approximately. */}
        <link rel="stylesheet" href="/wp-css/reset.css" />
        <link rel="stylesheet" href="/wp-css/theme.css" />
        <link rel="stylesheet" href="/wp-css/header-footer.css" />
        <link rel="stylesheet" href="/wp-css/frontend.min.css" />
        <link rel="stylesheet" href="/wp-css/post-6.css" />
        <link rel="stylesheet" href="/wp-css/widget-image.min.css" />
        <link rel="stylesheet" href="/wp-css/widget-nav-menu.min.css" />
        <link rel="stylesheet" href="/wp-css/e-animation-shrink.min.css" />
        <link rel="stylesheet" href="/wp-css/widget-social-icons.min.css" />
        <link rel="stylesheet" href="/wp-css/apple-webkit.min.css" />
        <link rel="stylesheet" href="/wp-css/widget-heading.min.css" />
        <link rel="stylesheet" href="/wp-css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/wp-css/widget-icon-box.min.css" />
        <link rel="stylesheet" href="/wp-css/post-27.css" />
        <link rel="stylesheet" href="/wp-css/post-380.css" />
        <link rel="stylesheet" href="/wp-css/post-73.css" />
        {/* Loaded last so our overrides actually win the cascade. */}
        <link rel="stylesheet" href={`/wp-css/zz-willport-overrides.css?v=${cssVersion}`} />
      </head>
      <body className="wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page">
        <ReviewProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReviewProvider>
      </body>
    </html>
  )
}
