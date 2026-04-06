import { AboutSection } from "./_components/AboutSection";
import FaqSection from "./_components/FaqSection";
import FeaturedCoursesSection from "./_components/FeaturedCoursesSection";
import FooterSection from "./_components/FooterSection";
import { HeroSection } from "./_components/HeroSection";
import { MarketingPageShell } from "./_components/layout/MarketingPageShell";
import OurAllCoursesSection from "./_components/OurAllCoursesSection";
import PricingSection from "./_components/PricingSection";
import { SiteHeader } from "./_components/SiteHeader";
import { TeachersSection } from "./_components/TeachersSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import { WhyEduBoostSection } from "./_components/WhyEduBoostSection";

export default function Home() {
  return (
    <MarketingPageShell data-name="Home page" data-node-id="65:78355">
      <SiteHeader />
      <main className="w-full min-w-0 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <FeaturedCoursesSection />
        <WhyEduBoostSection />
        <TeachersSection />
        <OurAllCoursesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FooterSection />
      </main>
    </MarketingPageShell>
  );
}
