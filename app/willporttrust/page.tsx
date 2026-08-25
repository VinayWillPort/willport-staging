import type { Metadata } from 'next'
import { Change } from '@/components/Hold'
import { Wrap, Band, H2, H3, P } from '@/components/Ui'
import Accordion, { type QA } from '@/components/Accordion'
import WaitlistForm from '@/components/WaitlistForm'
import RemovedLedger from '@/components/RemovedLedger'

// §8.3 — set on staging, publish only after final product name + trustee disclosure approved.
export const metadata: Metadata = {
  title: 'WILLPORT Legacy Distribution Trust | Plan Inheritance Over Time',
  description:
    'Plan how and when trust distributions may reach the people you name, with a personal message for each milestone. Trust services are provided by an approved trustee.',
  alternates: { canonical: 'https://willport.com/willporttrust/' },
  robots: { index: false, follow: false },
}

const STEPS = [
  { n: '1', h: 'You decide the plan.',
    b: 'Choose who may receive money, the planned amounts and the timing. You can update planning information before submission. Changes after execution depend on the trust terms, applicable law and provider procedures.' },
  { n: '2', h: 'You record your messages.',
    b: 'Add a short video or written note for each planned distribution. Your message is not shown to the beneficiary until its scheduled release, subject to service terms, security procedures and disclosures required by law.' },
  { n: '3', h: 'The trustee administers the trust.',
    b: 'Your trust assets are held and administered by the approved trustee. The trustee acts under the trust documents, applicable law and its fiduciary duties.' },
  { n: '4', h: 'The right person is verified.',
    b: 'WILLPORT helps you keep beneficiary contact information current. When a distribution is due, the trustee or its authorized service providers verify the beneficiary and complete the required payment steps.' },
]

const BENEFITS = [
  { h: 'Plan distributions over time.',
    b: 'Choose planned amounts and milestones, subject to the trust terms and trustee procedures.' },
  { h: 'Add a personal message.',
    b: 'Attach a written, voice or video message to a planned milestone, subject to the service terms.' },
  { h: 'Keep details connected.',
    b: 'Manage planning information, beneficiary details and messages in one WILLPORT experience.' },
  { h: 'Professional trustee administration.',
    b: 'The approved trustee holds and administers trust assets under the trust documents, applicable law and its fiduciary duties.' },
]

const FAQ: QA[] = [
  { q: 'Can I change my plan?',
    a: 'You can update your planning information before submission. Changes after the trust is executed depend on the trust terms, applicable law and provider procedures.' },
  { q: 'Who holds trust assets?',
    a: 'Your trust assets are held and administered by the approved trustee. The trustee acts under the trust documents, applicable law and its fiduciary duties.' },
  { q: 'Do I need a lawyer?',
    a: 'WILLPORT does not require you to retain an attorney to explore the service. Because a trust affects legal rights, you should consider consulting your own attorney before signing or funding it. WILLPORT provides technology and general educational information; it does not provide legal advice or represent you.' },
  { q: 'What happens after death?',
    a: 'After the trustee receives and verifies the required notice and documents, it completes the checks required by the trust and applicable law. The trustee then administers approved distributions under the trust schedule. WILLPORT supports the customer experience, records and scheduled personal messages.' },
  { q: 'Can a trust help avoid probate?',
    a: 'Assets properly transferred to and held in a valid trust may pass outside probate. Other assets or circumstances may still require probate.' },
  { q: 'Is a trust private?',
    a: 'Trust administration is generally more private than court-supervised probate, but confidentiality is not absolute and depends on the trust, the assets and applicable law.' },
  { q: 'What if WILLPORT changes or exits?',
    a: 'Trust assets are held and administered by the trustee, not WILLPORT. Service continuity, technology access and any transition process are governed by the trust documents and service agreements.' },
]

export default function WillportTrust() {
  return (
    <>
      {/* 1 — §3.1 */}
      <Change status="ship" cite="§3.1 Hero">
        <Band tint="blue">
          <Wrap className="max-w-3xl text-center">
            <h1 className="text-[32px] font-medium leading-tight md:text-[44px]">
              Leave more than a lump sum.
            </h1>
            <P className="mx-auto mt-5 text-[17px]">
              Most inheritances arrive all at once, at the worst possible moment, with no instructions.
              WILLPORT lets you decide when the money arrives, how much arrives each time, and what you
              want to say when it does.
            </P>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#trust-waitlist" className="wp-btn">Join the trust waitlist</a>
              <a href="#how-it-works" className="wp-btn-outline">See how it works</a>
            </div>
          </Wrap>
        </Band>
      </Change>

      {/* 2 — §3.2 */}
      <Change status="ship" cite="§3.2 What the experience does">
        <Band>
          <Wrap className="max-w-3xl">
            <H2>A trust that pays out on your schedule, not all at once.</H2>
            <P className="mt-5">
              You choose the dates. A year after you&rsquo;re gone. Their thirtieth birthday. The year
              they finish school. Every year for twenty years.
            </P>
            <P className="mt-4">You choose the amounts. Even shares, or not.</P>
            <P className="mt-4">
              And you record what you want to say with each one, so the money never arrives without you.
            </P>
          </Wrap>
        </Band>
      </Change>

      {/* 3 — §4.1 */}
      <Change
        id="how-it-works" status="hold" cite="§4.1 How it works"
        approvers="Product/Operations, Privacy, Trustee, Nevada trust counsel"
      >
        <Band tint="green">
          <Wrap>
            <H2 className="text-center">How it works</H2>
            <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="rounded-lg bg-white p-6 shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[15px] font-medium text-white">
                    {s.n}
                  </span>
                  <H3 className="mt-4">{s.h}</H3>
                  <P className="mt-3 text-[15px]">{s.b}</P>
                </li>
              ))}
            </ol>
          </Wrap>
        </Band>
      </Change>

      {/* 4 — §4.2 */}
      <Change
        status="hold" cite="§4.2 What makes WILLPORT different"
        approvers="Trustee, Nevada trust counsel, Product/Operations, Doris"
      >
        <Band>
          <Wrap className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <H2>The document is only the beginning.</H2>
              <P className="mt-5">
                The document is only the beginning. WILLPORT keeps your plan, distribution schedule,
                beneficiary details and personal messages connected in one experience. A Nevada-chartered
                trust company serves as trustee and administers trust assets and distributions under the
                governing documents and applicable law.
              </P>
            </div>
            <img src="/img/family.jpg" alt="" className="w-full rounded-lg" />
          </Wrap>
        </Band>
      </Change>

      {/* 5 — §5.1 */}
      <Change
        status="hidden" cite="§5.1 AI MAX"
        approvers="AI/Product, Privacy, Legal, Doris"
        note="Do not publish until actual product behaviour and the allowed question set are confirmed."
      >
        <Band tint="blue2">
          <Wrap className="max-w-3xl">
            <H2>Questions, explained in plain English.</H2>
            <P className="mt-5">
              AI MAX can provide general educational information about beneficiary types, trusted
              contacts, spouse-related planning questions and completing the WILLPORT experience. It does
              not provide legal, tax, investment or financial advice, and it does not replace advice from
              your own qualified professional.
            </P>
          </Wrap>
        </Band>
      </Change>

      {/* 6 — §5.2 */}
      <Change
        status="hold" cite="§5.2 Legacy Distribution Trust benefits"
        approvers="Trustee, Nevada trust counsel, Product, Doris"
      >
        <Band>
          <Wrap>
            <H2 className="text-center">The benefits of a Legacy Distribution Trust</H2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b) => (
                <div key={b.h} className="rounded-lg border border-black/10 p-6">
                  <H3>{b.h}</H3>
                  <P className="mt-3 text-[15px]">{b.b}</P>
                </div>
              ))}
            </div>
          </Wrap>
        </Band>
      </Change>

      {/* 7 — §6 + §5.3 */}
      <Change
        status="hold" cite="§6 Questions people ask"
        approvers="Per-answer approval required. Pricing question omitted until fee schedule supplied."
        note="FAQPage schema deliberately NOT emitted — §6 permits it only after approved answers are live in production."
      >
        <Band tint="green">
          <Wrap className="max-w-3xl">
            <H2 className="text-center">Questions people ask</H2>
            <div className="mt-8"><Accordion items={FAQ} /></div>
          </Wrap>
        </Band>
      </Change>

      <Change
        status="blocked" cite="§5.3 Investment question"
        approvers="Authorized investment provider, securities counsel, trustee, WILLPORT Legal"
        note="Account structure not confirmed. Risk statement must stay beside the answer — never moved to the footer alone."
      >
        <Band>
          <Wrap className="max-w-3xl">
            <H3>Can trust assets be invested?</H3>
            <P className="mt-3">
              Depending on eligibility, the account selected and separate agreements, trust assets may be
              invested through an authorized provider. The value of investments may rise or fall, and
              returns are not guaranteed. WILLPORT provides the technology experience and general
              educational information; it does not select securities or provide investment advice.
            </P>
          </Wrap>
        </Band>
      </Change>

      {/* 8 — §8.1 */}
      <Change
        id="trust-waitlist" status="hold" cite="§8.1 Trust waitlist"
        approvers="Privacy/Legal (consent language), Product/Doris (availability wording)"
        note="Layout is cleared; the form is held. §8.1 requires approved privacy/marketing consent text — none exists for email. Staging form has no destination wired."
      >
        <Band tint="blue">
          <Wrap className="max-w-2xl text-center">
            <H2>We are opening the Legacy Distribution Trust experience in stages.</H2>
            <P className="mt-4">Leave your email to receive availability and eligibility updates.</P>
            <WaitlistForm />
          </Wrap>
        </Band>
      </Change>

      {/* 9 — §5.4 */}
      <Change
        status="hidden" cite="§5.4 Bottom-of-page disclosure"
        approvers="WILLPORT Legal, trustee, investment provider, Doris"
        note='Near-identical wording already exists in the approved Terms of Use (updated 11 Jul 2026) — likely a restatement, not new drafting. "approved trustee" is intentionally not linked until the destination is approved.'
      >
        <div className="border-t border-black/10 bg-white py-8">
          <Wrap>
            <p className="text-[13px] leading-relaxed text-black/60">
              WILLPORT provides technology and general educational information. Trust services are
              provided by an approved trustee. WILLPORT is not a law firm, bank, trustee or investment
              adviser and does not provide legal, tax, investment or financial advice.
            </p>
          </Wrap>
        </div>
      </Change>

      <RemovedLedger />
    </>
  )
}
