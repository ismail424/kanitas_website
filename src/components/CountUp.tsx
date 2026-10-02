"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A number that counts up to its value the first time it scrolls into view.
 * The server renders the final value, so it is right without JS, for search
 * engines and for anyone who prefers reduced motion.
 */
export default function CountUp({
  value,
  from = 0,
  duration = 1400,
}: {
  value: number;
  from?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches)
      return;

    // Start low only while the number is still below the fold, so a number
    // already on screen never jumps backwards.
    if (el.getBoundingClientRect().top > window.innerHeight) setShown(from);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(from + (value - from) * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, from, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
