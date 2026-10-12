"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";
import type { LanguageHintCopy } from "@/content/types";
import {
  isLocale,
  localeHref,
  LOCALE_STORAGE_KEY,
  rememberLocale,
  splitLocale,
  type Locale,
} from "@/lib/i18n";

/** Browser languages whose speakers read one of ours. */
const readsAs: Record<string, Locale> = { hr: "bs", sr: "bs", sh: "bs" };

/** The language to offer: the one the visitor picked before, or else their
 *  browser's, unless the page is already in a language they read. */
function suggestion(current: Locale): Locale | null {
  let picked: string | null = null;
  try {
    picked = localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {}
  if (picked && isLocale(picked)) return picked === current ? null : picked;

  const preferred = navigator.languages.map((tag) => {
    const base = tag.toLowerCase().split("-")[0];
    return readsAs[base] ?? base;
  });
  if (preferred.includes(current)) return null;
  return preferred.find(isLocale) ?? null;
}

/**
 * Offers the page in the visitor's own language, in that language. Never
 * redirects: search engines and shared links always get the page they asked
 * for. Either answer is remembered, so it asks once.
 */
export default function LanguageHint({
  locale,
  hints,
}: {
  locale: Locale;
  /** The offer in each language, since it is written in the one it offers */
  hints: Record<Locale, LanguageHintCopy>;
}) {
  const [offer, setOffer] = useState<Locale | null>(null);
  const { path } = splitLocale(usePathname());

  useEffect(() => {
    setOffer(suggestion(locale));
  }, [locale]);

  if (!offer) return null;
  const t = hints[offer];
  const answer = (chosen: Locale) => {
    rememberLocale(chosen);
    setOffer(null);
  };

  return (
    <aside
      lang={offer}
      aria-label={t.text}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper shadow-panel sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-96 sm:border"
    >
      <div className="flex items-start gap-3 py-4 pl-5 pr-3">
        <Globe
          className="mt-0.5 h-5 w-5 shrink-0 text-petrol"
          aria-hidden="true"
        />
        <div className="flex-1">
          <p className="text-ink">{t.text}</p>
          <Link
            href={localeHref(offer, path)}
            hrefLang={offer}
            onClick={() => answer(offer)}
            className="link-arrow mt-1 font-semibold text-petrol hover:text-ink"
          >
            {t.action}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => answer(locale)}
          aria-label={t.dismiss}
          className="rounded-xs p-2 text-muted transition-colors hover:bg-paper-2 hover:text-ink"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
