import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "lokaler")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/lokaler" },
  ...ogMeta(
    area.seo.title,
    area.seo.description,
    "/lokaler",
    "/og-lokaler.jpg",
  ),
};

export default function LokalerPage() {
  return <AreaPage area={area} />;
}
