import { legalHtml } from '@/lib/legal'
import { Wrap, Band } from '@/components/Ui'

export default function Page() {
  return (
    <Band>
      <Wrap className="max-w-3xl">
        <h1 className="text-[30px] font-medium md:text-[38px]">Privacy Policy</h1>
        <div
          className="legal-prose mt-8"
          dangerouslySetInnerHTML={{ __html: legalHtml['privacy'] }}
        />
      </Wrap>
    </Band>
  )
}
