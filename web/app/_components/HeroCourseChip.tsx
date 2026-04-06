import type { ReactNode } from "react";

export function HeroCourseChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[100px] border border-[rgba(255,255,255,0.1)] border-solid bg-[rgba(255,255,255,0.1)] px-4 py-2 backdrop-blur-[8px] lg:px-4 lg:py-2 ${className}`}
    >
      <p className="whitespace-nowrap font-['PP_Neue_Montreal',sans-serif] font-normal text-[14px] leading-5 tracking-[-0.56px] text-white lg:font-medium lg:text-[15px] lg:tracking-normal lg:leading-6 xl:text-[16px]">
        {children}
      </p>
    </div>
  );
}
