import { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  LogoMark,
  Search,
  Slash,
  Sparkle,
  TranscriptIcon,
  Users,
  Wave,
  SettingsIcon,
  Stop,
} from "./Icons";
import { useReducedMotion } from "../hooks/useSite";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function RecordingChip({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const [seconds, setSeconds] = useState(12 * 60 + 47);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className={`rec-chip ${className}`.trim()} aria-hidden="true">
      <span className="rec-chip__dot" />
      <span className="rec-chip__label">Recording</span>
      <span className="rec-chip__title">Pricing rollout</span>
      <span className="rec-chip__time mono">
        {pad(Math.floor(seconds / 60))}:{pad(seconds % 60)}
      </span>
      <span className="rec-chip__wave" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="rec-chip__stop">
        <Stop size={13} />
      </span>
    </div>
  );
}

const RAIL = [
  { icon: Calendar, label: "Today", active: true },
  { icon: Users, label: "Meetings" },
  { icon: TranscriptIcon, label: "Transcripts" },
  { icon: CheckSquare, label: "Action items" },
  { icon: Slash, label: "Recipes" },
];

export function ProductWindow() {
  return (
    <div
      className="product"
      role="img"
      aria-label="The Azanchi app during a meeting: live notes for a meeting called Pricing rollout, with decisions and action items being written as people speak, a speaker-attributed transcript tab, and a recording chip showing 12:47."
    >
      <div className="product__inner" aria-hidden="true">
        <div className="product__bar">
          <div className="traffic">
            <i />
            <i />
            <i />
          </div>
          <div className="product__title">Azanchi — Pricing rollout</div>
          <div className="product__bar-tools">
            <Search size={13} />
            <span className="product__kbd">⌘K</span>
            <span className="product__avatar">AO</span>
          </div>
        </div>

        <div className="product__body">
          <div className="app-rail">
            <span className="app-rail__mark">
              <LogoMark size={24} />
            </span>
            <div className="app-rail__nav">
              {RAIL.map(({ icon: Icon, label, active }) => (
                <span key={label} className={`app-rail__item${active ? " is-active" : ""}`} title={label}>
                  <Icon size={15} />
                </span>
              ))}
            </div>
            <span className="app-rail__item app-rail__bottom">
              <SettingsIcon size={15} />
            </span>
          </div>

          <div className="app-main">
            <div className="app-head">
              <div className="app-head__left">
                <span className="app-back">
                  <ChevronLeft size={14} />
                </span>
                <div>
                  <div className="app-head__title">Pricing rollout</div>
                  <div className="app-head__meta">
                    <span className="app-badge">Auto notes</span>
                    <span>Recorded · Wed, Oct 28</span>
                    <span className="app-dot" />
                    <span>9:31 am</span>
                  </div>
                </div>
              </div>
              <div className="app-head__right">
                <div className="app-faces">
                  <span style={{ background: "oklch(62% 0.09 30)" }}>AO</span>
                  <span style={{ background: "oklch(54% 0.09 250)" }}>CE</span>
                  <span style={{ background: "oklch(58% 0.09 150)" }}>YC</span>
                </div>
                <span className="app-room-count">3 in the room</span>
                <span className="app-secondary-btn">
                  <Sparkle size={12} /> Regenerate
                </span>
              </div>
            </div>

            <div className="app-tabs">
              <span className="app-tab is-active">
                Live notes <b>5</b>
              </span>
              <span className="app-tab">Transcript</span>
              <span className="app-tab">Your notes</span>
              <span className="app-tab">Enhanced</span>
            </div>

            <div className="app-ask">
              <span className="app-ask__slash">
                <Slash size={13} />
              </span>
              <span className="app-ask__placeholder">Type / to run a recipe on this meeting</span>
              <span className="app-ask__hint">↵ to run</span>
              <span className="app-ask__send">
                <ChevronRight size={13} />
              </span>
            </div>

            <div className="app-chips">
              <span className="app-recipe">
                <b>/email</b> Follow-up email
              </span>
              <span className="app-recipe">
                <b>/actions</b> Action items
              </span>
              <span className="app-recipe">
                <b>/decisions</b> Decision log
              </span>
              <span className="app-recipe app-recipe--more">All recipes</span>
            </div>

            <div className="app-cols">
              <div className="note">
                <div className="note__h">Pricing rollout</div>
                <p className="note__p">Free tier caps at 120 minutes a month.</p>

                <div className="note__line note__line--decision">
                  <span className="note__tag">Decision</span>
                  <span>Ship the annual plan before the Lagos cohort.</span>
                </div>

                <ul className="note__tasks">
                  <li>
                    <span className="note__box" />
                    <span>Send the new price sheet to Sales</span>
                    <span className="note__who">Ada · Oct 29</span>
                  </li>
                  <li>
                    <span className="note__box" />
                    <span>Instrument the LIMIT_REACHED 429</span>
                    <span className="note__who">Chidi · Oct 30</span>
                  </li>
                </ul>

                <div className="note__line">
                  <span className="note__tag">Decision</span>
                  <span>Pro stays at ₦16,500 for 1,200 minutes.</span>
                </div>

                <div className="note__block">
                  <div className="note__block-label">Open questions</div>
                  <div className="note__question">
                    Do we grandfather the existing monthly customers?
                  </div>
                  <div className="note__question">
                    Who owns the Ghana price page before Friday?
                  </div>
                </div>

                <div className="note__line note__line--writing">
                  <span className="note__tag note__tag--soft">Open</span>
                  <span>
                    Ghana bills in GH&#8373; at the day&rsquo;s rate
                    <span className="caret" />
                  </span>
                </div>

                <div className="note__updating">
                  <span className="pulse-dot" />
                  Updating · a beat behind the voice
                </div>
              </div>

              <aside className="room">
                <div className="room__h">In the room</div>
                <div className="room__people">
                  <div className="room__person">
                    <span className="room__face" style={{ background: "oklch(62% 0.09 30)" }}>AO</span>
                    <span>
                      <b>Ada Obi</b>
                      <small>Product</small>
                    </span>
                    <span className="room__speaking">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                  <div className="room__person">
                    <span className="room__face" style={{ background: "oklch(54% 0.09 250)" }}>CE</span>
                    <span>
                      <b>Chidi Eze</b>
                      <small>Sales</small>
                    </span>
                  </div>
                  <div className="room__person">
                    <span className="room__face" style={{ background: "oklch(58% 0.09 150)" }}>YC</span>
                    <span>
                      <b>Yewande Cole</b>
                      <small>Finance</small>
                    </span>
                  </div>
                </div>

                <div className="room__listen">
                  <Wave size={14} />
                  <span>Listening</span>
                  <span className="room__wave">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>

                <div className="room__stats">
                  <div>
                    <b>2</b>
                    <span>decisions</span>
                  </div>
                  <div>
                    <b>3</b>
                    <span>actions</span>
                  </div>
                  <div>
                    <b>42</b>
                    <span>turns</span>
                  </div>
                </div>

                <div className="room__time">
                  <span>16 min in</span>
                  <span>09:47</span>
                </div>
              </aside>
            </div>

            <div className="app-foot">
              <span>
                <span className="app-foot__dot" /> Everything saved
              </span>
              <span>Free plan · 84 of 120 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
