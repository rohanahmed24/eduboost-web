import { AboutHeroSection } from "../_components/AboutHeroSection";
import { AboutStoreSection } from "../_components/AboutStoreSection";
import { AboutValueSection } from "../_components/AboutValueSection";
import FaqSection from "../_components/FaqSection";
import FooterSection from "../_components/FooterSection";
import { MarketingPageShell } from "../_components/layout/MarketingPageShell";
import { SiteHeader } from "../_components/SiteHeader";
import TestimonialsSection from "../_components/TestimonialsSection";

export const metadata = {
  title: "About Us | EduBoost",
  description:
    "Learn about EduBoost's mission to empower learners with practical skills, industry-focused knowledge, and expert-led courses.",
};

export default function AboutPage() {
  return (
    <MarketingPageShell data-name="About us" data-node-id="65:80342">
      <SiteHeader />
      <main className="w-full min-w-0 overflow-x-hidden">
        <AboutHeroSection />
        <AboutValueSection />
        <AboutStoreSection />
        <TestimonialsSection />
        <FaqSection />
        <FooterSection />
      </main>
    </MarketingPageShell>
  );
}
