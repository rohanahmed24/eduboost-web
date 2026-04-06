"use client";

import Link from "next/link";
import { ebAsset } from "@/app/_lib/eb-asset";
import { ScrollPaintHeadline } from "../motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "../motion/scrollPaintTokens";
import type { CourseData } from "@/app/_lib/courses";

const imgStar = ebAsset("8b349245-0e4f-44ea-a37e-36356cdd08cb");

const TEACHER_DETAIL_BY_NAME: Record<string, string> = {
  "Sophia Marie Hart": "/teachers/sophia-marie-hart",
  "Sophia Hart": "/teachers/sophia-marie-hart",
  "Liam Carter": "/teachers/liam-carter",
  "Ethan Brooks": "/teachers/ethan-brooks",
};

/** Split text at ~65% word boundary into [primary, muted]. */
function splitAt65(text: string): [string, string] {
  const words = text.split(" ");
  const idx = Math.round(words.length * 0.65);
  return [words.slice(0, idx).join(" ") + " ", words.slice(idx).join(" ")];
}

export default function CourseInfoSection({ course }: { course: CourseData }) {
  const teacherDetailHref =
    TEACHER_DETAIL_BY_NAME[course.teacher.name] ?? "/teachers/sophia-marie-hart";

  const [overviewPrimary, overviewMuted] = splitAt65(course.overview);
  const [bioPrimary, bioMuted] = splitAt65(course.teacher.bio);

  return (
    <section className="w-full bg-[#f1f1f1]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-[clamp(2.5rem,7vw,7.5rem)] px-[clamp(1rem,4vw,3.75rem)] py-[clamp(2.5rem,8vw,7.5rem)]">

        {/* ── Course Overview ── */}
        <div className="relative flex w-full max-w-[877px] shrink-0 flex-col items-start gap-4" data-node-id="65:82162">
          <div className="bg-[#fff7f5] content-stretch flex shrink-0 items-center justify-center gap-1 rounded-[100px] px-3 py-[7px]" data-node-id="65:82163">
            <div className="relative size-[20px] shrink-0" data-node-id="65:82164">
              <img alt="" className="absolute block size-full" src={imgStar} />
            </div>
            <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-5 not-italic relative shrink-0 text-[14px] text-black tracking-[-0.56px] whitespace-nowrap sm:font-['PP_Neue_Montreal:Medium',sans-serif] sm:leading-[24px] sm:text-[18px] sm:tracking-[-0.18px]" data-node-id="65:82166">
              Course Overview
            </p>
          </div>
          <div className="relative w-full shrink-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[0px] not-italic text-black" data-node-id="65:82167">
            <p className="sr-only">{course.overview}</p>
            <ScrollPaintHeadline
              theme="light"
              uniform={scrollPaintLightUniform}
              className="text-[16px] leading-[1.55] tracking-[-0.16px] sm:text-[clamp(1.125rem,1.8vw+0.65rem,1.5rem)] sm:leading-[1.24] sm:tracking-[-0.24px]"
              segments={[
                { variant: "primary", text: overviewPrimary },
                { variant: "muted", text: overviewMuted },
              ]}
            />
          </div>
        </div>

        {/* ── Teacher Overview ── */}
        <div className="relative flex w-full max-w-[877px] shrink-0 flex-col items-start gap-4" data-node-id="65:82169">
          <div className="bg-[#fff7f5] content-stretch flex shrink-0 items-center justify-center gap-1 rounded-[100px] px-3 py-[7px]" data-node-id="65:82170">
            <div className="relative size-[20px] shrink-0" data-node-id="65:82171">
              <img alt="" className="absolute block size-full" src={imgStar} />
            </div>
            <p className="font-['PP_Neue_Montreal:Book',sans-serif] leading-5 not-italic relative shrink-0 text-[14px] text-black tracking-[-0.56px] whitespace-nowrap sm:font-['PP_Neue_Montreal:Medium',sans-serif] sm:leading-[24px] sm:text-[18px] sm:tracking-[-0.18px]" data-node-id="65:82173">
              Teacher Overview
            </p>
          </div>
          <Link
            href={teacherDetailHref}
            className="flex w-full flex-col gap-4 rounded-[12px] bg-white p-4 transition-colors hover:bg-[#fcfcfc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f30]/40 focus-visible:ring-offset-2 sm:p-6"
            data-node-id="65:82174"
            aria-label={`View teacher details page for ${course.teacher.name}`}
          >
            {/* Avatar + name + role */}
            <div className="flex items-center gap-2" data-node-id="65:82175">
              <div className="relative size-[56px] shrink-0 overflow-hidden rounded-full border-2 border-[#bfbfbf] bg-[#bfbfbf]" data-node-id="65:82177">
                <img
                  alt={course.teacher.name}
                  className="absolute inset-0 block size-full object-cover"
                  src={course.teacher.avatar}
                />
              </div>
              <div className="flex flex-col gap-2" data-node-id="65:82179">
                <p className="font-['PP_Neue_Montreal:Medium',sans-serif] text-[18px] leading-6 text-black tracking-[-0.36px]" data-node-id="65:82180">
                  {course.teacher.name}
                </p>
                <p className="font-['PP_Neue_Montreal:Book',sans-serif] text-[16px] leading-6 text-[#262626] not-italic tracking-[-0.32px]" data-node-id="65:82181">
                  {course.teacher.role}
                </p>
              </div>
            </div>
            {/* Bio: two-tone */}
            <div className="relative w-full shrink-0 font-['PP_Neue_Montreal:Medium',sans-serif] text-[0px] not-italic text-black" data-node-id="65:82182">
              <p className="sr-only">{course.teacher.bio}</p>
              <ScrollPaintHeadline
                theme="light"
                uniform={scrollPaintLightUniform}
                className="text-[16px] leading-[1.55] tracking-[-0.16px] sm:text-[clamp(1.125rem,1.8vw+0.65rem,1.5rem)] sm:leading-[1.24] sm:tracking-[-0.24px]"
                segments={[
                  { variant: "primary", text: bioPrimary },
                  { variant: "muted", text: bioMuted },
                ]}
              />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
