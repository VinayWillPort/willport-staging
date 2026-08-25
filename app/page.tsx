import Link from 'next/link'
import { Change } from '@/components/Hold'
import { Wrap, Band, H2, H3, P, CtaBand } from '@/components/Ui'

export default function Home() {
  return (
    <>
      <Band tint="blue">
        <Wrap className="max-w-3xl text-center">
          <h1 className="text-[30px] font-medium leading-tight md:text-[40px]">
            Connect. Schedule. Send.<br />Your Money. Your Memories.
          </h1>
          <P className="mx-auto mt-4 max-w-2xl text-[17px]">
            Securely transported into the future as you will. At WILLPORT, our commitment is simple: to
            educate, empower, and connect all generations and backgrounds by uniting their financial
            journeys with life&rsquo;s most important moments.
          </P>
          <Link href="/willport" className="wp-btn mt-7">Download the App</Link>
        </Wrap>
      </Band>

      <Band>
        <Wrap className="max-w-4xl">
          <H2>WILLPORT Holdings, Inc.</H2>
          <P className="mt-5">
            WILLPORT Holdings, Inc. has transformed how you plan and perform important tasks for your
            loved ones, whether they&rsquo;re family, friends, or associates. Our comprehensive platform
            offers a range of services that cover daily activities like money transfers, international
            payments, gift-giving, and investments. We also provide a revolutionary estate planning and
            Trust Platform that ensures seamless communication and asset transfer to your beneficiaries
            after you&rsquo;ve passed on.
          </P>
        </Wrap>
      </Band>

      <Band tint="blue2">
        <Wrap className="grid gap-8 md:grid-cols-3">
          <div>
            <img src="/img/app-01.png" alt="" className="h-44 w-full rounded-lg object-cover" />
            <H3 className="mt-5">WILLPORTapp</H3>
            <P className="mt-3 text-[15px]">
              A user-friendly mobile app consolidating various finance-related and gifting applications
              into one easy-to-use platform — transferring funds, investing, sharing gifts, receiving
              inheritances, and creating memorable moments with your loved ones.
            </P>
            <Link href="/willport" className="mt-4 inline-block text-[15px] text-brand underline">Learn more</Link>
          </div>

          {/* §9 — teaser rewritten. Live copy said "blockchain web-based platform … create an estate plan". */}
          <Change status="hold" cite="§9 Home trust teaser" approvers="Doris (exact teaser wording)">
            <div>
              <img src="/img/trust-c.png" alt="" className="h-44 w-full rounded-lg object-cover" />
              <H3 className="mt-5">WILLPORTtrust</H3>
              <P className="mt-3 text-[15px]">
                Plan an inheritance over time. WILLPORT helps you organize planned trust distributions and
                personal messages in one experience. Trust services are provided by an approved trustee.
                The experience is opening in stages.
              </P>
              <Link href="/willporttrust" className="mt-4 inline-block text-[15px] text-brand underline">
                Learn how it works
              </Link>
            </div>
          </Change>

          <div>
            <img src="/img/vouchers.png" alt="" className="h-44 w-full rounded-lg object-cover" />
            <H3 className="mt-5">WILLPORTvouchers</H3>
            <P className="mt-3 text-[15px]">
              Wealth advisors collaborate with benefactors to gift trade or coach accounts for their
              beneficiaries, empowering the next generation to invest wisely and secure their financial
              future.
            </P>
            <Link href="/willportvouchers" className="mt-4 inline-block text-[15px] text-brand underline">Learn more</Link>
          </div>
        </Wrap>
      </Band>

      {/* §9 — replaces "Be your own Micro-Estate Manager" (deployment wording + late-2025 date + old video). */}
      <Change
        status="blocked" cite="§8.2 New video"
        approvers="Doris, Legal, Product; video asset owner for captions/transcript"
        note="Old “Late 2021 Estate and Trust Release” embed removed. No replacement asset supplied — file, title, thumbnail, captions and transcript all outstanding."
      >
        <Band>
          <Wrap className="max-w-3xl text-center">
            <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-black/20 bg-neutral-50">
              <span className="px-6 text-[14px] text-black/45">
                Approved trust video — placeholder. 16:9, lazy-loaded, poster image, captions and
                transcript required. Page must still explain the product without it.
              </span>
            </div>
          </Wrap>
        </Band>
      </Change>

      <Band tint="green">
        <Wrap className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <H2>WILLPORT Multigenerational Super App</H2>
            <P className="mt-5">
              Our gateway offering, now on the market, facilitates deepening connections with your loved
              ones by allowing you to send money, gifts, and unforgettable experiences. The app also
              includes a specialized section for financial education, streamlining your need for multiple
              apps into one comprehensive solution.
            </P>
            <div className="mt-6 flex gap-3">
              <a href="https://apps.apple.com/pk/app/willport/id1439199443"><img src="/img/app-store.png" alt="Download on the App Store" className="h-11" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.willportapp&hl=en_US"><img src="/img/google-play.png" alt="Get it on Google Play" className="h-11" /></a>
            </div>
          </div>
          <img src="/img/app-image.jpg" alt="" className="w-full rounded-lg" />
        </Wrap>
      </Band>

      <CtaBand />
    </>
  )
}
