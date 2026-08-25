import WaitlistForm from '@/components/WaitlistForm'

/**
 * §8.1 Trust waitlist.
 *
 * Built on the live green CTA band (container 2b877fd):
 *   2b877fd   band     #06653E · column flow · 80px 0 (60px 20px ≤767px) · 1200px
 *   8d0b656   logo     centred, img max-width 200px, 20px bottom margin
 *   a763cbc   heading  Roboto 32/600 → 24px at ≤767px, forced white on the green
 *   3c1a0ca6  support  Roboto 16/400, centred, #FFFFFF
 *
 * Section id is trust-waitlist, so both hero CTAs anchor here and share this form.
 */
export default function Waitlist() {
  return (
    <div
      id="trust-waitlist"
      className="elementor-element elementor-element-2b877fd e-flex e-con-boxed e-con e-parent wp-waitlist"
      data-id="2b877fd"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-8d0b656 elementor-widget elementor-widget-image"
          data-id="8d0b656"
          data-element_type="widget"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <img src="/img/logo-white.svg" alt="WILLPORT" />
          </div>
        </div>

        <div
          className="elementor-element elementor-element-a763cbc elementor-widget elementor-widget-heading wp-waitlist-h"
          data-id="a763cbc"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              We are opening the Legacy Distribution Trust experience in stages.
            </h2>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-3c1a0ca6 elementor-widget elementor-widget-text-editor"
          data-id="3c1a0ca6"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            Leave your email to receive availability and eligibility updates.
          </div>
        </div>

        <WaitlistForm />
      </div>
    </div>
  )
}
