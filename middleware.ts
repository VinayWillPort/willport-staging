import { NextRequest, NextResponse } from 'next/server'

/**
 * §8.3 / §11 — staging must be password-protected.
 * Set STAGING_USER / STAGING_PASS in Vercel project env vars.
 */
export function middleware(req: NextRequest) {
  const user = process.env.STAGING_USER
  const pass = process.env.STAGING_PASS
  if (!user || !pass) return NextResponse.next() // local dev: unset = open

  const header = req.headers.get('authorization')
  if (header) {
    const [scheme, encoded] = header.split(' ')
    if (scheme === 'Basic' && encoded) {
      const [u, p] = atob(encoded).split(':')
      if (u === user && p === pass) return NextResponse.next()
    }
  }
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="WILLPORT Staging"' },
  })
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
