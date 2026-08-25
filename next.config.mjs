/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      { source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }] },
      // Style edits must never be masked by a cached copy, and must never require a
      // server restart to pick up. public/ is read from disk per request, so with
      // revalidation forced here a plain browser refresh is enough.
      {
        source: '/wp-css/zz-willport-overrides.css',
        headers: [{ key: 'Cache-Control', value: 'no-store, must-revalidate' }],
      },
    ]
  },
}
export default nextConfig
