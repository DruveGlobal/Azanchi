import type { CSSProperties } from "react";
import { ArrowRight, Check, Lock, Mail, Sparkle } from "./Icons";
import { RecordingChip } from "./ProductWindow";

function StepArtOne() {
  return (
    <div className="step-art step-art--signin">
      <div className="signin-card">
        <div className="signin-card__head">
          <span className="signin-card__mark">
            <span />
            <span className="signin-card__word">Azanchi</span>
          </span>
          <span className="signin-card__tag">Welcome</span>
        </div>
        <p className="signin-card__line">Sign in to get started</p>
        <span className="signin-card__btn signin-card__btn--google">
          <span className="g-dot">G</span> Continue with Google
        </span>
        <span className="signin-card__btn signin-card__btn--disabled">
          <span className="ms-squares">
            <i />
            <i />
            <i />
            <i />
          </span>
          Continue with Microsoft
          <span className="signin-card__soon">Soon</span>
        </span>
        <span className="signin-card__fine">
          <Lock size={10} /> No password, no setup wizard
        </span>
      </div>
    </div>
  );
}

function StepArtTwo() {
  return (
    <div className="step-art step-art--chip">
      <div className="cal-ghost">
        <span className="cal-ghost__time">Now</span>
        <div>
          <b>Pricing rollout</b>
          <span>Zoom · 9:31 – 10:15</span>
        </div>
        <span className="cal-ghost__live">
          <span className="rec-dot" /> Live
        </span>
      </div>
      <RecordingChip />
      <div className="step-art__caption">
        <Check size={12} /> Always on screen, always dismissible
      </div>
    </div>
  );
}

function StepArtThree() {
  return (
    <div className="step-art step-art--output">
      <div className="output-ghost">
        <div className="output-ghost__head">
          <span className="output-ghost__badge">
            <Sparkle size={10} /> Follow-up email
          </span>
          <span className="output-ghost__copy">Copy</span>
        </div>
        <div className="output-ghost__subject">
          <Mail size={11} /> Pricing rollout — next steps
        </div>
        <p>
          Hi all — thanks for the time today. We&rsquo;re shipping the annual plan before the Lagos
          cohort, with Ghana billed in GH&#8373; at the day&rsquo;s rate.
        </p>
        <p className="output-ghost__foot">Ada will send the new price sheet by Thursday.</p>
        <span className="output-ghost__cursor" />
      </div>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    label: "Download",
    title: "The app, then four seconds to sign in.",
    body: "Pick the Mac or Windows build. Google sign-in, no password, no model to download, no bot to invite. Azanchi is ready before the small talk ends.",
    art: <StepArtOne />,
  },
  {
    n: "02",
    label: "Meet",
    title: "It notices the call. You see the chip.",
    body: "Azanchi picks up Zoom, Teams and Meet from your system audio. The crimson recording chip stays on screen for as long as audio is captured — and it never records invisibly.",
    art: <StepArtTwo />,
  },
  {
    n: "03",
    label: "Leave",
    title: "The note is already written.",
    body: "Live notes fill in during the call. When it ends, the summary, action items and follow-up email are one click away — or one slash command.",
    art: <StepArtThree />,
  },
];

export function HowItWorks() {
  return (
    <section className="section how" id="product">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="serif balance">From &ldquo;can you take notes?&rdquo; to done.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              One desktop app, three moments. Azanchi does the part of the meeting nobody wants to do
              — and leaves the part that needs a person to you.
            </p>
            <a className="link-arrow" href="#live-notes">
              Watch it write <ArrowRight size={14} className="arrow" />
            </a>
          </div>
        </div>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <li className="step" key={step.n} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
              <div className="step__top">
                <span className="step__n mono">{step.n}</span>
                <span className="step__label">{step.label}</span>
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
              <div className="step__art-wrap">{step.art}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
