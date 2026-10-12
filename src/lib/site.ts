/**
 * Central site configuration for kanitas.se: contact details, company facts,
 * photographs and how the pages are put together. Everything a visitor reads
 * lives in the dictionaries under src/content, one per language, so the facts
 * here are stated once for all of them.
 */

import type { Metadata } from "next";
import {
  defaultLocale,
  languageAlternates,
  localeHref,
  locales,
  ogLocales,
  type Locale,
} from "@/lib/i18n";

export const site = {
  name: "Kanitas",
  legalName: "Kanitas AB",
  orgnr: "556841-1010",
  founded: 2011,
  /** Apex 308-redirects to www, so canonicals, JSON-LD and the sitemap use www. */
  url: "https://www.kanitas.se",
  phone: "070-665 32 48",
  /** The same number as dialled from abroad, shown in the other languages. */
  phoneAbroad: "+46 70 665 32 48",
  phoneIntl: "+46706653248",
  phoneHref: "tel:+46706653248",
  email: "info@kanitas.se",
  address: {
    city: "Järfälla",
    region: "Stockholm",
    country: "SE",
  },
  /** Credit rating of Kanitas AB, the parent company. */
  creditRating: "AAA",
} as const;

/** The phone number as a visitor reading this language would dial it. */
export const phoneFor = (locale: Locale) =>
  locale === defaultLocale ? site.phone : site.phoneAbroad;

/** A page's full URL in a language, for structured data. */
export function absoluteUrl(locale: Locale, path: string) {
  const href = localeHref(locale, path);
  return href === "/" ? site.url : `${site.url}${href}`;
}

/**
 * Complete metadata for a page in one language: title, description, the
 * canonical URL, hreflang links to every other language, and OpenGraph and
 * Twitter cards. Next.js replaces nested metadata objects instead of merging
 * them, so every page ships the full set from here.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = "/og.jpg",
}: {
  locale: Locale;
  /** The page's path without language prefix, e.g. "/bygg" */
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = localeHref(locale, path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => ogLocales[other]),
      siteName: site.legalName,
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Photography slots. Every photograph on the site is registered here, its alt
 * text in each dictionary; a slot with `ready: false` renders a labelled
 * placeholder instead, so the layout is finished before the photography is.
 * To swap a photo: drop the file at `src` and update the alt texts. The
 * `brief` says what our own photograph should show.
 */
export type PhotoSlot = {
  src: string;
  /** What the photograph needs to show, for whoever shoots or picks it. */
  brief: string;
  /** Roughly the shape the slot renders at. */
  shape: string;
  /** Where the subject sits (CSS object-position), so a tight crop keeps it. */
  focus?: string;
  ready: boolean;
};

export const photos = {
  nybygge: {
    src: "/images/photos/nybygge.avif",
    brief: "Ett av våra byggen, för startsidans toppbild",
    shape: "16:9 liggande, byggnaden i högra halvan",
    ready: true,
  },
  jobbstart: {
    src: "/images/photos/jobbstart.avif",
    brief: "Vårt eget lag vid ett jobb",
    shape: "16:9 liggande, personerna i högra tredjedelen",
    focus: "85% 50%",
    ready: true,
  },
  bygglag: {
    src: "/images/photos/bygglag.avif",
    brief: "Vårt eget lag på väg in till ett jobb, med firmabilen",
    shape: "16:9 liggande",
    ready: true,
  },
  armering: {
    src: "/images/photos/armering.avif",
    brief: "Vår egen personal i arbete på en byggarbetsplats",
    shape: "3:2 liggande",
    ready: true,
  },
  badrum: {
    src: "/images/photos/badrum.avif",
    brief: "En badrumsrenovering som pågår, gärna vårt eget jobb",
    shape: "4:3 liggande",
    ready: true,
  },
  renovering: {
    src: "/images/photos/renovering.avif",
    brief: "Färdig renovering, interiör",
    shape: "4:3 liggande",
    ready: true,
  },
  platsbesok: {
    src: "/images/photos/platsbesok.avif",
    brief: "Platsbesök hos en kund inför en renovering",
    shape: "3:2 liggande",
    ready: true,
  },
  snickare: {
    src: "/images/photos/snickare.avif",
    brief: "Hantverkare i arbete inomhus",
    shape: "16:9 liggande",
    focus: "30% 50%",
    ready: true,
  },
  byggstadning: {
    src: "/images/photos/byggstadning.avif",
    brief: "Vår städpersonal vid en byggstädning",
    shape: "3:2 liggande",
    ready: true,
  },
  slutstadning: {
    src: "/images/photos/slutstadning.avif",
    brief: "Slutstädning inför besiktning",
    shape: "3:2 liggande",
    ready: true,
  },
  trapphus: {
    src: "/images/photos/trapphus.avif",
    brief: "Trapphusstädning hos en av våra avtalskunder",
    shape: "4:3 liggande",
    ready: true,
  },
  team: {
    src: "/images/photos/team.avif",
    brief: "Hela laget vid våra bilar i Järfälla",
    shape: "16:9 liggande",
    ready: true,
  },
  maskin: {
    src: "/images/photos/maskin.avif",
    brief: "Maskiner och fordon på vår gård",
    shape: "3:2 liggande",
    ready: true,
  },
  fordon: {
    src: "/images/photos/fordon.avif",
    brief: "Uthyrning av en transportbil",
    shape: "3:2 liggande",
    ready: true,
  },
  lokalvisning: {
    src: "/images/photos/lokalvisning.avif",
    brief: "Visning av en ledig lokal",
    shape: "3:2 liggande",
    ready: true,
  },
  fastighet: {
    src: "/images/photos/fastighet.avif",
    brief: "Egen lokal i beståndet, exteriör",
    shape: "3:2 liggande",
    ready: true,
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoName = keyof typeof photos;

/** Topics for the contact form's ärende selector. The value is what lands in
 *  the mail subject, in Swedish whatever the visitor's language; the label
 *  the visitor picks from is in the dictionary. */
export const contactTopics = [
  "Bygg",
  "Bemanning",
  "Städ",
  "Trading",
  "Fastigheter",
  "Jobb",
  "Annat",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

/** The ärende pre-selected by the careers block. */
export const careersTopic: ContactTopic = "Jobb";

/**
 * How each area page is put together. The words are in the dictionaries
 * under `areas`, keyed by the same slug, which is also the page's path.
 */
export type AreaPage = {
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  heroPhoto: PhotoName;
  /** Up to two photographs after the services (none is fine) */
  photos: PhotoName[];
  /** Photograph beside the "how a job runs" steps */
  processPhoto: PhotoName;
  /** Pre-selected ärende in the contact form */
  contactTopic: ContactTopic;
  /** Show the "Trygg att anlita" points */
  trust: boolean;
  /** Social card image */
  ogImage: string;
};

export const areaSlugs = ["bygg", "stad", "maskiner", "lokaler"] as const;

export type AreaSlug = (typeof areaSlugs)[number];

export const areaPages: Record<AreaSlug, AreaPage> = {
  bygg: {
    name: "Kanitas Bygg",
    heroPhoto: "bygglag",
    photos: ["badrum", "renovering"],
    processPhoto: "platsbesok",
    contactTopic: "Bygg",
    trust: true,
    ogImage: "/og-bygg.jpg",
  },
  stad: {
    name: "Kanitas ENT",
    heroPhoto: "snickare",
    photos: ["armering", "trapphus"],
    processPhoto: "slutstadning",
    contactTopic: "Bemanning",
    trust: true,
    ogImage: "/og-stad.jpg",
  },
  maskiner: {
    name: "Kanitas Trading",
    heroPhoto: "maskin",
    photos: [],
    processPhoto: "fordon",
    contactTopic: "Trading",
    trust: false,
    ogImage: "/og-maskiner.jpg",
  },
  lokaler: {
    name: "Kanitas Fastigheter",
    heroPhoto: "fastighet",
    photos: [],
    processPhoto: "lokalvisning",
    contactTopic: "Fastigheter",
    trust: false,
    ogImage: "/og-lokaler.jpg",
  },
};

/** Legal entities in the group, shown on the About page. Each links to the
 *  verksamhet that lists it under `entities`. */
export const groupCompanies = [
  { name: "Kanitas AB", orgnr: "556841-1010" },
  { name: "Kanitas ENT AB", orgnr: "559146-9183" },
  { name: "Kanitas Bygg AB", orgnr: "559553-4297" },
  { name: "Kanitas Fastigheter AB", orgnr: "559553-4305" },
  { name: "Kanitas Trading AB", orgnr: "559553-4263" },
] as const;

export type CompanyName = (typeof groupCompanies)[number]["name"];

/**
 * The four verksamheter. A verksamhet with a `page` links there; one without
 * is presented on its home page tile and reached through the contact form
 * with its ärende chosen. The day a verksamhet gets its own domain, point
 * `page` at it and the menu, the home page and the footer all follow.
 */
export type Business = {
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  /** The verksamhet's own page, when it has one. */
  page?: string;
  /** Ärende pre-selected when this verksamhet sends someone to the form. */
  topic: ContactTopic;
  /** Photograph on its home page tile. */
  photo: PhotoName;
  /** Legal entities that carry this verksamhet, for the Bolagen table. */
  entities: CompanyName[];
};

/** Slugs in menu order; each is also the id of its tile on the home page. */
export const businessSlugs = [
  "bygg",
  "stad",
  "trading",
  "fastigheter",
] as const;

export type BusinessSlug = (typeof businessSlugs)[number];

export const businesses: Record<BusinessSlug, Business> = {
  bygg: {
    name: "Kanitas Bygg",
    page: "/bygg",
    topic: "Bygg",
    photo: "armering",
    entities: ["Kanitas Bygg AB", "Kanitas AB"],
  },
  stad: {
    name: "Kanitas ENT",
    page: "/stad",
    topic: "Bemanning",
    photo: "byggstadning",
    entities: ["Kanitas ENT AB"],
  },
  trading: {
    name: "Kanitas Trading",
    page: "/maskiner",
    topic: "Trading",
    photo: "maskin",
    entities: ["Kanitas Trading AB"],
  },
  fastigheter: {
    name: "Kanitas Fastigheter",
    page: "/lokaler",
    topic: "Fastigheter",
    photo: "fastighet",
    entities: ["Kanitas Fastigheter AB"],
  },
};

/** Where a verksamhet lives: its own page, or its tile on the home page. */
export function businessHref(slug: BusinessSlug) {
  return businesses[slug].page ?? `/#${slug}`;
}

/** The contact form with an ärende already chosen. */
export function contactHref(topic: ContactTopic) {
  return `/kontakt?amne=${encodeURIComponent(topic)}#kontakt`;
}

/** Client logos, trimmed to their ink. `h` evens out optical weight: a wide
 *  wordmark sits lower than a stacked emblem so neither dominates the row. */
export const references = [
  { name: "NCC", logo: "/references/ncc.png", h: 34 },
  { name: "Implenia", logo: "/references/implenia.png", h: 30 },
  { name: "Jiben", logo: "/references/jiben.png", h: 32 },
  { name: "Oljibe", logo: "/references/oljibe.png", h: 42 },
  { name: "Artega", logo: "/references/artega.png", h: 30 },
  { name: "ByggPartner", logo: "/references/byggpartner.png", h: 24 },
  { name: "Dagab", logo: "/references/dagab.png", h: 24 },
  { name: "SMD Logistics", logo: "/references/smd-logistics.png", h: 28 },
  { name: "Ranova", logo: "/references/ranova.png", h: 40 },
  { name: "Catena", logo: "/references/catena.png", h: 22 },
];

/** Agreements, credit rating and memberships, shown above the footer; the
 *  names are in the dictionaries. `h` evens out optical weight the same way
 *  as for the client logos. */
export const certifications = {
  aaa: { image: "/images/cert/aaa_120.png", h: 34 },
  byggnads: { image: "/images/cert/byggnads_140.png", h: 28 },
  fastighets: { image: "/images/cert/fastighets_120.png", h: 30 },
  safeTrade: { image: "/images/cert/SafeTrade_120.png", h: 30 },
  svensktNaringsliv: { image: "/images/cert/svnaring_B.png", h: 44 },
};

export type CertificationId = keyof typeof certifications;
