// Everything the site publishes. Anything else is a 404, so a made-up URL
// never renders the homepage.
const PUBLISHED = new Set(["/", "/index.html", "/privacy.html", "/terms.html"]);

export function isPublishedPath(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  return PUBLISHED.has(path);
}
