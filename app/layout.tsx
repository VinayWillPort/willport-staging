import './globals.css'
import type { Metadata } from 'next'
import { ReviewProvider } from '@/lib/review'
import ViewToggle from '@/components/ViewToggle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WILLPORT — Staging',
  // Change sheet §8.3: staging must be noindex. Removed only on the approved production page.
  robots: { index: false, follow: false, nocache: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReviewProvider>
          <ViewToggle />
          <Header />
          <main>{children}</main>
          <Footer />
        </ReviewProvider>
      </body>
    </html>
  )
}
