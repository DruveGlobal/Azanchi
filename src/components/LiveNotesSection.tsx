import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Check, Replay, Sparkle } from "./Icons";
import { useInView, useReducedMotion } from "../hooks/useSite";

const NOTE_LINES = [
  <p className="ln__p" key="p">
    Free tier caps at <b>120 minutes</b> a month.
  </p>,
  <div className="ln__row" key="decision">
    <span className="ln__tag ln__tag--decision">Decision</span>
    <span>Ship the annual plan before the Lagos cohort.</span>
  </div>,
  <div className="ln__row ln__row--task" key="task1">
    <span className="ln__box" />
    <span>Send the new price sheet to Sales</span>
    <span className="ln__who">Ada · Oct 29</span>
  </div>,
  <div className="ln__row ln__row--task" key="task2">
    <span className="ln__box" />
    <span>Instrument the LIMIT_REACHED 429</span>
    <span className="ln__who">Chidi · Oct 30</span>
  </div>,
  <div className="ln__row" key="open">
    <span className="ln__tag ln__tag--open">Open</span>
    <span>Ghana bills in GH&#8373; at the day&rsquo;s rate — confirm with Finance.</span>
  </div>,
];

const STATS = [
  { n: "2", label: "decisions" },
  { n: "3", label: "action items" },
  { n: "42", label: "turns" },
];

export function LiveNotesSection() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [visible, setVisible] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(NOTE_LINES.length);
      return;
    }
    if (!inView) return;
    setVisible(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= NOTE_LINES.length) window.clearInterval(id);
    }, 640);
    return () => window.clearInterval(id);
  }, [inView, reduced, run]);

  const replay = useCallback(() => {
    setRun((r) => r + 1);
    setVisible(0);
  }, []);

  return (
    <section className="section section--ink live" id="live-notes">
      <div className="live__aura" aria-hidden="true" />
      <div className="container live__grid">
        <div className="live__copy" data-reveal>
          <span className="eyebrow eyebrow--plain live__eyebrow">
            <span className="live__index mono">01</span> &mdash; Live notes
          </span>
          <h2 className="serif balance">The note is being written while you&rsquo;re still talking.</h2>
          <p className="live__lead">
            Most tools hand you a transcript an hour later. Azanchi writes in public — decisions and
            action items land about 90 seconds behind the voice, added once and never rewritten
            behind you.
          </p>

          <ul className="feature-list feature-list--ink">
            <li>
              <span className="feature-list__icon">
                <Check size={12} />
              </span>
              <div>
                <b>Additive, never rewritten.</b> A line is added once and only marked later. Nothing
                you have read changes under you.
              </div>
            </li>
            <li>
              <span className="feature-list__icon">
                <Check size={12} />
              </span>
              <div>
                <b>Decisions and owners, not a wall of text.</b> Names, dates and next steps are
                pulled out as they are said.
              </div>
            </li>
            <li>
              <span className="feature-list__icon">
                <Check size={12} />
              </span>
              <div>
                <b>A visible writing state.</b> You watch the note arrive. No spinner pretending
                something is happening.
              </div>
            </li>
          </ul>

          <div className="live__meta">
            <span className="mono">~90s</span>
            <span>behind the voice</span>
            <span className="live__meta-sep" aria-hidden="true" />
            <span className="mono">120</span>
            <span>free minutes every month</span>
          </div>
        </div>

        <div className="live__demo" ref={ref} data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <div className="live-panel">
            <div className="live-panel__bar">
              <span className="live-panel__dot" />
              <span className="live-panel__dot" />
              <span className="live-panel__dot" />
              <span className="live-panel__title mono">Pricing rollout — Live notes</span>
              <span className="live-panel__saved">
                <span className="pulse-dot" /> saving
              </span>
            </div>

            <div className="live-panel__head">
              <div>
                <div className="live-panel__h">Pricing rollout</div>
                <div className="live-panel__meta">
                  <span>Wed, Oct 28</span>
                  <span aria-hidden="true">·</span>
                  <span>9:31 am</span>
                  <span aria-hidden="true">·</span>
                  <span>Zoom</span>
                </div>
              </div>
              <div className="live-panel__faces">
                <span style={{ background: "oklch(62% 0.09 30)" }}>AO</span>
                <span style={{ background: "oklch(54% 0.09 250)" }}>CE</span>
                <span style={{ background: "oklch(58% 0.09 150)" }}>YC</span>
              </div>
            </div>

            <div className="live-panel__tabs">
              <span className="is-active">
                Live notes <b>5</b>
              </span>
              <span>Transcript</span>
              <span>Enhanced</span>
              <span className="live-panel__updating">
                <Sparkle size={11} /> Updating
              </span>
            </div>

            <div className="live-panel__body">
              {NOTE_LINES.map((line, i) => (
                <div className={`ln${i < visible ? " is-visible" : ""}`} key={i} aria-hidden={i >= visible}>
                  {line}
                </div>
              ))}
              {visible < NOTE_LINES.length && (
                <div className="ln-skeleton" aria-hidden="true">
                  <span style={{ width: "72%" }} />
                  <span style={{ width: "48%" }} />
                </div>
              )}
              {visible >= NOTE_LINES.length && (
                <>
                  <div className="ln-next" aria-hidden="true">
                    <span style={{ width: "58%" }} />
                    <span style={{ width: "34%" }} />
                  </div>
                  <div className="ln-writing">
                    <span className="caret" />
                    <span>Listening — the next sentence will land here.</span>
                  </div>
                </>
              )}
            </div>

            <div className="live-panel__foot">
              <div className="live-panel__stats">
                {STATS.map((s) => (
                  <span key={s.label}>
                    <b>{s.n}</b> {s.label}
                  </span>
                ))}
              </div>
              <button type="button" className="replay" onClick={replay}>
                <Replay size={12} /> Replay
              </button>
            </div>
          </div>

          <div className="live-caption mono">
            <span className="live-caption__dot" /> recorded on this machine · transcribed on the managed
            service
          </div>
        </div>
      </div>
    </section>
  );
}
