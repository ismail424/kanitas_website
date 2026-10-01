import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "stad")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/stad" },
  ...ogMeta(area.seo.title, area.seo.description, "/stad", "/og-stad.jpg"),
};

export default function StadPage() {
  return <AreaPage area={area} />;
}
