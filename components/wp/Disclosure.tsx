/**
 * §5.4 Bottom-of-page disclosure.
 *
 * Small-text component immediately above the global site footer. A normal HTML text
 * block, not text inside an image, as §5.4 requires.
 *
 * "approved trustee" is deliberately NOT linked — §5.4 permits a link only once the
 * destination role/disclosure page is approved, and no such page exists yet.
 *
 * This line does not replace nearby disclosures: §5.3's risk wording stays beside the
 * investment answer, per that section's own rule.
 */
export default function Disclosure() {
  return (
    <div className="wp-disclaimer">
      <div className="wp-section-inner">
        <p className="wp-disclaimer-body">
          WILLPORT provides technology and general educational information. Trust services are provided
          by an approved trustee. WILLPORT is not a law firm, bank, trustee or investment adviser and
          does not provide legal, tax, investment or financial advice.
        </p>
      </div>
    </div>
  )
}
