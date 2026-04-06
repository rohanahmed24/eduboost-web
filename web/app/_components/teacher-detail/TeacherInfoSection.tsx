"use client";

import { ebAsset } from "@/app/_lib/eb-asset";
import { Reveal } from "../motion/Reveal";
import { ScrollPaintHeadline } from "../motion/ScrollPaintHeadline";
import { scrollPaintLightUniform } from "../motion/scrollPaintTokens";
import type { TeacherData } from "@/app/_lib/teachers";

const imgUnion = ebAsset("16b548f8-89d8-48c0-8d0e-08202ce26fb8");

function splitForPaint(text: string) {
  const punctuationIndex = Math.max(text.indexOf(","), text.indexOf("."));
  const safeIndex =
    punctuationIndex > 30 ? punctuationIndex + 1 : Math.floor(text.length * 0.62);
  return {
    primary: text.slice(0, safeIndex).trim(),
    muted: text.slice(safeIndex).trim(),
  };
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  const segments = splitForPaint(text);
  return (
    <Reveal className="flex flex-col gap-6 items-start w-full min-w-0" y={20} duration={0.8}>
      <div className="bg-[#fff7f5] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0">
        <div className="relative shrink-0 size-[20px]" aria-hidden>
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
        </div>
        <p className="font-['PP_Neue_Montreal:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[#262626] tracking-[-0.18px] whitespace-nowrap">
          {title}
        </p>
      </div>
      <ScrollPaintHeadline
        theme="light"
        uniform={scrollPaintLightUniform}
        className="m-0 text-[24px] leading-[1.2] tracking-[-0.02em]"
        segments={[
          { variant: "primary", text: segments.primary },
          ...(segments.muted
            ? [{ variant: "muted" as const, text: ` ${segments.muted}` }]
            : []),
        ]}
      />
    </Reveal>
  );
}

export default function TeacherInfoSection({ teacher }: { teacher: TeacherData }) {
  return (
    <section id="teacher-info" className="w-full bg-white">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-[clamp(1rem,4vw,3.75rem)] py-[clamp(2.5rem,8vw,7.5rem)]">
        <InfoBlock title={teacher.aboutTitle} text={teacher.aboutText} />
        <InfoBlock title={teacher.philosophyTitle} text={teacher.philosophyText} />
        <InfoBlock title={teacher.whyLearnTitle} text={teacher.whyLearnText} />
      </div>
    </section>
  );
}
