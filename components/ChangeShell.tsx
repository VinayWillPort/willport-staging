'use client'
import { useView } from '@/lib/review'

export type Status = 'ship' | 'hold' | 'hidden' | 'blocked'

const LABEL: Record<Status, string> = {
  ship:    'CLEARED FOR PRODUCTION',
  hold:    'HOLD — COPY NOT APPROVED',
  hidden:  'BUILD HIDDEN — DO NOT PUBLISH',
  blocked: 'BLOCKED — FACTS NOT SUPPLIED',
}
const TONE: Record<Status, string> = {
  ship:    'bg-emerald-50 border-emerald-600 text-emerald-900',
  hold:    'bg-amber-50 border-amber-600 text-amber-900',
  hidden:  'bg-orange-50 border-orange-600 text-orange-900',
  blocked: 'bg-rose-50 border-rose-600 text-rose-900',
}

/**
 * Runtime half. Hides held sections when the reviewer flips to "production view".
 * This is a visual preview only — the real guarantee that held copy is absent from
 * the served bytes is the server-side gate in Hold.tsx, driven by NEXT_PUBLIC_VIEW_MODE.
 */
export default function ChangeShell({
  id, status, cite, approvers, note, children,
}: {
  id?: string
  status: Status
  cite: string
  approvers?: string
  note?: string
  children: React.ReactNode
}) {
  const { mode } = useView()
  if (mode === 'production' && status !== 'ship') return null

  return (
    <section id={id}>
      {mode === 'review' && (
        <div className={`border-l-4 ${TONE[status]} px-4 py-2 text-[12px] leading-snug`}>
          <div className="mx-auto max-w-site">
            <span className="font-bold tracking-wide">{LABEL[status]}</span>
            <span className="opacity-70"> · Change sheet {cite}</span>
            {approvers && <div className="mt-0.5 opacity-80">Approvers required: {approvers}</div>}
            {note && <div className="mt-0.5 opacity-80">{note}</div>}
          </div>
        </div>
      )}
      {children}
    </section>
  )
}
