import { SiteHeader } from "@/app/_components/SiteHeader";
import FooterSection from "@/app/_components/FooterSection";
import TeacherDetailHero from "@/app/_components/teacher-detail/TeacherDetailHero";
import TeacherInfoSection from "@/app/_components/teacher-detail/TeacherInfoSection";
import TeacherCoursesSection from "@/app/_components/teacher-detail/TeacherCoursesSection";
import { getTeacher } from "@/app/_lib/teachers";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { getTeachers } = await import("@/app/_lib/teachers");
  return getTeachers().map((teacher) => ({
    slug: teacher.slug,
  }));
}

export default async function TeacherDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teacher = getTeacher(slug);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden antialiased selection:bg-[#f30]/20 min-w-0 bg-white" data-node-id="65:84569">
      <SiteHeader />
      <main className="flex-1 w-full min-w-0">
        <TeacherDetailHero teacher={teacher} />
        <TeacherInfoSection teacher={teacher} />
        <TeacherCoursesSection courseSlugs={teacher.courses} teacherName={teacher.name} />
        <FooterSection />
      </main>
    </div>
  );
}
