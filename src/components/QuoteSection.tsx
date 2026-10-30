export function QuoteSection() {
  return (
    <section className="quote" id="quote">
      <div className="quote__aura" aria-hidden="true" />
      <div className="container quote__inner" data-reveal>
        <span className="eyebrow eyebrow--plain">What we believe</span>
        <blockquote className="serif balance">
          Calm is the feature.
        </blockquote>
        <p className="quote__body">
          Nothing moves unless a person or a live meeting moved it. No decorative motion, no
          attention taken without giving something back. The only thing that should ever demand your
          eyes is the recording chip — because consent should be impossible to miss.
        </p>
        <div className="quote__principles">
          <div>
            <span className="mono">01</span>
            <b>Visible by default</b>
            <p>The chip has no hidden mode. There is no setting that turns consent off.</p>
          </div>
          <div>
            <span className="mono">02</span>
            <b>Additive, never rewritten</b>
            <p>Notes only grow. Your own notes stay yours, and are never edited by AI.</p>
          </div>
          <div>
            <span className="mono">03</span>
            <b>Local rails, global polish</b>
            <p>₦, GH&#8373; and KSh through Paystack — with the finish of a product worth paying for.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
