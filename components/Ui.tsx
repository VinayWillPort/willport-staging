export function Wrap({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-site px-5 ${className}`}>{children}</div>
}

export function Band({
  children, tint, className = '',
}: { children: React.ReactNode; tint?: 'blue' | 'blue2' | 'green' | 'dark'; className?: string }) {
  const bg =
    tint === 'blue' ? 'bg-tint-blue'
    : tint === 'blue2' ? 'bg-tint-blue2'
    : tint === 'green' ? 'bg-tint-green'
    : tint === 'dark' ? 'bg-black text-white'
    : 'bg-white'
  return <div className={`${bg} py-14 md:py-20 ${className}`}>{children}</div>
}

export function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-[26px] font-medium leading-tight md:text-[32px] ${className}`}>{children}</h2>
}

export function H3({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-[20px] font-medium leading-snug md:text-[22px] ${className}`}>{children}</h3>
}

export function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[16px] leading-relaxed text-body ${className}`}>{children}</p>
}

export function CtaBand() {
  return (
    <Band tint="blue">
      <Wrap className="text-center">
        <H2>Join us at WILLPORT</H2>
        <P className="mx-auto mt-4 max-w-2xl">
          Take the first step towards a brighter financial future. Together, we can bridge generations,
          empower individuals, and connect life&rsquo;s most important moments.
        </P>
        <a href="/contact-us" className="wp-btn mt-7">Subscribe Now</a>
      </Wrap>
    </Band>
  )
}
