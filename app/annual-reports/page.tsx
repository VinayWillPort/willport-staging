import { TermFlag } from '@/components/Hold'
import { Wrap, Band, H3, P } from '@/components/Ui'

export default function AnnualReports() {
  return (
    <>
      <TermFlag
        terms="Only 2025 filings listed (September / June / March) — no 2026 entries"
        scope="Not in the change sheet. Flagged as stale: this is an SEC-filings page still showing 2025 only, as of August 2026."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[28px] font-medium md:text-[34px]">
            WILLPORT Holdings Inc.&rsquo;s Annual Reports &amp; SEC Filings
          </h1>
        </Wrap>
      </Band>
      <Band>
        <Wrap className="grid max-w-4xl gap-6 md:grid-cols-3">
          {['Annual Reports', 'Security Sales/Purchase Records', 'Security Ownership Statements'].map((h) => (
            <div key={h} className="rounded-lg border border-black/10 p-6">
              <H3>{h}</H3>
              <P className="mt-3 text-[15px]">2025</P>
              <ul className="mt-2 space-y-1 text-[15px] text-brand">
                <li>September</li><li>June</li><li>March</li>
              </ul>
            </div>
          ))}
        </Wrap>
      </Band>
    </>
  )
}
