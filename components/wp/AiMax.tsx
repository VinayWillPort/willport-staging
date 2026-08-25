/**
 * §5.1 AI MAX.
 *
 * Replaces the live "Utilizing AI as a tool" section in place, reusing its widgets:
 *   06f715b  section  flex row · align center · 80px 0 padding (30px 20px ≤767px) · 1200px
 *   bdbbae4  column   50%  (heading + copy)
 *   f58f5e9  heading  Roboto 32/600 → 24px at ≤767px
 *   4d975c0  text     Roboto 16/400
 *   17e2f4b  column   50%  (image)
 *   7781e2c  image    width 100% · max-width 350px · 250px at ≤767px · no radius
 *
 * Image is production's own asset for this slot (aiimage.png), at production's size.
 * §5.1 requires a normal content section — deliberately not a chatbot pop-up. The live
 * "Learn more" button is dropped: §5.1 does not carry one.
 */
export default function AiMax() {
  return (
    <div
      className="elementor-element elementor-element-06f715b e-flex e-con-boxed e-con e-parent"
      data-id="06f715b"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-bdbbae4 e-con-full e-flex e-con e-child"
          data-id="bdbbae4"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-f58f5e9 elementor-widget elementor-widget-heading"
            data-id="f58f5e9"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                Questions, explained in plain English.
              </h2>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-4d975c0 elementor-widget elementor-widget-text-editor"
            data-id="4d975c0"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              AI MAX can provide general educational information about beneficiary types, trusted
              contacts, spouse-related planning questions and completing the WILLPORT experience. It does
              not provide legal, tax, investment or financial advice, and it does not replace advice from
              your own qualified professional.
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-17e2f4b e-con-full e-flex e-con e-child"
          data-id="17e2f4b"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-7781e2c elementor-widget elementor-widget-image"
            data-id="7781e2c"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img src="/img/ai-card.png" alt="" width={700} height={937} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
