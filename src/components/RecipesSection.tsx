import { useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, Check, Copy, Mail, Slash, Sparkle } from "./Icons";

type RecipeId = "email" | "actions" | "decisions" | "summary";

const RECIPES: { id: RecipeId; alias: string; label: string; note: string }[] = [
  { id: "email", alias: "/email", label: "Follow-up email", note: "in your voice" },
  { id: "actions", alias: "/actions", label: "Action items", note: "owner + date" },
  { id: "decisions", alias: "/decisions", label: "Decision log", note: "the record" },
  { id: "summary", alias: "/summary", label: "Summary", note: "one paragraph" },
];

const COPY: Record<RecipeId, string> = {
  email: `Subject: Pricing rollout — next steps

Hi Chidi and Yewande,

Thanks for the time today. We're shipping the annual plan before the Lagos cohort, with the free tier staying at 120 minutes a month.

Ada will send the new price sheet to Sales by Thursday, and Chidi is instrumenting the LIMIT_REACHED 429 so we can see the wall before the customer does.

Ghana and Kenya will be charged in GH₵ and KSh at the day's rate — stated on the page, not converted at checkout.

Ada`,
  actions: `Action items — Pricing rollout

- Send the new price sheet to Sales — Ada Obi — Oct 29
- Instrument the LIMIT_REACHED 429 — Chidi Eze — Oct 30
- Confirm GH₵ / KSh wording with Finance — Yewande Cole — Oct 31`,
  decisions: `Decision log — Pricing rollout

- Annual plan ships before the Lagos cohort — Oct 28 — Ada Obi
- Ghana bills in GH₵ at the day's rate — Oct 28 — Yewande Cole
- Free tier stays at 120 minutes a month — Oct 28 — the room`,
  summary: `Azanchi's free tier stays at 120 minutes a month. Pro is 1,200 minutes at ₦16,500; Business is 1,500 minutes per user at ₦28,500 per seat. The annual plan must ship before the Lagos cohort. Ghana and Kenya are billed in local currency at the day's rate, not converted at checkout.`,
};

function OutputEmail() {
  return (
    <div className="out out--email">
      <div className="out__fields">
        <div>
          <span>To</span>
          <b>Chidi Eze, Yewande Cole</b>
        </div>
        <div>
          <span>Subject</span>
          <b>Pricing rollout — next steps</b>
        </div>
      </div>
      <div className="out__body">
        <p>Hi Chidi and Yewande,</p>
        <p>
          Thanks for the time today. We&rsquo;re shipping the annual plan before the Lagos cohort,
          with the free tier staying at <b>120 minutes a month</b>.
        </p>
        <p>
          Ada will send the new price sheet to Sales by Thursday, and Chidi is instrumenting the
          <span className="mono"> LIMIT_REACHED 429 </span> so we see the wall before the customer
          does.
        </p>
        <p>
          Ghana and Kenya will be charged in GH&#8373; and KSh at the day&rsquo;s rate — stated on the
          page, not converted at checkout.
        </p>
        <p className="out__sign">Ada</p>
      </div>
    </div>
  );
}

function OutputActions() {
  return (
    <div className="out">
      <ul className="out-tasks">
        <li>
          <span className="out-tasks__box" />
          <span className="out-tasks__label">Send the new price sheet to Sales</span>
          <span className="out-tasks__who">Ada Obi</span>
          <span className="out-tasks__due mono">Oct 29</span>
        </li>
        <li>
          <span className="out-tasks__box" />
          <span className="out-tasks__label">Instrument the LIMIT_REACHED 429</span>
          <span className="out-tasks__who">Chidi Eze</span>
          <span className="out-tasks__due mono">Oct 30</span>
        </li>
        <li>
          <span className="out-tasks__box" />
          <span className="out-tasks__label">Confirm GH&#8373; / KSh wording with Finance</span>
          <span className="out-tasks__who">Yewande Cole</span>
          <span className="out-tasks__due mono">Oct 31</span>
        </li>
      </ul>
    </div>
  );
}

function OutputDecisions() {
  return (
    <div className="out">
      <ol className="out-decisions">
        <li>
          <span className="out-decisions__tag">Decision</span>
          <p>Annual plan ships before the Lagos cohort.</p>
          <div className="out-decisions__meta">
            <span>Ada Obi</span>
            <span className="mono">Oct 28 · 09:36</span>
          </div>
        </li>
        <li>
          <span className="out-decisions__tag">Decision</span>
          <p>Ghana bills in GH&#8373; at the day&rsquo;s rate.</p>
          <div className="out-decisions__meta">
            <span>Yewande Cole</span>
            <span className="mono">Oct 28 · 09:38</span>
          </div>
        </li>
        <li>
          <span className="out-decisions__tag out-decisions__tag--quiet">Held</span>
          <p>Free tier stays at 120 minutes a month.</p>
          <div className="out-decisions__meta">
            <span>the room</span>
            <span className="mono">Oct 28 · 09:39</span>
          </div>
        </li>
      </ol>
    </div>
  );
}

function OutputSummary() {
  return (
    <div className="out">
      <p className="out-summary">
        Azanchi&rsquo;s free tier stays at <b>120 minutes a month</b>. Pro is{" "}
        <b>1,200 minutes at ₦16,500</b>; Business is 1,500 minutes per user at ₦28,500 per seat. The
        annual plan must ship before the Lagos cohort. Ghana and Kenya are billed in local currency
        at the day&rsquo;s rate, not converted at checkout.
      </p>
      <div className="out-summary__marks">
        <span>
          <Check size={11} /> Decisions, owners and dates preserved
        </span>
        <span>
          <Check size={11} /> 42 turns read
        </span>
      </div>
    </div>
  );
}

const OUTPUTS: Record<RecipeId, ReactNode> = {
  email: <OutputEmail />,
  actions: <OutputActions />,
  decisions: <OutputDecisions />,
  summary: <OutputSummary />,
};

export function RecipesSection() {
  const [active, setActive] = useState<RecipeId>("email");
  const [copied, setCopied] = useState(false);

  const recipe = useMemo(() => RECIPES.find((r) => r.id === active)!, [active]);

  async function copy() {
    const text = COPY[active];
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // Clipboard API can be blocked by permissions or a non-focused document.
      // The old selection path still works everywhere this page ships.
      const field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      field.remove();
    }
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="section recipes" id="recipes">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <span className="eyebrow">03 — After the meeting</span>
            <h2 className="serif balance">Type a slash. Leave with the follow-up.</h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              Recipes are saved instructions with a one-word alias. Run <b>/email</b> for a follow-up
              in your voice, <b>/actions</b> for owners and dates, <b>/decisions</b> for the record.
              Build your own from a sentence.
            </p>
            <a className="link-arrow" href="#pricing">
              See what is included <ArrowRight size={14} className="arrow" />
            </a>
          </div>
        </div>

        <div className="recipes__grid">
          <div className="console" data-reveal>
            <div className="console__bar">
              <span className="console__label">Ask bar</span>
              <span className="console__hint mono">
                42 turns · <span className="mono">Pricing rollout</span>
              </span>
            </div>

            <div className="console__input">
              <span className="console__slash">
                <Slash size={14} />
              </span>
              <span className="console__typed">{recipe.alias}</span>
              <span className="console__caret" />
              <span className="console__enter">
                <span className="kbd">↵</span> to run
              </span>
            </div>

            <div className="console__list" role="group" aria-label="Recipes">
              {RECIPES.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  className={`console__item${active === r.id ? " is-active" : ""}`}
                  onClick={() => setActive(r.id)}
                  aria-pressed={active === r.id}
                >
                  <span className="console__alias mono">{r.alias}</span>
                  <span className="console__name">{r.label}</span>
                  <span className="console__note">{r.note}</span>
                  {active === r.id && <span className="console__run">Run</span>}
                </button>
              ))}
            </div>

            <div className="console__new">
              <span className="console__plus">+</span>
              <div>
                <b>Make your own</b>
                <span>
                  &ldquo;Extract every risk, with an owner and a date&rdquo; becomes{" "}
                  <span className="mono">/risks</span>.
                </span>
              </div>
            </div>

            <div className="console__foot">
              <Sparkle size={12} />
              <span>Runs on Azanchi&rsquo;s managed backend. No API key, no model picker.</span>
            </div>
          </div>

          <div className="output" data-reveal style={{ "--reveal-delay": "130ms" } as CSSProperties}>
            <div className="output__bar">
              <span className="output__tag">
                <Mail size={12} /> {recipe.label}
              </span>
              <span className="output__meta mono">generated from 42 turns</span>
              <button type="button" className="output__copy" onClick={copy}>
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="output__body" key={active} aria-live="polite">
              {OUTPUTS[active]}
            </div>
            <div className="output__foot">
              <span>
                <span className="pulse-dot pulse-dot--green" /> Drafted just now
              </span>
              <span className="mono">Editable markdown</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
