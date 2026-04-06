/** Shared scroll-paint color tokens — imported by both ScrollPaintHeadline and consumers. */

/** Light surfaces: full line animates #e0e0e0 → #000 (Figma scroll paint). */
export const scrollPaintLightUniform = {
  from: "#e0e0e0",
  to: "#000000",
} as const;

/** Dark surfaces (e.g. testimonials on black). */
export const scrollPaintDarkUniform = {
  from: "#bfbfbf",
  to: "#ffffff",
} as const;
