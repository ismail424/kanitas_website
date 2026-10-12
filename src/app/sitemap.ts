import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import { absoluteUrl, areaSlugs } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: a build date on every page says nothing about when its
  // content changed, and search engines learn to ignore it.
  const pages: (Pick<Entry, "changeFrequency" | "priority"> & {
    path: string;
  })[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    ...areaSlugs.map((slug) => ({
      path: `/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { path: "/om-oss", changeFrequency: "monthly", priority: 0.7 },
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.8 },
    { path: "/integritetspolicy", changeFrequency: "yearly", priority: 0.2 },
  ];

  // Every language version is listed, each naming all the others.
  return pages.flatMap(({ path, ...rest }) => {
    const languages = Object.fromEntries([
      ...locales.map((locale) => [locale, absoluteUrl(locale, path)]),
      ["x-default", absoluteUrl(defaultLocale, path)],
    ]);
    return locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      ...rest,
      alternates: { languages },
    }));
  });
}
