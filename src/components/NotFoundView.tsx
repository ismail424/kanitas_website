"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { localeHref, splitLocale, type Locale } from "@/lib/i18n";
import { businessHref, businessSlugs, businesses } from "@/lib/site";

export type NotFoundCopy = Dictionary["notFound"] & {
  /** Each business's heading, in `businessSlugs` order */
  headings: string[];
};

/**
 * The 404 body. A not-found page knows nothing of the route, so the language
 * is read from the URL here, on the client.
 */
export default function NotFoundView({
  copies,
}: {
  copies: Record<Locale, NotFoundCopy>;
}) {
  const { locale } = splitLocale(usePathname());
  const t = copies[locale];

  return (
    <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-muted">{t.code}</p>
          <h1 className="mt-4 display-page text-ink">{t.title}</h1>
          <p className="mt-6 lead text-muted">{t.lead}</p>
        </div>

        <ul className="mt-12 grid max-w-4xl grid-cols-1 gap-x-12 sm:grid-cols-2">
          {businessSlugs.map((slug, index) => (
            <li key={slug} className="border-t border-line">
              <Link
                href={localeHref(locale, businessHref(slug))}
                className="group flex items-center justify-between gap-6 py-5"
              >
                <span>
                  <span className="block title text-ink transition-colors group-hover:text-petrol">
                    {t.headings[index]}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {businesses[slug].name}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-petrol transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link href={localeHref(locale, "/")} className="btn btn-primary mt-12">
          <ArrowLeft aria-hidden="true" />
          {t.back}
        </Link>
      </div>
    </section>
  );
}
