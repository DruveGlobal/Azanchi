import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Download, Menu, Moon, Sun, X } from "./Icons";
import { useScrolled, useTheme } from "../hooks/useSite";

const LINKS = [
  { id: "product", label: "Product" },
  { id: "live-notes", label: "Live notes" },
  { id: "transcript", label: "Transcript" },
  { id: "recipes", label: "Recipes" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const nodes = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return active;
}

export function Nav() {
  const scrolled = useScrolled(10);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    return () => {
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav__inner container">
        <Brand />

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="nav__signin" href="#download">
            Sign in
          </a>
          <a className="btn btn--primary btn--sm nav__cta" href="#download">
            <Download size={14} />
            Download
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`nav__sheet${open ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 28}ms` : "0ms" }}
            >
              <span>{link.label}</span>
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
        <div className="nav__sheet-foot">
          <a className="btn btn--primary btn--block" href="#download" onClick={() => setOpen(false)}>
            <Download size={15} />
            Download Azanchi
          </a>
          <a className="btn btn--secondary btn--block" href="#pricing" onClick={() => setOpen(false)}>
            See plans
          </a>
          <p className="tiny muted">macOS &amp; Windows · Free plan · No card</p>
        </div>
      </div>
    </header>
  );
}
