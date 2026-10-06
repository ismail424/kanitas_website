import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areaTabTitle, areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "maskiner")!;
const title = areaTabTitle(area);

export const metadata: Metadata = {
  title: { absolute: title },
  description: area.seo.description,
  alternates: { canonical: "/maskiner" },
  ...ogMeta(title, area.seo.description, "/maskiner", "/og-maskiner.jpg"),
};

export default function MaskinerPage() {
  return <AreaPage area={area} />;
}
