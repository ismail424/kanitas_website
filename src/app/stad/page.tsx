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
      whyTitle="Bemanning och städning från någon som själv bygger"
      whyLead="Kanitas ENT sitter i samma koncern som ett byggbolag. Personalen vi hyr ut har jobbat på våra egna projekt, och städarna vet exakt vad en besiktning kräver. Därför blir det rätt första gången."
      whyPoints={[
        "Egen personal på kollektivavtal, inte inhyrd i flera led",
        "Yrkesarbetare på plats ofta inom ett dygn",
        "Specialister på byggstädning och slutstädning inför besiktning",
        "Samma team tillbaka på löpande uppdrag, inte nya ansikten varje vecka",
        "Vi står kvar tills besiktningen är godkänd",
        "Snabb inställelse i hela Storstockholm",
      ]}
      whyPhoto="ent-bemanning"
      secondaryPhoto="ent-stad"
    />
  );
}
