'use client'
import { useView } from '@/lib/review'
import { SHOW_REVIEW_CHROME } from '@/lib/mode'
import { Wrap } from '@/components/Ui'

/** §7 — what was deleted from the live page, so reviewers can confirm nothing was lost by accident. */
const REMOVED = [
  ['“Benefits to Blockchain” section', 'Entire section incl. “mitigating a legal challenge”'],
  ['Wistia video “WILLPORTtrust Late 2021 Estate and Trust Release”', 'Asset i27rjzewa9 — also still embedded on the home page'],
  ['“Trust Beta release in late 2025”', 'Stale availability claim'],
  ['“Utilizing AI as a tool” section', 'Life-change monitoring + tax-strategy alerts'],
  ['“Donate to a Charity” block', '§7 — charitable giving is not currently included'],
  ['Advisor / admin-portal paragraph', 'Preserve privately for a future advisor brief; not published here'],
  ['Generic team paragraph', '“…experienced professionals specializing in trusts, wealth management, and technology.”'],
  ['“The future of TRUSTs…” paragraph', 'Deployment vocabulary'],
  ['“Join us at WILLPORT / Subscribe Now” block', 'Replaced by the trust-specific waitlist'],
  ['Hero: AFTERlife / Blockchain Deployment intro', '“…offers affordable estate planning.”'],
]

export default function RemovedLedger() {
  const { mode } = useView()
  if (!SHOW_REVIEW_CHROME) return null
  return (
    <div className="border-t-4 border-black bg-neutral-50 py-12">
      <Wrap>
        <h2 className="text-[20px] font-medium">Removed from this page — change sheet §7</h2>
        <p className="mt-2 text-[14px] text-black/60">
          Present on the live page today, deleted in this build. Review-view only.
        </p>
        <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
          {REMOVED.map(([t, d]) => (
            <li key={t} className="py-3">
              <div className="text-[15px] font-medium line-through decoration-rose-500/60">{t}</div>
              <div className="mt-0.5 text-[13px] text-black/55">{d}</div>
            </li>
          ))}
        </ul>
      </Wrap>
    </div>
  )
}
