"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the mobile menu on Escape and return focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled
          ? "border-line bg-cream/95 shadow-[0_1px_24px_rgba(26,25,21,0.08)] backdrop-blur"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
          {nav.map((item) => {
            const active =
              item.href === pathname ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-[0.95rem] font-medium transition-colors ${
                  active
                    ? "bg-cream-dark text-ink"
                    : "text-ink-soft hover:bg-cream-dark hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-amber-deep"
          >
            <Phone className="h-4 w-4 text-amber-deep" aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            className="rounded-lg bg-amber px-4.5 py-2.5 text-[0.95rem] font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
          >
            Begär offert
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-lg p-2 text-ink hover:bg-cream-dark lg:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? "Stäng menyn" : "Öppna menyn"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobilmeny"
          aria-label="Mobilmeny"
          className="border-t border-line bg-cream px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-lg font-medium ${
                      active ? "bg-cream-dark text-ink" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 px-3 font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-amber-deep" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              className="rounded-lg bg-amber px-4 py-3 text-center font-semibold text-dark-deep"
            >
              Begär offert
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
