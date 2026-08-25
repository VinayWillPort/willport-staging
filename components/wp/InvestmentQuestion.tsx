/**
 * §5.3 Investment question — adjacent disclosure component.
 *
 * The sheet allows either an FAQ item or an adjacent disclosure component; this is the
 * latter, placed directly beside the §6 accordion so the risk statement travels with
 * the answer. §5.3 explicitly forbids moving that risk wording to the footer alone.
 *
 * Typography reuses the page's own widgets: icon-box title (Roboto 20/600) for the
 * question, text-editor (Roboto 16/400/24) for the answer.
 *
 * No provider is named. §5.3 forbids mentioning Atomic publicly until the provider and
 * legal teams approve the name and role.
 */
export default function InvestmentQuestion() {
  return (
    <div className="wp-section wp-section-tight">
      <div className="wp-section-inner">
        <div className="wp-disclosure">
          <h3 className="wp-disclosure-title">Can trust assets be invested?</h3>
          <p className="wp-disclosure-body">
            Depending on eligibility, the account selected and separate agreements, trust assets may be
            invested through an authorized provider. The value of investments may rise or fall, and
            returns are not guaranteed. WILLPORT provides the technology experience and general
            educational information; it does not select securities or provide investment advice.
          </p>
        </div>
      </div>
    </div>
  )
}
