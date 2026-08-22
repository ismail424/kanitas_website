import type { MetadataRoute } from "next";
import { areas, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static site: lastModified reflects the latest deploy, which is when
  // content can actually have changed.
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...areas.map((area) => ({
      url: `${site.url}/${area.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${site.url}/om-oss`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/kontakt`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
