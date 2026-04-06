"use client";

import { useMemo, useRef, useState } from "react";
import { ScrollPaintHeadline } from "./motion/ScrollPaintHeadline";
import { Reveal, RevealStagger } from "./motion/Reveal";
import { ebAsset } from "@/app/_lib/eb-asset";
import { COURSES } from "@/app/_lib/courses";
import { CourseCard } from "./CourseCard";

export type CourseFilterId =
  | "all"
  | "free"
  | "premium"
  | "no-code-ai"
  | "figma"
  | "english";

type CourseMeta = {
  tier: "free" | "premium";
  topics: ("no-code-ai" | "figma" | "english")[];
};

const COURSE_METAS: CourseMeta[] = [
  { tier: "premium", topics: ["no-code-ai"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: ["figma"] },
  { tier: "free", topics: ["english"] },
  { tier: "premium", topics: [] },
  { tier: "premium", topics: [] },
];

function courseVisible(meta: CourseMeta, filter: CourseFilterId) {
  if (filter === "all") return true;
  if (filter === "free") return meta.tier === "free";
  if (filter === "premium") return meta.tier === "premium";
  if (filter === "no-code-ai") return meta.topics.includes("no-code-ai");
  if (filter === "figma") return meta.topics.includes("figma");
  if (filter === "english") return meta.topics.includes("english");
  return true;
}

const FILTER_CHIPS: {
  id: CourseFilterId;
  label: string;
}[] = [
  { id: "all", label: "View All Courses" },
  { id: "free", label: "Free Courses" },
  { id: "premium", label: "Premium Courses" },
];

const imgUnion = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");

export default function CoursePageCoursesSection() {
  const [filter, setFilter] = useState<CourseFilterId>("all");

  const filterBarRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, scrollLeft: 0, moved: false });

  function onFilterMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const el = filterBarRef.current;
    if (!el) return;
    dragState.current = { dragging: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }

  function onFilterMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const s = dragState.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 3) s.moved = true;
    if (filterBarRef.current) filterBarRef.current.scrollLeft = s.scrollLeft - dx;
  }

  function onFilterMouseUp() {
    dragState.current.dragging = false;
    if (filterBarRef.current) {
      filterBarRef.current.style.cursor = "";
      filterBarRef.current.style.userSelect = "";
    }
  }
  const visible = useMemo(
    () => COURSE_METAS.map((m) => courseVisible(m, filter)),
    [filter],
  );
  const anyVisible = visible.some(Boolean);
  const visibleCourses = COURSES.filter((_, idx) => visible[idx]);

  return (
    <section className="w-full bg-[#f1f1f1]" data-node-id="65:78724">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-10 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(3rem,10vw,10rem)] md:gap-[60px]">
        <Reveal
          className="relative flex w-full shrink-0 flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          data-node-id="65:78725"
          duration={0.74}
          y={16}
        >
          <div
            className="relative inline-flex shrink-0 items-center justify-center gap-1 rounded-[100px] bg-[#fff7f5] px-3 py-[7px]"
            data-node-id="65:78726"
          >
          <div className="relative shrink-0 size-[20px]" data-name="Union" data-node-id="65:78727">
            <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
          </div>
          <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] whitespace-nowrap" data-node-id="65:78729">
            Featured courses
          </p>
          </div>
          <div
            className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-8 lg:w-[893px] lg:max-w-[893px]"
            data-node-id="65:78730"
          >
            <ScrollPaintHeadline
              className="m-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[clamp(2rem,4vw+1rem,3.5rem)] leading-[1.1] tracking-[-0.02em]"
              theme="light"
              segments={[
                {
                  variant: "primary",
                  text: "Discover handpicked courses curated by experts to help you learn ",
                },
                {
                  variant: "muted",
                  text: "practical skills and grow confidently in your career our most",
                },
              ]}
            />
          </div>
        </Reveal>
        
        <Reveal
          className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-10"
          data-node-id="65:78736"
          delay={0.05}
          duration={0.76}
          y={18}
        >
          <div
            ref={filterBarRef}
            className="relative flex min-w-0 w-full max-w-full flex-nowrap items-center gap-2 overflow-x-auto overflow-y-visible pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:flex-wrap sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
            role="toolbar"
            aria-label="Course filters"
            onMouseDown={onFilterMouseDown}
            onMouseMove={onFilterMouseMove}
            onMouseUp={onFilterMouseUp}
            onMouseLeave={onFilterMouseUp}
          >
            {FILTER_CHIPS.map((chip) => {
              const isActive = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => { if (!dragState.current.moved) setFilter(chip.id); }}
                  className={`inline-flex shrink-0 snap-start cursor-pointer items-center justify-center rounded-[100px] border border-solid px-4 py-2.5 touch-manipulation transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/45 focus-visible:ring-offset-2 sm:px-[24px] sm:py-[12px] [-webkit-tap-highlight-color:transparent] ${
                    isActive
                      ? "border-transparent bg-[#f30]"
                      : "border-[#e2e2e2] bg-white"
                  }`}
                >
                  <span
                    className={`m-0 text-[15px] leading-6 not-italic tracking-[-0.16px] whitespace-nowrap sm:text-[16px] ${
                      isActive
                        ? "font-['PP_Neue_Montreal:Medium',sans-serif] font-medium text-white"
                        : "font-['PP_Neue_Montreal:Book',sans-serif] text-black"
                    }`}
                  >
                    {chip.label}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              className="ml-auto inline-flex shrink-0 items-center justify-center rounded-[100px] border border-[#e2e2e2] bg-white px-4 py-2.5 sm:px-[24px] sm:py-[12px] transition-colors focus-visible:ring-2 focus-visible:ring-[#f30]/45 focus-visible:ring-offset-2"
              aria-label="Filter"
            >
              <span className="m-0 font-['PP_Neue_Montreal:Book',sans-serif] text-[15px] leading-6 text-black tracking-[-0.16px] sm:text-[16px] mr-2">
                Filter
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M4 5h12M7 10h6M9 15h2" />
              </svg>
            </button>
          </div>

          {!anyVisible ? (
            <p className="m-0 w-full max-w-2xl font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 tracking-[-0.16px] text-[#262626]" role="status">
              No courses match this filter. Try View All Courses or another category.
            </p>
          ) : null}

          {/* New Abstraction Grid */}
          <RevealStagger className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
            {visibleCourses.map((course) => (
              <CourseCard key={course.slug} course={course} className="bg-white" />
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}