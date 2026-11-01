// The one address every contact link on the page points at. It must be a real
// mailbox on a domain we own — the page has no contact form, so a dead inbox
// means a dead contact path (see README, "Before shipping").
export const CONTACT_EMAIL = "hello@azanchi.com";

export function mailto(subject?: string): string {
  const address = `mailto:${CONTACT_EMAIL}`;
  return subject ? `${address}?subject=${encodeURIComponent(subject)}` : address;
}
