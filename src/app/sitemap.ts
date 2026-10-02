import type { MetadataRoute } from "next";
import { areas, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: a build date on every page says nothing about when its
  // content changed, and search engines learn to ignore it.
  const activeAreas = areas.filter((area) => area.active);

  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...activeAreas.map((area) => ({
      url: `${site.url}/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${site.url}/om-oss`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/kontakt`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${site.url}/integritetspolicy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
