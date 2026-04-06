import { SiteHeader } from "@/app/_components/SiteHeader";
import FooterSection from "@/app/_components/FooterSection";
import { TeachersSection } from "@/app/_components/TeachersSection";
import FeaturedCoursesSection from "@/app/_components/FeaturedCoursesSection";
import FaqSection from "@/app/_components/FaqSection";
import { MarketingPageShell } from "@/app/_components/layout/MarketingPageShell";

export default function TeachersPage() {
  return (
    <MarketingPageShell>
      <SiteHeader />
      <main className="flex w-full flex-col bg-[#F1F1F1]">
        {/* We use limit 9 and hideCta true to match the Figma grid design */}
        <TeachersSection limit={9} hideCta={true} uniformHeight={true} />
        {/* We use bg-[#f3f3f3] to give the subtle section separation matched in Figma, and hide the CTA */}
        <FeaturedCoursesSection sectionBg="bg-[#F3F3F3]" hideCta={true} />
        <FaqSection />
      </main>
      <FooterSection />
    </MarketingPageShell>
  );
}
