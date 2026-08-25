/**
 * Build-time view mode. Not a client module, so server components can read it directly.
 * NEXT_PUBLIC_VIEW_MODE=production produces a build in which held copy is never rendered,
 * and therefore never reaches the HTML or the RSC payload.
 */
export type ViewMode = 'review' | 'production'

export const BUILD_MODE: ViewMode =
  process.env.NEXT_PUBLIC_VIEW_MODE === 'production' ? 'production' : 'review'

export const LOCKED = BUILD_MODE === 'production'
