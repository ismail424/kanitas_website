"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Pause, Phone, Play } from "lucide-react";
import Photo from "@/components/Photo";
import { indexNumber } from "@/lib/format";
import { businessHref, businesses, site } from "@/lib/site";

/** How long each verksamhet holds the screen. */
const HOLD_MS = 6500;

/**
 * The home hero. Four photographs, one per verksamhet, cross-fade under the
 * headline, and the verb that belongs to the photograph on screen is marked
 * in the sentence: bygger over the cranes, bemannar over the crew, and so on.
 * The index below names the four and shows how long until the next.
 *
 * Hovering or focusing an index entry brings its photograph forward. Reduced
 * motion gets a still first photograph and no timer; everyone gets a pause
 * button (WCAG 2.2.2).
 */
export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [paused, setPaused] = useState(false);
  const [motion, setMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Stop the clock while the tab is hidden, so it does not race on return.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const running = motion && !paused && !held && visible;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % businesses.length),
      HOLD_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, running]);

  const hold = (index: number) => {
    setActive(index);
    setHeld(true);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-petrol-darker text-white"
      aria-label="Kanitas verksamheter"
    >
      {/* Photographs. Only the first is in the server HTML, so it alone
          competes for the first paint; the rest load once the page is up. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {businesses.map((business, index) =>
          index === 0 || mounted ? (
            <div
              key={business.slug}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`absolute inset-0 ${motion ? "hero-drift" : ""}`}>
                <Photo
                  name={business.heroPhoto}
                  priority={index === 0}
                  sizes="100vw"
                  decorative
                />
              </div>
            </div>
          ) : null,
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-petrol-darker/95 via-petrol-darker/70 to-petrol-darker/20" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-petrol-darker/90 via-petrol-darker/40 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col px-4 sm:px-6 lg:max-h-[60rem] lg:px-8">
        <div className="flex flex-1 items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow hero-in text-copper-soft">
              Järfälla sedan {site.founded}
            </p>
            <h1 className="hero-in mt-7 display-1 text-white [--in:1]">
              Vi{" "}
              {businesses.map((business, index) => (
                <Fragment key={business.slug}>
                  <span
                    className={`hero-verb ${index === active ? "is-active" : ""}`}
                  >
                    {business.verb}
                  </span>
                  {index < businesses.length - 2
                    ? ", "
                    : index === businesses.length - 2
                      ? " och "
                      : "."}
                </Fragment>
              ))}
            </h1>
            <p className="hero-in mt-7 max-w-xl lead-lg text-white/80 [--in:2]">
              Bygg, bemanning, maskiner och lokaler i Storstockholm, med egen
              personal på kollektivavtal. En kontakt för hela kedjan, eller
              direkt till den verksamhet du behöver.
            </p>
            <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row [--in:3]">
              <Link href="#kontakt" className="btn btn-light">
                Begär offert
                <ArrowRight aria-hidden="true" />
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">
                <Phone aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <nav
          aria-label="Våra verksamheter"
          className="hero-in pb-6 sm:pb-10 [--in:4]"
          onMouseLeave={() => setHeld(false)}
        >
          <ul className="grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
            {businesses.map((business, index) => {
              const current = index === active;
              return (
                <li key={business.slug} className="bg-petrol-darker/70">
                  <Link
                    href={businessHref(business)}
                    onMouseEnter={() => hold(index)}
                    onFocus={() => hold(index)}
                    onBlur={() => setHeld(false)}
                    className={`group relative flex h-full items-start gap-4 px-5 py-5 transition-colors sm:px-6 sm:py-6 ${
                      current ? "bg-white/[0.07]" : "hover:bg-white/[0.07]"
                    }`}
                  >
                    {/* Progress to the next verksamhet, or a full bar when held */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] bg-white/10"
                    >
                      {current ? (
                        <span
                          key={`${active}-${running}`}
                          className={`block h-full origin-left bg-copper-soft ${
                            running ? "hero-progress" : ""
                          }`}
                          style={{ animationDuration: `${HOLD_MS}ms` }}
                        />
                      ) : null}
                    </span>
                    <span
                      className={`index pt-0.5 text-sm transition-colors ${
                        current ? "text-copper-soft" : "text-white/50"
                      }`}
                    >
                      {indexNumber(index)}
                    </span>
                    <span className="flex-1">
                      <span className="block title text-white">
                        {business.heading}
                      </span>
                      <span className="mt-1 block text-sm text-white/60">
                        {business.name}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          {motion ? (
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              {paused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {paused ? "Spela bildspelet" : "Pausa bildspelet"}
            </button>
          ) : null}
        </nav>
      </div>
    </section>
  );
}
