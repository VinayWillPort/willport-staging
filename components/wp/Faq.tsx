'use client'
import { useState } from 'react'

/**
 * §6 Questions people ask.
 *
 * Every question is real text and keyboard operable, and the open/close control has a
 * visible focus state — all three required by §6. No FAQPage schema is emitted: §6
 * permits it only once the approved answers are live on production.
 *
 * The pricing question is deliberately absent until the fee schedule is supplied.
 */
const FAQ = [
  { q: 'Can I change my plan?',
    a: 'You can update your planning information before submission. Changes after the trust is executed depend on the trust terms, applicable law and provider procedures.' },
  { q: 'Who holds trust assets?',
    a: 'Your trust assets are held and administered by the approved trustee. The trustee acts under the trust documents, applicable law and its fiduciary duties.' },
  { q: 'Do I need a lawyer?',
    a: 'WILLPORT does not require you to retain an attorney to explore the service. Because a trust affects legal rights, you should consider consulting your own attorney before signing or funding it. WILLPORT provides technology and general educational information; it does not provide legal advice or represent you.' },
  { q: 'What happens after death?',
    a: 'After the trustee receives and verifies the required notice and documents, it completes the checks required by the trust and applicable law. The trustee then administers approved distributions under the trust schedule. WILLPORT supports the customer experience, records and scheduled personal messages.' },
  { q: 'Can a trust help avoid probate?',
    a: 'Assets properly transferred to and held in a valid trust may pass outside probate. Other assets or circumstances may still require probate.' },
  { q: 'Is a trust private?',
    a: 'Trust administration is generally more private than court-supervised probate, but confidentiality is not absolute and depends on the trust, the assets and applicable law.' },
  { q: 'What if WILLPORT changes or exits?',
    a: 'Trust assets are held and administered by the trustee, not WILLPORT. Service continuity, technology access and any transition process are governed by the trust documents and service agreements.' },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="wp-section">
      <div className="wp-section-inner">
        <div
          className="elementor-element elementor-element-8c5e057 elementor-widget elementor-widget-heading wp-section-heading"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Questions people ask</h2>
          </div>
        </div>

        <div className="wp-faq">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`wp-faq-item${isOpen ? ' is-open' : ''}`}>
                <h3 className="wp-faq-h">
                  <button
                    type="button"
                    className="wp-faq-btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="wp-faq-q">{item.q}</span>
                    <span className="wp-faq-mark" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="20" height="20">
                        <path d="M4 10h12" />
                        <path d="M10 4v12" className="wp-faq-bar" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="wp-faq-panel"
                  hidden={!isOpen}
                >
                  <p className="wp-faq-a">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
