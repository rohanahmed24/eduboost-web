"use client";

import { useMemo } from "react";
import {
  motion,
  type Transition,
  type Variants,
} from "framer-motion";

import { useReducedMotionSafe } from "./motion/useReducedMotionSafe";
import { HeroCourseChip } from "./HeroCourseChip";

export type HeroPillRow = {
  key: string;
  label: string;
  chipClassName?: string;
};

function usePillVariants(reduced: boolean | null): Variants {
  return useMemo(() => {
    if (reduced) {
      return {
        hidden: { opacity: 1, y: 0, rotate: 0 },
        visible: { opacity: 1, y: 0, rotate: 0 },
      };
    }
    return {
      hidden: {
        opacity: 0,
        y: "-3.25rem",
        rotate: -2,
      },
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 380,
          damping: 22,
          mass: 0.72,
        } satisfies Transition,
      },
    };
  }, [reduced]);
}

function useRowVariants(reduced: boolean | null, stagger: number): Variants {
  return useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduced ? 0 : stagger,
        },
      },
    }),
    [reduced, stagger],
  );
}

function useRootVariants(
  reduced: boolean | null,
  delayChildren: number,
  staggerBetweenRows: number,
): Variants {
  return useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          delayChildren: reduced ? 0 : delayChildren,
          staggerChildren: reduced ? 0 : staggerBetweenRows,
        },
      },
    }),
    [reduced, delayChildren, staggerBetweenRows],
  );
}

export function HeroFallingPillStack({
  rows,
  delayChildren = 0.38,
  staggerBetweenRows = 0.12,
  staggerInsideRow = 0.085,
}: {
  rows: HeroPillRow[][];
  delayChildren?: number;
  staggerBetweenRows?: number;
  staggerInsideRow?: number;
}) {
  const reduced = useReducedMotionSafe();
  const root = useRootVariants(reduced, delayChildren, staggerBetweenRows);
  const row = useRowVariants(reduced, staggerInsideRow);
  const pill = usePillVariants(reduced);

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-2"
      initial="hidden"
      animate="visible"
      variants={root}
    >
      {rows.map((cells, ri) => (
        <motion.div
          key={`row-${ri}`}
          variants={row}
          className={
            cells.length === 1
              ? "flex w-full justify-center"
              : cells.length === 2
                ? "flex max-lg:w-full max-lg:flex-nowrap max-lg:justify-center max-lg:gap-2 flex-wrap justify-center gap-2"
                : "flex max-lg:w-full max-lg:flex-nowrap max-lg:justify-center max-lg:gap-2 w-full flex-wrap justify-center gap-2"
          }
        >
          {cells.map((cell) => (
            <motion.div
              key={cell.key}
              variants={pill}
              className={
                cells.length === 1
                  ? undefined
                  : "inline-flex max-lg:shrink-0"
              }
            >
              <HeroCourseChip className={cell.chipClassName}>
                {cell.label}
              </HeroCourseChip>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
