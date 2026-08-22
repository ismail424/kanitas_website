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
  return (
    <AreaPage
      area={area}
      whyTitle="Städning med byggarens öga för detaljer"
      whyLead="Vi kommer från byggbranschen och vet exakt vad en besiktning kräver. Därför blir det rätt första gången – oavsett om det gäller ett byggprojekt eller ett kontor."
      whyPoints={[
        "Specialister på byggstädning och slutstädning inför besiktning",
        "Kollektivavtal och försäkrad personal",
        "Dokumenterad kvalitetsuppföljning på varje uppdrag",
        "Flexibla avtal – engångsuppdrag eller löpande städning",
        "Snabb inställelse i hela Storstockholm",
      ]}
      whyImage={{
        src: "/images/photos/stad-resultat.jpg",
        alt: "Skinande rent modernt kök efter städning",
      }}
      secondaryImage={{
        src: "/images/photos/stad-detalj.jpg",
        alt: "Noggrann rengöring av ytor",
      }}
    />
  );
}
