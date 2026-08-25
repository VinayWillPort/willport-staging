'use client'
import { Wrap, Band, H2, P } from '@/components/Ui'

export default function Contact() {
  return (
    <Band tint="blue">
      <Wrap className="max-w-2xl">
        <h1 className="text-[30px] font-medium md:text-[38px]">Contact Us</h1>
        <P className="mt-4">Could not find what you were looking for? See our FAQs.</P>

        <div className="mt-8 rounded-lg bg-white p-7">
          <H2 className="text-[20px]">Send us a message</H2>
          <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="topic" className="block text-[14px] font-medium">Topic</label>
              <select id="topic" className="mt-1.5 w-full rounded border border-black/25 px-3 py-2.5 text-[15px]">
                <option>General Questions</option>
                <option>Potential Vendor</option>
                <option>Investor Inquiry</option>
                <option>Employment Opportunities</option>
              </select>
            </div>
            <div>
              <label htmlFor="msg" className="block text-[14px] font-medium">Message</label>
              <textarea id="msg" rows={4} className="mt-1.5 w-full rounded border border-black/25 px-3 py-2.5 text-[15px]" />
            </div>
            <label className="flex gap-2.5 text-[13px] leading-relaxed text-body">
              <input type="checkbox" className="mt-1 shrink-0" />
              <span>
                Receive marketing and promotional messages. By providing your phone number, you agree to
                receive marketing and promotional messages from WILLPORT. Message frequency may vary.
                Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. We
                will not share mobile information with third parties for promotional or marketing purposes.
              </span>
            </label>
            <button type="submit" className="wp-btn">Send Message</button>
          </form>
          <div className="mt-6 border-t border-black/10 pt-5 text-[14px] text-body">
            <div>Toll Free: 1-855-945-5778</div>
            <div>Local: 1-858-800-3827</div>
            <div>Contact us at service@willport.com</div>
          </div>
        </div>
      </Wrap>
    </Band>
  )
}