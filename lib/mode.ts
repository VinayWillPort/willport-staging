/**
 * Build-time view mode.
 *
 * SHOW_REVIEW_CHROME controls the staging annotations only — hold badges, the view
 * toggle, retired-term flags and the §7 removal ledger. It does NOT gate content:
 * every change-sheet section renders either way, as cleared for production.
 *
 * Flip to `true` to bring the approval tracking back.
 */
export const SHOW_REVIEW_CHROME = false

export type ViewMode = 'review' | 'production'
export const BUILD_MODE: ViewMode = 'production'
export const LOCKED = true
