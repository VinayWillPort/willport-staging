import { TermFlag } from '@/components/Hold'
import { Wrap, Band, P } from '@/components/Ui'

export default function Contest() {
  return (
    <>
      <TermFlag
        terms="Contest ended 23 December 2024 — page still published and indexable"
        scope="Not in the change sheet. Recommend unpublish or redirect: it still promotes a $300 cash prize for a contest that closed 20 months ago."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[28px] font-medium md:text-[34px]">
            Can You Create The Best AI Greeting Card Using the WILLPORT App?
          </h1>
          <P className="mt-4">
            Enter the WILLPORT AI Holiday Greeting Card Giveaway for a chance to win $300 cash. Use the
            power of the WILLPORT App to design unique AI-generated greeting cards.
          </P>
          <P className="mt-4 font-medium">
            Start date: 12/16/24 &middot; End date: 12/22/24 &middot; Winner announcement: 12/23/24
          </P>
        </Wrap>
      </Band>
    </>
  )
}
