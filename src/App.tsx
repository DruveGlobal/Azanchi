import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LiveNotesSection } from "./components/LiveNotesSection";
import { TranscriptSection } from "./components/TranscriptSection";
import { RecipesSection } from "./components/RecipesSection";
import { TrustSection } from "./components/TrustSection";
import { QuoteSection } from "./components/QuoteSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import { useReveal } from "./hooks/useSite";
import { NotFound } from "./components/NotFound";
import { isPublishedPath } from "./lib/route";

export default function App() {
  useReveal();

  if (!isPublishedPath(window.location.pathname)) return <NotFound />;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <HowItWorks />
        <LiveNotesSection />
        <TranscriptSection />
        <RecipesSection />
        <TrustSection />
        <QuoteSection />
        <PricingSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
