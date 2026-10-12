"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Globe, Menu, Phone, X } from "lucide-react";
import LanguageLinks from "@/components/LanguageLinks";
import type { BusinessCopy, Dictionary, SiteLink } from "@/content/types";
import { localeHref, splitLocale, type Locale } from "@/lib/i18n";
import { phoneFor, site, type BusinessSlug } from "@/lib/site";

export type HeaderCopy = Dictionary["header"] &
  Pick<Dictionary["common"], "call" | "requestQuote" | "phone" | "language">;

export type HeaderBusiness = BusinessCopy & {
  slug: BusinessSlug;
  name: string;
  /** Without language prefix */
  href: string;
};

/**
 * The site header. The logo arrives rendered from the server (the layout
 * passes it in), so its path data never ships in this client bundle, and so
 * do the words, in the page's language.
 */
export default function Header({
  logo,
  locale,
  t,
  nav,
  businesses,
}: {
  logo: React.ReactNode;
  locale: Locale;
  t: HeaderCopy;
  /** Links after the businesses menu, without language prefix */
  nav: SiteLink[];
  businesses: HeaderBusiness[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Compare paths without language, so /en/bygg is the bygg page too.
  const { path } = splitLocale(pathname);
  const href = (to: string) => localeHref(locale, to);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelButtonRef = useRef<HTMLButtonElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);

  const currentBusiness = businesses.find((b) => b.href === path);
  const inVerksamheter = currentBusiness !== undefined;

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
    setLangOpen(false);
  }, [pathname]);

  const closeAll = () => {
    setMenuOpen(false);
    setPanelOpen(false);
    setLangOpen(false);
  };

  // Escape closes whichever menu is open and returns focus to its toggle;
  // a click outside the header closes the desktop panel.
  useEffect(() => {
    if (!menuOpen && !panelOpen && !langOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (panelOpen) panelButtonRef.current?.focus();
      if (langOpen) langButtonRef.current?.focus();
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
  }, [menuOpen, panelOpen, langOpen]);

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

  const isActive = (to: string) =>
    to === path || (to !== "/" && path.startsWith(`${to}/`));

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
          aria-label={t.mainMenu}
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
              aria-label={
                currentBusiness
                  ? `${t.businesses}, ${currentBusiness.name}`
                  : t.businesses
              }
              onClick={() => setPanelOpen((v) => !v)}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xs px-3 py-2 text-base font-medium transition-colors xl:px-4 ${
                panelOpen || inVerksamheter
                  ? "bg-paper-2 text-ink"
                  : "text-ink-soft hover:bg-paper-2 hover:text-ink"
              }`}
            >
              {currentBusiness ? currentBusiness.name : t.businesses}
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
                        href={href(business.href)}
                        onClick={closeAll}
                        className="group -m-4 flex flex-col rounded-xs p-4 transition-colors hover:bg-paper-2"
                      >
                        <span className="title text-ink group-hover:text-petrol">
                          {business.name}
                        </span>
                        <span className="mt-1 text-sm text-muted">
                          {business.heading}
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
                    {t.phone}:{" "}
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-ink hover:text-petrol"
                    >
                      {phoneFor(locale)}
                    </a>
                  </p>
                  <Link
                    href={href("/om-oss")}
                    onClick={closeAll}
                    className="link-arrow text-petrol hover:text-ink"
                  >
                    {t.aboutGroup}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* A link to a section of another page (Referenser) waits for a
              wide screen, so longer languages still fit on one line. */}
          {nav.map((item) => (
            <Link
              key={item.href}
              href={href(item.href)}
              onClick={closeAll}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-xs px-3 py-2 text-base font-medium transition-colors xl:px-4 ${
                item.href.includes("#") ? "hidden xl:block" : ""
              } ${
                isActive(item.href)
                  ? "bg-paper-2 text-ink"
                  : "text-ink-soft hover:bg-paper-2 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          {/* The language menu drops from its button, closing when focus
              moves on, like the businesses panel. */}
          <div
            className="relative"
            onBlur={(event) => {
              const next = event.relatedTarget as Node | null;
              if (next && !event.currentTarget.contains(next)) {
                setLangOpen(false);
              }
            }}
          >
            <button
              ref={langButtonRef}
              type="button"
              aria-expanded={langOpen}
              aria-controls="sprak-meny"
              aria-label={t.language}
              onClick={() => setLangOpen((v) => !v)}
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-xs px-2 text-sm font-semibold uppercase transition-colors ${
                langOpen
                  ? "bg-paper-2 text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <Globe className="h-4 w-4 text-petrol" aria-hidden="true" />
              {locale}
            </button>
            <div
              id="sprak-meny"
              hidden={!langOpen}
              className="absolute right-0 top-full mt-2 w-44 border border-line bg-paper py-2 shadow-panel"
            >
              <LanguageLinks
                locale={locale}
                onSelect={closeAll}
                linkClassName="block px-4 py-2 text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink aria-[current=true]:font-semibold aria-[current=true]:text-petrol"
              />
            </div>
          </div>
          {/* The number itself only once there is room for it beside the
              menu; until then the icon alone dials it. */}
          <a
            href={site.phoneHref}
            aria-label={`${t.call} ${phoneFor(locale)}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-base font-semibold text-ink transition-colors hover:text-petrol xl:min-w-0"
          >
            <Phone className="h-4 w-4 text-petrol" aria-hidden="true" />
            <span className="hidden xl:inline">{phoneFor(locale)}</span>
          </a>
          <Link
            href={href("/kontakt")}
            onClick={closeAll}
            className="btn btn-primary min-h-11 whitespace-nowrap px-5 py-2.5 text-base"
          >
            {t.requestQuote}
          </Link>
        </div>

        {/* Calling is the main way in on a phone: one tap, always in view. */}
        <a
          href={site.phoneHref}
          aria-label={`${t.call} ${phoneFor(locale)}`}
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
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Phone and tablet: one full-height sheet. */}
      {menuOpen ? (
        <nav
          id="mobilmeny"
          aria-label={t.mobileMenu}
          className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto border-t border-line bg-paper px-5 pb-10 pt-6 sm:px-6 lg:hidden"
        >
          <p className="text-sm font-semibold text-muted">{t.businesses}</p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {businesses.map((business) => (
              <li key={business.slug}>
                <Link
                  href={href(business.href)}
                  onClick={closeAll}
                  aria-current={business.href === path ? "page" : undefined}
                  className="block py-4 aria-[current=page]:bg-paper-2 aria-[current=page]:px-4"
                >
                  <span className="block title text-ink">{business.name}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {business.heading}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={href(item.href)}
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
              {phoneFor(locale)}
            </a>
            <Link
              href={href("/kontakt")}
              onClick={closeAll}
              className="btn btn-primary"
            >
              {t.requestQuote}
            </Link>
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-muted">
              <Globe className="h-4 w-4" aria-hidden="true" />
              {t.language}
            </p>
            <LanguageLinks
              locale={locale}
              onSelect={closeAll}
              className="mt-3 flex flex-wrap gap-x-5 gap-y-2"
              linkClassName="block py-1.5 text-ink underline-offset-4 aria-[current=true]:font-semibold aria-[current=true]:text-petrol aria-[current=true]:underline"
            />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
