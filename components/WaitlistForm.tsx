'use client'
import { useEffect, useRef, useState } from 'react'

declare global { interface Window { dataLayer?: unknown[] } }
const push = (event: string) => {
  if (typeof window !== 'undefined') (window.dataLayer ||= []).push({ event })
}

/**
 * §8.1 — email only. No name, phone, assets or wealth. No pre-checked consent.
 * §8.4 — fires trust_waitlist_view / _submit / _success / _error on the existing dataLayer.
 */
export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const seen = useRef(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !seen.current) { seen.current = true; push('trust_waitlist_view') }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    push('trust_waitlist_submit')
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState('error'); push('trust_waitlist_error'); return
    }
    setState('sending')
    // Staging only — no destination wired. Production must use the existing form plugin.
    setTimeout(() => { setState('done'); push('trust_waitlist_success') }, 500)
  }

  return (
    <div ref={box} className="mx-auto mt-8 w-full max-w-md">
      {state === 'done' ? (
        <p role="status" className="rounded border border-white/50 bg-white px-4 py-3 text-[16px] text-brand">
          You&rsquo;re on the list. We&rsquo;ll send availability and eligibility updates.
        </p>
      ) : (
        <form onSubmit={submit} noValidate className="text-left">
          <label htmlFor="wl-email" className="block text-[14px] font-medium text-white">Email address</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="wl-email" name="email" type="email" required value={email}
              onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle') }}
              aria-invalid={state === 'error'}
              aria-describedby={state === 'error' ? 'wl-err' : undefined}
              className="w-full rounded border border-white/40 bg-white px-3 py-3 text-[15px] text-body focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            />
            <button type="submit" disabled={state === 'sending'} className="wp-btn shrink-0 disabled:opacity-60">
              {state === 'sending' ? 'Sending…' : 'Join the trust waitlist'}
            </button>
          </div>
          {state === 'error' && (
            <p id="wl-err" role="alert" className="mt-2 text-[14px] text-rose-200">
              Enter a valid email address.
            </p>
          )}
        </form>
      )}
    </div>
  )
}
