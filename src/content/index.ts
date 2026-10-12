import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import bs from "./bs";
import de from "./de";
import en from "./en";
import fi from "./fi";
import sv from "./sv";
import type { Dictionary } from "./types";

/** Everything a visitor reads, per language. Server-side only: client
 *  components get just the strings they show, as props. */
export const dictionaries: Record<Locale, Dictionary> = { sv, en, bs, de, fi };

/** Route params of every page: the language segment. */
export type LocaleParams = Promise<{ locale: string }>;

/** The page's language and its dictionary; an unknown language is a 404. */
export async function getContent(params: LocaleParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, t: dictionaries[locale] };
}
