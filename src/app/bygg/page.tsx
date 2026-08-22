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
  return (
    <AreaPage
      area={area}
      whyTitle="Byggpartnern som de stora aktörerna litar på"
      whyLead="NCC, Implenia, Jiben och ByggPartner är några av företagen som anlitar oss – ett förtroende vi byggt upp genom att leverera, år efter år."
      whyPoints={[
        "AAA – högsta kreditvärdighet och stabil ekonomi",
        "Kollektivavtal med Byggnads och Fastighets",
        "Egen personal med lång erfarenhet – inte bara inhyrda team",
        "Totalansvar: bygg, mark, sanering och byggstädning i samma koncern",
        "Fast kontaktperson och tydlig kommunikation genom hela projektet",
      ]}
      whyImage={{
        src: "/images/photos/bygg-renovering.jpg",
        alt: "Pågående renovering och ombyggnation av lokal",
      }}
      secondaryImage={{
        src: "/images/photos/bygg-lager.jpg",
        alt: "Stor logistikhall med pallställ",
      }}
    />
  );
}
