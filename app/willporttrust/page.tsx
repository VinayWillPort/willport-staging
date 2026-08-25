import type { Metadata } from 'next'
import { Change } from '@/components/Hold'
import { Wrap, Band, H2, H3, P } from '@/components/Ui'
import Accordion, { type QA } from '@/components/Accordion'
import WaitlistForm from '@/components/WaitlistForm'
import RemovedLedger from '@/components/RemovedLedger'
import Hero from '@/components/wp/Hero'
import HowItWorks from '@/components/wp/HowItWorks'
import WhatMakesDifferent from '@/components/wp/WhatMakesDifferent'
import AiMax from '@/components/wp/AiMax'
import Benefits from '@/components/wp/Benefits'
import InvestmentQuestion from '@/components/wp/InvestmentQuestion'
import Disclosure from '@/components/wp/Disclosure'
import Waitlist from '@/components/wp/Waitlist'

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
  { img: '/img/family1.png', h: 'Plan distributions over time.',
    b: 'Choose planned amounts and milestones, subject to the trust terms and trustee procedures.' },
  { img: '/img/father-son.png', h: 'Add a personal message.',
    b: 'Attach a written, voice or video message to a planned milestone, subject to the service terms.' },
  { img: '/img/family-three.png', h: 'Keep details connected.',
    b: 'Manage planning information, beneficiary details and messages in one WILLPORT experience.' },
  { img: '/img/grandparents.png', h: 'Professional trustee administration.',
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
    <div className="elementor elementor-27">
      {/* 1 — §3.1 — exact Elementor replica */}
      <Change status="ship" cite="§3.1 Hero">
        <Hero />
      </Change>

      {/* 3 — §4.1 — Elementor icon-box replica */}
      <Change
        status="hold" cite="§4.1 How it works"
        approvers="Product/Operations, Privacy, Trustee, Nevada trust counsel"
      >
        <HowItWorks />
      </Change>

      {/* 4 — §4.2 — Elementor replica, production image */}
      <Change
        status="hold" cite="§4.2 What makes WILLPORT different"
        approvers="Trustee, Nevada trust counsel, Product/Operations, Doris"
      >
        <WhatMakesDifferent />
      </Change>

      {/* 5 — §5.1 — Elementor replica, production image size */}
      <Change
        status="hidden" cite="§5.1 AI MAX"
        approvers="AI/Product, Privacy, Legal, Doris"
        note="Do not publish until actual product behaviour and the allowed question set are confirmed."
      >
        <AiMax />
      </Change>

      {/* 6 — §5.2 — Elementor icon-box cards */}
      <Change
        status="hold" cite="§5.2 Legacy Distribution Trust benefits"
        approvers="Trustee, Nevada trust counsel, Product, Doris"
      >
        <Benefits />
      </Change>

      {/* 7 — §6 + §5.3 */}
      <Change
        status="hold" cite="§6 Questions people ask"
        approvers="Per-answer approval required. Pricing question omitted until fee schedule supplied."
        note="FAQPage schema deliberately NOT emitted — §6 permits it only after approved answers are live in production."
      >
        <Band>
          <Wrap className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14">
            <div>
              <H2>Questions people ask</H2>
              <img
                src="/img/father-age.png" alt=""
                className="mt-8 hidden w-full rounded-lg object-cover shadow-sm md:block"
              />
            </div>
            <div className="rounded-lg bg-white px-6 py-2">
              <Accordion items={FAQ} />
            </div>
          </Wrap>
        </Band>
      </Change>

      {/* 8 — §8.1 — Elementor replica of the live CTA band */}
      <Change
        status="hold" cite="§8.1 Trust waitlist"
        approvers="Privacy/Legal (consent language), Product/Doris (availability wording)"
        note="Layout cleared; form held. §8.1 requires approved privacy/marketing consent text — none exists for email. Staging form has no destination wired."
      >
        <Waitlist />
      </Change>

      <Change
        status="blocked" cite="§5.3 Investment question"
        approvers="Authorized investment provider, securities counsel, trustee, WILLPORT Legal"
        note="Account structure not confirmed. Risk statement must stay beside the answer — never moved to the footer alone. No provider named."
      >
        <InvestmentQuestion />
      </Change>

      <Change
        status="hidden" cite="§5.4 Bottom-of-page disclosure"
        approvers="WILLPORT Legal, trustee, investment provider, Doris"
        note='Near-identical wording already exists in the approved Terms of Use (updated 11 Jul 2026) — likely a restatement, not new drafting. "approved trustee" intentionally unlinked until the destination is approved.'
      >
        <Disclosure />
      </Change>

      <RemovedLedger />
    </div>
  )
}
