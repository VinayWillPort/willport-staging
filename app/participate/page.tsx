import { TermFlag } from '@/components/Hold'
import { Wrap, Band, H3, P } from '@/components/Ui'

const R = [
  ['Solving a Critical Need', 'WILLPORTtrust simplifies estate planning with an affordable, secure platform powered by blockchain and AI.'],
  ['Experienced Leadership', 'Led by a team of experts in estate law, finance, and technology, including partnerships with Peak Trust, Eclypses, and Thomson Reuters.'],
  ['Strong Market Potential', 'With $5.2M raised and a rapidly growing user base of 6,240 in just four months.'],
]

export default function Participate() {
  return (
    <>
      <TermFlag
        terms="“blockchain” · “probate” ×2 · “Trust Deployment Timeline” · “Avoids Probate” · “Tax Benefits” · Peak Trust named publicly"
        scope="§9 says DO NOT change this page as part of the build — flag matching stale terms for a separate securities/legal review. Cloned verbatim. Note the conflict: the trust page must say “an approved trustee” unnamed, while this page already names Peak Trust publicly on the same domain."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[30px] font-medium md:text-[38px]">Invest in WILLPORTtrust</h1>
          <P className="mt-4 text-[17px]">
            Join WILLPORTtrust&rsquo;s investment opportunity and be part of revolutionizing the trust
            services industry through innovative technology and personalized solutions.
          </P>
          <a href="https://willport.com/participate/" className="wp-btn mt-6">Invest Now</a>
        </Wrap>
      </Band>
      <Band>
        <Wrap className="max-w-3xl">
          <div className="border-l-4 border-black bg-neutral-100 p-5 text-[13px] font-medium uppercase leading-relaxed">
            Important notice — this Reg CF offering is made available through StartEngine Primary, LLC.
            This investment is speculative, illiquid, and involves a high degree of risk, including the
            possible loss of your entire investment.
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {R.map(([h, b]) => (
              <div key={h} className="rounded-lg border border-black/10 p-6">
                <H3>{h}</H3>
                <P className="mt-3 text-[15px]">{b}</P>
              </div>
            ))}
          </div>
        </Wrap>
      </Band>
    </>
  )
}
