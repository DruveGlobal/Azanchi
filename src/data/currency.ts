// Prices are written once, in naira — the currency of record. Ghana and Kenya
// are billed in their own currency at the rate Paystack shows at checkout, so
// these two numbers are only the display conversion. They are the single place
// the conversion lives: change them with Finance, not in the components.
const NAIRA_PER_UNIT = {
  GHS: 110, // ₦110 to 1 Ghana cedi
  KES: 12.5, // ₦12.5 to 1 Kenyan shilling
};

export type CurrencyCode = "NGN" | "GHS" | "KES";

type Currency = {
  code: CurrencyCode;
  symbol: string;
  name: string;
  /** Units per ₦1. */
  perNaira: number;
  /** Display prices round to this step. */
  step: number;
};

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  NGN: { code: "NGN", symbol: "₦", name: "naira", perNaira: 1, step: 1 },
  GHS: { code: "GHS", symbol: "GH₵", name: "cedis", perNaira: 1 / NAIRA_PER_UNIT.GHS, step: 5 },
  KES: { code: "KES", symbol: "KSh", name: "shillings", perNaira: 1 / NAIRA_PER_UNIT.KES, step: 10 },
};

/** The visitor's currency, by device time zone, then language region. */
export function detectCurrency(): CurrencyCode {
  if (typeof window === "undefined") return "NGN";

  const asked = new URLSearchParams(window.location.search).get("currency");
  if (asked === "NGN" || asked === "GHS" || asked === "KES") return asked;

  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (zone === "Africa/Accra") return "GHS";
  if (zone === "Africa/Nairobi") return "KES";
  if (zone === "Africa/Lagos") return "NGN";

  try {
    const region = new Intl.Locale(navigator.language).region;
    if (region === "GH") return "GHS";
    if (region === "KE") return "KES";
  } catch {
    // older engines: fall through to the currency of record
  }
  return "NGN";
}

/** ₦16,500 → "₦16,500", "GH₵150", "KSh1,320". */
export function formatPrice(naira: number, code: CurrencyCode): string {
  const currency = CURRENCIES[code];
  const amount = Math.round((naira * currency.perNaira) / currency.step) * currency.step;
  return `${currency.symbol}${amount.toLocaleString("en-US")}`;
}
