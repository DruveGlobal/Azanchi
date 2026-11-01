import { ArrowDown, LogoMark } from "./Icons";
import { CONTACT_EMAIL, mailto } from "../data/contact";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "#download" },
      { label: "How it works", href: "#product" },
      { label: "Live notes", href: "#live-notes" },
      { label: "Transcript", href: "#transcript" },
      { label: "Recipes", href: "#recipes" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "What we believe", href: "#quote" },
      { label: "FAQ", href: "#faq" },
      { label: CONTACT_EMAIL, href: mailto() },
      { label: "Talk to sales", href: mailto("Azanchi Business") },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Recording & consent", href: "#trust" },
      { label: "Privacy Policy", href: "/privacy.html" },
      { label: "Terms of Service", href: "/terms.html" },
      { label: "Export & delete", href: "#trust" },
      { label: "Payments", href: "#pricing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top" aria-label="Azanchi — home">
              <LogoMark size={32} />
              <span className="brand__word">Azanchi</span>
            </a>
            <p className="footer__tag serif">Meeting notes that write themselves.</p>
            <p className="footer__blurb">
              The AI meeting assistant for Nigeria, Ghana and Kenya. Live notes during the call, the
              follow-up before you are back at your desk.
            </p>
            <div className="footer__markets">
              <span>Lagos</span>
              <span>Accra</span>
              <span>Nairobi</span>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div className="footer__col" key={col.title}>
                <h3>{col.title}</h3>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Azanchi. All rights reserved.</span>
          <span className="footer__made">
            Built in Lagos for how this region works · <span className="mono">NG · GH · KE</span>
          </span>
          <a className="footer__top-link" href="#top">
            Back to top <ArrowDown size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
