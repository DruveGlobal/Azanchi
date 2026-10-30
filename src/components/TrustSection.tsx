import type { CSSProperties } from "react";
import { ArrowRight, Bank, Card, Download, Globe, Lock, NoBot, Phone, Shield, Wave } from "./Icons";
import { RecordingChip } from "./ProductWindow";

const PAY_METHODS = [
  { icon: Card, title: "Card", body: "Verve, Mastercard and Visa, in naira." },
  { icon: Phone, title: "Mobile money", body: "MTN MoMo, M-Pesa, Airtel Money, Vodafone Cash." },
  { icon: Bank, title: "Bank transfer", body: "One-off transfer, confirmed in seconds." },
  { icon: Shield, title: "Paystack", body: "GH₵ and KSh at the day's rate, stated before you pay." },
];

export function TrustSection() {
  return (
    <section className="section trust" id="trust">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <span className="eyebrow">04 — Trust</span>
            <h2 className="serif balance">Recording you can see. Data you can take with you.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              Azanchi is a meeting assistant, not a silent recorder. The consent mechanism is on the
              screen, the model is on our servers, and your meetings are yours to export or delete.
            </p>
          </div>
        </div>

        <div className="trust-grid">
          <article className="trust-card trust-card--wide" data-reveal>
            <div className="trust-card__copy">
              <span className="trust-card__icon">
                <Shield size={16} />
              </span>
              <h3>The recording is never invisible.</h3>
              <p>
                A crimson chip stays on top of every app for as long as audio is captured. It is
                dismissible, never suppressed. That is the consent mechanism, not a UI nicety.
              </p>
            </div>
            <div className="trust-chip-stage" aria-hidden="true">
              <div className="trust-chip-stage__grid" />
              <div className="trust-chip-stage__app">
                <span />
                <span />
                <span />
              </div>
              <RecordingChip className="trust-chip" />
              <span className="trust-chip-stage__note mono">on top of every app · 12:47</span>
            </div>
          </article>

          <article className="trust-card" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>
            <span className="trust-card__icon">
              <NoBot size={16} />
            </span>
            <h3>No guest in the call.</h3>
            <p>
              Azanchi captures your machine&rsquo;s system audio. It never joins as a participant, so
              nobody is asked to admit a bot and the recording looks like a normal meeting.
            </p>
            <div className="trust-art trust-art--nobot" aria-hidden="true">
              <span className="trust-avatar">AO</span>
              <span className="trust-avatar">CE</span>
              <span className="trust-avatar trust-avatar--ghost">?</span>
              <span className="trust-strike" />
              <span className="trust-nobot-label mono">no bot</span>
            </div>
          </article>

          <article className="trust-card" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <span className="trust-card__icon">
              <Lock size={16} />
            </span>
            <h3>Managed, never mined.</h3>
            <p>
              Audio streams to Azanchi&rsquo;s managed transcription service and comes back as notes.
              No model runs on your laptop, and nothing is used to train one.
            </p>
            <div className="trust-art trust-art--flow" aria-hidden="true">
              <Wave size={15} />
              <span className="trust-flow-line" />
              <span className="trust-flow-lock">
                <Lock size={12} />
              </span>
              <span className="trust-flow-line" />
              <span className="trust-flow-file mono">.md</span>
            </div>
          </article>

          <article className="trust-card" data-reveal style={{ "--reveal-delay": "170ms" } as CSSProperties}>
            <span className="trust-card__icon">
              <Download size={16} />
            </span>
            <h3>Yours to take.</h3>
            <p>
              Export every meeting as Markdown, audio included where you kept it. Delete all notes
              and recordings in one move — the account and the plan stay.
            </p>
            <div className="trust-art trust-art--export" aria-hidden="true">
              <span className="trust-file">
                <span className="trust-file__name mono">pricing-rollout.md</span>
                <span className="trust-file__size mono">18 KB</span>
              </span>
              <span className="trust-file">
                <span className="trust-file__name mono">lagos-cohort.md</span>
                <span className="trust-file__size mono">24 KB</span>
              </span>
              <span className="trust-export-btn">
                <Download size={11} /> Export all
              </span>
            </div>
          </article>

          <article className="trust-card" data-reveal style={{ "--reveal-delay": "220ms" } as CSSProperties}>
            <span className="trust-card__icon">
              <Globe size={16} />
            </span>
            <h3>Built for the market you sell into.</h3>
            <p>
              Naira is the currency of record. Ghana and Kenya are charged in GH&#8373; and KSh at the
              day&rsquo;s rate — stated before confirmation, never as a surprise conversion.
            </p>
            <div className="trust-currencies" aria-hidden="true">
              <span>₦ NGN</span>
              <span>GH&#8373; GHS</span>
              <span>KSh KES</span>
            </div>
          </article>
        </div>

        <div className="pay" data-reveal>
          <div className="pay__intro">
            <span className="eyebrow eyebrow--plain">Local rails</span>
            <h3 className="serif">Pay the way you already pay.</h3>
            <p>
              Card, mobile money or bank transfer through Paystack. Cancel any time — nothing is
              deleted when a plan ends.
            </p>
            <a className="link-arrow" href="#pricing">
              See plans <ArrowRight size={14} className="arrow" />
            </a>
          </div>
          <div className="pay__methods">
            {PAY_METHODS.map(({ icon: Icon, title, body }) => (
              <div className="pay__method" key={title}>
                <span className="pay__icon">
                  <Icon size={15} />
                </span>
                <div>
                  <b>{title}</b>
                  <span>{body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
