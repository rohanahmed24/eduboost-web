"use client";

import { useCallback, useId, useState } from "react";
import { ebAsset } from "@/app/_lib/eb-asset";
import type { CourseLesson } from "@/app/_lib/courses";

const imgArrowDown = ebAsset("70d7f32a-30fb-4325-98e0-d4b9463e32c3");
const imgStar = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");

function LessonAccordionItem({
  lesson,
  isOpen,
  onToggle,
}: {
  lesson: CourseLesson;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();
  const detailLines =
    lesson.subItems && lesson.subItems.length > 0
      ? lesson.subItems
      : [
          `Estimated duration: ${lesson.duration}`,
          "Key concepts with practical examples and takeaways.",
        ];

  return (
    <div
      className="relative flex w-full min-w-0 shrink-0 flex-col items-start overflow-hidden rounded-[12px] bg-white p-4 sm:p-6"
    >
      <h3 className="m-0 w-full min-w-0 p-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="relative flex min-w-0 w-full shrink-0 cursor-pointer items-start justify-between gap-3 border-0 bg-transparent p-0 text-left outline-none touch-manipulation focus-visible:ring-2 focus-visible:ring-[#f30]/50 focus-visible:ring-offset-2"
          onClick={onToggle}
        >
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <span className="min-w-0 flex-1 font-['PP_Neue_Montreal:Book',sans-serif] text-[18px] leading-6 text-black tracking-[-0.18px] sm:font-['PP_Neue_Montreal:Medium',sans-serif] sm:text-[22px] md:text-[24px] md:tracking-[-0.24px]">
              {lesson.title}
            </span>
          </div>
          <div
            className="relative shrink-0 size-[24px] transition-transform duration-300 ease-out"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            data-name="arrow-down-01"
            aria-hidden
          >
            <img alt="" className="absolute block size-full" src={imgArrowDown} />
          </div>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid w-full transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-4 pt-4">
            {detailLines.map((line, si) => (
              <div key={si} className="flex items-center gap-2">
                <div className="relative size-4 shrink-0">
                  <img alt="" className="absolute block size-full" src={imgStar} />
                </div>
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 not-italic text-[#262626] tracking-[-0.16px]">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseLessonsSection({ lessons }: { lessons: CourseLesson[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(lessons.map((lesson, index) => [lesson.id, index === 0])),
  );

  const toggle = useCallback((id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section className="w-full bg-[#f1f1f1]" data-node-id="65:82050">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(2.5rem,8vw,7.5rem)]">
        <div className="relative flex w-full max-w-[877px] shrink-0 flex-col items-start gap-4" data-node-id="65:82094">
          <div
            className="bg-[#fff7f5] content-stretch flex shrink-0 items-center justify-center gap-1 rounded-[100px] px-3 py-[7px]"
            data-node-id="65:82052"
          >
            <div className="relative size-[20px] shrink-0" data-name="Union" data-node-id="65:82053">
              <img alt="" className="absolute block size-full" src={imgStar} />
            </div>
            <p
              className="font-['PP_Neue_Montreal:Book',sans-serif] leading-5 not-italic relative shrink-0 text-[14px] text-black tracking-[-0.56px] whitespace-nowrap sm:font-['PP_Neue_Montreal:Medium',sans-serif] sm:leading-[24px] sm:text-[18px] sm:tracking-[-0.18px]"
              data-node-id="65:82055"
            >
              Course lessons
            </p>
          </div>
          <div className="relative flex w-full shrink-0 flex-col items-start gap-2" data-node-id="65:82099">
            {lessons.map((lesson) => (
              <LessonAccordionItem
                key={lesson.id}
                lesson={lesson}
                isOpen={Boolean(open[lesson.id])}
                onToggle={() => toggle(lesson.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
