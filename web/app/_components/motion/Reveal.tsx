"use client";

import type { AriaRole, ReactNode } from "react";
import { useMemo } from "react";
import {
  motion,
  type Transition,
  type Variants,
} from "framer-motion";

import { useReducedMotionSafe } from "./useReducedMotionSafe";

/** Custom easing: soft deceleration, reads “premium” on reveals */
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export type RevealMode = "inView" | "mount";

export type RevealDivPassthrough = {
  id?: string;
  role?: AriaRole;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
  "data-node-id"?: string;
  "data-name"?: string;
};

export type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  mode?: RevealMode;
} & RevealDivPassthrough;

const revealViewport = {
  once: true,
  amount: "some" as const,
  margin: "0px 0px 12% 0px",
};

function useRevealTransition(
  duration: number,
  delay: number,
): Transition {
  return useMemo(
    () => ({
      duration,
      delay,
      ease: luxuryEase,
    }),
    [duration, delay],
  );
}

function staggerItemVariants(
  reduced: boolean | null,
  duration: number,
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: luxuryEase },
    },
  };
}

export function Reveal({
  children,
  className,
  y = 20,
  delay = 0,
  duration = 0.62,
  mode = "inView",
  ...rest
}: RevealProps) {
  const reduced = useReducedMotionSafe();
  const transition = useRevealTransition(duration, delay);

  if (reduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  if (mode === "mount") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
} & RevealDivPassthrough;

export function RevealStagger({
  children,
  className,
  ...rest
}: RevealStaggerProps) {
  const reduced = useReducedMotionSafe();
  const containerVariants = useMemo<Variants>(
    () => ({
      // Never hide the container; only children use opacity so the tree
      // cannot get stuck fully transparent if viewport logic misbehaves.
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduced ? 0 : 0.08,
          delayChildren: reduced ? 0 : 0.05,
        },
      },
    }),
    [reduced],
  );

  if (reduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export type RevealStaggerItemProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
} & RevealDivPassthrough;

export function RevealStaggerItem({
  children,
  className,
  duration = 0.62,
  ...rest
}: RevealStaggerItemProps) {
  const reduced = useReducedMotionSafe();
  const itemVariants = useMemo(
    () => staggerItemVariants(reduced, duration),
    [reduced, duration],
  );

  if (reduced) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
