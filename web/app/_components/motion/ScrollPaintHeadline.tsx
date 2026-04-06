"use client";

import {
  startTransition,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

import { useReducedMotionSafe } from "./useReducedMotionSafe";

export type ScrollPaintSegment = {
  text: string;
  variant: "primary" | "muted";
};

const PALETTE = {
  light: {
    /** Figma: intro in light gray, primary fills to black, muted fills to #bfbfbf */
    primary: { from: "#e0e0e0", to: "#000000" },
    muted:   { from: "#e0e0e0", to: "#bfbfbf" },
  },
  dark: {
    primary: { from: "#555555", to: "#ffffff" },
    muted: { from: "#434343", to: "#656565" },
  },
} as const;

function parseHex(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function mixRgb(
  a: ReturnType<typeof parseHex>,
  b: ReturnType<typeof parseHex>,
  t: number,
) {
  const u = Math.min(1, Math.max(0, t));
  const r = Math.round(a.r + (b.r - a.r) * u);
  const g = Math.round(a.g + (b.g - a.g) * u);
  const bl = Math.round(a.b + (b.b - a.b) * u);
  return `rgba(${r}, ${g}, ${bl}, 1)`;
}

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function normalizeSegmentText(s: string) {
  return s.replace(/\s+/g, " ");
}

export function ScrollPaintHeadline({
  segments,
  theme,
  uniform,
  className,
  spread = 2.35,
  "data-node-id": dataNodeId,
}: {
  segments: ScrollPaintSegment[];
  /** Ignored for colors when \`uniform\` is set. */
  theme: "light" | "dark";
  /** Same scroll paint for every character (overrides segment variants). */
  uniform?: { from: string; to: string };
  className?: string;
  /** Extra “soft” span (in character widths) for smoother letter blending */
  spread?: number;
  "data-node-id"?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotionSafe();
  const reduceRef = useRef(reduce);
  useEffect(() => {
    reduceRef.current = reduce;
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.28"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 38,
    restDelta: 0.001,
  });

  const [progress, setProgress] = useState(0);

  const { chars, ariaLabel } = useMemo(() => {
    const out: {
      ch: string;
      from: ReturnType<typeof parseHex>;
      to: ReturnType<typeof parseHex>;
    }[] = [];
    let aria = "";

    if (uniform) {
      const from = parseHex(uniform.from);
      const to = parseHex(uniform.to);
      for (const seg of segments) {
        const t = normalizeSegmentText(seg.text);
        aria += t;
        for (const ch of Array.from(t)) {
          out.push({ ch, from, to });
        }
      }
    } else {
      const pal = PALETTE[theme];
      for (const seg of segments) {
        const t = normalizeSegmentText(seg.text);
        aria += t;
        const pair = pal[seg.variant];
        const from = parseHex(pair.from);
        const to = parseHex(pair.to);
        for (const ch of Array.from(t)) {
          out.push({ ch, from, to });
        }
      }
    }

    return { chars: out, ariaLabel: aria.trim() };
  }, [segments, theme, uniform]);

  const n = chars.length;

  useMotionValueEvent(smooth, "change", (v) => {
    if (reduceRef.current) return;
    setProgress(Math.min(1, Math.max(0, v)));
  });

  useLayoutEffect(() => {
    startTransition(() => {
      if (reduce) {
        setProgress(1);
        return;
      }
      // Use scrollYProgress (not the spring) so elements already past the
      // animation range on page load start fully painted, not light-gray.
      setProgress(Math.min(1, Math.max(0, scrollYProgress.get())));
    });
  }, [reduce, scrollYProgress, n]);
  const span = Math.max(spread, 0.5);

  return (
    <p
      ref={ref}
      className={[className, "relative"].filter(Boolean).join(" ")}
      data-node-id={dataNodeId}
      aria-label={ariaLabel}
    >
      {chars.map((c, i) => {
        const raw = (progress * (n - 1 + span) - i) / span;
        const t = smoothstep(raw);
        const color = mixRgb(c.from, c.to, t);
        return (
          <span
            key={i}
            aria-hidden
            className="inline text-[inherit] leading-[normal]"
            style={{ color }}
          >
            {c.ch}
          </span>
        );
      })}
    </p>
  );
}
