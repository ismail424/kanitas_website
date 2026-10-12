import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import {
  absoluteUrl,
  areaPages,
  areaSlugs,
  businessSlugs,
  businesses,
  photos,
  servicePages,
  serviceSlugs,
  site,
  type PhotoName,
} from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: a build date on every page says nothing about when its
  // content changed, and search engines learn to ignore it.
  const pages: (Pick<Entry, "changeFrequency" | "priority"> & {
    path: string;
    /** The photographs on the page, for image search */
    shows: PhotoName[];
  })[] = [
    {
      path: "/",
      changeFrequency: "monthly",
      priority: 1,
      shows: [
        "nybygge",
        ...businessSlugs.map((slug) => businesses[slug].photo),
        "team",
      ],
    },
    ...areaSlugs.map((slug) => ({
      path: `/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      shows: [
        areaPages[slug].heroPhoto,
        ...areaPages[slug].photos,
        areaPages[slug].processPhoto,
      ],
    })),
    ...serviceSlugs.map((service) => ({
      path: `/bygg/${service}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      shows: [servicePages[service].heroPhoto],
    })),
    {
      path: "/om-oss",
      changeFrequency: "monthly",
      priority: 0.7,
      shows: ["jobbstart", "team"],
    },
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.8, shows: [] },
    {
      path: "/integritetspolicy",
      changeFrequency: "yearly",
      priority: 0.2,
      shows: [],
    },
  ];

  // Every language version is listed, each naming all the others.
  return pages.flatMap(({ path, shows, ...rest }) => {
    const languages = Object.fromEntries([
      ...locales.map((locale) => [locale, absoluteUrl(locale, path)]),
      ["x-default", absoluteUrl(defaultLocale, path)],
    ]);
    const images = shows.map((photo) => `${site.url}${photos[photo].src}`);
    return locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      ...rest,
      alternates: { languages },
      ...(images.length ? { images } : {}),
    }));
  });
}
