import type { CSSProperties, ComponentType } from "react";
import { ArrowRight, Calendar, Download, Play, Video, Wave } from "./Icons";
import { ProductWindow, RecordingChip } from "./ProductWindow";

function UsersMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="11" height="14" rx="2.4" fill="currentColor" opacity=".16" />
      <circle cx="8.5" cy="9.6" r="2" fill="currentColor" />
      <path d="M5.2 15.2a3.6 3.6 0 0 1 6.6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 8.4a2.6 2.6 0 0 1 0 5.2M16.6 6.6a5.2 5.2 0 0 1 0 10.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const MEETS: { icon: ComponentType<{ size?: number }>; label: string }[] = [
  { icon: Video, label: "Zoom" },
  { icon: UsersMark, label: "Microsoft Teams" },
  { icon: Play, label: "Google Meet" },
  { icon: Calendar, label: "Google Calendar" },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__aura" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__copy">
        <a className="announce" href="#live-notes" data-reveal>
          <span className="announce__tag">New</span>
          <span className="announce__text">Live notes land 90 seconds behind the voice</span>
          <ArrowRight size={13} className="announce__arrow" />
        </a>

        <h1 className="hero__h serif balance" data-reveal style={{ "--reveal-delay": "70ms" } as CSSProperties}>
          Notes that take <em>themselves</em>.
        </h1>

        <p className="hero__lead balance" data-reveal style={{ "--reveal-delay": "140ms" } as CSSProperties}>
          Azanchi runs on your desktop while you’re in Zoom, Teams or Google Meet. It never joins the
          call — it writes what matters while people are still talking, and hands you the follow-up
          before you’re back at your desk.
        </p>

        <div className="hero__cta" data-reveal style={{ "--reveal-delay": "210ms" } as CSSProperties}>
          <a className="btn btn--primary btn--large" href="#download">
            <Download size={16} />
            Download Azanchi
          </a>
          <a className="btn btn--secondary btn--large" href="#live-notes">
            <span className="cta-play">
              <Play size={11} />
            </span>
            See it in action
          </a>
        </div>

        <p className="hero__fine" data-reveal style={{ "--reveal-delay": "280ms" } as CSSProperties}>
          <span>Free plan · 120 minutes every month</span>
          <span className="hero__fine-dot" aria-hidden="true" />
          <span>No card</span>
          <span className="hero__fine-dot" aria-hidden="true" />
          <span>macOS &amp; Windows</span>
        </p>
      </div>

      <div className="hero__stage-wrap">
        <div className="hero__stage container">
          <div className="hero__stage-glow" aria-hidden="true" />
          <div className="hero__window" data-reveal style={{ "--reveal-delay": "320ms" } as CSSProperties}>
            <ProductWindow />
            <RecordingChip className="hero__chip" />
          </div>
          <div className="hero__stage-foot" data-reveal style={{ "--reveal-delay": "420ms" } as CSSProperties}>
            <span className="eyebrow eyebrow--plain">
              <span className="crosshair" aria-hidden="true" />
              Inside Azanchi, mid-meeting
            </span>
            <span className="hero__stage-note">No bot joins the call. Ever.</span>
          </div>
        </div>
      </div>

      <div className="container hero__meets" data-reveal>
        <span className="eyebrow eyebrow--plain">Works alongside</span>
        <div className="meets">
          {MEETS.map(({ icon: Icon, label }) => (
            <span className="meets__item" key={label}>
              <Icon size={15} />
              {label}
            </span>
          ))}
        </div>
        <span className="hero__meets-note">
          <Wave size={13} /> System audio, not a meeting guest
        </span>
      </div>
    </section>
  );
}
