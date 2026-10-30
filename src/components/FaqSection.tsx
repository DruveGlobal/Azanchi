import { useState } from "react";
import type { CSSProperties } from "react";
import { Plus } from "./Icons";

const FAQS = [
  {
    q: "Does Azanchi join my calls as a bot?",
    a: "No. Azanchi captures your machine's system audio — it is never a participant. Nobody has to admit a guest, and the recording still stays visible: the crimson chip is on top of every app for as long as audio is captured.",
  },
  {
    q: "Which meeting apps does it work with?",
    a: "Zoom, Microsoft Teams and Google Meet, on macOS 14+ and Windows. Google Calendar tells Azanchi what is next. Sign in with Google — no setup wizard, no password, and no model to download. Microsoft work accounts are on the way.",
  },
  {
    q: "How do I download and install Azanchi?",
    a: "Choose your build on this page — Apple silicon or Intel for macOS, or the 64-bit Windows 10/11 installer. Open the DMG or EXE, sign in with Google, and the short setup covers your microphone, meeting audio and record shortcut. The free plan needs no card.",
  },
  {
    q: "How long before the notes appear?",
    a: "About 90 seconds behind the voice. Live notes are additive: a line is added once and only marked later, so nothing you have already read is rewritten behind you. The transcript is speaker-attributed as people speak.",
  },
  {
    q: "What happens when I run out of free minutes?",
    a: "Recording does not stop, and the meeting you were in is saved in full. Live notes pause at the limit, everything you already have stays readable, and the audio kept on your machine is never deleted. Upgrade and Azanchi picks up where it stopped — or wait until the 1st and your 120 minutes come back.",
  },
  {
    q: "Which languages are supported?",
    a: "English (Global), Kiswahili and Français. Auto-detect follows the speaker, including mid-sentence switches. We do not list languages the transcription service cannot actually deliver.",
  },
  {
    q: "Is my audio used to train models?",
    a: "No. Audio streams to Azanchi's managed transcription service and comes back as a transcript. Nothing runs on your laptop, no API key is involved, and nothing is ever used to train a model. You can export every meeting as Markdown, or delete all notes and audio in one move.",
  },
  {
    q: "How do I pay, and can I cancel?",
    a: "Through Paystack — card, mobile money (MTN MoMo, M-Pesa, Airtel Money, Vodafone Cash) or bank transfer. Nigeria is billed in naira; Ghana and Kenya are charged in GH₵ and KSh at the day's rate, stated before you confirm. Cancel any time, and nothing is deleted when the plan ends.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro" data-reveal>
          <span className="eyebrow">06 — Questions</span>
          <h2 className="serif balance">The things people ask before they switch.</h2>
          <p className="lead">
            If yours is not here, write to us. A person answers, usually the same day.
          </p>
          <a className="btn btn--secondary" href="mailto:hello@azanchi.africa">
            hello@azanchi.africa
          </a>
        </div>

        <div className="faq__list" data-reveal style={{ "--reveal-delay": "100ms" } as CSSProperties}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <Plus size={14} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
