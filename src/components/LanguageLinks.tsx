"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeHref,
  localeNames,
  locales,
  rememberLocale,
  splitLocale,
  type Locale,
} from "@/lib/i18n";

/**
 * The current page in every language, each named in its own words. Picking
 * one is remembered, so the language hint stops offering another.
 */
export default function LanguageLinks({
  locale,
  className = "",
  linkClassName = "",
  onSelect,
}: {
  locale: Locale;
  className?: string;
  linkClassName?: string;
  onSelect?: () => void;
}) {
  const { path } = splitLocale(usePathname());

  return (
    <ul className={className}>
      {locales.map((other) => (
        <li key={other}>
          <Link
            href={localeHref(other, path)}
            hrefLang={other}
            lang={other}
            aria-current={other === locale ? "true" : undefined}
            onClick={() => {
              rememberLocale(other);
              onSelect?.();
            }}
            className={linkClassName}
          >
            {localeNames[other]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
