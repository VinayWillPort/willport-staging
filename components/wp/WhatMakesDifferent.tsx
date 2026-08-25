/**
 * §4.2 What makes WILLPORT different.
 *
 * Replaces the live "WILLPORT Trust is a team of experienced professionals…" section
 * in place, reusing its actual Elementor widgets so the layout is identical:
 *   78ddfbc   section   flex row · 80px 0 padding · 1200px content · 40px column gap
 *   430f11da  column    50%  (heading + copy)
 *   8c5e057   heading   Roboto 32/600/36 → 22px at ≤767px
 *   4b0114d9  text      Roboto 16/400/24
 *   2d6d9921  column    50%  (image)
 *   74e04448  image     width 100% · max-width 560px · radius 30px · 40px top margin
 *
 * Image is the same asset production uses in this slot: father_.jpg.
 * §4.2 forbids attorney-comparison graphics, so nothing else is added.
 */
export default function WhatMakesDifferent() {
  return (
    <div
      className="elementor-element elementor-element-78ddfbc e-flex e-con-boxed e-con e-parent"
      data-id="78ddfbc"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-430f11da e-con-full e-flex e-con e-child"
          data-id="430f11da"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-8c5e057 elementor-widget elementor-widget-heading"
            data-id="8c5e057"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                The document is only the beginning.
              </h2>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-4b0114d9 elementor-widget elementor-widget-text-editor"
            data-id="4b0114d9"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              The document is only the beginning. WILLPORT keeps your plan, distribution schedule,
              beneficiary details and personal messages connected in one experience. A Nevada-chartered
              trust company serves as trustee and administers trust assets and distributions under the
              governing documents and applicable law.
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-2d6d9921 e-con-full e-flex e-con e-child"
          data-id="2d6d9921"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-74e04448 elementor-widget elementor-widget-image"
            data-id="74e04448"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img src="/img/father.jpg" alt="" width={1024} height={1024} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
