import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "bil")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/bil" },
  ...ogMeta(area.seo.title, area.seo.description, "/bil", "/og-bil.jpg"),
};

export default function BilPage() {
  return (
    <AreaPage
      area={area}
      whyTitle="En bilaffär du kan känna dig trygg i"
      whyLead="Kanitas Bil drivs av samma koncern som sedan 2011 byggt förtroende hos några av Sveriges största byggbolag. Samma ordning och reda gäller i varje bilaffär."
      whyPoints={[
        "Etablerad koncern med AAA-kreditvärdighet – ingen anonym handlare",
        "Genomgångna fordon med dokumenterad historik",
        "Snabb värdering och betalning när vi köper din bil",
        "Person- och transportbilar, lastbilar och arbetsmaskiner",
        "Hjälp med finansiering, inbyte och leverans",
      ]}
      whyImage={{
        src: "/images/photos/bil-personbil.jpg",
        alt: "Vit personbil på naturskön väg",
      }}
      secondaryImage={{
        src: "/images/photos/bil-transport.jpg",
        alt: "Lastbil på landsväg",
      }}
    />
  );
}
