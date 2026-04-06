import FaqSection from "@/app/_components/FaqSection";
import FooterSection from "@/app/_components/FooterSection";
import { MarketingPageShell } from "@/app/_components/layout/MarketingPageShell";
import CoursePageCoursesSection from "@/app/_components/CoursePageCoursesSection";
import { SiteHeader } from "@/app/_components/SiteHeader";

export default function CoursesPage() {
  return (
    <MarketingPageShell data-name="Course Page" data-node-id="65:80913">
      <SiteHeader />
      <main className="w-full min-w-0 overflow-x-hidden">
        <CoursePageCoursesSection />
        <FaqSection />
        <FooterSection />
      </main>
    </MarketingPageShell>
  );
}
