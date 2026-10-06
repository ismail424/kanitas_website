import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areaTabTitle, areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "lokaler")!;
const title = areaTabTitle(area);

export const metadata: Metadata = {
  title: { absolute: title },
  description: area.seo.description,
  alternates: { canonical: "/lokaler" },
  ...ogMeta(title, area.seo.description, "/lokaler", "/og-lokaler.jpg"),
};

export default function LokalerPage() {
  return <AreaPage area={area} />;
}
