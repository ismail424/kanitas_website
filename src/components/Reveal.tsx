"use client";

import { useEffect, useRef } from "react";

/**
 * Fades content in as it scrolls into view. Content is fully visible without JS
 * and the first paint never hides anything: the .reveal styles are only added
 * to blocks the observer reports as below the fold, and reduced-motion users
 * get no transition at all (globals.css).
 *
 * Positions come from the IntersectionObserver rather than a layout read on
 * mount, so a page full of reveals never forces a reflow per block. The
 * observer disconnects once a block is shown: re-animating on every pass is
 * what makes scroll effects feel cheap, and it costs battery on mobile.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Element to render, so a reveal can sit directly inside a list. */
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let first = true;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (first) {
            first = false;
            // On screen at load: leave it be, so the first paint stays put.
            if (entry.boundingClientRect.top < window.innerHeight) {
              observer.disconnect();
              return;
            }
            el.classList.add("reveal");
            continue;
          }
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      // Start once the block is a little way into the viewport, so the fade
      // is seen rather than spent below the fold.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={className}
    >
      {children}
    </Tag>
  );
}
