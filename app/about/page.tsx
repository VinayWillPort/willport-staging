import { TermFlag } from '@/components/Hold'
import { Wrap, Band, H2, P, CtaBand } from '@/components/Ui'

export default function About() {
  return (
    <>
      <TermFlag
        terms="“blockchain” ×2"
        scope="Not covered by the change sheet. Cloned as-is from production — needs a scope decision from Doris before the release, or the retired vocabulary survives the scrub."
      />
      <Band tint="blue">
        <Wrap className="max-w-3xl">
          <h1 className="text-[30px] font-medium md:text-[38px]">About WILLPORT</h1>
          <P className="mt-4 text-[17px]">A Powerful Tool to Facilitate Multi-Generational Wealth Transfer.</P>
        </Wrap>
      </Band>
      <Band>
        <Wrap className="max-w-3xl space-y-5">
          <P>
            Welcome to WILLPORT Holdings Inc., where innovation meets tradition and the future of family
            connectivity and financial management is redefined. At the heart of our journey, from our
            inception as WILLPORT Trust LLC to the transformative leap we&rsquo;ve taken today, is
            unveiling our pride and joy &ndash; the WILLPORT Multigenerational Super App.
          </P>
          <P>
            Imagine an app that acts as your assistant, ensuring you take every chance to show you care.
            Whether scheduling gatherings, sending heartfelt messages, or sharing gifts and experiences,
            WILLPORT makes it all effortless. Our visionary, Schwartz, puts it best: &ldquo;Our mission is
            to deepen connections between family and friends, making every significant occasion remembered
            and celebrated.&rdquo;
          </P>
          <P>
            But WILLPORT is more than just about gifting and scheduling. From seamless money movements with
            WILLpay to easy cross-border transactions via WILLPORTinternational and the innovative
            WILLPORTtrust, set to change inheritance management with{' '}
            <mark className="bg-rose-100 px-0.5">blockchain</mark> technology, we&rsquo;re setting a new
            standard for financial engagement.
          </P>
          <P>
            Looking forward, our Financial Center is a hub for empowerment, featuring WILLinvest, our
            micro-investing platform, and a directory to connect you with Certified Wealth Advisors for
            expert financial planning.
          </P>
          <P>
            WILLPORT has even more features that promise to make managing your financial legacy and
            personal connections smoother. With{' '}
            <mark className="bg-rose-100 px-0.5">blockchain</mark> technology at its core, the app will
            become indispensable for nurturing family ties, managing finances, and creating lasting
            legacies.
          </P>
          <H2 className="pt-6">Message From Our Founder</H2>
          <P>
            As a busy professional, wife, mother, and founder, Doris Schwartz realized it was daunting to
            care for her aging mother and consistently remember to execute all the gifts her mother had
            requested for her 15 grandchildren. Doris knew there must be an easier way to do this and set
            out to automate the means by which we can be reminded, schedule, and deploy money and gifts to
            our loved ones.
          </P>
        </Wrap>
      </Band>
      <CtaBand />
    </>
  )
}
