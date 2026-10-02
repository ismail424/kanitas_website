import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "maskiner")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/maskiner" },
  ...ogMeta(
    area.seo.title,
    area.seo.description,
    "/maskiner",
    "/og-maskiner.jpg",
  ),
};

export default function MaskinerPage() {
  return <AreaPage area={area} />;
}
