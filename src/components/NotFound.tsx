import { useEffect } from "react";

/** Rendered for any path the site doesn't publish. */
export function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Azanchi";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="notfound" id="main">
      <div className="container">
        <span className="eyebrow">404 — Not found</span>
        <h1 className="serif balance">This page isn&rsquo;t here.</h1>
        <p className="notfound__lede">The link may be old, or the address may have a typo.</p>
        <div className="notfound__actions">
          <a className="btn btn--primary" href="/">
            Back to Azanchi
          </a>
          <a className="link-arrow" href="/#pricing">
            See plans
          </a>
        </div>
      </div>
    </main>
  );
}
