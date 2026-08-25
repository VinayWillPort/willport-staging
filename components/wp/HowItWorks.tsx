/**
 * §4.1 How it works — built from the live page's own widgets.
 *
 * Section container mirrors 78ddfbc (padding 80px 0 → 40px 20px ≤767px, content 1200px).
 * Heading reuses 8c5e057, the page's real section-heading widget (Roboto 32/600/36).
 * Each step reuses 579a94c, the page's icon-box widget: icon inline-start, 15px gap,
 * title Roboto 20/600, description Roboto 16/400, all #333333.
 */
const STEPS = [
  {
    n: '1',
    h: 'You decide the plan.',
    b: 'Choose who may receive money, the planned amounts and the timing. You can update planning information before submission. Changes after execution depend on the trust terms, applicable law and provider procedures.',
  },
  {
    n: '2',
    h: 'You record your messages.',
    b: 'Add a short video or written note for each planned distribution. Your message is not shown to the beneficiary until its scheduled release, subject to service terms, security procedures and disclosures required by law.',
  },
  {
    n: '3',
    h: 'The trustee administers the trust.',
    b: 'Your trust assets are held and administered by the approved trustee. The trustee acts under the trust documents, applicable law and its fiduciary duties.',
  },
  {
    n: '4',
    h: 'The right person is verified.',
    b: 'WILLPORT helps you keep beneficiary contact information current. When a distribution is due, the trustee or its authorized service providers verify the beneficiary and complete the required payment steps.',
  },
]

export default function HowItWorks() {
  return (
    <div className="wp-section" id="how-it-works">
      <div className="wp-section-inner">
        <div
          className="elementor-element elementor-element-8c5e057 elementor-widget elementor-widget-heading wp-section-heading"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">How it works</h2>
          </div>
        </div>

        {/* §4.1: on mobile these stack in the same 1–4 order */}
        <ol className="wp-steps">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="elementor-element elementor-element-579a94c elementor-position-inline-start elementor-mobile-position-inline-start elementor-view-default elementor-widget elementor-widget-icon-box"
              data-element_type="widget"
              data-widget_type="icon-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon wp-step-num" aria-hidden="true">{s.n}</span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <span className="elementor-icon-box-title"><span>{s.h}</span></span>
                    <p className="elementor-icon-box-description">{s.b}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
