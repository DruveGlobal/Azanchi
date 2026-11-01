import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Download, Lock, Mail, Shield, Wave } from "./Icons";
import { mailto } from "../data/contact";
import { CURRENCIES, detectCurrency, formatPrice } from "../data/currency";

type Period = "monthly" | "annual";

type Plan = {
  id: string;
  name: string;
  forWho: string;
  price: Record<Period, number>;
  period: Record<Period, string>;
  note: string | Record<Period, string>;
  summary: string;
  features: string[];
  cta: string;
  href: string;
  pick?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    forWho: "For one meeting a week",
    price: { monthly: 0, annual: 0 },
    period: { monthly: "/month", annual: "/month" },
    note: "Free for good",
    summary: "120 minutes of notes a month. Enough to find out whether Azanchi is right for you.",
    features: [
      "120 minutes a month, renewing on the 1st",
      "Live notes while the meeting is running",
      "Speaker-attributed transcript",
      "One summary per meeting",
    ],
    cta: "Download free",
    href: "#download",
  },
  {
    id: "pro",
    name: "Pro",
    forWho: "For anyone in meetings all day",
    price: { monthly: 16500, annual: 181500 },
    period: { monthly: "/month", annual: "/year" },
    note: { monthly: "About an hour of meetings every working day", annual: "One month free" },
    summary: "1,200 minutes a month — about an hour of meetings every working day.",
    features: [
      "1,200 minutes a month, resetting on the 1st",
      "Everything in Free, plus action items and the follow-up email",
      "Unlimited enhanced rewrites — summary, actions, email",
      "Automatic detection for Zoom, Teams and Google Meet",
    ],
    cta: "Get Pro",
    href: "#download",
    pick: true,
  },
  {
    id: "business",
    name: "Business",
    forWho: "For a team that meets together",
    price: { monthly: 28500, annual: 313500 },
    period: { monthly: "/seat /month", annual: "/seat /year" },
    note: { monthly: "1,500 minutes per user, pooled across the team", annual: "One month free, per seat" },
    summary: "1,500 minutes a month per user, and one place for the whole team's notes.",
    features: [
      "1,500 minutes a month per user, pooled across the team",
      "Everything in Pro, for every seat",
      "Shared workspace, folders and seat management",
      "Invoiced billing in ₦, GH₵ or KSh",
    ],
    cta: "Talk to sales",
    href: mailto("Azanchi Business"),
  },
];

const INCLUDED = [
  { icon: Shield, label: "Visible recording chip on every call" },
  { icon: Wave, label: "Managed transcription, no API keys" },
  { icon: Download, label: "Export every meeting as Markdown" },
  { icon: Lock, label: "Audio never used to train models" },
];

export function PricingSection() {
  const [period, setPeriod] = useState<Period>("monthly");
  const [currency] = useState(detectCurrency);

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <span className="eyebrow">05 — Pricing</span>
            <h2 className="serif balance">Start free. Pay when the meetings pile up.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              120 minutes every month, free for good. Ghana and Kenya are charged in GH&#8373; and
              KSh at the rate shown at checkout.
            </p>
            <div className="segmented" role="group" aria-label="Billing period" data-test="period-toggle">
              <button
                type="button"
                onClick={() => setPeriod("monthly")}
                aria-pressed={period === "monthly"}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setPeriod("annual")}
                aria-pressed={period === "annual"}
              >
                Annual
                <span className="segmented__save">1 month free</span>
              </button>
            </div>
          </div>
        </div>

        <div className="plans">
          {PLANS.map((plan, i) => (
            <article
              className={`plan${plan.pick ? " plan--pick" : ""}`}
              key={plan.id}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            >
              {plan.pick && <span className="plan__pick">Most chosen</span>}
              <div className="plan__head">
                <div>
                  <h3 className="plan__name">{plan.name}</h3>
                  <p className="plan__for">{plan.forWho}</p>
                </div>
              </div>

              <div className="plan__pricing">
                <div className="plan__price serif">
                  {formatPrice(plan.price[period], currency)}
                  <small>{plan.period[period]}</small>
                </div>
                <p className="plan__note">
                  {typeof plan.note === "string" ? plan.note : plan.note[period]}
                </p>
              </div>

              <p className="plan__summary">{plan.summary}</p>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="plan__check">
                      <Check size={11} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                className={`btn btn--block${plan.pick ? " btn--primary" : plan.id === "business" ? " btn--quiet" : " btn--secondary"}`}
                href={plan.href}
              >
                {plan.cta}
                {plan.id !== "business" ? (
                  <ArrowRight size={14} className="arrow" />
                ) : (
                  <Mail size={14} className="arrow" />
                )}
              </a>
            </article>
          ))}
        </div>

        <div className="pricing-foot" data-reveal>
          <div className="pricing-included">
            {INCLUDED.map(({ icon: Icon, label }) => (
              <span key={label}>
                <Icon size={13} /> {label}
              </span>
            ))}
          </div>
          <p className="pricing-legal">
            Prices shown in {CURRENCIES[currency].name}
            {currency === "NGN" ? "" : `, billed in ${CURRENCIES[currency].symbol} at the rate shown at checkout`}. Ghana:{" "}
            {formatPrice(16500, "GHS")} a month · Kenya: {formatPrice(16500, "KES")} a month, converted
            at the rate shown at checkout, tax added at checkout.
          </p>
          <p className="pricing-legal">
            Download free, then upgrade inside the app · secured by Paystack · cancel any time ·
            annual is one month free.
          </p>
        </div>
      </div>
    </section>
  );
}
