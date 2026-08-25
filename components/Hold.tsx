import { SHOW_REVIEW_CHROME } from '@/lib/mode'
import ChangeShell, { type Status } from '@/components/ChangeShell'
import TermFlagShell from '@/components/TermFlagShell'

/**
 * Wraps one change-sheet section. `cite`, `approvers` and `note` are retained so the
 * approval state stays recorded in the source, but nothing is rendered for them while
 * SHOW_REVIEW_CHROME is false — the page reads as the finished production page.
 */
export function Change({
  id, children, ...meta
}: {
  id?: string
  status: Status
  cite: string
  approvers?: string
  note?: string
  children: React.ReactNode
}) {
  if (!SHOW_REVIEW_CHROME) return <section id={id}>{children}</section>
  return <ChangeShell id={id} {...meta}>{children}</ChangeShell>
}

export function TermFlag(props: { terms: string; scope: string }) {
  if (!SHOW_REVIEW_CHROME) return null
  return <TermFlagShell {...props} />
}
