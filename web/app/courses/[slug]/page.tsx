import { notFound } from "next/navigation";
import FeaturedCoursesSection from "@/app/_components/FeaturedCoursesSection";
import FaqSection from "@/app/_components/FaqSection";
import FooterSection from "@/app/_components/FooterSection";
import TestimonialsSection from "@/app/_components/TestimonialsSection";
import { MarketingPageShell } from "@/app/_components/layout/MarketingPageShell";
import { SiteHeader } from "@/app/_components/SiteHeader";
import CourseDetailHero from "@/app/_components/course-detail/CourseDetailHero";
import CourseLessonsSection from "@/app/_components/course-detail/CourseLessonsSection";
import CourseInfoSection from "@/app/_components/course-detail/CourseInfoSection";
import { getCourse, COURSES } from "@/app/_lib/courses";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <MarketingPageShell data-name="Course Details" data-node-id="65:82005">
      <SiteHeader />
      <main className="w-full min-w-0">
        <CourseDetailHero course={course} />
        <CourseLessonsSection lessons={course.lessons} />
        <CourseInfoSection course={course} />
        <TestimonialsSection />
        <FeaturedCoursesSection sectionBg="bg-[#f1f1f1]" ctaLabel="Explore Course " />
        <FaqSection />
        <FooterSection />
      </main>
    </MarketingPageShell>
  );
}
