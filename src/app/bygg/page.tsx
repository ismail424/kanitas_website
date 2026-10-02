import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "bygg")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/bygg" },
  ...ogMeta(area.seo.title, area.seo.description, "/bygg", "/og-bygg.jpg"),
};

export default function ByggPage() {
  return <AreaPage area={area} />;
}
