"use client";

import { useEffect, useRef } from "react";

type Variant = "up" | "scale";

/**
 * Reveals content as it scrolls into view. Content is fully visible without JS
 * — the .reveal styles are only applied once this component mounts, so no-JS
 * and reduced-motion users never see a hidden page.
 *
 * The observer disconnects after the first intersection: re-animating on every
 * pass is what makes scroll effects feel cheap, and it costs battery on mobile.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Element to render, so a reveal can sit directly inside a list. */
  as?: "div" | "li";
  /** "up" slides and fades; "scale" settles an image out of a slight zoom. */
  variant?: Variant;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal", `reveal-${variant}`);

    // Anything already on screen at load should not animate in behind the
    // fold-line; show it immediately so the first paint looks settled.
    const viewportH = window.innerHeight;
    if (el.getBoundingClientRect().top < viewportH * 0.9) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      // Trigger slightly before the element scrolls into view so content never
      // visibly pops in mid-viewport.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
