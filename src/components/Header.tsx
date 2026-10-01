"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { indexNumber } from "@/lib/format";
import { businessHref, businesses, nav, site } from "@/lib/site";

export default function Header() {
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

  // The phone menu covers the page; stop the page scrolling underneath it.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === pathname || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-paper transition-shadow ${
        scrolled || panelOpen
          ? "border-line shadow-[0_1px_24px_rgba(15,34,41,0.07)]"
          : "border-line/60"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
          <button
            ref={panelButtonRef}
            type="button"
            aria-expanded={panelOpen}
            aria-controls="verksamheter-meny"
            onClick={() => setPanelOpen((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-xs px-4 py-2 text-[0.95rem] font-medium transition-colors ${
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-xs px-4 py-2 text-[0.95rem] font-medium transition-colors ${
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
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-petrol"
          >
            <Phone className="h-4 w-4 text-copper" aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            onClick={closeAll}
            className="btn btn-primary min-h-11 px-5 py-2.5 text-[0.95rem]"
          >
            Begär offert
          </Link>
        </div>

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

      {/* Desktop: the four verksamheter, equal weight, one row. */}
      <div
        id="verksamheter-meny"
        hidden={!panelOpen}
        className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_48px_-24px_rgba(15,34,41,0.25)] lg:block"
      >
        <div className="mx-auto max-w-7xl px-8 pb-10 pt-8">
          <ul className="grid grid-cols-4 gap-px overflow-hidden border border-line bg-line">
            {businesses.map((business, index) => (
              <li key={business.slug} className="bg-paper">
                <Link
                  href={businessHref(business)}
                  onClick={closeAll}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-paper-2"
                >
                  <span className="index text-sm text-copper-ink">
                    {indexNumber(index)}
                  </span>
                  <span className="mt-4 title text-ink">{business.heading}</span>
                  <span className="mt-1 label text-muted">{business.name}</span>
                  <span className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                    {business.summary}
                  </span>
                  <span className="link-arrow mt-auto pt-6 text-sm text-petrol">
                    {business.page ? "Till sidan" : "Läs mer"}
                    <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between text-sm">
            <p className="text-muted">
              Fyra verksamheter, ett nummer:{" "}
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

      {/* Phone and tablet: one full-height sheet. */}
      {menuOpen ? (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto border-t border-line bg-paper px-4 pb-10 pt-6 sm:px-6 lg:hidden"
        >
          <p className="label text-muted">Verksamheter</p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {businesses.map((business, index) => (
              <li key={business.slug}>
                <Link
                  href={businessHref(business)}
                  onClick={closeAll}
                  aria-current={business.page === pathname ? "page" : undefined}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="index w-6 shrink-0 text-sm text-copper-ink">
                    {indexNumber(index)}
                  </span>
                  <span>
                    <span className="block title text-ink">
                      {business.heading}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {business.name}
                    </span>
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
                  className="block py-2.5 text-lg font-medium text-ink"
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
            <Link href="/kontakt" onClick={closeAll} className="btn btn-primary">
              Begär offert
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
