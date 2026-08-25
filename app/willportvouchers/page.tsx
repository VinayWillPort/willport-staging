import { TermFlag } from '@/components/Hold'
import { Wrap, Band, H3, P, CtaBand } from '@/components/Ui'

const V = [
  { h: 'Investment Gift Voucher',
    b: 'Gives the beneficiary ownership of an investment account as a gift. Still, there is one caveat — the beneficiary must work with a Wealth Advisor to receive investment guidance for at least 18 months.' },
  { h: 'Investment Coaching Voucher',
    b: 'The benefactor retains ownership of the account, at least initially, while the beneficiary is given trading authority and coaching.' },
  { h: 'AFTERLife Inheritance Voucher (coming soon)',
    b: 'Allows the inheritance to flow from a trust, based on benefactor instructions, directly to the beneficiary, stipulating that the inheritance stays with the wealth manager for at least 18 months.' },
]

export default function Vouchers() {
  return (
    <>
      <TermFlag
        terms="“AFTERLife” ×2 · “guaranteeing” · “legal agreements … via the WILLPORTtrust platform”"
        scope="Not covered by the change sheet. “Guaranteed” is on the §7 search list, and describing vouchers as legal agreements delivered via WILLPORTtrust conflicts with §7’s ban on claims that WILLPORT prepares legal instruments."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[30px] font-medium md:text-[38px]">WILLPORTvouchers</h1>
          <P className="mt-4 text-[17px]">
            Giving Benefactors peace of mind that their Beneficiaries are educated in how to invest their
            inheritance.
          </P>
        </Wrap>
      </Band>
      <Band>
        <Wrap className="max-w-3xl">
          <P>
            WILLPORTvouchers are <mark className="bg-rose-100 px-0.5">legal agreements</mark> initiated by
            the Benefactor, through the Wealth Advisor, payable to the Beneficiary{' '}
            <mark className="bg-rose-100 px-0.5">via the WILLPORTtrust platform</mark>. This allows
            Benefactors to educate and transfer wealth while they are still alive. Purchased through an RIA
            or a certified Wealth Advisor.
          </P>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {V.map((v) => (
              <div key={v.h} className="rounded-lg border border-black/10 p-6">
                <H3>{v.h.includes('AFTERLife')
                  ? <><mark className="bg-rose-100 px-0.5">AFTERLife</mark> Inheritance Voucher (coming soon)</>
                  : v.h}</H3>
                <P className="mt-3 text-[15px]">{v.b}</P>
              </div>
            ))}
          </div>
        </Wrap>
      </Band>
      <CtaBand />
    </>
  )
}
