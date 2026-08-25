'use client'
import { useView, LOCKED } from '@/lib/review'

export default function ViewToggle() {
  const { mode, setMode } = useView()
  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-[#111] text-white">
      <div className="mx-auto flex max-w-site flex-wrap items-center gap-x-4 gap-y-2 px-5 py-2 text-[12px]">
        <span className="font-bold tracking-wide">WILLPORT STAGING</span>
        <span className="opacity-60">Not for public release · noindex · password protected</span>
        {LOCKED && (
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
            PRODUCTION BUILD — held copy not present in HTML
          </span>
        )}
        {!LOCKED && (
        <div className="ml-auto flex items-center gap-1 rounded bg-white/10 p-0.5">
          <button
            onClick={() => setMode('review')}
            className={`rounded px-2.5 py-1 ${mode === 'review' ? 'bg-white text-black' : 'text-white/70'}`}
          >
            Review view (all 41)
          </button>
          <button
            onClick={() => setMode('production')}
            className={`rounded px-2.5 py-1 ${mode === 'production' ? 'bg-white text-black' : 'text-white/70'}`}
          >
            Production view (13)
          </button>
        </div>
        )}
      </div>
    </div>
  )
}
