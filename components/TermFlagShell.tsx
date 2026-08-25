'use client'
import { useView } from '@/lib/review'
import { Wrap } from '@/components/Ui'

/** Inline flag for retired vocabulary on pages the change sheet never scoped. */
export default function TermFlagShell({ terms, scope }: { terms: string; scope: string }) {
  const { mode } = useView()
  if (mode === 'production') return null
  return (
    <Wrap className="py-3">
      <div className="border-l-4 border-rose-600 bg-rose-50 px-4 py-2 text-[12px] text-rose-900">
        <span className="font-bold tracking-wide">RETIRED TERMS ON THIS PAGE</span>
        <div className="mt-0.5">Found: {terms}</div>
        <div className="mt-0.5 opacity-80">{scope}</div>
      </div>
    </Wrap>
  )
}
