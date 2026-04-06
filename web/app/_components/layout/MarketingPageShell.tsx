import type { HTMLAttributes, ReactNode } from "react";

type MarketingPageShellProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Outer wrapper for marketing pages: page bg, text color, font smoothing.
 * Compose with {@link SiteHeader} + `<main>` for inner sections.
 */
export function MarketingPageShell({
  children,
  className = "",
  ...rest
}: MarketingPageShellProps) {
  return (
    <div
      className={`min-h-screen bg-[#f1f1f1] text-black antialiased [-webkit-font-smoothing:antialiased] ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
