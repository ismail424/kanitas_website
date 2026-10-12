import type { Metadata } from "next";
import NotFoundView, { type NotFoundCopy } from "@/components/NotFoundView";
import { dictionaries } from "@/content";
import { locales, type Locale } from "@/lib/i18n";
import { businessSlugs } from "@/lib/site";

// A not-found page gets no params, so the title stays language-neutral.
export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

/** A missing page, in the language of the path asked for. */
export default function NotFound() {
  const copies = Object.fromEntries(
    locales.map((locale) => {
      const t = dictionaries[locale];
      const copy: NotFoundCopy = {
        ...t.notFound,
        headings: businessSlugs.map((slug) => t.businesses[slug].heading),
      };
      return [locale, copy];
    }),
  ) as Record<Locale, NotFoundCopy>;

  return <NotFoundView copies={copies} />;
}
