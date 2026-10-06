import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areaTabTitle, areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "stad")!;
const title = areaTabTitle(area);

export const metadata: Metadata = {
  title: { absolute: title },
  description: area.seo.description,
  alternates: { canonical: "/stad" },
  ...ogMeta(title, area.seo.description, "/stad", "/og-stad.jpg"),
};

export default function StadPage() {
  return <AreaPage area={area} />;
}
