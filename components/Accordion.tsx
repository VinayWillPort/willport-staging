'use client'
import { useState } from 'react'

export type QA = { q: string; a: string }

/** §6: real text, keyboard accessible, visible focus states. */
export default function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-[17px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <span>{it.q}</span>
                <span aria-hidden className="shrink-0 text-brand">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="pb-5 pr-8 text-[16px] leading-relaxed text-body"
            >
              {it.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
