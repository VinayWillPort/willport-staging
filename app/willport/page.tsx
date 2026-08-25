import { TermFlag } from '@/components/Hold'
import { Wrap, Band, H2, H3, P, CtaBand } from '@/components/Ui'

const FEATURES = [
  { h: 'WILLPORTmoney',
    b: 'Multi-generational money movement: an everyday payment platform for sending and receiving money to family and friends through a digital wallet. Flexible one-time or recurring payments, personal voice messaging, and limits up to $3,000 per day.' },
  { h: 'International and Inheritance',
    b: 'Global transfers let you safely send and receive money internationally to over 75+ countries. Schedule and add a voice message to your payment.' },
  { h: 'AI Greeting Cards',
    b: 'Take creativity a step further with the transformative power of our Image Generation tool. Make your own greeting art and add your own personal voice messaging.' },
]

export default function WillportApp() {
  return (
    <>
      <TermFlag
        terms="“AFTERlife” ×3 · “Deployment Trust Platform” · “deploy/deployment” ×2 · “with the backing of the US government”"
        scope="Not covered by the change sheet — the highest-risk omission. The trust paragraph below is duplicated inside a slider widget on production, so a page-body find-and-replace will miss one copy. The WILLinvest safety claim is the kind §5.3 holds investment copy for."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[30px] font-medium md:text-[38px]">Your Multigenerational Super App</h1>
          <P className="mt-4 text-[17px]">
            The Multigenerational Super App enables you to celebrate and engage with those closest to you.
          </P>
        </Wrap>
      </Band>

      <Band>
        <Wrap className="max-w-3xl">
          <P>
            WILLPORT&rsquo;s mission is to educate, empower, and connect all generations and backgrounds by
            uniting their financial journeys with the most important moments of life&hellip; whether in
            WILLPORT PRESENTlife or <mark className="bg-rose-100 px-0.5">AFTERlife</mark>&hellip; all in the
            palm of your hand.
          </P>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.h} className="rounded-lg border border-black/10 p-6">
                <H3>{f.h}</H3>
                <P className="mt-3 text-[15px]">{f.b}</P>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border-2 border-rose-300 bg-rose-50/50 p-6">
            <P className="text-[15px]">
              The <mark className="bg-rose-100 px-0.5">AFTERlife and Deployment Trust Platform</mark>{' '}
              allows for the electronic and gradual disbursements of cash, inheritance proceeds, retirement
              plans, and life insurance proceeds directly to Beneficiaries. Inheritance and legacy messages
              or videos are sent to the beneficiary&rsquo;s WILLPORT App.
            </P>
            <p className="mt-3 text-[12px] font-medium text-rose-800">
              ↑ This exact paragraph appears TWICE on production — once as a static block and once inside
              the slider widget.
            </p>
          </div>
        </Wrap>
      </Band>

      <Band tint="green">
        <Wrap className="max-w-3xl">
          <H2>Financial Center</H2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6">
              <H3>WILLinvest</H3>
              <P className="mt-3 text-[15px]">
                Start investing with our user-friendly micro-investment platform. We offer turnkey
                wealth-building with no investment minimums. Gain easy access to T-bills and a full range of
                money markets <mark className="bg-rose-100 px-0.5">with the backing of the US government</mark>.
              </P>
            </div>
            <div className="rounded-lg bg-white p-6">
              <H3>Find a Wealth Advisor</H3>
              <P className="mt-3 text-[15px]">
                Find a Wealth Advisor to assist you with your financial planning. Seamlessly connect to
                trusted Fiduciaries &bull; RIA, CFP, CFA &amp; Advisors.
              </P>
            </div>
          </div>
        </Wrap>
      </Band>
      <CtaBand />
    </>
  )
}
