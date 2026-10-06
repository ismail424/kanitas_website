import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areaTabTitle, areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "bygg")!;
const title = areaTabTitle(area);

export const metadata: Metadata = {
  title: { absolute: title },
  description: area.seo.description,
  alternates: { canonical: "/bygg" },
  ...ogMeta(title, area.seo.description, "/bygg", "/og-bygg.jpg"),
};

export default function ByggPage() {
  return <AreaPage area={area} />;
}
