import type { MetadataRoute } from "next";
import { areas, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...areas.map((area) => ({
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
  ];
}
