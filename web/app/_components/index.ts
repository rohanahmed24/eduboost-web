/**
 * Public components for reuse across marketing routes.
 * Sections can stay in named imports if you prefer tree-shaking clarity.
 */
export { AnimatedStatValue, parseStatValue } from "./motion/AnimatedStatValue";
export type { AnimatedStatValueProps, ParsedStat } from "./motion/AnimatedStatValue";
export { MarketingPageShell } from "./layout/MarketingPageShell";
export { PageContainer } from "./PageContainer";
export { PillCta } from "./PillCta";
export type { PillCtaProps } from "./PillCta";
export {
  PricingFeatureRow,
  PricingPlanCard,
  pricingPlans,
  pricingPillLabelClass,
  pricingArrowLight,
  pricingArrowOnPrimary,
  pricingUnionIcon,
} from "./pricing";
export type { PricingCtaConfig, PricingPlanDefinition } from "./pricing";
