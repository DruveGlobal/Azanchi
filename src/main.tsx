import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/landing.css";
import "./styles/demos.css";
import "./styles/responsive.css";

// The server has no directory-index fallback, so /privacy and /terms land on
// this SPA shell instead of the static pages. Forward those two paths.
const legalPath = window.location.pathname.replace(/\/+$/, "");
if (legalPath === "/privacy" || legalPath === "/terms") {
  window.location.replace(`${legalPath}.html`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
