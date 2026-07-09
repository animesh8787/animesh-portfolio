import { useRef, useState } from "react";

/**
 * Animates the numeric portion of a stat value from 0 up to its real value
 * (e.g. "99.9%" counts 0.0 -> 99.9, "200+" counts 0 -> 200), preserving
 * whatever suffix it had. Values with no leading number pass through as-is.
 * Call `start()` once the stat scrolls into view; it's a no-op after the
 * first call, and resolves instantly if the user prefers reduced motion.
 */
export function useCountUp(target: string, duration = 1100) {
  const match = target.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [display, setDisplay] = useState(numeric === null ? target : (0).toFixed(decimals) + suffix);
  const startedRef = useRef(false);

  const start = () => {
    if (startedRef.current || numeric === null) return;
    startedRef.current = true;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }

    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((numeric * eased).toFixed(decimals) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  };

  return { display, start };
}
