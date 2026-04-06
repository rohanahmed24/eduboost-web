import Link from "next/link";
import { RevealStaggerItem } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import type { CourseData } from "@/app/_lib/courses";

const imgStar = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");
const imgNotebook02 = ebAsset("b9ffade8-0b71-46e6-b23c-a2c189cb3cd1");
const imgTime02 = ebAsset("bd41e8d4-530c-4786-bb18-e7063c892779");

export function CourseCard({
  course,
  className = "relative flex w-full min-w-0 flex-col rounded-2xl bg-white p-6 border border-[#EBEBEB] shadow-sm hover:shadow-md transition-shadow duration-300",
}: {
  course: CourseData;
  className?: string;
}) {
  // Aggregate duration across all lessons or fallback to mock if none
  const totalMinutes = course.lessons.reduce((acc, lesson) => {
    const minsMatch = lesson.duration.match(/(\d+)\s*Min/i);
    return acc + (minsMatch ? parseInt(minsMatch[1], 10) : 0);
  }, 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const durationText = hours > 0 ? `${hours} Hours ${mins} Min` : `${mins} Min`;

  return (
    <RevealStaggerItem
      className={`${className} h-full`}
      duration={0.6}
    >
      <div className="relative flex w-full min-w-0 flex-col items-start gap-6 h-full">
        {/* Thumbnail */}
        <div className="group content-stretch flex flex-col h-[200px] sm:h-[240px] md:h-[280px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full overflow-hidden">
          <img
            alt={course.cardTitle}
            className="absolute inset-0 object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-105"
            src={course.image}
          />
          <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-max z-10">
            <p className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[14px] text-white leading-[20px] whitespace-nowrap m-0 tracking-wide">
              {course.tag}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative flex-grow w-full justify-between">
          <div className="flex flex-col gap-[16px] items-start w-full">
            {/* Stars and Price */}
            <div className="flex w-full min-w-0 items-center justify-between">
              <div className="flex items-center gap-[4px] shrink-0">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative size-[20px] shrink-0">
                    <img alt="Star" className="absolute block max-w-none size-full" src={imgStar} />
                  </div>
                ))}
              </div>
              <p className="font-['PP_Neue_Montreal',sans-serif] font-bold text-[20px] sm:text-[24px] text-black m-0 shrink-0">
                {course.price === "$0" ? "Free" : course.price}
              </p>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-[8px] items-start w-full leading-[0]">
              <h4 className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[20px] sm:text-[24px] text-black leading-[1.3] truncate w-full m-0">
                {course.cardTitle}
              </h4>
              <p className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[16px] sm:text-[17px] text-[#262626] leading-[1.5] line-clamp-2 w-full m-0">
                {course.shortDescription}
              </p>
            </div>

            <div className="h-px w-full bg-[#e2e2e2] shrink-0 my-1" aria-hidden />

            {/* Meta Stats */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full min-w-0">
              <div className="flex items-center min-w-[120px] gap-2 lg:flex-1">
                <div className="relative size-[34px] shrink-0 overflow-clip rounded-[4px] bg-[#f1f1f1] flex items-center justify-center">
                  <img alt="Lessons" className="size-[20px] block" src={imgNotebook02} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[13px] sm:text-[14px] leading-tight text-[#858585] m-0">
                    Lessons
                  </p>
                  <p className="truncate font-['PP_Neue_Montreal',sans-serif] font-medium text-[15px] sm:text-[16px] leading-snug text-black m-0 mt-0.5">
                    {course.lessons.length}+ Lessons
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px shrink-0 bg-[#e2e2e2]" aria-hidden />

              <div className="flex items-center min-w-[120px] gap-2 lg:flex-1">
                <div className="relative size-[34px] shrink-0 overflow-clip rounded-[4px] bg-[#f1f1f1] flex items-center justify-center">
                  <img alt="Duration" className="size-[20px] block" src={imgTime02} />
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="font-['PP_Neue_Montreal',sans-serif] font-normal text-[13px] sm:text-[14px] leading-tight text-[#858585] m-0">
                    Duration
                  </p>
                  <p className="truncate font-['PP_Neue_Montreal',sans-serif] font-medium text-[15px] sm:text-[16px] leading-snug text-black m-0 mt-0.5">
                    {durationText || "Self-paced"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Link */}
          <Link href={`/courses/${course.slug}`} className="border border-[#e2e2e2] hover:bg-[#f9fafa] transition-colors content-stretch flex items-center justify-center px-[10px] py-[12px] relative rounded-[100px] shrink-0 w-full outline-none focus-visible:ring-2 focus-visible:ring-black">
            <span className="font-['PP_Neue_Montreal',sans-serif] font-medium text-[#262626] text-[16px] leading-[24px]">
              View Courses
            </span>
          </Link>
        </div>
      </div>
    </RevealStaggerItem>
  );
}
