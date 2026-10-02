"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { businessHref, businesses, nav, site } from "@/lib/site";

/**
 * The site header. The logo arrives rendered from the server (the layout
 * passes it in), so its path data never ships in this client bundle.
 */
export default function Header({ logo }: { logo: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelButtonRef = useRef<HTMLButtonElement>(null);

  const inVerksamheter = businesses.some((b) => b.page === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation. Links to a section of the current page
  // do not change the pathname, so every link also closes on click.
  useEffect(() => {
    setMenuOpen(false);
    setPanelOpen(false);
  }, [pathname]);

  const closeAll = () => {
    setMenuOpen(false);
    setPanelOpen(false);
  };

  // Escape closes whichever menu is open and returns focus to its toggle;
  // a click outside the header closes the desktop panel.
  useEffect(() => {
    if (!menuOpen && !panelOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (panelOpen) panelButtonRef.current?.focus();
      if (menuOpen) menuButtonRef.current?.focus();
      closeAll();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen, panelOpen]);

  // The phone menu covers the page: stop the page scrolling underneath it,
  // and take it out of reach so Tab and screen readers stay in the menu.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    const behind = document.querySelectorAll<HTMLElement>(
      '#innehall, footer, a[href="#innehall"]',
    );
    behind.forEach((el) => (el.inert = menuOpen));
    return () => {
      document.documentElement.style.overflow = "";
      behind.forEach((el) => (el.inert = false));
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === pathname || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-paper transition-shadow ${
        scrolled || panelOpen ? "border-line shadow-header" : "border-line/60"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        {logo}

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Huvudmeny"
        >
          {/* The panel follows its button, so Tab goes straight into it, and
              it closes when focus moves on. Neither wrapper is positioned:
              the panel spans the header, not the button. */}
          <div
            onBlur={(event) => {
              const next = event.relatedTarget as Node | null;
              if (next && !event.currentTarget.contains(next)) {
                setPanelOpen(false);
              }
            }}
          >
            <button
              ref={panelButtonRef}
              type="button"
              aria-expanded={panelOpen}
              aria-controls="verksamheter-meny"
              onClick={() => setPanelOpen((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-xs px-4 py-2 text-base font-medium transition-colors ${
                panelOpen || inVerksamheter
                  ? "bg-paper-2 text-ink"
                  : "text-ink-soft hover:bg-paper-2 hover:text-ink"
              }`}
            >
              Verksamheter
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  panelOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {/* Desktop: the four verksamheter, equal weight, one row. */}
            <div
              id="verksamheter-meny"
              hidden={!panelOpen}
              className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-panel lg:block"
            >
              <div className="mx-auto max-w-7xl px-8 pb-8 pt-10">
                <ul className="grid grid-cols-4 gap-8">
                  {businesses.map((business) => (
                    <li key={business.slug}>
                      <Link
                        href={businessHref(business)}
                        onClick={closeAll}
                        className="group -m-4 flex flex-col rounded-xs p-4 transition-colors hover:bg-paper-2"
                      >
                        <span className="title text-ink group-hover:text-petrol">
                          {business.heading}
                        </span>
                        <span className="mt-1 text-sm text-muted">
                          {business.name}
                        </span>
                        <span className="mt-3 leading-relaxed text-ink-soft">
                          {business.summary}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-6 text-sm">
                  <p className="text-muted">
                    Telefon:{" "}
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-ink hover:text-petrol"
                    >
                      {site.phone}
                    </a>
                  </p>
                  <Link
                    href="/om-oss"
                    onClick={closeAll}
                    className="link-arrow text-petrol hover:text-ink"
                  >
                    Om koncernen
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-xs px-4 py-2 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-paper-2 text-ink"
                  : "text-ink-soft hover:bg-paper-2 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-petrol"
          >
            <Phone className="h-4 w-4 text-petrol" aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            onClick={closeAll}
            className="btn btn-primary min-h-11 px-5 py-2.5 text-base"
          >
            Begär offert
          </Link>
        </div>

        {/* Calling is the main way in on a phone: one tap, always in view. */}
        <a
          href={site.phoneHref}
          aria-label={`Ring ${site.phone}`}
          className="ml-auto rounded-xs p-2 text-petrol hover:bg-paper-2 lg:hidden"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 rounded-xs p-2 text-ink hover:bg-paper-2 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobilmeny"
          aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Phone and tablet: one full-height sheet. */}
      {menuOpen ? (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto border-t border-line bg-paper px-5 pb-10 pt-6 sm:px-6 lg:hidden"
        >
          <p className="text-sm font-semibold text-muted">Verksamheter</p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {businesses.map((business) => (
              <li key={business.slug}>
                <Link
                  href={businessHref(business)}
                  onClick={closeAll}
                  aria-current={business.page === pathname ? "page" : undefined}
                  className="block py-4 aria-[current=page]:border-l-4 aria-[current=page]:border-copper aria-[current=page]:pl-4"
                >
                  <span className="block title text-ink">
                    {business.heading}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {business.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-2.5 text-lg font-medium text-ink underline-offset-4 aria-[current=page]:text-petrol aria-[current=page]:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href={site.phoneHref} className="btn btn-outline">
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              onClick={closeAll}
              className="btn btn-primary"
            >
              Begär offert
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
