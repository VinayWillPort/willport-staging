import { BUILD_MODE } from '@/lib/mode'
import ChangeShell, { type Status } from '@/components/ChangeShell'
import TermFlagShell from '@/components/TermFlagShell'

/**
 * Server-side gate. In a production build (NEXT_PUBLIC_VIEW_MODE=production) this returns
 * null BEFORE children are handed to any client boundary, so unapproved copy is never
 * serialized into the HTML or the RSC payload. That is the §11 QA evidence.
 */
export function Change(props: {
  id?: string
  status: Status
  cite: string
  approvers?: string
  note?: string
  children: React.ReactNode
}) {
  if (BUILD_MODE === 'production' && props.status !== 'ship') return null
  return <ChangeShell {...props} />
}

export function TermFlag(props: { terms: string; scope: string }) {
  if (BUILD_MODE === 'production') return null
  return <TermFlagShell {...props} />
}
