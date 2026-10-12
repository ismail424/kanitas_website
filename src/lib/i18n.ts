/**
 * Languages of the site. Swedish lives at the root (/bygg), every other
 * language under its own prefix (/en/bygg). next.config.ts rewrites the root
 * paths to /sv internally, so all languages share one route tree.
 */

export const locales = ["sv", "en", "bs", "de", "fi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sv";

/** Each language in its own words, for the language menu. */
export const localeNames: Record<Locale, string> = {
  sv: "Svenska",
  en: "English",
  bs: "Bosanski",
  de: "Deutsch",
  fi: "Suomi",
};

/** OpenGraph locale per language. */
export const ogLocales: Record<Locale, string> = {
  sv: "sv_SE",
  en: "en_GB",
  bs: "bs_BA",
  de: "de_DE",
  fi: "fi_FI",
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

/** A site path in the given language: "/bygg" → "/en/bygg", "/" → "/en". */
export function localeHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" || /^\/[?#]/.test(path)
    ? `/${locale}${path.slice(1)}`
    : `/${locale}${path}`;
}

/** The language a path is in and the path without its prefix. Accepts the
 *  internal /sv paths too, which is what a page sees while prerendering. */
export function splitLocale(pathname: string): {
  locale: Locale;
  path: string;
} {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first)) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: defaultLocale, path: pathname };
}

/** Remembers a language the visitor picked, so the language hint stops
 *  offering another one. Storage can be unavailable; then it just forgets. */
export const LOCALE_STORAGE_KEY = "kanitas-locale";

export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {}
}

/** hreflang alternates for a path, Swedish doubling as the default. */
export function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localeHref(locale, path)]),
    ),
    "x-default": path,
  };
}
