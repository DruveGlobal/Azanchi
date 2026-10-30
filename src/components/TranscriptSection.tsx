import { useState } from "react";
import type { CSSProperties } from "react";
import { Globe, Search, Users } from "./Icons";

const ROWS = [
  {
    speaker: "Ada Obi",
    initials: "AO",
    role: "Product",
    time: "09:34",
    color: "oklch(62% 0.09 30)",
    text: "If we cap the free tier at 120 minutes, people hit the wall in their third week. That is the annual plan conversation.",
  },
  {
    speaker: "Chidi Eze",
    initials: "CE",
    role: "Sales",
    time: "09:35",
    color: "oklch(54% 0.09 250)",
    text: "Then the annual plan has to land before the Lagos cohort. We cannot ship two pricing stories at once.",
  },
  {
    speaker: "Yewande Cole",
    initials: "YC",
    role: "Finance",
    time: "09:36",
    color: "oklch(58% 0.09 150)",
    text: "Ghana is paying in cedis. Put GH\u20b5 on the page \u2014 do not convert it at checkout.",
  },
];

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? <mark key={i}>{part}</mark> : part,
  );
}

export function TranscriptSection() {
  const [query, setQuery] = useState("annual");
  const matches = ROWS.reduce((count, row) => {
    if (!query.trim()) return count;
    const re = new RegExp(query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig");
    return count + (row.text.match(re)?.length ?? 0);
  }, 0);

  return (
    <section className="section transcript" id="transcript">
      <div className="transcript__aura" aria-hidden="true" />
      <div className="container transcript__grid">
        <div className="transcript__demo" data-reveal>
          <div className="tx">
            <div className="tx__bar">
              <span className="tx__title">Transcript</span>
              <span className="tx__badge">
                <Users size={11} /> 3 speakers
              </span>
              <span className="tx__bar-right mono">42 turns · 24 min</span>
            </div>

            <div className="tx__search">
              <Search size={13} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search this transcript"
                aria-label="Search this transcript"
              />
              {query ? (
                <span className="tx__count mono">
                  {matches} {matches === 1 ? "match" : "matches"}
                </span>
              ) : (
                <span className="kbd">⌘F</span>
              )}
            </div>

            <div className="tx__rows">
              {ROWS.map((row) => (
                <div className="tx__row" key={row.initials}>
                  <div className="tx__rail">
                    <span className="tx__face" style={{ background: row.color }}>
                      {row.initials}
                    </span>
                    <span className="tx__thread" />
                  </div>
                  <div className="tx__content">
                    <div className="tx__meta">
                      <b>{row.speaker}</b>
                      <span>{row.role}</span>
                      <span className="tx__time mono">{row.time}</span>
                    </div>
                    <p>{highlight(row.text, query)}</p>
                  </div>
                </div>
              ))}
              <div className="tx__row tx__row--live">
                <div className="tx__rail">
                  <span className="tx__face tx__face--live">
                    <span className="pulse-dot pulse-dot--green" />
                  </span>
                </div>
                <div className="tx__content">
                  <div className="tx__meta">
                    <b>Yewande Cole</b>
                    <span className="tx__live-tag">speaking</span>
                    <span className="tx__time mono">09:37</span>
                  </div>
                  <p className="tx__partial">
                    And for Kenya, if we bill in shillings then the rate
                    <span className="caret" />
                  </p>
                </div>
              </div>
            </div>

            <div className="tx__foot">
              <span>
                <span className="tx__live-dot" /> English (Global) · auto-detect
              </span>
              <span className="mono">Every line attributed</span>
            </div>
          </div>

          <div className="tx-caption mono" style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <span className="tx-caption__key">⌘F</span> search every line, from any meeting
          </div>
        </div>

        <div className="transcript__copy" data-reveal style={{ "--reveal-delay": "110ms" } as CSSProperties}>
          <span className="eyebrow">
            <span className="live__index mono" style={{ color: "var(--muted)" }}>
              02
            </span>{" "}
            &mdash; Transcript
          </span>
          <h2 className="serif balance">Every line has a name on it.</h2>
          <p className="lead">
            Speaker attribution is labelled as people speak, not guessed afterwards. Search any word,
            jump to the turn, and read the room in the order it happened.
          </p>

          <ul className="feature-list">
            <li>
              <span className="feature-list__icon feature-list__icon--box">
                <Users size={13} />
              </span>
              <div>
                <b>Attribution is a first-class thing.</b> Five speakers, five names, every turn. Not
                a &ldquo;Speaker 1&rdquo; you have to decode later.
              </div>
            </li>
            <li>
              <span className="feature-list__icon feature-list__icon--box">
                <Search size={13} />
              </span>
              <div>
                <b>Search across every note.</b> Transcripts, live notes and your own writing, in one
                field — with the turn it came from.
              </div>
            </li>
            <li>
              <span className="feature-list__icon feature-list__icon--box">
                <Globe size={13} />
              </span>
              <div>
                <b>Languages that follow the room.</b> English, Kiswahili and Fran&ccedil;ais, with
                auto-detect that keeps up with mid-sentence switches.
              </div>
            </li>
          </ul>

          <div className="transcript__fine mono">
            <span>NO BOT</span> · the audio comes from your machine, not a meeting guest
          </div>
        </div>
      </div>
    </section>
  );
}
