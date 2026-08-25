import Link from 'next/link'
import { Change } from '@/components/Hold'
import { Wrap, Band, H2, P, CtaBand } from '@/components/Ui'

export default function TrustLearnMore() {
  return (
    <>
      <Change
        status="blocked" cite="§9 Trust Learn More rebuild"
        approvers="Doris, Legal, Product; video asset owner"
        note="§7 removed the entire generic “Benefits of having a TRUST” list (11 items: asset protection, tax advantages, probate avoidance, privacy, special needs, charitable giving, business succession, professional management). §9 rebuilds this as a short video/explainer page — the approved video and introduction have not been supplied, so the page is currently a shell."
      >
        <Band tint="blue">
          <Wrap className="max-w-3xl text-center">
            <h1 className="text-[30px] font-medium leading-tight md:text-[38px]">
              How the Legacy Distribution Trust works
            </h1>
            <div className="mt-8 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-black/25 bg-white">
              <span className="px-6 text-[14px] text-black/45">
                Approved trust video — placeholder pending asset, captions and transcript.
              </span>
            </div>
            <P className="mx-auto mt-8 max-w-2xl">
              Approved introduction pending. §9 requires a brief approved introduction here — this page
              must not duplicate the full trust page.
            </P>
            <Link href="/willporttrust#how-it-works" className="wp-btn mt-7">See how it works</Link>
          </Wrap>
        </Band>
      </Change>
      <CtaBand />
    </>
  )
}
