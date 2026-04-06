import type { ReactNode } from "react";

function cx(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  /** Horizontal padding matches Figma ~60px at 1440px via clamp */
  as?: "div" | "section";
};

export function PageContainer({
  children,
  className,
  as: Tag = "div",
}: PageContainerProps) {
  return (
    <Tag
      className={cx(
        "mx-auto w-full max-w-[1440px] px-[clamp(1rem,4vw,3.75rem)] lg:px-[clamp(1rem,4.2vw,3.75rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
