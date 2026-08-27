/**
 * §3.1 Hero + §3.2 — exact structural replica of the live Elementor hero on /willporttrust/.
 *
 * §3.2 replaces widget fa2348a, which lives inside the hero's left column, not in a
 * separate band. Heading reuses dc83381, the hero's second heading widget.
 *
 * Container / widget IDs are the live ones, so the vendored post-27.css applies its real rules:
 *   section  padding 80px 0 · content-width 1200px · column-gap 40px · bg #ECF2FC
 *   columns  50% / 50%
 *   heading  Roboto 30px / 600 / 36px  → 22px at ≤767px
 *   body     Roboto 16px / 400 / 24px  · margin 20px 0
 *   button   Roboto 15px / 500 · padding 13px 25px · radius 5px · #06653E → #000 hover
 *
 * Copy is the change sheet's; the live pair of H2s becomes one H1 per its "exactly one H1" rule.
 */
export default function Hero() {
  return (
    <div
      className="elementor-element elementor-element-38887f9f e-flex e-con-boxed e-con e-parent"
      data-id="38887f9f"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-5e18f5eb e-con-full e-flex e-con e-child"
          data-id="5e18f5eb"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-4754fa90 elementor-widget elementor-widget-heading"
            data-id="4754fa90"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">
                Leave more than a lump sum.
              </h1>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-11b3ed8e elementor-widget elementor-widget-text-editor"
            data-id="11b3ed8e"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              Most inheritances arrive all at once, at the worst possible moment, with no instructions.
              WILLPORT lets you decide when the money arrives, how much arrives each time, and what you
              want to say when it does.
            </div>
          </div>

          <div
            className="elementor-element elementor-element-dc83381 elementor-widget elementor-widget-heading"
            data-id="dc83381"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                A trust that pays out on your schedule, not all at once.
              </h2>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-fa2348a elementor-widget elementor-widget-text-editor"
            data-id="fa2348a"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              {/* §3.2: three separate paragraphs — must not be merged into one */}
              <p>
                You choose the dates. A year after you&rsquo;re gone. Their thirtieth birthday. The year
                they finish school. Every year for twenty years.
              </p>
              <p>You choose the amounts. Even shares, or not.</p>
              <p>
                And you record what you want to say with each one, so the money never arrives without you.
              </p>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-6023f35e elementor-widget elementor-widget-button"
            data-id="6023f35e"
            data-element_type="widget"
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper wp-hero-buttons">
                <a className="elementor-button elementor-button-link elementor-size-sm" href="#trust-waitlist">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Join the trust waitlist</span>
                  </span>
                </a>
                <a
                  className="elementor-button elementor-button-link elementor-size-sm wp-btn-secondary"
                  href="#how-it-works"
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">See how it works</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right column — held the Wistia video, removed by §8.2 with no replacement supplied */}
        <div
          className="elementor-element elementor-element-47fc797f e-con-full e-flex e-con e-child"
          data-id="47fc797f"
          data-element_type="container"
        >
          {/* §8.2 — placeholder video. The approved asset, title, thumbnail, captions and
              transcript are still outstanding; this stands in so the layout can be reviewed.
              Responsive 16:9, lazy-loaded, no autoplay, privacy-enhanced host. */}
          <div className="wp-video-slot">
            <iframe
              src="https://www.youtube-nocookie.com/embed/D3MjTAsi_Ac?rel=0"
              title="WILLPORT trust overview (placeholder)"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
