"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  queueMicrotask(onStoreChange);
  return () => {};
}

/**
 * False during SSR and during hydration; true after the first client tick so
 * server HTML matches the initial client tree, then updates.
 */
function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/**
 * Until `useIsClient` is true, returns false so markup matches SSR; then the
 * real prefers-reduced-motion flag (never null for consumers).
 */
export function useReducedMotionSafe(): boolean {
  const prefers = useReducedMotion();
  const isClient = useIsClient();
  if (!isClient) return false;
  return prefers ?? false;
}
