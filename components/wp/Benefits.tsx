/**
 * §5.2 Legacy Distribution Trust benefits — four cards.
 *
 * Uses the page's real card component: the icon-box widget behind "Donate to a Charity"
 * (579a94c), with the same card treatment as §4.1 How it works.
 *
 * Icons are WillPort's own SVGs from the media library, all sharing the site's
 * #57B984 green / black palette — one per benefit rather than four identical marks.
 *
 * §5.2 forbids charity, tax-savings, asset-protection, special-needs and guaranteed
 * probate-avoidance cards — none are present.
 */
const BENEFITS = [
  {
    icon: '/img/calendar_icon.svg',
    h: 'Plan distributions over time.',
    b: 'Choose planned amounts and milestones, subject to the trust terms and trustee procedures.',
  },
  {
    icon: '/img/messaging_icon.svg',
    h: 'Add a personal message.',
    b: 'Attach a written, voice or video message to a planned milestone, subject to the service terms.',
  },
  {
    icon: '/img/group_gifting_icon.svg',
    h: 'Keep details connected.',
    b: 'Manage planning information, beneficiary details and messages in one WILLPORT experience.',
  },
  {
    icon: '/img/wealth_advisor_icon.svg',
    h: 'Professional trustee administration.',
    b: 'The approved trustee holds and administers trust assets under the trust documents, applicable law and its fiduciary duties.',
  },
]

export default function Benefits() {
  return (
    <div className="wp-section wp-section-tint-green">
      <div className="wp-section-inner">
        <div
          className="elementor-element elementor-element-8c5e057 elementor-widget elementor-widget-heading wp-section-heading"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              The benefits of a Legacy Distribution Trust
            </h2>
          </div>
        </div>

        <ul className="wp-cards">
          {BENEFITS.map((c) => (
            <li
              key={c.h}
              className="elementor-element elementor-element-579a94c elementor-position-inline-start elementor-mobile-position-inline-start elementor-view-default elementor-widget elementor-widget-icon-box"
              data-element_type="widget"
              data-widget_type="icon-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon">
                      <img src={c.icon} alt="" className="wp-card-icon" />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <span className="elementor-icon-box-title"><span>{c.h}</span></span>
                    <p className="elementor-icon-box-description">{c.b}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
