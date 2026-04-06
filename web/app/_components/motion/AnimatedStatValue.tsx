"use client";

import { useInView } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

export type ParsedStat = {
  prefix: string;
  target: number;
  suffix: string;
  fractionDigits: number;
};

/**
 * Parses display strings like 500K+, 10K+, 300+, 95%, $120, $0.
 */
export function parseStatValue(value: string): ParsedStat | null {
  const t = value.trim();
  const m = t.match(/^(\$)?(\d+(?:\.\d+)?)([^\d]*)$/u);
  if (!m) return null;
  const rawNum = m[2];
  const n = Number.parseFloat(rawNum);
  if (!Number.isFinite(n)) return null;
  const fractionDigits = rawNum.includes(".")
    ? rawNum.split(".")[1]?.length ?? 0
    : 0;
  return {
    prefix: m[1] ?? "",
    target: n,
    suffix: m[3] ?? "",
    fractionDigits,
  };
}

function formatStatAmount(n: number, fractionDigits: number) {
  if (fractionDigits > 0) return n.toFixed(fractionDigits);
  return String(Math.round(n));
}

function zeroDisplay(parsed: ParsedStat) {
  return `${parsed.prefix}${formatStatAmount(0, parsed.fractionDigits)}${parsed.suffix}`;
}

export type AnimatedStatValueProps = {
  value: string;
  /** Count-up duration in seconds */
  durationSec?: number;
} & Omit<ComponentPropsWithoutRef<"p">, "children">;

type AnimatedStatInnerProps = {
  value: string;
  parsed: ParsedStat;
  durationSec: number;
  className: string;
  rest: Omit<AnimatedStatValueProps, "value" | "durationSec" | "className">;
};

function AnimatedStatInner({
  value,
  parsed,
  durationSec,
  className,
  rest
}: AnimatedStatInnerProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const [display, setDisplay] = useState(() => zeroDisplay(parsed));

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let raf = 0;
    const durationMs = durationSec * 1000;
    const { target, prefix, suffix, fractionDigits } = parsed;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      const current = target * eased;
      setDisplay(
        `${prefix}${formatStatAmount(current, fractionDigits)}${suffix}`,
      );
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(
          `${prefix}${formatStatAmount(target, fractionDigits)}${suffix}`,
        );
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, durationSec]);

  return (
    <p
      ref={ref}
      className={`tabular-nums ${className}`.trim()}
      aria-label={value}
      {...rest}
    >
      <span aria-hidden="true">{display}</span>
    </p>
  );
}

/**
 * Count-up when scrolled into view; respects `prefers-reduced-motion`.
 * If `value` can change, pass a React `key={value}` so the animation resets.
 */
export function AnimatedStatValue({
  value,
  durationSec = 1.35,
  className = "",
  ...rest
}: AnimatedStatValueProps) {
  const reduced = useReducedMotionSafe();
  const parsed = useMemo(() => parseStatValue(value), [value]);

  if (!parsed || reduced) {
    return (
      <p className={`tabular-nums ${className}`.trim()} {...rest}>
        {value}
      </p>
    );
  }

  return (
    <AnimatedStatInner
      className={className}
      durationSec={durationSec}
      parsed={parsed}
      rest={rest}
      value={value}
    />
  );
}
